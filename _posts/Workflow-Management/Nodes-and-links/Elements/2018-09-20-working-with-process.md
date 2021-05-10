---
title: "PROCESS Node"
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
        weight: 3
        title: "Working with Process" 
        identifier: nodeprocess
---

### What is Process Node?
`PROCESS` node is used for transforming data from one format to another format based on the mapping logic specified for that touchpoint. When we drag a process node in the workflow we need to select a touchpoint. For example, we have a touchpoint which will add a customer from Shopify (ECommerce) to Sap B1 (ERP), so for adding data to SAP B1, we need to convert Shopify data to SAP B1 format. `PROCESS` node will do that work depending on the transformation logic written in the touchpoint.

### Working Principle

`PROCESS` node in APPSeCONNECT workflow is tied to a particular connection and a touchpoint activated in that connection, such that when the node is executed the data will be transformed base on touchpoint mapping logic.

The highlighted node with red one is an implementation of `PROCESS` node.  
 ![ProcessNode](/staticfiles/workflow-management/media/ProcessNode/ProcessNode.png)  

**Note: On clicking the Process node, Mapping, Source Entity & Destination Entity button appears on the property action window.**

* Clicking on the Source Entity Tab will display all the Source Entity and the attributes present.
* Clicking on the Destination Entity tab will display all the destination entity and the attributes present.  
 ![ProcessNode2](/staticfiles/workflow-management/media/ProcessNode/ProcessNode2.png)  

Below picture is an example of mapping based on which data transformation will be performed by the `PROCESS` node.  
![Mapping](/staticfiles/workflow-management/media/ProcessNode/Mapping.png)


