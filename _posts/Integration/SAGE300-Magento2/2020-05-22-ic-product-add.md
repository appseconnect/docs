---
title: "I/C Product Add from SAGE300 to Magento2"
toc: true
tag: developers
category: "Integration"
menus: 
    sagemagentointegration:
        title:  "I/C Product Add"
        icon: fa fa-wpexplorer
        identifier: sage300magentoproductadd
---
Executing the Process is a vital part when integrating any applications. This section of the document will let the users understand how the integration process can be executed through workflow for adding Products/items from SAGE  300 to Magento2.

## Brief Description

![productadd1](\staticfiles\integration\Sage300-Magento\productadd1.png)

In this case, the Workflow for Adding Products/Items, is used for adding simple product from SAGE 300 to Magento2. Here, a workflow is created where all the Simple Products are fetched form SAGE 300 and are posted to Magento2.

As a prerequisite, you need to have the products created in SAGE 300. [Click here](/connectors/adding-product-in-sage/) to know about the steps to create products in SAGE 300.

![productadd2](\staticfiles\integration\Sage300-Magento\productadd2.png)

Here, we have created a product iPhone 11 Max Pro with the Item ID `01-ST1-B.`

## Lookup Mapping:

Not Required but every business processes are unique may require lookup mapping. In such cases, [click here](/transformation/using-lookups-for-value-exchange/) to know more about Lookup Mapping.

## Attribute Mapping/Transformation:

The mapping provided below will enable the user to sync the IC Products from SAGE 300 to Magento 2. To know more, see [Mapping & Transformation Techniques](/transformation/steps-to-cutomize-prebuilt-mapping/)

Mapping for the Complex Object Collection **`Product`** for Customer Add Touchpoint:

![productadd3](\staticfiles\integration\Sage300-Magento\productadd3.png)

1. sku: Maps the field of Item in SAGE 300
2. name: Maps the Description of the Item with SAGE 300
3. price: Maps the price of the item with SAGE 300
4. attribute_set_id: Maps the id of attribute set as an optional field for creating the item.
5. type_id: Maps the Item type
6. UploadURL: Maps the target location of the sync process
7. weight: Maps the weight of the item.

**Note: After mapping changes is done, Reset Generate and Reset Publish the Touchpoint from the workflow panel. Refresh the Page and [Publish the workflow.](/workflow/deploying-and-executing/#publishing-a-workflow) After Republishing, click on the Update Configuration button in the Agent.**

## Executing the Integration using Workflow:

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent. [Click here](/workflow/deploying-and-executing/) to know more about the deploying process of a workflow.

2.	Navigate to the Workflow Panel in the agent and click on the **Start Sync Button** for executing the Process.

3.	Once the Execution is finished, click on the **Resync Button** (Highlighted Below) in the agent.

![productadd4](\staticfiles\integration\Sage300-Magento\productadd4.png)

4. The Resync Panel shows the Success Result in the agent. The User can also trigger or deploy the workflow from the cloud Portal by clicking on the run button. For more details [Click Here](/workflow/deploying-and-executing/#executing-the-workflow).

![productadd5](\staticfiles\integration\Sage300-Magento\productadd5.png)

## Integration Data Survey:

You can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/)  from the node level of the workflow.

![productadd6](\staticfiles\integration\Sage300-Magento\productadd6.png)

Here, you can view the product `01-ST1-B` got successfully synced to Magento 2.

## Post Conditions:
You can view the data sync in Magento 2 by navigating to `Catalog > Products.`

![productadd7](\staticfiles\integration\Sage300-Magento\productadd7.png)

## Frequency of Use:

The user can execute the Integration through workflow as and when required. 

Following the above procedures, you can successfully sync Products from SAGE 300 to Magento2.


