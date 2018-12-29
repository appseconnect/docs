---
title: "Steps to define Static and dynamic criterias for an API"
toc: true
tag: developers
category: "API-Management"
weight: 6
menus: 
    quickstartapi:
        icon: fa fa-gg
        category: "Quickstart"
        title: "AssignParameters to Action Filter API"
        identifier: assignparameter-actionfilter
---

This Document provides the details and the functionality aspect of the API components to define static and dynamic criterias for an API 
along with the brief demonstration about it. Here you will find the overview and steps needed to carry out this API component.


**Understanding Action Filters**

An action filter is an attribute that you can apply to a controller action -- or an entire controller -- 
which changes the way in which the action is executed. 

* AEC API includes filters to add logic before or after action method executes. 
* Filters can be used to provide cross-cutting features such as logging, 
  performance measurement,exception handling, authentication and authorization.

* An action filter is an attribute which can be applied most to either an individual controller
  action or an entire controller.


**Enabling Query Options based on OData**

Web API supports the following OData query options:

|Option|Description|
|---|---|
|$select|Selects which properties to include in the response.|
|$filter|Filters the results based on a Boolean condition.|
|$skip|Skips the first n results.|
|$top|Returns only the first n the results.|
|$orderby|Sorts the results|


## Pre-requisites for Assigning Parameter to Action Filter

1. Need to have access to the APPSeCONNECT Portal.
2. Valid Credentials for the APPSeCONNECT Portal.
3. The Application should be cloud supported. OLE DB is the only application that is being supported now.
4. Schema needs to be defined with proper Actions (GET, PUT, POST, FILTER). 
5. API Proxy needs to be Created. Steps for creating API Proxy is given [here](). A valid API URL is required.

## Steps to define Static and dynamic criterias for an API

You can define action parameters for anvarious opertaions of an API. Presently AEC API Management provides 
assigning parameters to the following operations - GET, PUT, POST & DELETE.

### Using Action Filter & Action Parameters for GET operation

1.  In the APP section in the AEC Portal click on Schema for defining the Action (GET Operation).  
![ActionFilter-ActionParameter](/staticfiles/api-management/media/ActionFilter-ActionParameter.png)
2.  The Action is now created. Provide the Action Filter against the Action by clicking on the Edit Option
    (in this case its only GET Operation)  
![ActionFilter-ActionParameter1](/staticfiles/api-management/media/ActionFilter-ActionParameter1.png)  
![ActionFilter-ActionParameter2](/staticfiles/api-management/media/ActionFilter-ActionParameter2.png)

3. Click on SAVE.

**NOTE:** The action filter is provided only for the GET Operation for fetching the data from the source Application. 
This is also called as the Static Filters.

### Using Action Parameters for PUT Operation

1. After defining the API Proxy with valid credentials against your database, copy the generated URL for the PUT operation.
2. Select the Operation as PUT in the POSTMAN Environment.
![ActionParameter-PutOperation1](/staticfiles/api-management/media/ActionParameter-PutOperation1.png)
3. Place the URL in POSTMAN Development Environment.
![ActionParameter- PutOperation2](/staticfiles/api-management/media/ActionParameter-PutOperation2.png)


**Note:** Any API Development Environment can be used for this process.

4. Authorize your Postman with the generated authentication id from the AEC Portal in the API section.

![ActionParameter- PutOperation3](/staticfiles/api-management/media/ActionParameter-PutOperation3.png)

**Note:** Once Authorized for an API the user does not have to authorize again except for the cases for Multiple API's.

![ActionParameter-PutOperation4](/staticfiles/api-management/media/ActionParameter-PutOperation4.png)

5. Click on the Send option for running the Query Param.


### Using Action Parameter for the POST Operation

1. Copy the generated Proxy URL for the POST operation. Select the operation as POST in the Postman window.
![ActionParameter- PostOperation1](/staticfiles/api-management/media/ActionParameter-PostOperation1.png)
2. Place the URL in the POSTMAN along with the Query Params and click SEND.
3. You can view the Results against the provided Parameter.
![ActionParameter- PostOperation2](/staticfiles/api-management/media/ActionParameter-PostOperation2.png)

### Using Action Parameter for the DELETE Operation

1. Like Other operations, the URL generated for the DELETE operation needs to be dropped in the POSTMAN.
2. Select the operation as DELETE.
![ActionParameter-DeleteOperation1](/staticfiles/api-management/media/ActionParameter-DeleteOperation1.png)
3. Provide the Query Params and click on SEND.
![ActionParameter-DeleteOperation2](/staticfiles/api-management/media/ActionParameter-DeleteOperation2.png)

**Note:** Applying the DELETE Operation will delete the data from the database corresponding to the Query Param.
