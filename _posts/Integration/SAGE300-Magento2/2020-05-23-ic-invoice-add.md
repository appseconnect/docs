---
title: "Invoice  Add from SAGE 300 to Magento2"
toc: true
tag: developers
category: "Integration"
menus: 
    sagemagentointegration:
        title: "Invoice  Add"
        icon: fa fa-wpexplorer
        identifier: sage300magentoinvoiceadd
---

Executing the process is a vital part when integrating any applications. This section of the document will let the users understand how the integration for the adding **Invoice** can be executed using a workflow from SAGE 300 to Magento2.

## Brief Description:

![invadd1](\staticfiles\integration\Sage300-Magento\invadd1.PNG)

Before executing the sync process you need to create workflow for adding Invoice from SAGE 300 - Magento 2. The Invoices are created for the Order synced in SAGE 300 from Magento 2. The invoices are generated in SAGE 300 will be synced to Magento 2 in the Customers account who placed the order.

The prerequisites for this integration is listed below:

a. You need to successfully validate the application credentials for [Magento 2](/connectors/magento2/) & [SAGE 300](/connectors/sage300/)  

b. The customer whose invoice shall be synced should be availble in both the application. [Click Here](/integration/customer-add/) for integrating customer add.

c. The Product shall be available in the both the application. [Click here](/integration/ic-product-add/) to integrate IC Product from SAGE 300 to Magento 2.

d. The order must be present in both the application for whose Invoice is generated. [Click Here](/integration/sales-order-add/) to integrate Sales Order from Magento 2 to SAGE 300.

### Steps generate Invoice for the order synced to SAGE 300 from Magento 2.

- Follow the steps for generating the [Shipment](/integration/ic-shipment-add/).

- Once you have completed the steps of creating Shipment, Click on the `Shipment Entry` tab.

![invadd2](\staticfiles\integration\Sage300-Magento\invadd2.PNG)

-  Provide the `Shipment Number` provided while creating the shipment. The Shipment Entry Opens. 

-  Enable the checkbox for `Create Invoice` and click on the POST button. Your Invoice gets generated automatically by SAGE 300. You'll be provided with an Invoice Number after document creation.

[Click Here](http://help.sage300.com/en-us/2017/web/Subsystems/OE/Content/Transactions/ShipmentsAndInvoices/InvoicingShipments.htm) to know more about the adding Invoice.


![invadd3](\staticfiles\integration\Sage300-Magento\invadd3.PNG)

## Lookup Mapping 

N/A

**Note: After mapping changes is done, Reset Generate and Reset Publish the Touchpoint from the workflow panel. Refresh the Page and [Publish the workflow.](/workflow/deploying-and-executing/#publishing-a-workflow) After Republishing, click on the Update Configuration button in the Agent.**

## Executing the Integration using Workflow:

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent. [Click here](/workflow/deploying-and-executing/) to know more about the deploying process of a workflow.

2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.

3. You can also trigger or deploy the workflow from the cloud Portal by clicking on the run button. For more details [Click Here](/workflow/deploying-and-executing/#executing-the-workflow).


## Integration Data Survey:

You can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/)  from the node level of the workflow.

![invadd7](\staticfiles\integration\Sage300-Magento\invadd7.PNG)

## Post Conditions:
You can view the data synced in Magento by navigating to `Order Invoices tab` available in the `Order Details Page` of the customer.

![invadd8](\staticfiles\integration\Sage300-Magento\invadd8.PNG)

## Frequency of Use:

The user can execute the Integration through workflow as and when required. 

## Limitations:
NA

Following the above procedures, you can successfully sync Invoices from SAGE 300 to Magento2.


