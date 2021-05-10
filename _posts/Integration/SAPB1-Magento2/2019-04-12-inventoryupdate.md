---
title: "Inventory Update"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    sapbmagentointegration:
        icon: fa fa-wpexplorer
        weight: 4             
        title: "Inventory Update"
        identifier: sapbmage2integration
---

Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how the integration process can be executed through workflow for 
adding Updating Inventory from `SAP Business One to Magento2`.

**Note: Before proceeding with any integration configuration, users are advised to view the pre-requites of the [integration process](/integration/SAPB1-Magento2/).** 

## Brief Description

![inventoryupdate_workflow](/staticfiles/integration/media/inventoryupdate_workflow.png)

In this case, the quantity of the products is added by updating the inventory. Therefore, the above workflow is designed to Update the Inventory of the products added in SAP Business One and will posted to Magento2.

1.	For Updating the Inventory in SAP Business One client an item needs to be created first. After creating the item, `Navigate to Modules > Inventory > Inventory Transactions > Goods Receipt`.
2.	In the Good Receipt dialogue box, click on the Item No. field and select the item whose inventory needs to update.
3.	Click on the Quantity field for the selected item and enter the quantity that needs to be updated. Click on the Add Button after doing so. 
4.	After updating the Inventory, the user can check the InStock status of the product from the Item Master Data Module.

![update_inventory1](/staticfiles/integration/media/update_inventory1.png)

**Note: Click on the links for knowing the agent validation process in [Magento2](/connectors/magento2/) and [SAP Business One](/connectors/Sap-Business-One/).**

## Lookup Mapping

Not Required


## Attribute Mapping/Transformation

Following the Provided Mapping, the user can sync the Simple Product Add from SAP Business One to Magento2. 
To know more, see  [Mapping & Transformation Techniques](/transformation/steps-to-cutomize-prebuilt-mapping/).

**Mapping for the `Inventory Update`**

1.	Mapping for the ComplexObjectCollection stockItem
![update_inventory2](/staticfiles/integration/media/update_inventory2.png)                         

a.	Itemid – This is mapped with the WebID of the product present in SAP Business One.                         
b.	productid - This is also mapped with the WebID of the product present in SAP Business One.                              
c.	qty – This attribute is mapped with the quantity OnHand present in the SAP Business One.                             
d.	UploadURL – This defines the route to the Magento2.                                 

**Mapping of the `Root Variable`**

![update_inventory3](/staticfiles/integration/media/update_inventory3.png)

a. $seperator: This variable is a pre-packaged variable mapped with a single quote.                              
b. $executequery: This variable is mapped to execute the given query in SAP Business One database.                                               
c. $executesql: This is also a pre-packaged variable which is mapped to call the variable $executequery.                                                      
d. $itemUDFsku: This is a string type variable created to map with the itemCode present in SAP Business One.                                         
e. $Replacesku: This variable is mapped to maintain the SKU in database.                                       

**Note: After the mapping changes`Reset Generate` and `Reset Publish` the Touchpoint. After Republishing, 
 Click on the `Update Configuration` button in the Agent.**

## Executing the Workflow Integration

**Note: Before integrating with Magento2 and SAP Business One, make sure all the Master Data Touchpoints are synced.**

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent.
2.	Click Run button in the workflow panel in the cloud portal.
![update_inventory4](/staticfiles/integration/media/update_inventory4.png)
3. Once the Execution is finished, click `Resync Button` in the agent. The Resync Panel shows the Success Result in the agent. 
![update_inventory5](/staticfiles/integration/media/update_inventory5.png)
4. The User can also trigger or [deploy the workflow](/workflow/deploying-and-executing/) from the cloud Portal by clicking on the run button.


## Integration Data Survey

The user can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/) from the node level of the workflow. 
![update_inventory6](/staticfiles/integration/media/update_inventory6.png)
This Snapshot View displays the successful execution of the workflow. The Inventory with the product source id 2999 is successfully synced in Magento2.

## Post-Conditions

The user can view the Quantity of the product synced in the Magento2 by navigating to Catalog ->Products.
![update_inventory7](/staticfiles/integration/media/update_inventory7.png)

## Frequency of Use

The user can execute the Integration through workflow as and when required. 

## Troubleshooting

a. Error: Details:

{“message”:“Request does not match any route”.} 

1.	For troubleshooting this error, Navigate to the transform section in the portal.
2.	The mapping for the UploadURL needs to be altered. Read the Attribute Mapping/Transformation portion of this document to know about the mapping of the UploadURL.
3.	Also, verify that the U_WebID of the Product is present in the UDF that is created in SAP Business One Client. 
4.	To view the U_WebID of the Product, Navigate to Modules -> Inventory -> Item Master Data -> Choose the Product -> CTRL + Shift + U.                   

![update_inventory8](/staticfiles/integration/media/update_inventory8.png)

Doing this, the user can successfully integrate this workflow. 

b.	Log Bucket shows `Source Application Returned False` even when applications adapters are properly validated.
![troubleshooting-inventory-sapmage2](/staticfiles/integration/media/troubleshooting-inventory-sapmage2.png)

Solution: `Source Application Returned false` may not be the error, only for adapter validation. Users also needs to ensure that the action filter provided is correct. 

As SAP Business One follows a Query based filter, Users are advised to run the query for action filter in the database first for ensuring that the query fetching the required data.


