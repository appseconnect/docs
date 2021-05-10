---
title: "Workflow Elements"
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
        weight: 1
        title: "Elements" 
        identifier: nodeselement
---

### Why do you need element?

A Workflow is designed using elements that helps in integrating data graphically. 
Elements are generally used to set actions for data required for integrating. 
In case of Workflow of APPSeCONNECT, there are several elements that you can perform while executing the workflow.

### Type of Elements in APPSeCONNECT Workflow 

|Element Name|Description|
|---|--------|
|[Get](/workflow/working-with-get/)|The element GET is used for fetching data from the source application by using the API provided by the application|
|[Process](/workflow/working-with-process/)|PROCESS node is used for transforming data from one format to another format based on the mapping logic specified for that touchpoint|
|[Post](/workflow/working-with-post/)|POST node is used for pushing data to an application based on the API provided by the destination application|
|[Halt-Resume](/workflow/working-with-halt-resume/)|HALT node is implemented to halt the execution of the current node and the flow is transferred to another touchpoint/node. Once the Workflow engine gets notified with the RESUME node, the halted process would start again. HALT and RESUME nodes are used in a combination|
|[Delay](/workflow/working-with-delay/)|DELAY node is used to delay or stop an execution flow for a specific period|

These activities have some scope and limitations which are applied to ensure limiting critical resources. 