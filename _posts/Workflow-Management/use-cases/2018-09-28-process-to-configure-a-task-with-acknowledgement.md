---
title: " Workflow execution with acknowledgement data"
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
        title: "Workflow execution with acknowledgement data" 
        identifier: usedcases-workflow with acknowledgement data
---

### Use Case Name 
Workflow showing task configuration with acknowledgement data

### Brief Description 
This workflow enables the user to add payment and update payment response in Eccommerce (Shopify) and enable the execution and data sync between Eccomerce & ERP. This is a payment cycle configuration  done with acknowledgement data.
 
### Actor 
 Implementers, Developers, Partners  

### Preconditions 
 Organization Creation & Connection Creation 

### Basic Flow
 The user will execute the flow as given below.

Step 1 to 11 is similar to the execution flow of [basic workflow customer download](/workflow/basic-workflow-customer-download/)


12. The user will now login/signup to Eccomerce (Shopify - App 1) and add payment & update payment response.


13. The user will go back to Workflow module and select the saved workflow.

![Acknowldegementdata-workflow](/staticfiles/workflow-management/media/Acknowldegementdata-workflow.png)

14. The user will click on RUN button to run the workflow.

15. The workflow gets executed and the user can view all the nodes and links getting highlighted.

16.  The user will go to SAP B1 (App 2) section to fetch the synced data from Shopify and view the payment upload details.


### Post-conditions
The user can now see that the sales order, delivery to invoice gneration in available in ERP( SAP B1)

### Exception courses 
The user will get resync bucket error log in the agent and in the workflow section also, if the sales order
    sync is failure.       

### Frequency of use
The user can execute the workflow as and when required. Scheduler can be used for scheduling the workflow.

### Assumptions 
 NOT APPLICABLE 