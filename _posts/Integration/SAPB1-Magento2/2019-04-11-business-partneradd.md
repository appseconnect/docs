---
title: "Business Partner Add"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    sapbmagentointegration:
        icon: fa fa-wpexplorer  
        weight: 2          
        title: "Business Partner Add"
        identifier: sapbmage2integration
---

Executing the Process is a vital part when integrating any applications. This section of the document will let the users understand 
how the integration process can be executed through workflow for adding `Business Partner` from `Magento2 to SAP Business One`.

## Brief Description

![workflow-bpadd](/staticfiles/integration/media/workflow-bpadd.png)

Here, the Touchpoint `Business Partner` is used for syncing multiples customers from [Magento2](/connectors/Magento2/) to [SAP Business One](/connectors/Sap-Business-One/). 
A workflow is designed and executed with the `Business Partner Add` touchpoint where Customers are being added to SAP Business One from Magento2.

The Business Partner is created in Magento 2 and is synced to the SAP Business One.

Login to Magento 2 Application and [add customers](https://docs.magento.com/m2/ce/user_guide/customers/account-create.html) in Magento2. The screenshot is given below.      
![addcustomer-magento](/staticfiles/integration/media/addcustomer-magento.png)

Also for any Business Partners, if there are any `Contact persons` that need to be added or updated the process would happen simultaneously as a Post-Task activity. 
See here to know more about the [Touchpoint dependencies](/transformation/handling-dependent-data/). See here to know the agent validation in [Magento2](/connectors/Magento2/#configure-the-magento-application-in-the-agent) and
[SAP Business One](/connectors/Sap-Business-One/#configure-the-sap-business-one-application-in-the-agent). 

Also, if there is no requirement for adding or updating Contact person, only the Business Partner Touchpoint can be executed to sync the customers to SAP.

**NOTE:If the customer is of B2C, only the business partner workflow is needed to be synced. And if the customer is B2B, contact person update is also needed to be synced.**

## Lookup Mapping

The lookup Mapping for the STATE field is needed to be done if the state code does not match with the state code provided in Magento2.

For Example: If STATE provided in Magento2 is New York, the lookup Mapping is needed to be done where destination code is NY for New York. 

Given below is the image of the Lookup Up Mapping for the given scenario.
![lookupmapping-BPADD](/staticfiles/integration/media/lookupmapping-BPADD.png)

On mapping the lookups, the `attribute mapping` for State field under the `ComplexObject BPAddresses` is needed to be altered. 
The mapping for the attribute is given below:
![lookupmapping-BPADD2](/staticfiles/integration/media/lookupmapping-BPADD2.png)

Steps to do this Mapping is proved below:

a.	Open the State attribute and click on the function [genericlib:getMapping(ObjectType,Value)]  which is available under Functions > Generic Functions.             
b.	The Object type in the function is the Lookup type that has been provided in the Lookup Mapping i.e State.             
**Note: State being a string object needs to be provided in single quotes.**                 
c.	The value is the xpath for the State field in the xslt.                              

On completion of the mapping, click on the Submit button.                         
**Note: After the mapping changes, Reset Generate and Reset Publish the Touchpoint. Also click on the Update Lookup tables and Update Configuration in the Agent**

To know more, See [LookUp Mapping](/transformation/using-lookups-for-value-exchange/)

## Attribute Mapping/Transformation

The mapping provided below will enable the user to sync the business partners from Magento2 to SAP Business One. 
To know more, see  [Mapping & Transformation Techniques](/transformation/overview-usecase/).

Mapping of 'BusinessPartner Touchpoint'.

**Mapping for the ComplexObjectCollection `BusinessPartners`.**
                                
![attributemapping-bp](/staticfiles/integration/media/attributemapping-bp.png) 

a.	CardCode: Here, Cardcode is a Primary Key (in SAP B1) which is mapped with the customer Id which is a Primary Key (in Magento2).  

b.	EmailAddress: This Field is mapped with the email address of the customer provided in the Magento2.

c.	CardName: In Magento, when a new customer is created, the name is entered as First Name and Last Name, when transforming in SAP B1, the name is merged using CONCAT for storing the entire name.
 
d.	U_Website: A customer can have multiple stores or websites from different locations and countries. These locations are stored using Id’s. Therefore, this attribute maps these ID’s under U_Website.

e.	U_WBCUSTGR: This maps the customer group id who can be a General Customer, or Retailer or a Wholesale Customer etc.

f.	U_Gender: This maps the gender of the customer.

g.	U_WBCUSTID: This is the customer ID which is maintained in the UDFs.

h.	U_WEB_FLAG: This is mapped for maintaining the Updated Data.

i.	PriceLists: This is for mapping, multiple types of currencies while dealing with multiple websites. 

**Mapping for the ComplexObject `BPAddresses` in the Business Partner Add Touchpoint.**                 
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

**Note: After the mapping changes is done, `Reset Generate` and `Reset Publish the Touchpoint` from the workflow panel. 
After Republishing, click on the Update Configuration button in the Agent.** 

**Mapping for the `Contact Person Update Touchpoint`**
 
*The mapping concept for the attributes, for this touchpoint, is same as that of the Business Partner.*

**Mapping for the ComplexObject “ContactEmployees”** 
![contactemployees](/staticfiles/integration/media/contactemployees.png)

a.	Name: The Attribute is mapped with variable {{name}} for mapping the name of the contact person.

b.	E_Mail: The Email is mapped with Email of the Contact person provided in Magento2.

c.	FirstName: The first name is mapped with the first name of the contact person provided in Magento2.

d.	LastName: The last name is mapped with the last name of the contact person provided in Magento2.

e.	U_WebID: Maps the Contact person ID.

**Mapping for the ComplexObject “QueryParams”.**
![query-param](/staticfiles/integration/media/query-param.png)
a.	CardCode: Maps the customer card code provided in Magento2.

**Note: After the mapping changes is done, `Reset Generate` and `Reset Publish the Touchpoint` from the workflow panel. 
After Republishing, click on the Update Configuration button in the Agent.** 

## Executing the Workflow Integration

**Note: Before integrating with Magento2 and SAP Business One, make sure all the Master Data Touchpoints are synced.**

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent.
2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.               
3.	Once the Execution is finished, click `Resync Button` (highlighted in the image) in the agent.                                    
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

## Troubleshooting

1.	If the Lookup mapping is not done in the provided manner, the STATE of the business partner might not sync. The error shown is 'State Code is not Defined'. To troubleshoot this, Login to the portal and navigate 
    to the workflow -> Process -> Mapping and initiate the lookup mapping.

2.	All the Master data needs to be synced so to fetch the information from both ways. Skipping the process will not fetch any data from the 
   source application and no result will be shown in the resync bucket.

3. CServiceData::SetPropertyValueString failed; Value too long in property `CardCode` of `BusinessPartner`  
  ![troubleshooting-sapmage2](/staticfiles/integration/media/troubleshooting-sapmage2.png)

Solution: The parameter passed in the mapping of the attribute CardCode is too long for it to execute the transformation process. 
Users need to map the attribute with Short string value passed to the parameter. Users are suggested to provide 3-4 letter string value to the mapping. 

