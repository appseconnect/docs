---
title: "DELAY Node"
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
        weight: 6
        title: "Working with Delay" 
        identifier: nodedelay
---

### What is Delay node?
`DELAY` node is used to delay or stop an execution flow for a specific period. 
For example I have an API which accepts only one request per second. So before calling the API for `POST` or `GET` operation, I can put a delay node which will delay the execution of `GET` or `POST` node for the specified amount of time.

### Working Principle

`DELAY` node in APPSeCONNECT workflow used to delay the execution of a node.

### Scenario 1

Use `DELAY` node in scenarios like API rate limit,response time delay etc.

In the below example I want to upload stock from ERP to Shopify and for creating the example we are assuming that Shopify API accept one request per second then we can implement delay node with interval time of one secondlike the below picture.

![Delay Node](/staticfiles/workflow-management/media/DelayNode/DelayNode.png)

### Scenario 2

**Application Used for the scenario is: Magento 2 and SAP B1**

The Delay node has been implemented using the touchpoint `ORDER ADD` where the `DELAY` node is used after `GET operation` and is Delayed for 20 seconds. 
While executing DELAY the orders that was placed within the specified time, will also be fetched for the sync Process




