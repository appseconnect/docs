---
title: "Workflow for product upload and stock sync"
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
        title: "Workflow for product upload and stock sync" 
        identifier: workflowusecase-product upload and stock sync
---

### Use Case Name 
 Workflow creation with Product upload and stock synchronization-post task scenario 

### Brief Description 
This workflow enables the user to add/upload product in ecommerce (Shopify) and stock update in ERP ( SAP B1) and do the execution and data sync between two apps. This is a Product upload with stock synchronization-post task scenario  workflow.
 
### Actor 
Implementers, Developers, Partners     

### Preconditions 
Organization Creation & Connection Creation 

### Basic Flow 
The user will execute the flow as given below.

Step 1 to 11 is similar to the execution flow of [basic workflow customer download](/workflow/basic-workflow-customer-download/)

12. User will login/signup to Shopify (App 1) and add/update the products. Similarly the user will log in to SAP B1 to  update stock 

13. The user can now go back to Workflow module and select the saved workflow.

![ProductUpload_StockSync](/staticfiles/workflow-management/media/ProductUpload_StockSync.png)

14. Click on RUN button to run the workflow.

15. The workflow gets executed and the user can view all the nodes and links getting highlighted.

16.  The user will go to SAP B1 (App 2) and click on **Inventory & Item Master Data** to fetch the products added in shopify. 


### Post-conditions 
The user can now see that the products  is successful fetched in SAP B1.

### Exception courses 
The user will get resync bucket error log in the agent and in the workflow section also, if the product sync is failure.

### Frequency of use  
The user can execute the workflow as and when required. Scheduler can be used for scheduling the workflow.

### Assumptions 
NOT APPLICABLE 