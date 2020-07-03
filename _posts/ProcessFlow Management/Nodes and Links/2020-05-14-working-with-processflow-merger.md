---
title: "Merger Node"
toc: true
tag: developers
category: "Processflow"
menus: 
    processnodeandlinks:
        icon: fa fa-gg
        weight: 5
        title: "Working with Merger" 
        identifier: mergerprocesflow
---
### What is Merger Node?

This node is used to merge smaller data chunks into a single data packet, in order to avoid
multiple hits to the application. The Merger Node combines multiple XML documents into a single element.
 
**Prerequisites: All input documents should have the same set of schema and attributes. Input document has to be in XML format**

Like a `SPLITTER` node, `Merger`node also has Four Components Node - Description, XPath, Entity Name
and Batch size. For example, you have specified a batch size of `N` in a `MERGER` node then 
it will take `N` data packets where each packet contains a chunk of data and merge them into a single data packet (here N= Batchsize Number).

Merger Node Input file -  can have one or more document input.
Merger Node Output file - can have one or more document output.

- **Node Description:** Here, you need to provide a description to the merger node.
- **Entityname** : Here specify the name which will act as a root element under which data will be merged.
- **XPath** : Here user need to specify a XPath based on which data will be fetched from each data file for merging.
- **Batch Size** : Here, you need to define the size of the batch as how many should be 
merged to form packets. For example: You have 20 data that need to be merged 
and if the batch size is provided as 10 therefore, merger node will form 2 packets 
which will contain 10 data in each packet merged. 

**Note: Batch size should not allow 0 as input and the range of batch size value 
should be 1-999.**


### Working Principle

`MERGER` node in APPSeCONNECT processflow used to take smaller data packets and merge them into single data packet.

For example: If there are 20 files or data chunks each of which contains a customer data 
with the below XML format. All the files will be merged into single file in a batch 
size of 2. So, in the XPATH section the values are provided as following:
 `XPATH = //env:Envelope`, Batch Size = 2 and the Entity name = `mergedRoot`.

![Merger1](\staticfiles\processflow\media\merger1.PNG)

The concept of identifying the merger property is like that of the splitter property, that is by viewing the corresponding packet. 
(In this case, it is the transform packet as the merger node is used after the Process node).

The XPath provided for the MERGER Node is shown below:

![Merger4](/staticfiles/workflow-management/media/Merger/Merger4.png)

`Application used for the Processflow Execution is: Magento2 and SAP B1.`

   
1) Go to Processflow section & [Design](/processflow/designer-processflow/) a Processflow.  

![mergerflow1](\staticfiles\processflow\media\mergeflow1.PNG)

2) The Processflow is designed as shown in the above section of the screen.  

4) You have to add [Self loop](/processflow/working-with-processflow-selfloop/) in the destination node so that all the merged files are posted in the destination application, without any data loss.  

5) Add the Merger node after mapper such that all the incoming files can be merged in a batch of 2.

5) Now [Deploy](/processflow/deploying-and-executing-processfloww/) the Process flow. After successful deployment, to your environment, [Execute](/processflow/deploying-and-executing-processfloww/) the Processflow. 

6) Go to [Environment](/deployment/Environment-Management/)section of the portal, select the process flow from the listing section and click [View Snapshot](/processflow/snapshot-processflow/)
to view the detailed node by node snapshot data of the processflow.    

7) Click on the merger node to get the snapshot dataview of the merged files.      
![mergeflow2](\staticfiles\processflow\media\mergeflow2.PNG)    

8) Now click on the **Transactional File** tab to view both the merged files.  
 ![mergeflow3](\staticfiles\processflow\media\mergeflow3.PNG)      
Here you can view **TWO** transactional files, containing `two customer records` in file **ONE** and a single customer record in file **TWO** as total number of data count was **three**. 
  
9) Expand the destination node to view the sync result of the iteration.
![mergeflow4](\staticfiles\processflow\media\mergeflow4.PNG)
 
Thus, the above processflow is executed with the Merger node and you can also 
view the iteration wise node execution created with self loop.

**Note: Since Self Loop configuration was set as `Until Data Available`, you will be generated with an extra iteration. For more details related to Self-Loop, [Click Here](/processflow/working-with-processflow-selfloop/).**

**1. Business Scenario -  Applications with API request throttling**   

Throttles indicate a temporary state, and are used to control the data that clients can access through an API. 
When a throttle is triggered, you can disconnect a user or just reduce the response rate. There are certain applications (e.g. amazon, shipstation etc.) with the problem of API
Request throttling. These applications generates throttling after a certain point of time, hence
it becomes cumbersome to sync data continously through these API's.

Here merger node can be implemented before destination application where the multiple 
files can be merged into one or more data packets to override the API throttling
issues of destination applications.

Here you need to add the merger node after mapper node and before destination application node, using
a self loof (to combat data loss). The splitted data packets will be now be easily posted to the destination
application for the respective data packets without API throttling.


