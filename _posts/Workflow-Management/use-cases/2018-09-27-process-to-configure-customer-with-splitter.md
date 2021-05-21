---
title: "Workflow creation & execution with splitter"
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
        title: "Use cases of splitter" 
        identifier: usedcases-workflow
        
---

### Use Case Name  
Workflow showing task configuration with  splitter rule

### Brief Description 
 
This workflow enables the user to add business partner (in Magento 2) and enable the execution and data sync between Magento 2 & SAP B1 with [Splitter](/workflow/working-with-splitter/) node. 
The business partner touchpoint is used to fetch multiple customers, SPLITTER is used after GET Node and Merger is used after PROCESS. 

In this case the multiple customer would be fetched and will be split. A self-loop is implemented on PROCESS node which will be executed as per the number of datas present. MERGER will merge all the data in a batch of 2 and will post the data.

For Example: 20 Business Partner will be merged into a batch of 2 which means it will be merged into 10 Packets. 
Similarly if there are 4 data(s) they will be merged in to 2 and will be generating 2 Packets each.


This workflow allows task configuration with data splitting.
 
### Actor
Implementers, Developers, Partners  

### Preconditions  
Organization Creation & Connection Creation 

### Basic Flow
The user will execute the flow as given below.

Step 1 to 11 is similar to the execution flow of [basic workflow customer download](/workflow/basic-workflow-customer-download/)

12. The user will now login/signup to Eccomerce (Magento 2 - App 1) and add business partner.

13. The user will go back to Workflow module and select the saved workflow.

![WorkflowSplitter](/staticfiles/workflow-management/media/WorkflowSplitter.png)

14. The user will click on RUN button to run the workflow.

15. The workflow gets executed and the user can view all the nodes and links getting highlighted.

16.  The user will go to SAP B1 (App 2) section to fetch the synced data from Magento 2 and view the customer details.


### Post-conditions
The user can now see that the sales order, delivery to invoice gneration in available in ERP( SAP B1)

### Exception courses 
The user will get resync bucket error log in the agent and in the workflow section also, if the sales order sync is failure.       

### Frequency of use 
The user can execute the workflow as and when required. Scheduler can be used for scheduling the workflow.

### Assumptions
NOT APPLICABLE 