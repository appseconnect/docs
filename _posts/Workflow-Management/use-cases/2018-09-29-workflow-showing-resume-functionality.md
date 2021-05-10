---
title: "Functionality of Resuming Workflow"
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
        title: "Functionality of Resuming Workflow"
        identifier: workflowusecase-resumingworkflows
---

### Use Case Name
Basic Workflow Implementation for determining Resumable Workflow

### Brief Description
This is a basic workflow implemented for the user to understand the concept of [Resuming Workflow in APPSeCONNECT](/resuming%20workflows/resuming-workflows/). 

### Actor
Implementers, Developers, Partners

### Preconditions: 
Organization Creation & Connection Creation

### Basic Flow
The user shall execute the flow as given below:  
* The user needs to create a workflow for which the use case is implemented. [Click here](/workflow/steps-to-create-your-first-workflow/) to know more about creating a workflow.  
* Configure the mandatory setting needed for executing a workflow. [Click here](/workflow/deploying-and-executing/) to know more about the prerequisite to execute a workflow.  
* On executing the GET node, stop the workflow background services to break the execution of the workflow.  
        
**Protip:** There should be ample of data's in the source for the use to access time to close the background services.  
            The workflow should be executed through the Autosync Process of APPSeCONNECT.    
 {: .notice--info}  
        
* The workflow would resume automatically based on the scheduled time of the Autosync. The execution should start from the node, last executed.  

### Post-conditions
The user can now see the workflow getting resumed from the node it stopped.
![resuming-workflows-logs](/staticfiles/workflow-management/media/resuming-workflows-logs.png)
### Exception courses
The user can view the result in the Resync bucket of the agent as well as in the Snapshot.

### Frequency of use
The user can execute the workflow as and when required.

### Assumptions
NOT APPLICABLE