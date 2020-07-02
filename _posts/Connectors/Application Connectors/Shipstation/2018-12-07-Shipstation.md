---
title: "Shipstation"
toc: true
tag: developers
category: "Connectors"
menus: 
    applicationconnector : 
        icon: fa fa-gg
        weight: 5 
        title: "Shipstation"
        identifier: shipstationconnector
---

Application configuration is an integral activity prior to the process of integration. If your chosen application is `Shipstation`, 
credentials need to be provided for validating the agent. Here you will find the detailed description on how to `configure the agents`
for the application of Shipstation, Troubleshooting issues and the attributes and action.

Shipstation is a REST Application which supports both the BASIC authentication. The Adapter of the application Shipstation provides 
the leverage to communicate and adapt with the AEC Portal. This section provides you the detailed process of validating the 
credential of the application Shipstation.


# Pre-requisites of Shipstation Configuration 

* Valid APPSeCONNECT Portal credentials.
* Select the Application Shipstation in the [APP section](/getting%20started/configurations/#process-of-choosing-app).
* [Create connection](/getting%20started/configurations-for-integration/#configuring-connector-while-creating-connection) for Shipstation.
* Publish Touchpoint, Update Adapters and Update Configuration in the agent.


## Configure the Agent

To Know about Agent Configuration, [Click here](/deployment/Deployment-Configuration/)

## Configuring the Shipstation Adapter

1. In the App Configuration panel of the agent, click on the + button, beside the app Shipstation.      
![shipstation1](/staticfiles/connectors/media/application-connector/shipstation1.png)    
2. On clicking the + button, the credential panel opens for the application Shipstation.       
![shipstation2](/staticfiles/connectors/media/application-connector/shipstation2.png)    
3. For generating the API Key and the API Secret, `navigate to Settings (the wrench icon) > Account > API Settings> Generate API Keys` in the Shipstation Portal. 
   The API settings window opens.        
![shipstation3](/staticfiles/connectors/media/application-connector/shipstation3.png)    
4. Provide the generated credentials in the agent and then click on`VALIDATE` and `SAVE` button.      
![shipstation4](/staticfiles/connectors/media/application-connector/shipstation4.png)     
Following this process, the Shipstation application can be configured in the agent.  
 
## Troubleshooting

**ISSUE 1:Source Application Data Not Found**
`Source Application Data Not Found` even if Data is present is the Source Application.

Some of the basic troubleshooting issue happens due to improper validations or even if it is accurately validated, and if touchpoints do not sync, 
this basic issue resolves after removing the `Temp and Cache files` from the `portal` and from your `system`. Therefore, after clearing all this publish the 
touchpoints again along with *Update Configuration* on the agent.

For E.g. If the `Source Application Not Found` in the log file appears, the probable cause is due to the presence of the Temp and Cache Files.

**ISSUE 2:Syncing Issues** 

While working with SAP B1 Integrations, SAP Business One DI Server ON/OFF is needed to be done for proper syncing else data 
will not sync to SAP Business One

**ProTip:** For the integration between Shipstation and SAP Business One, no Addons needed to be installed in SAP. 
However, for the integration between these application, UDFs needed to be created for the touchpoint `Business Partner Download`
as per the business requirements.
{: .notice--info}


## Attributes and Actions

While defining a connect to a particular API endpoint in Shipstation, you require clear understanding about the data requirements and endpoint configurations. 
You can refer to [this](https://help.shipstation.com/hc/en-us/articles/360026140851) document to find all the endpoint details of your shipstation installation. 
To define the endpoint in APPSeCONNECT, you need Actions and Entities. Actions are specifically targetted for a particular endpoint while schema is the 
data needed to execute the API. Here are the list of some of the prepackaged API actions defined for you which you can easily plug and play while doing your 
integrations. 

|Endpoint|Action|Action Type|Schema|UI Help|API Help|
|---|---|---|---|------|-----|
|customers|customers|Get|[Customers](https://portal.appseconnect.com/AppEntityAction?AppVersionId=3b9d58ed-0e56-4345-b5a8-19d777129fde&entityId=1b394e4d-7b0d-413f-848a-91134cbcd9eb&entityActionId=27b61581-2247-4f14-81f3-0c371a9e2a19&orgId=d21688a4-8967-48de-ae82-31dda565ec51&IsFromPopup=False)|[Create customer for Shipstation and POST it to the destination application](https://help.shipstation.com/hc/en-us/articles/360028316811-V3-Add-Customer-Records)|[API for fetching Customers](https://www.shipstation.com/developer-api/#/reference/customers/customer/get-customer)|
|orders|orders|GET|[order](https://portal.appseconnect.com/AppEntityAction?AppVersionId=3b9d58ed-0e56-4345-b5a8-19d777129fde&entityId=fb055b9b-b9c6-441f-be5c-aea5ad1f6c14&entityActionId=8ca18d48-8fe6-4d7b-a7d7-44e40c9f74b7&orgId=d21688a4-8967-48de-ae82-31dda565ec51&IsFromPopup=False)|[Creating Orders in Shipstation](https://help.shipstation.com/hc/en-us/articles/360026484231#UUID-43abc83f-f0ee-29b4-41be-e371d8196d4e)|[API Path for fetching Orders from Shipstation](https://www.shipstation.com/developer-api/#/reference/orders/getdelete-order/get-order)|
|orders/createorder|orders/createorder|POST|[order](https://portal.appseconnect.com/AppEntityAction?AppVersionId=3b9d58ed-0e56-4345-b5a8-19d777129fde&entityId=fb055b9b-b9c6-441f-be5c-aea5ad1f6c14&entityActionId=a62f2ccd-cb98-4790-8c01-46439c3395ec&orgId=d21688a4-8967-48de-ae82-31dda565ec51&IsFromPopup=False)|Posting orders from Source Application to Shipstation|[API for Posting Orders to Shipstation](https://www.shipstation.com/developer-api/#/reference/orders/createupdate-order)|


