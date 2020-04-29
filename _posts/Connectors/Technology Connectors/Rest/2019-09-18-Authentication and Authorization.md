---
title: "Authentication & Authorization of REST Adapters"
toc: true
tag: developers
category: "Connectors"
menus: 
    resttechnology:
        icon: fa fa-gg
        weight: 7
        category: "Authentication of REST Adapters"
        title: "Authentication of REST Adapters"
        identifier: authentication
---
APPSeCONNECT REST Adapter provides a detailed way for consuming external RESTful APIs including secure APIs.

**COMMUNICATION BETWEEN CLIENT AND SERVER IN REST ADAPTER**

In the REST architecture, clients send requests to retrieve resources, and servers send responses
to these requests. Given below is the process to make requests and send responses.


The rest api authentication types for AEC presently are:

  a) **No Auth** - No login information in required.

  b) **Basic** - [Basic](/connectors/BasicAuthentication/) uses base64 encoding. Because user passwords are not encrypted and the target server is not authenticated, Basic is not a secure authentication.
  Here you have to select the Authentication type as `Basic'.

  c) **OAuth 2.0** - [OAuth 2.0](/connectors/OAuth2.0/) is the industry-standard protocol for authorization. The OAuth 2.0 authorization framework enables a third-party
   application to obtain limited access to an HTTP service, either on behalf of a resource owner, or by allowing the third-party application to 
   obtain access on its own behalf.

Rest Supported Authentication type details are given below:

|Rest Authentication Type|Description|
|---|---------|
|[NoAuth Authentication]()|This authentication type disables the authorization check if the server processes are running on the local system. |
|[Basic Authentication](/connectors/BasicAuthentication/)|This type deals with Basic HTTP Authentication consisting of a Username and Password.|
|[OAuth 2.0 Authentication](/connectors/OAuth2.0/)|This type of authentication is the industry-standard protocol for authorization. OAuth 2.0 focuses on providing specific authorization flows for web applications.|