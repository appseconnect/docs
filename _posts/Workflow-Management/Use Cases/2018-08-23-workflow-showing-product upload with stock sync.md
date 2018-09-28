title: "Workflow showing product upload and stock sync"
toc: true
tag: developers
category: "Workflow"
---


•	Use Case Name - Workflow creation with product upload and stock sync
•	Brief Description – This workflow enables the user to add/upload product in ecommerce (Shopify) and stock update in ERP ( SAP 
    B1) and do the execution and data sync between two apps. 
 
•	Actor – Implementers, Developers, Partners     
•	Preconditions – Connection Creation & Touchpoint creation should be done. 
•	Basic Flow – The user will execute the flow as given below.

Step 1 to 11 is similar to the execution flow of [basic workflow customer download] (insert link)

12. The user will now login/signup to Shopify (App 1) and add/update the products. Similarly the user will log in to SAP B1 to  update stock 


13. The user will go back to Workflow module and select the saved workflow.

![ProductUpload_StockSync](media/ProductUpload_StockSync.png)

14. The user will click on RUN button to run the workflow.

15. The workflow gets executed and the user can view all the nodes and links getting highlighted.

16.  The user will go to SAP B1 (App 2) and click on Inventory & Item Master Data to fetch the products added in shopify. 

•	Alternate Flows – NOT APPLICABLE 
•	Post-conditions – The user can now see that the products  is successful fetched in SAP B1.
•	Exception courses –  The user will get resync bucket error log in the agent and in the workflow section also, if the product        sync is failure.
•	Frequency of use  – The user can execute the workflow as and when required. Scheduler can be used for scheduling the workflow.
•	Assumptions – NOT APPLICABLE 