---
title: "Working with Capture Variables"
toc: true
tag: developers
category: "Processflow"
menus: 
    processflow:
        title: "Working with Capture Variables"
        weight: 7
        icon: fa fa-file-word-o
        identifier: variablesprocessflow
---
APPSeCONNECT Process Flow allows you to create variables that captures certain values that can be reused in any part of the Process Flow or in any other Process Flows designed within your organisation
Variables are used to store data so that it can be used within a Node or the Process Flow. With Capture Variables you will not have to provide expressions and generic function multiple times, 
instead you can define a capture variable with the required expression and deploy it anywhere within the Process Flow or any other Process Flow.

For Eg: You have a create a variable having the name `XYZ` with data type `String` and have associated an XPATH expression `//items/item/cusomer_id`. 
Once defined, upon calling the variable, it will execute the expression associated with the variable.

### Prerequisites

- You need to have valid credentials to your organisation.
- You need to design a new Process Flow or you need to have an existing Process Flow created.
- The variable name should be unique irrespective of the scope used.
- You need to provide the values for the mandatory fields in the GENERAL Tab of the Node Configuration Window before creating a Variable.

## Creating & Saving Variable

Creating Variables in Processflow is easier and can be done directly by dragging the app node
in the [designer section]().

1. Select an application node and drag the node to the designer panel where you want to define the Capture Variable.

2. The node configuration window appears. You can view two tabs in the node configuration window.
* General  
* Properties  

3. Enter the required details in the General Section (link will be given) of the node configuration window.

4. Now Click on Properties Section and the following screen appears.

[Image]

5. You need to provide the following details in the **Properties Tab**:

- **Variable Name (Mandatory Field):** This is field where you need to provide the name of the variable.
- **Data Type (Mandatory Field):** Here, you need to select the type of variable that you require. You can select the data type from the drop down. You will be getting the following options in the drop down: `String`,`Bool`,`DateTime`,`Number`,`ComplexObject`,`ComplexObject`,`Double`.
- **Expression (Non-Mandatory Field):** You can provide a either an Xpath or a function expression for it to store against the variable.
- **Default Value (Non-Mandatory Field):** You can also store a default value against the variable such that if expression provided results invalid, the default value can be initiated during the execution process of the variable.
- **Scope (Need to be sure):** The variable can be executed depending upon the scope defined. The Scope of the variable can be defined within the following type.
    - **Process Flow:** This is the Global variable that can be used in any Process Flows with the organisation.
    - **Node:** This is the Local Variable and can be used only in the node where it is defined within that Process Flow.

[Image]

6. You will also be able to view the following toggle button in the `Create Variable` page.
- **Is Persistant:** On Enabling this toggle button, the value after the execution will be remembered across subsequent executions.
- **Mutable:**
- **Is Env Specific:** You can limit the usage of the variable to Environment specific. On enabling the toggle button, you can select the variable for it to deploy while deploying the Process Flow. By default, the button would be toggled off.
- **Is Encrypted:** Enabling this toggle will encrypt the output of variable in the database.

7. Once all the necessary details are provided. Click on the SAVE button. 

[Image]

8. On clicking the `View List` button, you can view all the created variable for the node in a list view.

Following the above process you can successfully Define & Save a Capture Variable.

## Listing of Variables 

Once you have defined and saved the Variable, you will be able to view the list of the variables created. Follow the steps to view the list of variables.

A. Click on the `VIEW LIST` button in the **Create Variable** window after defining and saving the variable.

[Image]

B. You will be able to view the list of variables in Properties Tab. You can view all the variables that has been created on that node.

C. You will be able to view these following details in the Variable List.

- **Variable Name** - You can view the name provided while defining the variable.

- **Data Type** - The datatype used while defining will be displayed

- **Default Value / Expressions** - need clarity

D. On hovering over the name, you can view the scope of the variables defined.

Following the above process you can successfully view the Variable list.

## Editing Variable

Editing Variable is equally easy as creating and saving a variable. The process to edit a variable is given below:

A. Open the Application Node Configuration Window where you have defined the variable.

B. Click on the properties Tab. You can view the Variable listing page.

[Image]

C. Click on the Ellipses icon (Three horizontal Dots) on the actions column beside the variable. You'll get two options from the drop down.
- Edit: Enables you Edit the variable.
- Delete: Delete the created Variable.

D. Click on the EDIT button. You can view the `Create Variable` page. Modify the changes that you are required to and click on the SAVE button.

**Note:** You can modify any properties associated with the variable.

[Image]

## Deleting Variable

A. Click on the Ellipses button beside the Variable, in the variable listing page.

B. Click on the Delete button available on the drop down window. _(Will there be any confirmation message?)_

[Image]

C. Your variable gets deleted from the list.

_**Note:** You cannot delete a Variable that is currently in use for execution and will be provided with an error while doing so._


## Capture Variables Utility:

This part of the document will list few scenarios that will help you understand Capture Variables:

| Variable Name | Datatype | Expression | Default Value |Scope| Utility|
|--------|-------------|-------------|---------|-------|-----|
| custxp | string | `//items//item/` <br/> `cust_id` | - |  ProcessFlow or Node | Here, the variable is created with the name `$custxp` and is provided with an xpath expression. When ever the variable is called within the scope, the expression provided in the variable will be executed. |
| countryval | string | - | ProcessFlow or Node |`"NY"` | Here, a variable is created `$countryval` that stores a static value of sting type. On implementing the variable within the scope, the variable will execute the static value when the variable is called during execution.|
| Email | string | `//items//item/ ` <br/> `email_id` | abcd.com|ProcessFlow or Node|Here, the variable is created and is provided with both Expression and a default Value. On implementing the Variable, if the expression fails to execute its operation, the variable would replace it with the default value provided.|
|TaxationCode| Double | - | 8.253 | ProcessFlow or Node | Here, the variable is of the datatype `Double` is provided with default value. On implementing, the variable will be executed the default double provided while defining.|