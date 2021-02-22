## Overview

The package **Dynamics NAV - Shopify B2C** will let you integrate the pre-implemented ProcessFlows for your business processes integrations, seamlessly reducing your time and effort in configuring and design both for your B2C and B2B Business Module. 
One -Click installation allows you to access the packaged ProcessFlows designs and mappings. Amplify your revenue numbers and growth with Packages. 
Just Install, Deploy and Execute to integrate your ProcessFlows inbuilt in your package.

## Additional Information

- Version Number – 1.0.0 
- Package Name - Dynamics NAV - Shopify B2C
- Created By –  INSYNC Solutions
- Last Modified - 23/12/2020 04:23:30 PM (Date & Time)
- Apps Used in the Package – Dynamics NAV & Shopify 

## Package Key Features

**Dynamics NAV - Shopify B2C** will let you integrate all your business flows keeping and maintaining the complete transparency of your business integration. 
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
- [Shopify](https://docs.appseconnect.com/connectors/magento2/) 

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

1. **Customer Add [NAV - Shopify]**

This ProcessFlow will integrate new Customer and their details from Dynamics NAV to Shopify. The following Customer details will be synced: Customer Number, Email, first name, last name, address details and Phone No.


2. **Customer Add [Shopify - NAV]**

This ProcessFlow will integrate new Customer and their details from Shopify to Dynamics NAV. The following details be integrated with this ProcessFlow: Customer No, Name, Address, Postal Code, City, Country Code, Phone No, Email, Customer Price Group, Customer Discount Group,
Warehouse Location Code, VAT Group.


3. **Customer Update [Shopify - NAV]**

This ProcessFlow will integrate the updated details of the customers from Shopify to Dynamics NAV. 
The details that were added from Shopify to NAV will only be updated when this ProcessFlow is synced.


4. **PF - Customer : Update [NAV-Shopify]**

This ProcessFlow will integrate the updated details of the customers from Dynamics NAV to Shopify. The following details will be updated, integrating this flow: email, first_name, last_name.


5. **PF - Product Add [Shopify - NAV]**

This ProcessFlow will you add products from front end and will sync the added to products to Dynamics NAV/BC. The following details will be integrated: Product SKU, Description, Unit Price, Net Weight, Unit of Measure, Product Posting Group (General), Product Posting Group (VAT),
Inventory Posting Group, Web Item Flag,Web item Application ID, Web Item SKU, WebSync FLag, Web Stock Flag, WebTierPriceSyncFlag, WebSpecialPriceSyncFlag.


6. **PF - Product : Add (With Variants) [NAV-Shopify]**

This Processflow is implemented with multiple flows that integrates Products and their Variants from NAV/BC to Shopify. The following data will be integrated: Item Description Body, Item Title, Vendor, Barcode, Variants (Complex Object), position, product price, Variants SKU, Variants Title, Unit Price (Compare At Price), inventory management, 
Weight, Product Type & Source Key.
This processflow is equipped of SyncBack that returns back the updated ApplicationId, Item Number, WebSyncFlag & WebId to NAV/BC from Shopify for the AEC Items.
This Processflow is also equipped of Syncback that returns the Application Id, Item Number & Webid to NAV/BC from Shopify for the Child Items.


7. **PF - Product : Add (Without Variants) [NAV-Shopify]**

This Processflow is implemented with multiple flows that integrates Products without Variants from NAV/BC to Shopify. The following data will be integrated: Item Description Body, Item Title, Vendor, product price,Item SKU, inventory quantity, inventory management, 
Weight & Source Key.
This Processflow is also equipped of Syncback that returns the Application Id, Item Number, WebSyncFlag, WebId, VariantId & WebInventoryId to NAV/BC from Shopify for the AEC Items.


8. **PF- Inventory Update [NAV - Shopify]**

This Processflow is equipped of updating inventories from Dynamics NAV to Shopify. The following details would be synced: Requestaction, inventory_item_id, Location_id & Availability.
This Processflow is also equipped with a syncback that returns back the Updated Flag back to Dynamics NAV to Shopify.


9. **PF - Inventory Update (Default Variant) [NAV to Shopify]**

This Processflow integrates the updated inventory with default variants of products from Dynamics NAV to Shopify. The following details would be synced: inventory_item_id, location_id, SourceKey & Availability.
This flow also syncs the updated flag from Dynamics NAV to Shopify.


10. **PF - Product Update**

This Processflow integrates the updated Product Details like Product Name, description, Variants etc from Dynamics NAV to Shopify. The following details will be integrated: Product Web Id, Item Title, Variants, Variant Id, Variant Title, Item Price, Variant SKU & SourceKey.
This Processflow is also equipped with syncbacks that returns back the Application Id, Item Number, WebSyncFlag & WebId from Shopify to NAV.


11. **PF - Order Add [Shopify - NAV]**

This Processflow integrates the incoming Sales Orders from Shopify to NAV. The following data are integrated with this flow: Document Type, Document Number, Document Date, Posting Date, Payment Method,
Sell to Customer Number, Sell to Customer Name, Address 1, Address 2, City, Country, PostCode, Ship to Name, Shipping Address Details, Order Details (Sales Line), Web Order Id, Item Number, Web Id & Line Number.


12. **PF - Fulfillment Add**

This Processflow integrates the Fullfillment documents of every incoming order from Dynamics NAV to Shopify. The following data will be integrated with this Processflow: Location Id, Order Id, Tracking Number.


13. **PF - Shipment : Add [Shopify - NAV]**

This Processflow integrates the Shipment details of the orders from Shopify to Dynamics NAV. The following data will be integrated: WebOrderIncrementId, Shipment WebId, Application id & Tracking Number.


14. **PF - Price Add (Default Variant)**

This Processflow integrates the Product Prices (Product with Default Variants) from Dynamics NAV to Shopify. The following data will be integrated: Item Variant Id & Price.
This Processflow is also equipped with a sync back flow that returns back the Application Id, Item Number, Web Sync Flag, WebId, Variant Id, Web Inventory Id & Web Price Sync Flag from Shopfy to Dynamics NAV.


15. **PF- Item Price Update**

This Processflow integrates the updated prices of Items from Dynamics NAV to Shopify. The following data will be integrated: Child Price, Child Web Id & Compare At Price (Child Items).
This Processflow is also equipped with a Sync Back that returns back Item Price Details Flag back to Dynamics NAV from Shopify.


16. **PF - Order : Update**

BLANK

17. **PF - Product Update**



18. **PF - Variant Item Link**

This Processflow integrates the Variant links with Items from Shopify to Dynamics NAV. The following data will be synced: Application Id, Parent Item SKU, Web Sync Flag & barcode.


## Action Filter configurations:

ProcessFlows in this package are pre-configured with the action filters that are required to GET and POST data from Source to Destination Application minimizing the implementation time. 
Have a glance on the [Action Filter](https://docs.appseconnect.com/processflow/manage-actions-actionfilters-errorfilters/) documentation, for more information.

## LookUp Mapping:
Your Package contains multiple Processflows and few of those Processflows may require mapping of specific values in certain fields as lookups. Few Processflow requires to create these lookups manually in the Reference Tables of the APPSeCONNECT [Repositories](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/). 
Follow the documentation of [Reference Tables](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/#reference-tables) for reference. The lookups listed below needs to be created in reference tables for the below mentioned ProcessFlow. 
The list is put based on the format given below:

[Processflow Name][Reference Table]

• [][] 

• [][]

• [][]

## Extension Configuration Information:

This package comprises of prepackaged applications namely Microsoft Dynamics NAV, which requires extension to be configured. 

Given below is the checklist of Extension & Add On’s required for these applications.


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

** This extension details are enlisted below:**

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
