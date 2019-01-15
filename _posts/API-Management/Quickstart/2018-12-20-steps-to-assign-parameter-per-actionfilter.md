---
title: "Using parameters to an API"
toc: true
tag: developers
category: "API-Management"
menus: 
    quickstartapi:
        icon: fa fa-gg
        weight: 6
        category: "Quickstart"
        title: "Using parameters to an API"
        identifier: assignparameter-actionfilter
---

This Document provides the details and the functionality aspect of the API components to define static and dynamic criterias for an API 
along with the brief demonstration about it. Here you will find the overview and steps needed to carry out this API component.


## Understanding Action Filters

An action filter is an attribute that you can apply to a controller action -- or an entire controller -- 
which changes the way in which the action is executed. 

* AEC API includes filters to add logic before or after action method executes. 
* Filters can be used to provide cross-cutting features such as logging, 
  performance measurement,exception handling, authentication and authorization.

* An action filter is an attribute which can be applied most to either an individual controller
  action or an entire controller.


## Enabling Query Options 

Web API supports the following query options:

|Option|Description|
|---|---|
|$select|Selects which properties to include in the response.|
|$filter|Filters the results based on a Boolean condition.|
|$skip|Skips the first n results.|
|$top|Returns only the first n the results.|
|$orderby|Sorts the results|

**Protip:** Microsoft SQL Server uses some reserved words for defining, manipulating and accessing databases. 
If Table Names in SQL Queries or any other object Name in SQL Queries are equivalent to these reserved words, the resultant value might be an error. 
In such cases, the object names those are equivalent should be written in 2nd brackets or '{}'. 
All the Reserved Words that are used in SQL is given in this [link](https://docs.microsoft.com/en-us/sql/t-sql/language-elements/reserved-keywords-transact-sql?view=sql-server-2017).
{: .notice--info}


## Pre-requisites for Assigning Parameter to Action Filter

1. Need to have access to the APPSeCONNECT Portal.
2. Valid Credentials for the APPSeCONNECT Portal.
3. The Application should be cloud supported. For any application, if you have configured an endpoint, these filter criteria would work only if the backend application supports them.
4. Schema needs to be defined with proper Actions (GET, PUT, POST, FILTER). 
5. API Proxy needs to be Created. Steps for creating API Proxy is given [here](/api-management/steps-to-create-proxy-endpoint/). A valid API URL is required.

## Steps to define Static and dynamic criterias for an API

You can define action parameters for various operations of an API. Presently AEC API Management provides 
assigning parameters to the following operations - `GET, PUT, POST & DELETE`.

## Using Action Filter & Action Parameters for GET operation

1.  In the APP section in the AEC Portal click on Schema for defining the Action (GET Operation).  
![ActionFilter-ActionParameter](/staticfiles/api-management/media/ActionFilter-ActionParameter.png)
2.  The Action is now created. Provide the Action Filter against the Action by clicking on the Edit Option
    (in this case its only GET Operation)  
![ActionFilter-ActionParameter1](/staticfiles/api-management/media/ActionFilter-ActionParameter1.png)  
![ActionFilter-ActionParameter2](/staticfiles/api-management/media/ActionFilter-ActionParameter2.png)

3. Click on SAVE.

**NOTE:The action filter is provided only for the GET Operation for fetching the data from the source Application. 
This is also called as the Static Filters**

**Protip:** The user can add mutliple operation under a single API Proxy or can create seperate operation for different API
as per the business requirement.
{: .notice--info}

## Using Action Parameter for SKIP and OrderBy for GET Operation

**Using Skip**

As a Prerequisite, Schema Attributes need to be set as Primary in the Portal. The pathway for enabling attribute as Primary is. 

Login to the Portal - Go to APP section - Go to Schema of the APP - View Attributes.

![SKIP-PrimaryKey-Enabled](/staticfiles/api-management/media/SKIP-PrimaryKey-Enabled.png)  

**Note: Making the `Attribute Primary` is Mandatory for the $skip operation.**

1. Define the API Proxy with valid credentials [steps to do the same](/connectors/OLEDB-Credentials/), copy the generated URL for the GET operation.
2. Select the Operation as GET in the HTTP Client Environment.
3. Place the URL with the Query Parameter in the HTTP Client Environment.
![SKIPQuery-Postman](/staticfiles/api-management/media/SKIPQuery-Postman.png)  
4. Authorize your HTTP Client with the generated [authentication id](/api-management/Steps-to-user-authentication/) from the AEC Portal in the API section.
5. Click on the Send option for running the Query Param. The data can be viewed below.
![SKIPQuery-PostmanOutput](/staticfiles/api-management/media/SKIPQuery-PostmanOutput.png)  

In the above screen, $skip = 25 signifies that the first 25 data which will be skipped, according to the attribute that is marked as Primary.

**Using Skip with OrderBy**

1. Define the API Proxy with valid credentials [steps to do the same](/connectors/OLEDB-Credentials/), copy the generated URL for the GET operation.
2. Select the Operation as GET in the HTTP Client Environment.
3. Place the URL with the Query Parameter in the HTTP Client Environment.
![SKIPQuery-OderBy](/staticfiles/api-management/media/SKIPQuery-OderBy.png)  
4. Authorize your HTTP Clientwith the generated [authentication id](/api-management/Steps-to-user-authentication/) from the AEC Portal in the API section.
5. Click on the Send option for running the Query Param. The data can be viewed below.
![SKIPQuery-OderByOutput](/staticfiles/api-management/media/SKIPQuery-OderByOutput.png)  

In the above screen, $skip=25&Orderby eq 'city' signifies that the first 25 data(s) will be skipped according 
to the Orderby condition that is City.

**Protip:** If the attribute is primary enabled and also OrderBy is used, the Skip Operation will use 
the ORDERBY condition for its process. 
{: .notice--info}

## Using Action Parameters for PUT Operation

1. After defining the API Proxy with valid credentials against your database, copy the generated URL for the PUT operation.
2. Select the Operation as PUT in the HTTP Client Environment. 
![ActionParameter-PutOperation1](/staticfiles/api-management/media/ActionParameter-PutOperation1.png)
3. Place the URL in HTTP Client  Development Environment.   
![ActionParameter-PutOperation2](/staticfiles/api-management/media/ActionParameter-PutOperation2.png)  
4. Authorize your HTTP Client with the generated authentication id from the AEC Portal in the API section.
![ActionParameter-PutOperation3](/staticfiles/api-management/media/ActionParameter-PutOperation3.png)   
5. Click on the Send option for running the Query Param.
![ActionParameter-PutOperation4](/staticfiles/api-management/media/ActionParameter-PutOperation4.png)


**Note:Any API Development Environment can be used for this process. Once Authorized for an 
API the user does not have to authorize again except for the cases for Multiple API's**


## Using Action Parameter for the POST Operation

1. Copy the generated Proxy URL for the POST operation. Select the operation as POST in the HTTP Client window.  
![ActionParameter-PostOperation1](/staticfiles/api-management/media/ActionParameter-PostOperation1.png)  
2. Place the URL in the HTTP Client along with the Query Params and click SEND.
3. You can view the Results against the provided Parameter.  
![ActionParameter-PostOperation2](/staticfiles/api-management/media/ActionParameter-PostOperation2.png)

## Using Action Parameter for the DELETE Operation

1. Like Other operations, the URL generated for the DELETE operation needs to be dropped in the HTTP Client.
2. Select the operation as DELETE.
![ActionParameter-DeleteOperation1](/staticfiles/api-management/media/ActionParameter-DeleteOperation1.png)
3. Provide the Query Params and click on SEND.    
![ActionParameter-DeleteOperation2](/staticfiles/api-management/media/ActionParameter-DeleteOperation2.png)

**Note: Applying the DELETE Operation will delete the data from the database corresponding to the Query Param.**
