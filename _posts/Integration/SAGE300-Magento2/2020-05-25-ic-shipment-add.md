---
title: "Shipment Add from SAGE 300 to Magento2"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    sagemagentointegration:
        title: "Shipment Add"
        icon: fa fa-wpexplorer
        identifier: sage300magentoshipment
---

Executing the process is a vital part when integrating any applications. This section of the document will let the users understand how the integration for the adding **Shipments** can be executed using a workflow from SAGE 300 to Magento2. 

## Brief Description:

Before executing the sync process you need to create workflow for adding shipments from SAGE 300 - Magento 2. 

### Prerequisites:

a. You need to [Choose your Workflow](/workflow/steps-to-choose-your-workflow/) or you can [create/design a new workflow](/workflow/steps-to-create-your-first-workflow/) as per your need.

b. You need to successfully validate the adapter for [Magento 2](/connectors/magento2/) & [SAGE 300](/connectors/sage300/)  

c. The customer whose shipment shall be synced should be availble in both the application. [Click Here](/integration/customer-add/) for integrating customer add.

d. The Product shall be available in the both the application. [Click here](/integration/ic-product-add/) to integrate IC Product from SAGE 300 to Magento 2.

e. The order must be present in both the application for whose shipment is generated. [Click Here](/integration/sales-order-add/) to integrate Sales Order from Magento 2 to SAGE 300.

[Click Here](http://help.sage300.com/en-us/2017/web/Subsystems/OE/Content/Transactions/ShipmentsAndInvoices/ShippingOrdersAndItems.htm) to know more about the adding Shipments.

Here, in this case the Shipment generated for the SAGE Order ID is `318209`.

## Lookup Mapping: 

N/A

**Note:** After mapping changes is done, `Reset Generate` and `Reset Publish` the Touchpoint from the workflow panel. Refresh the Page and [Publish the workflow](/workflow/deploying-and-executing/#publishing-a-workflow). After Republishing, click on the Update Configuration button in the Agent.


## Executing the Integration using Workflow:

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent. [Click here](/workflow/deploying-and-executing/) to know more about the deploying process of a workflow.

2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.

3. You can also trigger or deploy the workflow from the cloud Portal by clicking on the run button. For more details [Click Here](/workflow/deploying-and-executing/#executing-the-workflow).

## Integration Data Survey:

You can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/)  from the node level of the workflow.

## Post Conditions:
You can view the data sync inMagento by navigating to `Order Shipments tab` available in the `Order Details Page` of the customer.

![shipadd11](\staticfiles\integration\Sage300-Magento\shipadd11.PNG)

## Frequency of Use:

The user can execute the Integration through workflow as and when required. 

## Limitations:
NA

Following the above procedures, you can successfully sync Shipments from SAGE 300 to Magento2.