---
title: "SAP Business One Service Layer"
toc: true
tag: developers
category: "Connectors"
menus:
    applicationconnector :
        title: "SAP Business One Service Layer"
        weight: 11
        icon: fa fa-file-word-o
        identifier: sapb1slconnector
---

Application configuration is an integral activity prior to the process of integration. If your chosen application is SAP Business One Service Layer, credentials need to be provided for validating the agent. 
Here you will find the detailed description on how to configure the agents for the application of SAP Business One, attributes and action, and the Troubleshooting issues.

**Note: This document is for the SAP Business One version `SAP B1 S/L 9.0`.**

## Prerequisites for SAP Business One Configuration

1. Navigate to **Manage > Apps** to choose your application.
2.	Select the application SAP Business One in the [APPS](/getting%20started/configurations/#process-of-choosing-app) section of the APPSeCONNECT Portal. The version of SAB Business One application should be selected as `SAP B1 S/L 9.0`
3.	Create and publish a [connection](/getting%20started/configurations-for-integration/#configuring-connector-while-creating-connection) in the cloud portal.
4.	Update the Configuration in your On-Premise AEC Agent. You will find your Connection present in the agent.To Know about Agent Configuration, [Click here](/deployment/Deployment-Configuration/)

**Note: if you are working with custom connector (as per business need), custom touchpoints are needed to be created**

## Configure the SAP Business One Application in the Agent

1) Open APPSeCONNECT Agent by providing correct credentials.

2) Navigate to the **APPS Configuration** page on your On-Premise Agent.

3) In the App Configurational Panel of the agent, Click on the + button beside the app SAP Business One (app version - SAP B1 S/L 9.0).

![sapsl1](\staticfiles\connectors\media\application-connector\sapsl1.PNG)

4) The credential page for SAP Business One Service Layer opens. Provide you Application Base URL and Select the Authetication type as **No Auth**

5) On selection of **No Auth** select the action as POST from the drop down.

![sapsl2](\staticfiles\connectors\media\application-connector\sapsl2.PNG)

**Note:** As SAP Business S/L requires to POST the credential for generating validation session, therefore the action is set as POST. 

6) Click on the **HEADERS** tab to configure API Limit for the sync process. By default, the API limit will be 20. However, you can provide your custom API Limit in HEADERS tab.
The HEADER tab has two fields:  `KEY` & `VALUE`. You need to provide the **PREFER** as KEY and the limit syntax in value **odata.maxpagesize= Your Value**.

![sapsl3](\staticfiles\connectors\media\application-connector\sapsl3.PNG)

7) Navigate to the tab **BODY**. You will have to provide your login credentials here. Follow the image below to provide the details.

![sapsl4](\staticfiles\connectors\media\application-connector\sapsl4.png)

The login details needs to be provided as per the below syntax:

**{"UserName": "YourUsername","CompanyDB": "YourCompanyDB","Password": "yourpassword"}**

8) Once all the details are provided, click on the **Validate** button.

Following the above process, you can successfully validate the adapter for the application SAP Business One Service Layer.

## Attributes and Actions

While defining a connect to an API endpoint in SAP Business One Service, you require clear understanding about the
data requirements and endpoint configurations. You can refer to this document to find all the endpoint 
details of your SAP Business One Service Layer installation. To define the endpoint in APPSeCONNECT, you need Actions and Entities. 
Actions are specifically targeted for an endpoint while schema is the data needed to execute the API. 
Here, is the list of some of the pre-packaged API actions defined for you which you can easily plug and play 
while doing your integrations.

|Endpoint|Action|Action Type|Schema|Description|
|---|---|---|---|------|---|
|BusinessPartners|GET|GET|BusinessPartners|For fetching new Business Partners from SAP Business One Service Layer|
|BusinessPartners|POST|POST|BusinessPartners|For adding newly added Business Partners from source application to SAP Business One Service Layer|
|Items|GET|GET|Items|For fetching new items from SAP Business One Service Layer|
|Items|POST|POST|Items|For adding new items to SAP Business One Service Layer from source application|
|Orders|POST|POST|Orders|for adding sales orders to SAP Business One Service Layer from source application|

