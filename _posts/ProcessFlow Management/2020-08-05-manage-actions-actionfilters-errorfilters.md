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

This section of the document will enable the user to create actions, action filter and error filters under a created schema, when working with processflow.

## Prerequisites
- The User should have a valid APPSeCONNECT account.
- APPSeCONNECT should be up and running
- An application node is needed for defining the Actions.
- The app node needs to be dragged in the [designer section](/processflow/designer-processflow/) to define the actions under [manage schema](/processflow/adding-schema-actions/)
- The [Schemas should be created](/processflow/adding-schema-actions/#adding-schemas-in-an-application-node-of-process-flow) under which the Actions are to be defined.
- For defining **Action & Error Filters**, you need to have the ACTIONS created for the chosen application on your organisations. [Click Here]() to know more about creating actions.
- You need to have an action filter/retry filter created, to create it as a template.

## Adding a New Action

1) Navigate to the processflow and the drag the application node for which the Actions are to be made. The Node configuration window of the app node opens.

2) Enter all the mandatory fields and click on the save button.

3) If you donot get to find the needed action in the `actions` menu, click on the **Manage Action** button for defining Actions. 

![pf_actions1](\staticfiles\processflow\media\pf_actions1.png)

4) The Manage Action window opens. You will be able to view the schema, selected in the node configuration window.

![pf_actions2](\staticfiles\processflow\media\pf_actions2.PNG)

5) Click on the **Ellipsis icon** (three horizontal dots) beside the schema to view the **Add Action** option in the contextual menu. 

![pf_actions3](\staticfiles\processflow\media\pf_actions3.PNG)

6) You will provided with two mandatory fields for creating the **ACTION** under the schema. Below are the mentioned fields.

- **Action Name:** This is the name of the action that would signify the operation it would be doing. For Example: POST Customers, getting Customer from WooCommerce etc. 
- **Action Description:** The description of the actions briefs the operation, the action would be performing. For Example: Adding customes to Shopify, Fetching Orders from Magento etc.

Click on the SAVE button.

![pf_action4](\staticfiles\processflow\media\pf_actions4.PNG)

Following the above steps , you can successfully create a new Action to a schema.

**Note:**
- The newly created action will be created in the organisation level.
- The field **Action Name** will allow a maximum 100 characters
- You can create multiple ACTIONS under a schema.

### Edit, Delete & Rename an existing action

1) Navigate to the **Manage Actions** in the node configuration window of the selected application. Select the required action from the `Actions` contextual menu in the Node Configuration Window, that needs to be **EDITED**. The Manage Action window opens.

![edit_actions1](\staticfiles\processflow\media\edit_action1.PNG)

2) Expand the Schema node > Actions Node to view the selected action. Click on the Contextual menu to view the following option.

- Edit Action:
    - You can view the two fields **Action Name** & **Action Description** in the edit window.
    - Modify the changes required and click on the SAVE button. 

![edit_action2](\staticfiles\processflow\media\edit_action2.PNG)

- Delete Action 
    - Clicking on the delete action button, you get a confirmation message for deletion process.
    - Clicking on the `YES` button will delete the action from your organisation for the selected application.

- Rename Action
    - Clicking on the RENAME button, You get the edit action window.
    - You can successfully rename both the mandatory fields: **Action Name** & **Action Description**.
    - Click on the SAVE button to apply the changes on your organisation.

![edit_action3](\staticfiles\processflow\media\edit_action3.png)

Following the above process, you can successfully Edit, Delete & Rename an existing action.

**Note:**
- You cannot delete an action that is already in use and deployed.
- You can also perform the DELETE and the EDIT operation of the schema for the [APP > Select your App > Schema](/getting%20started/configurations/). 

## Adding Action Filters

Action filter for an integration represents the same as API filters. In APPSeCONNECT, Action filter lets you define a filter criteria for an action which filters out the data from the API. You can think this as an Where clause of a Select statement or even a search criteria in Windows file system. 
You should always define an action filter by learning the API structure, such that you dont call the same data again and again. Here in the steps we are going to cover the ways how 
we can define action filters in ProcessFlow.

1) Select the Action from the contextual menu of the node configuration window of the dragged application.

2) Click on the **Configure Filter** button after selecting the action from the contextual menu.

![actionfilter1](\staticfiles\processflow\media\action_filter1.png)

3) The Configure filter window opens. You can view the selected schema listed on the window.

![actionfilter2](\staticfiles\processflow\media\action_filter2.PNG)

4) Expand the nodes `customer > Action > Select Action` to view the **Action Filter**, Runtime Filter and the **Error Filter**

![actionfilter3](\staticfiles\processflow\media\action_filter3.PNG)

5) Click on the ellipses beside the Action Filter to view the **CREATE** Button. Clicking on the create button, the action filter creation window opens.

![actionfilter4](\staticfiles\processflow\media\action_filter4.png)

6) You get the option to provide your filter for two sections. Either on **HEADER** and **BODY**. As per you application API, you can provide the following details to configure the action filter.
 
- Key: The key defines the field on which you want to apply the filter on. For example, let us suppose you want to filter by created_date, then key will have created_date in it. 
- Operator: It represents the operator between the two operands. The operator is not mandatory. For instance, in case of REST based APIs, the Operator does not generally makes sense, as the filter goes into the query string which contains only a combination of key-value pair.
- Value: You need to provide the value to the filter. This represents the data. For example, if you want to filter out the customers greater than a particular date, you can specify the date in the value field.

Click on the SAVE icon below the window to save the entire filter.

![actionfilter5](\staticfiles\processflow\media\action_filter5.PNG)

7) You can add as many filters as you want by clicking on the **Add Child Clause** button. An optional conjunction is needed for some integrations which you can provide to join two queries. To add a conjuction on a level below, click on the (+) button beside the parent sibling.

8) You can also save the filter as a template by clicking on **SAVE AS TEMPLATE** for reusing it on a different processflow. For more details on TEMPLATE, [Click Here](/processflow/manage-actions-actionfilters-errorfilters/#saving-a-template-filter).


## Adding Retry Filters
The retry filter allows the integration to rerun an erronous data to fix it. The Retry filter allows the user to create a filter that downloads an item based on a perticular id. 

1) Select the Action from the contextual menu of the node configuration window of the dragged application.

2) Click on the **Configure Filter** button after selecting the action from the contextual menu.

![errorfilter1](\staticfiles\processflow\media\action_filter1.png)

3) The Configure filter window opens. You can view the selected shema listed on the window.

![errorfilter2](\staticfiles\processflow\media\action_filter2.PNG)

4) Expand the nodes `customer > Action > Select Action` to view the **Action Filter** and the **Error Filter**

![errorfilter3](\staticfiles\processflow\media\error_filter3.PNG)

5) Click on the ellipses beside the Error Filter to view the **CREATE** Button. Clicking on the create button, the error filter creation window opens.

![errorfilter4](\staticfiles\processflow\media\error_filter4.PNG)

6) You get the option to provide your retry filter for TWO sections. Either on **HEADER** and **BODY**. As per you application API, you can provide the following details to configure the retry filter. Provide the following details to configure the retry filter.

- Key: The key defines the field on which you want to apply the filter on. For example, let us suppose you want to filter by customer_id, then key will have customer_id in it. 
- Operator: It represents the operator between the two operands. The operator is not mandatory. For instance, in case of REST based APIs, the Operator does not generally makes sense, as the filter goes into the query string which contains only a combination of key-value pair.
- Value: You need to provide the value to the filter. This represents the data. For example, if you want to filter out the customers for a perticular date, you can specify the id in the value field. Generally for most of the application we use {$} which will be replaced during retry execution.

Click on the SAVE button on the window to save the current filter. To add a conjuction on a level below, click on the (+) button beside the elder sibling. You can also click on the **ADD CRITERIA** button to add conjuction on the same level as of the elder sibling filter.

Following the above process, you can successfully implement Retry filter for an action.

## Saving and creating from a Template Filter

1) Drag the application node for whose Action filter/Retry filter you need to create as a template.

2) You need to navigate to the Node Configuration window > Select Action > configure filter.

3) The Configure Filter opens. Expand the nodes until `Action filter` & `Retry Filter` appears. 

4) Click on the **CREATE** button as per the options selected, either ACTION FILTER or RETRY FILTER. The create window opens as per the selected choice (The window remains same for both Action Filter and Retry Filter). 
**Here we have chosen ACTION FILTER**.

5) Provide the details in the fields and click on the SAVE icon beside the filter column. After saving the column, you get the option of **SAVE AS TEMPLATE**.

![savetemplate1](\staticfiles\processflow\media\savetemplate1.PNG)

6) Click on the **Save as Template** button to save the provided Action Filter as a template. 
You can reuse this saved template on any other nodes of any processflow in your organisation, 
provided the **application node** , **Schema** & the **Action** remains the same.

7) You can view the saved for the schema and action by navigating to **[Manage Schema](/processflow/adding-schema-actions/#listing-of-schemas-and-attributes) > your selected Schema Entity > The Action in which you have created the Template > Click on the Action filter.**
You will be able to view the saved template for that schema and the action. The template will not be editable in the Manage schema window.

8) To create filter from a saved template, navigate to Node Config window ->  Select Schema -> Select Action -> Configure filter. Expand the Schema node until Action Filter, Retry Filter appears.

9) Click on the Ellipses beside your chosen option (Action Filter, Retry Filter) and select the option **Create from template** from the context menu.

![createtemplate1](\staticfiles\processflow\media\createtemplate1.PNG)

10) On clicking **Create from template** you get a confirmation message. Click on the YES button.

![createtemplate2](\staticfiles\processflow\media\createtemplate2.PNG)

11) The saved template opens. You can anytime edit the action filter placed in the template as per your requirement. The updates made will not change in the template that is saved.

![createtemplate3](\staticfiles\processflow\media\createtemplate3.PNG)

Following the above process you can successfully SAVE and create filter from template.


## Working with Runtime Filter

You can create the Dynamic Runtime Filter for performing specific integration operations. However, you cannot execute from this section. 
The **Custom Filter** functionality on this area will only allow you to Create, View and Delete.

The filters created can be also be viewed in the **Execute with Runtime filter** area. For more Details, [Click Here.](/processflow/User-Defined-Dynamic-Filter/#implementing-dynamic-custom-filter)

![customfilternormal](\staticfiles\processflow\media\customfilternormal.PNG)

Following the above process, you can successfully **Create, View and Delete** Dynamic Custom Filters.



**Note:**

**-The steps to remains when working with Retry filter.**

**- Each action of a schema can have only one created template.**

**- You cannot modify the template when viewed from the [Manage Schema](/processflow/adding-schema-actions/#listing-of-schemas-and-attributes) section.**

**- You can also `view` , `edit` and `delete` the saved template from the [APPS](/getting%20started/configurations/) section.**
