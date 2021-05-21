---
title: "Simple Product Add Mage2 Multi to Nav"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    navmagentointegration:
        title: "Simple Product Add Mage2 Multi to Nav"
        icon: fa fa-wpexplorer
        identifier: simpleproductintegration
---

Executing the Process is a vital part when integrating any applications. 
This Document will let the users to understand how the integration process can be executed through workflow for adding
Simple Product from Magento2 (Multi-store) to Ms Dynamics NAV.	


## Brief Description

![simpleprdct_mage2tonavworkflow](/staticfiles/integration/media/simpleprdct_mage2tonavworkflow.png)

In this case, the Simple Products are created in Magento2 and are added to MS Dynamics NAV by syncing the workflow for Simple Products Add. 
The above workflow is designed to GET Simple Products from Magento2 and POST it to Ms Dynamics NAV.

Note:Simple Products can be created from Magento2 backend. [Click here](https://docs.magento.com/m2/ce/user_guide/catalog/product-create-simple.html) to know more about creating the Simple Products from the admin panel of Magento2.

Here the Simple Products is created for a customer whose order consists of two products.

![simpleprdct_add_mage2tonavscreen1](/staticfiles/integration/media/simpleprdct_add_mage2tonavscreen1.png)

## Lookup Mapping

The Lookup mapping for Currency shall be required in case the business logic deals with multiple currencies.

## Attribute Mapping/Transformation

The pre-packaged mappings will successfully sync data to Magento2 from MS Dynamics NAV. However for more informations related to mapping, 
see [Mapping & Transformation Techniques](/transformation/steps-to-cutomize-prebuilt-mapping/).

## Action Filters

The Action filters required to fetch the products are given in the images below:

![simpleprdct_add_mage2tonavscreen2](/staticfiles/integration/media/simpleprdct_add_mage2tonavscreen2.png)

![simpleprdct_add_mage2tonavscreen3](/staticfiles/integration/media/simpleprdct_add_mage2tonavscreen3.png)

## Executing the Workflow Integration

**Note: Before integrating with Magento2 and MS Dynamics NAV, make sure all the Master Data Touchpoints are synced.**

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent.
2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.
3.	Once the Execution is finished, click Resync Button in the agent.
4.	The Resync Panel show the Success Result in the agent

![simpleprdct_add_mage2tonavscreen4](/staticfiles/integration/media/simpleprdct_add_mage2tonavscreen4.png)

## Integration Data Survey

The user can survey the data by viewing the Processed Snapshot from the node level of the workflow.
This Snapshot View displays the successful execution of the workflow.

![simpleprdct_add_mage2tonavscreen5](/staticfiles/integration/media/simpleprdct_add_mage2tonavscreen5.png)

## Post Conditions

The user can view the Simple Product synced in magento2.

![simpleprdct_add_mage2tonavscreen6](/staticfiles/integration/media/simpleprdct_add_mage2tonavscreen6.png)

## Frequency of Use
The user can execute the Integration through workflow as and when required.

## Troubleshooting










