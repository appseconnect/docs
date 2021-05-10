---
title: "Customer Add Magento2-NAV Multiconnection"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    navmagentointegration:
        title: "Customer Add Magento2-NAV Multiconnection"
        icon: fa fa-wpexplorer
        identifier: custaddnavtomage2multi
---

Executing the Process is a vital part when integrating any applications. This document will let the users to understand how 
the integration process can be executed through workflow for adding Customers from 
Magento2 (Multi-store) to Ms Dynamics NAV.

## Brief Description

![addcustomer-workflow-mage2tonav](/staticfiles/integration/media/addcustomer-workflow-mage2tonav.png)  

Here the Customer who registers in Magento2 are added to MS Dynamics NAV by executing the workflow for customer add. 
The above workflow is designed to GET customers from Magento2 and POST it to MS Dynamics NAV. 

Login to Magento 2 Application. [Click here](https://docs.magento.com/m2/ce/user_guide/customers/account-create.html) to know 
more about the process of adding customers in Magento2.  

![addcustomer-mage2tonav1](/staticfiles/integration/media/addcustomer-mage2tonav1.png)  

## LookUp Mapping

N/A

## Attribute Mapping/Transformation

Following the Provided Mapping, the user can sync Customer Add from Magento2 to Dynamics NAV. 
To know more, see  [Mapping & Transformation Techniques](/transformation/steps-to-cutomize-prebuilt-mapping/)

Mapping for the Transformations of `Customer Add Touchpoint`.

![addcustomer-mage2tonav2](/staticfiles/integration/media/addcustomer-mage2tonav2.png)  

**(1) For Integrating B2B customer to MS Dynamics NAV**

The same workflow will integrate the B2B customers in Ms Dynamics NAV but as a prerequisite for this scenario, 
the user needs to go through the following steps & mapping process.

* The user needs to create an attribute named `B2B` with the datatype `String`.  
![addcustomer-mage2tonav3](/staticfiles/integration/media/addcustomer-mage2tonav3.png)  

* The user needs to apply an `IF condition` on B2B. The steps to create condition in attribute level are [given here](/transformation/define-logic-over-destination-mapping/#mapping-at-attribute-level).
* The clauses for the IF condition should be provided as given below:  
![addcustomer-mage2tonav4](/staticfiles/integration/media/addcustomer-mage2tonav4.png)  

 Mapping for attribute is given below:  

![addcustomer-mage2tonav5](/staticfiles/integration/media/addcustomer-mage2tonav5.png)  

Mapping for Root Variable:  

![addcustomer-mage2tonav6](/staticfiles/integration/media/addcustomer-mage2tonav6.png)  

**Note: These are the mappings that user needs to do manually, the other mappings are pre-packaged.**

## Action Filter

The Action filters required to fetch customers are given in the image below:

![addcustomer-mage2tonav7](/staticfiles/integration/media/addcustomer-mage2tonav7.png)  


## Executing the Workflow Integration

**Note: Before integrating with Magento2 and MS Dynamics NAV make sure all the Master Data Touchpoints are synced**

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent.
2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.
3.	Once the Execution is finished click Resync Button in the agent.
4.	The Resync Panel show the Success Result in the agent.

![addcustomer-mage2tonav8](/staticfiles/integration/media/addcustomer-mage2tonav8.png)  

## Integration Data Survey

The user can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/)from the node level of the workflow.
This Snapshot View displays the successful execution of the workflow.

![addcustomer-mage2tonav9](/staticfiles/integration/media/addcustomer-mage2tonav9.png)  

## Post Condition

The user can view the customer synced in Ms Dynamics NAV in the customer card page.

![addcustomer-mage2tonav10](/staticfiles/integration/media/addcustomer-mage2tonav10.png)  

![addcustomer-mage2tonav11](/staticfiles/integration/media/addcustomer-mage2tonav11.png)  

## Frequency of use

The user can execute the Integration through workflow as and when required.

## Troubleshooting

N/A
