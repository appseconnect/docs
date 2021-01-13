## Overview

The package **SAP Business One - Shopify B2C** will let you integrate the pre-implemented ProcessFlows for your business processes integrations, seamlessly reducing your time and effort in configuring and design both for your B2C and B2B Business Module. 
One -Click installation allows you to access the packaged ProcessFlows designs and mappings. Amplify your revenue numbers and growth with Packages. 
Just Install, Deploy and Execute to integrate your ProcessFlows inbuilt in your package.

## Additional Information

- Version Number – 1.0.0 
- Package Name - Shopify and SAP Business One 
- Created By –  INSYNC Solutions
- Last Modified - 23/12/2020 04:23:30 PM (Date & Time)
- Apps Used in the Package – SAP Business One & Shopify

## Package Key Features

**SAP Business One - Shopify** will let you integrate all your business flows keeping and maintaining the complete transparency of your business integration. 
Checkout the Key Features of this package, listed below:

1. Easy Package Sharing & Installation: Two step Package Sharing, and One Click Installation lets you share and unzip your packages with ease and reduces time and effort, encouraging Citizen Integration. Know more on [Processflow Packaging](https://docs.appseconnect.com/processflow/processflow-packaging-overview/)
2. Automated Business Cycle Integration: Lets you just to plug and play every cycle of your business process automatically 
3. Pre-Implemented mappings: The process flows in this package are pre-implemented with all the mappings required for integrating your ProcessFlow minimizing the manual efforts. However, you are always welcome in altering the [mappings](https://docs.appseconnect.com/processflow/customising-attribute-mapping/) as per your business process. 
4. Multiple Product Types Support: This package will enable you to sync product of types: Configurable products, bundle products, virtual products, downloadable products etc.

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

- [SAP Business One](https://docs.appseconnect.com/connectors/Sap-Business-One/)
- [Shopify](https://docs.appseconnect.com/connectors/shopify/) 

## Packaged Processflows & Dependencies:

This package comes with pre-designed and mapped Processflows between your chosen applications which will enable you to Install, Deploy and Execute your flow seamlessly. With pre-implemented lookups and mappings, this Package will minimize your efforts to design and map your flow accordingly.  
This package will not require any additional Configurational Master Data Sync which reduces additional Time and Efforts.

Given below are the Transactional Data Configuration Details:

- **ProcessFlow - Customer Add**
 
i.	Flow Description: This ProcessFlow will integrate the newly on boarded Customer and their details in your business line-up. The following Customer details will be synced: Customer ID, Name, Email Id, City, Country Address, and Telephone from SAP Business One to Shopify .

ii.	Dependency flow: Not Applicable 


- **ProcessFlow: Business Partner Add**

i.	Flow Description: This ProcessFlow will integrate the newly on boarded Customer and their details in your business line-up. The following Customer details will be synced: Customer ID, Name, Email Id, City, Country Address, and Telephone. 

ii.	Dependency flow: Not Applicable 


- **ProcessFlow: Business Partner Update**

i.	Flow Description: This ProcessFlow will integrate the updated details of each Business partners in your business line-up. The following Customer details will be synced: Customer ID, Name, Email Id, City, Country Address, and Telephone. 

ii.	Dependency flow: Business Partner Add


- **ProcessFlow: Product Add [With Variants]** 

i.	Flow Description: This ProcessFlow is featured to sync the following details of Products along with its variants to your Shopify application. The details are: Product SKU, Product Name, Price, Inventory Name, Variant Details, Product type, weight & product Description etc. 
This ProcessFlow is also equipped with a Post Acknowledgement flow that sync back Shopify UDO details back to SAP Business One.

ii.	Dependency Flow: Not Applicable 


**ProcessFlow - Item  Add** 

i.	Flow Description: This ProcessFlow is featured to add new incoming Products from Shopify to SAP Business One. This ProcessFlow will only add the following details of the Products: Product Name, Product SKU, Description, Price, Currency & PriceLists.
This ProcessFlow is also equipped with a Post Acknowledgement flow that sync back  UDO details back to Shopify.

ii.	Dependency Flow: NA


-	**ProcessFlow - Draft Sales Order Add:** 

i.	Flow Description: This ProcessFlow is featured to sync the following details of Drafted Sales Orders from Shopify to the SAP Business One. The details are: Order Id, Customer Details, Product details, Product Unit Price, Ordered Quantity, Tax Code & VAT group details, Sales Order generation date and shipment details. 

ii.	Dependency Flow: Business Partner Add, Product Add. Stock Update.
The Sales Order ProcessFlow is equipped of integrating the details of the customers and products. The above-mentioned dependencies need to be integrated first so as to avoid document mismatch errors. 


-	**ProcessFlow - Sales Order Add:** 

i.	Flow Description: This ProcessFlow is featured to sync the following details of each Sales Orders from Shopify to the SAP Business One. The details are: Order Id, Customer Name, Order Total, Discount Percent, Product details, Product Unit Price, Ordered Quantity, Tax Code & VAT Group details, Sales Order generation date and shipment details. 

ii.	Dependency Flow: Business Partner Add, Product Add, Stock Update. 
The Sales Order ProcessFlow is equipped of integrating the details of the customers and products. The above-mentioned dependencies need to be integrated first so as to avoid document mismatch errors. 


-	**ProcessFlow - Incoming Payment Add** 

i.	Flow Description: This ProcessFlow is featured to sync the Incoming Payments against the Sales Order Generated from Shopify to SAP Business One. The flow syncs the related CardCode details, Transfer Account Details, Transfer Date & Invoice Details.

ii.	Dependency Flow: Order Add, Order Fulfillment Add, A/R Invoice Add


- **ProcessFlow - Order Fulfillment Add**

i.	Flow Description: This ProcessFlow is featured to sync the Order Fulfillment (Shipment details) agaisnt your generated order from SAP Business One to Shopify. The ProcessFlow will sync the Shipment Location, Order Id & Quantity & the Shipment Tracking Number.

ii.	Dependency flow: ProcessFlow - Sales Order Add 


- **ProcessFlow - Price Sync**

i.	Flow Description: This ProcessFlow is featured to sync the prices of the Variants from SAP Business One to Shopify. The Processflow syncs the following details: Variants Web ID & Variants Price details.

ii.	Dependency flow: ProcessFlow - Product Add [With Variants]


-	**ProcessFlow - A/R Invoice Add:** 

i.	Flow Description: This ProcessFlow is featured to sync the A/R Invoices from SAP Business One to Shopify, raised against the Sales Order Generated . The flow syncs the Reserve Invoice, Customer Details, Customer Name, Tracking Number, Invoice Id,  Item SKU, Quantity, Order Details, Tax Details.

ii.	Dependency Flow: Business Partner Add, Product Add [With Variants], Stock Update, Sales Order Add 
The A/R Invoice Add ProcessFlow is equipped of integrating the details of the order Invoice receipt. The above-mentioned dependencies need to be integrated first so as to avoid document mismatch errors.


- **ProcessFlow - Stock Update**

i.	Flow Description: This ProcessFlow is featured to update the VAriants Stocks in Inventory. The operation will be integrated from SAP Business One to Shopify. The following details will be synced: Inventory Location Id, Inventory Item Id, Stock Count.

ii.	Dependency flow: ProcessFlow - Product Add [With Variants]


Integrating these ProcessFlows will require [creation of Custom fields UDF's](https://help.sap.com/doc/e8d8abefb22343a586d744db9cba0bcb/9.3/en-US/How_to_Create_User_Defined_Fields_and_Tables.pdf) and installation of Stored Procedures, which would be provided On-Demand.


## Action Filter configurations:

ProcessFlows in this package are pre-configured with the action filters that are required to GET and POST data from Source to Destination Application minimizing the implementation time. 
Have a glance on the [Action Filter](https://docs.appseconnect.com/processflow/manage-actions-actionfilters-errorfilters/) documentation, for more information.


## LookUp Mapping:
Your Package contains multiple Processflows and few of those Processflows may require mapping of specific values in certain fields as lookups. Few Processflow requires to create these lookups manually in the Reference Tables of the APPSeCONNECT [Repositories](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/). 
Follow the documentation of [Reference Tables](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/#reference-tables) for reference. The lookups listed below needs to be created in reference tables for the below mentioned ProcessFlow. 
The list is put based on the format given below:

[Processflow Name][Reference Table]

•  [Sales Order Add, Draft Sales Order Add][TAX]

•  [Sales Order Add, Draft Sales Order Add][Frieght]

•  [Incoming Payment Add][Transfer Account]

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







