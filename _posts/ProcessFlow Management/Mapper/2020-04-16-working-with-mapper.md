---
title: "Working with Mapper"
toc: true
tag: developers
category: "Processflow"
menus: 
    processnodeandlinks:
        icon: fa fa-gg
        weight: 5
        title: "Working with Mapper" 
        identifier: mapperprocessflow 

---

When working with Process Flows, it is essential to map the attributes and the entities of both source and destination applications, for synchronizing data.
Process flow [designer inteface](/processflow/designer-processflow/) gives you the space to design your business flow
and do the node configurations of the applications and trasformation activities all in one go
 
In Process Flows, you need to drag the mapper node and link up the application nodes for activating the Node Configuration window 
of the Mapper Node, as shown in [process flow creation](/processflow/creating-processflow/) section

## Prerequisites for working with Mapper Node
* You should have valid credentials to the portal.
* [Design](/processflow/designer-processflow/) a process flow or need or do mapping on the existing process flow.
* Link both Source and the Destination application with the Mapper Node 
  for activating the Node Configuration window of Mapper Node.

## Steps to work with Mapper Node

1.	Login to the Portal and Navigate to the Process Flow Section from [Process Flow Listing Page](/processflow/processflow-listing-page/).        
2.	[Create a New Process Flow](/processflow/creating-processflow/) or Edit an existing Process Flow in the [Designer Page](/processflow/designer-processflow/).      
3. Start with linking  the Source and Destination app with the mapper node.The Node configuration Window of Mapper Node opens.
 ![Mapper 1](../../../staticfiles/processflow/media/mapper/mapper_1.png)   
4. In the Node Configuration Window of Mapper Node, you will be to view the 
   [structure of the mapper](/transformation/getting-started-with-mapping/#structure-of-mapping)node.  
5.	[Structure of Mapping](/transformation/getting-started-with-mapping/#structure-of-mapping)will help you know provide a 
basic walkthrough of the Mapper Node. 
6. To work with Mapper node, you need to know about the [components of Mapping](/transformation/understanding-components-of-mapping/) or Mapper node. 
![Mapper 2](../../../staticfiles/processflow/media/mapper/mapper_2.png)  
4.	Variables are one such component which are necessary when working with 
Mapper Node. To know more, view [types of variables](/transformation/types-of-variable/) used in APPSeCONNECT.
![Mapper 3](../../../staticfiles/processflow/media/mapper/mapper_3.png)
5.	Mapper node focuses on mapping of attributes with Source & Destination
applications. To know more, view [steps to Customize Attribute Mapping](/processflow/customising-attribute-mapping/)  
6.	Mapping/Mapper of Processflows requires the usage of Library functions for transforming data from Source to Destination.   
To know more, view the [Appresource functions](/transformation/using-library-methods/).  
7.	You can also implement logic over attributes using IF condition.   
To know more, view [implementing IF condition](/processflow/steps-to-define-logic-over-destination-mapping/) in attribute mapping.  
8.Lookups maps specific value that are required to transform.   
To know more on repository, view [Lookup Repositories](/processflow/implementing-lookup-in-mapping/).  


Following are the steps and necessary links that are required to work with the Mapper node of Process Flow.
For executing a sync process user needs to execute the following tasks in mapper node.

* Providing Xpath in For Each loop 
* Creating & Mapping Root Variables and Root Entity Variable for fetching complex values.
* Defining Namespaces
* Mapping Attributes
* Implementing If Condition in various level - Attribute Level, Complex Object Level, Complex Object Collection Level. 






 
