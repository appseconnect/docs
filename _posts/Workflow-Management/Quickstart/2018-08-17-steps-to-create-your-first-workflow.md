---
title: "Quickstart guide to your first workflow"
toc: true
tag: developers
category: "Workflow"
---

# Introduction

This section will guide you through workflow creation & configuration in simple steps.

## Steps to create Workflow

By reading this section of the document an implementer would be able to design the workflow for an organization and will execute it from the web portal also. 

If you are new to Workflow, then please go through the below steps to know more.


## Pre-Requisites: 

* You have to choose the project in which the user will be added.

* For execution of workflow using cloud agent you need to have `cloud to cloud connection`, `cloud agent` and `cloud supported app`.

* Now Choose two generic app for integration & workflow creation.

* Sample App chosen - Magento & SAP B1

* You should have a valid order on Magento 2. That means it should have valid items, Business Partner, and Sales Order.
The connection should be done in the Cloud.

**Once the pre-requisites are ready follow these steps:**


After successfully logging in, you have to choose My Workflows section under Account and a new page will open.

1. Refer the below steps
[Working with Workflow in APPSeCONNECT](https://github.com/appseconnect/docs/blob/demo/_posts/Workflow-Management/2018-08-14-overview.md#working-with-workflow-in-appseconnect) 
2. Log into the Cloud Portal with valid credentials.

3. You have to choose one project.

4. Go to my Workflows section under Account and a new page will open.


5. On the upper left corner you will get the **Create Workflow** button.Click on it and the following page appears

6. To start the workflow, Drag & Drop the Start node from the ITEMS section, on the blank/grid section.

7. Click the (+) sign beside Templates section, a list will open. 
Here select General Touchpoint and then drag it to the grid/blank panel.

8. You have to select a connection and a touchpoint from the drop-down list of Select Connection and Select Touchpoint.
Then click OK button, to confirm.

* Similarly, you have to drag & drop more touchpoints to complete a cycle.
* You should make connections between all the touchpoints through lower circle segment of each pane.
* After all the steps have been completed, you have to run it.

`Protip` Initially the Run button will be in disable state, you have to activate it following these steps:
`Go to the APPSeCONNECT -> Settings Panel -> check the Activate box`.`

9. Now Run it and this will open another form.

10. Here, you can see each step of the operation. The circle segments of the nodes will change its color according to the operation


You will a pop-up on the screen.




Configuring 

- Property Tab
- Nodes links

Explain workflow different sections

Workflow scheduling