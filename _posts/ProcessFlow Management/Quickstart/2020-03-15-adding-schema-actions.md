---
title: "Adding and Managing - Schema & Actions"
toc: true
tag: developers
category: "Processflow"
menus: 
    quickstartprocessflow:     
        title: "Adding and Managing - Schema & Actions"
        weight: 4
        icon: fa fa-file-word-o
        identifier: schemaactionprocessflow
---

The user can view the schemas and the action present in an app and can also add schema and add action for each application node. 
This section enables the user to view and add the Schema and its Actions of an aplication in the Process Flow and managing the same
within a process flow for easy execution.

## Prerequisites
- The User needs to have a valid AEC account.
- An application node  is needed for defining the Schemas and its Actions.


### Adding Schemas in an Application node of Process flow 

1) Go to [designer section]() and [create a process]() flow.  
2) Drag the application node and the following window appears.  
3) The following are the fields available in the Node Configuration Slider:  
* Node Description: This denotes the description of the node.  
* Node Type: This denotes the type of action that the node needs to perform GET or POST   
* App Version: This denotes the version of the Application. You need to select the version of the application you need for the integration.  
* Protocol: The protocols would be listed for the application that is selected.     
* Schema: The schemas for the selected application and protocol would be listed in the drop-down. If no Schema is present you have to create a Schema from `Manage Schema` option present under the Schema field  
* Action: The action based on the selected schema would be available. If no Action is present you have to create Action from `Manage Action` option present under the Schema field.  
* Credential: You need to click the button Add, beside Credential to add token in the list. Select the Credential Token added for storing the credential provided for the application in the OP Agent.    
4) In the node configuration window, go to the Schema field. If the list of Schema is available select from 
the list of schema. And if` No schema` is available for the given application node, click `Manage Schema` option.
5) The following window appears with message on display for the user to Add Schema or Import Schema
6) Click on the option **Add Schema** and the add schema form opens up
7) Enter the details of adding Schema and Click Save option
 a. Schema Name: This is a mandatory field and it needs to be provided with the schema name  
 b. Schema Description: The description for the schema is needed to be given here. 
 c. Schema Namespace: Differentiates between two similar schemas. 
 d. Schema Namespace URL: Differentiates between two similar schemas using URL.
8) The newly added Schema gets listed in teh left side pane.




