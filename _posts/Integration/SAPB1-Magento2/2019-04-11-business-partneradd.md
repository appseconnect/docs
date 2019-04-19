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

## Prerequisites of Integration

1.	Login to the APPSeCONNECT Portal and select the app MAGENTO2 and SAP Business One (≥8.8).
2.	Navigate to the connections module and [create a connection](/getting-started/#creating-connection--executing-the-touchpoint) for both the selected applications.	
3.	Now navigate to the Workflow module, you can either [create a workflow](/workflow/steps-to-create-your-first-workflow/) or 
    can [choose a pre-packaged workflow](/workflow/steps-to-choose-your-workflow/).

## Brief Description

![workflow-bpadd](/staticfiles/integration/media/workflow-bpadd.png)

Here, the Touchpoint `Business Partner` is used for syncing multiples customers from [Magento2](/connectors/Magento2/) to [SAP Business One](/connectors/Sap-Business-One/). 
A workflow is designed and executed with the `Business Partner Add` touchpoint where Customers are being added to [SAP Business One]() from [Magento2]().

The Business Partner is created in Magento 2 and is synced to the SAP Business One.

Login to Magento 2 Application and [add customers](https://docs.magento.com/m2/ce/user_guide/customers/account-create.html) in Magento2. The screenshot is given below.      
![addcustomer-magento](/staticfiles/integration/media/addcustomer-magento.png)

Also for any Business Partners, if there are any `Contact persons` that need to be added or updated the process would happen simultaneously as a Post-Task. 
See here to know more about the [Touchpoint dependencies](/transformation/handling-dependent-data/).

**NOTE:** See here to now the agent validation in [Magento2](/connectors/Magento2/#configure-the-magento-application-in-the-agent) to [SAP Business One](/connectors/Sap-Business-One/#configure-the-sap-business-one-application-in-the-agent). Also, if there is no requirement 
for adding or updating Contact person, only the Business Partner Touchpoint is enough to sync the customers to SAP.

## Lookup Mapping

Depends upon the User Requirements. To know more,see [Attribute Mapping](/transformation/understanding-attribute-mapping/)

## Attribute Mapping/Transformation

The mapping provided below will enable the user to sync the business partners from Magento2 to SAP Business One. 
See here to know more about the [Mapping & Transformation Techniques](/transformation/overview-usecase/).

**Mapping for the ComplexObjectCollection `BusinessPartners`.**
                                
![attributemapping-bp](/staticfiles/integration/media/attributemapping-bp.png)

a.	CardCode: Here, Cardcode is a Primary Key (in SAP B1) which is mapped with the customer Id which is a Primary Key (in Magento2).  

b.	EmailAddress: This Field is mapped with the email address of the customer provided in the Magento2.

c.	CardName: In Magento, when a new customer is created, the name is entered as First Name and Last Name, when transforming in SAP B1, the name is merged using CONCAT for storing the entire name.
 
d.	U_Website: A customer can have multiple stores or websites from different locations and countries. These locations are stored using Id’s. Therefore, this attribute maps these ID’s under U_Website.

e.	U_WBCUSTGR: This maps the customer group id who can be a General Customer, or Retailer or a Wholesale Customer etc.

f.	U_Gender: This maps the gender of the customer.

g.	U_WBCUSTID: This is the customer ID which is maintained in the UDF’s.

h.	U_WEB_FLAG: This is mapped for maintaining the Updated Data.

i.	PriceLists: This is for mapping, multiple types of currencies while dealing with multiple websites. 

**Mapping for the ComplexObject `BPAddresses`**                   
![attributemapping-bpaddress](/staticfiles/integration/media/attributemapping-bpaddress.png)

a.	State: This maps the STATE of customer provided in the Magento2.

b.	City: This maps the CITY of the customer provided in the Magento2.

c.	Country: This maps the country with its country id provided in the Magento2.

d.	AddressName: The address of the customer is mapped. The “position()” is for making similar addresses unique. For example: similar addresses can be positioned as Address1 and Address 2.

e.	ZipCode: This maps the customer Pincode.

f.	Street: This maps the first field of the Street Address provided in Magento2.
 
g.	AddressType: This maps the type of the address, Bill-To or Ship-To.

h.	Block: This maps the second field of the Street Address provided in Magento2.
 
i.	U_WBCUSTADDID: This maps the customer Address ID in its UDF Fields.

**Mapping for the `Contact Person Update Touchpoint`**
 
*The mapping concept for the attributes, for this touchpoint, is same as that of the Business Partner.*

**Mapping for the ComplexObject “ContactEmployees”** 
![contactemployees](/staticfiles/integration/media/contactemployees.png)

a.	Name: The Attribute is mapped with variable {{$name}} for mapping the name of the contact person.

b.	E_Mail: The Email is mapped with Email of the Contact person provided in Magento2.

c.	FirstName: The first name is mapped with the first name of the contact person provided in Magento2.

d.	LastName: The last name is mapped with the last name of the contact person provided in Magento2.

e.	U_WebID: Maps the Contact person ID.

**Mapping for the ComplexObject “QueryParams”.**
![query-param](/staticfiles/integration/media/query-param.png)
a.	CardCode: Maps the customer card code provided in Magento2.

## Executing the Workflow Integration

**Note: Before integrating with Magento2 and SAP Business One, make sure all the Master Data Touchpoints are synced.**

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent.
2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.               
3.	Once the Execution is finished, click on the `Resync Button` in the agent.                                    
![workpanel](/staticfiles/integration/media/workpanel.png)
4.  The Resync Panel show the Success Result in the agent.            
![resyncpanel](/staticfiles/integration/media/resyncpanel.png)
5.  The User can also trigger or [deploy the workflow](/workflow/deploying-and-executing/) from the cloud Portal by clicking on the run button.

## Integration Data Survey

The user can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/)  from the node level of the workflow.      
![integration-data-survey](/staticfiles/integration/media/integration-data-survey.png)
This Snapshot View displays the successful execution of the workflow. The Business Partner with the source id 184 is successfully synced
to W184 in SAP Business One.

## Post-Conditions

The user can see the data synced in the SAP Business One by viewing the Business Partner Module in the SAP Application.

Open the SAP Business One application and navigate through the `Module > Business Partners > Business Partner Master Data`. 
The Module Opens, Press * to view all the business partners present.
![bpmaster-data](/staticfiles/integration/media/bpmaster-data.png)

## Frequency of Use

The user can execute the Integration through workflow as and when required for data integration. 
