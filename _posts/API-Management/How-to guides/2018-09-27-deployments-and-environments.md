---
title: "Deploy and publish APIs to different environments"
toc: true
tag: developers
category: "API-Management"
menus: 
    howtoapi:
        icon: fa fa-gg
        category: "How to guides"
        title: "Deploy to environments" 
---

Deploying and publishing API is one of the primary concern after you have successfully configured 
an API on your API stack. There are various deployment options available on APPSeCONNECT which will 
help you to run an API either on your own Premise or on Cloud dependening on the availability of data. For on premise 
deployments, you need to consider installing our [on-premise agent](/deployment/Deployment-Configuration/), and configure it to be active 
on Environment section of APPSeCONNECT. 

To Deploy an API, you need to make sure, all pre-requisites of an API development is met.

## Pre-requisites for Deploying and Publish API's:  

* [Getting a new account for APPSeCONNECT](/getting%20started/user-registration/) 
* [Configuring Environments, installing / deploying Agent](/deployment/Deployment-Configuration/)
* [Choosing and Configuring Backend APPs](/api-management/choosing-backend-apps/)
* [Configuring / Importing Schemas and Actions](/transformation/working-with-schemas-action-filter/)
* [Feeding Credentials for applications and data sources](/connectors/OLEDB-Credentials/)
* [Connecting to your data sources](/api-management/connecting-to-a-data-source/) 

After all these steps are done, make sure the `environment is kept running` and `credentials are properly updated`. 
Once confirmed, you can add new APIs, and do an `Update Configuration`, before executing it from Cloud. 

You can use [Swagger endpoint URL](/api-management/steps-to-create-swagger-documentation/)to call the APIs from APPSeCONNECT portal itself. 

## Steps to Deploy and publish API's 

1. Login to the APPSeCONNECT Portal with valid credentials. 

2. Create a new a Proxy API from the API Section of the AEC Portal. Steps to create proxy API is [given here](/api-management/steps-to-create-proxy-endpoint/). 

3. Once, the API is created, login to the agent and Update Configuration, before executing it from the cloud.