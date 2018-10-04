---
title: "Common Use Cases for Workflow management"
toc: true
tag: 
    - developers
    - usecases
category: "Workflow-Management"           
menus: 
    workflowusecases:
        icon: fa fa-link
        title: "Basic Workflow for Customer Downloading" 
        identifier: workflowusecase-customerdownload
---

* Use Case Name - Creating a Basic Workflow for Customer Downloading.

* Brief Description – This is a basic workflow where the user can download customer from Shopify to SAP B1 with the execution of this basic and easy to use workflow through our portal .
* Actor – Implementers, Developers, Partners   
* Preconditions – Organization Creation & Connection Creation 
* Basic Flow –  The user will execute the flow as given below:

1. The user will select the Start node, where the workflow execution will begin
2. The user will now go to template section and select General Touchpoint.
3. The user will get `Adding Touchpoint`button. Input the Touchpoint from the drop down list.
4. The user will select Customer Download Touchpoint and click OK button
5. The Customer Download touchpint appears in the grid pane. 
6. The user will now link the Start node with the touchpoint.Drag the link to the touchpoint
7. The touchpoint has three group nodes - 
* [Get]()
* [Process]()
* [Post]()

8. The user after creating the workflow will give a name to the untitled workflow (Workflow for Customer Downloading) and click on `SAVE` button to save the workflow.

 ![CustomerDownload_Simple](/staticfiles/root/media//CustomerDownload_Simple.png)
            
9. The user after creating the workflow will deploy that in the Agent.

10. The user will navigate to the Enviornment module and click on Agent Setting to check the connection is active or not .

11. The user will navigate to the Deploy Configuration button to deploy the configuration. The success message will come.

12. The user will now login/signup to Shopify (App 1) and view the added Customer.

13. The user will go back to Workflow module and select the saved workflow.

14. The user will click on RUN button to run the workflow.

15. The workflow gets executed and the user can view all the nodes and links getting highlighted.

16.  The user will go to SAP B1 (App 2) and click on Business Partner Master Data to fetch the downloaded customers. 


* Alternate Flows – NOT APPLICABLE 
* Post-conditions – The user can now see that the Customer download is successful and can be fetched in SAP B1. 
* Exception courses –  The user will get resync bucket error log in the agent and in the workflow section also, if the customer download is failure.
* Frequency of use  – The user can execute the workflow as and when required. Scheduler can be used for scheduling the workflow.
* Assumptions – NOT APPLICABLE 





