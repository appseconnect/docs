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

