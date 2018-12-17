---
title: "Authentication & Authorization of Generic REST Adapters"
toc: true
tag: developers
category: "Adapters"
weight:7
menus: 
   resttechnology:
        icon: fa fa-gg
        category: "Authentication of REST Adapters"
        title: "Authentication of REST Adapters"
        identifier: authentication
---
APPSeCONNECT Generic REST Adapter provides a detailed way for consuming external RESTful APIs including secure APIs.

**COMMUNICATION BETWEEN CLIENT AND SERVER IN REST ADAPTER**

In the REST architecture, clients send requests to retrieve resources, and servers send responses
to these requests. Given below is the process to make requests and send responses.


The generic rest api authentication types for AEC presently are:

  a) None — No login information in required.

  b) Basic — Basic uses base64 encoding. Because user passwords are not encrypted and the target server is not authenticated, Basic is not a secure authentication.
  Here you have to select the Authentication type as `Basic'.

  c) OAuth 2.0 - OAuth 2.0 is the industry-standard protocol for authorization. The OAuth 2.0 authorization framework enables a third-party
   application to obtain limited access to an HTTP service, either on behalf of a resource owner, or by allowing the third-party application to 
   obtain access on its own behalf.