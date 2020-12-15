## Overview

The package **SAP Business One - WooCommerce B2C & B2B** will let you integrate the pre-implemented ProcessFlows for your business processes integrations, seamlessly reducing your time and effort in configuring and design both for your B2C and B2B Business Module. 
One -Click installation allows you to access the packaged ProcessFlows designs and mappings. Amplify your revenue numbers and growth with Packages. 
Just Install, Deploy and Execute to integrate your ProcessFlows inbuilt in your package.

## Additional Information

- Version Number – 1.0.0 
- Package Name - Woocommerce and SAP Business One 
- Created By –  INSYNC Solutions
- Last Modified - 08/12/2020 07:23:30 PM (Date & Time)
- Apps Used in the Package – SAP Business One & WooCommerce

## Package Key Features

**SAP Business One - WooCommerce** will let you integrate all your business flows keeping and maintaining the complete transparency of your business integration. 
Checkout the Key Features of this package, listed below:

1. Includes B2B & B2C Support: This package supports and comprises of the ProcessFlows both B2B and B2C at one place supporting both type of Business Module.
2. Easy Package Sharing & Installation: Two step Package Sharing, and One Click Installation lets you share and unzip your packages with ease and reduces time and effort, encouraging Citizen Integration. Know more on [Processflow Packaging](https://docs.appseconnect.com/processflow/processflow-packaging-overview/)
3. Automated Business Cycle Integration: Lets you just to plug and play every cycle of your business process automatically 
4. Pre-Implemented mappings: The process flows in this [package] are pre-implemented with all the mappings required for integrating your ProcessFlow minimizing the manual efforts. However, you are always welcome in altering the [mappings](https://docs.appseconnect.com/processflow/customising-attribute-mapping/) as per your business process. 

## Package Tech Specification

This package consists the following configurations details:

1.	App Authentication Mechanism
2.	Packaged Processflows & Dependencies
3.	Action Filter configurations 
4.	LookUp Mapping
5.	Extensions & Add-On Installation Details
6.	Environment Setup Parameter 
7.	Deployment Setup 

## App Authentication Mechanism

The applications used in the package requires to be authenticated for its integration. 
Check out the list of our [pre-packaged connectors](https://docs.appseconnect.com/connectors/overview-of-application-connectors/) in which, the applications used in this package is listed, in order to view the authentication mechanism of the applications used in the package. 
Study your required application’s document to know about the Authentication and its API details.

This package comprises of the following Applications.

- [SAP Business One](https://docs.appseconnect.com/connectors/Sap-Business-One/)
- [WooCommerce](https://docs.appseconnect.com/connectors/woocommerce/) 

If you have an application which has an application connector present on platform, you as a user require very small effort to configure the connector to work correctly with the application. 

## Packaged Processflows & Dependencies:

This package comes with pre-designed and mapped Processflows between your chosen applications which will enable you to Install, Deploy and Execute your flow seamlessly. With pre-implemented lookups and mappings, this Package will minimize your efforts to design and map your flow accordingly.  
This package will not require any additional Configurational Master Data Sync which reduces additional Time and Efforts.

Given below are the Transactional Data Configuration Details:


1. **ProcessFlow - Customer Add**

i.	Flow Description: This ProcessFlow will integrate the newly on boarded Customer and their details in your business line-up. The customers will be added from SAP Business One to WooCommerce. The following Customer details will be synced: CardCode, First Name, Last Name, Email, Username, Password, Billing Address, Shipping Address.
Your ProcessFlow is also featured with a SyncBack as a Post Acknowledgement Task that returns back SyncFlag status & ReturnEntityId back to SAP Business One.

ii.	Dependency flow: NA


2. **ProcessFlow - Customer Update**

i.	Flow Description: This ProcessFlow is featured to updated the added Customer Details from SAP Business One to WooCommerce. The following Customer details will be updated: First Name, Last Name, Email, Billing Address, Shipping Address. 

ii.	Dependency flow: ProcessFlow Customer Add


3. **ProcessFlow - Business Partner Add**

i.	Flow Description: This ProcessFlow is featured integrate the newly on boarded Customer and their details. The customers will be added from WooCommerce to SAP Business One. The following Customer details will be synced: Customer Id, Email, Name, Contact No, Customer Address, SyncFlag & ReturnEntityId.

ii.	Dependency flow: NA


4. **ProcessFlow - Business Partner Update**

i.	Flow Description: This ProcessFlow is featured to update the added Customer details from WooCommerce to SAP Business One. The following Customer details will be updated: Customer Id, Email, Name, Contact No, Customer Address, SyncFlag & ReturnEntityId.

ii.	Dependency flow: ProcessFlow - Business Partner Add


5. **ProcessFlow - Company Add**

i.	Flow Description: This ProcessFlow is featured to ADD new onboarded Companies from SAP Business One to WooCommerce for your B2B business. The following details of the Companies will be added: CardCode, First Name, Last Name, Email, Username, Password, Billing Address, Shipping Address.
Your ProcessFlow is also featured with a SyncBack as a Post Acknowledgement Task that returns back SyncFlag status & ReturnEntityId back to SAP Business One.

ii.	Dependency flow: NA


6. **ProcessFlow - Company Update**

i.	Flow Description: This ProcessFlow is featured to update the onboarded Companies from SAP Business One to WooCommerce for your B2B business. The following details of the Companies will be updated: EntityReturnId, First Name, Last Name, Email, Billing Address, Shipping Address.

ii.	Dependency flow: ProcessFlow - Company Add


7. **ProcessFlow - Contact Person Add**

i.	Flow Description: This ProcessFlow is featured to sync Contact Persons of the Companies Added. The Operation will be performed from SAP Business One to WooCommerce. The following details will be added: Email, Username & Password.
Your ProcessFlow is also featured with a SyncBack as a Post Acknowledgement Task that returns back SyncFlag status & ReturnEntityId back to SAP Business One.

ii.	Dependency flow: ProcessFlow - Company Add


8. **ProcessFlow - Contact Person Update**

i.	Flow Description: This ProcessFlow is featured to sync the updated details of the Contact Persons added. The Operation will be performed from SAP Business One to WooCommerce. The following details will be updated: Email, Username & Password.

ii.	Dependency flow: ProcessFlow - Company Add ; ProcessFlow - Contact Person Add.


9. **ProcessFlow - Product Add [Simple]**

i.	Flow Description: This ProcessFlow is featured to sync Simple Products from SAP Business One to WooCommerce. The following details of the simple products will synced: Product Name, SKU, Product Description, Product Remarks, Product Type, Wieght, Regular Price & Product Dimensions.
Your ProcessFlow is also featured with a SyncBack as a Post Acknowledgement Task that returns back the ReturnEntityId back to SAP Business One.

ii.	Dependency flow: NA


10. **ProcessFlow - Product Add**

i.	Flow Description: This ProcessFlow is featured to sync Simple Products from WooCommerce to SAP Business One. The following details of the simple products will be synced: Item Code, Item Name, Product Description, Wieght, Price, Currency, PriceList, Product Dimensions & ReturnEntityId.

ii.	Dependency flow: NA


11. **ProcessFlow - Product Update**

i.	Flow Description: This ProcessFlow is featured to sync Simple Products from SAP Business One to WooCommerce. The following details of the simple products will be synced: Item Name, Product Description, Wieght, Regular Price, Stock Quantity, Product Dimensions & ReturnEntityId.

ii.	Dependency flow: ProcessFlow - Product Add [Simple]


12. **ProcessFlow - PriceLists Add**

i.	Flow Description: This ProcessFlow is featured to sync the Price Lists from SAP Business One to WooCommerce. The integration process is featured to sync only the list to WooCommerce. 

ii.	Dependency flow: NA


13. **ProcessFlow - Product PriceLists Assign**

i.	Flow Description: This ProcessFlow is featured to assign the PriceLists to the respective items from SAP Business One to WooCommerce. The integration process wil sync and assign the Pricelist Id with Product SKU and its Price.

ii.	Dependency flow: ProcessFlow - PriceLists Add


14. **ProcessFlow - Stock Update**

i.	Flow Description: This ProcessFlow is featured to update the Stocks On Hand. The operation will be intergated from SAP Business One to WooCommerce. The ReturnEntityId along the with the stocks quantity will be synced to WooCommerce.

ii.	Dependency flow: ProcessFlow - Product Add [Simple]


15. **ProcessFlow - Sales Order Add**

i.	Flow Description: This ProcessFlow is featured to add B2C Sales Orders from WooCommerce to SAP Business One. This ProcessFlow is featured to sync the following details: Customer Details, Order Document Date, Order Id, Order Total, Item Details, Tax Details, Discount.

ii.	Dependency flow: ProcessFlow - Business Partner Add ; ProcessFlow - Customer Add ; ProcessFlow - Product Add [Simple]


16. **ProcessFlow - Shipment Status Add**

i.	Flow Description: This ProcessFLow is featured to sync the Shipment Status agaisnt your generated order from SAP Business One to WooCommerce. The ProcessFlow will sync the Shipment Status against Order ReturnEntityId.

ii.	Dependency flow: ProcessFlow - Sales Order Add


Integrating these ProcessFlows will require [creation of Custom fields UDF's](https://help.sap.com/doc/e8d8abefb22343a586d744db9cba0bcb/9.3/en-US/How_to_Create_User_Defined_Fields_and_Tables.pdf) and installation of Stored Procedures, which would be provided On-Demand.


## Action Filter configurations:

ProcessFlows in this package are pre-configured with the action filters that are required to GET and POST data from Source to Destination Application minimizing the implementation time. 
Have a glance on the [Action Filter](https://docs.appseconnect.com/processflow/manage-actions-actionfilters-errorfilters/) documentation, for more information.

## LookUp Mapping:
Your contains multiple Processflows and few of those Processflows may require mapping of specific values in certain fields as lookups. Few Processflow may need you to create these lookups manually in the Reference Tables of the APPSeCONNECT Repositories. 
Follow the documentation of Reference Tables for reference. The lookups listed below needs to be created in reference tables for the below mentioned ProcessFlow. The list is put based on the format given below:

[Processflow Name][Reference Table]

•  

• 

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











