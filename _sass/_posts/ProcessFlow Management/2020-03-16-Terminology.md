---
title: "Important Terminology"
toc: true
tag: developers
category: "Processflow"
menus: 
    processflow:
        title: "Terminology"
        weight: 3
        icon: fa fa-file-word-o
        identifier: terminologyprocessflow
---
This document demonstrates the important terminologies that you need to consider while using Process Flows 

### Home Folder
It is a default folder available in the listing page. You can create child folder from the Home folders for managing and organising Process Flows. 

### Trash Folder
This is the second default folder available in the Process Flow Listing Page. Any folders or Process flow 
that are deleted from Home level or Folder level will move to the TRASH folder. 

### Deploy
Any designed Process Flow needs to undergo the steps for deployment before the execution process. 
Deploy button will allow you to deploy configurations to the environment for execution. 

### Hosted Environment
This the Cloud Agent of APPSeCONNECT that will enable the user to execute Process Flows using the cloud technology of APPSeCONNECT. 

### Tracker 
This button will allow the user view node specific execution messages while the process flow executes in Manual Mode. Tracker window automatically open when clicked on the execute button. 

### APPS 
This menu will allow the user to add application nodes for GET and POST operation to the designer window. 
You can view all the Pre-packaged, custom and Tech applications that has been provided or created on your 
organisation. 


### Links
Links are termed as connection to two or more nodes demarking the flow of data from one node to another. 
In certain step, a link can also point to itself, which is termed as self-loop, this kind of loops will indicate a continuous flow of execution of a single node and triggering the data back to the flow. 

 
### Nodes
Nodes are associated with a particular action which uses specific configuration depending on the 
node selected. Each node in APPSeCONNECT Process Flow is tied to a connection, such that when the node 
is executed the data from that particular Application is generated and responded back to the application 
workspace. Every node in Process Flow has a node configuration button that will enable you to make configurational settings to the respective nodes. 

 
### Flow Connect
The menu will enable you to add & create custom application nodes like Connector, FTP, File, Database, REST. 

 

### Mapper Node
For transforming data from one application to another, you need to add the mapper node for transforming 
the Source file to Destination file. Mapper Node in Process Flow does this job for you by implement
 mapping and transformations. 

 
### Redeploy
Redeploy is a concept in Process flow that will allow the user to make changes to any node configurations 
after deploying for the first time. You will not be able to change the environment when redeploying for 
next instances. 

 

### Undeploy
Undeploy in Process flow will enable you to remove a deployed as well as an executed process flow from 
the associated environment. 

 
### Process Flow Snapshot
Snapshot in Process Flows will provide you with node specific execution status that would give you a 
clear message on every data that are fetched, transformed and successfully synced. 

 

### Process Flow Retry
In real-time execution, data might fail to sync to destination application for various reasons like 
network connectivity, transformation error etc. These failed data will be available for Resync, 
both in Auto and Manual mode, such that no data lost while executing. 

 

### Repositories
Repositories in APPSeCONNECT will allow you to create master data tables for maintaining & storing lookups 
based on lookup types (Tax, Freight, Country etc)  that are required for providing specific value to fields. 

 
### Repository Collection
This is the master data bucket where you can store and manage multiple lookups and lookup tables. 
You can create multiple repository collection in an organisation. 

 

### Reference Tables
Reference Table are the Lookup tables that gives an easy user experience to store 
and manage lookups of similar types. A collection can have multiple Reference Tables and 
can used as per need. 