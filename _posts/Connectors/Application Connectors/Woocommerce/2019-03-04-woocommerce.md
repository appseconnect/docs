---
title: "WooCommerce"
toc: true
tag: developers
category: "Connectors"
menus: 
    applicationconnector:
        title: "WooCommerce"
        weight: 10
        icon: fa fa-file-word-o
        identifier: woocommerceconnector
---

Application configuration is an integral activity prior to the process of integration. If your chosen application is WooCommerce, 
credentials need to be provided for validating the agent. Here you will find the detailed description on 
how to configure the agents for the application of WooCommerce, Troubleshooting issues and the attributes and action.

# Pre-requisites for WooCommerce Configuration 

1.	Select the application WooCommerce in the APPS section of the APPSeCONNECT Portal.
2.	Create and publish a connection in the cloud portal.
3.  [Upload the AEC Plugin/Extension](/connectors/woocommerce-plugin-extension-upload/) in the WooCommerce Portal. 
4.	Update the Configuration in your On-Premise AEC Agent. You will find your Connection present in the agent.

**Note: The Plugin comes pre-packaged with APPSeCONNECT.**

## Configure the Agent

To Know about Agent Configuration, [Click here](/deployment/Deployment-Configuration/)

## Configure the WooCommerce Application in the Agent

### Prerequisites for configuring AEC Agent for WooCommerce (version 2.6 and above)

* SAP B1 adapter version >= 3.2.1.0 
* Agent version 3.3.x.x and addon version >=3.2.1.0.
* SAP B1  AppseConnect add-on must be installed to create required tables and UDOs (follow the support portal document).
* Multiple Connection Store procedure must be implemented in SAP B1 (follow the support portal document).
* Add EventTracer data  in 'AECEVENTTRACER'  (Administrator>Setup>General>AECEVENTTracer). Here you have to add Object for which you want to trace data to sync.

**Follow the given steps to configure Agent for Woocommerce** 

1. Login to your AEC Agent with your registered account credentials.

2. After login, you can view the connections created in your APPSECONNECT cloud account. 
  Here, APPSeCONNECT has created Woocommerce & SAP B1 connection. Click on the database 
  icon to provide the application credentials in Agent.

![woocommerce-agent1](/staticfiles/connectors/media/application-connector/woocommerce-agent1.png)

3. Provide the credentials for the Woocommerce application. To provide Woocommerce credentials follow the steps below:

a. Login to the admin panel with valid credentials.

b. Go to Woocommerce >> Settings, present on the left of the dashboard page.

c. Click on the API link that appears horizontally.

d. Click on Keys or Apps 

![woocommerce-agent2](/staticfiles/connectors/media/application-connector/woocommerce-agent2.png)

e. Enter your API details in the respective fields of AEC agent (API key corresponds to the 
   consumer key while the API secret corresponds to the consumer secret)

f. Username and password are the login credentials of your Woocommerce admin portal. For WooCommerce version 2.6 
   and above, you need to select "/wp-jason/wc/" (while for Woocommerce version 2.3.9 select "/wc-api/") 
   as the Base Url Endpoint.

![woocommerce-agent3](/staticfiles/connectors/media/application-connector/woocommerce-agent3.png)

4. Click on the Validate button to validate your credentials. On successful validation, a success message will be generated 
   as "Connection Validate successfully".

![woocommerce-agent4](/staticfiles/connectors/media/application-connector/woocommerce-agent4.png)

5. After successful validation, you can save your credentials by clicking on the Save button. 
   The success message will be generated as "Connection saved successfully".

![woocommerce-agent5](/staticfiles/connectors/media/application-connector/woocommerce-agent5.png)


## Troubleshooting

**ISSUE 1:  If the Source Application Not Found**
Some of the basic troubleshooting issue happens due to improper validations or even if it is accurately validated, and if touchpoints do not sync, this basic issue
resolves after removing the Temp and Cache files from the portal and from your system. Therefore, after clearing all this publish the touchpoints again along with Update Configuration on the agent.
For E.g. If the Source Application Not Found in the log file appears, the probable cause is due to the presence of the Temp and Cache Files.


**ISSUE 2: Plugin Installation Issue**

On Syncing Customer Add touchpoint from WooCommerce to any destination application, it is noted that only 
First 10 customers created, successfully synced, but it fails or shows no result in the resync bucket 
when the 11th customer is synced.

This is due to the plugin that might not have been installed. The process of uploading the plugin is provided 
in the prerequisite section of this page.

**Note: It is the feature in WooCommerce that without the AEC plugin, more than 10 customers will not sync**

## Attributes and Actions

While defining a connect to an API endpoint in WooCommerce, you require clear understanding about the data requirements 
and endpoint configurations. You can refer to this document to find all the endpoint details of your WooCommerce installation.
 
To define the endpoint in APPSeCONNECT, you need Actions and Entities. Actions are specifically targeted for an endpoint 
while schema is the data needed to execute the API. Here, is the list of some of the pre-packaged API actions defined 
for you which you can easily plug and play while doing your integrations.

|Endpoint|Action|Action Type|Schema|Description|
|---|---|---|---|------|
|customers|Customers|GET|[Customers](https://portal.appseconnect.com/AppEntityAction?AppVersionId=cbc4737b-e610-4beb-835c-da5f59e6a5e2&entityId=61f33b9c-5087-4481-8e86-a8155be71c51&entityActionId=dde24ee9-0872-48f6-8593-8ca9ee6034f7&orgId=d21688a4-8967-48de-ae82-31dda565ec51)|[Fetch customers from WooCommerce and post it to the destination Application](https://learnwoo.com/woocommerce-create-new-user-account/)|
|orders|Orders|GET|[Orders](https://portal.appseconnect.com/AppEntityAction?AppVersionId=cbc4737b-e610-4beb-835c-da5f59e6a5e2&entityId=eecd4a6e-257e-4561-8f6d-c9ae13334ee4&entityActionId=b50f33bd-7843-4e5d-a7e2-07ec2f696d46&orgId=d21688a4-8967-48de-ae82-31dda565ec51)|[Fetch the order from WooCommerce and post it to the destination Application](https://docs.woocommerce.com/document/managing-orders/)|
|orders|ORDERS|POST|Orders|Post Invoices to WooCommerce from any Source Application|
|products/productid|Products|PUT|Products|Update Inventory in WooCommerce from Source Application|
|products|Products|POST|Products|Post products in WooCommerce from any Source Application|

**Protip:** Customers and Orders can be created and placed from the Front-End also. For Placing orders from front end, visit the E-Commerce store and follow the generic steps for placing orders and creating customers.
this one.
{: .notice--info}
