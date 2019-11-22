---
title: "Invoice Add"
toc: true
tag: developers
category: "Integration"
menus: 
    sapbmagentointegration:
        icon: fa fa-wpexplorer            
        title: "Invoice Add"
        identifier: sapbmage2integration
---

Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how the integration process can be executed through workflow for 
adding Invoice from `Magento2` to `SAP Business One`.

## Brief Description

![workflow-invoiceadd](/staticfiles/integration/media/workflow-invoiceadd.png)

After adding the Sales Order, the Invoice of the Order is now ready to sync in the SAP Business One. Therefore, a workflow is created to sync the Invoice of the order along with the dependency touchpoint Payment with Cash as post-tax in SAP Business One.

To know more, See touchpoint dependencies.  
See, to know about the steps to generate an Invoice for an Order.
**Note: Please enable the checkbox for Creating the Shipment**


## Lookup Mapping

[Click here]() (will navigate to the Order Add Document) to know about the Lookup Mapping for Invoice Add

## Attribute Mapping/Transformation

Following the Provided Mapping, the user can sync the Order Add Workflow from Magento2 to SAP Business One. 
To know more, see  [Mapping & Transformation Techniques](/transformation/overview-usecase/).

1.	**Mapping for the `ComplexObject Document_Lines`**

![invoiceadd_1](/staticfiles/integration/media/invoiceadd_1.png)

**Mapping for the variable $curItmId**
1.	$curItmId – Here, the mapping is done with the {{order_item_id}} of Magento2.

## Executing the Workflow Integration

**Note: Before integrating with Magento2 and SAP Business One, make sure all the Master Data Touchpoints are synced.**

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent.
2.	Click on the run button in the workflow panel in the cloud portal.
![invoiceadd_2](/staticfiles/integration/media/invoiceadd_2.png)
3.	Once the Execution is finished, click `Resync Button` in the agent.   
![invoiceadd_3](/staticfiles/integration/media/invoiceadd_3.png)
4.  The Resync Panel show the Success Result in the agent. 

5.  The User can also trigger or [deploy the workflow](/workflow/deploying-and-executing/) from the cloud Portal by clicking on the run button.

## Integration Data Survey
The user can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/) from the node level of the workflow.
This Snapshot View displays the successful execution of the workflow. 
The Invoice with the source id 40 is successfully synced to SAP Business One with its destination ID as 04.
![invoiceadd_4](/staticfiles/integration/media/invoiceadd_4.png)


## Post-Conditions

The user can view the invoice synced in the SAP Business One by navigating to Sales -> A/R -> A/R Reserve Invoice.
![invoiceadd_5](/staticfiles/integration/media/invoiceadd_5.png)
## Frequency of Use
The user can execute the Integration through workflow as and when required. 

## Troubleshooting

1.	Error Details: "Row without tax was found"
![invoiceadd_6](/staticfiles/integration/media/invoiceadd_6.png)

For troubleshooting this error, the mapping for the Variable $curItmId needs to be modified as given in the 
Attribute Mapping/Transformation part of this document.

2.	Error: Details: "Base Doc Missmatch"
![invoiceadd_7](/staticfiles/integration/media/invoiceadd_7.png)

This Error usually occurs when dependent document is not found in the destination Application. For Example: If the Order 
Add is not synced, and for the order the invoice is synced, this error will occur as SAP Business does not contain the 
Order Document for that Invoice.

Therefore, for troubleshooting this error, the necessary documents need to synced first before integrating the Invoice.



