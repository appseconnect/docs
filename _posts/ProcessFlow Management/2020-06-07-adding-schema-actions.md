---
title: "Adding and Managing - Schema & Actions"
toc: true
tag: developers
category: "Processflow"
menus: 
    processflow:     
        title: "Adding and Managing - Schema & Actions"
        weight: 6
        icon: fa fa-file-word-o
        identifier: schemaactionprocessflow
---

The user can view the schemas and the action present in an app and can also add schema and add action for each application node. 
This section enables the user to view and add the Schema and its Actions of an aplication in the Process Flow and managing the same
within a process flow for easy execution.

## Prerequisites
- The User needs to have a valid AEC account.
- An application node  is needed for defining the Schemas and its Actions.


## Listing of Schemas and Attributes

Process flow allows a defined tree view listing structure for managing and viewing
defined Schema, Attributes and Actions associated with it. 
* The Schemas are arranged in a same level hierarchy whereas
* The attributes and actions associated with the schema is arranged in the second level 
hierarchy.
* Newly created attribute is arranged under Attribute node.
* The Action Filters and Retry Filters associated with an action are arranged in 
the third level hieararchy under attributes

Thus listing view gives a clear synopisis to the user regarding the Schema access and 
Management in the interface. Any Changes done to the Schema and Attributes from the Portal, 
App section will be displayed in this section.


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
7) Enter the details of adding Schema and Click `Save` button 
 a. Schema Name: This is a mandatory field and it needs to be provided with the schema name    
 b. Schema Description: The description for the schema is needed to be given here   
 c. Schema Namespace: Differentiates between two similar schemas   
 d. Schema Namespace URL: Differentiates between two similar schemas using URL  
8) The newly created Schema is added and gets listed in the left side pane.  

### Importing Schemas in an Application node of Process flow 

1) On the Schema Window the user can view the list of schemas present or can also Import Schema Option.  
2) Clicking on `Import Schema` option the Form opens up. Here you can import Schema in three formats -  
* XML 
* JSON
* WSDL (Web Services Description Language) file for the Schema.     
3) In `JSON and XML` format you need to choose the respective XML and JSON file saved locally, but in `WSDL` format the user needs to provide the WSDL file link for importing the schema.  
4) For generic apps, WSDL option will not be available for importing to any protocol other than SOAP.  
5) For the XML/JSON format, the user needs to upload the file that supports the respective formats. 
For XML, the user needs to upload XML file and for JSON, the JSON file needs to be uploaded.      
6) The parent node of the provided XML file is needed to be provided in the ELEMENT field.  
`In this case, the parent is items, therefore the Element should be items.`     
6) Click on Render button, to view all the complex object & complex object collection and its attributes.     
Expanding the complex object & complex object collection will display all the attributes present.  
7) If parsing errors are encountered during the Rendering process, the same will be displayed 
to the Users.       
8) A confirmation message will be displayed after the Schema is imported successfully. 
On saving the selected Schema along with the Attributes will be added into the Organization. 
You can view the Imported Schema gets added in the listing section on the left side pane
of the window.  
9) Once Created, the Schema will be displayed on the left side of the pane.    
10) The `Attribute` and `Action` Folders will be automatically created under each Schema.    
11) For every Schema, the Context Menu will have the following options
`Add Attribute`, `Edit Schema`, `Delete Schema` and `Rename Schema`.    

**Note: 
(a)The user must save each node individually. There is no way the user can save it on the whole.
This process is same for both the XML and JSON formats.  
(b)For WSDL format, the URL File should be provided for extracting the complex object & complex object collection.
Click on the SAVE button individually for the saving each of the nodes.  
(c) Users will also be able to view the newly added Schema by navigating to the Portal, App section.**   

### Editing. Deleting & Renaming Schemas in an Application node of Process flow 

(A) To `Edit Schema`, do the following steps: 
1) Go to Processflow [designer]() section and drag the app node for which you want to edit schema.
2) Now click on the app node, and under schema field click Manage Schema.
3) You will be redirected to the `Manage Schema and Action` pop-up.
4) In the `Manage Schema and Action` window, you will be able to edit any existing Schema by click on the Schema
context menu and do the changes.

(B) To `Delete Schema`, do the following steps:

1) Go to Processflow [designer]() section and drag the app node for which you want to deleted schema.
2) Now click on the app node, and under schema field click Manage Schema.
3) You will be redirected to the `Manage Schema and Action` pop-up.
4) In the `Manage Schema and Action` window, you will be able to delete any existing Schema by click on the Schema
context menu and clicking on Delete Schema Option.

(C) To `Rename Schema`, do the following steps:

1) Go to Processflow [designer]() section and drag the app node for which you want to rename schema.
2) Now click on the app node, and under schema field click Manage Schema.
3) You will be redirected to the `Manage Schema and Action` pop-up.
4) In the `Manage Schema and Action` window, you will be able to rename any existing Schema by click on the Schema
context menu and clicking on Rename Schema Option.

**NOTE: (a) Once a Process Flow has been saved in an Environment you will be
unable to Rename the Schema, Delete the Schema.  
(b) You will be able to add/edit the `Namespace`, and `Namespace URL` values provided in the Schema.  
(c) YOU will be able to edit the `Description`, via `Edit Schema` option.**

### Adding Attribute to a Schema

1) The Schema context menu has the option to - ADD Attribute to the schema.  
2) Click on Add Attribute to add attribute to the schema. The Add Attribute form opens up. 
The fields in the Attriburte Property Window are:   
a. Attribute Name: It is a mandatory field, used for providing name to the attribute. 
   * The Attribute Name field will allow a `maximum of 100 characters`.  
   * In the Attribute Name field space and special characters will not be allowed.    
b. Data Type: Select the datatype from the drop-down as per the requirement. This is also a mandatory field.    
 *String  
 * Boolean  
 * DateTime  
 * Number  
 * ComplexObject  
 * ComplexObjectCollection  
 * Double   
c. Reference API: If any schema needs to be referred for the transformation, that can be referred by selecting 
the Schema Name from the drop-down as a reference Entity. The Reference API field will be displayed if the Attribute Data Type is `ComplexObject` or `ComplexObjectCollection`.        
d. Tags: Used  providing specific tags to the attribute.  
e. Namespace Prefix: Prefix could be added for this attribute while working with namespaces.  
f. Attribute Scope: Select the Scope - Organization Level or ProcessFlow Level. This is a mandatory field
select as per your business requirement.Attributes with scope `Organization` will be added at the Organization
 level whereas Attributes with scope `Local` will be added at the Process Flow level. 
g. Attribute Property: This section has 3 checkboxes - Primary, Required, Attribute.   
* Primary: For allotting this attribute as the Primary Key.  
* Required: For making this attribute mandatory for the mapping purpose.  
* Attribute:To add attribute in the XSLT
**Only one Attribute can be set as `Primary Attribute` within a Schema.**
3) Click SAVE button, after all the details has been made. A confirmation message of attribute creation
appears on the window stating the attribute is created successfully.
4) The newly created attribute gets added just below the Schema on the left side panel.    
5) Click on the created attribute in the node structure, for Renaming and Deleting 
the attribute.  

**Note: For adding Reference API, the created attribute must have the datatype Complex Object or Complex Object Collection.**

### Editing. Deleting & Renaming Attribute in an Application node of Process flow 


### Adding Action

### Adding Action Filter & Retry Filter