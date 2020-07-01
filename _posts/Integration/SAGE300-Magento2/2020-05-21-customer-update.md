﻿---
title: "Customer Update from Magento2 to SAGE300"
toc: true
tag: developers
category: "Integration"
menus: 
    sagemagentointegration:
        title: "Customer Update"
        icon: fa fa-wpexplorer
        identifier: sage300magecustomerupdate
---
Executing the Process is a vital part when integrating any applications. This section of the document will let the users understand how the integration process can be executed through workflow for updating existing customers details from Magento2 to SAGE  300.

## Brief Description

![custupdate1](\staticfiles\integration\Sage300-Magento\custupdate1.png)

Here, the workflow for Customer Update is used for syncing updated customers from [Magento2](/connectors/Magento2/) to [SAGE 300](/connectors/sage300/). A [Post-Task](/transformation/handling-dependent-data/)  Address Update is also attached for syncing updated customer address to SAGE 300. A workflow is designed and executed with the Customer Update touchpoint where Customers are being added to SAGE 300 from Magento2. 

**Basic Prerequisite for Updating Customers:**
•	You need to have the customer added in SAGE 300 before updating any existing customer detail.

## Lookup Mapping: 

Same as [Customer Add](/integration/customer-add/).

**Note:** After mapping changes is done, `Reset Generate` and `Reset Publish` the Touchpoint from the workflow panel. Refresh the Page and [Publish the workflow](/workflow/deploying-and-executing/#publishing-a-workflow). After Republishing, click on the Update Configuration and Update Lookup Tables button in the Agent.

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

Following the above procedures, you can successfully sync updated details of a customer from Magento 2 to SAGE 300.




