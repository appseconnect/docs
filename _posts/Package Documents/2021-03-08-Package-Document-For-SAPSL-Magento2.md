## Overview

The package **Magento2.X  - SAP Business One Service Layer B2C** will let you integrate the pre-implemented ProcessFlows for your business processes integrations, seamlessly reducing your time and effort in configuring and design. 
One -Click installation allows you to access the packaged ProcessFlows designs and mappings. Amplify your revenue numbers and growth with Packages. 
Just Install, Deploy and Execute to integrate your ProcessFlows inbuilt in your package.

## Package Key Features

**SAP Business One S/L- Magento2 B2C** will let you integrate all your business flows keeping and maintaining the complete transparency of your business integration. 
Checkout the Key Features of this package, listed below:

1.	Easy Package Sharing & Installation: Two step Package Sharing, and One Click Installation lets you share and unzip your packages with ease and reduces time and effort, encouraging Citizen Integration. Know more on [Processflow Packaging](https://docs.appseconnect.com/processflow/processflow-packaging-overview/)
2.	Automated Business Cycle Integration: Lets you just to plug and play every cycle of your business process automatically 
3.	Pre-Implemented mappings: The process flows in this package are pre-implemented with all the mappings required for integrating your ProcessFlow minimizing the manual efforts. However, you are always welcome in altering the [mappings](https://docs.appseconnect.com/processflow/customising-attribute-mapping/) as per your business process. 
4.	Easy integrations of Bundled and Configurable products: This package will let you sync the Bundled and Configurable Products if sold within your Business Process. The Configurations and Mappings will be pre-implemented for its integration process.

## Package Setup

You are few steps away from UNBOXing this package on your APPSeCONNECT Organisation. Check out the [Installation Manual](https://docs.appseconnect.com/processflow/processflow-package-installation/) for more details.
Your installed package will be available in the **Installed Process Folder**.

Study this documentation for the Configuration, Deploy & the Execution details.

## App Authentication Mechanism

The applications used in the package requires to be authenticated for its integration. 
Check out the list of our [pre-packaged connectors](https://docs.appseconnect.com/connectors/overview-of-application-connectors/) in which, the applications used in this package is listed, in order to view the authentication mechanism of the applications used in the package. 
Study your required application�s document to know about the Authentication and its API details.

This package comprises of the following Applications.

- [SAP Service Layer](https://docs.appseconnect.com/connectors/Sap-Business-One-Service-Layer/) (S/L 9.0)
- [Magento 2](https://docs.appseconnect.com/connectors/magento2/) (>=2.0.0.0) 

## Packaged Processflows & Dependencies:

This package comes with pre-designed and mapped Processflows between your chosen applications which will enable you to Install, Deploy and Execute your flow seamlessly. With pre-implemented lookups and mappings, this Package will minimize your efforts to design and map your flow accordingly.  
Data Configuration is broadly classified into Master Data Configuration & Transactional Data Configuration. Your package may require both type of Data Configuration Processflows or simply transactional data Configuration, depending on your chosen application.

Given below are the Master Data Configuration Details:

� Configuration Data Add [Attribute Set]

This master data syncs the configuration details of the Product Attribute Sets. 

� Configuration Data Add [Attributes]

This master data syncs the configuration details of the Product Attributes. 

� Configuration Data Add [Attribute Options]

This master data syncs the configuration details of the Product Attribute Options. 

� Configuration Data Add [TaxClass]

This master data syncs the configuration details of the Product Tax Classes. 

� Configuration Data Add [Country State]

This master data syncs the configuration details of Countries and States. 

� Configuration Data Add [Website]

This master data syncs the configuration details of the application websites.

� Configuration Data Add [Category] 

This master data syncs the configuration details of the Product Categories. 

� Configuration Data Add [Customer Group]

This master data syncs the configuration details of the Customer Groups. 


Given below are the **Transactional Data** Configuration Details:


- **Business Partner Add**

This ProcessFlow will integrate the newly on boarded Customer and their details in your business line-up from Magento 2 to SAP S/L. The following Customer details will be synced: CardCode as Customer ID, Name, Email Id, Address, Street, Block, ZipCode, City, Country, State, Telephone &  Address Type. 



- **PF-Customer Add [Company]**

This ProcessFlow will integrate the newly on boarded Customer and their details in your business line-up from SAP Business One S/L to Magento2. The following Customer details will be synced: Customer Group ID, First Name, Last Name, Email Id, Store Id, Website Id, City, Country ID, Telephone, Post Code, address name, street, region_id, Default Shipping, Default Name, street & Gender.



- **Simple Product Add [Magento 2.x to SAP SL]**

This Processflow is equipped double flows that integrates the item and the item meta data separately from Magento2 to SAP S/L.
The flow that integrates the Item Master Data of Simple Product syncs the following details: ItemCode, ItemName, PriceLists, Price, Currency, U_WebID & User Text.

The Flow that integrates the Meta Data of the Simple Product syncs the following details: Child Item Code, Child Item Name, DocEntry, Child Item SKU, Child Item Web ID, Child Item Attribute Set, Child Item IsVisible, Website Name, Website Code, Product Attribute Name, Product Attribute Id,
Web Product Catalogue ID, Web Product Catalogue SKU & Item Tax Class.



- **CONFIGURABLE PRODUCT ADD [Magento 2.0 to SAP SL]**

This Processflow is equipped with multiple flows that integrates the ADD operation of Configurable Products both for normal Items & Web Items. Along with Configurable Products, this processflow adds the Simple Products as well from Magento2 to SAP Business One S/L.

The flow that adds the Web Item Master Data of Configurable Products syncs the following data: Child Item Code, Child Item Code, Item Code, Item Name, Doc Entry, Item SKU, Item Web ID, Product Type, Attribute Set, Website Name, Website Code, Product Attribute Name, Product Attribute ID, Product Attribute Catalogue ID 
& Tax Class. This flow also add the Item Master Data of Configurable Products which syncs the following data: Item Code, Item Name, Pricelists, Item Price, Currency, Web Id & Item Description as User Text.

This Processflow also add the latest Simple Products which syncs the following data:  Item Code, Item Name, Pricelists, Item Price, Currency, Web Id, Weight & Item Description as User Text.
This Flow also integrates the Meta Data of the Simple Product that syncs the following details: Child Item Code, Child Item Name, DocEntry, Child Item SKU, Child Item Web ID, Child Item Attribute Set, Child Item IsVisible, Website Name, Website Code, Product Attribute Name, Product Attribute Id,
Web Product Catalogue ID, Web Product Catalogue SKU & Item Tax Class.



- **PF - Grouped Product Add [Magento 2.x to SAP SL]**

This Processflow is equipped with multiple flows that integrates the ADD operation of Grouped Products both for normal Items & Web Items from Magento 2 to SAP Business One S/L.

The flow that adds the Web Item Master Data of Grouped Products syncs the following data: Child Item Code, Child Item Code, Child Item Group, Item Code, Item Name, Doc Entry, Item SKU, Item Web ID, Product Type, Attribute Set, Website Name, Website Code, Product Attribute Name, Product Attribute ID, Product Attribute Catalogue ID 
& Tax Class.
This Processflow also add the latest Simple Products which syncs the following data:  Item Code, Item Name, Pricelists, Item Price, Currency, Web Id, Weight & Item Description as User Text.


- **PF - Sales Order Add**

This Processflow is equipped of integrating Sales Orders from Magento2 to SAP Business One S/L. The following data are synced with this processflow: Document Date, Document Due Date, CardCode, Contact Person Code, Document Object Code, Item Code, Quantity, Web Order Item Id, Tax Code,
Unit Price, VAT Group, Discount Percent, Num at Card, WebOrderId & Sync Flag.


- **PF-  Invoice Add**

This Processflow is equipped of integrating Invoices from SAP Business One S/L to Magento2. The following data will be synced with this processflow: Order Item ID, Qty, SourceKey, Capture & Comments.
This Processflow is also equipped with post acknowledgement flow that updates back the InvoiceId back to SAP Business One S/L.


- **PF- A/R Down Payment Invoice Add**

This Processflow is equipped of integrating A/R Downpayment Invoices from Magento2 to SAP Business One S/L. The following data will be synced with this processflow: DocType, DocDate, DocDueDate, NumAtCard, DocTotal, CardCode, DownPaymentType, InvoiceId, Invoice Line Details, ShipToCode, PayToCode etc.


- **Delivery/Shipment Add from Magento 2 to SAP SL**

This Processflow is equipped of integrating Delivery/Shipment details from Magento2 to SAP Business One S/L. The following data will be synced with this processflow: DocDate, DocDueDate, CardCode, CardName, Delivery Id, ItemCode, Quantity, Price, Taxcode, VatGroup, BaseLine, BaseType, BaseEntry, Expense Code, LineTotal, TaxCode, VatGroup, BaseDocEntry, BaseDocType, BaseDocLine,
Tracking Number & Invoice ID.


- **PF -Simple Product Add [SAP S/L to Magento 2.x]**

This processflow is equipped of integrating Simple Products from SAP Business One S/L to Magento 2. The following details of the products will be added: Product SKU, name, price, attribute_set_id, attribute code, value, Product Type, status, 
Product Visibility, Weight & SourceKey.
This Processflow is also equipped with a post acknowledgement flow that updates the U_SyncFlag & U_WebID for the existing items.


- **PF-Configurable Product Add [SAP S/L to Magento 2]**

This Processflow is eqipped with multiple flow that integrates both the Simple Products and Configurable Products from SAP Business One S/L to Magento 2.

The flow for adding Simple Products will be integrated first with following data: Product SKU, name, price, attribute_set_id, attribute code, value, Product Type, status, 
Product Visibility, Weight & SourceKey.

The flow for adding Configurable Products will sync the following data: Product SKU, name, price, status, attribute_set_id, Product Visibility, Product Type, Weight, attribute code, value,
Item SKU, Product Link Type, Linked Product SKU, SourceKey, Configurable Product Option, Configurable product attribute id, label & Value Index.


- **PF-Grouped Product Add [SAP S/L to Magento 2]**

This Processflow is eqipped with multiple flow that integrates both the Simple Products and Grouped Products from SAP Business One S/L to Magento 2.

The flow for adding Simple Products will be integrated first with following data: Product SKU, name, price, attribute_set_id, attribute code, value, Product Type, status, 
Product Visibility, Weight & SourceKey.

The flow for adding Configurable Products will sync the following data: Product SKU, name, price, status, attribute_set_id, Product Visibility, Product Type, Weight, attribute code, value,
Item SKU, Product Link Type, Linked Product SKU, Position & SourceKey.


- **PF - Shipment Upload**

This Processflow will integrate the generated Shipment Document from SAP Business One S/L to Magento2. The following data will be integrated: Order Item Id, Quantity & SourceKey.


- **Stock Update [SAP S/L TO MAGENTO 2.x]**

This Processflow will integrate the updated inventory stocks from SAP Business One S/L to Magento2. The following data will be integrated: Stock Quantity details against every Item Id getting updated.


## LookUp Mapping:
Your Package contains multiple Processflows and few of those Processflows may require mapping of specific values in certain fields as lookups. You are required to create these lookups manually in the Reference Tables of the APPSeCONNECT [Repositories](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/). 
Follow the documentation of [Reference Tables](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/#reference-tables) for reference. The lookups listed below needs to be created in reference tables for the below mentioned ProcessFlow. 
The list is put based on the format given below:

[Processflow Name][Reference Table]

�  [ Customer Add  ][CustomerGroup]

�  [ Simple Product Add (Magento 2.x to SAP SL)][WebsitePriceList]

�  [ Simple Product Add (Magento 2.x to SAP SL)][Currency]

�  [ CONFIGURABLE PRODUCT ADD (Magento 2.0 to SAP SL)][WebsitePriceList]

�  [ CONFIGURABLE PRODUCT ADD (Magento 2.0 to SAP SL)][Currency]

�  [ PF - Grouped Product Add (Magento 2.x to SAP SL)][WebsitePriceList]

�  [ PF - Grouped Product Add (Magento 2.x to SAP SL)][Currency]


## Extension Configuration Information:

This package comprises of the following prepackaged applications namely **SAP Business One Service Layer** that requires to configure the required extension & Add Ons. For SAP Business One S/L, you are required to use the Addon for SAP Business One.
Given below is the checklist of Add On�s required for this Package.

**SAP B1 Application**

�	Version: Supported SAP B1 Version are:

    - SAP B1 9.1
    
    - SAP B1 9.2

    - SAP B1 9.3V & Above

�	Add On: 

    - APPSeCONNECT_2.4.3.0_32 (For 32 Bit supported SAP Application)

    - APPSeCONNECT_2.4.10.0_64 (For 64 Bit supported SAP Application)

�	Description: This Add On is used for Web Item Master Data Configuration (created under Inventory Module) for adding web product details required for integration.


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