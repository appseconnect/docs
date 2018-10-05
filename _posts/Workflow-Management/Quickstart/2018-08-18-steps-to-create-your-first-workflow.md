---
title: "Steps to create your first workflow"
toc: true
tag: developers
category: "Workflow"
weight: 6
menus: 
    quickstartworkflow:
        icon: fa fa-link
        title: "Steps to create your first workflow" 
        identifier: quickstartfirstworkflow
---

# Introduction

This section will guide you through workflow creation & configuration in simple steps.


By reading this section of the document an implementer would be able to design the workflow for an organization and will execute it from the web portal. 

In Workflow diagram panel there are some [Template Touchpoints]() provided. A user can use these touchpoints to manipulate the Touchpoint execution as per their requirement. 

If you are new to Workflow, then go through the below steps to know more.


## Pre-Requisites

* You have to choose the project in which the user will be added.

* For execution of workflow using cloud agent you need to have `cloud to cloud connection`, `cloud agent` and `cloud supported app`.

* Now Choose two generic app for integration & workflow creation.

* Sample App chosen - Magento 2 & SAP B1

* Before executing the workflow for app integration, you should have a valid order on Magento 2 this means it should have valid items, Business Partner, and Sales Order. 

* The connection should be done in the Cloud.

## Steps to workflow creation

 1. Logging in to the Portal, choose `Workflows` section under Account and a new page will open.

 2.  Refer the  steps
[Working with Workflow in APPSeCONNECT](/workflow/overview/)

3. Choose one project.

4. Go to Workflows section under Account and a new page will  open up.

   ![WorkflowPage](/staticfiles/workflow-management/media/WorkflowPage.png)

5. On the upper left corner you will get the `Create Workflow` button. Click on it and the following page appears where you can create the new workflow

   ![CreateWorkflow](/staticfiles/workflow-management/media/CreateWorkflow.png)

6. To start the workflow, Drag & Drop the Start node from the ITEMS section, on the blank/grid section.

    ![Start](/staticfiles/workflow-management/media/Start.png)

7. Click the (+) sign beside Templates section, a list will open. Now select General Touchpoint and then drag it to the grid/blank panel.

     ![AddTouchpoint](/staticfiles/workflow-management/media/AddTouchpoint.png)

8. You have to select a connection and a touchpoint from the drop-down list of `Select Connection` and `Select Touchpoint`. Now click OK button, to confirm.The following screen appears

   ![Masterdata-Add](/staticfiles/workflow-management/media/Masterdata-Add.png)

* Similarly, drag & drop more touchpoints to complete a cycle.

* A list of different types of touchpoints will be generated

![Templates](/staticfiles/workflow-management/media/Templates.png)

* Drag in the general touchpoint to the workflow creation area

![Adding-Touchpoint](/staticfiles/workflow-management/media/Adding-Touchpoint.png)

* Once you’ve provided the details, click OK. The touchpoint will be added. Also Add an ‘End’ node

![StartEnd-Node](/staticfiles/workflow-management/media/StartEnd-Node.png)

* Connect the ‘Start’ Node with the starting point of the touchpoint. Also Connect the End node with the touchpoint.

![StartEnd-NodeConnected](/staticfiles/workflow-management/media/StartEnd-NodeConnected.png)

Click on ‘Save’. The workflow is now ready to be executed.

* After all the steps have been completed - Agent & Cloud Configuration, the workflow is ready to be run.

    ![Runbutton](/staticfiles/workflow-management/media/Runbutton.png)

NOTE - Initially the Run button will be in disabled state, you have to activate it following these steps:
`Go to the APPSeCONNECT -> Settings Panel -> Check the Activate box`.

9. Now Run it and this will open another form.

 ![Workflow-Executed](/staticfiles/workflow-management/media/Workflow-Executed.png)

10. In the above screen, you can see each step of the operation. 
The circle segments of the nodes will change its color according to the operation


**Protip** Ongoing Operation= Yellow color
        Successful Operation= Green color
        Failed Operation  = Red color
         {: .notice--info}

11. You will view messages in each step.  You can check the workflow functionalities for the following nodes:

## Workflow Nodes

* [Get](/workflow/working-with-get/)
* [Spilter](/workflow/working-with-splitter/)
* [Merger](/workflow/working-with-merger/)
* [Loop](/workflow/working-with-loops/)
* [Halt Resume](/workflow/working-with-halt-resume/)

**Protip** For execution of workflow using cloud agent you need to have cloud to cloud connection, cloud agent and cloud supported app.
{: .notice--info}

