---
title: "Attribute Mapping of workflow"
toc: true
tag: developers
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    quickstartworkflow:
        icon: fa fa-link
        weight: 7
        title: "Attribute Mapping of workflow" 
        identifier: quickstartfirstworkflow
---

For every integration between the application, the business logic is required. Mapping triggers the process between the source and the destination application. Source and destination schemas are mapped in the transform section of the touchpoint.
A touchpoint maps the source schema for a particular action with the destination schema, thus facilitating the transfer of information between the schemas. While Working with `Workflow in APPSeCONNECT`
Attribute Mapping needs to be implemented before integrating. This document will help the users to implement Attribute Mapping in APPSeCONNECT Workflow.

## Pre-requisites:
1.	Need to have a valid APPSeCONNECT Account.
2.	Select the Applications whose workflow is to be implemented.
3.	Create a workflow or choose a pre-packaged workflow.

[Click](/workflow/steps-to-choose-your-workflow/) to know more about choosing workflow.

## Steps to Implement Attribute Mapping:

1.	Login to the APPSeCONNECT Portal and navigate to **Manage > Apps** to select the application , for implementing workflow.
2.	Navigate to the Workflow Section in the portal and create or choose the workflow for the touchpoint that is to be implemented.
**Note: The Pre-packaged workflow is selected for the touchpoint Customer ADD from WooCommerce to Priority.**
 ![Attribute-Mappingnew1](/staticfiles/workflow-management/media/Attribute-Mappingnew1.png)
3.	Click on the Process Node in the Customer Add Touchpoint, the Mapping Actions appears at the Right-Hand side of the workflow panel.
![Attribute-Mappingnew2](/staticfiles/workflow-management/media/Attribute-Mappingnew2.png)
**Note: For any touchpoint, clicking on the PROCESS Node of a touchpoint, displays the Mapping Actions in the Workflow Panel**
4.	There are three Tabs present in the Mapping Actions.               
a.	Mapping: This implements the Attribute Mapping between the attributes.                                   
b.	Source Entity: This displays all the Source Appresource Functions.                                
c.	Destination Entity: This displays all the Destination Appresource Functions.                               
5.	For Implementing Attribute Mapping, click on the Mapping Tab. The Transform window opens. Expand the For-Each-Loop Node and Row, until the destination attributes are displayed.
![Attribute-Mappingnew3](/staticfiles/workflow-management/media/Attribute-Mappingnew3.png)
6.  For Attribute Mapping, click on the Open Button when hovered on an attribute. Implement the mapping, in the Mapping panel and click on the Submit Button.
![Attribute-Mappingnew4](/staticfiles/workflow-management/media/Attribute-Mappingnew4.png)
7.  For more Details and Information on Attribute Mapping[Click here](/transformation/steps-to-cutomize-prebuilt-mapping/)

