---
title: "Halt-Resume Node"
toc: true
tag: developers
category: "Processflow"
menus:
    processnodeandlinks:
        icon: fa fa-gg
        weight: 6
        title: "Working with HaltResume" 
        identifier: haltresumeprocesflow
---

## What is halt-resume node
HALT and RESUME nodes are used in a combination. 
We implement HALT node to halt the execution of the current node and process flow transferred to another node. 
After completing the transferred flow the Process Flow engine will find the RESUME node of the corresspoding HALT, which will initiate the resume process. 


## Understanding conditions:

- Halt Resume is a paired node and while dragging the node to the designer, both Halt and Resume get dragged as well.
- You will not have any node configuration window for Halt Resume Nodes
- The flow remains halted until, **resume node** encounters the flow.
- You can add multiple Halt Resume nodes in a flow and each pair of Halt Resume nodes is distinguished using multiple colour combinations.
- On deleting the Halt Node, the corresponding Resume node gets deleted as well.
- You can connect Resume node with an another Resume Node, but you cannot connect a HALT with an another HALT.

## Prerequisites:

- You need to have valid credentials of the portal.
- You need to [create a Process Flow](/processflow/creating-processflow/) or need to have an existing Process Flow developed.
- You can implement [Self Loop](/processflow/working-with-processflow-selfloop/) over Halt Resume.

## Working Principle:

In the below Process Flow, we have implemented threee processes of a business. Magento2 being the source app GETS all **ORDERS** from source. The flow is at **HALT(PURPLE)**. Keeping the first flow at halt, Magento2 fetches all CUSTOMER data and syncs to the destination application (in this case Dynamics NAV).
The flow is at **HALT(GREEN)** again. Magento2 will now fetch all the products and post it to Dynamics NAV. The HALT(GREEN) resumes followed by the HALT(Purple). Once all the halted processes are resumed, the first process where Magento2 fetched the **ORDERS**, now resumes and syncs its data to Dynamics NAV.

1) Drag the Halt node to the designer from Process Property menu. The corresponding Resume node gets dragged as well.

2) Join the links with each node as per your scenario and SAVE the process flow.

![pf_haltresume1](\staticfiles\processflow\media\pf_haltresume1.PNG)

3) [Deploy and Execute the Process flow](/processflow/deploying-and-executing-processfloww/) after covering all other configurations.

The flow is based on the scenario explained above. Listed below are some of the scenarios that will help you implement business specific process flows using Halt-Resume node. 

4) [Snapshot](/processflow/snapshot-processflow/) will provide you with the clear details of the sync process executed using Halt and Resume.

![pf_haltresumesnapshot](\staticfiles\processflow\media\pf_haltresumesnapshot.PNG)

**Note:**

- On deleting the Halt Node, the corresponding Resume node gets deleted as well.
- The output of the HALT node can only be connected to a GET node.
- The output of the Resume node can  be connected to any GET, MAPPER, POST & Decision Node.
- Neither HALT nor Resume can be implemented with Self-Loop.


## Business scenarios for Halt-Resume: 

A) Suppose, you are executing order download process through a Process Flow but before completing the orders to the destination app you want to run the customer download process and after customer download process completes, you want the resume order download process. 

In this scenario we can use Halt-Resume node where you apply halt node after the getting data for order download the further process of order download is halted and is transferred to the customer download process, next after customer download process completes we can apply a resume node to resume the halted process of order download

![pf_haltresume2](\staticfiles\processflow\media\pf_haltresume1.PNG)

B) Suppose, you are executing a sales cycle for the application Shopify & SAGE 300. Before completing the upload process of the Invoice, the order needs to be downloaded first and before downloading the orders, you need to download the customers.

In this scenario, we use multiple Halt-Resume nodes in a single process flow where you apply the HALT after getting the invoices from SAGE 300, followed by applying an another HALT after getting the orders. The flow transfer to the download process of the customers from shopify. After the download process of the customers, the Resume corresponding to the HALT of Order Download process is implemented to RESUME the order download process followed by implementing the RESUME of the HALT, corresponding to the Invoice upload process.

![pf_haltresume3](\staticfiles\processflow\media\pf_haltresume3.PNG)