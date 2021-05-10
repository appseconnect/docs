---
title: "Process Property"
toc: true
tag: 
     - developers
     - actions
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    nodeandlinks:
        icon: fa fa-link
        weight: 3
        title: "Process Property"
        identifier: nodesprocess
---

### Why do you need process property?
In APPSeCONNECT Workflow, users/implementers get the extra privilege to add special properties 
for better implementation of the business process. In case of APPSeCONNECT Workflow, there are 
several process properties that one can perform while executing the workflow.

### Types of Process Properties in APPSeCONNECT Workflow 

|Process Property Name|Description|
|---|--------|
|[Split](/workflow/working-with-splitter/)|Split property/node is used to split a data packet into smaller chunks for processing in small batches|
|[Merger](/workflow/working-with-merger/)|Merger property/node is used to merge small data chunks yet multiple in numbers into a single data packet| 
|[Filter](/workflow/working-with-filter/)|Filter property/node is used to fetch a subset of data from an original data packet based on the criteria specified|
|[Decision](/workflow/working-with-decision/)|Decision property/node is provided to implement decision making ability to the workflow for better implementation of the business process|
|[Sequencer](/workflow/working-with-sequencer/)|Sequencer property/node is used to order elements by a certain attribute. This node can be applied to any collection of elements|