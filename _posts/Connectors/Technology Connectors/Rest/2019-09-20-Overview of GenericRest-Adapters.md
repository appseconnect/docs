---
title: "Overview of Rest Adapters"
toc: true
tag: developers
category: "Connectors"
menus: 
    technologyconnector:
        title: "REST"
        icon: fa fa-wpexplorer
        weight: 7
        identifier: resttechnology
---

HTTP based endpoint connector is a pre-packaged software package which provides seamless connectivity to RESTful APIs and leverage to communicate with any application 
supporting standard REST protocol and standard authentication mechanisms. This adapter is App-specific and is limited to certain apps which are developed using HTTP Protocol 
and REST Webservices. 

You can use the connector to connect to any REST based data sources or application endpoints by configuring the endpoint inside 
APPSeCONNECT through APPSeCONNECT portal and define filters and endpoint configurations correctly. Once the endpoints are properly 
configured for the REST connector, APPSeCONNECT will have access to all the data present in the application, which can later be used either 
for integration purpose or defining APIs through API management.

When the application is deployed to our portal, you need to provide credentials to connect to the particular endpoint of the 
application such that the application can fetch or send data to and fro to the application endpoint. 

## Supported Authentications

The REST adapter supports a number of [authentication](/connectors/Authentication-and-Authorization/) modules. 

- No Auth
- [Basic Auth](/connectors/BasicAuthentication/)
- OAuth 1.0
- [OAuth 2.0](/connectors/OAuth2.0/)

## Rest Protocol Supported Applications

|Rest Supported Application Name|Rest API|  
|---|---------|  
|[Magento 2](/connectors/Magento2/)|[Magento API](https://devdocs.magento.com/guides/v2.3/get-started/rest_front.html)|
|[Lightspeed](/connectors/Lightspeed/)|[Lightspeed API](https://retail-support.lightspeedhq.com/hc/en-us/articles/229129268-Understanding-the-API)|
|[Shopify](/connectors/Shopify/)|[Shopify API](https://help.shopify.com/en/api/reference)|
|[Priority](/connectors/Priority/)|[Priority API](https://prioritysoftware.github.io/restapi/)|
|[Zoho CRM](/connectors/Zohocrmv2/)|[Zoho CRM API](https://www.zoho.com/crm/developer/docs/api/overview.html)|
|[Shipstation](/connectors/Shipstation/)|[Shipstation API](https://shipstation.docs.apiary.io/#introduction/shipstation-api-requirements)|