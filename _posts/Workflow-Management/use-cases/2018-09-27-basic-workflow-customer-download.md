---
title: "Basic Workflow for Customer Downloading"
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
        title: "Basic Workflow for Customer Downloading" 
        identifier: workflowusecase-customerdownload
---

### Use Case Name 
Basic Workflow for Customer Downloading.

### Brief Description 
This is a basic workflow where the user can download customer from Shopify to SAP B1 with the execution of this basic and easy to use workflow through our portal .

### Actor
 Implementers, Developers, Partners   

### Preconditions
 Organization Creation & Connection Creation 

### Basic Flow
  The user will execute the flow as given below

1. The user will select the Start node, where the workflow execution will begin
2. Go to template section and select General Touchpoint.
3. You will get `Adding Touchpoint`button. Input the Touchpoint from the drop down list.
4. Now select Customer Download Touchpoint and click OK button
5. The Customer Download touchpint appears in the grid pane. 
6. Now link the Start node with the touchpoint.Drag the link to the touchpoint
7. The touchpoint has three group nodes - 
* [Get](/workflow/working-with-get/)
* [Process](/workflow/working-with-process/)
* [Post](/workflow/working-with-post/)

8. Workflow is created and then give a name to the untitled workflow (Workflow for Customer Downloading) and click on `SAVE` button to save the workflow.
 ![CustomerDownload_Simple](/staticfiles/workflow-management/media/CustomerDownload_Simple.png)        
9.  After creating the workflow deploy that in the Agent.
10. Navigate to the Environment module and click on `Agent Setting` to check the connection is active or not .
11. Now go to the `Deploy Configuration` button to deploy the configuration. The success message will come.
12. Login/signup to Shopify (App 1) and view the added Customer.
13.  Now check  back to Workflow module and select the saved workflow.
14. Then click on RUN button to run the workflow.
15. The workflow gets executed and the user can view all the nodes and links getting highlighted.
16.  The user will go to SAP B1 (App 2) and click on Business Partner Master Data to fetch the downloaded customers. 


### Post-conditions
The user can now see that the Customer download is successful and can be fetched in SAP B1. 
### Exception courses 
The user will get resync bucket error log in the agent and in the workflow section also, if the customer download is failure.
### Frequency of use
The user can execute the workflow as and when required. Scheduler can be used for scheduling the workflow.
### Assumptions 
NOT APPLICABLE 





