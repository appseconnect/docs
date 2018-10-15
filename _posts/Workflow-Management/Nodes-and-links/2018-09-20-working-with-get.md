---
title: "GET Node"
toc: true
tag: 
    - developers
    - nodes
category: "Workflow"
menus: 
    nodeandlinks:
        icon: fa fa-link
        title: "Working with Get" 
        identifier: nodeget 
---

### What is Get Node?

`GET` node is used for getting data from an application by using the API provided by the application. When we drag a `GET` node in the workflow we need to select a touchpoint. For example we have a touchpoint which will add a customer from Shopify (ECommerce) to Sap B1 (ERP). If we add a `GET` node in the workflow based on this touchpoint then `GET` node will fetch data from Shopify based on the action criteria defined in that touchpoint.


### Working Principle

`GET` node in APPSeCONNECT workflow is tied to a particular connection and a touchpoint activated in that connection, such that when the node is executed the data from that particular Application is generated 
and responded back to the application workspace. 

The highlighted node with red one is an implementation of `GET` node.

![Get Node](/staticfiles/workflow-management/media/GetNode/GetNode.PNG)

Below picture depicts the action filter based on which action of `GET` node will be performed.Depending on APP the filter structure may changed.

![Action Filter](/staticfiles/workflow-management/media/GetNode/ActionFilter.PNG)
