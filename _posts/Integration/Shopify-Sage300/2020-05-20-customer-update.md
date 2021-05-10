---
title: "Customer Update from Shopify to SAGE 300"
toc: true
tag: developers
category: "Integration/Sage-Shopify"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
   shopifysageintegration:
        title: "Customer Update"
        icon: fa fa-wpexplorer
        identifier: shopifysagecustomerupdate
---

Executing the Process is a vital part when integrating any applications. This document will let the users integrate updated customers from Shopify to SAGE 300.

## Brief Description:

Here, the workflow for Customer Update is used for integrating updated customers from [Shopify](/connectors/shopify/) to [SAGE 300](/connectors/sage300/). A Post-Task **Address Update** is also attached for syncing updated customer address to SAGE 300. 

### Prerequisites: 

- You need to [Choose your Workflow](/workflow/steps-to-choose-your-workflow/) or you can [create/design a new workflow](/workflow/steps-to-create-your-first-workflow/) as per your need.
- You need to have the [customer added](/integration/sage-shopify/customer-add/) in SAGE 300 from Shopify, before updating any existing customer detail.

## Value Mapping: 

Same as [Customer Add](/integration/sage-shopify/customer-add/)

Note: After the changes in mapping is done, **Reset Generate** and **Reset Publish** from the workflow panel. Refresh the Page and **Publish** the workflow. After Republishing, click on the **Update Configuration** and **Update Lookup Tables** button in the Agent.

## Executing the Integration using Workflow:

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent. [Click here](/workflow/deploying-and-executing/) to know more about the deploying process of a workflow.

2.	Navigate to the Workflow Panel in the agent and click on the **Start Sync Button** for executing the Process.

3. You can also trigger or deploy the workflow from the cloud Portal by clicking on the run button. For more details [Click Here](/workflow/steps-to-create-your-first-workflow/#steps-to-workflow-creation).

## Integration Data Survey:

You can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/) from the node level of the workflow.

## Post Conditions:

You can view the data sync in SAGE 300 by viewing the `Accounts Receivable > A/R Customers`.

## Frequency of Use:

The user can execute the Integration through workflow as and when required. 

## Limitations:
NA

Following the above procedures, you can successfully sync updated details of a customer from Shopify to SAGE 300.



