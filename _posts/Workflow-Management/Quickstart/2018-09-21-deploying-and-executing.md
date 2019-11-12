---
title: "Scheduling, Deploying, Publishing & Executing workflows"
toc: true
tag: developers
category: "Workflow" 
menus: 
    quickstartworkflow:
        icon: fa fa-link
        weight: 8
        title: "Scheduling, Deploying, Publishing & Executing workflows"
        identifier: quickstartfirstworkflow

---
Workflow in APPSeCONNECT provides integration solution which helps any business to execute
integration flow of data between two or more applications. With APPSeCONNECT, you can deploy, 
execute and maintain business integrations. In this article we will see how you can use workflow
runtime to debug and execute workflows.

## Prerequisites
* You must choose the project in which the user will be added.
* Install the AEC OP Agent from the portal and login with the portal credentials. [Click here](/deployment/Deployment-Configuration/) to know more about the agent setup and configuration.
* Now Choose two generic app for integration & [workflow creation](/workflow/steps-to-create-your-first-workflow/).
* Before executing the workflow for app integration, you should have a valid data in the source application
* The connection or the workflow design should be done in the Cloud Portal.

## Creating a Workflow

[Click here](/workflow/steps-to-create-your-first-workflow/) to know more about creating or designing a workflow. The user can also select the workflow, from the [Choose workflow](/workflow/steps-to-choose-your-workflow/) button. 

## Scheduling a Workflow

1.	Navigate to the workflow design area and click on the Schedule button.  
![scheduling-workflow](/staticfiles/workflow-management/media/scheduling-workflow.png)   
2.	The schedule window shows up. The windows have the following fields as displayed below:  
![scheduling-workflow2](/staticfiles/workflow-management/media/scheduling-workflow2.png)     
a.	Sync type: This depicts whether the process is Auto or Manual.      
b.	Repeat: This has three option in the drop-down Every Minute, Daily & Hourly.    
c.	Repeat Interval: This determines the time gap between the sync processes.     
d.	End: This field has two options.   
* Never: If selected, the process will be an infinite loop until stopped.
* End after a defined repetition: When selected this option, an additional field appears "End After" which
  depicts the End Time Occurrence.
3.	After Scheduling the workflow, click OK button.

## Publishing a Workflow

If you change attribute mapping in a workflow you need to publish the workflow before deploying. The steps to do the same
is given below

1.	After creating and saving the workflow, click `Reset Generate` Button followed by `Reset Publish`button.
![publish-workflow](/staticfiles/workflow-management/media/publish-workflow.png)

The Actions column on the right side of screen consist of buttons that configures and publish the touchpoint used in the workflow.

a. Preview - This button previews the XSLT for the touchpoint used in the workflow  
b. Reset Publish - This button publishes the configuration of the touchpoint that is used in the workflow.  
c. Reset Generate - This button generates the configuration for the touchpoint. After generating the configuration, the `Reset Publish` is done.  
d. Resync Bucket - APPSeCONNECT uses Resync Bucket to keep track of all the items that are getting synced.   
   The portal view for the Resync Bucket is given below.
![resync_button](/staticfiles/workflow-management/media/resync_button.png)

 On refreshing, the Publish button appears. The Publish button `publishes every configuration that  the 
user made in the APPSeCONNECT cloud` and is `compiled to a single file stored on the server` which is 
accessible from the APPSeCONNECT Agent.

![publish-workflow2](/staticfiles/workflow-management/media/publish-workflow2.png) 

After Publishing and Executing the workflow, the results are displayed in the resync bucket. 

* The failed data in the resync bucket will be resynced using **autosync** if the workflow is scheduled. 
* In manual mode, the users needs to select the failed data individually from the Resync Bucket for executing resync. 

**NOTE:If you change attribute mapping in a workflow, the user needs to Reset Generate and Reset Publish the workflow before deploying**

## Deploying a Workflow

1. After creation and saving of the workflow, navigate to the Environments Tab. 
![deploying-workflow](/staticfiles/workflow-management/media/deploying-workflow.png) 
2. The Environment window shows up. Click on the Agent Settings button to confirm the connectivity of the agent with the portal. 
The Pop up window shown below, confirms the connectivity.
![deploying-workflow2](/staticfiles/workflow-management/media/deploying-workflow2.png) 
3. After the confirmation of the connectivity, click on the Deploy Configuration button to deploy the workflow connection
in the agent. The user can also click on the Update Configuration button in the OP Agent.  
**Note: The environment section displays all agents that are associated with the organisation. The buttons Agent Settings 
and Deploy Configuration should be clicked for the agent that is being used.**
4. After successfully deploying the configuration in the agent, navigate to the workflow tab for executing the workflow.

## Executing the Workflow

1. Start workflow and navigate to Workflow.      
2. Open the workflow you want to execute or debug.When you open the workflow screen, you will be first
ported in edit mode.       
3. Click on Play button to execute a workflow.         
![workflow-execution-step1](/staticfiles/workflow-management/media/workflow-execution-step1.png)      
4. When you play a workflow, you will be able to see each step of the operation. The nodes will be automatically highlighted during execution of the work.
 - Operation is going on = yellow color
 - Operation successfully executed = green color
 - Operation failed = red color  
![workflow-execution-step2](/staticfiles/workflow-management/media/workflow-execution-step2.png)
5. After execution of workflow is complete, you can check each and every step of the workflow that is being executed on the platform.  
6. The complete execution process of the workflow can be viewed through the [process snapshot](/workflow/list-of-snapshot/).

This ends the process of scheduling workflows.

**Protip:** Make sure the environment you have configured for the application is running correctly. 
 {: .notice--info}
