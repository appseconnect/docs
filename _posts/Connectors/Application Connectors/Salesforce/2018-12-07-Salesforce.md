---
title: "Salesforce"
toc: true
tag: developers
category: "Connectors"
menus: 
    applicationconnector : 
        icon: fa fa-gg
        weight: 5 
        title: "Salesforce"
        identifier: salesforceconnector
---

Application configuration is an integral activity prior to the process of integration. If your chosen application is Salesforce, 
credentials need to be provided for validating the agent. Here you will find the detailed description on how to configure the agents 
for the application of Salesforce, Troubleshooting issues and the attributes and action.

Salesforce is a REST Application which supports OAUTH 2.0 authentication. The Adapter of the application Salesforce provides the leverage 
to communicate and adapt with the AEC Portal. This section provides you the detailed process of validating the credential of the 
application Salesforce.


# Pre-requisites for Salesforce Configuration 

* Valid APPSeCONNECT Portal credentials.
* Select the Application Salesforce in the [APP section](/getting%20started/configurations/#process-of-choosing-app).
* [Create connection](/getting%20started/configurations-for-integration/#configuring-connector-while-creating-connection) for Salesforce.
* Publish any Touchpoint, Update Adapters and Update Configuration in the agent.

## Configure the Agent

To Know about Agent Configuration, [Click here](/deployment/Deployment-Configuration/)

## Configure the Salesforce Application in the Agent

1. In the App Configuration panel of the agent, click on the + button, beside the app Salesforce.
![salesforce1](/staticfiles/connectors/media/application-connector/salesforce1.png)    
2. Click the + button, the credential panel opens for the application Salesforce.   
![salesforce2](/staticfiles/connectors/media/application-connector/salesforce2.png)   
3. To Validate the adapter for Salesforce you will need the Consumer Secret and Consumer Key. 
4. To generate these credentials, login to the Salesforce Application. This will take you to the default home page.
5. In the Home page of Salesforce, navigate to Setup Module.  
![salesforce3](/staticfiles/connectors/media/application-connector/salesforce3.png) 
6. Click the Setup icon from the drop-down list.
7. Navigate to Apps > App Manager. Now, you can view the APP Manager page.
8. Click  New Connected App button.   
![salesforce4](/staticfiles/connectors/media/application-connector/salesforce4.png)   
9. Enter name of your application, API Name, Contact email information, as well as any other information appropriate for your application and click on the checkbox to enable the Oauth Settings.
 ![salesforce5](/staticfiles/connectors/media/application-connector/salesforce5.png)   
10. Enable the checkbox, enter the callback URL and select the OAuth scope as Full Access for complete access.     
**Note: User can select the desired scopes as these scopes refer to permissions given by the user running the connected app.**  

**Note: Callback URL is the URL that a user browser is redirected to after successful authentication.
As this URL is used for some OAuth flows to pass an access token, the URL must use secure HTTP (HTTPS) or a custom URI scheme.**

* Provide the details, click SAVE button. Now you will get the following window with the Consumer Key and Consumer Secret generated. To view the Consumer Secret, press `Click to Reveal` button.
![salesforce6](/staticfiles/connectors/media/application-connector/salesforce6.png) 
**Note:It takes 15-20 mins to reflect the Oauth2.0 settings in the Salesforce portal. Once it reflects, you can copy the generated credentials for validation process.**

* On the Profile icon, click settings button to generate the Security Token.      
![salesforce7](/staticfiles/connectors/media/application-connector/salesforce7.png)       
* From the `My Personal Information` dropdown, Click on Reset My Security Token.    
![salesforce8](/staticfiles/connectors/media/application-connector/salesforce8.png)     
**Note: The Security Token would be sent to the Email that was provided while creating the Salesforce Account.**  
  
*  Enter all the generated credentials in the OP Agent for the validation process. Click SAVE followed by the Validate Button.    
![salesforce9](/staticfiles/connectors/media/application-connector/salesforce9.png)   
Following this process, the Salesforce application can be configured in the agent. 

## Troubleshooting

**ISSUE 1:Source Application Data Not Found**

`Source Application Data Not Found` even if Data is present is the Source Application.

Some of the basic troubleshooting issue happens due to improper validations or even if it is accurately validated and if touchpoints
do not sync. This basic issue resolves after removing the Temp and Cache files from the portal and from your system. Therefore, 
after clearing all this, you need to publish the touchpoints again along with Update Configuration on the agent.

For E.g. If the `Source Application Data Not Found` in the log file appears, the probable cause is due to the presence of the Temp and Cache Files.

**Note: Integration between SAP B1 and Salesforce requires UDT & UDF creations** 
## Attributes and Actions

While defining a connect to an API endpoint in Salesforce, you require clear understanding about the data requirements and 
endpoint configurations. You can refer to this document to find all the endpoint details of your Salesforce installation. 
To define the endpoint in APPSeCONNECT, you need to define Actions and Entities. Actions are specifically targeted for an 
endpoint while schema is the data needed to execute the API. Here is the list of some of the pre-packaged API actions defined 
for you which you can easily plug and play while doing your integration.



|Endpoint|Action|Action Type|Schema|UI Help|API Path|
|---|---|---|---|------|-----|
|/query|/query|GET|[Contact](https://portal.appseconnect.com/Account/Login?ReturnUrl=%2fAppEntityAction%3fAppVersionId%3d278f6c38-022f-469a-944a-52819fad7ef7%26entityId%3d94ca1fbc-d283-40db-96ea-6f23fcd55eb1%26entityActionId%3d856c65dd-f19f-4e43-8461-73c7958edf70%26orgId%3dd21688a4-8967-48de-ae82-31dda565ec51%26IsFromPopup%3dFalse&AppVersionId=278f6c38-022f-469a-944a-52819fad7ef7&entityId=94ca1fbc-d283-40db-96ea-6f23fcd55eb1&entityActionId=856c65dd-f19f-4e43-8461-73c7958edf70&orgId=d21688a4-8967-48de-ae82-31dda565ec51&IsFromPopup=False#!)|[Fetching Contacts from Salesforce and posting into Destination Application](https://trailhead.salesforce.com/en/content/learn/modules/admin_intro_accounts_contacts/admin_intro_accounts_contacts_basics)|-|
|/query|/query|GET|[order](https://portal.appseconnect.com/Account/Login?ReturnUrl=%2fAppEntityAction%3fAppVersionId%3d278f6c38-022f-469a-944a-52819fad7ef7%26entityId%3de66be2b5-031b-4685-ba29-ab9b9178392c%26entityActionId%3d300164f8-bf4a-4c22-bbd6-e6111dbd52ee%26orgId%3dd21688a4-8967-48de-ae82-31dda565ec51%26IsFromPopup%3dFalse&AppVersionId=278f6c38-022f-469a-944a-52819fad7ef7&entityId=e66be2b5-031b-4685-ba29-ab9b9178392c&entityActionId=300164f8-bf4a-4c22-bbd6-e6111dbd52ee&orgId=d21688a4-8967-48de-ae82-31dda565ec51&IsFromPopup=False#!)|[Fetching sales orders from Salesforce and posting to destination application](https://trailhead.salesforce.com/en/content/learn/projects/manage-products-prices-quotes-orders/create-order-with-products)|[API for fetching sales orders from Salesforce](https://developer.salesforce.com/docs/atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_get_details_order.htm#!)|
|/query|/query|GET|[Accounts](https://portal.appseconnect.com/Account/Login?ReturnUrl=%2fAppEntityAction%3fAppVersionId%3d278f6c38-022f-469a-944a-52819fad7ef7%26entityId%3d94ca1fbc-d283-40db-96ea-6f23fcd55eb1%26entityActionId%3d856c65dd-f19f-4e43-8461-73c7958edf70%26orgId%3dd21688a4-8967-48de-ae82-31dda565ec51%26IsFromPopup%3dFalse&AppVersionId=278f6c38-022f-469a-944a-52819fad7ef7&entityId=94ca1fbc-d283-40db-96ea-6f23fcd55eb1&entityActionId=856c65dd-f19f-4e43-8461-73c7958edf70&orgId=d21688a4-8967-48de-ae82-31dda565ec51&IsFromPopup=False#!)|[Fetching customer Account from Salesforce and posting to destination application](https://trailhead.salesforce.com/en/content/learn/modules/admin_intro_accounts_contacts/admin_intro_accounts_contacts_basics)|-|
|POST|POST|Post|[Product2](https://portal.appseconnect.com/Account/Login?ReturnUrl=%2fAppEntityAction%3fAppVersionId%3d278f6c38-022f-469a-944a-52819fad7ef7%26entityId%3d4bec755e-b147-4291-a4ad-2b3b2be3bf69%26entityActionId%3de9196d5b-648a-440c-ab0b-15c0e390d092%26orgId%3dd21688a4-8967-48de-ae82-31dda565ec51%26IsFromPopup%3dFalse&AppVersionId=278f6c38-022f-469a-944a-52819fad7ef7&entityId=4bec755e-b147-4291-a4ad-2b3b2be3bf69&entityActionId=e9196d5b-648a-440c-ab0b-15c0e390d092&orgId=d21688a4-8967-48de-ae82-31dda565ec51&IsFromPopup=False#!)|Posting product from source application to Salesforce|-|
|POST|POST|Post|[Contact](https://portal.appseconnect.com/Account/Login?ReturnUrl=%2fAppEntityAction%3fAppVersionId%3d278f6c38-022f-469a-944a-52819fad7ef7%26entityId%3d94ca1fbc-d283-40db-96ea-6f23fcd55eb1%26entityActionId%3d65e853a0-6863-433a-a00c-24f5bb7ea3c0%26orgId%3dd21688a4-8967-48de-ae82-31dda565ec51%26IsFromPopup%3dFalse&AppVersionId=278f6c38-022f-469a-944a-52819fad7ef7&entityId=94ca1fbc-d283-40db-96ea-6f23fcd55eb1&entityActionId=65e853a0-6863-433a-a00c-24f5bb7ea3c0&orgId=d21688a4-8967-48de-ae82-31dda565ec51&IsFromPopup=False#!)|Posting Contact from Source application to Salesforce|-|
|PATCH|PATCH|Patch|[Account](https://portal.appseconnect.com/Account/Login?ReturnUrl=%2fAppEntityAction%3fAppVersionId%3d278f6c38-022f-469a-944a-52819fad7ef7%26entityId%3d8cd295fa-21e3-4c6b-9edf-c7839dd8c8d4%26entityActionId%3df86c7110-1bf6-442a-beda-cfb47830818a%26orgId%3dd21688a4-8967-48de-ae82-31dda565ec51%26IsFromPopup%3dFalse&AppVersionId=278f6c38-022f-469a-944a-52819fad7ef7&entityId=8cd295fa-21e3-4c6b-9edf-c7839dd8c8d4&entityActionId=f86c7110-1bf6-442a-beda-cfb47830818a&orgId=d21688a4-8967-48de-ae82-31dda565ec51&IsFromPopup=False#!)|Updating Accounts from Source Application to Salesforce|-|




