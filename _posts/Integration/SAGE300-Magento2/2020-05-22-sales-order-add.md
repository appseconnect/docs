---
title: "Sales Order Add from Magento 2 to SAGE 300"
toc: true
tag: developers
category: "Integration"
menus: 
    sagemagentointegration:
        title: "Sales Order Add"
        icon: fa fa-wpexplorer
        identifier: sage300magentosalesadd
---

Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how the integration process can be executed through workflow for adding Sales Orders from Magento2 to SAGE 300.

## Brief Description:

![orderadd1](\staticfiles\integration\Sage300-Magento\orderadd1.png)

A sales cycle is incomplete without placing orders for any products. Sales Orders generated in Magento2 for a customer against a product needs to be transformed to SAGE 300 for keeping well managed records of the sales cycle. [Click here](https://docs.magento.com/m2/ce/user_guide/customers/customer-account-create-order.html) to know more about generating Sales Orders in Magento2.

Here, an Order is placed for the customer Mr. Brandon P Summers, against the product iPhone 11 Max Pro.

![orderadd2](\staticfiles\integration\Sage300-Magento\orderadd2.png)

## Lookup Mapping:

For integrating, Sales Orders from Magento 2 to Sage 300, you need to add lookups for Frieght & Tax Code.

![orderadd3](\staticfiles\integration\Sage300-Magento\orderadd3.png)

After placing the lookups for the connections, Publish the Connection, Update Lookup Tables in Agent followed by Update Configuration.

## Attribute Mapping/Transformation:

Following the Provided Mapping,  user can successfully sync the Order Add Workflow from Magento2 to SAGE 300. To know more, see [Mapping & Transformation Techniques](/transformation/steps-to-cutomize-prebuilt-mapping/).

Mapping for the ComplexObjectCollection `OEOrders`:

![orderadd4](\staticfiles\integration\Sage300-Magento\orderadd4.png)

a. Order Number: Maps the field of the Order Id of Magento2.

b. Customer Number: Maps the customer ID of the placed order.

c. Bill to Name: Maps the name of the customer against whom the order is placed.

d. Bill to address: Maps the address of the customer whose order is placed.

e. Bill to City: Maps the field City with the field of Magento 2.

f. Bill to country: Maps the field Country with field of Magento 2.

g. Tax Group: Maps the Tax group allocated to the user in lookup tables.

f. Upload URL: Maps the target location of the sync process.

![orderadd5](\staticfiles\integration\Sage300-Magento\orderadd5.png)

**Note: After mapping changes is done, Reset Generate and Reset Publish the Touchpoint from the workflow panel. Refresh the Page and [Publish the workflow.](/workflow/deploying-and-executing/#publishing-a-workflow) After Republishing, click on the Update Configuration button in the Agent.**

## Executing the Integration using Workflow:

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent. [Click here](/workflow/deploying-and-executing/) to know more about the deploying process of a workflow.

2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.

3.	Once the Execution is finished, click on the Resync Button (Highlighted Below) in the agent.

![orderadd6](\staticfiles\integration\Sage300-Magento\orderadd6.png)

4. The Resync Panel shows the Success Result in the agent. The User can also trigger or deploy the workflow from the cloud Portal by clicking on the run button. For more details [Click Here](/workflow/deploying-and-executing/#executing-the-workflow).

![orderadd7](\staticfiles\integration\Sage300-Magento\orderadd7.png)

## Integration Data Survey:

You can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/)  from the node level of the workflow.

![orderadd8](\staticfiles\integration\Sage300-Magento\orderadd8.png)

Here, you can view the Order `28` got successfully synced to SAGE 300.

## Post Conditions:
You can view the data sync in SAGE 300 by navigating to `Order Entry > O/E transactions > Order Entry `. Search the Order post with the order number, and you ccan view the order details.

![orderadd9](\staticfiles\integration\Sage300-Magento\orderadd9.png)

Here, you can view the order for the customer Mr Brandon P Summers in SAGE 300, with the complete order details.

## Frequency of Use:

The user can execute the Integration through workflow as and when required. 

Following the above procedures, you can successfully sync Sales Orders from Magento2 to SAGE 300.
