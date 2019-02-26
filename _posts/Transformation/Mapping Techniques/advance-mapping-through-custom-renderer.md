---
title: "Advance Mapping through Custom Renderer"
toc: true
tag: developers
category: "Transformation"
menus: 
    transformation:
        title: "Mapping"
        weight: 3
        icon: fa fa-file-word-o
        identifier: transformationcustom
---


Brief Description: 
This feature enables the user to alter the default XML structure which and when required through rendering. 
In case of Complex Attribute Mapping, Rendering makes the procedure easy and adaptable to the environment.

Actors:
 Implementers, Developers, Partners.

Preconditions: 
Organisation Creation & Connection Creation.

Basic Flow:

1.	Login to the APPSeCONNECT Portal and create a connection with the application for which the rendering is to be 
    implemented.
2.	Navigate to the touchpoint and click on the transform button. The transform window opens up.
3.	Expand the node Transformation until RENDERER appears. Click on Add Renderers.

Note: Renderers can only be added when the Touchpoint is Active.

![rendered1](/staticfiles/Transformation/media/rendered1.png)
4.	The user can view the Renderers Window below. Default Rendering is the structure that shows that if there is no rendering, the Default Rendering Structure provided, would be implemented.

5.	Provide the Renderer Name. The user can click on the button TargetExpressions ([property]) and SourceExpressions ([value]) to get the syntax for mapping.
![rendered2](/staticfiles/Transformation/media/rendered2.png)
6.	Input the Expression as how the rendering needs to be done. And click on SAVE.

7.	After saving, navigate to the Attribute Mapping Section (Link for the Attribute Mapping) for the schema `Property`.

8.	Open the Mapping panel for any attribute for which the Rendering is to be applied. Click on the Enable checkbox and select the created Renderer from the dropdown list.

![rendered3](/staticfiles/Transformation/media/rendered3.png)

Post-Conditions:
The user can view the successful sync of the touchpoint Contact Add for the connection HUBSPOT CRM and SAP Business One.

Exception Courses:
Rendering will only be implemented, if the provided expression is supporting the XML standard or else will popup while saving the rendering expression.
The user can view the error logs in the RESYNC Bucket of the agent (Cloud and OP), if the touchpoint fails to sync for any cases.

Frequency of Use:
The user can implement rendering when required for any touchpoint.

Assumptions:
Not Applicable
