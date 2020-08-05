---
title: "Managing - Action, Action Filters & Error Filters"
toc: true
tag: developers
category: "Processflow"
menus: 
    processflow:     
        title: "Managing - Action, Action Filters & Error Filters"
        weight: 6
        icon: fa fa-file-word-o
        identifier: manageactionprocessflow
---

Actions are certain tasks like getting data from an application or sending data to an application based on specific API filter conditions known as Action Filters.
Every Schema is an entity that requires to multiple actions to perform multiple operations as per the transaction happening. For Eg: GET, POST, PUT, DELETE etc. 

This section of the document will enable the user to create actions, action filter and error filters under a created schema, when working with process flow.

## Prerequisites
- The User should have a valid APPSeCONNECT account.
- APPSeCONNECT should be up and running
- An application node is needed for defining the Actions.
- The app node needs to be dragged in the [designer section](/processflow/designer-processflow/) to define the actions under [manage schema](/processflow/adding-schema-actions/)
- The [Schemas should be created](/processflow/adding-schema-actions/#adding-schemas-in-an-application-node-of-process-flow) under which the Actions are to be defined.

## Steps to Add a New Action to a Schema

1) Navigate to the Process Flow and the drag the application node for which the Actions are to be made. The Node configuration window of the app node opens.

2) Enter all the mandatory fields and click on the save button.

3) Click on the Manage Schema button for defining Actions. The [listing page of Manage Schema](/processflow/adding-schema-actions/#listing-of-schemas-and-attributes) opens. You will be able to view the schema, selected in the node configuration window.

![pf_actions1]()

4) Click on the **Ellipsis icon** (three horizontal dots) beside the schema to view the **Add Action** option in the contextual menu. 

![pf_actions2]()

5) You will provided with two mandatory fields for creating the **ACTION** under the schema. Below are the mentioned fields.

- **Action Name:** This is the name of the action that would signify the operation it would be doing. For Example: POST, getCustomer etc. 
- **Action Description:** The description of the actions briefs the operation, the action would be performing. For Example: Adding customes to Shopify, Fetching Orders from Magento etc.

![pf_action3]()