---
title: "Dynamics NAV"
toc: true
tag: developers
category: "Connectors"
menus: 
    applicationconnector:
        title: "Dynamics NAV"
        weight: 14
        icon: fa fa-file-word-o
        identifier: navbusinesscentralconnector
---

Application configuration is an integral activity prior to the process of integration. If your chosen application is `Microsoft Dynamics Business Central`, providing the credentials is essential for configuring the agent.
Here you will find the detailed description on how to configure the agents for the application of Microsoft Dynamics Business Central, the Integration Techniques and the Troubleshooting issues.

**Note: For Integrating with Microsoft Dynamics Business Central, the application Microsoft Dynamics NAV (≥ 2009R2 Generic) is needed to be selected in AEC Portal**

## Prerequisites for Dynamics NAV Configuration 

1.	Select the application Microsoft Dynamics NAV (≥ 2009R2 Generic) in the [APPS](/getting%20started/configurations/#process-of-choosing-app) section of the APPSeCONNECT Portal.
2.	Create and publish a [connection](/getting%20started/configurations-for-integration/#configuring-connector-while-creating-connection) in the cloud portal.
3.	Update the Configuration in your On-Premise AEC Agent. You will find your Connection present in the agent. To Know about Agent Configuration, [Click here](/deployment/Deployment-Configuration/)

**Note: if you are working with custom connector (per business need), custom touchpoints are needed to be created**

**ProTip:** Before Implementing Integration with MS Dynamics NAV, the NAV Extension is needed to be installed. 
Click Here to know about the Installation Process.
{: .notice--info}

## Populating Historical Data in AEC Tables 

After Installing the NAV Extension, the old data are needed to be synced and should be reflected in the AEC Tables. 
Therefore, these specific CodeUnit functions are needed to be called in the OnRun ().

**CODE UNITS:**

1. AEC Customer Codeunit =  CopyExistingCustomerInAEC();
   Call this in OnRun() and save and then Run the CodeUnit

2. AEC Item Codeunit  =  CopyExistingItems();
   Call this in OnRun() and save and then Run the CodeUnit

3. AEC Contact = CopyExistingContactInAEC;

Call this in OnRun() and save and then Run the CodeUnit.

**Note: This should be done for all the Dynamics NAV Version.**



## Configure the Dynamics NAV in the Agent (SOAP BASED PROTOCOL)

1. Login to your AEC Agent with your registered account credentials.
2. Click on the settings button to view the Credentials page.     
![nav-businesscentral1](/staticfiles/connectors/media/application-connector/nav-businesscentral1.png)
3. Fill in the required details in the Credential Page     
![nav-businesscentral2](/staticfiles/connectors/media/application-connector/nav-businesscentral2.png)
4. Click Save and Validate button. 
5. The validation success message confirms that the application is configured in the agent.     
![nav-businesscentral3](/staticfiles/connectors/media/application-connector/nav-businesscentral3.png)

The above steps completes the process of configuring Agent with NAV credentials

## Configure the Dynamics NAV in the Agent (REST BASED PROTOCOL)

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

|Endpoint|Action|Action Type|Schema|UI Path|API Path|
|---|---|---|---|------|
|ReadMultiple|ReadMultiple|GET|[Page/webapplicationcontactdata](https://portal.appseconnect.com/AppEntityAction?AppVersionId=d48dff47-0896-4474-9afa-a25977dea8ad&entityId=b23b6cb2-8d83-45ed-9920-0f975f165c1b&entityActionId=a75b6d7f-1a0f-4a39-8823-d658bb7dd445&orgId=d21688a4-8967-48de-ae82-31dda565ec51&IsFromPopup=False )|[Fetch Accounts/customers from Business Central and post it to the destination application](https://docs.microsoft.com/en-us/dynamics365/business-central/sales-how-register-new-customers)|[ReadMultiple](https://docs.microsoft.com/en-us/dynamics-nav/fin-graph/api/dynamics_customer_get)|
|ReadMultiple|ReadMultiple|GET|[Page/webapplicationproductdata](https://portal.appseconnect.com/AppEntityAction?AppVersionId=d48dff47-0896-4474-9afa-a25977dea8ad&entityId=3daefc5c-d333-47a3-9d47-6ca271a296e6&entityActionId=2a65f957-51f6-4297-9624-1ca3aa2b6687&orgId=d21688a4-8967-48de-ae82-31dda565ec51&IsFromPopup=False )|[Fetch products from Business Central and post it to the destination application](https://docs.microsoft.com/en-us/dynamics365/business-central/inventory-how-register-new-items)|[ReadMultiple](https://docs.microsoft.com/en-us/dynamics-nav/fin-graph/api/dynamics_item_get)|
|AECCustomerImport|AECCustomerImport|POST|[AECCustomerXMLPort](https://portal.appseconnect.com/AppEntityAction?AppVersionId=d48dff47-0896-4474-9afa-a25977dea8ad&entityId=2e83f28c-4b66-4e2b-b9e6-005ea75dea07&entityActionId=237255f9-652d-44bf-a4ec-f2c85b35f08e&orgId=d21688a4-8967-48de-ae82-31dda565ec51&IsFromPopup=False )|Post customer from source application to Business Central|[AECCustomerImport](https://docs.microsoft.com/en-us/dynamics-nav/fin-graph/api/dynamics_create_customer)|
|AECSimpleProductImport|AECSimpleProductImport|POST|[AECSimpleItemXmlPort](https://portal.appseconnect.com/AppEntityAction?AppVersionId=d48dff47-0896-4474-9afa-a25977dea8ad&entityId=ce524043-99ed-48e7-bd6e-46014ae88f98&entityActionId=3b8d3f26-2f6a-4a29-b48b-dd5526cd555e&orgId=d21688a4-8967-48de-ae82-31dda565ec51&IsFromPopup=False )|Post product from source application to Business Central|[AECSimpleProductImport](https://docs.microsoft.com/en-us/dynamics-nav/fin-graph/api/dynamics_create_item)|