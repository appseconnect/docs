---
title: "Mapper of Processflows"
toc: true
tag: developers
category: "Processflow"
menus: 
    processflow:
        title: "Mapper of Processflows"
        weight: 8
        icon: fa fa-file-word-o
        identifier: mapperprocessflow
---
When working with Process Flows, it is essential to map the attributes and the entities of both source and destination applications, for synchronizing data.
Process flow [designer inteface]() gives you the space to design your business flow
and do the node configurations of the applications and trasformation activities all in one go
 
In Process Flows, you need to drag the mapper node and link up the application nodes for activating the Node Configuration window 
of the Mapper Node, as shown in [process flow creation]() section

## Prerequisites for working with Mapper Node
* You should have valid credentials to the portal.
* [Design]() a process flow or need or do mapping on the existing process flow. (Link to Process Flow Creation Document)
* Link both Source and the Destination application with the Mapper Node 
  for activating the Node Configuration window of Mapper Node.

## Steps to work with Mapper Node

1.	Start with linking  the Source and Destination app with the mapper node. 
    The Node configuration Window of Mapper Node opens.
IMAGE
2. In the Node Configuration Window of Mapper Node, you will be to view the 
   structure of the mapper node. To know more, view [Structure of mapping]().
IMAGE
3.	[Structure of Mapping]()will help you know provide a basic walkthrough of the Mapper Node. 
To work with Mapper node, you need to know about the [components of Mapping]() or Mapper node. 
Click here to know about those components. 
IMAGE  
4.	Variables are one such component which are necessary when working with 
Mapper Node. To know more, view [types of variables]() used in APPSeCONNECT.
IMAGE
5.	Mapper node focuses on mapping of attributes with Source & Destination
applications. To know more, view [steps to Customize Attribute Mapping]()
IMAGE
6.	Mapping/Mapper of Processflows requires the usage of Library functions for transforming data from Source to Destination. 
To know more, view the [Appresource functions]().
Image
7.	You can also implement logic over attributes using IF condition. 
To know more, view [implementing IF condition]() in attribute mapping.
IMage

8.Lookups maps specific value that are required to transform. 
To know more on repository, view [Lookup Repositories]().
Image

Following are the steps and necessary links that are required to work with the Mapper node of Process Flow.
For executing a sync process user needs to execute the following tasks in mapper node.

* Providing Xpath in For-Each loop – Process of Define Xpath
* Creating & Mapping Root Variables and Root Entity Variable for fetching complex values. – Existing Doc Reframing.
* Defining Namespaces. – Doc Update Remaining
* Mapping Attributes [Existing Doc Reframing.]
* Implementing If Condition in various level – Attribute Level, Complex Object Level, Complex Object Collection Level. [Existing Doc Reframing & updating.]
* Mapping Lookups with Attributes. {Done}
* Enabling Tracking to trace the data corresponding to the attributes. [Reframing & Adding]





 
