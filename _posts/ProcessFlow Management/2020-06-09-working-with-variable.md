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

1) The node configuration window appears and it has two main sections
* General  
* Properties  
2) Enter the required details in the General Section (link will be given) of the node configuration window.
3) Now Click on Properties Section and the following screen appears. Enter the required details

Variable Name (Mandatory field): The user has to provide the name of the Variable.
Data Type (Mandatory field): Users will be able to select the Data type from the dropdown list.


## Editing Variable

## Deleting Variable

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

## Capture Variables Utility:

This part of the document will list few scenarios that will help you understand Capture Variables:

| Variable Name | Datatype | Expression | Default Value |Scope| Utility
|--------|-------------|---------|---------|-------|-----|


