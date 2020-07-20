---
title: "Choose Applications from catalog"
toc: true
tag: developers
category: "API-Management"
menus: 
    howtoapi:
        icon: fa fa-gg
        category: "How to guides"
        title: "Configure Apps" 
        identifier: howtochoosebackend
---
API Proxies are API services which one can create to connect to a remote data source or multiple data sources.

The heart of an API Proxy is Backend.**APPSeCONNECT** lets you connect to a data source by choosing and configuring the Backend App.

**Pre-Requisuties**

 1. [Getting a new account for APPSeCONNECT](https://www.appseconnect.com/free-trial/)
 2. [Configure your Environment](/deployment/Deployment-Configuration/)

* After that go to `App` section.

![Backend App How To](/staticfiles/api-management/media/BackendApp-How-to.png)

You will find two options here.
 1. Choose Apps
 2. Create App
 

**Choose Apps** : With this option you get to choose apps which fall under the plan your organization has been subscribed to.
![Backend App How To](/staticfiles/api-management/media/BackendApp-How-to.png)


**Create App**: With this option you can create your own custom app as per your need to connect
to a remote data source.
Upon clicking on Create App button,you are being introduced to APP Wizard.

[Here is how you can create a custom App for your organization](/configuring%20appseconnect/configurations/#a-create-custom-a)

After saving your app, you need to build the data structure for your app.

[Here is how you can create app schema, attributes and actions](/configuring%20appseconnect/configurations/)

You also need to set up protocol and template for your app.

**For credentials**,if you have your environment set up as on-premise primary agent
you need to give credential in your agent,otherwise for cloud Environment you can give 
credential from App section. [Here is how to provide credentials for cloud agent](/connectors/OLEDB-Credentials/)


After this you are all set to choose app for your API proxy Backend section which you
can create from here.

![Api Backend Configuration](/staticfiles/api-management/media/api-backend-configuration.png)



