---
title: "Add Invoice NAV-Mage2 Multiconnection"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    navmagentointegration:
        title: "Add Invoice NAV-Mage2 Multiconnection"
        icon: fa fa-wpexplorer
        identifier: addinvoicenav-mage2
---

Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how the integration process can be executed through workflow for `Adding 
Invoice` for the orders from Ms Dynamics NAV to Magento2 (Multi-store).

## Brief Description

![nav-magemulti-invoicewrkflw](/staticfiles/integration/media/nav-magemulti-invoicewrkflw.png)  
In this case, the invoice of the orders placed are `added to Magento 2` by syncing the workflow for Invoice Add. 
**Sales order must get synced from Magento2 to NAV before executing the workflow.**

The above workflow is designed to 'GET invoice from MS Dynamics NAV and POST it to Magento 2`.

**Note:** The steps for adding Invoice in Ms Dynamics NAV are same as that of adding Shipments. [Click here](/integration/shipment/)to know the process of adding Invoice and Shipments to Ms Dynamics NAV.
![nav-magemulti-invoice1](/staticfiles/integration/media/nav-magemulti-invoice1.png)

## LookUp Mapping

No Lookup Mapping is required for adding invoice to Magento2.

## Attribute Mapping/Transformation

Following the Provided Mapping, the user can sync Shipments from Ms Dynamics NAV to Magento2. 
To know more, see [Mapping & Transformation Techniques](/transformation/steps-to-cutomize-prebuilt-mapping/).

**Mapping for the Transformation for 'Invoice add Touchpoint'** 
![nav-magemulti-invoice2](/staticfiles/integration/media/nav-magemulti-invoice2.png)
## Action Filters

Add a node to the given pre-packaged order of the Action filter with two sub-nodes 'Field' and 'Criteria'.
View the image below to define the Action Filters.
![nav-magemulti-invoice3](/staticfiles/integration/media/nav-magemulti-invoice3.png)
![nav-magemulti-invoice4](/staticfiles/integration/media/nav-magemulti-invoice4.png)
## Executing the Workflow Integration
**Note: Before integrating with Magento2 and MS Dynamics NAV, make sure all the Master Data Touchpoints are synced.**

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent.
2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.
3.	Once the Execution is finished, click Resync Button in the agent.
4.	The Resync Panel show the Success Result in the agent.

![nav-magemulti-invoice5](/staticfiles/integration/media/nav-magemulti-invoice5.png)
## Integration Data Survey

The user can survey the data by viewing the `Processed Snapshot` from the node level of the workflow.
This Snapshot view displays the successful execution of the workflow.
![nav-magemulti-invoice6](/staticfiles/integration/media/nav-magemulti-invoice6.png)

## Post Conditions

The user can view the invoice synced in magento2.
![nav-magemulti-invoice6](/staticfiles/integration/media/nav-magemulti-invoice6.png)

## Frequency of use
The user can execute the Integration through workflow as and when required.

## Troubleshooting

N/A





