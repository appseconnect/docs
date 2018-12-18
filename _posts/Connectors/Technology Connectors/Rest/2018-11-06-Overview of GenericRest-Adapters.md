---
title: "Overview of Generic Rest Adapters"
toc: true
tag: developers
category: "REST"
menus: 
    technologyconnector:
        title: "REST"
        icon: fa fa-wpexplorer
        weight: 7
        identifier: resttechnology
---

Http based endpoint connector is a pre-packaged software package which provides seamless connectivity to RESTful APIs and leverage to communicate with any application 
supporting standard REST protocol and standard authentication mechanisms. This adapter is App-specific and is limited to certain apps which are developed using HTTP Protocol 
and REST Webservices. 

You can use the connector to connect to any REST based data sources or application endpoints by configuring the endpoint inside 
APPSeCONNECT through APPSeCONNECT portal and define filters and endpoint configurations correctly. Once the endpoints are properly 
configured for the REST connector, APPSeCONNECT will have access to all the data present in the application, which can later be used either 
for integration purpose or defining APIs through API management.

When the application is deployed to our portal, you need to provide credentials to connect to the particular endpoint of the 
application such that the application can fetch or send data to and fro to the application endpoint. 

**Supported Authentications**

The REST adapter supports a number of [authentication]() modules. 

- No Auth
- [Basic Auth]()
- [OAuth 1.0]()
- [OAuth 2.0]()