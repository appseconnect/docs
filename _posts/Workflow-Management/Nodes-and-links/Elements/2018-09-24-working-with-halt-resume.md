---
title: "HALT/RESUME Node"
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
        weight: 5
        title: "Working with Halt/Resume" 
        identifier: nodehalt
---
### What is halt-resume node

`HALT` and `RESUME` nodes are used in a combination. We implement `HALT` node to halt the execution 
of the current node and process flow transferred to another node.After completing the transferred flow 
when the workflow engine will find a `RESUME` node then the halted process will start again. For example,
 we are executing order download process through a workflow but before completing the orders to the destination
 app we want to run the customer download process and after customer download process completes we want to resume order
 download process in this scenario we can use `Halt-Resume` node. You can apply halt node after the getting data
 for order download for halting the order download process and transferring the flow to customer download process, 
next after customer download process completes we can apply a resume node to resume the order download process.

### Working Principle

`HALT` node in APPSeCONNECT workflow used to halt a process and `RESUME` node is used to resume the halted process.

### Tip

`HALT` will always link to a Group which has "Get" and only to a Group not to a node.`RESUME`  will always come from a Group.

The above mentioned scenario can be implemented using the below workflow.

![Halt](/staticfiles/workflow-management/media/HaltResume/Halt.png)

**Example: Application used Magento2 and SAPB1**

This is the image of the workflow after successful execution.

![Halt-Run](/staticfiles/workflow-management/media/HaltResume/Halt-Run.png)

### Troubleshooting Area 

1. As shown in the above workflow screen, for executing the Touchpoint `Sales Order` Value Mapping for `Freight` and `Tax code` had to be done in the Lookups section 
of the Portal and also Freight Setup had to be done in SAP.

2. `Updated Agent` (On-Premise) is needed to be used for the sync even if it is being executed from the cloud portal. 



