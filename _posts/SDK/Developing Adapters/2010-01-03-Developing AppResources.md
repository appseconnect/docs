---
title: "Developing APPResource Methods"
toc: true
tag: developers
category: "SDK"
menus:
    overviewsdkadapter: 
        icon: fa fa-gg
        weight: 3
        title: "Develop appresources"
        identifier: developappresource    
---
Application resources are special methods that can be added on the adapter code using the interface [`IAppResources`](http://isdn.appseconnect.com/html/10297E4C.htm) which can 
be referenced in mapping or else in filters. An AppResource interface receives the `ApplicationContext` during its 
initialization, which helps to invoke various methods on SDK or even call native methods directly from 
adapter code. 

Let us look at how the [`IAppResource`](http://isdn.appseconnect.com/html/3C4C3144.htm) class looks like : 

```csharp
 public class AppResource : IAppResource
{

    private ApplicationContext _context;
    private CredentialModel CredentialObject { get; set; }

    /// <summary>
    /// Default Constructor called by Agent. It will call Initialize to pass Application context
    /// </summary>
    /// <remarks>Do not use this method while creating object of AppResource inside the adapter, as you will find ApplicationContext to null</remarks>
    public AppResource() { }

    # region IAppResource Implementation
    public void Initialize(ApplicationContext context)
    {
        // first step is to try and get the Credential. If succesful, we store it in object cache, so that every function does not need to get it.
        var credential = context.ApplicationUtility.CredentialStore.GetConnectionDetails();

        if (credential.Status) // this indicates that credentails are already saved in configuration, and we can get its value
            this.CredentialObject = ObjectUtils.JsonDeserialize<CredentialModel>(credential.Value);

        //We store the context for future use.
        this._context = context;
    }

    # endregion
}
```

Here in the above code, you can see the AppResource class has an Initialize method which will be invoked from the application, 
the object [`ApplicationContext`](http://isdn.appseconnect.com/html/10297E4C.htm) received by the adapter can be used to invoke various functionalities of APPSeCONNECT. 

Let us look at a sample implementation of an AppResource method. 

```csharp
/// <summary>
/// Get customer address from Bigcommerce
/// </summary>
/// <param name="id">Customer is for which data will be fetched</param>
/// <returns>Address data for a particular customer</returns>
public XPathNavigator GetCustomerAddress(string id)
{
    XmlDocument soapEnvelopeSession = new XmlDocument();
    XElement elemment = null;
    string responseData = string.Empty;
    try
    {

        string addressurl = string.Concat("customers/", id, "/addresses.xml");
        ReturnMessage<bool> response = CallAPI(addressurl);
        if (response.Value == false || string.IsNullOrEmpty(response.Message))
        {
            responseData = "<addresses></addresses>";
        }
        else
        {
            responseData = response.Message;
        }
        soapEnvelopeSession.LoadXml(responseData);
        string str = soapEnvelopeSession.InnerXml;
        elemment = XElement.Parse(str);
    }
    catch (Exception ex)
    {
        this._context.Logger.ErrorLog(ex);
    }

    return elemment.CreateNavigator();
}
```

The method `GetCustomerAddress` is specially designed to invoke `\customers` API such that when required the 
mapping can invoke the method to dynamically invoke a separate API while transformation. You can see the 
return type of the method is `XPathNavigator`. As the method can be used directly from Mapping the allowed method 
return types are as under : 

- [XPathNavigator](https://docs.microsoft.com/en-us/dotnet/api/system.xml.xpath.xpathnavigator?view=netframework-4.7.2)
- [XPathNodeIterator](https://docs.microsoft.com/en-us/dotnet/api/system.xml.xpath.xpathnodeiterator?view=netframework-4.7.2)
- [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)

The `CallAPI` method is used to execute an API to the application.

Once the method is returning a value, you can put the data in a variable on mapping section and iterate the data over. 

**Note : Do not call save credential from app resource file.**