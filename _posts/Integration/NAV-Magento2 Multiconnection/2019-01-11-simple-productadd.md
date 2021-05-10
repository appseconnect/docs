---
title: "Simple Product Add NAV to Mage2 Multiconnection"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    navmagentointegration:
        title: "Simple Product Add NAV to Mage2 Multiconnection"
        icon: fa fa-wpexplorer
        identifier: simpleproductaddnavtomage2multi
---

Executing the Process is a vital part when integrating any applications. This Document will enable the users understand 
how the integration process can be executed through workflow for adding Simple Product from Ms Dynamics NAV to Magento2 (Multi-store).

## Brief Description

![wrkflw_simpleprdct_navmagemulti](/staticfiles/integration/media/wrkflw_simpleprdct_navmagemulti.png)  
In this integration scenario, multiple connections have been made for transformation of Simple Products from  Ms Dynamics NAV to Magento2 (along with multiple Magento websites from a single Magento admin). 
* Login to the Ms Dynamics NAV Client and create a new item from the Items Page. 
* Provide the details of the item and also enter the web data related details like WebProductDetails, website, attributes, category.
* Click the WebItemFlag checkbox and also choose the application ID (application ID should be defined in the AEC application table while syncing setup). 
![simpleprdct_navmagemulti1](/staticfiles/integration/media/simpleprdct_navmagemulti1.png)
* Input the details for multiple connections that can be selected from the drop downs of the 
* Web Product Details CP Page - Select the `ConnectionName`, `ApplicationName`, `WebAttributeSetId` and enable the checkbox for `WebItemFlag`.
![simpleprdct_navmagemulti2](/staticfiles/integration/media/simpleprdct_navmagemulti2.png)

**NOTE: The same product can be added to multiple connection by creating a new line in Web Product Details CP Page and choosing the desired connection name. Further repeat the same steps as discussed above for the newly chosen connection.**

* Web Product Websites Page - The `ConnectionName` & the `WebsiteID` needs to be selected from the Drop-down.
![simpleprdct_navmagemulti3](/staticfiles/integration/media/simpleprdct_navmagemulti3.png)
* Web ProductAttribute Page - Select the `ConnectionName`, `AttributeID` and the `AttributeOptionId` from the drop-down for the product that needs to be synced to Magento.  
**Note:** The `AttributeId`can be opted from the drop-down only when the `WebAttributeSetId` is selected from the `Web Product Details CP page`. The `AttributeOptionId` can be opted when the `AttributeId` is selected. 
![simpleprdct_navmagemulti4](/staticfiles/integration/media/simpleprdct_navmagemulti4.png)
* Web ProductCategory Page - Select the `ConnectionName` and the `CategoryId` form the drop down that needs to be synced to Magento.
![simpleprdct_navmagemulti5](/staticfiles/integration/media/simpleprdct_navmagemulti5.png)
 * AEC Application Item List -  The details will be auto-populated as per the input provided in the Web Product Details CP page.
![simpleprdct_navmagemulti6](/staticfiles/integration/media/simpleprdct_navmagemulti6.png)
The entire Item Card Page for the selected product (here - Schneider Circuit Breakers) is given below.
![simpleprdct_navmagemulti7](/staticfiles/integration/media/simpleprdct_navmagemulti7.png)  
![simpleprdct_navmagemulti8](/staticfiles/integration/media/simpleprdct_navmagemulti8.png)

Click OK button on creating the Item.

**NOTE: There is no need to create duplicate products in NAV to be synced in Multiple Magento.**

## Lookup Mapping

The Lookup mapping for currency shall be required in case the business logic deals with multiple currencies.

## Attribute Mapping/Transformation

Following the Provided Mapping, the user can sync the Simple Product Add from Ms Dynamics NAV to Magento2. 
To know more, see [Mapping & Transformation Techniques](/transformation/steps-to-cutomize-prebuilt-mapping/).

Mapping for the Transformation for `Simple Product Add Touchpoint`
![simpleprdct_navmagemulti9](/staticfiles/integration/media/simpleprdct_navmagemulti9.png)
**Note: If the Magento has a single website a `Blank Mapping` is required in the second `website_ids` attribute. 
In case of multiple website, no mapping is required for the second `website_ids` attribute**
Mapping for the Root Variables for the `Simple Product add Touchpoint`: 
![simpleprdct_navmagemulti10](/staticfiles/integration/media/simpleprdct_navmagemulti10.png)

## Action Filters

Add a node to the given pre-packaged order of the Action filter with two sub-nodes `Field` and `Criteria`.
View the image below to define the Action Filters.
![simpleprdct_navmagemulti11](/staticfiles/integration/media/simpleprdct_navmagemulti11.png)
![simpleprdct_navmagemulti12](/staticfiles/integration/media/simpleprdct_navmagemulti12.png)

## Executing the Workflow Integration

**Note: Before integrating with Magento2 and MS Dynamics NAV , make sure all the Master Data Touchpoints are synced.**

1.	Once the workflow is designed, `Update the Configuration` in agent for deploying the workflow in the agent.
2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.
3.	Once the Execution is finished, click `Resync Button` in the agent.
4.	The Resync Panel show the Success Result in the agent.

![simpleprdct_navmagemulti13](/staticfiles/integration/media/simpleprdct_navmagemulti13.png)

## Integration Data Survey

The user can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/) from the node level of the workflow.
This Snapshot View displays the successful execution of the workflow.

![simpleprdct_navmagemulti14](/staticfiles/integration/media/simpleprdct_navmagemulti14.png)

## Post Conditions

The user can view the product (Schneider Circuit) synced in Magento2 (for the 1st  website).  
![simpleprdct_navmagemulti 15](/staticfiles/integration/media/simpleprdct_navmagemulti15.png)
The user can view the product (Schneider Circuit) synced in the 2nd   website of Magento2.

![simpleprdct_navmagemulti16](/staticfiles/integration/media/simpleprdct_navmagemulti16.png)

The user can also go to NAV and check if the WebID has returned and the WebSyncFlag has been set to 'T' (True) from 'F' (False).  
![simpleprdct_navmagemulti17](/staticfiles/integration/media/simpleprdct_navmagemulti17.png)

**The sync flag update & WebId from magento is returned in syncback**

## Frequency of Use
The user can execute the Integration through workflow as and when required.

## Troubleshooting
NA