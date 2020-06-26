---
title: "Customer Add from Magento2 to SAGE 300"
toc: true
tag: developers
category: "Integration"
menus: 
    sagemagentointegration:
        title: "Customer Add"
        icon: fa fa-wpexplorer
        identifier: sage300magecustomeradd
---

Executing the Process is a vital part when integrating any applications. This section of the document will let the users understand how the integration process can be executed through workflow for adding customers from Magento2 to SAGE  300.

## Brief Description

![custadd1](\staticfiles\integration\Sage300-Magento\custadd1.png)

Here, the Touchpoint Customer is used for syncing multiples customers from [Magento2](/connectors/Magento2/) to [SAGE 300](/connectors/sage300/). A [Post-Task](/transformation/handling-dependent-data/) Address Add is also attached for syncing customer address to SAGE 300. A workflow is designed and executed with the Customer Add touchpoint where Customers are being added to SAGE 300 from Magento2. The customer is created in Magento 2 and is synced to the SAGE 300.

Login to Magento 2 Application and [add customers](https://docs.magento.com/m2/ce/user_guide/customers/account-create.html) in Magento2.

## Lookup Mapping 

For posting newly added customer to SAGE 300 from Magento, you need to add Lookup for Customer Group & Tax. For this integration of Customer, mapping lookups for the group code of Customer & Tax is mandatory.

![custadd2](\staticfiles\integration\Sage300-Magento\custadd2.png)

## Attribute Mapping: 

The mapping provided below will enable the user to sync the Customers from Magento2 to SAGE 300. To know more, see [Mapping & Transformation Techniques.](/transformation/overview-usecase/)

Mapping for the Complex Object Collection `Customers` for Customer Add Touchpoint:

![custadd3](\staticfiles\integration\Sage300-Magento\custadd3.png)

a.	**Customer Number:** Here, the customer id is mapped with the id in Magento2.

b.	**Customer Name:** The customer name field of SAGE 300 is mapped with the customer name field of Magento for transforming the name of the customer with respect to id mapped above.

c.	**Group Code:** Map the customer group code whose Lookup is initialized.

d.	**Tax Group:** Map the tax group whose lookup is initialized.

e.	**AddressLine1:** Mapping the address field of SAGE 300 with Magento 2

f.	**AddressLine2:** Mapping the address field of SAGE 300 with Magento 2

g.	**City:** Mapping the field City of Sage 300 with the field in Magento2

h.	**StateProvince:** Mapping the field of the State (Part of Address Detail) of the customer with the field in Magento 2.

i.	**ZipPostalCode:**  Mapping field of Zip postal code of SAGE 300 with the field in Magento 2.

j.	**Country:** Mapping the field Country with the field in Magento 2

k.	**Email:** Mapping the Email with the field in Magento 2

l.	**PhoneNumber:** Mapping the contact number of the customer with field in Magento 2

m.	**UploadURL:** This field define the Route to SAGE 300 for data storage.


**Note**: After mapping changes is done, `Reset Generate` and `Reset Publish` the Touchpoint from the workflow design panel. Refresh the Page and [Publish the workflow](/workflow/deploying-and-executing/#publishing-a-workflow). After Republishing, click on the Update Configuration button in the Agent.

## Executing the Integration using Workflow:

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent. [Click here](/workflow/deploying-and-executing/) to know more about the deploying process of a workflow.
2.	Navigate to the Workflow Panel in the agent and click on the **Start Sync Button** for executing the Process.
3.	Once the Execution is finished, click on the **Resync Button** (Highlighted Below) in the agent.

![custadd4](\staticfiles\integration\Sage300-Magento\custadd4.png)

4. The Resync Panel shows the Success Result in the agent. The User can also trigger or deploy the workflow from the cloud Portal by clicking on the run button. For more details [Click Here](/workflow/steps-to-create-your-first-workflow/#steps-to-workflow-creation).

![custadd5](\staticfiles\integration\Sage300-Magento\custadd5.png)

## Integration Data Survey:

You can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/) from the node level of the workflow.

![custadd6](\staticfiles\integration\Sage300-Magento\custadd6.png)

## Post Conditions:
You can view the data sync in SAGE 300 by viewing the `Accounts Receivable > A/R Customers.`
Here you can view the data **MA57** successfully synced in SAGE 300.

![custadd7](\staticfiles\integration\Sage300-Magento\custadd7.png)

## Frequency of Use:

The user can execute the Integration through workflow as and when required. 

## Limitations:
NA

## Troubleshooting:

1.	**Remote Server returned an error: (409) Conflict.**

**Resolution:** You may have faced this error because of a lookup which has not been successfully transformed. Verify in the transform file whether the value of lookup mapped attribute is transformed or not. If not, you need to rectify your mapping, or you need to add new lookup table for this connection.

Following the above procedures, you can successfully sync customer from Magento 2 to SAGE 300.





