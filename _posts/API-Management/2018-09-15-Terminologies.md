---
title: "Important Terminologies"
toc: true
tag: developers
category: "API-Management"
menus: 
    api:
        icon: fa fa-gg
        title: "Terminology" 
        identifier: apiterminology 
---

This article demonstrates the important terminologies that you need to consider while using our API management system.

- **Webhook API** - Web hooks are special web based callback which allows the user to configure an endpoint for a particular resource, such that when there is an update to that resource, the data for that particular resource will be automatically called back to the API url. For APPSeCONNECT, Webhook API will provide an unique URL which can be tracked separately for a particular resource whcih can be configured for an application. 
- **Proxy APIs** - Proxy APIs are those which just proxies an existing API to the external world through the help of APPSeCONNECT platform. Even though the APP might be providing an endpoint which can be called directly, organziations prefer to put is behind a firewall using a separate layer which help them to secure and maintain a proper standard for the data coming from the API. Proxy APIs on APPSeCONNECT helps to achieve these goals for a particular organization. 
- **Flow APIs** - Flow APIs are full fledged API which allows transformation of data before an API data is returned. A flow API will allow you to maintain payload, soft check the data before it is actually getting transmitted to the external world. A flow API can be visually configured and can also return data from multiple endpoints. 
- **Backend APPs** - Backend APPs for APPSeCONNECT are those which can connect to a backend data source. In case of APPSeCONNECT, we ask the customer to provide details of all the apps which might need to be included as data source for the APIs. The backend APPs can either be hosted in cloud (if the application provides a web based API endpoints) or can be configured on premise (for on premise data sources). We also provide pre-packaged application templates that has readymade interfacing to the APIs. 
- **Authentication Server** - As the name suggests, APPSeCONNECT redirects all of the requests to a particular authentication server to validate the authenticity of a request. The authentication server is responsible of keeping track of each of the calls, to validate a user and also return error messages appropriately. 
- **API Versions** - API versioning is a concept which allows the same API to be modified or changed even after it is deployed to production. As an API endpoint is critical to be maintained, the API URL needs to be running even though a new change is performed on the API stack. APPSeCONNECT provides versioning of APIs which lets the developer create a staging API before it is deployed to public. 
- **Frontend Configuration** - Frontend of an API provides face of the API. It provides the name of the API, its description, the Suffix URL, or even the operation type and its description. You can also mark an API to be Obsolete or Release an API from Frontend configuration. 
- **Policy** - APPSeCONNECT provides a set of predefined policies which allows the implementers to apply them on a particular endpoint. A policy is a filter to an HTTP Pipeline which allows to perform certain action on the request and either respond or pass through it correctly. 
- **Swagger Endpoint** - To test a particular API, Swagger endpoint is helpful. Swagger gives a API testing environment which you can make use to generate documentation for the whole API stack.
- **Inbound** - Inbound is mainly deals with the policies which are executed before the backend action is executed.
- **Outbound** - Outbound policies are applied after the backend action is executed and output response is received to the API stack.
- **Adapter** - To communicate to the external application, APPSeCONNECT requires an adpater which changes the language in which APPSeCONNECT understands the data to something which is understandable to the application. Adapter is developed using the [SDK](/sdk/Overview-of-SDK/) supported by APPSeCONNECT. 
- **Protocol** - A protocol or rule is a common set of transport pattern which is associated to an application. An adapter generally communicates with an application using the protocol defined by the application itself.
- **Response setup** - Just like frontend setup, the Response setup is also an important aspect of each API. This section allows to define how the data needs to be returned from the API.