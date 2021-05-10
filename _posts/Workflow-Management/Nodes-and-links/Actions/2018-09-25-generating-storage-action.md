---
title: "Storing Files"
toc: true
tag: 
     - developers
     - actions
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    nodesaction:
        icon: fa fa-link
        title: "Storage" 
        identifier: nodesactionstorage
---

##  Storage Action 

Using this node user can store data in text file during workflow execution for future reference. 
Created file will be stored in Appseconnect agent folder. For example, if the user wants to store data which are 
failed through a rule node he can store that data.

## Prerequisites for Storage Action
* You must choose the project in which the user will be added.
* Install the AEC OP Agent from the portal and login with the portal credentials. [Click here](/deployment/Deployment-Configuration/) to know more about the agent setup and configuration.
* Now Choose two generic app for integration & workflow creation.
* Before executing the workflow for app integration, you should have a valid data in the source application
* The connection or the workflow design should be designed in the Cloud Portal before implementing storage.
 
## Steps to follow for implementing Storage in Workflow

1. Select Storage from the Actions, available on the left menu bar of the workflow design page.  
![storageaction1](/staticfiles/workflow-management/media/storageaction1.png)    
2. Drag and Drop the Storage action in the Workflow Design window and attach the action with the node as required.  
![storageaction2](/staticfiles/workflow-management/media/storageaction2.png)  
**Note:**
* Here, the storage action is attached with the GET node, which will store all the data that are being fetched by the GET node.
* Provide the Execution Order, if the node has multiple associations with any another node.

3. The file that are hoarded, are stored in the APPSeCONNECT folder of the C: drive. 
The default Pathway is C:\ProgramData\APPSeCONNECT

**Note: this folder needs to be accessed manually for viewing the data.**



