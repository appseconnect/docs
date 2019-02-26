---
title: "Working with Schema, Action & Filter "
toc: true
tag: developers
category: "Transformation"
menus: 
    transformation:
        title: "Mapping"
        weight: 3
        icon: fa fa-file-word-o
        identifier: transformationactions
---

**Importing Schemas and Actions of an Application**

**Prerequisites**

1.	The User needs to have a valid AEC account.
2.	An application is needed to select for defining the Schemas and its Actions.

**Steps to Import Schema and Actions of an application:**

1.	Login to the APPSeCONNECT Portal with valid credentials.
2.  Go to APPS Page and [Choose any application]()
3.  Click on the + sign after adding the application and click on Schema 
    (Here MS Dynamics NAV has been choosen). 

![attributemapping1](/staticfiles/Transformation/media/attributemapping1.png)

4. On the Schema Window the user can view the schemas present or can also add schemas present for the ADD Schema Option.
![attributemapping2](/staticfiles/Transformation/media/attributemapping2.png)

5.	The Actions inside a schema can be viewed by clicking on the + sign. 
![attributemapping3](/staticfiles/Transformation/media/attributemapping3.png)

6.	Click on the `ADD ACTION` button for providing Actions in the schema level. 
    Input the Action Name and the Action Description. The user can view the ACTION window below.
![attributemapping4](/staticfiles/Transformation/media/attributemapping4.png)

7. Expand the nodes for viewing the Action Filters and the Resync Filters. Right Click on the Action Filter node to create its filters.

NOTE: Save the Action Name and the Description before creating action filters.

![attributemapping5](/staticfiles/Transformation/media/attributemapping5.png)

8.	Edit the name of the Action Filter node and input the details in the fields REQUEST, OPERATOR, and the VALUE.

9.	Similarly, for RESYNC Filter, Right Click to create its filter. Edit the Name, and input the details for the field REQUEST, OPERATOR and the VALUE.

![attributemapping6](/staticfiles/Transformation/media/attributemapping6.png)

Protip: Default Schemas would only be present for the Pre-packaged APPS.