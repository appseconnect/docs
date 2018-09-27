---
title: "Quickstart guide to your first workflow"
toc: true
tag: developers
category: "Workflow"
menus: 
    workflow:
        icon: fa fa-link
        title: "Getting started with Workflow" 
        identifier: quickstartworkflow
---

# Introduction

This section will guide you through workflow creation & configuration in simple steps.

## Steps to create Workflow

By reading this section of the document an implementer would be able to design the workflow for an organization and will execute it from the web portal. 

If you are new to Workflow, then go through the below steps to know more.


## Pre-Requisites

* You have to choose the project in which the user will be added.

* For execution of workflow using cloud agent you need to have `cloud to cloud connection`, `cloud agent` and `cloud supported app`.

* Now Choose two generic app for integration & workflow creation.

* Sample App chosen - Magento 2 & SAP B1

* Before executing the workflow for app integration, you should have a valid order on Magento 2 this means it should have valid items, Business Partner, and Sales Order.
The connection should be done in the Cloud.

**Once the pre-requisites are ready follow these steps:**

After successfully logging in, you have to choose My Workflows section under Account and a new page will open.

1. Refer the  steps
[Working with Workflow in APPSeCONNECT](https://github.com/appseconnect/docs/blob/demo/_posts/Workflow-Management/2018-08-14-overview.md#working-with-workflow-in-appseconnect) 
2. Log into the Cloud Portal with valid credentials.

3. Choose one project.

4. Go to my Workflows section under Account and a new page will open up.

   ![WorkflowPage](media/WorkflowPage.png)

5. On the upper left corner you will get the `Create Workflow` button.Click on it and the following page appears

   ![CreateWorkflowPage](media/CreateWorkflowPage.png)

6. To start the workflow, Drag & Drop the Start node from the ITEMS section, on the blank/grid section.

    ![Start](media/Start.png)

7. Click the (+) sign beside Templates section, a list will open. Now select General Touchpoint and then drag it to the grid/blank panel.

     ![AddTouchpoint](media/AddTouchpoint.png)

8. You have to select a connection and a touchpoint from the drop-down list of `Select Connection` and `Select Touchpoint`. Now click OK button, to confirm.The following screen appears

   ![Masterdata-Add](media/Masterdata-Add.png)

* Similarly, drag & drop more touchpoints to complete a cycle.

* You should make connections between all the touchpoints through lower circle segment of each pane.

* After all the steps have been completed, the workflow is ready to be run.

    ![Runbutton](media/Runbutton.png)

`Protip` Initially the Run button will be in disabled state, you have to activate it following these steps:
`Go to the APPSeCONNECT -> Settings Panel -> check the Activate box`.`

9. Now Run it and this will open another form.

 ![Workflow-Executed](media/Workflow-Executed.png)

10. In the above screen, you can see each step of the operation. 
The circle segments of the nodes will change its color according to the operation


**NOTE: Ongoing Operation= Yellow color
        Successful Operation= Green color
        Failed Operation  = Red color**

11. You will view messages in each step. You can check the workflow functionalities for the following nodes:

* GetSpilter

* Start

* Merger
* Loop
* Halt Resume

`Protip`: For execution of workflow using cloud agent you need to have cloud to cloud connection, cloud agent and cloud supported app.

See Also:

APPSeCONNECT workflow listing page
Base-workflow.
Split and merger in workflow     
Attribute Mapping of workflow



Configuring 

- Property Tab
- Nodes links

Explain workflow different sections

Workflow scheduling