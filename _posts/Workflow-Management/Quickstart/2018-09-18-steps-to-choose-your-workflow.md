---
title: "Steps to choose your workflow"
toc: true
tag: developers
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    quickstartworkflow:
        icon: fa fa-link
        weight: 5
        title: "Steps to choose your workflow" 
        identifier: quickstartfirstworkflow
---

Workflow in APPSeCONNECT provides integration solution which helps any business to execute integration flow of data between two or more applications. 
An implementer can now be able to use the `CHOOSE WORKFLOW` feature in the APPSeCONNECT Portal. This document will help the implementer to go through the feature in detail.

## Usability of Choosing Workflow feature

* This Feature lists you all the pre-packaged workflows.
* You can view existing workflows or can create workflow in your workflow panel.
* Choose a pre-packaged  workflow, and a Connection specific request pops-up in case of multiple existing pre-packaged App Connection.

## Steps to choosing Workflow in your workpanel
1. Login to your APPSeCONNECT Portal with valid credentials.
2. Click on the Workflow module Under **Designer** and the Workflow Panel opens up. The Workflow Panel shows you the workflows created in  your workflow panel. For a new user, you can
   [create a workflow](/workflow/steps-to-create-your-first-workflow/).
![ChooseWorkflow1](/staticfiles/workflow-management/media/ChooseWorkflow1.png)
3. Click Choose Workflow button and you can view the list of workflows migrated from the BASE appears.
![ChooseWorkflow-Connectionlist](/staticfiles/workflow-management/media/ChooseWorkflow-Connectionlist.png)
4.  You can choose any of the Workflow from the list. The Chosen Workflow will appear in your Workflow Panel.
Here we have chosen the Activate the Workflow-Customer [Add MS Dynamics NAV to Magento]  
![ActivateWorkflow-Connectionlist](/staticfiles/workflow-management/media/ActivateWorkflow-Connectionlist.png)
5.  If the organisation has more than one connection template for Pre-packaged applications, a connection specific request pops up where you need to specify 
for which connection you want the workflow to get activated.  
![ChooseConnection-mutliple](/staticfiles/workflow-management/media/ChooseConnection-mutliple.png)
6.  Click Save the Workflow gets added to the organisation workflow panel.

**Note: Choose workflow or Pre-packaged workflows option will not be available for Custom or Technology applications**

**Protip:** On adding the pre-packaged workflow in the organisation, the added workflow disappears from the Choose Workflow List. 
Deleting the workflow, the workflow name re-appears in the list
{: .notice--info}

