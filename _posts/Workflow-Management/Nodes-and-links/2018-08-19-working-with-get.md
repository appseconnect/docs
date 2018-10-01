---
title: "GET Node"
toc: true
tag: developers
category: "Workflow"
author: "Abhishek Sur"
menus: 
    nodeandlinks:
        icon: fa fa-link
        title: "Working with Get" 
        identifier: nodeget 
---
To get data from an application, APPSeCONNECT uses `GET` node. A `GET` node is associated with a particular action which
uses specific action filters and credentials mentioned to the application to get a response back to APPSeCONNECT. As APPSeCONNECT always talk in terms of 
XML, it is the work of an adapter to pass the data in XML format such that the data is properly interpreted before performing a transformation 

**ProTip:** GET node does not allow an input as the main idea of GET node is to generate output by calling an API tied to an application.

### Working Principle

Each node in APPSeCONNECT workflow is tied to a particular connection, such that when the node is executed the data from that particular Application is generated 
and responded back to the application workspace. 

![GET Node](/staticfiles/workflow-management/media/ip-restrict-policy.PNG)

The configurations that are allowed to a Get node are as follows. 

|Name|Description|Supported Endpoint|Support Self loop|
|-----------|--------------------|----------|----------|
|Span of time|Represent the amount of timespan required after which the requests from that particular user will automatically throttle|Yes|Infinity|
|Max Requests|Number of requests to be allowed during the specified timespan|Yes|100|

### Node Usage

The policy can be applied only at `inbound` section.

### Scope

Currently the policy can be applied at API Operation Scope only.


