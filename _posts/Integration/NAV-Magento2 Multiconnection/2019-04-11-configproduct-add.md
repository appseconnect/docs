---
title: "Configurable Product Add Nav-Mage2 Multiconnection"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    navmagentointegration:
        title: "Configurable Product Add Nav-Mage2 Multiconnection"
        icon: fa fa-wpexplorer
        identifier: configproductadd
---

Executing the Process is a vital part when integrating any applications. This Document will let the users to 
understand how the integration process can be executed through workflow for adding Configurable Product from 
Ms Dynamics NAV to Magento2 (Multi-store).

## Brief Description

![confgprdctadd_navtomage2multi-workflow](/staticfiles/integration/media/confgprdctadd_navtomage2multi-workflow.png)  
In this integration scenario, multiple connections have been made for transformation of Configurable Products from Ms Dynamics NAV to Magento2 (along with multiple Magento websites from a single Magento admin). 

As a pre-requisite, the user needs to create and sync the Simple Products first which you want to add as child items in your new configurable product. 
[Click here](/integration/simple-productadd/), to know the process of creating simple products in MS Dynamics NAV. 

* Login to the Ms Dynamics NAV Client and create a new item from the Items Page. 
* Provide the details of the item say the Item No., Item description and the Unit of Measure.
* Input the details for multiple connections that can be selected from the drop down of the **Web Product Details CP page** 
  and select the `ConnectionName, ApplicationName, WebAttributeSetId, WebTaxClassId` and enable the checkbox for `WebItemFlag`. 
  Also, select the `WebProductType` as Configurable from the dropdown.
* Navigate to the **Web ProductWebsites Page** and select the `ConnectionName & the WebsiteID` from the Drop-down.
* In the **Web ProductAttribute Page** select the `ConnectionName, AttributeID  from the drop-down for the ConnectionName and the rest will be autopopulated.  
![confgprdctadd_navtomage2multi1](/staticfiles/integration/media/confgprdctadd_navtomage2multi1.png)  

**Note: The `AttributeId` can be opted from the drop-down only when the `WebAttributeSetId` is selected from the Web Product Details CP page. 
        The `AttributeOptionId` can be opted when the `AttributeId` is selected.** 
        `AttributeOptionId` needs to be kept blank. `WebAttributeSetId` and `AttributeId` needs to be same as that the 
        child items (which will be added in the section WebProductChildDetails of the Item card) of this new configurable 
        product which are already been synced as simple products.
* In the **WebProductChildDetails** page select the `ChildItemNo and the ConnectionName` from the drop-down options.  
**Note** : The `AttributeId` can be opted from the dropdown only when the `WebAttributeSetId` is selected from the Web Product Details CP page. 
           The `AttributeOptionId` needs to be kept blank. `WebAttributeSetId` and `AttributeId` needs to be same as that the child items 
           (which will be added in the section WebProductChildDetails of the Item card) of this new configurable product which is already been 
           synced as simple products.
* Navigate to the **WebProductCategorypage** and select the `CategoryId, CategoryName and the connection name` from the drop-down.
* In the **AEC Application Item List** the details will be auto-populated as per the input provided in the Web Product Details CP page.
* On completion of the process, click on the OK button. The entire `ItemCard` for this Configurable product is given below.
![confgprdctadd_navtomage2multi3](/staticfiles/integration/media/confgprdctadd_navtomage2multi3.png)

**Note: The same product can be added to `multiple connection` by creating a new line in Web Product Details CP Page and choosing the 
desired connection name. Further repeat the same steps as discussed above for the newly chosen connection. Also there is no need to create duplicate products 
in NAV to be synced in multiple magento that is we can sync the same item in NAV  to multiple Magento urls.**

## LookUp Mapping

The Lookup mapping for Currency shall be required in case the business logic deals with multiple currencies. 

## Attribute Mapping/Transformation

Following the Provided Mapping, the user can sync the Configurable Product Add from Ms Dynamics NAV to Magento2. 
To know more see [Transformation Techniques](/transformation/steps-to-cutomize-prebuilt-mapping/)

Mapping for the Transformation of `Configurable Products add Touchpoint`
![confgprdctadd_navtomage2multi9](/staticfiles/integration/media/confgprdctadd_navtomage2multi9.png)

**Note: If the Magento has a single website a `Blank Mapping` is required in the second `website_ids` attribute. 
In case of multiple website, no mapping is required for the second `website_ids` attribute**

Mapping for the Root Variables for the `Configurable Product add Touchpoint`
![confgprdctadd_navtomage2multi10](/staticfiles/integration/media/confgprdctadd_navtomage2multi10.png)

## Action Filter

Add a node to the given pre-packaged order of the Action filter with two sub-nodes `Field and Criteria`.
View the image below to define the Action Filters

![confgprdctadd_navtomage2multi11](/staticfiles/integration/media/confgprdctadd_navtomage2multi11.png)
![confgprdctadd_navtomage2multi12](/staticfiles/integration/media/confgprdctadd_navtomage2multi12.png)

## Executing the Workflow Integration

**Note: Before integrating with Magento2 and MS Dynamics NAV sync all the Master Data Touchpoints**

1. Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent.
2. Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.
3. Once the Execution is finished, click Resync Button in the agent.
4. The Resync Panel show the Success Result in the agent.
![confgprdctadd_navtomage2multi13(2)](/staticfiles/integration/media/confgprdctadd_navtomage2multi13(2).png)

## Integration Data Survey

The user can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/) from the node level of the workflow.
This Snapshot View displays the successful execution of the workflow.

![confgprdctadd_navtomage2multi13](/staticfiles/integration/media/confgprdctadd_navtomage2multi13.png)

## Post Condition

* The user can view the product synced in Magento2.
![confgprdctadd_navtomage2multi13](/staticfiles/integration/media/confgprdctadd_navtomage2multi14.png)

* The sync flag update & WebId from magento is returned in sync backThe user can also go to NAV and check if the WebID has returned and the WebSyncFlag has 
been set to 'T' (True) from 'F' (False).
![confgprdctadd_navtomage2multi13](/staticfiles/integration/media/confgprdctadd_navtomage2multi15.png)

## Frequency of use

The user can execute the Integration through workflow as and when required.

## Troubleshooting

NA
