---
title: "Prestashop"
toc: true
tag: developers
category: "Connectors"
menus: 
    applicationconnector : 
        icon: fa fa-gg
        weight: 5 
        title: "Prestashop"
        identifier: prestashopconnector
---

Application configuration is an integral activity prior to the process of integration. If your chosen application is Prestashop, credentials 
need to be provided for validating the agent. Here you will find the detailed description on how to configure the agents for the application
of Prestashop, Troubleshooting issues and the attributes and action.

Prestashop is a REST (CRUD type) application which supports the Webservices authentication. The Adapter of the application Prestashop provides 
the leverage to communicate and adapt with the AEC Portal. This section provides you the detailed process of validating the credential of the 
application Prestashop.

# Pre-requisites for Prestashop Configuration 

* Valid APPSeCONNECT Portal credentials.
* Select the Application Prestashop in the APP section.
* Create connection for Prestashop.
* Publish any Touchpoint, Update Adapters and Update Configuration in the agent.

## Configure the Agent

To Know about Agent Configuration, [Click here](/deployment/Deployment-Configuration/)

## Configure the Prestashop Application in the Agent

1. In the App Configuration panel of the agent, click on the + button, beside the app Prestashop.
2. On clicking the + button, the credential panel opens for the application Prestashop. 
3. Prestashop users can fetch the webservice key from Prestashop portal only. 
   Navigate to Advanced Parameters > Webservice > Key. For more details related to webservice, [click here]().  
**Note: `Web Id Prefix` is an optional field. However, user can provide the detail as per the requirements.**  
4. Web Id Prefix is generally used when the Prestashop is having multiple Store in the same installation. 
   The prefix of the respective store is provided in the Web Id Prefix to segregate the data coming from multiple stores.
5. After providing the credentials, click on the SAVE Button followed by Validate.

Following this process, the Prestashop application can be configured in the agent.

## Troubleshooting

**ISSUE 1:Cannot POST data, Source application returned False**

`Cannot POST data, Source application returned False` even if Data is present in the Source Application (Prestashop).

Some of the basic troubleshooting issue happens due to improper validations. In this case, check for the proper validations of the credential 
for the source application adapter. Also, try deleting the Temp and Cache files from the portal and the system, and try validating the adapter again. 
Once validated, resync the workflow for successful execution.

## Attributes and Actions

While defining a connect to a particular API endpoint in Salesforce, you require clear understanding about the data requirements and endpoint configurations. 
You can refer to [this](https://devdocs.magento.com/guides/v2.0/rest/list.html) document to find all the endpoint details of your Salesforce installation. 
To define the endpoint in APPSeCONNECT, you need Actions and Entities. Actions are specifically targetted for a particular endpoint while schema is the 
data needed to execute the API. Here are the list of some of the prepackaged API actions defined for you which you can easily plug and play while doing your 
integrations. 

|Endpoint|Action|Action Type|Schema|UI Help|API Help|
|---|---|---|---|------|-----|




