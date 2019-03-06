---
title: "Updating Inventory in Sage300"
toc: true
tag: developers
category: "Connectors"
menus: 
    sage300connector :
        title: "Updating Inventory in Sage300"
        icon: fa fa-file-word-o
        identifier: sageconnectoraddinventory
---


## Prerequisites for Updating Inventory in SAGE300

1.	Need a valid SAGE 300 account.
2.	Need the server access to SAGE 300.
3.	Need to have the item present in the warehouses of inventory.


### Steps to Update Inventory in SAGE300

Login to the server for SAGE300.

Open the SAGE 300 application and Navigate to `Inventory Control> I/C Transaction > Adjustments` 

![inventoryupdate-sage1](/staticfiles/connectors/media/application-connector/inventoryupdate-sage1.png)


The adjustments window opens. Click on the `Item Number tab` and SELECT an item from the list of the items, available.

![inventoryupdate-sage2](/staticfiles/connectors/media/application-connector/inventoryupdate-sage2.png)


Click on the `Adjustment Type` tab and select the adjustment as per the requirement. The drop down has these following options.

a.	Quantity Increase - For increasing the quantity in Inventory.

b.	Quantity Decrease - For Decreasing the Quantity in Inventory.

c.	Cost Increase - For Increasing the Cost in the Inventory.

d.	Cost Decrease - For decreasing the cost in the inventory.

e.	Both Increase - For Increasing both the cost and the Quantity.

f.	Both Decrease - For Decreasing both the Cost and the Quantity.

![inventoryupdate-sage3](/staticfiles/connectors/media/application-connector/inventoryupdate-sage3.png)


Select the warehouse in the Location tab where the inventory is to be updated.


Provide the Quantity that is needed to be updated. Click on `Post and Save` button.

![inventoryupdate-sage4](/staticfiles/connectors/media/application-connector/inventoryupdate-sage4.png)


**Protip:** The Adjustment Date is the date, when the user is saving the updated quantity. The Posting Date is the date when the user wants to post the updated data in the ERP.
{: .notice--info}

**Protip:** The Post is to be click, when the user wants to post it to the ERP. Or-else Clicking on SAVE without posting will save the updated data 
but the data will not be Posted in the ERP.
{: .notice--info}


