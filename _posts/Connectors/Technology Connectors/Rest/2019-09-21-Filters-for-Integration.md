---
title: "Using Filters for Integration"
toc: true
tag: developers
category: "Connectors"
weight: 6
menus: 
    resttechnology:
        icon: fa fa-gg
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
3) [Create Touchpoints](/getting-started/#steps-to-create-an-organisational-touchpoint) for the required connection  .

**Note: If you have taken Pre-packaged apps and its connection templates, Touchpoints will also come pre-packaged**

## Defining Action Filters 

### For GET Operation

The GET Operation is for fetching data from REST. Use GET requests to retrieve resource information only – and not to modify 
it in any way. 

As GET requests do not change the state of the resource, these are said to be safe methods. Additionally, GET APIs should fetch 
multiple identical requests and produce the same result every time until another API (POST or PUT) 
has changed the state of the resource on the server.

[Login to the Portal](https://docs.appseconnect.com/).

1 Go to the App Section and choose [Create the Technology App](/getting-started/#b-technology-app-creation) for creating REST based Application.

2 Now go to the workflow section, [Create Workflow](/workflow/steps-to-create-your-first-workflow/) and you can [Create Touchpoints](/getting-started/#steps-to-create-an-organisational-touchpoint) directly 
from  the workflow workarea itself for REST based application.

![rest-getnode-workflow](/staticfiles/connectors/media/technology-connector/rest-getnode-workflow.png) 

3 Here you have to define action filters for the REST based connection by clicking on the node (GET) of the workflow. 
  View the right side panel and click `Action` button. The following screen appears. 

![rest_get_actionfilter](/staticfiles/connectors/media/technology-connector/rest_get_actionfilter.png) 

Here Lightspeed app has been taken and it supports OAuth 2.0 for Rest Protocol. hence you need to define both `Header` and `Parameter` here

**NOTE: Defining Header and Parameter Varies from application to application. Some app might need both, some might just need Header/parameter**

![rest_get_actionfilter2](/staticfiles/connectors/media/technology-connector/rest_get_actionfilter2.png) 

Click on the Action Filter Tab, to define the action for the GET node.

* Endpoint - Each endpoint is the location from which APIs can access the resources they need to carry out their function.This is a mandatory field, enter the endpoint 
* Decsription - This field enables you to decsribe the endpoints. This is a mandatory field, enter the description
* HTTP Method - The HTTP verbs comprise a major portion of our `uniform interface` constraint and provide us the action counterpart to the noun-based resource. Here you need to select `GET` from the drop down list 
  for executing the GET Operation.
* Content Type - The Content-Type entity header is used to indicate the media type of the resource. In responses, a Content-Type header tells the client what the 
  content type of the returned content actually isSelect from the drop down list. This is of  two types `application/xml` and `application/json`
* Header - The Content-Type header describes the format the body of your request is being sent as. 
  For example, the body of your requests can be sent as JSON or XML, but you need to declare in the Content-Type header which one is being used.
  Header has two section, insert the header type and header values here. Add button enables to add more header fields, if required. 
* Parameter - The rest parameter syntax allows us to represent an indefinite number of arguments as an array. 
  With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined.
  Parameter has two section, insert the parameter type and parameter values here. Add button enables to add more parameter fields, if required. 
* Response Type - Not Applicable here. 
* Body - Not Applicable here.

Now you have successfully defined the action filter for `GET Operation` supporting REST protocol.

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

Here in the example, the relationship between key and value is `>`, the 
value for key is `createTime>~{ReadDate('yyyy-MM-ddTHH:mm:ssK','0')}~`

![rest-resync-filter-parameters](/staticfiles/connectors/media/technology-connector/rest-resync-filter-parameters.png)   

**Note: For any XML & JSON extension in the endpoint name, use $ before the extension while inserting the key, e.g:`customers/$.xml`**

### For POST Operation

The POST Operation is for adding data to REST. The configuration for the POST is to be done in the Schema level of the REST Application. 
The steps for configuring POST in Schema level is given below:

1. Go to the workflow section, [Create Workflow](/workflow/steps-to-create-your-first-workflow/) and you can [Create Touchpoints](/getting-started/#steps-to-create-an-organisational-touchpoint) directly 
from  the workflow workarea itself for REST based application.

![rest_post_actionfilter](/staticfiles/connectors/media/technology-connector/rest_post_actionfilter.png) 

3 Here you have to define action filters for the REST based connection by clicking on the node (POST) of the workflow. 
  View the right side panel and click `Action` button. The following screen appears. 

![rest_post_actionfilter2](/staticfiles/connectors/media/technology-connector/rest_post_actionfilter2.png) 

Enter all the required field like - Endpoint, Description, HTTP Method, Content type and Header value for the Post Operation.
The HTTP Method willbe `POST` here.

The above steps complete the process of defining filters for integration in REST.
















