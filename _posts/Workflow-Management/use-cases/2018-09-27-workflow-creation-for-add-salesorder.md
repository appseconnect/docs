---
title: "Workflow for adding sales order"
toc: true
tag: 
    - developers
    - usecases
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    workflowusecases:
        icon: fa fa-link
        title: " Workflow for adding sales order" 
        identifier: workflowusecase-addsales order
---

### Use Case Name  
Creating a Workflow for sales order

### Brief Description
 This is a workflow where the user can add sales order in Eccommece (Shopify) and execute the  workflow to sync the sales order in the ERP (SAPB1) 

### Actor 
Implementers, Developers, Partners  

### Preconditions 
Organization Creation & Connection Creation 

### Basic Flow

The user will execute the flow as given below.

Step 1 to 11 is similar to the execution flow of [basic workflow customer download](/workflow/basic-workflow-customer-download/)

12. The user will now login/signup to Eccomerce (Shopify - App 1) and add sales order.

13. The user will go back to Workflow module and select the saved workflow.

![Workflow-SalesOrderAdd](/staticfiles/workflow-management/media/Workflow-SalesOrderAdd.png)

14. The user will click on RUN button to run the workflow.

15. The workflow gets executed and the user can view all the nodes and links getting highlighted.

16.  The user will go to SAP B1 (App 2)  to fetch the synced data - Sales Order will sync in Sales Order section. 



### Post-conditions
 The user can now see that the sales order is  available in ERP( SAP B1)

### Exception courses 
The user will get resync bucket error log in the agent and in the workflow section also, if the sales order sync is failure.       

### Frequency of use
 The user can execute the workflow as and when required. Scheduler can be used for scheduling the workflow.

### Assumptions 
NOT APPLICABLE 


