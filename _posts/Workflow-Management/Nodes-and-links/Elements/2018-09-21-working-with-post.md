---
title: "POST Node"
toc: true
tag: 
    - developers
    - nodes
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    nodeselement:
        icon: fa fa-link
        weight: 4
        title: "Working with Post" 
        identifier: nodepost
---
### What is Post Node?

`POST` node is used for pushing data to an application based on the API provided by the application.You need to provide data in the required format to the `POST` node most of the time we use `PROCESS` node befor a `POST` node to prepare required data format for the `POST` node . When we drag a `POST` node in the workflow we need to select a touchpoint. For example we have a touchpoint which will add a customer from Shopify (ECommerce) to Sap B1 (ERP) `POST` node will take the transform data from `PROCESS` node and push the data in SAP B1.  

### Working Principle

`POST` node in APPSeCONNECT workflow is tied to a particular connection and a touchpoint activated in that connection, such that when the node is executed the data will be posted to the application.

The highlighted node with red one is an implementation of `POST` node.

![Post](/staticfiles/workflow-management/media/POSTNode/Post.png)