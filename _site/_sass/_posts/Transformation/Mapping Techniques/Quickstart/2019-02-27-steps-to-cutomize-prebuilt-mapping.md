---
title: "Steps to Customize Prebuilt Mapping/Attribute mapping"
toc: true
tag: developers
category: "Transformation"
menus: 
    transformationbasic:
        title: "Steps to Customize Prebuilt Mapping/Attribute mapping"
        weight: 13
        icon: fa fa-file-word-o
        identifier: attributemappingprebuilt
---

The data coming from the source schema requires to be transformed individually such that it matches the format 
of the destination schema every time the touchpoint is synced.

E.g: Suppose the user is executing `Invoice Add` touchpoint in this case
the records of all the Invoices are drawn from the source app and for this case the similar 
execution process of transformation is deployed multiple times. 

## Prerequisites for Working with Mapping

1.	Login to the Portal with valid credentials.
2.	Select or create application for whose integration is to be done.
3.	Create a Connection and Navigate to the touchpoint where the Mapping is to be done.

**Protip:** In case of Custom Apps, Transformation or Mapping can be executed or implemented while creating touchpoint 
{: .notice--info}

## Implementing Attribute Mapping

Login to APPSeCONNECT and Navigate to the touchpoint for which you need to do the mapping.       
**Note: The Edit Touchpoint Button will be available only for the custom touchpoint created for that connection. For the demonstration of touchpoint `Invoice Add` is used**
![attributemapping](/staticfiles/Transformation/media/attributemapping.png) 
2.	Click on the Transform button on the touchpoint which you have selected.   
3.	Expand the transformation node for viewing the `Touchpoint Object, Complex Object collections, the Complex Object and the Attributes`.
![attributemapping1](/staticfiles/Transformation/media/attributemapping1.png)
4. Expanding the `For-each loop` the user gets the view of the node oInvoices. `oInvoices` is a schema
  that is used to send data to the target application. The `For-Each Loop` is set relatively rather than writing the transformation logic multiple times and
  this undergoes execution whenever the touchpoint is synced in the For-Each Loop Node.  
![attributemapping2](/staticfiles/Transformation/media/attributemapping2.png)
5.	On expanding `oInvoices(Touchpoint Object)` the user gets the view of the several complex object collections 
    and the attributes that are listed under it. Each attribute has separate information about the entity that 
    it belongs to. Each of these attributes will contain different information about the customer record. 
6.	The complex objects and the complex object collection type of attributes require a blank mapping (null value) for sorting.     

**Note: Attributes and variables with no mapping will neither be allowed to sort in the mapping tree nor will it be displayed in the XSLT preview.
          For different touchpoints, the object is different. For the touchpoint Sales Order Add, the object is oOrders for Simple Product Add it is oItems and so on**
![attributemapping3](/staticfiles/Transformation/media/attributemapping3.png)

**Protip:** Document_Lines will contain the details of the Product in terms of Quantity and Unit Price etc., 
DocumentsAdditionalExpenses contains the Freight, Tax information etc. of the product.
{: .notice--info} 

Each object in different touchpoints will have different attributes. 
Expanding the **row** displays the destination attributes in the touchpoint level.
All fields or attributes present in the touchpoint are mapped with the corresponding fields of the source schema.
![attributemapping4](/staticfiles/Transformation/media/attributemapping4.png)
The user can create custom attributes, which is defined in project level. You can use the custom attributes only for a particular touchpoint.
![attributemapping4b](/staticfiles/Transformation/media/attributemapping4b.png)
**Note:** The user can sort the order of attributes and variables in the mapping page by dragging and dropping the same 
under its parent only if the mapping for the attribute has been done or if it is blank.

Clicking on any of the attributes displays an option (three horizontal dots) to open a drop-down.   
For the attributes which are not mapped, options available is:   

a. OPEN 

b. ADD IF
  
For the attributes which are mapped, options available is:
 
a.	**Disable** -This option is for disabling the mapping, if not required.

b.	**Open** - The mapping window will open, if clicked on Open. Here, you can either map or edit an existing mapping.

c.	**Clear** - This option clears out the existing mapping.

d.	**Add If** - If-Else conditional mapping can be implemented, if clicked on this option. [Click here](/transformation/define-logic-over-destination-mapping/) to know more

Click on the **OPEN** option for implementing the attribute mapping. The User can view the Mapping window, below.
![attributemapping5](/staticfiles/Transformation/media/attributemapping5.png)
The mapping window has multiple sections and fields. Expanding the nodes in the Source Field section displays the appresource functions 
and the source attributes that is required for the mapping. On expanding the touchpoint object node (in this case INVOICE ADD) displays all the source attributes.
![attributemapping6](/staticfiles/Transformation/media/attributemapping6.png)
Expanding the node `FUNCTIONS` lists all the functions present under Generic Source, Destination and Cloud appresources. 
![attributemapping7](/staticfiles/Transformation/media/attributemapping7.png)
Clicking on any of the functions, will display it in the mapping panel. Once the mapping is done, Click SUBMIT button for Enabling and Saving the mapping. 
**Note:** The Tips field is for providing or noting down certain tips that might be required for the mapping for 
later use similarly. `Comments field` is providing comments specific to this attribute mapping that might be 
required later. The `Output Encoded` checkbox is for ensuring that the generated data is kept intact 
irrespective of the XML standardisation. 

## Examples of Attribute Mapping

To better explain the usage of Attribute mapping, let's take a quick look at an example of specific 
attribute mapping against SAPB1 Card Code during Sales Order download from Magento to SAP B1.

Example:

Lets say for an integration (e.g. Magento-SAP B1), you want to run Sales Order Add touchpoint, 
but there is no direct mapping in SAP B1 with the Card Code, as there is no such field in Magento. 
So, for that purpose Customer's email which exists at both ends is considered as the primary key. 

Now, to resolve the problem you can create a variable customerCardCode that can hold Customer email.

Here, Mapping is done in 2 stages:

![example-attributemapping1](/staticfiles/Transformation/media/example-attributemapping1.png)

"GetCustomerCardCodeByEmailId" is the predefined custom function that is called to retrieve the SAP B1 CardCode value (Destination app) using Magento's API field customer_email (Source app) i.e. 

![example-attributemapping2](/staticfiles/Transformation/media/example-attributemapping2.png)

This above part of code suggests that when the email data result is blank then the CardCode will be displayed on the basis of customer's web id or else the card code will be shown as per the Customer's Email. 

**OCRD refers to the Orders Table and U_WBCUSTID refers to the web customer id**

## Steps to Attribute Mapping

1. Login to [portal.appseconnect.com](https://portal.appseconnect.com/Account/Login?ReturnUrl=%2f#!)

2. Go to connection and choose the connection you want to customize. (Here chosen is Magento to SAP B1 Connection)

3. Open Touchpoint and select Transform. The mapping that is already created will open. 

4. You can now see the set of mapping we defined in a particular connection with predefined logic. 

5. For Mapping # 1 (as shown above), you have to declare the destination variable: **customerCardCode**

6. After defining destination variable, it requires to be mapped with source API field which is then defined in the source declaration section.

![example-attributemapping3](/staticfiles/Transformation/media/example-attributemapping3.png)

In general, this method if already defined in the base or generic integration then they can be reused.

Again if they are not defined or needs to be customized, then we can directly add them under Destination Methods as:

![example-attributemapping4](/staticfiles/Transformation/media/example-attributemapping4.png)

**The above process shows the way how you can define the Mapping#1.**

In a similar way, one can proceed with defining the next mapping.

**In Mapping # 2, CardCode is the pre-defined destination attributes, which you can directly fetch as**

![example-attributemapping5](/staticfiles/Transformation/media/example-attributemapping5.png)

For destination attribute, you have to define <choose><when> statement for multiple conditional states:

![example-attributemapping6](/staticfiles/Transformation/media/example-attributemapping6.png)