---
title: "Using Filters for Integration"
toc: true
tag: developers
category: "Connectors"
menus: 
    resttechnology:
        icon: fa fa-gg
        weight: 10
        category: "Using Filters for Integration"
        title: "Using Filters for Integration"
        identifier: restfilters
---
Users can define Filters for integration scenario as per business requirements for the GET, POST and PUT operation for REST based application. 
This section of the document provide details of these filters and steps on how to initialize these filters.

## Pre-requisites
Require Valid APPSeCONNECT account.  
1) Create REST based Connection & validate the connection either for [Basic](/connectors/BasicAuthentication/) or [OAuth2.0](/connectors/OAuth2.0/)
2) [Create Workflow](/workflow/steps-to-create-your-first-workflow/)  
3) [Create Touchpoints](/getting%20started/configurations-for-integration/#creating-organisation-touchpoint-workflow) for the required connection  .

**Note: If you have taken Pre-packaged apps and its connection templates, Touchpoints will also come pre-packaged**

## Defining Action Filters 

### For GET Operation

The GET Operation is for fetching data from REST. Use GET requests to retrieve resource information only – and not to modify 
it in any way. 

As GET requests do not change the state of the resource, these are said to be safe methods. Additionally, GET APIs should fetch 
multiple identical requests and produce the same result every time until another API (POST or PUT) 
has changed the state of the resource on the server.

[Login to the Portal](/getting%20started/user-registration-license/).

1 Go to the App Section and choose [Create the Technology App](/configuring%20appseconnect/configurations/) for creating REST based Application.

2 Now go to the workflow section, [Create Workflow](/workflow/steps-to-create-your-first-workflow/) and you can [Create Touchpoints](/getting%20started/configurations-for-integration/#creating-organisation-touchpoint-workflow) directly 
from  the workflow workarea itself for REST based application.

![rest-getnode-workflow](/staticfiles/connectors/media/technology-connector/rest-getnode-workflow.png) 

3 Here you have to define action filters for the REST based connection by clicking on the `GET` node of the workflow. 
  View the right side panel and click `Filter` button. The following screen appears. 

![rest_get_actionfilter](/staticfiles/connectors/media/technology-connector/rest_get_actionfilter.png) 

Here Lightspeed app has been taken and it supports OAuth 2.0 for Rest Protocol. hence you need to define both `Header` and `Parameter` here

**NOTE: Defining Header and Parameter Varies from application to application. Some app might need both, some might just need Header/parameter**


**Scenario description for Action filters for REST integration** 

A complete URL in form of API is called for fetching the data from Source applications. The URL is nothing but acts as the target location 
from which the data is needed to be fetched.

Sample URL: 

![rest_get_actionfilter_url](/staticfiles/connectors/media/technology-connector/rest_get_actionfilter_url.png) 

This URL consists of three parts:  
a) The Base URL : This is the basic URL of the application from where the data are fetched. This remains constant when used for any modules within the application.    
b) EndPoint: Endpoint is the location that defines the module from where the data are fetched     
c) Action Filter/Parameter: This is the parameter provided against the endpoint that defines which data are needed to be fetched.    

Therefore, when defining the action and the action filter in APPSeCONNECT Portal, it is recommended to execute the URL in your 
API development & testing platform. This provides the exact identification of the Action and the Action parameters.

In the Sample URL provided the URL breakup would be as:

1.	Base URL: https://api.lightspeed.com	
2.	End Point: item
3.	Action Parameter/Filter: createTime=> ~{ReadDate('yyyy-MM-ddTHH:mm:ssK','0')}~

![rest_get_actionfilter2](/staticfiles/connectors/media/technology-connector/rest_get_actionfilter2.png) 

Click on the Action Filter Tab, to define the action for the GET node.

* Endpoint - Each endpoint is the location from which APIs can access the resources from the respective module of the application.This is a mandatory field, enter the endpoint 
* Description - This field enables you to decsribe the endpoints. This is a mandatory field, enter the description
* HTTP Method - The HTTP verbs comprise a major portion of our `uniform interface` constraint and provide us the action counterpart to the noun-based resource. Here you need to select `GET` from the drop down list 
  for executing the GET Operation.
* Content Type - The Content-Type entity header is used to indicate the media type of the resource. In responses, a Content-Type header tells the client what the 
  content type of the returned content actually isSelect from the drop down list. This is of  two types `application/xml` and `application/json`
* Header - Use the headers to provide information about the entity or other resource that you are requesting. Each app has its own REST API supports its own set of  HTTP headers.
  Header has two section, insert the header type and header values here. Add button enables to add more header fields, if required. 
* Parameter - The rest parameter syntax allows us to represent an indefinite number of arguments as an array. 
  With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined.
  Parameter has two section, insert the parameter type and parameter values here. Add button enables to add more parameter fields, if required. 
* Response Map - Not Applicable here. 
* Body - Not Applicable here.

Now you have successfully defined the action filter for `GET Operation` supporting REST protocol.

Here in the example, the relationship between key and value is `>`, the 
value for key is `createTime>~{ReadDate('yyyy-MM-ddTHH:mm:ssK','0')}~`

![rest-resync-filter-parameters](/staticfiles/connectors/media/technology-connector/rest-resync-filter-parameters.png)   

**Note: For any XML & JSON extension in the endpoint name, use $ before the extension while inserting the key, e.g:`customers/$.xml`**

**Note: (A) This scenario has been explained taking the application Lightspeed.
        (B) The time span a generic format for APPSeCONNECT, and has been detailed above in this document.**


## Defining Error Filters for Get Operation

Error filters are defined in GET Operations to resync any failed data during integration.

1. Click resync filter, option to define error filter for GET Operation.
2. The following screen appears
![rest_get_errorfilter](/staticfiles/connectors/media/technology-connector/rest_get_errorfilter.png)   
3. Select the HTTP method as - GET & Content Type - application/xml
3. Now Go to the `Resource Path` option under Rest Schema to define the Error Filter as shown in the screen given below
4. Enter the Key - This is the combination of the `endpoint name` and `$` which is the Record ID.
5. Value field remains empty.
6. Click Save once done.

Under the parameter section, the value for `key` is available in respective application of API doccumentation. 
If the relationship between key and value is not `=`, then the `value` must be declared in the `key`
section itself and the `value` must be kept blank.

### For POST Operation

The POST Operation is for adding data to REST. The configuration for the POST is to be done in the Schema level of the REST Application. 
The steps for configuring POST in Schema level is given below:

1. Go to the workflow section, [Create Workflow](/workflow/steps-to-create-your-first-workflow/) and you can [Create Touchpoints](/getting%20started/configurations-for-integration/#creating-organisation-touchpoint-workflow) directly 
from  the workflow workarea itself for REST based application.

![rest_post_actionfilter](/staticfiles/connectors/media/technology-connector/rest_post_actionfilter.png) 

3 Here you have to define action filters for the REST based connection by clicking on the node (POST) of the workflow. 
  View the right side panel and click `Action` button. The following screen appears. 

![rest_post_actionfilter2](/staticfiles/connectors/media/technology-connector/rest_post_actionfilter2.png) 

Enter all the required field like - Endpoint, Description, HTTP Method, Content type and Header value for the Post Operation.
The HTTP Method willbe `POST` here.

The above steps complete the process of defining filters for integration in REST.
















