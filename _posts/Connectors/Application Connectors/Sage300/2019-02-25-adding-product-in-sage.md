---
title: "Adding Product in Sage300"
toc: true
tag: developers
category: "Connectors"
menus: 
    sage300connector :
        title: "Adding Product in Sage"
        weight: 13
        icon: fa fa-file-word-o
        identifier: sage300connectoraddproduct
---

## Prerequisites for adding Product/Items in SAGE 300

1.	Need to have a valid SAGE 300 account.

## Steps to Add Product/Items in SAGE 300

1.	Login to the cloud portal of the application SAGE 300. 

2.	Navigate to `Inventory Control > I/C Items and Price Lists >Items`.

3.	The Items Page opens. Hover the cursor beside the field Item Number and click on the Add/Edit Button.

![productadd-sage1](/staticfiles/connectors/media/application-connector/productadd-sage1.png)

The Construct Item Number window opens. Click Search Button.


![productadd-sage2](/staticfiles/connectors/media/application-connector/productadd-sage2.png)

The Select Structure Code window opens. Select any structure code from the given list and double click on it.

![productadd-sage3](/staticfiles/connectors/media/application-connector/productadd-sage3.png)

On the Value tab, click on the search button. Select any segment code for the window that opens 
and click on the Select button. For rest Segment Name, Segment Value is to be selected. 

![productadd-sage4](/staticfiles/connectors/media/application-connector/productadd-sage4.png)

**Note: The Structure Code and Segment provided should be unique else new items will not be created** 

Provide the Item Description, Category and the Account Set Code, in the Items Window.

![productadd-sage5](/staticfiles/connectors/media/application-connector/productadd-sage5.png)

Click on the Units Tab. Click on the Add Line option and provide the field. 

![productadd-sage6](/staticfiles/connectors/media/application-connector/productadd-sage6.png)

**Note: The conversion Factor in the Units tab, must be 1**

**Note: Enabling the checkbox is mandatory and the Stocking Unit of Measure field should be marked YES**

In the Taxes tab, enable the checkbox for the taxes present. Now Click Operation Fields.

Enable the Checkbox for Price in the optional fields and click SAVE button.

![productadd-sage7](/staticfiles/connectors/media/application-connector/productadd-sage7.png)