---
title: "Invoice Add"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    sapbmagentointegration:
        icon: fa fa-wpexplorer  
        weight: 6           
        title: "Invoice Add"
        identifier: sapbmage2integration
---

Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how the integration process can be executed through workflow for 
adding Invoice from `Magento2` to `SAP Business One`.

**Note: Before proceeding with any integration configuration, users are advised to view the pre-requites 
of the [integration process](/integration/SAPB1-Magento2/).**

## Prerequisites

1.	[SAP Business One Add-On](/connectors/Sap-Business-Addon/) for APPSeCONNECT is required to be installed. 
2.	Login to the APPSeCONNECT Portal and [choose the app](/configuring%20appseconnect/configurations/#process-of-choosing-app) MAGENTO2 and SAP Business One (≥8.8) from the APPS Section. 
3.	Navigate to the connections module and [create a connection](/getting%20started/configurations-for-integration/#configuring-connector-while-creating-connection) for the selected applications.	
4.	Now navigate to the Workflow module. You can either [create a workflow](/workflow/steps-to-create-your-first-workflow/) or can choose a pre-packaged workflow from the [Choose Workflow](/workflow/steps-to-choose-your-workflow/) Option.
5.	Before Integrating with SAP Business One and Magento2 all the master data needs to be synced. Master Data Sync is used for synchronizing set of core information (viz. Websites, Product Category, Attribute set, and Tax Class etc.) from Magento2 to SAP B1.


## Brief Description

![workflow-invoiceadd](/staticfiles/integration/media/workflow-invoiceadd.png)

After adding the Sales Order, the Invoice of the Order is now ready to sync in the SAP Business One. 
Therefore, a workflow is created to sync the Invoice of the order along with the dependency touchpoint **Payment 
with Cash** as post-tax in SAP Business One.

To know more, See [touchpoint dependencies](/transformation/handling-dependent-data/).  
See, steps to [generate an Invoice](https://docs.magento.com/m2/ce/user_guide/sales/invoice-create.html) for an Order.

**Note: Please enable the checkbox for Creating the Shipment**

## Lookup Mapping

Click here (will navigate to the Order Add Document) to know about the [Lookup Mapping](/transformation/using-lookups-for-value-exchange/) for Invoice Add

## Attribute Mapping/Transformation

Following the Provided Mapping, the user can sync the Order Add Workflow from Magento2 to SAP Business One. 
To know more, see  [Mapping & Transformation Techniques](/transformation/steps-to-cutomize-prebuilt-mapping/).

1.	**Mapping for the `ComplexObject Document_Lines`**

![invoiceadd_1](/staticfiles/integration/media/invoiceadd_1.png)

**Mapping for the variable $curItmId**
1.	$curItmId – Here, the mapping is done with the {{order_item_id}} of Magento2.

## Executing the Workflow Integration

**Note: Before integrating with Magento2 and SAP Business One, make sure all the Master Data Touchpoints are synced.
Also See [Prerequisites]()for Integration **

1.	Once the workflow is designed, Update the Configuration in agent for [deploying the workflow](/workflow/deploying-and-executing/) in the agent.
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

1.	Error Details: `Row without tax was found`
![invoiceadd_6](/staticfiles/integration/media/invoiceadd_6.png)

For troubleshooting this error, the mapping for the Variable $curItmId needs to be modified as given in the 
Attribute Mapping/Transformation part of this document.

2.	Error: Details: `Base Doc Missmatch`
![invoiceadd_7](/staticfiles/integration/media/invoiceadd_7.png)

This Error usually occurs when dependent document is not found in the destination Application. For Example: If the Order 
Add is not synced, and for the order the invoice is synced, this error will occur as SAP Business does not contain the 
Order Document for that Invoice.

Therefore, for troubleshooting this error, the necessary documents need to synced first before integrating the Invoice.



