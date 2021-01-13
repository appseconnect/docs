## Overview

The package **Dynamics NAV - Magento2 B2C** will let you integrate the pre-implemented ProcessFlows for your business processes integrations, seamlessly reducing your time and effort in configuring and design both for your B2C and B2B Business Module. 
One -Click installation allows you to access the packaged ProcessFlows designs and mappings. Amplify your revenue numbers and growth with Packages. 
Just Install, Deploy and Execute to integrate your ProcessFlows inbuilt in your package.

## Additional Information

- Version Number – 1.0.0 
- Package Name - Dynamics NAV - Magento2 B2C
- Created By –  INSYNC Solutions
- Last Modified - 23/12/2020 04:23:30 PM (Date & Time)
- Apps Used in the Package –  Dynamics NAV & Magento2 

## Package Key Features

**Dynamics NAV - Magento2 B2C** will let you integrate all your business flows keeping and maintaining the complete transparency of your business integration. 
Checkout the Key Features of this package, listed below:

1. Easy Package Sharing & Installation: Two step Package Sharing, and One Click Installation lets you share and unzip your packages with ease and reduces time and effort, encouraging Citizen Integration. Know more on [Processflow Packaging](https://docs.appseconnect.com/processflow/processflow-packaging-overview/)
2. Automated Business Cycle Integration: Lets you just to plug and play every cycle of your business process automatically between your selected applications Magento2 & Dynamics NAV.
3. Pre-Implemented mappings: The process flows in this [package] are pre-implemented with all the mappings required for integrating your ProcessFlow minimizing the manual efforts. However, you are always welcome in altering the [mappings](https://docs.appseconnect.com/processflow/customising-attribute-mapping/) as per your business process. 
4. Multiple Product Types Support: This package will enable you to sync product of types: Configurable products, bundle products & Simple Products etc.

## Package Tech Specification

This package consists the following configurations details:

1.	App Authentication Mechanism
2.	Packaged Processflows & Dependencies
3.	Action Filter configurations 
4.	LookUp Mapping
5.	Extensions & Add-On Installation Details
6.  Adapter Compatibility Check
7.	Environment Selection 
8.	Deployment 


## App Authentication Mechanism

The applications used in the package requires to be authenticated for its integration. 
Check out the list of our [pre-packaged connectors](https://docs.appseconnect.com/connectors/overview-of-application-connectors/) in which, the applications used in this package is listed, in order to view the authentication mechanism of the applications used in the package. 
Study your required application’s document to know about the Authentication and its API details.

This package comprises of the following Applications.

- [Dynamics NAV](https://docs.appseconnect.com/connectors/Dynamicsnav/)
- [Magento2](https://docs.appseconnect.com/connectors/magento2/) 

## Packaged Processflows & Dependencies:

This package comes with pre-designed and mapped Processflows between your chosen applications which will enable you to Install, Deploy and Execute your flow seamlessly. With pre-implemented lookups and mappings, this Package will minimize your efforts to design and map your flow accordingly.  
Data Configuration is broadly classified into Configuration Data Configuration & Transactional Data Configuration. Your package may require both type of Data Configuration Processflows or simply transactional data Configuration, depending on your chosen application.

Given below are the Master Data Configuration Details:

• Configuration Data Add [Attribute Sets] 
Description: This master data syncs the configuration details of the Product Attribute Sets. 

• Configuration Data Add [Attributes]
Description: This master data syncs the configuration details of the Product Attributes. 

• Configuration Data Add [Attribute Options]
Description: This master data syncs the configuration details of the Product Attribute Options. 

• Configuration Data Add [Tax Class]
Description: This master data syncs the configuration details of the Product Tax Classes. 

• Configuration Data Add [WebSites]
Description: This master data syncs the configuration details of the application websites.

• Configuration Data Add [Item Categories] 
Description: This master data syncs the configuration details of the Product Categories. 

• Configuration Data Add [CustomerGroup]
Description: This master data syncs the configuration details of the Customer Groups. 

Given below are the Transactional Data Configuration Details:

1. **Customer Add [NAV - Magento2]**

Flow Description: This ProcessFlow will integrate new Customer and their details from Dynamics NAV to Magento2. The following Customer details will be synced: Customer Group ID, First Name, Last Name, Gender, Store Id, Email Id, Customer Address & Contact details and Customer ID.


2. **Customer Update [NAV - Magento2]**

Flow Description: This ProcessFlow will integrate the updated details of the customers added from Dynamics NAV to Magento2. The details that were added while integrating the ProcessFlow **Customer Add [NAV - Magento2]** will only be updated.


3. **Customer Add [Magento2 - NAV]**

Flow Description: This ProcessFlow will integrate the newly on boarded Customer and their details in your business line-up from Magento2 to Dynamics NAV. The following Customer details will be synced: Customer Address Details, Customer Price Group, Customer Discount Group, Customer Number, Phone No, 
Email Details, Website ID. 


4. **Customer Update [Magento2 - NAV]**

Flow Description: This ProcessFlow will integrate the updated details of the customers from Magento2 to Dynamics NAV. The details that were added in the Processflow **Customer Add [Magento2 - NAV]** will only be updated in this flow.



5. **Simple Product Add** 

Flow Description: This ProcessFlow is featured to sync the following details of Simple Products to your Magento2 application from Dynamics NAV. The details are: Product SKU, Product Name, Price, Product Status, Attribute set id, Product type, Attribute Code, attribute Value & Product Weight. 
This processflow is also equipped with a Post-Acknowledgment flow that syncs back the WebId & WebSyncFlag based on the Item No (SKU).



6. **Simple Product Update** 

Flow Description: This ProcessFlow is featured to update the changes of the product details from Dynamics NAV to Magento2. This ProcessFlow will only update the changes of the details that was synced while adding a new simple product. 


7. **Configurable Product Add**

Flow Description: This ProcessFlow syncs all the details of the configurable products from Dynamics NAV to Magento2. The following details will be integrated with this ProcessFlow: Product SKU, Product Name, Price, Product Status, Configurable Product Option Details, Configurable Product Links, Attribute set id, Product type, Attribute Code, attribute Value & Product Weight. 
This processflow is also equipped with a Post-Acknowledgment flow that syncs back the WebId & WebSyncFlag based on the Item No (SKU).



8. **Configurable Product Update**

Flow Description: This ProcessFlow syncs the updated details of each configurable products from Dynamics NAV to Magento2. All the details added while integrating the ProcessFlow **Configurable Product Add** will be updated when triggered this processflow.



9. **Bundle Product Add**

Flow Description: This ProcessFlow syncs all the details bundled products from Dynamics NAV to Magento2. The following details is featured to sync with this processflow: SKU, name, price, status, attribute_set_id, visibility, type_id, attribute code, value, Bundle Product Details & Weight.
This Processflow is also equipped with Post-Acknowledgement flow that updates WebId & WebSyncFlag back to Dynamics NAV.



10.	**Bundle Product Update**

Flow Description: This ProcessFlow syncs all the updated details bundled products from Dynamics NAV to Magento2. All the added bundled products will be updated with the respective updates when triggered the sync.



11. **Product Price :Update**

Flow Description: This ProcessFlow is featured to update the prices of the Products from Dynamics NAV to Magento2. The PRICE is updated for each the Item Numbers that requires the update.


12. **Inventory Update:**

Flow Description: This ProcessFlow is featured to sync and update your warehouse inventory stocks. This ProcessFlow will sync the Quantity and other inventory details the Item Id. 



13. **Sales Order Add:** 

Flow Description: This ProcessFlow is featured to sync the following details of each Sales Orders from your customer facing application to the destination application. The details are: Order Id, Customer Name, Product details, Product Unit Price, Ordered Quantity, Tax, VAT, Discount, Sales Order generation date and shipment details. 


14. **Shipment Add:** 

Flow Description: This ProcessFlow is featured to sync the Shipment docs generated against your Sales Order, from Dynamics NAV to Magento2. This flow syncs the Shipment Tracking Number, Carrier Code along with the ordered item details. 
Shipment Add is also equipped with a Post Acknowledgement task that Updates the WebIncrementId & Sync Back Flag details of Shipment back to Dynamics NAV.


15.	**Invoice Add:** 

Flow Description: This ProcessFlow is featured to sync the Invoices from Dynamics NAV to Magento2, raised against the Sales Order Generated. The flow syncs the Order Id, Ordered Item Details, Quantity etc. 
Invoice Add is also equipped with a Post Acknowledgement task that Updates the WebIncrementId & Sync Back Flag details of Invoice back to Dynamics NAV.



16.	**Special Price Add:** 

Flow Description: This ProcessFlow is featured to Add as well as Update Special Prices from Dynamics NAV to Magento2. The following are the details that will be synced: Price, Store_id, SKU, Start Date & End Date. 


17.	**Tier Price Add:** 

Flow Description: This ProcessFlow is featured to Add as well as Update tier Prices from Dynamics NAV to Magento2. This processflow syncs the following details: Product SKU, Tier Price Value, Customer group id, & Quantity.


## Action Filter configurations:

ProcessFlows in this package are pre-configured with the action filters that are required to GET and POST data from Source to Destination Application minimizing the implementation time. 
Have a glance on the [Action Filter](https://docs.appseconnect.com/processflow/manage-actions-actionfilters-errorfilters/) documentation, for more information.

## LookUp Mapping:
Your Package contains multiple Processflows and few of those Processflows may require mapping of specific values in certain fields as lookups. Few Processflow requires to create these lookups manually in the Reference Tables of the APPSeCONNECT [Repositories](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/). 
Follow the documentation of [Reference Tables](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/#reference-tables) for reference. The lookups listed below needs to be created in reference tables for the below mentioned ProcessFlow. 
The list is put based on the format given below:

[Processflow Name][Reference Table]

• [Sales Order Add][Tax] 

• [Sales Order Add][Frieght]

• [Tier Price Add][Customer Group]

## Extension Configuration Information:

If your package comprises of prepackaged applications namely SAP, SAP ByDesign, Dynamics GP, Dynamics NAV Extension & WooCommerce, you need to configure the required extension & Add Ons. 

Given below is the checklist of Extension & Add On’s required for these applications.

**WooCommerce Application**

•	Version: WooCommerce 2.6 V & Above

•	Extension: insync-wp-rest-filter-1.0.3

•	Description: This is used For API Filtration with respect to Date & Time

**SAP ByDesign Application**

•	Version: SAP ByDesign 19.1.0

•	Extension: `YJT3WBG5Y__V7(INS_AEC_STOCK)`

•	Description: This extension is used for Stock Updating

**SAP B1 Application**

•	Version: Supported SAP B1 Version are:

    - SAP B1 9.1

    - SAP B1 9.2

    - SAP B1 9.3V & Above

•	Add On: 

    - APPSeCONNECT_2.4.3.0_32 (For 32 Bit supported SAP Application)

    - APPSeCONNECT_2.4.10.0_64 (For 64 Bit supported SAP Application)

•	Description: This Add On is used for Web Item Master Data Configuration (created under Inventory Module) for adding web product details required for integration.

**Dynamics GP Application**

•	Version: Supported Dynamics GP Version are:	
	
    - Dynamics GP 2010
    - Dynamics GP 2010 R2
    - Dynamics GP 2013
    - Dynamics GP 2015
    - Dynamics GP 2018
    - Dynamics GP 2016

•	Extension: Compatible eConnect extension is provided with Dynamics GP Version.

•	Description: This extension is used for retrieval of data from GP and push Data to GP.

**Dynamics NAV Application**
•	Version: Supported NAV Versions are:
    - NAV 2009R2
    - NAV 2013 Generic
    - NAV 2013 R2
    - NAV 2015
    - NAV 2016
    - NAV 2017
    - NAV 2017 Multiconnection
    - NAV BC 

•	Extension: NAV Extension comprises of a package containing .fob files & XML files.

**You need to import below listed .fob files**

•	table

•	page

•	code unit

•	xmlport

**You need to import below listed XML Files**

•	Application Id

•	Webservices

**Description: This extension details are enlisted below:**

•	Table: This fob file enables to add additional fields in the NAV Tables, which is required for integration.

•	Page: This fob file enables UI Representation of the Tables in NAV Application

•	Code Unit: This C/AL Code enables to hold backend code of extension modules.

•	XML Port: This enables to import external data source in NAV

•	Application Id: This is a data file, which holds the application Id & application name required for NAV Integration

•	Webservices: This is an XML doc which hold information of webservices for base and extension pages.

## Adapter Compatibility Check:
ProcessFlows in this package have no direct dependencies with Adapter Compatibility. Anytime on deploying your ProcessFlow, the latest adapter set in APPSeCONNECT Portal will be downloaded against the applications selected.

## Environment Selection
This package is pre-implemented with all the configurations and mappings. To deploy the ProcessFlows you are required to select the environment in which your business flow will be deployed. Your Environments are needed to be setup before the deploying process. 
Checkout the details below to setup, your choice of environment.

**On-Premise Setup:**
To download your On-Premise Agent, navigate to the Deploy > Environments > On Premise > Click on the Download Hyperlink. To know more about the installation process, [Click Here](https://docs.appseconnect.com/deployment/Deployment-Configuration/#on-premise-agent-configuration) 
Once the installation process completes, you can view your [OP details Page](https://docs.appseconnect.com/deployment/Environment-Management/). 

**Hosted Setup:**
To add your hosted agent on your organisation, follow the process provided in the [link](https://docs.appseconnect.com/deployment/Deployment-Configuration/#cloud-agent-configuration)
To know more about Hosted Environment, [Click Here](https://docs.appseconnect.com/deployment/Environment-Management/)

## Deployment
Deploying is an essential step for integrating your business flow. Environment needs to have the configuration deployed which drives the integration process. Check the [Deployment Documents](https://docs.appseconnect.com/deployment/overview/) to know about the steps to deploy your flow on your selected environment.

Once deployed, you need to click on the RUN button in the designer page to [execute your flow](https://docs.appseconnect.com/processflow/deploying-and-executing-processfloww/#executing-deployed-processflow). All its execution generates [SNAPSHOTS](https://docs.appseconnect.com/processflow/snapshot-processflow/) that will allow you to monitor the data synced with the execution attempt.
