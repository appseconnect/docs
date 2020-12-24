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
3. Pre-Implemented mappings: The process flows in this [package] are pre-implemented with all the mappings required for integrating your ProcessFlow minimizing the manual efforts. However, you are always welcome in altering the [mappings](https://docs.appseconnect.com/processflow/customising-attribute-mapping/) as per your business process. 
4. Multiple Product Types Support: This package will enable you to sync product of types: Configurable products, bundle products, virtual products, downloadable products etc.

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
- [Shopify](https://docs.appseconnect.com/connectors/shopify/) 

## Packaged Processflows & Dependencies:

This package comes with pre-designed and mapped Processflows between your chosen applications which will enable you to Install, Deploy and Execute your flow seamlessly. With pre-implemented lookups and mappings, this Package will minimize your efforts to design and map your flow accordingly.  
This package will not require any additional Configurational Master Data Sync which reduces additional Time and Efforts.

Given below are the Transactional Data Configuration Details:

- **ProcessFlow - Customer Add**

i.	Flow Description: This ProcessFlow will integrate the newly on boarded Customer and their details in your business line-up. The following Customer details will be synced: Customer ID, Name, Email Id, City, Country Address, and Telephone from SAP Business One to Magento2.

ii.	Dependency flow: Not Applicable 


- **ProcessFlow: Business Partner Add**

i.	Flow Description: This ProcessFlow will integrate the newly on boarded Customer and their details in your business line-up. The following Customer details will be synced: Customer ID, Name, Email Id, City, Country Address, and Telephone. 

ii.	Dependency flow: Not Applicable 


- **ProcessFlow: Business Partner Update**

i.	Flow Description: This ProcessFlow will integrate the updated details of each Business partners in your business line-up. The following Customer details will be synced: Customer ID, Name, Email Id, City, Country Address, and Telephone. 

ii.	Dependency flow: Business Partner Add


- **ProcessFlow: Simple Product Add** 

i.	Flow Description: This ProcessFlow is featured to sync the following details of Simple Products to your Magento2 application. The details are: Product Id, Product SKU, Product Name, Price, Product Status, Attribute id, Product type, weight etc. 

ii.	Dependency Flow: Not Applicable 


-	**ProcessFlow - Order Add:** 

i.	Flow Description: This ProcessFlow is featured to sync the following details of each Sales Orders from your customer facing application to the destination application. The details are: Order Id, Customer Name, Product details, Product Unit Price, Ordered Quantity, Tax, VAT, Discount, Sales Order generation date and shipment details. 

ii.	Dependency Flow: Business Partner Add, Product Add, Inventory Update. 
The Sales Order ProcessFlow is equipped of integrating the details of the customers and products. The above-mentioned dependencies need to be integrated first so as to avoid document mismatch errors. 
