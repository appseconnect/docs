---
title: "Updating Inventory in Sage300"
toc: true
tag: developers
category: "Connectors"
menus: 
    sage300connector :
        title: "Updating Inventory in Sage300"
        weight: 15
        icon: fa fa-file-word-o
        identifier: sage300connectoraddinventory
---


## Prerequisites for Updating Inventory in SAGE300

1.	Need a valid SAGE 300 account.

2.	Need the server access to SAGE 300.

3.	Need to have the item present in the warehouses of inventory.


### Steps to Update Inventory in SAGE300

1. Login to the cloud portal of SAGE300.

2. Open the SAGE 300 application and Navigate to `Inventory Control> I/C Transaction > Adjustments` 

![inventoryupdate-sage1](/staticfiles/connectors/media/application-connector/inventoryupdate-sage1.png)

3. The adjustments window opens. Click on the `Item Number tab` and SELECT an item from the list of the items, available.

![inventoryupdate-sage2](/staticfiles/connectors/media/application-connector/inventoryupdate-sage2.png)

4. Click on the `Adjustment Type` tab and select the adjustment as per the requirement. The drop down has these following options.

a.	Quantity Increase - For increasing the quantity in Inventory.

b.	Quantity Decrease - For Decreasing the Quantity in Inventory.

c.	Cost Increase - For Increasing the Cost in the Inventory.

d.	Cost Decrease - For decreasing the cost in the inventory.

e.	Both Increase - For Increasing both the cost and the Quantity.

f.	Both Decrease - For Decreasing both the Cost and the Quantity.

![inventoryupdate-sage3](/staticfiles/connectors/media/application-connector/inventoryupdate-sage3.png)


5. Select the warehouse in the Location tab where the inventory is to be updated.


6. Provide the Quantity that is needed to be updated. Click on `Post and Save` button.

![inventoryupdate-sage4](/staticfiles/connectors/media/application-connector/inventoryupdate-sage4.png)


**Protip:** The Adjustment Date is the date, when the user is saving the updated quantity. The Posting Date is the date when the user wants to post the updated data in the ERP.
{: .notice--info}

**Protip:** The Post is to be click, when the user wants to post it to the ERP. Or-else Clicking on SAVE without posting will save the updated data 
but the data will not be Posted in the ERP.
{: .notice--info}

7. Now login to the server of SAGE 300 and open the application.

8. Navigate to Inventory Control > I/C Items and Price lists > Items Wizard. The item wizard window opens and click NEXT Button.

![inventoryupdate-sage5](/staticfiles/connectors/media/application-connector/inventoryupdate-sage5.png)

9. Select the item for which the inventory update was done in the portal and click NEXT button.

![inventoryupdate-sage6](/staticfiles/connectors/media/application-connector/inventoryupdate-sage6.png)

![inventoryupdate-sage7](/staticfiles/connectors/media/application-connector/inventoryupdate-sage7.png)

**Protip:** The checkbox Serial Number and the Lot Number is needed to be enabled.
{: .notice--info}

10. Select the Serial Number Mask from the Serial Numbers Page. Click on the field and select the Serial Number for the product.

![inventoryupdate-sage8](/staticfiles/connectors/media/application-connector/inventoryupdate-sage8.png)

11. Select the Lot Number Mask from the Lot Numbers Page. Click on the field and select the LOT, for the product. Click on Next button.

![inventoryupdate-sage9](/staticfiles/connectors/media/application-connector/inventoryupdate-sage9.png)

12. Click on Next button until the last page appears. 

![inventoryupdate-sage10](/staticfiles/connectors/media/application-connector/inventoryupdate-sage10.png)

This completes the process for `Updating Inventory in SAGE 300`.






