---
title: "Inventory Update NAV-Mage2 Multiconnection"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    navmagentointegration:
        title: "Inventory Update NAV-Mage2 Multiconnection"
        icon: fa fa-wpexplorer
        identifier: inventoryupdateintegration
---

Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how the 
integration process can be executed through workflow for adding Inventory for products from Ms Dynamics NAV to Magento2 (Multi-store).

## Brief Description

![nav-magemulti-inventoryworflow](/staticfiles/integration/media/nav-magemulti-inventoryworflow.png)

In this case, the quantity of the products is added by updating the inventory. Therefore, the above workflow 
is designed to `Update the Inventory` of the products added in MS Dynamics NAV and will be posted to Magento2 (Multi-store).

**Note: Before adding the inventory of the products, the user needs to make sure the products are synced which needs to be updated**

1.  For Updating or Adding Inventory in Dynamics NAV, navigate to the Product Item card-Item Journal.
2.  In the Item Journal window, select the Item No. for whom the inventory is added.
3.  Select the Warehouse location from the drop down present in the Location Code column.
4.  Input the Quantity in the quantity column and the Unit of Measurement.
5.  Enter the Unit Amount and Click on Post.

![nav-magemulti-inventory2](/staticfiles/integration/media/nav-magemulti-inventory2.png)

A successfully posted message will be displayed in the screen. Click on Ok after the message is displayed.

![nav-magemulti-inventory3](/staticfiles/integration/media/nav-magemulti-inventory3.png)

## LookUp Mapping

The Lookup mapping for Currency shall be required in case the business logic deals with multiple currencies.

## Attribute Mapping/Transformation

Following the Provided Mapping, the user can sync the Inventory Add from Ms Dynamics NAV to Magento2. To know more, see [Mapping & Transformation Techniques](/transformation/steps-to-cutomize-prebuilt-mapping/).

**Note: The mapping for the ComplexObject for Inventory Add, will be same as that of the Simple Product Add.**

## Mapping for the Root Variables for 'Simple Product Add Touchpoint'

![nav-magemulti-inventory-mapping](/staticfiles/integration/media/nav-magemulti-inventory-mapping.png)

**Note: The blank mapping is required for the Root Variable `UpdateSyncFlag` in case of `Inventory Add sync` for multiple 
connection from Dynamics NAV to Magento2.**

## Action Filters

Add a node to the given pre-packaged order of the Action filter with two sub-nodes `Field` and `Criteria`
View the image below to define the Action Filters

![nav-magemulti-inventory4](/staticfiles/integration/media/nav-magemulti-inventory4.png)

![nav-magemulti-inventory5](/staticfiles/integration/media/nav-magemulti-inventory5.png)

## Executing the Workflow Integration

**Note: Before Integrating with Magento2 and MS Dynamics NAV, make sure all the Master Data Touchpoints are synced.**

1. Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent.

2.	Navigate to the Workflow Panel in the agent and click Start Sync Button for executing the Process.
3.	Once the Execution is finished, click Resync Button in the agent.

4.	The Resync Panel show the Success Result in the agent.

![nav-magemulti-inventory6](/staticfiles/integration/media/nav-magemulti-inventory6.png)

## Integration Data Survey

The user can survey the data by viewing the `Processed Snapshot` from the node level of the workflow.
This Snapshot View displays the successful execution of the workflow.

![nav-magemulti-inventory7](/staticfiles/integration/media/nav-magemulti-inventory7.png)

## Post Conditions

* The Inventory is successfully updated in Magento2 (Multi-store). The quantity can be viewed in the Magento Backend by navigating 
to Catalog - Products - View Product.

![nav-magemulti-inventory8](/staticfiles/integration/media/nav-magemulti-inventory8.png)

* WebStockFlag must get to `T` from `F` after the sync is complete.

## Frequency of use

The user can execute the Integration through workflow as and when required.

## Troubleshooting

N/A





