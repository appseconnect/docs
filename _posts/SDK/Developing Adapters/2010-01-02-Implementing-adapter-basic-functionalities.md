---
title: "Implementing Adapter basic functionality viz, Pull, Push & Resync"
toc: true
tag: developers
category: "SDK"
menus:
    overviewsdkadapter: 
        icon: fa fa-gg
        title: "Basic Implementation"
        identifier: developadapterbasic    
---
It is evident that implementating adapter requires extensive knowledge about the API which you want to connect to, 
such that you can clearly implement and optimize the calls made to the APIs. As a developer you can implement 
the adapter in such a way, so that the data is perfectly transferred from one application to another without compormising
performance and also giving most of the flexibility for cloud integrations. 

## Implementing the IAdapter interface

An `IAdapter` interface is a hook to specify the code which will run to fetch or push data to and from from the application. 
The main method that needs to be implemented while implementing IAdapter is the Execute, which provides you with 
`OperationType` which lets you specify code that needs to be implemented to invoke Request to the application. 

### Implementing GET :
The Credential received by the interface will allow you to create the request body so as to create a communication with the end 
application. Let us look at the code below : 

```csharp

private ReturnMessage<string> ExecuteGetOperation(ExecutionSettings settings)
{
    var returnMessage = new ReturnMessage<string>();
    var returnAPIData = new ReturnMessage<bool>();

    var logger = this._context.Logger; // Gets a logger instance
    logger.StatusLog("Trying to pull data from application", "Inside Adapter GET");

    string responseData = string.Empty;
    string requestData = string.Empty;
    try
    {

        var credentials = this._context.GetConnectionDetails<CredentialModel>();
        WebServicesUtility interactAPI = new WebServicesUtility();
      
        var commandProcessor = settings.GetCommandProcessor(Protocol.REST);
        requestData = commandProcessor.PrepareCommand();
       
        if (settings.CalledFrom != CallerType.ReSync) //Represents a normal call
        {
            returnAPIData = interactAPI.InteractGetByPage(requestData, credentials, settings.EntityName);
            if (!returnAPIData.Value)
            {
                returnMessage.SetError(returnAPIData.Message);
            }
            else
            {
                AssignPrimaryKeys(settings, returnAPIData, credentials);
                returnMessage.SetSuccess("Data fetched successfully from Bigcommerce", returnAPIData.Message);
                resource.WriteMaxCreateDate(returnAPIData.Message, "date_created", settings.EntityName);
            }
        }
        
    }

    catch (WebException ex)
    {
        returnMessage.AddException(ex);
        returnMessage.SetError(ex.Message);
    }
    catch (Exception ex)
    {
        returnMessage.AddException(ex);
    }

    return returnMessage;
}

```

In the above code you can see an implementation of adapter GET method. This piece of code will be executed when a workflow
encounters a Get method. If you properly inspect the method, you can see, that the method receives an ExecutionSettings and also 
it uses `_context` to get various data from APPSeCONNECT. The `_context` object is an object that lets you get objects 
application wide. This object does not change between calls to the method and also represents the contextual reference of the 
process on the application. 

The line `this._context.Logger` gets the logger class, which helps you to write debug, status or information over [APPSeCONNECT 
logging system](). 

The next important consideration is the Credential object. You can call `this._context.GetConnectionDetails` to retrieve the 
credentials which is used to connect to the application. Remember, the credentials are generally put by the customer on the local 
or cloud agent, and you need a model created as a class inside the project to access the deserialzied version of the object. 

**protip**: You can also manually read / write json statements, using the overload `GetConnectionDetails` but it is always 
preferrable to have a model class.

The `settings.GetCommandProcessor(Protocol.REST)`allows the user to get an url generated from the Action filters 
put in APPSeCONNECT cloud. We specifically generate the action filter parsers for REST and or SOAP requests, so if it does not 
suit your need, you can easily [create an ActionFilter parser yourself]().

 Finally, the `interactAPI.InteractGetByPage` is an individual request to the application which helps in getting data from the application. 
Once you get the data, you can assign keys to the Resync Bucket, such that the data that is been retrieved could be properly tracked by the 
application. If you have defined Primary Keys for the schema in use, the data will be automatically created for you from 
APPSeCONNECT. 

Once you retrieve the document correctly, you can pass the document to APPSeCONNECT using `returnMessage.SetSuccess` method.
Remember, you should always communicate with APPSeCONNECT in XML data formats, so if the format is something else, like JSON or 
CSV etc., you need to convert it to XML before passing it to APPSeCONNECT. 

### Implementing Post :

Unlike GET, POST will receive the transformed response in the adapter using our SDK, which one needs to push directly 
to the application and set the response to appseconnect back.  Let us look at the code below : 

```csharp

private ReturnMessage<string> ExecutePostOperation(ExecutionSettings settings)
{
    var returnMessage = new ReturnMessage<string>();
    var logger = this._context.ApplicationUtility.Logger;
    string entityName = settings.EntityName; //returns the main entity name
    string actionName = settings.ActionName; //returns the main action name
    var credential = this._context.GetConnectionDetails<CredentialModel>();

    string responseData = string.Empty;
    logger.StatusLog("Trying to push data from application", "Inside Adapter POST");
    WebServicesUtility interactAPI = new WebServicesUtility();
    var requestData = settings.TransformedResponse;

    IEnumerable<XElement> elements = XElement.Parse(requestData).Elements();
    XmlDocument nodes = new XmlDocument();
    nodes.LoadXml(requestData);
    var envelopesNode = nodes["Envelops"];
    if (envelopesNode == null)
    {
        logger.StatusLog("No data found to push in Bigcommerce");
        returnMessage.SetSuccess("No data found to push in Bigcommerce");
        return returnMessage;
    }
    var outputs = new XElement("Envelopes");
    var dataIndex = 0;
    foreach (XElement element in elements)
    {
        string destinationKey = "successfully";
        var httpResponse = interactAPI.InteractPush(element.ToString(), actionName, credential, settings, returnMessage);
        try
        {
            if (httpResponse.Message != null)
            { 
                outputs.Add(XElement.Parse(httpResponse.Message));
            }
            else
            {
                logger.ErrorLog("Failed to Push in BigCommerce");
                settings.AssignErrorEntity(dataIndex, "", "");
            }
        }
        catch (Exception ex)
        {
            logger.ErrorLog("Exception Occured at parsing response", ex.Message);
            settings.AssignErrorEntity(dataIndex, "", "");
        }
        dataIndex++;

    }
    returnMessage.Value = string.Concat(outputs);
    logger.InfoLog("Data push operation completed successfully", "Push operation completed");
    returnMessage.SetSuccess("Data push operation completed successfully");

    return returnMessage;

}

```
If you inspect the code above, similar to the one in GET, the POST API also receives the ApplicationContext as well as ExecutionSettings inside it. 
You can clearly get Credential again using the same API, and use the same to communicate with the application. Once you receive the credential, you can use
`settings.TransformedResponse` to get the XML generated from APPSeCONNECT, which you need to push to the Application and get response.
In the above code, you can see the API does not support a batch operation, and hence the request is being split in chunks 
and each xml is requested separately. 

The output of the response is returned back using `returnMessage.SetSuccess` which can be used in the workflow for future use. 

## Handling Resync Data

Resync in case of APPSeCONNECT are special data mentioned through adapter, which are required to resync an errornous data from the application itself. As 
an adapter developer, you need to take care of Resync while implementing the adapter code. In case of Resync call, an individual 
request is made to the application (generally using the primary key field) and the data is then retrieved or resynced using the 
request structure. Let us see how the resync code looks like : 

```csharp
foreach (var entity in settings.EntityData)
{
    commandProcessor = settings.GetCommandProcessor(Protocol.REST);
    requestData = commandProcessor.PrepareCommand();
    string entityCode = entity.SourceCode;
    requestData = requestData.TrimEnd('?');
    requestData = string.Concat(requestData, "/", entityCode);
    returnAPIData = interactAPI.InteractGet(requestData, credentials, settings.EntityName);
}
returnMessage.SetSuccess("Records pulled for resync entities ", returnAPIData.Message);
```
Here in case of the code above, the resync data is sent using the object `settings.EntityData`. You can loop through the 
data blocks to execute the resync. You can see, the InteractGet is called here to resync the requestData passed in from 
APPSeCONNECT. In case of POST request as well, you can use the settings.TransformedResponse to resync the data. To detect whether 
the call to an adapter is for Resync or normal call, you can use the property `settings.CalledFrom`.
