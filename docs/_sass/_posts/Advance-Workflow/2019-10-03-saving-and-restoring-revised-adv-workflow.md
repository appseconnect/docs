---
title: "Saving & Restoring Revised Advance Workflow"
toc: true
tag: developers
category: "Advance Workflow"
menus: 
    advanceworkflow:
        title: "Saving & Restoring Revised Advance Workflow"
        weight: 3
        icon: fa fa-file-word-o
        identifier: designingworkflow
---

Users/Implementers of APPSeCONNECT requires to edit and modify workflows frequently as per the business 
requirement. Advance Workflows is enabled with the feature of saving revised editions which means 
users/implementers of APPSeCONNECT can now save a revised version of the created workflow and modify 
changes to the existing workflow with respect to the business process. 

## Scenario Briefing

As a User/Implementer, I want to commit changes to the designed workflow, and it has been observed that 
designed workflow doesnot fulfils the business process, but I want to save the designed workflow 
(version wise) before editing the workflow so that whenever needed I can restore the previous version 
to for revise purpose. 

Saving Revisions is now possible on APPSeCONNECT and user can save multiple version of a workflow for 
revision.

## Prerequisites of Saving & Restoring Revisions

* You need a valid credentials to the APPSeCONNECT portal.
* You need to have a saved workflow.

## Steps for Saving workflows for Revision

1. Login to APPSeCONNECT portal and navigate to Advance Workflow  Section. The Advance Workflow Listing 
   page opens.  
2. Create a Workflow or open an existing workflow. The page for designing and executing advance workflow opens.  
![restoring-saving-workflow1](/staticfiles/advance-workflow/media/restoring-saving-workflow1.png)   
3.	In the Workflow Header Panel, Click SAVE REVISION, for saving a revised version of the existing workflow.  
![restoring-saving-workflow2](/staticfiles/advance-workflow/media/restoring-saving-workflow2.png)  
**Note: The `SAVE REVISION` button appears only after saving a created Workflow.**  
4.	While saving a revision, user needs to provide a comment for distinguishing the workflow while 
    restoring. Therefore, on clicking the SAVE REVISION button, user gets a window for adding COMMENT 
    to the workflow that is being saved for later use.    
![restoring-saving-workflow3](/staticfiles/advance-workflow/media/restoring-saving-workflow3.png)  
**Protip:**  It is recommended to provide the comment as per the business process or workflow design. 
For Ex: `Workflow for adding Sales Order using Halt & Resume`, `Workflow for adding Business Partner using Delay Node`.
5.	Clicking  SAVE button, user gets confirmation message for the workflow being saved for revision.
![restoring-saving-workflow4](/staticfiles/advance-workflow/media/restoring-saving-workflow4.png)    
6.	Once the workflow is saved, user can click on the Revision History button. The user will get a sliding window 
    with the view of all the revision workflows.  
![restoring-saving-workflow5](/staticfiles/advance-workflow/media/restoring-saving-workflow5.png) 
7.	The Revision history window display the detail of the workflow that was first created. The details that will be displayed are:
* Created By: Will display the name of the user, who created the original Workflow.
* Created Date: Will display the date and time, when the workflow was first created.
8.	Users/Implementers of APPSeCONNECT will also get the privilege to filter workflow based upon the revision list. User needs to 
    click on the Filter icon to enable the Search option.
![restoring-saving-workflow6](/staticfiles/advance-workflow/media/restoring-saving-workflow6.png) 
9.	The revision list will have all the workflows that were saved for revisions. The table will have the columns Version, Modified Date, Comment & Action.
10.	Hovering on each Revision Workflows, button with three horizontal dots will appear which will enable the user to provide actions to the workflows. The actions that can be implemented are:
* Restore  
* Delete  
11.	Users/Implementers will be able to edit the Revision Workflows by clicking on the Restore Button for that workflow.  
**Note:** 
- Any changes made on a restored workflow, on saving its revision, a new entry will be created in the Revision History. No entries would be deleted, if a revised workflow is saved for another revision.
- On deleting a revision, every detail of that revision will be erased. User cannot restore the revision after deleting it from the Revision History.
-  Deploying of workflow has no dependability on revision of the workflow, which means restoring a workflow from revision will not save any deployment history.


