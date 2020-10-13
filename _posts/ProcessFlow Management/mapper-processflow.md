---
title: "Mapper of Processflows"
toc: true
tag: developers
category: "Processflow"
menus: 
    processflow:
        title: "Mapper of Processflows"
        weight: 12
        icon: fa fa-file-word-o
        identifier: mapperprocessflow
---
When working with processflows, it is essential to map the attributes and the entities of both source and destination applications, for synchronizing data.
processflow [designer inteface](/processflow/designer-processflow/) gives you the space to design your business flow
and do the node configurations of the applications and trasformation activities all in one go
 
In processflows, you need to drag the mapper node and link up the application nodes for activating the Node Configuration window 
of the Mapper Node, as shown in [processflow creation](/processflow/creating-processflow/) section

## Prerequisites for working with Mapper Node
* You should have valid credentials to the portal.
* [Design](/processflow/designer-processflow/) a processflow or need or do mapping on the existing processflow.
* Link both Source and the Destination application with the Mapper Node 
  for activating the Node Configuration window of Mapper Node.

## Steps to work with Mapper Node

1.	Login to the Portal and Navigate to the processflow Section from [processflow Listing Page](/processflow/processflow-listing-page/).
2.	[Create a New processflow](/processflow/creating-processflow/) or Edit an existing processflow in the [Designer Page]().
3. Start with linking  the Source and Destination app with the mapper node.The Node configuration Window of Mapper Node opens.
IMAGE
4. In the Node Configuration Window of Mapper Node, you will be to view the 
   [structure of the mapper](/transformation/getting-started-with-mapping/#structure-of-mapping)node.
IMAGE
5.	[Structure of Mapping](/transformation/getting-started-with-mapping/#structure-of-mapping)will help you know provide a 
basic walkthrough of the Mapper Node. 
6. To work with Mapper node, you need to know about the [components of Mapping](/transformation/understanding-components-of-mapping/) or Mapper node. 
IMAGE  
4.	Variables are one such component which are necessary when working with 
Mapper Node. To know more, view [types of variables]() used in APPSeCONNECT.
IMAGE
5.	Mapper node focuses on mapping of attributes with Source & Destination
applications. To know more, view [steps to Customize Attribute Mapping]()
IMAGE
6.	Mapping/Mapper of Processflows requires the usage of Library functions for transforming data from Source to Destination. 
To know more, view the [Appresource functions](/transformation/using-library-methods/).
Image
7.	You can also implement logic over attributes using IF condition. 
To know more, view [implementing IF condition]() in attribute mapping.
IMage

8.Lookups maps specific value that are required to transform. 
To know more on repository, view [Lookup Repositories](/processflow/implementing-lookup-in-mapping/).
Image

Following are the steps and necessary links that are required to work with the Mapper node of processflow.
For executing a sync process user needs to execute the following tasks in mapper node.

* Providing Xpath in For Each loop 
* Creating & Mapping Root Variables and Root Entity Variable for fetching complex values.
* Defining Namespaces
* Mapping Attributes
* Implementing If Condition in various level - Attribute Level, Complex Object Level, Complex Object Collection Level. 
* Enabling Tracking to trace the data corresponding to the attributes.





 
