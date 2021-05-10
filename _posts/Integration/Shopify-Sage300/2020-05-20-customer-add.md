---
title: "Customer Add from Shopify to SAGE 300"
toc: true
tag: developers
category: "Integration/Sage-Shopify"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
   shopifysageintegration:
        title: "Customer Add"
        icon: fa fa-wpexplorer
        identifier: shopifysagecustomeradd
---
Executing the Process is a vital part when integrating any applications. This section of the document will let the users understand how the integration process can be executed through workflow for adding customers from Shopify to SAGE  300.

## Brief Description:

Here, the Workflow is used for syncing multiple customers from [Shopify](/connectors/shopify/) to [SAGE 300](/connectors/sage300/). A workflow is designed and executed with the Customer Add General touchpoint where Customers are being added to SAGE 300 from Shopify. The customer is created in the shopify platform and is synced to SAGE 300.

Login to your Shopify platform and [add customers](https://help.shopify.com/en/manual/customers/manage-customers#add-customers) in Shopify.

### Prerequisites: 

- You need to [Choose your Workflow](/workflow/steps-to-choose-your-workflow/) or you can [create/design a new workflow](/workflow/steps-to-create-your-first-workflow/) as per your need.

## Lookup Mapping: 

For posting newly added customer to SAGE 300 from Shopify, you need to add Lookup for `Customer Group`, `Tax` & `Website`. For this integration of Customer, mapping lookups for the group code of Customer, Tax & website is mandatory.

![custadd2](\staticfiles\integration\SAGE300-Shopify\custadd2.PNG)

## Executing the Integration using Workflow:

1. Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent. [Click here](/workflow/deploying-and-executing/) to know more about the deploying process of a workflow.

2. Navigate to the Workflow Panel in the agent and click on the **Start Sync Button** for executing the Process.

3. You can also trigger or deploy the workflow from the cloud Portal by clicking on the run button. For more details [Click Here](/workflow/steps-to-create-your-first-workflow/#steps-to-workflow-creation).


## Integration Data Survey:

You can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/) from the node level of the workflow.

## Post Conditions:
You can view the data sync in SAGE 300 by viewing the `Accounts Receivable > A/R Customers.` successfully.

## Frequency of Use:

The user can execute the Integration through workflow as and when required. 

## Limitations:
NA

## Troubleshooting:

1.	**Remote Server returned an error: (409) Conflict.**

**Resolution:** You may have faced this error because of a lookup which has not been successfully transformed. Verify in the transform file whether the value of lookup mapped attribute is transformed or not. If not, you need to rectify your mapping, or you need to add new lookup table for this connection.

Following the above procedures, you can successfully sync customers from Shopify to SAGE 300.
