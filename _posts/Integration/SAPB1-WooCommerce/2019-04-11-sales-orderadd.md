---
title: "Sales Order Add"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    sapwoocommerceintegration:
        title: "Sales Order Add"
        icon: fa fa-wpexplorer
        identifier: sapwoocommercesoadd
---

Executing the Process is a vital part when integrating any applications. This section of the document 
will let the users understand how the integration process can be executed through workflow for adding 
SalesOrder from WooCommerce to SAP Business One.

If required, view the [pre-requisites of the integration process](). 

## Brief Description

Image 

Here, the Touchpoint Sales Order Add is used for syncing orders from [WooCommerce]() to [SAP Business One]().
A workflow is designed and executed with the Sales Order Add touchpoint.
The order is created for the customer ( Example - Laci J Bixby) with the order id 1522. 
The details of the order are given below:

Image   

## Lookup Mapping

For the sync process of the Sales Order Touchpoint, lookup mapping needs to be processed for syncing 
the details of the tax. Lookup is implemented for the types Tax & Freight. 

Image 

However, every Business Processes are unique and may require mapping of the lookups. Click here to know 
more about the Lookup Mapping.

**Note: After the mapping changes, `Reset Generate` and `Reset Publish` the Touchpoint. Also click on the 
`Update Lookup tables` and `Update Configuration` in the Agent**.

## Attribute Mapping/Transformation

The mapping provided below will enable the user to sync the business partners 
from WooCommerce to SAP Business One. To know more, see [Mapping & Transformation Techniques]().

1.	Mapping from the Complex Object Collection `Documents`.

Image

a.	Cardcode: Syncs the customer id for whom the order was created in WooCommerce.
b.	DocDate: Syncs the created date of the order document.
c.	DocDueDate: Syncs the created date of the order document.
d.	NumAtCard: Syncs the Business Partner id available for the order card.

Image

The above mapped fields are the custom fields whose UDF's needs to be formed in SAP Business One for syncing the data to the custom fields.

2.	Mapping for the ComplexObject `Document_Lines`
Image

a.	ItemCode: Sync the SKU of the product for which the order is created
b.	UnitPrice: Syncs the price of the product available in the order document
c.	Quantity: Transforms the quantity ordered
d.	TaxCode: Syncs the TaxCode to SAP Business One from WooCommerce
e.	DiscountPercent: Transforms the Discount Percentage if any to WooCommerce
f.	U_WebOrderItemId: Syncs the web id of item to WooCommerce

**Note: After the mapping changes, `Reset Generate` and `Reset Publish` the Touchpoint. Also click `Update Configuration` in the Agent for updating the changes in the On-Premise Agent.
These are the default mappings that needs to sync a sales order from WooCommerce to SAP Business One. 
User can also map different fields as per the user requirement.**

## Executing the Workflow Integration
    
If required, view the [pre-requisites of the integration process](). 

1. Once the workflow is designed, Update the Configuration in agent for [deploying the workflow]()in the agent. 
2. Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.
3. Once the Execution is finished, click Resync Button in the agent.

Image  

4. The Resync Panel shows the Success Result in the agent. The User can also trigger or deploy the workflow 
from the cloud Portal by clicking on the run button. For more details [Click Here]().

Image  

## Integration Data Survey

The user can survey the data by viewing the [Processed Snapshot]() from the node level of the workflow.
Image   

This Snapshot View displays the successful execution of the workflow. The Sales Order with the 
source id 1522 is successfully synced in SAP Business One.

## Post-Conditions

The user can see the data synced in the SAP Business One by viewing the Business Partner Module 
in the SAP Application.
Open the SAP Business One application and navigate through the Module > Sales A/R > Sales Order. 
The Module Opens and find the order with destination id 83 as mentioned in the Resync Bucket.
& Workflow Snapshot. 

Image

## Frequency of Use
The user can execute the Integration through workflow as and when required. 

## Troubleshooting

1.	Property `U_ConnectionId` of `Document` is invalid.
Image

Solution: `U_ConnectionId` being a custom field, needs to have an UDF created for the value that could be stored. For troubleshooting this error, user needs to create an UDF in SAP Business One environment.
The UDF should be created in the mentioned pathway: MasterData >> Marketing Documents >> Title.

**Note: Once all the UDFs are created, users are suggested to restart the Di Server mandatorily and 
Resync the failed the data**

2. Item Number is missing; specify an item number

Image

Solution: User needs to verify the mapping for the ItemCode attribute under the  ComplexObject `Document_Lines`. If the mapping is correct, 
yet the error persists, verify the XPATH provided for the ComplexObject.
 




