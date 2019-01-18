---
title: "Architecture"
toc: true
tag: developers
category: "API-Management"
weight: 2
menus: 
    api:
        icon: fa fa-gg
        title: "Architecture Overview" 
        identifier: apiarchitecture 
---

APPSeCONNECT API management is a set of micro service based environment which allows the external users to call and execute data interactions using standard set of protocol defined by the industry. APPSeCONNECT uses 
REST protocol to communicate which is translated to the application code automatically using our time tested solution and to generate output response back to the user.  In this article we will look at how 
the Architecture of APPSeCONNECT looks like.

## Architecture Diagram of APPSeCONNECT API
 
![Architecture Api Management](/staticfiles/api-management/media/architecture-api-management.png)

## Components

API management stack for our platform connects to the same stack which is followed by the integration system. There are components which connects 
different sections of the application. The External world comprises of diverse devices, some of them are Laptops, some are Mobiles, or even some are
IOT (Internet of Things) devices. These services calls our API gateway server which takes care of parsing and identifying the request. The request is then
processed by different servers, one for authentication, then applying policies, calling the backend using adapters and then to the On-premise 
servers. The Application uses Hybrid Connection using sockets directly to the on premise systems to communicate the data. Once data is retrieved, 
the application sends it back to the Policy server again and the pipeline continues by creating appropriate response. 

Let us now discuss each and every components which are getting activated during the process of API Request Life cycle. 

- **External devices**: The external devices are those which are outside the application and represents the caller of the API. There are varied number of 
devices and machines which forms the external world. Any computer or device which is having an IP address can call the service using REST protocol and 
consume the services. We terms the external devices as API Consumers.  
- **API Gateway**: The API Gateway server is the machine which receives the incoming requests first. The main principle of the gateway server is to detect
tenant for the request and channelize the request to appropriate servers which is capable of handling the incoming request. The Gateway automatically handles 
all incoming requests and load balance the incoming requests.
-  **Authentication Server**: Authentication server is a special server that can reject or approve an incoming request based on the authentication key or session
provided to it. As API provider you can configure the authentication server correctly enabling the users to generate authentication token which needs to be passed 
for every request to get a valid response. In case authentication is unsuccessful the server will respond as `403 Forbidden` error message. 
-  **Policy Server**: Policy server are a set of pluggable module which are applied to a set of APIs, in such a way so that it hooks automatically to the 
request pipeline and executes its code directly for every request.   
-  **Backend Gateway**: Backend gateway is the server component which hosts different micro-service containers that takes care of actual execution. The backend automatically
detects the component which is capable of returning the data for a particular request and thereby can also route the request to a Hybrid connection queue which will
be processed by On-premise agents.   
-  **Hybrid Connection Queue**: Hybrid Connection Queue is the service which hosts connection to all the onpremise agents and takes care of executing a particular request directly 
   to an on premise server. When a request is made to an OnPremise server, the server even though not having an Global public IP, can also generate response to the request.
-  **On Premise Application**: The On-premise tool also uses our APPSeCONNECT gateway to communicate with the apps. The gateway loads adapters and executes a particular request
on premise, and proxies the same to our network. The on-premise gateway installation is a small tool which can connect to our internal services and proxy the data to 
our servers. 
-  **Cloud Application Gateway**: Cloud application gateway is the micro-services that takes care of an incoming requests directly from our cloud server. If the data is available
directly on the servers, the cloud hosted microservice containers executes the request and connects to the cloud configured applications using adapters and updates the data.
-  **Adapters**: Adapters are special appseconnect component that can bridge the communication between an application with APPSeCONNECT. An adapter is capable of translating the 
language in which application understands to something which our services understand. The adapters are developed specific to an application or a protocol.  
-  **Configuration Users**:Configuration users are the users who configures the APIs or maintain the APIs on APPSeCONNECT and can tweak and change services, policies etc.

API management system exposes the valuable internal data and business logic via a common gateway that takes care essential plumbing work that is required
when it is in transit. It takes care of authentication, authorizations, applies policies, calls backend and creates a response back to the
caller. 

## Simple Architectre Diagram of APPSeCONNECT API

![Api Management Simple Architecture](/staticfiles/api-management/media/api-management-simple-architecture.png)

The internal data is exposed via APPSeCONNECT easily using REST based services which will channel the partners and consumers to use those 
APIs as per requirements and deliver business intelligence. 