﻿---
title: "I/C Product Add from SAGE300 to Magento2"
toc: true
tag: developers
category: "Integration"
menus: 
    sagemagentointegration:
        title:  "I/C Product Add"
        icon: fa fa-wpexplorer
        identifier: sage300magentoproductadd
---
Executing the Process is a vital part when integrating any applications. This section of the document will let the users understand how the integration process can be executed through workflow for adding Products/items from SAGE  300 to Magento2.

## Brief Description:

In this case, the Workflow for Adding Products/Items, is used for adding simple product from SAGE 300 to Magento2. Here, a workflow is created where all the Simple Products are fetched form SAGE 300 and are posted to Magento2.

### Prerequisites: 

- You need to [Choose your Workflow](/workflow/steps-to-choose-your-workflow/) or you can [create/design a new workflow](/workflow/steps-to-create-your-first-workflow/) as per your need.
- You need to have the products created in SAGE 300. [Click](/connectors/adding-product-in-sage/) to know about the steps to create products in SAGE 300.


## Lookup Mapping:

Not Required but every business processes are unique may require lookup mapping. In such cases, [click here](/transformation/using-lookups-for-value-exchange/) to know more about Lookup Mapping.

**Note:** After mapping changes is done, `Reset Generate` and `Reset Publish` the Touchpoint from the workflow panel. Refresh the Page and [Publish the workflow](/workflow/deploying-and-executing/#publishing-a-workflow). After Republishing, click on the Update Configuration and Update Lookup Tables button in the Agent.

## Executing the Integration using Workflow:

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent. [Click here](/workflow/deploying-and-executing/) to know more about the deploying process of a workflow.

2.	Navigate to the Workflow Panel in the agent and click on the **Start Sync Button** for executing the Process.

3. You can also trigger or deploy the workflow from the cloud Portal by clicking on the run button. For more details [Click Here](/workflow/deploying-and-executing/#executing-the-workflow).


## Integration Data Survey:

You can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/)  from the node level of the workflow.

## Post Conditions:
You can view the data sync in Magento 2 by navigating to `Catalog > Products.`

## Frequency of Use:

The user can execute the Integration through workflow as and when required. 

## Limitations:
NA

Following the above procedures, you can successfully sync Products from SAGE 300 to Magento2.


