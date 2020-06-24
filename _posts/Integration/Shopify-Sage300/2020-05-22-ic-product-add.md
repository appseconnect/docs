---
title: "I/C Product Add"
toc: true
tag: developers
category: "Integration"
menus: 
    shopifysageintegration
        title:  "I/C Product Add"
        icon: fa fa-wpexplorer
        identifier: sage300magentoproductadd
---
Executing the Process is a vital part when integrating any applications. This section of the document will let the users understand how the integration process can be executed through workflow for adding Products/items from SAGE  300 to Shopify.

## Brief Description:

![productadd1](\staticfiles\integration\SAGE300-Shopify\productadd1.PNG)

In this case, the Workflow for Adding Products/Items, is used for adding simple product from SAGE 300 to Shopify. Here, a workflow is created where all the Simple Products are fetched form SAGE 300 and are posted to Shopify.

As a prerequisite, you need to have the products created in SAGE 300. [Click](/connectors/adding-product-in-sage/) to know about the steps to create products in SAGE 300.

![productadd2](\staticfiles\integration\SAGE300-Shopify\productadd2.PNG)

Here, we have created a product **Seinheiser Double Bass Headset** with the Item ID `A2ST12`

## Lookup Mapping:

Not Required but every business processes are unique may require lookup mapping. In such cases, [click](/transformation/using-lookups-for-value-exchange/) to know more about Lookup Mapping.

**Note: After mapping changes is done, Reset Generate and Reset Publish the Touchpoint from the workflow panel. Refresh the Page and [Publish the workflow.](/workflow/deploying-and-executing/#publishing-a-workflow) After Republishing, click on the Update Configuration button in the Agent.**

## Executing the Integration using Workflow:

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent. [Click here](/workflow/deploying-and-executing/) to know more about the deploying process of a workflow.

2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.

3.	Once the Execution is finished, click on the Resync Button (Highlighted Below) in the agent.

![productadd3](\staticfiles\integration\SAGE300-Shopify\productadd3.PNG)

4. The Resync Panel shows the Success Result in the agent. The User can also trigger or deploy the workflow from the cloud Portal by clicking on the run button. For more details [Click Here](/workflow/deploying-and-executing/#executing-the-workflow).

![productadd4](\staticfiles\integration\SAGE300-Shopify\productadd4.PNG)

## Integration Data Survey:

You can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/)  from the node level of the workflow.

![productadd5](\staticfiles\integration\SAGE300-Shopify\productadd5.PNG)

Here, you can view the product `A2ST12` got successfully synced to Shopify.

## Post Conditions:
You can view the data sync in Shopify by navigating to `Products > All Products` page.

![productadd6](\staticfiles\integration\SAGE300-Shopify\productadd6.PNG)

## Frequency of Use:

The user can execute the Integration through workflow as and when required. 