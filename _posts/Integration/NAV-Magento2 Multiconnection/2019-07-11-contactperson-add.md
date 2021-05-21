---
title: "Contact Person Add NAV to Magento 2(Multiconnection)"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    navmagentointegration:
        title: "Contact Person Add NAV to Magento 2(Multiconnection)"
        icon: fa fa-wpexplorer
        identifier: configproductupdate
---

Executing the process is a vital part when integrating any applications. This section of the document will let the users to understand how the 
integration process can be executed through workflow for `Adding a Contact Person` from NAV to Mage 2 Multistore.

## Prerequisite

Create and sync the customer for which the contact person needs to be added.

## Brief Description

![contactperson-nav-mage2_workflow](/staticfiles/integration/media/contactperson-nav-mage2_workflow.png)

In this integration scenario, you can see multiple connections have been configured to make the sync process. Here Contact person are added in NAV (multi-webstore) and is synced with MS Dynamics NAV per connection wise.
[Click here](/integration/customeradd-mage2tonav/) to know more about the sync process of adding customers to Ms Dynamics NAV.

Here, in this scenario, a contact person has been added for a customer in MS Dynamics Nav and will be synced to Mage 2 through Workflow.

**Note: Same Workflow shall be used, when updating any details of any of the contact person for a customer. 
All the configurations remain same for the sync process of the Update task**

## LookUp Mapping

N/A

## Attribute Mapping/Transformation

The pre-packaged mappings will successfully sync data from MS Dynamics NAV to Magento 2. However, for more information related to mapping, see [Mapping & Transformation Techniques](/transformation/steps-to-cutomize-prebuilt-mapping/).

## Action Filters


## Executing the Workflow Integration

**Note: Before integrating with MS Dynamics NAV and Magento 2 , make sure all the Master Data Touchpoints are synced.**

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent.
2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.
3.	Once the Execution is finished, click Resync Button in the agent.
4.	The Resync Panel show the Success Result in the agent.

## Integration Data Survey



## Post Conditions



## Frequency of use

The user can execute the Integration through workflow as and when required.

## Troubleshooting

N/A
