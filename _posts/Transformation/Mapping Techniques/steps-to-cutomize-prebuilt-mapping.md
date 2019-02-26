---
title: "Steps to Customize Prebuilt Mapping"
toc: true
tag: developers
category: "Transformation"
menus: 
    transformation:
        title: "Mapping"
        weight: 3
        icon: fa fa-file-word-o
        identifier: tgettingstarted
---
The data coming from the source schema requires to be transformed individually such that it matches the format 
of the destination schema every time the touchpoint is synced.

E.g: Suppose the user is executing `Invoice Add` touchpoint in this case
the records of all the Invoices are drawn from the source app and for this case the similar 
execution process of transformation is deployed multiple times. 

**Prerequisites for Working with Mapping**

1.	Login to the Portal with valid credentials.
2.	Select or create application for whose integration is to be done.
3.	Create a Connection and Navigate to the touchpoint where the Mapping is to be done.

**Protip:** In case of Custom Apps, Transformation or Mapping can be executed or implemented while creating touchpoint {: .notice--info}

**Implementing Attribute Mapping**

1.	Login to APPSeCONNECT and Navigate to the touchpoint for which you need to do the mapping. 

Note: For the demonstration the touchpoint `Invoice Add` is used.

2.	Click on the Transform button on the touchpoint which you have selected. 

3.	Expand the transformation node for viewing the `Touchpoint Object, Complex Object collections, the Complex Object and the Attributes`.

![attributemapping1](/staticfiles/Transformation/media/attributemapping1.png)

4. Expanding the For-each loop, the user gets the view of the node oInvoices. `oInvoices` is a touchpoint object 
  that is used to send data to the target application. The For-Each Loop is set relatively rather than writing the transformation logic multiple times and
  this undergoes execution whenever the touchpoint is synced in the For-Each Loop Node.  

![attributemapping2](/staticfiles/Transformation/media/attributemapping2.png)

5.	On expanding `oInvoices(Touchpoint Object)` the user gets the view of the several complex object collections 
    and the attributes that are listed under it. Each attribute has separate information about the entity that 
    it belongs to. Each of these attributes will contain different information about the customer record. 

Note: For different touchpoints, the object is different. For the touchpoint Sales Order Add,
the object is oOrders for Simple Product Add it is oItems and so on.

![attributemapping3](/staticfiles/Transformation/media/attributemapping3.png)

**Protip:** Document_Lines will contain the details of the Product in terms of Quantity and Unit Price etc., 
DocumentsAdditionalExpenses contains the Freight, Tax information etc. of the product.
{: .notice--info} 

**Note:** Different objects in different touchpoints will have different attributes. The structure remains the 
same on expanding the any other attributes of any other touchpoints.

6.	Expanding the row displays the destination attributes in the touchpoint level.
All fields or attributes present in the touchpoint are mapped with the corresponding fields of the source schema.

![attributemapping4](/staticfiles/Transformation/media/attributemapping4.png)

7.	Clicking on any of the attributes displays an option (three horizontal dots) to open a drop-down.
For the attributes which are not mapped, options available is: 
a. OPEN 
b. ADD IF  

For the attributes which are mapped, options available is:
 
a.	**Disable** -This option is for disabling the mapping, if not required.
b.	**Open** - The mapping window will open, if clicked on Open. Here, you can either map or edit an existing mapping.
c.	**Clear** - This option clears out the existing mapping.
d.	**Add If** - If-Else conditional mapping can be implemented, if clicked on this option. [Click here](/transformation/define-logic-over-destination-mapping/) to know more

8.	Click on the OPEN option for implementing the attribute mapping. The User can view the Mapping window, below.

![attributemapping5](/staticfiles/Transformation/media/attributemapping5.png)

9.	The mapping window has multiple sections and fields. Expanding the nodes in the Source Field section displays the appresource functions 
    and the source attributes that is required for the mapping.

10.	On expanding the touchpoint object node (in this case INVOICE ADD) displays all the source attributes.

![attributemapping6](/staticfiles/Transformation/media/attributemapping6.png)

11. Expanding the node `FUNCTIONS` lists all the functions present under Generic Source, Destination and Cloud appresources. 
  
![attributemapping7](/staticfiles/Transformation/media/attributemapping7.png)

12. Clicking on any of the functions, will display it in the mapping panel. Once the mapping is done, Click SUBMIT button for Enabling and Saving the mapping. 

**Note:** The Tips field is for providing or noting down certain tips that might be required for the mapping for 
later use similarly. Comments field is providing comments specific to this attribute mapping that might be 
required later. The Output Encoded checkbox is for ensuring that the generated data is kept intact 
irrespective of the XML standardisation. 