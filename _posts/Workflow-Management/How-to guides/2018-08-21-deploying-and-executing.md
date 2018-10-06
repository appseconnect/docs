---
title: "Deploying a workflow and executing it"
toc: true
tag: developers
category: "Workflow" 
menus: 
    workflow:
        icon: fa fa-link
        title: "Deploying and Executing" 
        identifier: deployworkflow 

---
Workflow in APPSeCONNECT provides integration solution which helps any business to execute
integration flow of data between two or more applications. With APPSeCONNECT, you can deploy, 
execute and maintain business integrations. In this article we will see how you can use workflow
runtime to debug and execute workflows.

## Steps

1. Start workflow and navigate to Workflow.
2. Open the workflow you want to execute or debug.When you open the workflow screen, you will be first
ported in edit mode. 
3. Click on Play button to execute a workflow. 
![Workflow Execution Step1](/staticfiles/workflow-management/media/workflow-execution-step1.png)
**Protip: Make sure the environment you have configured for the application is running correctly. 
4. When you play a workflow, you will be able to see each step of the operation. The nodes will be automatically highlighted during execution of the work.
 - Operation is going on = yellow color
 - Operation successfully did = green color
 - Operation failed = red color
![Workflow Execution Step2](/staticfiles/workflow-management/media/workflow-execution-step2.png)
5. After execution of workflow is complete, you can check each and every step of the workflow that is being executed on the platform.  You can select a node to see a popup appear on the base of the workflow. 
![Data Inspector Files](/staticfiles/workflow-management/media/data-inspector-files.PNG)
6. Each node selection opens a new window from the bottom of the page which will allow you to inspect the process. 
![Data Inspector Files](/staticfiles/workflow-management/media/data-inspector-files.PNG)

The data inspector watch window will allow the user to check the logs, data logs and the sync files.

