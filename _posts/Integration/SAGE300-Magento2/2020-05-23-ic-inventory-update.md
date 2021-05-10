---
title: "I/C Inventory Update from SAGE 300 to Magento2"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    sagemagentointegration:
        title: "I/C Inventory Update"
        icon: fa fa-wpexplorer
        identifier: sage300magentoinventoryupdate
---

Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how the integration process can be executed through workflow for adding Updating Inventory from SAGE 300 to Magento2. 

**Note: Before proceeding with this integration you need to integrate [Product Add](/integration/ic-product-add/) from SAGE 300 to MAGENTO 2**

## Brief Description:

Inventory update is used to integrate the quantity of products synced to magento 2 from SAGE 300. Updates made in the quantity need to be manages in the Ecommerce platform better management of the products in terms of quantity available. [Click here](/connectors/sage300/) to view the steps on how to Update Inventory in SAGE 300. 


- You need to [Choose your Workflow](/workflow/steps-to-choose-your-workflow/) or you can [create/design a new workflow](/workflow/steps-to-create-your-first-workflow/) as per your need.
- You need to have the [products added](/integration/ic-product-add/) in Magento 2 from SAGE 300 before updating Inventory.

## Lookup Mapping:

Not Required. However, every business processes are unique may require to map lookups for some cases. [Click Here](/transformation/using-lookups-for-value-exchange/) to know more about Lookup Mapping.

## Executing the Integration using Workflow:

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent. [Click here](/workflow/deploying-and-executing/) to know more about the deploying process of a workflow.

2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.

3. The Resync Panel shows the Success Result in the agent. The User can also trigger or deploy the workflow from the cloud Portal by clicking on the run button. For more details [Click Here](/workflow/deploying-and-executing/#executing-the-workflow).
 
## Integration Data Survey:

You can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/)  from the node level of the workflow.

## Post Conditions:

You can view the data sync in Magento 2 by navigating to `Catalog > Products.`

## Frequency of Use:
The user can execute the Integration through workflow as and when required. 

## Limitations:
NA

Following the above procedures, you can successfully sync the updated inventory from SAGE 300 to Magento2.

