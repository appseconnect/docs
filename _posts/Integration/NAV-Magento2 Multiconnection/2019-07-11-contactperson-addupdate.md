---
title: "Contact Person Add/ Update Mage2 multistore to NAV"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    navmagentointegration:
        title: "Contact Person Add/ Update Mage2 multistore to NAV"
        icon: fa fa-wpexplorer
        identifier: configproductupdate
---

Executing the process is a vital part when integrating any applications. This section of the document will let the users to understand how the 
integration process can be executed through workflow for `Adding and Updating a Contact Person` from Magento 2 to NAV MultiConnection.

## Prerequisite

Create and sync the customer for which the contact person needs to be added.

## Brief Description

![contactperson_addupdate_workflow](/staticfiles/integration/media/contactperson_addupdate_workflow.png)

In this integration scenario, you can see multiple connections have been configured to make the sync process. Here Contact person are added in Magento 2 (multi-webstore) and is synced with Ms Dynamics NAV per connection wise.
Click here (link to customer add Magento-NAV) to know more about the sync process of adding customers to Ms Dynamics NAV.

Here, in this scenario, a contact person has been added for a customer in Magento2 and will be synced to Ms Dynamics NAV through Workflow.

![contactperson_addupdate-mag2nav1](/staticfiles/integration/media/contactperson_addupdate-mag2nav1.png)

**Note: Same Workflow shall be used, when updating any details of any of the contact person for a customer. 
All the configurations remain same for the sync process of the Update task**

## LookUp Mapping

N/A

## Attribute Mapping/Transformation

The pre-packaged mappings will successfully sync data from Magento2 to MS Dynamics NAV. However, for more information related to mapping, see [Mapping & Transformation Techniques](/transformation/steps-to-cutomize-prebuilt-mapping/).

## Action Filters

The Action filters required to fetch the products are given in the images below:

![contactperson_addupdate-mag2nav2](/staticfiles/integration/media/contactperson_addupdate-mag2nav2.png)


## Executing the Workflow Integration

**Note: Before integrating with Magento2 and MS Dynamics NAV , make sure all the Master Data Touchpoints are synced.**

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent.
2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.
3.	Once the Execution is finished, click Resync Button in the agent.
4.	The Resync Panel show the Success Result in the agent.

![contactperson_addupdate-mag2nav3](/staticfiles/integration/media/contactperson_addupdate-mag2nav3.png)


## Integration Data Survey

The user can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/) from the node level of the workflow. 
This Snapshot View displays the successful execution of the workflow.

![contactperson_addupdate-mag2nav4](/staticfiles/integration/media/contactperson_addupdate-mag2nav4.png)

## Post Conditions

The user can view the contact person added in Ms Dynamics NAV.

![contactperson_addupdate-mag2nav5](/staticfiles/integration/media/contactperson_addupdate-mag2nav5.png)


The user can also check if the WebContactId has returned and the WebSyncFlag has been set to `T`(True).

![contactperson_addupdate-mag2nav6](/staticfiles/integration/media/contactperson_addupdate-mag2nav6.png)

## Frequency of use

The user can execute the Integration through workflow as and when required.

## Troubleshooting

N/A
