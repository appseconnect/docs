---
title: "SAP Business One"
toc: true
tag: developers
category: "Connectors"
menus:
    applicationconnector :
        title: "SAP Business One"
        weight: 11
        icon: fa fa-file-word-o
        identifier: sapb1connector
---

Application configuration is an integral activity prior to the process of integration. 
If your chosen application is SAP Business One, credentials need to be provided for 
validating the agent.
Here you will find the detailed description on how to configure the agents for the 
application of SAP Business One, attributes and action, and the Troubleshooting issues.

**Note: This document is for the SAP Business One version >=8.8**

## Prerequisites for SAP Business One Configuration

1.	Select the application SAP Business One in the [APPS](/getting%20started/configurations/#process-of-choosing-app) section of the APPSeCONNECT Portal.
2.	Create and publish a [connection](/getting%20started/configurations-for-integration/#configuring-connector-while-creating-connection) in the cloud portal.
3.	Update the Configuration in your On-Premise AEC Agent. You will find your Connection present in the agent.To Know about Agent Configuration, [Click here](/deployment/Deployment-Configuration/)

**Note: if you are working with custom connector (per business need), custom touchpoints are needed to be created**

## Configure the SAP Business One Application in the Agent

1) Open APPSeCONNECT Agent by providing correct credentials.

2) In the connection page of APPSeCONNECT Agent, you will see the connection is created in APPSeCONNECT Cloud.

![sapb1-agent1](/staticfiles/connectors/media/application-connector/sapb1-agent1.png)

3) Click on the credentials icon to provide SAP B1 credentials to validate the connection.

![sapb1-agent2](/staticfiles/connectors/media/application-connector/sapb1-agent2.png)

4) Provide the credentials of SAP B1

![sapb1-agent3](/staticfiles/connectors/media/application-connector/sapb1-agent3.png)

Under SAP Event XML file path & SAP Image file path, you need to create two folders respectively and link the path to it. 
This path later needs to be provided in SAP B1 as well.

**Follow the steps mentioned below, to provide SAP Event XML file path & SAP Image file path in SAP B1**

-  Open SAP B1 after providing valid credentials.
-  Navigate through Administrator > System Initialization > General Settings.
-  A form will open. Select "Path" menu under it. Browse for SAP Event XML file path and Image path.

![sapb1-agent4](/staticfiles/connectors/media/application-connector/sapb1-agent4.png)

5) After providing all the credentials. Click "Save" button.

![sapb1-agent5](/staticfiles/connectors/media/application-connector/sapb1-agent5.png)

A message "Connection Data Saved" will appear if all the credentials provided by you for SAP B1 is valid.

6) Click on the "Validate" button, to validate the connection.

![sapb1-agent6](/staticfiles/connectors/media/application-connector/sapb1-agent6.png)

A message "Test Connection Successful" will appear if all the credentials provided by you for SAP B1 is valid. 
In this way, you can configure the credentials of SAP B1.

### Custom Database Type Selection:

By default, the field for `Database Type` list the following types in its drop-down and they are:
- Hana Database
- Microsoft SQL Server 2000
- Microsoft SQL Server 2005
- Microsoft SQL Server 2008
- Microsoft SQL Server 2014
- Microsoft SQL Server 2016
- Microsoft SQL Server 2017
- Microsoft SQL Server 2019

SAP DIS adapter gives you the flexibility to create and support Custom database on its drop-down as per your requirement. Follow the below procedure to create custom database type.

1) Navigate to the APPSeCONNECT Folder, where your APPSeCONNECT OP Agent is downloaded.

2) Navigate to APPSeCONNECT > Adapter > BoDataServerTypes. 

3) Open the file **BoDataServerTypes** with NOTEPAD, available inside the **Adapter** folder. You can view the XML structure that defines all the default database types.

![sapdbtype1](\staticfiles\connectors\media\application-connector\sapdbtype1.PNG)

4) At the bottom of the file, add the syntax for adding a new database type.

![sapdbtype2](\staticfiles\connectors\media\application-connector\sapdbtype2.PNG)

While Adding make sure, the On-Premise Agent is closed & and Enable Environment is off.

5) The file would look as given below.

![sapdbtype3](\staticfiles\connectors\media\application-connector\sapdbtype3.PNG)

7) Restart your On-Premise Agent and check for the database type drop-down list. You should have the the added database type in the list.

![sapdbtype4](\staticfiles\connectors\media\application-connector\sapdbtype4.PNG)

Following the above process, you can successfully add your custom database type for your application SAP DIS.

**Note:** Adding custom database type requires ADMINISTRATOR permission. Incase, your system user profile does not have the admin permission, you need to manually provide the admin permission both in the **ADAPTER** folder and the **BoDataServerTypes** file.

## Troubleshooting

**Issue 1: Source Application Data Not Found**

"Source Application Data Not Found" even if Data is present is the Source Application.

Some of the basic troubleshooting issue happens due to improper validations or even if it is 
accurately validated and if touchpoints do not sync. This basic issue resolves after removing 
the `Temp and Cache files` from the `portal` and from your `system`. Therefore after clearing all
this, you need to publish the touchpoints again along with **Update Configuration** on the agent.

For E.g. If the "Source Application Data Not Found" in the log file appears, the probable cause is due 
to the presence of the Temp and Cache Files.

**Issue 2: Syncing issues**

While working with SAP B1 Integrations, SAP Business One DI Server ON/OFF is needed to be done for proper 
syncing else data will not sync to SAP. 

## Attributes and Actions

While defining a connect to an API endpoint in SAP Business One, you require clear understanding about the
data requirements and endpoint configurations. You can refer to this document to find all the endpoint 
details of your SAP Business One installation. To define the endpoint in APPSeCONNECT, you need Actions and Entities. 
Actions are specifically targeted for an endpoint while schema is the data needed to execute the API. 
Here, is the list of some of the pre-packaged API actions defined for you which you can easily plug and play 
while doing your integrations.

SAP Business One being a SOAP based application, it has objects that are used for pushing and pulling the data. 
[Click here](https://blogs.sap.com/2017/04/27/list-of-object-types/) to know about the `Object Code ID, its Primary Key and the related Table in SAP` that would be required for the Integration. 

|Endpoint|Action|Action Type|Schema|UI Path|API Path|
|---|---|---|---|------|---|
|ExecuteSQL|ExecuteSQL|GET|oEmployeesInfo|[Fetch employee from SAP Business One to destination Application](https://help.sap.com/doc/saphelp_sbo91/9.1/en-US/44/ac2bd0d8545af0e10000000a11466f/content.htm?no_cache=true)|---|
|ExecuteSQL|ExecuteSQL|GET|oItems|[Fetch Products from SAP Business One to destination Application](https://help.sap.com/saphelp_sbo900/helpdata/en/45/2365ca9e152b31e10000000a1553f7/content.htm?no_cache=true)|---|
|AddObject|AddObject|POST|oEmployeesInfo|Post employees from Source Application to SAP Business One|---|