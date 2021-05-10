---
title: "Simple Product Update Nav-Mage2 MultiConnection"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    navmagentointegration:
        title: "Simple Product Update Nav-Mage2 MultiConnection"
        icon: fa fa-wpexplorer
        identifier: configproductupdate
---

Executing the process is a vital part when integrating any applications. This Document will let the users to understand 
how the integration process can be executed through workflow for Updating a `Simple Product` from 
`Ms Dynamics NAV to Magento2 Multi-store`.

## Brief Description

![wrkflw_simpleprdctupdate_navmagemulti](/staticfiles/integration/media/wrkflw_simpleprdctupdate_navmagemulti.png) 

In this integration scenario, multiple connections have been made for Updating Simple Products from Ms Dynamics NAV to Magento2 (along with multiple Magento websites from a single Magento admin). 

As a pre-requisite, the user needs to create and sync the Simple Products first. [Click here](/integration/simple-productadd/#brief-description), to know more about creating simple products in MS Dynamics NAV.
For updating Simple Products from Ms Dynamics NAV to Magento2 (Multistore), these are the changes that could be performed for updating a configurable product.

* Updates in Web Product Details CP Page: The user can update the WebAttributeSetId, the Web TaxClass Id,  WebDescription, WebShortDescription.
* Updates in Web ProductWebsites Page: The user can change/update the WebSiteId of the product.
* Updates in Web ProductAttribute Page: The user can modify/update the AttributeId and the AttributeOptionId
* Updates in Web ProductCategory Page: The user be able to modify/update the CategoryId of the product in this page.
* The changes in the AEC Application Item list will be modifies as per the changes in the Web Product Details CP Page.
* On completion of the process click on the OK button. The entire `ItemCard` for this Configurable product is given below.


![simpleprdctupdate_navmagemulti1](/staticfiles/integration/media/simpleprdctupdate_navmagemulti1.png) 

## Lookup Mapping 
The Lookup mapping for Currency shall be required in case the business logic deals with multiple currencies.


## Attribute Mapping/Transformation
The pre-packaged mappings will successfully sync data MS Dynamics NAV  to Magento2 (MultiStore). However, for more informations related to mapping, see [Mapping & Transformation Techniques](/transformation/steps-to-cutomize-prebuilt-mapping/).

## Action Filters

Add a node to the given pre-packaged order of the Action filter with two sub-nodes `Field` and `Criteria`.
View the image below to define the Action Filters.

![simpleprdctupdate_navmagemulti2](/staticfiles/integration/media/simpleprdctupdate_navmagemulti2.png) 

![simpleprdctupdate_navmagemulti3](/staticfiles/integration/media/simpleprdctupdate_navmagemulti3.png) 

## Executing the Workflow Integration

**Note: Before integrating with Magento2 and MS Dynamics NAV , make sure all the Master Data Touchpoints are synced.**

1. Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent.
2. Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.
3. Once the Execution is finished, click Resync Button in the agent.
4. The Resync Panel show the Success Result in the agent.

![simpleprdctupdate_navmagemulti4](/staticfiles/integration/media/simpleprdctupdate_navmagemulti4.png) 

## Integration Data Survey

The user can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/) from the node level of the workflow.
This Snapshot View displays the successful execution of the workflow.

![simpleprdctupdate_navmagemulti5](/staticfiles/integration/media/simpleprdctupdate_navmagemulti5.png) 

## Post-Condition

The user can view the product synced in Magento2 from Ms Dynamics NAV.

![simpleprdctupdate_navmagemulti6](/staticfiles/integration/media/simpleprdctupdate_navmagemulti6.png) 

The user can also go to NAV and check if the WebID has returned and the WebSyncFlag has been set to 'T' (True) from `F` (False).

![simpleprdctupdate_navmagemulti7](/staticfiles/integration/media/simpleprdctupdate_navmagemulti7.png) 

**NOTE: After making changes in the item card, the sync flag changes from `T` to `F`**

## Frequency of use

The user can execute the Integration through workflow as and when required.

## Troubleshooting

NA




