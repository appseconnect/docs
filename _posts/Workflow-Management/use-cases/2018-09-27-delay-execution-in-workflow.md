---
title: "Delay execution workflow"
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
        title: "Workflow  with delay execution filter" 
        identifier: workflowusecase-with delay execution filter
---

### Use Case Name 
Workflow  with delay execution filter

### Brief Description 
This workflow enables the user to configure a task and do the execution and data sync between two apps with delay filter. 
This worflow shows a scenario where stock update is getting executed with delay filter.
 
### Actor 
Implementers, Developers, Partners     

### Preconditions 
Organization Creation & Connection Creation 

### Basic Flow  
The user will execute the flow as given below.

Step 1 to 11 is similar to the execution flow of [basic workflow customer download](/workflow/basic-workflow-customer-download/)
12. The user will now login/signup to SAP B1 (App 1) and update the stock. 
13. The user will go back to Workflow module and select the saved workflow.  
![DelayWorkflow](/staticfiles/workflow-management/media/DelayWorkflow.png)
14. The user will click on RUN button to run the workflow.
15. The workflow gets executed and the user can view all the nodes and links getting highlighted.
16.  The user will go to Shopify (App 2) and can view the  stock updated in shopify. 


### Post-conditions 
The user can now see that the products  is successful fetched in Shopify.

### Exception courses
 The user will get resync bucket error log in the agent and in the workflow section also, if 
the product sync is failure.

### Frequency of use   
 The user can execute the workflow as and when required. Scheduler can be used for scheduling the workflow.

### Assumptions  
 NOT APPLICABLE 