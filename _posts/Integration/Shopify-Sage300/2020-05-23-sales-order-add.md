---
title: "Sales Order Add from Shopify to SAGE 300"
toc: true
tag: developers
category: "Integration/Sage-Shopify"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
   shopifysageintegration:
        title: "Sales Order Add"
        icon: fa fa-wpexplorer
        identifier: shopifysageorderadd
---
Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how the integration process can be executed through workflow for adding Sales Orders from Shopify to SAGE 300.

## Brief Description:

A sales cycle is incomplete without placing orders for any products. Sales Orders generated in Shopify for a customer against a product needs to be transformed to SAGE 300 for keeping well managed records of the sales cycle. [Click here](https://help.shopify.com/en/manual/orders/create-orders) to know more about generating Sales Orders in Shopify.

Here, an Order is placed for the customer Lonnie K Croker, against the product Seinhieser Double Bass Headset.

### Prerequisites: 

- You need to [Choose your Workflow](/workflow/steps-to-choose-your-workflow/) or you can [create/design a new workflow](/workflow/steps-to-create-your-first-workflow/) as per your need.

## Lookup Mapping:

For integrating, Sales Orders from Shopify to Sage 300, you need to add lookups for Frieght & Tax Code.

![orderadd3](\staticfiles\integration\SAGE300-Shopify\orderadd3.PNG)

**Note: After mapping changes is done, Reset Generate and Reset Publish the Touchpoint from the workflow panel. Refresh the Page and [Publish the workflow.](/workflow/deploying-and-executing/#publishing-a-workflow) After Republishing, click on the Update Configuration button followed by Update Lookup Tables in the On-Premise Agent.**

## Executing the Integration using Workflow:

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent. [Click here](/workflow/deploying-and-executing/) to know more about the deploying process of a workflow.

2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.

3.  You can also trigger or deploy the workflow from the cloud Portal by clicking on the run button. For more details [Click Here](/workflow/deploying-and-executing/#executing-the-workflow).

## Integration Data Survey:

You can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/)  from the node level of the workflow.

## Post Conditions:
You can view the data sync in SAGE 300 by navigating to `Order Entry > O/E transactions > Order Entry`. Search the Order post with the order number, and you can view the order details.

## Frequency of Use:

The user can execute the Integration through workflow as and when required. 

## Limitations:
NA

Following the above procedures, you can successfully sync customers from Shopify to SAGE 300.