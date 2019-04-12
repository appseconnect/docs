---
title: "Business Partner Add"
toc: true
tag: developers
category: "Integration"
menus: 
    sapbmagentointegration:
        icon: fa fa-wpexplorer            
        title: "Business Partner Add"
        identifier: sapbmage2integration
---

Executing the Process is a vital part when integrating any applications. This section of the document will let the users understand 
how the integration process can be executed through workflow for adding `Business Partner` from `Magento2 to SAP Business One`.

## Brief Description

![workflow-bpadd](/staticfiles/integration/media/workflow-bpadd.png)

Here, the Touchpoint `Business Partner` is used for syncing multiples customers from [Magento2](/connectors/Magento2/) to [SAP Business One](/connectors/Sap-Business-One/). 
A workflow is designed and executed with the `Business Partner Add` touchpoint where Customers are being added to [SAP Business One]() from [Magento2]().

Also for any Business Partners, if there are any `Contact persons` that need to be added or updated the process would happen simultaneously as a Post-Task. 
See here to know more about the [Touchpoint dependencies](/transformation/handling-dependent-data/).

**NOTE:** See here to now the agent validation in [Magento2](/connectors/Magento2/#configure-the-magento-application-in-the-agent) to [SAP Business One](/connectors/Sap-Business-One/#configure-the-sap-business-one-application-in-the-agent). Also, if there is no requirement 
for adding or updating Contact person, only the Business Partner Touchpoint is enough to sync the customers to SAP.

## Lookup Mapping

Not Applicable


## Attribute Mapping/Transformation

The mapping provided below will enable the user to sync the business partners from Magento2 to SAP Business One. 
See here to know more about the [Mapping & Transformation Techniques](/transformation/understanding-attribute-mapping/).

Mapping of the `BusinessPartner Touchpoint`.

1.	Mapping for the ComplexObjectCollection `BusinessPartners`.

![attributemapping-bp](/staticfiles/integration/media/attributemapping-bp.png)
2.  Mapping for the ComplexObject `BPAddresses`
![attributemapping-bpaddress](/staticfiles/integration/media/attributemapping-bpaddress.png)

**Mapping for the `Contact Person Update Touchpoint`**
1.	Mapping for the ComplexObjectCollection `BusinessPartners`.
![contact-person-update](/staticfiles/integration/media/contact-person-update.png)
![contact-person-update1](/staticfiles/integration/media/contact-person-update1.png)
2.	Mapping for the ComplexObject `BPAddresses`.
![contactperson-bpaddress](/staticfiles/integration/media/contactperson-bpaddress.png)
3.  Mapping for the ComplexObject “ContactEmployees”
![contactemployees](/staticfiles/integration/media/contactemployees.png)

## Executing the Workflow Integration

Note: Before integrating with Magento2 and SAP Business One, make sure all the Master Data Touchpoints are synced.

1.	Login to the APPSeCONNECT Portal and select the app MAGENTO2 and SAP Business One (≥8.8).
2.	Navigate to the connections module and create a connection for both the selected applications.	
3.	Now navigate to the Workflow module, you can either [create a workflow](/workflow/steps-to-create-your-first-workflow/) or can choose a pre-packaged workflow from the option of [choose workflow](/workflow/steps-to-choose-your-workflow/).
4.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent.
5.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.               
6.	Once the Execution is finished, click on the `Resync Button` in the agent.                                    
![workpanel](/staticfiles/integration/media/workpanel.png)
7.  The Resync Panel show the Success Result in the agent.            
![integration-data-survey](/staticfiles/integration/media/integration-data-survey.png)
8.  The User can also trigger or [deploy the workflow](/workflow/deploying-and-executing/) from the cloud Portal by clicking on the run button.

## Integration Data Survey

The user can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/)  from the node level of the workflow.      
![resyncpanel](/staticfiles/integration/media/resyncpanel.png)

This Snapshot View displays the successful execution of the workflow. The Business Partner with the source id 184 is successfully synced
to W184 in SAP Business One.

## Post-Conditions

The user can see the data synced in the SAP Business One by viewing the Business Partner Module in the SAP Application.

Open the SAP Business One application and navigate through the `Module > Business Partners > Business Partner Master Data`. 
The Module Opens, Press * to view all the business partners present.
![bpmaster-data](/staticfiles/integration/media/bpmaster-data.png)

## Frequency of Use

The user can execute the Integration through workflow as and when required for data integration. 
