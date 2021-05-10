---
title: "Add Sales Order Magento2 Multiconnection-NAV"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    navmagentointegration:
        title: "Add Sales Order Magento2 Multiconnection-NAV"
        icon: fa fa-wpexplorer
        identifier: salesorderaddintegration
---

Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how the 
integration process can be executed through workflow for adding sales order from Magento2 (Multi-store) to Ms Dynamics NAV. 
This document provides the details like the configuration process, required lookup mapping for this workflow to achieve successful sync. 

## Brief Description

![nav-magemulti-salesorder-wrkflw](/staticfiles/integration/media/nav-magemulti-salesorder-wrkflw.png)

In this case, the `Sales Orders are placed in Magento2 and are added to MS Dynamics NAV` by syncing the `workflow for Sales Order Add`. 
The above workflow is designed to GET Sales Orders from Magento2 and POST it to Ms Dynamics NAV.

*The Prerequisite: Sync the products and the customers which are used to make sales order.**

**Note: The general procedures are needed to be followed when creating an order in an Ecommerce Website. 
Orders can also be created from Magento2 backend. [Click here](https://docs.magento.com/m2/ce/user_guide/customers/customer-account-create-order.html) 
to know more about creating the order from the admin panel of Magento2.**

Here the Sales Order is created for a customer whose order consists of two products `Red Velvet Cake` and `Id Cards`.
![nav-magemulti-salesorder1](/staticfiles/integration/media/nav-magemulti-salesorder1.png)

## LookUp Mapping

Lookup Mappings should be implemented when working with Sales Order. Below are the given lookup mapping values.

The Lookup mapping for Look up type - `Discount Group, Freight and Tax` is required to be done for Sales Order sync. The lookup mapping
screen is given below:

![nav-magemulti-salesorder2](/staticfiles/integration/media/nav-magemulti-salesorder2.png)

* Look Up Mapping for Discount Group - Use the term `discount` to get the respective lookup mapping for discount of source and application.  
* Look Up Mapping for Freight - Go to Sales Order- click on Lines Panel, for freight, change item and choose the value against the number.
* Look Up Mapping for Tax - Go to Sales Order- click on Lines Panel, Search GL Account and choose the desired account name. A number will come,
map the tax with that number.

![nav-magemulti-salesorder3](/staticfiles/integration/media/nav-magemulti-salesorder3.png)


## Attribute Mapping/Transformation

Following the Provided Mapping, the user can sync the Sales Order from Magento2 (Multi-store) to Ms Dynamics NAV. To know more, see [Mapping & Transformation Techniques](/transformation/steps-to-cutomize-prebuilt-mapping/).

**Note: Mapping for the Transformation for `Order add Touchpoint`**

![nav-magemulti-salesorder4](/staticfiles/integration/media/nav-magemulti-salesorder4.png)


## Action Filters

Not required, as the preconfigured action filter for base will be used.

## Executing the Workflow Integration

**Note: Before Integrating with Magento2 (multi-connection) and MS Dynamics NAV, make sure all the Master Data Touchpoints are synced.**

1. Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent.

2.	Navigate to the Workflow Panel in the agent and click Start Sync Button for executing the Process.
3.	Once the Execution is finished, click Resync Button in the agent.

4.	The Resync Panel show the Success Result in the agent.

![nav-magemulti-salesorder6](/staticfiles/integration/media/nav-magemulti-salesorder6.png)

## Integration Data Survey

The user can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/) from the node level of the workflow.
This Snapshot View displays the successful execution of the workflow.

![nav-magemulti-salesorder7](/staticfiles/integration/media/nav-magemulti-salesorder7.png)


## Post Conditions

The user can view the Sales Order synced in magento2 (multi connection)against the product which is mentioned above.

![nav-magemulti-salesorder8](/staticfiles/integration/media/nav-magemulti-salesorder8.png)

The websync flag will turn into "T" when the sync of sales order is successful.

## Frequency of use

The user can execute the Integration through workflow as and when required.

## Troubleshooting

N/A





