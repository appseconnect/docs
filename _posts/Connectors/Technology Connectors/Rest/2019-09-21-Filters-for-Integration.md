---
title: "Using Filters for Integration"
toc: true
tag: developers
category: "Connectors"
weight: 6
menus: 
    resttechnology:
        icon: fa fa-gg
        category: "Using Filters for Integration"
        title: "Using Filters for Integration"
        identifier: restfilters
---
Users can define Filters for integration scenario as per business requirements for the GET, POST and PUT operation for REST based application. 
This section of the document provide details of these filters and steps on how to initialize these filters.

## Pre-requisites
Require Valid APPSeCONNECT account.
Create REST based Connection & validate the connection.
Create Workflow/Touchpoints for the required connection.

**Note: If you have taken Pre-packaged apps and its connection templates, Touchpoints will also come pre-packaged**

## Operations

### For GET Operation

The GET Operation is for fetching data from REST. Use GET requests to retrieve resource information only – and not to modify 
it in any way. 

As GET requests do not change the state of the resource, these are said to be safe methods. Additionally, GET APIs should fetch 
multiple identical requests and produce the same result every time until another API (POST or PUT) 
has changed the state of the resource on the server.