---
title: "Dynamics NAV Business Central"
toc: true
tag: developers
category: "Connectors"
menus: 
    applicationconnector :
        title: "Dynamics NAV Business Central"
        weight: 14
        icon: fa fa-file-word-o
        identifier: navbusinesscentralconnector
---

Application configuration is an integral activity prior to the process of integration. If your chosen application is `Microsoft Dynamics Business Central`, providing the credentials is essential for configuring the agent.
Here you will find the detailed description on how to configure the agents for the application of Microsoft Dynamics Business Central, the Integration Techniques and the Troubleshooting issues.

**Note: For Integrating with Microsoft Dynamics Business Central, the application Microsoft Dynamics NAV (≥ 2009R2 Generic) is needed to be selected in AEC Portal**

## Prerequisites for NAV Business Central Configuration 

1.	Select the application Microsoft Dynamics NAV (≥ 2009R2 Generic) in the APPS section of the APPSeCONNECT Portal.
2.	Create and publish a connection in the cloud portal.
3.	Update the Configuration in your On-Premise AEC Agent. You will find your Connection present in the agent.

**Note: if you are working with custom connector (per business need), custom touchpoints are needed to be created**

## Configure the Agent

To Know about Agent Configuration, [Click here](/deployment/Deployment-Configuration/)

## Configure the NAV Business Central Application in the Agent

1. Login to your AEC Agent with your registered account credentials.

2. Click on the settings button to view the Credentials page.  

![nav-businesscentral1](/staticfiles/connectors/media/application-connector/nav-businesscentral1.png)

3. Fill in the required details in the Credential Page

![nav-businesscentral2](/staticfiles/connectors/media/application-connector/nav-businesscentral2.png)

4. Click Save and Validate button. 

5. The validation success message confirms that the application is configured in the agent.

![nav-businesscentral3](/staticfiles/connectors/media/application-connector/nav-businesscentral3.png)

The above steps completes the process of configuring Agent with NAV credentials

## Troubleshooting

**ISSUE 1:  If the Source Application Not Found**
Some of the basic troubleshooting issue happens due to improper validations or even if it is accurately validated, and if touchpoints do not sync, this basic issue
resolves after removing the Temp and Cache files from the portal and from your system. Therefore, after clearing all this publish the touchpoints again along with Update Configuration on the agent.
For E.g. If the Source Application Not Found in the log file appears, the probable cause is due to the presence of the Temp and Cache Files.


## Attributes and Actions

While defining a connect to an API endpoint in Microsoft Dynamic Business Central, you require clear understanding about the 
data requirements and endpoint configurations. You can refer to this document to find all the endpoint details of your 
Microsoft Dynamic Business Central installation. To define the endpoint in APPSeCONNECT, you need Actions and Entities. 
Actions are specifically targeted for an endpoint while schema is the data needed to execute the API. Here, is the list 
of some of the pre-packaged API actions defined for you which you can easily plug and play while doing your integrations.

|Endpoint|Action|Action Type|Schema|Description|
|---|---|---|---|------|
|ReadMultiple|ReadMultiple|GET|Page/webapplicationcontactdata|[Fetch Accounts/customers from Business Central and post it to the destination application](https://docs.microsoft.com/en-us/dynamics365/business-central/sales-how-register-new-customers)|
|ReadMultiple|ReadMultiple|GET|Page/webapplicationproductdata|[Fetch products from Business Central and post it to the destination application](https://docs.microsoft.com/en-us/dynamics365/business-central/inventory-how-register-new-items)|
|AECCustomerImport|AECCustomerImport|POST|AECCustomerXMLPort|Post customer from source application to Business Central|
|AECSimpleProductImport|AECSimpleProductImport|POST|AECSimpleItemXmlPort|Post product from source application to Business Central|