## Overview

The package **Magento2.X  - SAP Business One B2C** will let you integrate the pre-implemented ProcessFlows for your business processes integrations, seamlessly reducing your time and effort in configuring and design. 
One -Click installation allows you to access the packaged ProcessFlows designs and mappings. Amplify your revenue numbers and growth with Packages. 
Just Install, Deploy and Execute to integrate your ProcessFlows inbuilt in your package.

## Package Key Features

**SAP Business One - Magento2 B2C** will let you integrate all your business flows keeping and maintaining the complete transparency of your business integration. 
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
Study your required application’s document to know about the Authentication and its API details.

This package comprises of the following Applications.

- [SAP Business One](https://docs.appseconnect.com/connectors/Sap-Business-One/) (>=8.8)
- [Magento 2](https://docs.appseconnect.com/connectors/magento2/) (>=2.0.0.0) 

## Packaged Processflows & Dependencies:

This package comes with pre-designed and mapped Processflows between your chosen applications which will enable you to Install, Deploy and Execute your flow seamlessly. With pre-implemented lookups and mappings, this Package will minimize your efforts to design and map your flow accordingly.  
Data Configuration is broadly classified into Master Data Configuration & Transactional Data Configuration. Your package may require both type of Data Configuration Processflows or simply transactional data Configuration, depending on your chosen application.

Given below are the Master Data Configuration Details:

• Configuration Data Add [Attribute Set]

This master data syncs the configuration details of the Product Attribute Sets. 

• Configuration Data Add [Attributes]

This master data syncs the configuration details of the Product Attributes. 

• Configuration Data Add [Attribute Options]

This master data syncs the configuration details of the Product Attribute Options. 

• Configuration Data Add [TaxClass]

This master data syncs the configuration details of the Product Tax Classes. 

• Configuration Data Add [Country State]

This master data syncs the configuration details of Countries and States. 

• Configuration Data Add [Website]

This master data syncs the configuration details of the application websites.

• Configuration Data Add [Category] 

This master data syncs the configuration details of the Product Categories. 

• Configuration Data Add [Customer Group]

This master data syncs the configuration details of the Customer Groups. 

Given below are the Transactional Data Configuration Details:


- **Customer Add**

This ProcessFlow will integrate the newly on boarded Customer and their details in your business line-up. The following Customer details will be synced: Customer ID, Name, Email Id, City, Country Address, and Telephone from SAP Business One to Magento2.



- **Customer Update**

This ProcessFlow will integrate the updated details of the customers added in your business line-up. The following Customer details will be synced: Customer ID, Name, Email Id, City, Country Address, and Telephone from SAP Business One to Magento2.


- **Business Partner Add**

This ProcessFlow will integrate the newly on boarded Customer and their details in your business line-up. The following Customer details will be synced: Customer ID, Name, Email Id, City, Country Address, and Telephone. 



- **Business Partner Update**

This ProcessFlow will integrate the updated details of each Business partners in your business line-up. The following Customer details will be synced: Customer ID, Name, Email Id, City, Country Address, and Telephone. 



- **Simple Product Add** 

This ProcessFlow is featured to sync the following details of Simple Products to your Magento2 application. The details are: Product Id, Product SKU, Product Name, Price, Product Status, Attribute id, Product type, weight etc. 



-	**Simple Product Update** 

This ProcessFlow is featured to update the changes of the product details. This ProcessFlow will only update the changes of the details that was synced while adding a new simple product. 


-	**Item Master Data Add [Simple Product]** 

This ProcessFlow is featured to add all the Simple Products from Magento2 to SAP Business One. This ProcessFlow will only add the following details of the Products: Product Name, Description, Wieght, Price, Currency & SKU.


-	**Item Master Data Update [Simple Product]** 

This ProcessFlow is featured to Update  the Simple Products details from Magento2 to SAP Business One. This ProcessFlow will only update the following details of the Products: Product Name, Description, Wieght, Price, Currency & SKU.



-	**Web Item Master Data Add [Simple Product]** 

This ProcessFlow is featured to add complete details of each Simple Products from Magento2 to SAP Business One. The details are added with respect to the ProcessFlow performing the Add operation previously.


-	**Web Item Master Data Update [Simple Product]** 

This ProcessFlow is featured to update complete details of each Simple Products from Magento2 to SAP Business One. The details are updated with respect to the ProcessFlows performing the Add operation previously.


-	**Grouped Product Add**

This ProcessFlow syncs all the details of the Grouped Products from SAP Business One to Magento2. Group products are the pack of multiple simple products. This ProcessFlow is featured with Simple product add such that when triggered, new Simple Products will get added followed by the Configurable Product Add. 



-	**Grouped Product Update**

This ProcessFlow syncs all updated details of the Grouped Products from SAP Business One to Magento2 . Group products are the pack of multiple simple products.



-	**Item Master Data Add [Grouped Product]** 

This ProcessFlow is featured to add all the Grouped Products from Magento2 to SAP Business One. This ProcessFlow will only add the following details of the Products: Product Name, SKU, Description, Wieght, Price & Currency .



-	**Item Master Data Update [Grouped Product]** 

This ProcessFlow is featured to Update the Grouped Products details from Magento2 to SAP Business One. This ProcessFlow will only update the following details of the Products: Product Name, Description, Wieght, Price, Currency & SKU.



-	**Web Item Master Data Add [Grouped Product]** 

This ProcessFlow is featured to add complete details of each Grouped Products from Magento2 to SAP Business One. The details are added with respect to the ProcessFlow, performing the ADD operation previously.


-	**Web Item Master Data Update [Grouped Product]** 

This ProcessFlow is featured to update complete details of each Grouped Products from Magento2 to SAP Business One. The details are updated with respect to the ProcessFlows, performing the ADD operation previously.


-	**Bundle Product Add**

This ProcessFlow syncs all the details bundled products to your destination application. As Simple product a bundled to form Bundle Products, this ProcessFlow is featured with Simple product add such that when triggered, new Simple Products will get added followed by the Bundle Product Add. 



-	**Bundle Product Update**

This ProcessFlow syncs all the updated details bundled products from SAP Business One to Magento2. All the added bundled products will be updated with the respective updates when triggered the sync.



-	**Item Master Data Add [Bundle Product]** 

This ProcessFlow is featured to add all the Bundled Products from Magento2 to SAP Business One. This ProcessFlow will only add the following details of the Products: Product Name, SKU, Description, Wieght, Price & Currency .



-	**Item Master Data Update [Bundle Product]** 

This ProcessFlow is featured to Update the Bundled Products details from Magento2 to SAP Business One. This ProcessFlow will only update the following details of the Products: Product Name, Description, Wieght, Price, Currency & SKU.



-	**Web Item Master Data Add [Bundle Product]** 

This ProcessFlow is featured to add complete details of each Bundle Products from Magento2 to SAP Business One. The details are added with respect to the ProcessFlow, performing the ADD operation previously.


-	**Web Item Master Data Update [Bundle Product]** 

This ProcessFlow is featured to update complete details of each Bundle Products from Magento2 to SAP Business One. The details are updated with respect to the ProcessFlows, performing the ADD operation previously.


-	**Configurable Product Add**

This ProcessFlow syncs all the details of the configurable products from SAP Business One to Magento2. A configurable product are the simple products with options, this ProcessFlow is featured with Simple product add such that when triggered, new Simple Products will get added followed by the Configurable Product Add. The Simple Product Add flow is also equipped with a Post Acknowledgement task that integrates Sync Back Flag details. 


-	**Configurable Product Update**

This ProcessFlow syncs the updated details of each configurable products from SAP Business One to Magento2.


-	**Item Master Data Add [Configurable Product]** 

This ProcessFlow is featured to add all the Configurable Products from Magento2 to SAP Business One. This ProcessFlow will only add the following details of the Products: Product Name, SKU, Description, Wieght, Price & Currency .


-	**Item Master Data Update [Configurable Product]** 

This ProcessFlow is featured to Update the Configurable Products details from Magento2 to SAP Business One. This ProcessFlow will only update the following details of the Products: Product Name, Description, Wieght, Price, Currency & SKU.


-	**Web Item Master Data Add [Configurable Product]** 

This ProcessFlow is featured to add complete details of each Configurable Products from Magento2 to SAP Business One. The details are added with respect to the ProcessFlow, performing the ADD operation previously.


-	**Configurable WebItems Update** 

This ProcessFlow is featured to update complete details of each Configurable Products from Magento2 to SAP Business One. The details are updated with respect to the ProcessFlows, performing the ADD operation previously.


-	**Downloadable Product Add**

This ProcessFlow syncs all the details of the Downloadable Products from SAP Business One to Magento2. Downloadable products A downloadable product can be anything that can deliver as a file, such as an eBook, music, video, software application, or update etc. 
This ProcessFlow is also equipped with a Post Acknowledgement task that integrates Sync Back Flag details. 


-	**Downloadble Product Update**

This ProcessFlow syncs the updated details of each downloadable products from SAP Business One to Magento2.


-	**Item Master Data Add [Downloadable Product]** 

This ProcessFlow is featured to add all the Downloadable Products from Magento2 to SAP Business One. This ProcessFlow will only add the following details of the Products: Product Name, SKU, Description, Wieght, Price & Currency .


-	**Item Master Data Update [Downloadable Product]** 

This ProcessFlow is featured to Update the Downloadable Products details from Magento2 to SAP Business One. This ProcessFlow will only update the following details of the Products: Product Name, Description, Wieght, Price, Currency & SKU.


-	**Web Item Master Data Add [Downloadable Product]** 

This ProcessFlow is featured to add complete details of each Downloadable Products from Magento2 to SAP Business One. The details are added with respect to the ProcessFlow, performing the ADD operation previously.


-	**Web Item Master Data Update [Downloadable Product]** 

This ProcessFlow is featured to update complete details of each Downloadable Products from Magento2 to SAP Business One. The details are updated with respect to the ProcessFlows, performing the ADD operation previously.


-	**Virtual Product Add**

This ProcessFlow syncs all the details of the Virtual Products from SAP Business One to Magento2. Virtual products can be anything that can have a subscription plans or can be waranty product etc. 
This ProcessFlow is also equipped with a Post Acknowledgement task that integrates Sync Back Flag details. 


-	**Virtual Product Update**

This ProcessFlow syncs the updated details of each Virtual products from SAP Business One to Magento2.


-	**Item Master Data Add [Virtual Product]** 

This ProcessFlow is featured to add all the Virtual Products from Magento2 to SAP Business One. This ProcessFlow will only add the following details of the Products: Product Name, SKU, Description, Wieght, Price & Currency.


-	**Item Master Data Update [Virtual Product]** 

This ProcessFlow is featured to Update the Virtual Products details from Magento2 to SAP Business One. This ProcessFlow will only update the following details of the Products: Product Name, Description, Wieght, Price, Currency & SKU.


-	**Web Item Master Data Add [Virtual Product]** 

This ProcessFlow is featured to add complete details of each Virtual Products from Magento2 to SAP Business One. The details are added with respect to the ProcessFlow, performing the ADD operation previously.


-	**Web Item Master Data Update [Virtual Product]** 

This ProcessFlow is featured to update complete details of each Virtual Products from Magento2 to SAP Business One. The details are updated with respect to the ProcessFlows, performing the ADD operation previously.


- **Product Images Add**

This ProcessFlow is featured to add the images of the Products from SAP Business One to Magento2. The following details of the images are synced: Image, Image Type, Image Label, Image Source Key.


- **Product Price :Update**

This ProcessFlow is featured to update the prices of the Products from SAP Business One to Magento2. The following relatred details are synced: Price & SKU .


- **Special Price : Add**

This ProcessFlow is featured to ADD Special Prices for various Products as per your business criteria, from SAP Business One to Magento2. The following related details are synced: Special price from start date to end date build upon Item SKUs.

- **Tier Price : Add**

This ProcessFlow is featured to ADD Tier Prices for Products as per your business criteria, from SAP Business One to Magento2. The Details of Tier Prices are synced based on the Item Code , Group Code etc.

-	**Inventory Update:**

This ProcessFlow is featured to sync and update your warehouse inventory stocks. This ProcessFlow will sync the Item Quantity against the item code available on your inventory. 


-	**Order Add:** 

This ProcessFlow is featured to sync the following details of each Sales Orders from your customer facing application to the destination application. The details are: Order Id, Customer Name, Product details, Product Unit Price, Ordered Quantity, Tax, VAT, Discount, Sales Order generation date and shipment details. 


-	**Delivery/Shipment Add:** 

This ProcessFlow is featured to sync the Delivery/Shipment docs generated against your Sales Order from Magento2 to SAP Business One. This flow sync the Shipment Tracking Number along with the Customer details, order details, and tax information’s. 
Delivery/Shipment Add is also equipped with a Post Acknowledgement task that integrates Sync Back ShipmentSyncFlag details.


- 	**Shipment Add:** 

This ProcessFlow is featured to sync the Shipment docs generated against your Sales Order SAP Business One to Magento2. This flow syncs the Shipment Tracking Number along with the Customer details, order details & Carrier Code. 
Shipment Add is also equipped with a Post Acknowledgement task that Updates Sync Back Flag details.


-	**ProcessFlow- A/R Down Payment Invoice : Add** 

This ProcessFlow is featured to sync the A/R Invoices of the Downpayments raised against the Sales Order Generated. The flow syncs the Item SKU, Quantity, and the Order Details from SAP Business One to Magento2. Invoice Add is also equipped with a Post Acknowledgement task that integrates Sync Back Invoice Flag details back to your Source Application.


-	**Invoice Add:** 

This ProcessFlow is featured to sync the Invoices from Magento2 to SAP Business One, raised against the Sales Order Generated. The flow syncs the Item SKU, Quantity, and the Order Details to your destination application. Invoice Add is also equipped with a Post Acknowledgement task that updates Sync Back Invoice Flag details back to your Source Application. Also, the ProcessFlow Invoice Add is featured to sync the payment type made for each invoice be it **Payment through Cash**, **Payment through Bank transfer**, **Payment through Cheque**


-	**A/R Invoice Add:** 

This ProcessFlow is featured to sync the A/R Invoices from SAP Business One to Magento2, raised against the Sales Order Generated . The flow syncs the Item SKU, Quantity, and the Order Details to your destination application. Invoice Add is also equipped with a Post Acknowledgement task that updates Sync Back Invoice Flag details back to your Source Application.


-	**A/R Down Payment Invoice : Add** 

This ProcessFlow is featured to sync the Downpayment Invoices raised against the Sales Order Generated. The flow syncs the Item SKU, Quantity, and the Order Details from Magento2 to SAP Business One. Also, this ProcessFlow is featured to sync the incoming payment types made for each invoice be it **Payment through Cash**, **Payment through Bank transfer**, **Payment through Cheque**


-	**Incoming Payment with CreditCard :Add** 

This ProcessFlow is featured to sync the Incoming Payments against the Sales Order Generated using Credit Card from Magento2 to SAP Business One. The flow syncs the related CardCode details, Invoice Details & Credit Card Details from Magento2 to SAP Business One.


## Action Filter configurations:

ProcessFlows in this package are pre-configured with the action filters that are required to GET and POST data from Source to Destination Application minimizing the implementation time. 
Have a glance on the [Action Filter](https://docs.appseconnect.com/processflow/manage-actions-actionfilters-errorfilters/) documentation, for more information.

## LookUp Mapping:
Your Package contains multiple Processflows and few of those Processflows may require mapping of specific values in certain fields as lookups. Few Processflow requires to create these lookups manually in the Reference Tables of the APPSeCONNECT [Repositories](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/). 
Follow the documentation of [Reference Tables](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/#reference-tables) for reference. The lookups listed below needs to be created in reference tables for the below mentioned ProcessFlow. The list is put based on the format given below:

[Processflow Name][Reference Table]

• [Order Add][Freight] 

• [Order Add][Tax]

## Extension Configuration Information:

This package comprises of the following prepackaged applications namely SAP Business One that requires to configure the required extension & Add Ons. 

Given below is the checklist of Extension & Add On’s required for this Package.

**SAP B1 Application**

•	Version: Supported SAP B1 Version are:

    - SAP B1 9.1

    - SAP B1 9.2

    - SAP B1 9.3V & Above

•	Add On: 

    - APPSeCONNECT_2.4.3.0_32 (For 32 Bit supported SAP Application)

    - APPSeCONNECT_2.4.10.0_64 (For 64 Bit supported SAP Application)

•	Description: This Add On is used for Web Item Master Data Configuration (created under Inventory Module) for adding web product details required for integration.


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