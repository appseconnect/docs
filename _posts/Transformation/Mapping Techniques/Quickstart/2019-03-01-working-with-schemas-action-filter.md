---
title: "Working with Schema, Action & Filter"
toc: true
tag: developers
category: "Transformation"
menus: 
    transformationbasic:
        title: "Working with Schema, Action and Filter"
        weight: 3
        icon: fa fa-file-word-o
        identifier: transformationactionsschemas
---

### Knowing Schema, Actions & Filters


The user can view the schemas and the action present or can also add schema and add action for each 
application. This section enables the user to view and add the Schema and its Actions.

**Actions**

Actions are nothing but defining certain tasks like getting data from an application or sending data to an application based on certain conditions and these conditions are defined through an action filter. 

For example, suppose you want to fetch customer's data from an eCommerce site and in APPSeCONNECT you define a Customer entity for that, now for getting data we can define an action name, called 'GET'. 
When you define an action for an entity you need to provide certain information

* Action Name: Name of the action. In some predefined application, many adapter logics are written based on this data.
* Action Description: Description of the action. At the time of touchpoint creation, actions are selected based on this description.
* Action Filter & Resync Filter Details

**Action Filters**  

The important part of an action is defining an action filter where we can define the conditions based on 
which data will be fetched. The criteria we define here need to follow the filter parsing logic or the rules to read the 
specific set of information from source XML/json file. Action filters are added in a hierarchical node structure against an Action.

An example of defining action filter is; You want to fetch customers from eCommerce based on the creation date which is greater 
from a certain date range then action filter will be like this: 

* Request - Body/Header. If you don't provide any value, it sends the information in the body.  If we select the header 
then that information must be written within the adapter.

* Operator - condition (greater than, less than, equal, not equal etc.)

* Value - Based on which the condition will be evaluated. You can provide any string here. Also, you can use an Appresource 
function in filter criteria. The pattern of using it is like this ~{CreatedDate}~ . Here 'CreatedDate' is the function 
written in native Appresource. Here the CreatedDate value returns the last stored date time value for the currently 
executing touchpoint where that action filter used.

If you create multiple nodes or conditions then you will get an additional field:

Conjunctions - And/Or [$Node1 + $Node2]

![actionfilter-image](/staticfiles/Transformation/media/actionfilter-image.png)

**Error Filter**

Error filters are the same as the action filters. They are written for syncing erroneous data which are present in APPSeCONNECT error log bucket or the resync bucket. Based on the logic implemented in adapter code you need to specify the error filter.
For explanation purpose, sample filter for SOAP API has been taken, where a hierarchical node structure is maintained for filtration.

1. Create a new node

![actionfilter](/staticfiles/Transformation/media/actionfilter.png)

2. After creating a new node, you will be able to do the following things

    a) Create another node (as a child of the parent node).
    b) Rename the created node.
    c) Delete the created node.

3. As a sample filter for Order Add has been taken, you will get the information in a key-value pair. Fill in the details for the
   key-value pair & Complex filters as required. 

![actionfilter-example1](/staticfiles/Transformation/media/actionfilter-example1.png)

![actionfilter-example2](/staticfiles/Transformation/media/actionfilter-example2.png)

![actionfilter-example3](/staticfiles/Transformation/media/actionfilter-example3.png)

### Steps to Import Schemas and Actions of an Application

The steps to import schemas and actions of an application is given below:

**Prerequisites**

1.	The User needs to have a valid AEC account.
2.	An application is needed to select for defining the Schemas and its Actions.

**Importing Schemas and Actions of an application**

1.	Login to the APPSeCONNECT Portal with valid credentials.
2.  Go to APPS Page and [Choose any application](/getting-started/#choosing-application )
3.  Click on the + sign after adding the application and click on Schema 
    (Here MS Dynamics NAV has been choosen). 
![Importing-SchemaAction1](/staticfiles/Transformation/media/Importing-SchemaAction1.png)
4. On the Schema Window the user can view the list of schemas present or can also add schemas from the `ADD Schema` Option.
![Importing-SchemaAction2](/staticfiles/Transformation/media/Importing-SchemaAction2.png)
5.	The Actions inside a schema can be viewed by clicking on the + sign. 
![Importing-SchemaAction3](/staticfiles/Transformation/media/Importing-SchemaAction3.png)
6.	Click on the `ADD ACTION` button for providing Actions in the schema level. 
    Input the **Action Name** and the **Action Description**. The user can view the ACTION window below.
![Importing-SchemaAction4](/staticfiles/Transformation/media/Importing-SchemaAction4.png)
7. Expand the nodes for viewing the Action Filters and the Resync Filters. Right Click on the Action Filter node to create its filters.
**NOTE: Save the Action Name and the Description before creating action filters.**
![Importing-SchemaAction5](/staticfiles/Transformation/media/Importing-SchemaAction5.png)
8.	Edit the name of the Action Filter node and input the details in the fields REQUEST, OPERATOR, and the VALUE.
9.	Similarly, for RESYNC Filter, Right Click to create its filter. Edit the Name, and input the details for the field REQUEST, OPERATOR and the VALUE.
![Importing-SchemaAction6](/staticfiles/Transformation/media/Importing-SchemaAction6.png)
10.	Once done with the configurations, click on the SAVE option.

**Protip:** Default Schemas would only be present for the Pre-packaged APPS.
{: .notice--info}