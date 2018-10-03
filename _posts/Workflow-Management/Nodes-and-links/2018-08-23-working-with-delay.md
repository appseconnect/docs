---
title: "DELAY Node"
toc: true
tag: developers
category: "Workflow"
author: "Utpal Maity"
menus: 
    nodeandlinks:
        icon: fa fa-link
        title: "Working with Delay" 
        identifier: nodedelay
---
`DELAY` node is used to delay or stop an execution flow for a specific period. For example, I have an API which accepts only one request per second. So before calling the API for `POST` or `GET` operation, I can put a delay node which will delay the execution of `GET` or `POST` node for the specified amount of time.

### Working Principle

`DELAY` node in APPSeCONNECT workflow used to delay the execution of a node.

### Tip

Use `DELAY` node in scenarios like API rate limit,response time delay etc.

In the below example I want to upload stock from ERP to Shopify and for creating the example we are assuming that Shopify API accept one request per second then we can implement delay node with interval time of one secondlike the below picture.

![Delay Node](/staticfiles/workflow-management/media/DelayNode/DelayNode.PNG)
