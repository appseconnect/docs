---
title: "Workflow creation & execution with splitter"
toc: true
tag: 
    - developers
    - usecases
category: "Workflow-Management"   
menus: 
    workflowusecases:
        icon: fa fa-link
        title: "Filter data use in Workflow" 
        identifier: usedcases-workflow with splitter
        
---

### Use Case Name  
Workflow showing task configuration with  splitter rule

### Brief Description 
 This workflow enables the user to add customer in Ecommerce (Shopify) and enable the execution and data sync between Eccomerce & ERP with [Splitter](/workflow/working-with-splitter/) node. The Get node will get all the data and the splitter property action will process the data as defined in filteration criteria. The filtered data will be processed, merged and get posted in the destination. `Rule` decision action can be applied for checking the success & Failure of this workflow execution.

This workflow allows task configuration with  data splitting.
 
### Actor
Implementers, Developers, Partners  

### Preconditions  
Organization Creation & Connection Creation 

### Basic Flow
The user will execute the flow as given below.

Step 1 to 11 is similar to the execution flow of [basic workflow customer download](/workflow-management/basic-workflow-customer-download/)

12. The user will now login/signup to Eccomerce (Shopify - App 1) and add customer 

13. The user will go back to Workflow module and select the saved workflow.

![WorkflowSplitter](/staticfiles/workflow-management/media/WorkflowSplitter.png)

14. The user will click on RUN button to run the workflow.

15. The workflow gets executed and the user can view all the nodes and links getting highlighted.

16.  The user will go to SAP B1 (App 2) section to fetch the synced data from Shopify and view the customer details.


### Post-conditions
The user can now see that the sales order, delivery to invoice gneration in available in ERP( SAP B1)

### Exception courses 
The user will get resync bucket error log in the agent and in the workflow section also, if the sales order sync is failure.       

### Frequency of use 
The user can execute the workflow as and when required. Scheduler can be used for scheduling the workflow.

### Assumptions
NOT APPLICABLE 