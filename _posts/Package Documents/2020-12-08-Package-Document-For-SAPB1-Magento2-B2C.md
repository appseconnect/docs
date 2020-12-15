## Overview

The package **SAP Business One - Magento2 B2C** will let you integrate the pre-implemented ProcessFlows for your business processes integrations, seamlessly reducing your time and effort in configuring and design. 
One -Click installation allows you to access the packaged ProcessFlows designs and mappings. Amplify your revenue numbers and growth with Packages. 
Just Install, Deploy and Execute to integrate your ProcessFlows inbuilt in your package.

## Additional Information

- Version Number – 1.0.0 
- Package Name - SAP B1 and Magento2 B2C Package 
- Created By –  INSYNC Solutions
- Last Modified - 08/12/2020 07:23:30 PM (Date & Time)
- Apps Used in the Package – SAP Business One & Magento2

## Package Key Features

**SAP Business One - Magento2 B2C** will let you integrate all your business flows keeping and maintaining the complete transparency of your business integration. 
Checkout the Key Features of this package, listed below:

1.	Easy Package Sharing & Installation: Two step Package Sharing, and One Click Installation lets you share and unzip your packages with ease and reduces time and effort, encouraging Citizen Integration. Know more on [Processflow Packaging](https://docs.appseconnect.com/processflow/processflow-packaging-overview/)
2.	Automated Business Cycle Integration: Lets you just to plug and play every cycle of your business process automatically 
3.	Pre-Implemented mappings: The process flows in this [package] are pre-implemented with all the mappings required for integrating your ProcessFlow minimizing the manual efforts. However, you are always welcome in altering the [mappings](https://docs.appseconnect.com/processflow/customising-attribute-mapping/) as per your business process. 
4.	Easy integrations of Bundled and Configurable products: This package will let you sync the Bundled and Configurable Products if sold within your Business Process. The Configurations and Mappings will be pre-implemented for its integration process.

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
- [Magento 2](https://docs.appseconnect.com/connectors/magento2/) 

If you have an application which has an application connector present on platform, you as a user require very small effort to configure the connector to work correctly with the application. 

## Packaged Processflows & Dependencies:

This package comes with pre-designed and mapped Processflows between your chosen applications which will enable you to Install, Deploy and Execute your flow seamlessly. With pre-implemented lookups and mappings, this Package will minimize your efforts to design and map your flow accordingly.  
Data Configuration is broadly classified into Master Data Configuration & Transactional Data Configuration. Your package may require both type of Data Configuration Processflows or simply transactional data Configuration, depending on your chosen application.

Given below are the Master Data Configuration Details:

• ProcessFlow - Master Data Add [Attribute Set] 
Description: This master data syncs the configuration details of the Product Attribute Sets. 

• ProcessFlow - Master Data Add [Attributes]
Description: This master data syncs the configuration details of the Product Attributes. 

• ProcessFlow - Master Data Add [Attribute Options]
Description: This master data syncs the configuration details of the Product Attribute Options. 

• ProcessFlow - Master Data Add [TaxClass]
Description: This master data syncs the configuration details of the Product Tax Classes. 

• ProcessFlow - Master Data Add [Country State]
Description: This master data syncs the configuration details of Countries and States. 

• ProcessFlow - Master Data Add [Website]
Description: This master data syncs the configuration details of the application websites.

• ProcessFlow - Master Data Add [Category] 
Description: This master data syncs the configuration details of the Product Categories. 

• ProcessFlow - Master Data Add [Customer Group]
Description: This master data syncs the configuration details of the Customer Groups. 

Given below are the Transactional Data Configuration Details:


- **ProcessFlow - Customer Add**

i.	Flow Description: This ProcessFlow will integrate the newly on boarded Customer and their details in your business line-up. The following Customer details will be synced: Customer ID, Name, Email Id, City, Country Address, and Telephone from SAP Business One to Magento2.

ii.	Dependency flow: Not Applicable 


- **ProcessFlow - Customer Update**

i.	Flow Description: This ProcessFlow will integrate the updated details of the customers added in your business line-up. The following Customer details will be synced: Customer ID, Name, Email Id, City, Country Address, and Telephone from SAP Business One to Magento2.

ii.	Dependency flow: Customer Add


- **ProcessFlow: Business Partner Add**

i.	Flow Description: This ProcessFlow will integrate the newly on boarded Customer and their details in your business line-up. The following Customer details will be synced: Customer ID, Name, Email Id, City, Country Address, and Telephone. 

ii.	Dependency flow: Not Applicable 


- **ProcessFlow: Business Partner Update**

i.	Flow Description: This ProcessFlow will integrate the updated details of each Business partners in your business line-up. The following Customer details will be synced: Customer ID, Name, Email Id, City, Country Address, and Telephone. 

ii.	Dependency flow: Business Partner Add


- **ProcessFlow: Simple Product Add** 

i.	Flow Description: This ProcessFlow is featured to sync the following details of Simple Products to your Magento2 application. The details are: Product Id, Product SKU, Product Name, Price, Product Status, Attribute id, Product type, weight etc. 

ii.	Dependency Flow: Not Applicable 


-	**ProcessFLow - Simple Product Update** 

i.	Flow Description: This ProcessFlow is featured to update the changes of the product details. This ProcessFlow will only update the changes of the details that was synced while adding a new simple product. 

ii.	Dependency Flow: ProcessFlow: Simple Product Add
Simple Product Update is equipped of updating the changes made to the Product details on your Source Application. As the updates are made against the ItemCode, therefore the dependency of Simple Product Add occurs which is responsible of adding the ItemCode primarily.


-	**ProcessFlow - Item Master Data Add [Simple Product]** 

i.	Flow Description: This ProcessFlow is featured to add all the Simple Products from Magento2 to SAP Business One. This ProcessFlow will only add the following details of the Products: Product Name, Description, Wieght, Price, Currency & SKU.

ii.	Dependency Flow: NA 


-	**ProcessFlow - Item Master Data Update [Simple Product]** 

i.	Flow Description: This ProcessFlow is featured to Update  the Simple Products details from Magento2 to SAP Business One. This ProcessFlow will only update the following details of the Products: Product Name, Description, Wieght, Price, Currency & SKU.

ii.	Dependency Flow: NA 


-	**ProcessFlow - Web Item Master Data Add [Simple Product]** 

i.	Flow Description: This ProcessFlow is featured to add complete details of each Simple Products from Magento2 to SAP Business One. The details are added with respect to the ProcessFlow performing the Add operation previously.
ii.	Dependency Flow: ProcessFlow - Item Master Data Add [Simple Product]


-	**ProcessFlow - Web Item Master Data Update [Simple Product]** 

i.	Flow Description: This ProcessFlow is featured to update complete details of each Simple Products from Magento2 to SAP Business One. The details are updated with respect to the ProcessFlows performing the Add operation previously.
ii.	Dependency Flow: ProcessFlow - Item Master Data Add [Simple Product] ; ProcessFlow - Web Item Master Data Add [Simple Product]


-	**ProcessFlow - Grouped Product Add**

i.	Flow Description: This ProcessFlow syncs all the details of the Grouped Products from SAP Business One to Magento2. Group products are the pack of multiple simple products. This ProcessFlow is featured with Simple product add such that when triggered, new Simple Products will get added followed by the Configurable Product Add. 

ii.	Dependency Flow: NA. 
As Simple Product Add is already equipped in this flow, you will not have to trigger Simple product add flow again.


-	**ProcessFlow - Grouped Product Update**

i.	Flow Description: This ProcessFlow syncs all updated details of the Grouped Products from SAP Business One to Magento2 . Group products are the pack of multiple simple products.

ii.	Dependency Flow: ProcessFlow - Grouped Product Add


-	**ProcessFlow - Item Master Data Add [Grouped Product]** 

i.	Flow Description: This ProcessFlow is featured to add all the Grouped Products from Magento2 to SAP Business One. This ProcessFlow will only add the following details of the Products: Product Name, SKU, Description, Wieght, Price & Currency .

ii.	Dependency Flow: NA 


-	**ProcessFlow - Item Master Data Update [Grouped Product]** 

i.	Flow Description: This ProcessFlow is featured to Update the Grouped Products details from Magento2 to SAP Business One. This ProcessFlow will only update the following details of the Products: Product Name, Description, Wieght, Price, Currency & SKU.

ii.	Dependency Flow:  ProcessFlow - Item Master Data Add [Grouped Product]


-	**ProcessFlow - Web Item Master Data Add [Grouped Product]** 

i.	Flow Description: This ProcessFlow is featured to add complete details of each Grouped Products from Magento2 to SAP Business One. The details are added with respect to the ProcessFlow, performing the ADD operation previously.
ii.	Dependency Flow: ProcessFlow - Item Master Data Add [Grouped Product]


-	**ProcessFlow - Web Item Master Data Update [Grouped Product]** 

i.	Flow Description: This ProcessFlow is featured to update complete details of each Grouped Products from Magento2 to SAP Business One. The details are updated with respect to the ProcessFlows, performing the ADD operation previously.
ii.	Dependency Flow: ProcessFlow - Item Master Data Add [Grouped Product] ; ProcessFlow - Web Item Master Data Add [Grouped Product]


-	**ProcessFlow - Bundle Product Add**

i.	Flow Description: This ProcessFlow syncs all the details bundled products to your destination application. As Simple product a bundled to form Bundle Products, this ProcessFlow is featured with Simple product add such that when triggered, new Simple Products will get added followed by the Bundle Product Add. 

ii.	Dependency Flow: NA. 
As Simple Product Add is already equipped in this flow, you will not have to trigger Simple product add flow again. 


-	**ProcessFlow - Bundle Product Update**

i.	Flow Description: This ProcessFlow syncs all the updated details bundled products from SAP Business One to Magento2. All the added bundled products will be updated with the respective updates when triggered the sync.

ii.	Dependency Flow: ProcessFlow - Bundle Product Add


-	**ProcessFlow - Item Master Data Add [Bundle Product]** 

i.	Flow Description: This ProcessFlow is featured to add all the Bundled Products from Magento2 to SAP Business One. This ProcessFlow will only add the following details of the Products: Product Name, SKU, Description, Wieght, Price & Currency .

ii.	Dependency Flow: NA 


-	**ProcessFlow - Item Master Data Update [Bundle Product]** 

i.	Flow Description: This ProcessFlow is featured to Update the Bundled Products details from Magento2 to SAP Business One. This ProcessFlow will only update the following details of the Products: Product Name, Description, Wieght, Price, Currency & SKU.

ii.	Dependency Flow:  ProcessFlow - Item Master Data Add [Bundle Product]


-	**ProcessFlow - Web Item Master Data Add [Bundle Product]** 

i.	Flow Description: This ProcessFlow is featured to add complete details of each Bundle Products from Magento2 to SAP Business One. The details are added with respect to the ProcessFlow, performing the ADD operation previously.
ii.	Dependency Flow: ProcessFlow - Item Master Data Add [Bundle Product]


-	**ProcessFlow - Web Item Master Data Update [Bundle Product]** 

i.	Flow Description: This ProcessFlow is featured to update complete details of each Bundle Products from Magento2 to SAP Business One. The details are updated with respect to the ProcessFlows, performing the ADD operation previously.
ii.	Dependency Flow: ProcessFlow - Item Master Data Add [Bundle Product] ; ProcessFlow - Web Item Master Data Add [Bundle Product]



-	**ProcessFlow - Configurable Product Add**

i.	Flow Description: This ProcessFlow syncs all the details of the configurable products from SAP Business One to Magento2. A configurable product are the simple products with options, this ProcessFlow is featured with Simple product add such that when triggered, new Simple Products will get added followed by the Configurable Product Add. The Simple Product Add flow is also equipped with a Post Acknowledgement task that integrates Sync Back Flag details. 

ii.	Dependency Flow: NA. 
As Simple Product Add is already equipped in this flow, you will not have to trigger Simple product add flow again.


-	**ProcessFlow - Configurable Product Update**

i.	Flow Description: This ProcessFlow syncs the updated details of each configurable products from SAP Business One to Magento2.

ii.	Dependency Flow: ProcessFlow - Configurable Product Add


-	**ProcessFlow - Item Master Data Add [Configurable Product]** 

i.	Flow Description: This ProcessFlow is featured to add all the Configurable Products from Magento2 to SAP Business One. This ProcessFlow will only add the following details of the Products: Product Name, SKU, Description, Wieght, Price & Currency .

ii.	Dependency Flow: NA 


-	**ProcessFlow - Item Master Data Update [Configurable Product]** 

i.	Flow Description: This ProcessFlow is featured to Update the Configurable Products details from Magento2 to SAP Business One. This ProcessFlow will only update the following details of the Products: Product Name, Description, Wieght, Price, Currency & SKU.

ii.	Dependency Flow:  ProcessFlow - Item Master Data Add [Configurable Product]


-	**ProcessFlow - Web Item Master Data Add [Configurable Product]** 

i.	Flow Description: This ProcessFlow is featured to add complete details of each Configurable Products from Magento2 to SAP Business One. The details are added with respect to the ProcessFlow, performing the ADD operation previously.
ii.	Dependency Flow: ProcessFlow - Item Master Data Add [Configurable Product]


-	**ProcessFlow - Configurable WebItems Update** 

i.	Flow Description: This ProcessFlow is featured to update complete details of each Configurable Products from Magento2 to SAP Business One. The details are updated with respect to the ProcessFlows, performing the ADD operation previously.
ii.	Dependency Flow: ProcessFlow - Item Master Data Add [Configurable Product] ; ProcessFlow - Web Item Master Data Add [Configurable Product]


-	**ProcessFlow - Downloadable Product Add**

i.	Flow Description: This ProcessFlow syncs all the details of the Downloadable Products from SAP Business One to Magento2. Downloadable products A downloadable product can be anything that can deliver as a file, such as an eBook, music, video, software application, or update etc. 
This ProcessFlow is also equipped with a Post Acknowledgement task that integrates Sync Back Flag details. 

ii.	Dependency Flow: NA. 


-	**ProcessFlow - Downloadble Product Update**

i.	Flow Description: This ProcessFlow syncs the updated details of each downloadable products from SAP Business One to Magento2.

ii.	Dependency Flow: ProcessFlow - Downloadable Product Add


-	**ProcessFlow - Item Master Data Add [Downloadable Product]** 

i.	Flow Description: This ProcessFlow is featured to add all the Downloadable Products from Magento2 to SAP Business One. This ProcessFlow will only add the following details of the Products: Product Name, SKU, Description, Wieght, Price & Currency .

ii.	Dependency Flow: NA 


-	**ProcessFlow - Item Master Data Update [Downloadable Product]** 

i.	Flow Description: This ProcessFlow is featured to Update the Downloadable Products details from Magento2 to SAP Business One. This ProcessFlow will only update the following details of the Products: Product Name, Description, Wieght, Price, Currency & SKU.

ii.	Dependency Flow:  ProcessFlow - Item Master Data Add [Downloadable Product]


-	**ProcessFlow - Web Item Master Data Add [Downloadable Product]** 

i.	Flow Description: This ProcessFlow is featured to add complete details of each Downloadable Products from Magento2 to SAP Business One. The details are added with respect to the ProcessFlow, performing the ADD operation previously.
ii.	Dependency Flow: ProcessFlow - Item Master Data Add [Downloadable Product]


-	**ProcessFlow - Web Item Master Data Update [Downloadable Product]** 

i.	Flow Description: This ProcessFlow is featured to update complete details of each Downloadable Products from Magento2 to SAP Business One. The details are updated with respect to the ProcessFlows, performing the ADD operation previously.
ii.	Dependency Flow: ProcessFlow - Item Master Data Add [Downloadable Product] ; ProcessFlow - Web Item Master Data Add [Downloadable Product]


-	**ProcessFlow - Virtual Product Add**

i.	Flow Description: This ProcessFlow syncs all the details of the Virtual Products from SAP Business One to Magento2. Virtual products can be anything that can have a subscription plans or can be waranty product etc. 
This ProcessFlow is also equipped with a Post Acknowledgement task that integrates Sync Back Flag details. 

ii.	Dependency Flow: NA. 


-	**ProcessFlow - Virtual Product Update**

i.	Flow Description: This ProcessFlow syncs the updated details of each Virtual products from SAP Business One to Magento2.

ii.	Dependency Flow: ProcessFlow - Virtual Product Add


-	**ProcessFlow - Item Master Data Add [Virtual Product]** 

i.	Flow Description: This ProcessFlow is featured to add all the Virtual Products from Magento2 to SAP Business One. This ProcessFlow will only add the following details of the Products: Product Name, SKU, Description, Wieght, Price & Currency .

ii.	Dependency Flow: NA 


-	**ProcessFlow - Item Master Data Update [Virtual Product]** 

i.	Flow Description: This ProcessFlow is featured to Update the Virtual Products details from Magento2 to SAP Business One. This ProcessFlow will only update the following details of the Products: Product Name, Description, Wieght, Price, Currency & SKU.

ii.	Dependency Flow:  ProcessFlow - Item Master Data Add [Virtual Product]


-	**ProcessFlow - Web Item Master Data Add [Virtual Product]** 

i.	Flow Description: This ProcessFlow is featured to add complete details of each Virtual Products from Magento2 to SAP Business One. The details are added with respect to the ProcessFlow, performing the ADD operation previously.
ii.	Dependency Flow: ProcessFlow - Item Master Data Add [Virtual Product]


-	**ProcessFlow - Web Item Master Data Update [Virtual Product]** 

i.	Flow Description: This ProcessFlow is featured to update complete details of each Virtual Products from Magento2 to SAP Business One. The details are updated with respect to the ProcessFlows, performing the ADD operation previously.
ii.	Dependency Flow: ProcessFlow - Item Master Data Add [Virtual Product] ; ProcessFlow - Web Item Master Data Add [Virtual Product]


- **ProcessFlow - Product Images Add**

i.	Flow Description: This ProcessFlow is featured to add the images of the Products from SAP Business One to Magento2. The following details of the images are synced: Image, Image Type, Image Label, Image Source Key.
ii.	Dependency Flow: ProcessFlow - Simple Product Add ;  ProcessFlow - Virtual Product Add ; ProcessFlow - Downloadable Product Add.
Also, the Images will be synced only for products which are already uploaded in Magento2. Therefore, you are required to sync Products before integrating its images.


- **ProcessFlow - Product Price :Update**

i.	Flow Description: This ProcessFlow is featured to update the prices of the Products from SAP Business One to Magento2. The following relatred details are synced: Price & SKU .
ii.	Dependency Flow: You will be required to sync the related products as required before integrating its updated Price.


- **ProcessFlow - Special Price : Add**

i.	Flow Description: This ProcessFlow is featured to ADD Special Prices for various Products as per your business criteria, from SAP Business One to Magento2. The following related details are synced: Special price from start date to end date build upon Item SKUs.
ii.	Dependency Flow: You will be required to sync the related products as required before integrating its Special Price of that product.


- **ProcessFlow - Tier Price : Add**

i.	Flow Description: This ProcessFlow is featured to ADD Tier Prices for Products as per your business criteria, from SAP Business One to Magento2. The Details of Tier Prices are synced based on the Item Code , Group Code etc.
ii.	Dependency Flow: You will be required to sync the related products as required before integrating its Tier Prices.


-	**ProcessFlow - Inventory Update:**

i.	Flow Description: This ProcessFlow is featured to sync and update your warehouse inventory stocks. This ProcessFlow will sync the Item Quantity against the item code available on your inventory. 

ii.	Dependency Flow: Simple Product Add 
As the inventory is updated against the ItemCode, the item needs to be added first so that the respective stocks can be updated accordingly.

-	**ProcessFlow - Order Add:** 

i.	Flow Description: This ProcessFlow is featured to sync the following details of each Sales Orders from your customer facing application to the destination application. The details are: Order Id, Customer Name, Product details, Product Unit Price, Ordered Quantity, Tax, VAT, Discount, Sales Order generation date and shipment details. 

ii.	Dependency Flow: Business Partner Add, Product Add, Inventory Update. 
The Sales Order ProcessFlow is equipped of integrating the details of the customers and products. The above-mentioned dependencies need to be integrated first so as to avoid document mismatch errors. 


-	**ProcessFlow - Delivery/Shipment Add:** 

i.	Flow Description: This ProcessFlow is featured to sync the Delivery/Shipment docs generated against your Sales Order from Magento2 to SAP Business One. This flow sync the Shipment Tracking Number along with the Customer details, order details, and tax information’s. 
Delivery/Shipment Add is also equipped with a Post Acknowledgement task that integrates Sync Back ShipmentSyncFlag details.

ii. Dependency Flow: Business Partner Add, Product Add, Inventory Update, Order Add 
The Delivery/Shipment Add ProcessFlow is equipped of integrating the details of the order delivery receipt. The above-mentioned dependencies need to be integrated first so as to avoid document mismatch errors.


- -	**ProcessFlow - Shipment Add:** 

i.	Flow Description: This ProcessFlow is featured to sync the Shipment docs generated against your Sales Order SAP Business One to Magento2. This flow syncs the Shipment Tracking Number along with the Customer details, order details & Carrier Code. 
Shipment Add is also equipped with a Post Acknowledgement task that Updates Sync Back Flag details.

ii. Dependency Flow: Business Partner Add, Product Add, Inventory Update, Order Add 
The Shipment Add ProcessFlow is equipped of integrating the details of the order delivery receipt. The above-mentioned dependencies need to be integrated first so as to avoid document mismatch errors.


-	**ProcessFlow- A/R Down Payment Invoice : Add** 

i.	Flow Description: This ProcessFlow is featured to sync the A/R Invoices of the Downpayments raised against the Sales Order Generated. The flow syncs the Item SKU, Quantity, and the Order Details from SAP Business One to Magento2. Invoice Add is also equipped with a Post Acknowledgement task that integrates Sync Back Invoice Flag details back to your Source Application.

ii.	Dependency Flow: Business Partner Add, Product Add, Inventory Update, Order Add 
The A/R Down Payment Invoice : Add ProcessFlow is equipped of integrating the details of the order Invoice receipt of the Downpayment. The above-mentioned dependencies need to be integrated first so as to avoid document mismatch errors.


-	**ProcessFlow - Invoice Add:** 

i.	Flow Description: This ProcessFlow is featured to sync the Invoices from Magento2 to SAP Business One, raised against the Sales Order Generated. The flow syncs the Item SKU, Quantity, and the Order Details to your destination application. Invoice Add is also equipped with a Post Acknowledgement task that updates Sync Back Invoice Flag details back to your Source Application. Also, the ProcessFlow Invoice Add is featured to sync the payment type made for each invoice be it **Payment through Cash**, **Payment through Bank transfer**, **Payment through Cheque**

ii.	Dependency Flow: Business Partner Add, Product Add, Inventory Update, Order Add 
The Invoice Add ProcessFlow is equipped of integrating the details of the order Invoice receipt. The above-mentioned dependencies need to be integrated first so as to avoid document mismatch errors.


-	**ProcessFlow - A/R Invoice Add:** 

i.	Flow Description: This ProcessFlow is featured to sync the A/R Invoices from SAP Business One to Magento2, raised against the Sales Order Generated . The flow syncs the Item SKU, Quantity, and the Order Details to your destination application. Invoice Add is also equipped with a Post Acknowledgement task that updates Sync Back Invoice Flag details back to your Source Application.
ii.	Dependency Flow: Business Partner Add, Product Add, Inventory Update, Order Add 
The A/R Invoice Add ProcessFlow is equipped of integrating the details of the order Invoice receipt. The above-mentioned dependencies need to be integrated first so as to avoid document mismatch errors.


-	**ProcessFlow- A/R Down Payment Invoice : Add** 

i.	Flow Description: This ProcessFlow is featured to sync the Downpayment Invoices raised against the Sales Order Generated. The flow syncs the Item SKU, Quantity, and the Order Details from Magento2 to SAP Business One. Also, this ProcessFlow is featured to sync the incoming payment types made for each invoice be it **Payment through Cash**, **Payment through Bank transfer**, **Payment through Cheque**

ii.	Dependency Flow: Business Partner Add, Product Add, Inventory Update, Order Add 
The Invoice Add ProcessFlow is equipped of integrating the details of the order Invoice receipt. The above-mentioned dependencies need to be integrated first so as to avoid document mismatch errors.


-	**ProcessFlow - Incoming Payment with CreditCard :Add** 

i.	Flow Description: This ProcessFlow is featured to sync the Incoming Payments against the Sales Order Generated using Credit Card from Magento2 to SAP Business One. The flow syncs the related CardCode details, Invoice Details & Credit Card Details from Magento2 to SAP Business One.

ii.	Dependency Flow: Order Add, Invoice Add, A/R Invoice Add


## Action Filter configurations:

ProcessFlows in this package are pre-configured with the action filters that are required to GET and POST data from Source to Destination Application minimizing the implementation time. 
Have a glance on the [Action Filter](https://docs.appseconnect.com/processflow/manage-actions-actionfilters-errorfilters/) documentation, for more information.

## LookUp Mapping:
Your contains multiple Processflows and few of those Processflows may require mapping of specific values in certain fields as lookups. Few Processflow may need you to create these lookups manually in the Reference Tables of the APPSeCONNECT Repositories. 
Follow the documentation of Reference Tables for reference. The lookups listed below needs to be created in reference tables for the below mentioned ProcessFlow. The list is put based on the format given below:

[Processflow Name][Reference Table]

• [Order Add][Freight] 

• [Order Add][Tax]

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










