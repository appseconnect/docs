---
title: "I/C Inventory Update from SAGE 300 to Shopify"
toc: true
tag: developers
category: "Integration/Sage-Shopify"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    shopifysageintegration:
        title: "I/C Inventory Update from SAGE 300 to Shopify"
        icon: fa fa-wpexplorer
        identifier: shopifysage300inventory
---
Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how the integration process can be executed through workflow for adding Updating Inventory from SAGE 300 to Shopify. 

**Note: Before proceeding with this integration you need to integrate I/C Product Add from SAGE 300 to Shopify**

## Brief Description:

Inventory update is used to integrate the quantity of products synced to Shopify from SAGE 300. Updates made in the quantity need to be managed in the Ecommerce platform better management of the products in terms of quantity available. [Click here](/connectors/sage300/) to view the steps on how to Update Inventory in SAGE 300. 

### Prerequisites: 

- You need to [Choose your Workflow](/workflow/steps-to-choose-your-workflow/) or you can [create/design a new workflow](/workflow/steps-to-create-your-first-workflow/) as per your need.
- You need to have the products integrated in Shopify from SAGE 300 before updating Inventory.

## Lookup Mapping:

For posting newly added quantity to Shopify from SAGE 300, you need to add Lookup for `Inventory Location`. For this integration, mapping lookups for inventory location is mandatory.

![Invupdate3](\staticfiles\integration\SAGE300-Shopify\invupdate3.PNG)

**_Note:_** _After mapping changes is done, Reset Generate and Reset Publish the Touchpoint from the workflow panel. Refresh the Page and [Publish the workflow](/workflow/deploying-and-executing/#publishing-a-workflow). After Republishing, click on the `Update Configuration` button followed by `Update Lookup Tables` in the Agent._

## Executing the Integration using Workflow:

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent. [Click here](/workflow/deploying-and-executing/) to know more about the deploying process of a workflow.

2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.

3.	You can also trigger or deploy the workflow from the cloud Portal by clicking on the run button. For more details [Click Here](/workflow/deploying-and-executing/#executing-the-workflow).

## Integration Data Survey:

You can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/)  from the node level of the workflow.

## Post Conditions:

You can view the quantity synced in Shopify by navigating to `Products > All Products` page.

## Limitations:
NA

## Frequency of Use:
The user can execute the Integration through workflow as and when required. 

Following the above procedures, you can successfully sync updated inventory from SAGE 300 to Shopify
