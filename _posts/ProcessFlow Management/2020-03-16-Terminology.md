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
This document demonstrates the important terminologies that you need to consider while using ProcessFlows 

### ProcessFlow Folder
It is one the default folders available in the [listing page](/processflow/processflow-listing-page/#process-flow-folder). You can create child folders from the ProcessFlow folders for managing and organising ProcessFlows. 

### Trash Folder
The Trash folder is also available in the ProcessFlow Listing Page. Any folders or Processflow 
that are deleted from ProcessFlow folder level or Sub-Folder level will move to the TRASH folder. For more details on the Trash Folder, [Click Here.](/processflow/processflow-listing-page/#trash-folder)

### Deploy
Any designed ProcessFlow needs to undergo the steps for deployment before the execution process. 
Deploy button will allow you to deploy configurations to the environment for execution. [Click Here](/processflow/deploying-and-executing-processfloww/#deploying-process-flows-to-environment) to know more on the Deployment process of the ProcessFlows.
You can deploy your processflow either on the [Hosted Environment](/processflow/deploying-and-executing-processfloww/#deploy-process-flows-hosted-environment) or [On-Premise Environment](/processflow/deploying-and-executing-processfloww/#deploy-process-flows-on-premise-environment).

### Hosted Environment
This the Cloud Agent of APPSeCONNECT that will enable the user to execute ProcessFlows using the cloud technology of APPSeCONNECT. For more details on Hosted Environment, [Click Here](/deployment/Environment-Management/#hosted) 

### Tracker 
This button will allow the user view node specific execution messages while the processflow executes in Manual Mode. Tracker window automatically open when clicked on the execute button. 

### APPS 
This menu will allow the user to add application nodes for GET and POST operation to the designer window. 
You can view all the Pre-packaged, custom and Tech applications that has been provided or created on your 
organisation. 

### Manage Schema
This section will allow you to manage the all the schemas and the attributes of your chosen application dragged to the processflow designer. You can anytime add/import, application specific schemas and manage them accordingly.
For more details related to Manage Schema, [Click Here](/processflow/adding-schema-actions/)

### Manage Actions
[Manage Actions](/processflow/manage-actions-actionfilters-errorfilters/) will allow you to add and create Actions and its related filters, required while fetching data from source application. 
You can also create filter templates both for Action Filters and Retry Filters. 


### Links
Links are termed as connection to two or more nodes demarking the flow of data from one node to another. 
In certain step, a link can also point to itself, which is termed as self-loop, this kind of loops will indicate a continuous flow of execution of a single node and triggering the data back to the flow. 

 
### Nodes
Nodes are associated with a particular action which uses specific configuration depending on the 
node selected. Each node in APPSeCONNECT ProcessFlow is tied to a connection, such that when the node 
is executed the data from that particular Application is generated and responded back to the application 
workspace. Every node in ProcessFlow has a node configuration button that will enable you to make configurational settings to the respective nodes. 
To know more about the node availble for ProcessFlow, [Click Here.](/processflow/processflow-nodes-and-links/)

 
### Flow Connect
The menu will enable you to add & create custom application nodes like Connector, FTP, File, Database, REST. You can anytime create your Technology Application with the [processflow Designer](/processflow/designer-processflow/).
Yo know more about the Technology App Creation, [Click Here](/processflow/technology-app-creation-using-processflow/).

### Mapper Node
For transforming data from one application to another, you need to add the mapper node for transforming 
the Source file to Destination file. Mapper Node in ProcessFlow does this job for you by implement
 mapping and transformations. 

For more details on the Mapper Node, [Click Here](/processflow/working-with-mapper/)

 
### Redeploy
[Redeploy](/processflow/redeploying-processflow/) is a concept in Processflow that will allow the user to make changes to any node configurations 
after deploying for the first time. You will not be able to change the environment when redeploying for 
next instances. 

 

### Undeploy
[Undeploy](/processflow/deploying-and-executing-processfloww/#undeploy-process-flow-from-environment) in Processflow will enable you to remove a deployed as well as an executed processflow from 
the associated environment. 

 
### ProcessFlow Snapshot
[Snapshot in ProcessFlows](/processflow/snapshot-processflow/) will provide you with node specific execution status that would give you a 
clear message on every data that are fetched, transformed and successfully synced. 

 

### ProcessFlow Retry
In real-time execution, data might fail to sync to destination application for various reasons like 
network connectivity, transformation error etc. These failed data will be available for Resync, 
both in Auto and Manual mode, such that no data lost while executing. [Click Here](/processflow/retry-processflow/) to know more on ProcessFlow Retry.

 

### Repositories
[Repositories in APPSeCONNECT](/processflow/Lookup-repository-masterdata/) will allow you to create master data tables for maintaining & storing lookups 
based on lookup types (Tax, Freight, Country etc)  that are required for providing specific value to fields. 

 
### Repository Collection
This is the master data bucket where you can store and manage multiple lookups and lookup tables. 
You can create multiple repository collection in an organisation. [Click Here](/processflow/Lookup-repository-masterdata/#steps-to-create-repository-collections) to know more about the steps to create Repository Collections.

 
### Reference Tables
[Reference Tables](/processflow/Lookup-repository-masterdata/#reference-tables) are the Lookup tables that gives an easy user experience to store 
and manage lookups of similar types. A collection can have multiple Reference Tables and 
can used as per need. 