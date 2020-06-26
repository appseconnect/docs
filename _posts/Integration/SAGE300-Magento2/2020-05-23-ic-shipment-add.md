---
title: "Shipment Add from SAGE 300 to Magento2"
toc: true
tag: developers
category: "Integration"
menus: 
    sagemagentointegration:
        title: "Shipment Add"
        icon: fa fa-wpexplorer
        identifier: sage300magentoshipment
---

Executing the process is a vital part when integrating any applications. This section of the document will let the users understand how the integration for the adding **Shipments** can be executed using a workflow from SAGE 300 to Magento2. 

## Brief Description:

![shipadd1](\staticfiles\integration\Sage300-Magento\shipadd1.PNG)

Before executing the sync process you need to create workflow for adding shipments from SAGE 300 - Magento 2. The prerequisites for this integration is listed below:

a. You need to successfully validate the adapter for [Magento 2](/connectors/magento2/) & [SAGE 300](/connectors/sage300/)  

b. The customer whose shipment shall be synced should be availble in both the application. [Click Here](/integration/customer-add/) for integrating customer add.

c. The Product shall be available in the both the application. [Click here](/integration/ic-product-add/) to integrate IC Product from SAGE 300 to Magento 2.

d. The order must be present in both the application for whose shipment is generated. [Click Here](/integration/sales-order-add/) to integrate Sales Order from Magento 2 to SAGE 300.

### Steps generate Shipment for the order synced to SAGE 300 from Magento 2.

1. Navigate to `Order Entry > OE Transactions > Order Entry`. Order Entry Window Opens.

![shipadd2](\staticfiles\integration\Sage300-Magento\shipadd2.PNG)

2. Open the Order with the Order ID generated. The Order Entry opens.

![shipadd3](\staticfiles\integration\Sage300-Magento\shipadd3.PNG)

3. Click on the Totals Tab and enable the checkbox for `Create Invoice`.

![Shipadd4](\staticfiles\integration\Sage300-Magento\shipadd4.PNG)

4. Provide a Shipment number and navigate back to the Order Tab. 

5. In the Order Line, make sure `Quantity Shipped` value equals the `Quantity Backorder` value. By default, the value for `Quantity Shipped`remains `0`. After adjusting, the value for `Quantity Backorder` becomes `0`.

![shipadd5](\staticfiles\integration\Sage300-Magento\shipadd5.PNG)

6. Expand the Shipment Details and provide the `Shipment Tracking Number`.

![shipadd6](\staticfiles\integration\Sage300-Magento\shipadd6.PNG)

**_Note: You must provide the shipment tracking number for successful integration._**

7. Click on the `POST` Button. 

[Click Here](http://help.sage300.com/en-us/2017/web/Subsystems/OE/Content/Transactions/ShipmentsAndInvoices/ShippingOrdersAndItems.htm) to know more about the adding Shipments.

Here, in this case the Shipment generated for the SAGE Order ID is `318209`.

## Lookup Mapping: 

N/A

## Attribute Mapping/Transformation:

Following the Provided Mapping, user can successfully sync the Workflow for adding Shipment from Magento2 to SAGE 300. To know more, see [Mapping & Transformation Techniques](/transformation/steps-to-cutomize-prebuilt-mapping/).

Mapping for the complex object collection `entity`.

![shipadd7](\staticfiles\integration\Sage300-Magento\shipadd7.PNG)

a. order_item_id: Maps the id of the order against the generated shipment.

b. quantity: maps the quantity shipped.

c. UploadURL: Maps the target location of Magento2.

d. track_number: maps the shipment tracking number provided while generating the shipment in SAGE 300

e. SourceKey: maps the shipment document id provided in SAGE 300.

**Note: After mapping changes is done, Reset Generate and Reset Publish the Touchpoint from the workflow panel. Refresh the Page and [Publish the workflow.](/workflow/deploying-and-executing/#publishing-a-workflow) After Republishing, click on the Update Configuration button in the Agent.**

## Executing the Integration using Workflow:

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent. [Click here](/workflow/deploying-and-executing/) to know more about the deploying process of a workflow.

2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.

3.	Once the Execution is finished, click on the Resync Button (Highlighted Below) in the agent.

![shipadd8](\staticfiles\integration\Sage300-Magento\shipadd8.PNG)

4. The Resync Panel shows the Success Result in the agent. The User can also trigger or deploy the workflow from the cloud Portal by clicking on the run button. For more details [Click Here](/workflow/deploying-and-executing/#executing-the-workflow).

![shipadd9](\staticfiles\integration\Sage300-Magento\shipadd9.PNG)

## Integration Data Survey:

You can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/)  from the node level of the workflow.

![shipadd10](\staticfiles\integration\Sage300-Magento\shipadd10.PNG)

## Post Conditions:
You can view the data sync inMagento by navigating to `Order Shipments tab` available in the `Order Details Page` of the customer.

![shipadd11](\staticfiles\integration\Sage300-Magento\shipadd11.PNG)

## Frequency of Use:

The user can execute the Integration through workflow as and when required. 

Following the above procedures, you can successfully sync Shipments from SAGE 300 to Magento2.