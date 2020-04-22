---
title: "Data view of Snapshot"
toc: true
tag: developers
category: "Processflow"
menus: 
    quickstartprocessflow:
        title: "Data view of Snapshot"
        weight: 8
        icon: fa fa-file-word-o
        identifier: snapshotprocessflow
---
Snapshot in Process Flow gives complete overview of the transactions that was executed. A transaction in Process Flow defines an execution of the business flow at that instance. Every Process Flow will be able execute more than one integration, which depends on logic defined on the designed Process Flow, dependencies specified, or even based on data volume.
The snapshot gives a detailed overview of the data that is being transferred through workflow giving you a complete picture of the data transformed through the sync process. The snapshot gives tracing over the data transferred through integration. You can investigate the Data Log, Transaction files & the Activity Log for each process execution.
After a successful execution, you can view the snapshot listing on the multiple time execution of the Process Flow.

## Pre-requisites for viewing Snapshot
* You should have valid credentials to the portal.
* You need to [create a Process Flow] for generating a snapshot. 
* The environment where the process flow needs to be executed should be active.
* The [created Process Flow] needs to be deployed to the environment successfully.  
* You need to [execute the Process Flow] () for generation of the Snapshot.

## Steps to view the Process Flow Snapshot
To view the snapshot of a Process Flow that has been executed, you need to follow the 
prerequisites. Given below are the steps that will help you view Snapshot of a Process Flow that is executed.

1.	Login to the Portal and Navigate to the Process Flow Section and view the [listing page]().   
![Snapshot1](../../staticfiles/processflow/media/snapshot1.png)  
2.	[Create a new Process Flow]() or Edit an existing Process Flow for [Deploying and Executing]() the sync process.  
**Note: You need to have the OP Environment active mandatorily for deploying the Process Flow to an OP Agent.**   
3.	Navigate to the Manage > [Environment]() for view the Snapshot of the executed Process Flow.   
**Note: You need have the environment active for viewing the details page, Click here if you need to troubleshoot a detached or a disconnected agent.**  
![Snapshot2](../../staticfiles/processflow/media/snapshot2.png)  
4.	Click Process Flows Tab. You can view the list of all the deployed process flows. Following are the details that will display for each deployed Process Flows.
* Name of the Process Flow 
* Description of the Process Flow 
* Version of the Process Flow
* The time of Deployment
* Actions   
![Snapshot3](../../staticfiles/processflow/media/snapshot3.png)  
5.	Click Ellipses button (…) available beside the Process Flow that you have executed. You can view the option `View Snapshot` in the context menu.  
**Note: The button View Snapshot will be in Disabled State if any Process Flow has not been executed after deploying.**  
![Snapshot4](../../staticfiles/processflow/media/snapshot4.png)  
6.	Click View Snapshot button to view the Snapshot File.    
![Snapshot5](../../staticfiles/processflow/media/snapshot5.png)  
7.	The Snapshot will display the following details of the Process Flow.  
![Snapshot6](../../staticfiles/processflow/media/snapshot6.png)  
* Process Flow Name - Displays the name of the Process Flow on the left corner of Title bar of the Snapshot pop-up window. 
* Environment Name - Displays the environment name on which the Process Flow is executed.
**Note: You need to hover over the Process Flow Name & Environment Name to view the name if it exceeds 100 characters.**
* Document Icon – You can view the description of the Process Flow by click the Document Icon beside the Process Flow Name.   
* Execution Time & Status: Show all the Snapshot files with respect to the execution Time & execution Status. You can view the files on the Left side of the Pop-up window. For every Execution Time & Status,  you can view the following details.    
(a) Serial Number   
(b) UTC Time of its execution   
(c) Time Taken to generate the Snapshot  
(d) Status of the execution process    
**Note: You can view 10 snapshots at a time based and status however you can click on the More button to view the 
next 10 snapshots that has been executed in the past.**
* Nodes Panel: You can view the nodes that were executed in the process flow. Clicking on individual Execution Time and Status files (available on the left), will display all the nodes that were executed for that execution time. 
* Node Details Panel: This panel will display the node specific execution details: The Following tabs will be available for each node.
(a) Data Log - Displays the identity of the data for each node executed. The id is displayed based on the Primary key of that node. 
(b) Activity Log – This tab will display the execution logs of each node.  
* Transaction file – Displays the data packets generated after executing the selected node.  
8.	On the Right Panel, you can view the list of snapshot files based on Execution Time & Status. Click on the file, to view the nodes executed.
The latest snapshot will be listed first.
![Snapshot7](../../staticfiles/processflow/media/snapshot7.png) 
9.	You can view the nodes that were executed in the Snapshot in Nodes column available on the Right Side of the Panel.
![Snapshot8](../../staticfiles/processflow/media/snapshot8.png)  
10.	Click on the Start Node. You can view the following data in the Right panel of the screen. You can only view the Activity logs Tab for the Start node. 
![Snapshot9](../../staticfiles/processflow/media/snapshot9.png)  
You can also view the UTC time of its execution.  
 **Note: The selected node would be displayed with the font colour blue.**

### Node Specific Snapshot View
You can view node specific results based on the status of the Execution. You will also be able to view the time taken for executing the specific nodes.
The key for denoting the node execution status is:
* Green - Denotes with a tick icon for successful execution of that node.
* Red – Denotes with a cross icon for failed execution of the node.
 
You can view the Node specific view of the Snapshot in the scenarios given below:
1. `Scenario: Get Node`    

a. Click on the Get Node. You can view the snapshot results for all the three tabs – Data Log, Activity Log & Transaction File.  
![Snapshot11](../../staticfiles/processflow/media/snapshot10.png)  
b.	Click on the Data log tab of the GET node. You will be able to view all the data that are fetched from the Source Application. 
![Snapshot12](../../staticfiles/processflow/media/snapshot11.png)  
Following are the details that would be displayed for each data in Data Log.  
* SourceId - The is the primary field for representing the data, synced. It can either be an Email id or Data Id or the Data name, depending on the entity of the Application.
* DestinationId - GET Node will not generate in Destination ID in Snapshot. 
* Status - Displays the status of the data. GET Node will always show the status Unprocessed for every data.
* Message - You will be able to view execution specific message with respect to individual data.
* Tries: You will be able to see the count of the number of Retries made for each data.   
**The Data Log view remains same for the nodes – GET, Mapper & POST node.**      
c.	Click on the Activity Log tab of the GET node. You will be able to view the execution log of that node  
![Snapshot13](../../staticfiles/processflow/media/snapshot13.png)
d.	Click on the Transaction File tab of the GET node. You will be able to view the input files generated after its execution. 
![Snapshot14](../../staticfiles/processflow/media/snapshot14.png)      
2.	`Scenario: Mapper Node`   
a.	Click on the Mapper Node. You can view the snapshot results for all the three tabs – Data Log, Activity Log & Transaction File.     
![Snapshot15](../../staticfiles/processflow/media/snapshot15.png)  
b.	Click on the Data log tab of the Mapper node. You will be able to view all the data that are fetched from the Source Application    
![Snapshot16](../../staticfiles/processflow/media/snapshot16.png)  
c.	Click on the Activity Log tab of the Mapper node. You will be able to view the execution log of that node    
![Snapshot17](../../staticfiles/processflow/media/snapshot17.png)  
d.	Click on the Transaction File tab of the Mapper node. You will be able to view the input files generated after its execution.      
![Snapshot18](../../staticfiles/processflow/media/snapshot18.png)   
3.	`Scenario: Post Node`  
a.	Click on the Post Node. You can view the snapshot results for all the three tabs – Data Log, Activity Log & Transaction File.  
![Snapshot19](../../staticfiles/processflow/media/snapshot19.png)  
b.	Click on the Data log tab of the Post node. You will be able to view all the data that are fetched from the Source Application.  
![Snapshot20](../../staticfiles/processflow/media/snapshot20.png)  
c.	Click on the Activity Log tab of the Post node. You will be able to view the execution logs of POST node.  
![Snapshot21](../../staticfiles/processflow/media/snapshot21.png)    
d.	Click on the Transaction File tab of the Post node. You will be able to view the Output files generated after its execution for the POST node.  
 ![Snapshot22](../../staticfiles/processflow/media/snapshot22.png)    
Following the above steps, you can successfully view the snapshot of an executed Process Flow.

