---
title: "I/C Inventory Update from SAGE 300 to Magento2"
toc: true
tag: developers
category: "Integration"
menus: 
    sagemagentointegration:
        title: "I/C Inventory Update from SAGE 300 to Magento2"
        icon: fa fa-wpexplorer
        identifier: sage300magentoinventoryupdate
---

Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how the integration process can be executed through workflow for adding Updating Inventory from SAGE 300 to Magento2. 

**Note: Before proceeding with this integration you need to integrate [Product Add](/integration/ic-product-add/) from SAGE 300 to MAGENTO 2**

## Brief Description:  
![invupdate1](\staticfiles\integration\Sage300-Magento\invupdate1.png)

Inventory update is used to integrate the quantity of products synced to magento 2 from SAGE 300. Updates made in the quantity need to be manages in the Ecommerce platform better management of the products in terms of quantity available. [Click here](/connectors/sage300/) to view the steps on how to Update Inveotry in SAGE 300. 

![invupdate2](\staticfiles\integration\Sage300-Magento\invupdate2.png)

## Lookup Mapping:

Not Required. However, every business processes are unique may require to map lookups for some cases. [Click Here](/transformation/using-lookups-for-value-exchange/) to know more about Lookup Mapping

## Attribute Mapping/Transformation:

Following the Provided Mapping, the user can sync the Updated inventory from SAGE 300 to Magento2. To know more, see [Mapping & Transformation Techniques.](/transformation/steps-to-cutomize-prebuilt-mapping/)

Mapping for the Complex Object collection `stockitem`.

![invupdate3](\staticfiles\integration\Sage300-Magento\invupdate3.png)

a. ItemId: Maps the id of the Product that needs to be updated.

b. ProductId: Maps the id of the Product that needs to be updated.

c. qty: Maps the field with the field of SAGE 300 that transforms the quantity of the product.

**_Note:_** _After mapping changes is done, Reset Generate and Reset Publish the Touchpoint from the workflow panel. Refresh the Page and [Publish the workflow](/workflow/deploying-and-executing/#publishing-a-workflow). After Republishing, click on the Update Configuration button in the Agent._

## Executing the Integration using Workflow:

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent. [Click here](/workflow/deploying-and-executing/) to know more about the deploying process of a workflow.

2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.

3.	Once the Execution is finished, click on the Resync Button (Highlighted Below) in the agent.

![invupdate4](\staticfiles\integration\Sage300-Magento\invupdate4.png)
 
4.	The Resync Panel shows the Success Result in the agent. The User can also trigger or deploy the workflow from the cloud Portal by clicking on the run button. For more details [Click Here](/workflow/deploying-and-executing/#executing-the-workflow).

![invupdate5](\staticfiles\integration\Sage300-Magento\invupdate5.png)
 
## Integration Data Survey:

You can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/)  from the node level of the workflow.

![invupdate6](\staticfiles\integration\Sage300-Magento\invupdate6.png)

## Post Conditions:

You can view the data sync in Magento 2 by navigating to `Catalog > Products.`

![invupdate7](\staticfiles\integration\Sage300-Magento\invupdate7.png)

## Frequency of Use:
The user can execute the Integration through workflow as and when required. 

Following the above procedures, you can successfully sync the updated inventory from SAGE 300 to Magento2.

