---
title: "Business Partner Add"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    sapwoocommerceintegration:
        title: "Business Partner Add"
        icon: fa fa-wpexplorer
        identifier: sapwoocommercebpadd
---

Executing the Process is a vital part when integrating any applications. This section of the document will let the users 
understand how the integration process can be executed through workflow for adding Business Partner from WooCommerce to 
SAP Business One.

You can view the pre-requites [integration process](/integration/SAPB1-WooCommerce/). 

 ## Brief Description
![businesspartner-add1](/staticfiles/integration/media/woosapb1/businesspartner-add1.png) 

Here, the Touchpoint Business Partner is used for syncing multiple customers from [WooCommerce](/connectors/woocommerce/) to [SAP Business One](/connectors/Sap-Business-One/). 
A workflow is designed and executed with the Business Partner Add touchpoint where Customers are being added to 
SAP Business One from WooCommerce.

The customer created here is Jeannie Watson. The details of the customer is shown in the image below:
![businesspartner-add2](/staticfiles/integration/media/woosapb1/businesspartner-add2.png)

However, users can login to the `WooCommerce portal` and can follow the pathway for viewing the customers, 
created in the WooCommerce Portal. 

WooCommerce Portal >> Users >> All Users >> Customer.  
![businesspartner-add3](/staticfiles/integration/media/woosapb1/businesspartner-add3.png)  
 
  
## Lookup Mapping

For Business Partner sync from WooCommerce to SAP Business One, Lookup mapping is not usually required. 
However, every Business Processes are unique and may require mapping of the [Lookups](/transformation/using-lookups-for-value-exchange/). 

**ProTip:** : After the mapping changes, Reset Generate and Reset Publish the Touchpoint. 
Also click on the Update Lookup tables and Update Configuration in the Agent.
{: .notice--info}

## Attribute Mapping/Transformation

The mapping provided below will enable the user to sync the business partners from WooCommerce to SAP Business One. 
To know more, see [Mapping & Transformation Techniques](/transformation/overview-usecase/).

1.	Mapping for the `ComplexObjectCollection- BusinessPartners`.

![businesspartner-add4](/staticfiles/integration/media/woosapb1/businesspartner-add4.png)

The details of the attribute mapped are given below:
a.	CardCode: Here, Cardcode is a Primary Key (in SAP B1) which is mapped with the customer Id of WooCommerce.
b.	EmailAddress: This Field is mapped with the email address of the customer provided in the WooCommerce.
c.	CardName: On creating a new customer in WooCommerce, the name is provided using two instances, First Name and Last Name. 
    Now while transforming, the name is merged using CONCAT function for storing the entire name in destination application.	

2.	Mapping for the `ComplexObject BPAddresses` in the `Business Partner Add Touchpoint`.  
![businesspartner-add5](/staticfiles/integration/media/woosapb1/businesspartner-add5.png)  
a.	City: Mapping this attribute maps the CITY of the customer in WooCommerce 
b.	Country: Mapping this attribute maps the COUNTRY of the customer in WooCommerce.
c.	AddressName: This attribute maps the customer name whose address is synced.
d.	ZipCode: This attribute maps the postal code of the customer provided in WooCommerce.  
e.	Street: This attribute maps the first field of the Street Address provided in WooCommerce.
f.	State: This maps the STATE of customer provided in WooCommerce.
g.	AddressType: This maps the type of the address, Bill-To or Ship-To.
h.	Block: This maps the second field of the Street Address provided in WooCommerce.
i.	U_TelNo: This maps the telephone number of the customer provided in WooCommerce

**Note: After the mapping changes, Reset Generate and Reset Publish the Touchpoint from the workflow panel. After Republishing, click on the Update Configuration button in the Agent.
These are the default mappings that needs to sync a business partner from WooCommerce to SAP Business One. User can also map different fields as per the user requirement**

## Executing the Workflow Integration

Refer [prerequisites of the integration process]().

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent. [Click here]() to know more about 
    the deploying process of a workflow.
2.	Navigate to the Workflow Panel in the agent and click Start `Sync Button` for executing the Process.
3.	Once the Execution is finished, click `Resync Button` in the agent.

![businesspartner-add6](/staticfiles/integration/media/woosapb1/businesspartner-add6.png) 

4.	The Resync Panel shows the Success Result in the agent. The Users can also trigger or deploy the workflow from the 
    cloud Portal by clicking on the run button. For more details [Click Here]().

![businesspartner-add7](/staticfiles/integration/media/woosapb1/businesspartner-add7.png) 

## Integration Data Survey

The user can survey the data by viewing the [Processed Snapshot]()from the node level of the workflow.  
![businesspartner-add8](/staticfiles/integration/media/woosapb1/businesspartner-add8.png)  
 
This Snapshot View displays the successful execution of the workflow. The Business Partner with the source id 
384 is successfully synced in SAP Business One.

## Post-Conditions

The user can see the data synced in the SAP Business One by viewing the Business Partner Module in the SAP Application.

Open the SAP Business One application and navigate through the Module>>Business Partners>>Business Partner Master Data. 
The Module Opens, enter the customer id to view the synced business partners.

![businesspartner-add9](/staticfiles/integration/media/woosapb1/businesspartner-add9.png) 

## Frequency of Use

The user can execute the Integration through workflow as and when required. 

## Troubleshooting

1.	Property `U_DataSource of BusinessPartner` is invalid.
![businesspartner-add10](/staticfiles/integration/media/woosapb1/businesspartner-add10.png) 

Solution: `U_DataSource` being a custom field, needs to have an UDF created for the value that could be stored. 
For troubleshooting this error, user needs to create an UDF in SAP Business One environment.
![businesspartner-add11](/staticfiles/integration/media/woosapb1/businesspartner-add11.png)

The UDF should be created in the mentioned pathway: MasterData>>BusinessPartner>> BusinessPartner

2.	Property `U_ReturnEntityId of BusinessPartner` is invalid
 ![businesspartner-add12](/staticfiles/integration/media/woosapb1/businesspartner-add12.png)

Solution:U_ReturnEntityId being a custom field, needs to have an UDF created for the value that could be stored. 
For troubleshooting this error, user needs to create an UDF in SAP Business One environment.  
 ![businesspartner-add13](/staticfiles/integration/media/woosapb1/businesspartner-add13.png)

The UDF should be created in the mentioned pathway: MasterData>> BusinessPartner>>BusinessPartner.

**Note: Once all the UDFs are created, users are suggested to restart the DI Server mandatorily and Resync the failed the data.**