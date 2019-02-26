---
title: "Enabling Tracking in Transformation"
toc: true
tag: developers
category: "Transformation"
menus: 
    transformation:
        title: "Mapping"
        weight: 3
        icon: fa fa-file-word-o
        identifier: trackingtransformation
---

Tracking is a feature in APPSeCONNECT which lets the user view and track all those elements (Child Elements under a parent attribute in XML) 
in the Resync Bucket of the agent (Cloud & OP), which gets synced. This is done by defining the tracking in the cloud portal against the 
touchpoint for whose tracking, one needs to view.

For Instance: The user wants to track the GENDER of all the data in the Resync Bucket of the Agent. For this, the Tracking Feature is made use which enables 
user to view the corresponding results as required. 

The tracking screen consists of 3 sections: 

* **Source Tree**: Contains all the elements (Child Elements) for which the tracking is to be done.
* **Tracking Details**: This is the area where the Tracking is initiated. Tracking Details consists of the 
  field Header, Data Type, Expression Path, and a Check Box. 
* **Tracking Fields**: All the elements saved for tracking would be visible this area. 

**Executing the Tracking Feature**

Pre-requisites and the Pathway for implementing Tracking:

1.	Login to the Portal with valid credentials.
2.	Select or create application for whose integration is to be done.
3.	Create a Connection and Navigate to the touchpoint where the tracking is to be done.

**Note:** In case of Custom Apps, Touchpoints is needed to be created first for implementing Tracking.

![tracking1](/staticfiles/Transformation/media/tracking1.png)

**Implementing Tracking:**

1. Navigate to the touchpoint after login, for which the Tracking is to be done.

2. Click on the Transform button on the touchpoint you have selected. The user will now be able to view 
    the Transform screen of that touchpoint.

**Note:** In this case, the touchpoint Business Partner add is used for the connection Magento2 and SAP B1.

3. Click on the option, Open Tracking.

![tracking2](/staticfiles/Transformation/media/tracking2.png)
4. The tracking page can now be viewed. The three sections of the Tracking feature will be visible.

![tracking3](/staticfiles/Transformation/media/tracking3.png)

5. Expand the Customer node, in the Source Tree to get the view of all the elements whose 
    tracking can be done. Clicking on any of the elements, will automatically fill up the fields in the Tracking Section.

![tracking4](/staticfiles/Transformation/media/tracking4.png)

**Note:** By default, the Is Visible checkbox will be unchecked, the user needs to enable the checkbox for making it 
appear in the agent.

6. On clicking SAVE, the Tracking details will appear in the section Tracking Fields.

![tracking5](/staticfiles/Transformation/media/tracking5.png)
Note: One can either SAVE the Tracking element or can select the SAVE and Close option. 
The Save and Close option will save that element and will close the Tracking window. 
The SAVE option will provide you the opportunity to add multiple elements for tracking.

**Note:** In the similar Procedure elements can be added for tracking for different Touchpoints too.

7. The corresponding window shows the impact in the Resync bucket of the agent.

![tracking6](/staticfiles/Transformation/media/tracking6.png)

**Note:** Currently, Tracking is reflected only in the OP agent and the Cloud Agent. Workflow Snapshot doesnot 
reflect the Tracking Feature.