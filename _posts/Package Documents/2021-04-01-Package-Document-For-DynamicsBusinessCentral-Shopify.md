## Overview

The package **Dynamics 365 Business Central - Shopify B2C** will let you integrate the pre-implemented ProcessFlows for your business processes integrations, seamlessly reducing your time and effort in configuring and design for your B2C Business Module. 
One -Click installation allows you to access the packaged ProcessFlows designs and mappings. Amplify your revenue numbers and growth with Packages. 
Just Install, Deploy and Execute to integrate your ProcessFlows inbuilt in your package.

## Package Key Features

**Dynamics 365 Business Central - Shopify B2C** will let you integrate all your business flows keeping and maintaining the complete transparency of your business integration. 
Checkout the Key Features of this package, listed below:

1. Easy Package Sharing & Installation: Two step Package Sharing, and One Click Installation lets you share and unzip your packages with ease and reduces time and effort, encouraging Citizen Integration. Know more on [Processflow Packaging](https://docs.appseconnect.com/processflow/processflow-packaging-overview/)
2. Automated Business Cycle Integration: Lets you just to plug and play every cycle of your business process automatically between your selected applications Magento2 & Dynamics NAV.
3. Pre-Implemented mappings: The process flows in this package are pre-implemented with all the mappings required for integrating your ProcessFlow minimizing the manual efforts. However, you are always welcome in altering the [mappings](https://docs.appseconnect.com/processflow/customising-attribute-mapping/) as per your business process. 

## Package Setup

You are few steps away from UNBOXing this package on your APPSeCONNECT Organisation. Check out the [Installation Manual](https://docs.appseconnect.com/processflow/processflow-package-installation/) for more details.
Your installed package will be available in the **Installed Process Folder**.

Study this documentation for the Configuration, Deploy & the Execution details.


## App Authentication Mechanism

The applications used in the package requires to be authenticated for its integration. 
Check out the list of our [pre-packaged connectors](https://docs.appseconnect.com/connectors/overview-of-application-connectors/) in which, the applications used in this package is listed, in order to view the authentication mechanism of the applications used in the package. 
Study your required application’s document to know about the Authentication and its API details.

This package comprises of the following Applications.

- [Dynamics 365 Business Central](https://docs.appseconnect.com/connectors/Dynamicsnav/)
- [Shopify](https://docs.appseconnect.com/connectors/shopify/) (Shopify 1.0)

## ## Packaged Processflows & Dependencies:

This package comes with pre-designed and mapped Processflows between your chosen applications which will enable you to Install, Deploy and Execute your flow seamlessly. With pre-implemented lookups and mappings, this Package will minimize your efforts to design and map your flow accordingly.  
Data Configuration is broadly classified into Configuration Data Configuration & Transactional Data Configuration. Your package may require both type of Data Configuration Processflows or simply transactional data Configuration, depending on your chosen application. This package consists of the Transactional Data Configruation flows 
that will allow you to sync data from source to destination.

- **PF- Customer Add**

This processflow will integrate all the newly added customers on your business line up from Shopify to Dynamic 365 Business Central. The following data will be integrated: Customer No, Customer Name, Customer Search Name, Address, Address2, Country Region Code, City, County, Post Code, Phone Number, Email, Sourcekey & RequestMethod.


- **PF - Product Add (Dynamics 365 to Shopify)**

This processflow will integrate the added Products from Dynamics 365 Business Central to Shopify. The following data will be integrated: Product Body HTML (product description), Product Title, vendor, Barcode, price, Product SKU, Product Variant Title, Inventory Quantity, Compare At Price, 
Inventory Management, Product Type & SourceKey.
This processflow is also equipped with a Post Acknowledgement flow that syncsback the ApplicationId, WebSyncFlag, WebId, WebInventoryId, RequestMethod & PatchHeaderData.


- **PF - Item Inventory Update (BC 365 to Shopify)**

This Processflow will integrate the updated inventory details of the Products added from Dynamics 365 Business Central to Shopify. The following data will be synced when intergated this processflow: Location Id, inventory Item Id, Request Action, Omit Root, available & Sourcekey.
This flow is also equipped with a Post Acknowledgement flow that syncs back the Application Id, Request Method, Patch Header Data & SyncFlag. 


- **PF- Order Add**

This Processflow is equipped with multiple flows that integrates Sales Orders from Shopify to Dynamics 365 Business Central.

The first flow as designed integrates the incoming orders generated on Shopify. The following data will be integrated with this flow: Document Type, Sell to Customer Number, Bill to Address, Bill to Address2, Bill to city, Ship to Name, Ship to Name2, Ship to address, Bill to County, Bill to Country Region Code, Ship to Post Code, Ship to County, Ship to Country Region Code, RequestMethod, External Document Number, 
Ship to Address 2, Ship to City, Tax Area Code, Bill to Post Code, Bill to Name 2.


- **PF - Fullfillment Add to Shopify**

This Processflow adds the invoices of the generated order as Fulfillment from Dynamics 365 BC to Shopify. The following data will be added when synced: Line Item Details (Item Web Id, quantity, Item SKU), Tracking Number, order_id & SourceKey.
This processflow is also equipped with a post acknowledgement flow that syncs back the following data: SyncFlag, PatchHeaderData & RequestMethod.


- **PF-Price Update**

This Processflow updates the Product Price from Dynamics 365 BC to Shopify. The followings data will be updated: Product Web Id & Product Price.
This Processflow is also equipped with a Post Acknowledgement flow that syncs back the Application ID, Request Method, Patch Header Data & Web Price Sync Flag back to Dynamics 365 BC from Shopify.