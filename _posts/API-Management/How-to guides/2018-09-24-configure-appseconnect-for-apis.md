---
title: "Configuring APPSeCONNECT for API Hosting"
toc: true
tag: 
     - developers
     - implementation
category: "API-Management"
weight: 3
menus: 
    api:
        icon: fa fa-gg
        category: "How to guides"
        title: "How to guides" 
        identifier: howtoapi 
---
APPSeCONNECT is a platform which allows hosting of APIs such that the hosted APIs could run independently.

##### Configuring APPSeConnect For APIs : 

Follow these steps to configure a APPSeCONNECT Proxy.

1. [Create an account in APPSeCONNECT Portal](https://www.appseconnect.com/free-trial/)
2. [Configure Environment for your project](/deployment/Deployment-Configuration/)
3. [Choosing Back-end Apps](/getting-started/)

Afterwards, you have to register a URL for your organization.

* Go to **API** section from the left side menu.
![Webhook Introduction](/staticfiles/api-management/media/Webhook-Introduction.png)
*  Inside **APIManagementSection** you can see Webhooks and Proxy.By defeault,Webhook section will be
  shown.You can see all your connections listed here.
* If you do not have a registered URL with **APPSeCONNECT** you have to Register a URL for your organization.Here is how to do it.
   Click on Register URL button. Upon clicking you will get a  popup like this.
![Register Url Org](/staticfiles/api-management/media/register-url-org.png)

* Please activate the Cloud hosting enabled. And provide a unique name in Register Url for your organization.For example,veonconsulting.
  So the Base URL for the organization would be `veonconsulting.appseconnectapi.com`.
* Provide the Description for your API Stack,title and Terms and Condition Documents URL.
* Afterwards choose a Software licensing for API consumption and usage as per your convinience.

After this you are all set to create an API proxy. 

[To get started on how to create a proxy follow this article.](/api-management/steps-to-create-proxy-endpoint)

[If you want to create a Webhook follow this article.](/api-management/steps-to-create-webhook-endpoint)