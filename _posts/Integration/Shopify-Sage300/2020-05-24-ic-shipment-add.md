---
title: "Shipment Add from SAGE 300 to Shopify"
toc: true
tag: developers
category: "Integration/Sage-Shopify"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    shopifysageintegration:
        title: "Shipment Add from SAGE 300 to Shopify"
        icon: fa fa-wpexplorer
        identifier: shopifysage300shipmentadd
---
Configuring and Executing the workflow for integration requires multiples steps to perform. This section of the document will let the users understand how the integration for the adding **Shipments** can be executed using a workflow from SAGE 300 to Shopify. 

## Brief Description:

Before executing the sync process you need to create workflow for adding shipments from SAGE 300 - Shopify. The prerequisites for this integration is listed below:

a. You need to successfully validate the applications for [Shopify](/connectors/shopify/) & [SAGE 300](/connectors/sage300/)  

b. The customer whose shipment shall be synced should be availble in both the application. [Click Here]() for integrating customer add.

c. The Product shall be available in the both the application. [Click here]() to integrate IC Product from SAGE 300 to Shopify.

d. The order must be present in both the application for whose shipment is generated. [Click Here]() to integrate Sales Order from Shopify to SAGE 300.

### Prerequisites: 

- You need to [Choose your Workflow](/workflow/steps-to-choose-your-workflow/) or you can [create/design a new workflow](/workflow/steps-to-create-your-first-workflow/) as per your need.


### Steps generate Shipment for the order synced to SAGE 300 from Shopify.

[Click Here](http://help.sage300.com/en-us/2017/web/Subsystems/OE/Content/Transactions/ShipmentsAndInvoices/ShippingOrdersAndItems.htm) to know more about the adding Shipments.

Here, in this case the Shipment generated for the SAGE Order ID is `350465`.


## Lookup Mapping:

For posting newly added quantity to Shopify from SAGE 300, you need to add Lookup for `Inventory Location`. For this integration, mapping lookups for inventory location is mandatory.

![shipadd3](\staticfiles\integration\SAGE300-Shopify\invupdate3.PNG)

**_Note:_** _After mapping changes is done, Reset Generate and Reset Publish the Touchpoint from the workflow panel. Refresh the Page and [Publish the workflow](/workflow/deploying-and-executing/#publishing-a-workflow). After Republishing, click on the `Update Configuration` button followed by `Update Lookup Tables` in the Agent._

## Executing the Integration using Workflow:

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent. [Click here](/workflow/deploying-and-executing/) to know more about the deploying process of a workflow.

2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.

3.  You can also trigger or deploy the workflow from the cloud Portal by clicking on the run button. For more details [Click Here](/workflow/deploying-and-executing/#executing-the-workflow).

## Integration Data Survey:

You can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/)  from the node level of the workflow.


## Post Conditions:
You can view the data sync in Shopify by navigating to  the `Order Details Page` of the customer. The order tag gets the **Fulfilled** status on successful `shipment` of all the items.

**Note:** If the shipment is synced for partial items and partial quantities, the order status will be as `Partially Fulfilled` even if the sync status is successful.

## Frequency of Use:

The user can execute the Integration through workflow as and when required. 

## Limitations:

On executing the sync process using the workflow for adding shipment to shopify from sage 300, only 100 data would be called in a single instance.

Following the above procedures, you can successfully sync Shipments from SAGE 300 to SHopify.