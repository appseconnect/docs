---
title: " Workflow execution with data filteration"
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
        title: "Filter data use in Workflow" 
        identifier: usedcases-workflow with filter
---

### Use Case Name  
Workflow creation with data filteration

### Brief Description 
This workflow enables the user to add customer in Ecommerce (Shopify) and enable the execution and data sync between Eccomerce & ERP with [Filter](/workflow/working-with-filter/)  node . 

The Get node will get all the data and the filter property action will process the data as defined in filteration criteria. The filtered data will be processed and get posted in the destination. This workflow allows task configuration with  data filteration.
 
### Actor
Implementers, Developers, Partners  

### Preconditions 
Organization Creation & Connection Creation 

### Basic Flow
The user will execute the flow as given below.

Step 1 to 11 is similar to the execution flow of [basic workflow customer download](/workflow/basic-workflow-customer-download/)

12. The user will now login/signup to Eccomerce (Shopify - App 1) and add customer 

13. The user will go back to Workflow module and select the saved workflow.

![customerdownload_filter](/staticfiles/workflow-management/media/customerdownload_filter.png)

14. The user will click on RUN button to run the workflow.

15. The workflow gets executed and the user can view all the nodes and links getting highlighted.

16.  The user will go to SAP B1 (App 2) section to fetch the synced data from Shopify and view the customer details.


### Post-conditions
The user can now see that the sales order, delivery to invoice gneration in available in ERP( SAP B1)

### Exception courses 
The user will get resync bucket error log in the agent and in the workflow section also, if the sales order
sync is failure.       

### Frequency of use
The user can execute the workflow as and when required. Scheduler can be used for scheduling the workflow.

### Assumptions 
 NOT APPLICABLE 