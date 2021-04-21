## Overview

The package **WooCommerce - SAP Business One  B2C** will let you integrate the pre-implemented ProcessFlows for your business processes integrations, seamlessly reducing your time and effort in configuring and design both for your B2C Business Module. 
One -Click installation allows you to access the packaged ProcessFlows designs and mappings. Amplify your revenue numbers and growth with Packages. 
Just Install, Deploy and Execute to integrate your ProcessFlows inbuilt in your package.


## Package Key Features

**SAP Business One - WooCommerce** will let you integrate all your business flows keeping and maintaining the complete transparency of your business integration. 
Checkout the Key Features of this package, listed below:

1. Includes B2C Flows: This package supports and comprises of all the required B2C ProcessFlows at one place supporting your Business Module.
2. Easy Package Sharing & Installation: Two step Package Sharing, and One Click Installation lets you share and unzip your packages with ease and reduces time and effort, encouraging Citizen Integration. Know more on [Processflow Packaging](https://docs.appseconnect.com/processflow/processflow-packaging-overview/)
3. Automated Business Cycle Integration: Lets you just to plug and play every cycle of your business process automatically 
4. Pre-Implemented mappings: The process flows in this package are pre-implemented with all the mappings required for integrating your ProcessFlow minimizing the manual efforts. However, you are always welcome in altering the [mappings](https://docs.appseconnect.com/processflow/customising-attribute-mapping/) as per your business process. 

## Package Setup

You are few steps away from UNBOXing this package on your APPSeCONNECT Organisation. Check out the [Installation Manual](https://docs.appseconnect.com/processflow/processflow-package-installation/) for more details.
Your installed package will be available in the **Installed Process Folder**.

Study this documentation for the Configuration, Deploy & the Execution details.


## App Authentication Mechanism

The applications used in the package requires to be authenticated for its integration. 
Check out the list of our [pre-packaged connectors](https://docs.appseconnect.com/connectors/overview-of-application-connectors/) in which, the applications used in this package is listed, in order to view the authentication mechanism of the applications used in the package. 
Study your required application�s document to know about the Authentication and its API details.

This package comprises of the following Applications.

- [SAP Business One](https://docs.appseconnect.com/connectors/Sap-Business-One/) (>8.8)
- [WooCommerce](https://docs.appseconnect.com/connectors/woocommerce/) (2.6)

## Packaged Processflows & Dependencies:

This package comes with pre-designed and mapped Processflows between your chosen applications which will enable you to Install, Deploy and Execute your flow seamlessly. With pre-implemented lookups and mappings, this Package will minimize your efforts to design and map your flow accordingly.  
This package will not require any additional Configurational Master Data Sync which reduces additional Time and Efforts.

Given below are the Transactional Data Configuration Details:


1. **Customer Add**

This ProcessFlow will integrate the newly on boarded Customer and their details in your business line-up. The customers will be added from SAP Business One to WooCommerce. The following Customer details will be synced: CardCode, First Name, Last Name, Email, Username, Password, Billing Address, Shipping Address.
Your ProcessFlow is also featured with a SyncBack as a Post Acknowledgement Task that returns back SyncFlag status & ReturnEntityId back to SAP Business One.




2. **Customer Update**

This ProcessFlow is featured to updated the added Customer Details from SAP Business One to WooCommerce. The following Customer details will be updated: First Name, Last Name, Email, Billing Address, Shipping Address. 




3. **Business Partner Add**

This ProcessFlow is featured integrate the newly on boarded Customer and their details. The customers will be added from WooCommerce to SAP Business One. The following Customer details will be synced: Customer Id, Email, Name, Contact No, Customer Address, SyncFlag & ReturnEntityId.




4. **Business Partner Update**

This ProcessFlow is featured to update the added Customer details from WooCommerce to SAP Business One. The following Customer details will be updated: Customer Id, Email, Name, Contact No, Customer Address, SyncFlag & ReturnEntityId.


5. **Product Add [Simple]**

This ProcessFlow is featured to sync Simple Products from SAP Business One to WooCommerce. The following details of the simple products will synced: Product Name, SKU, Product Description, Product Remarks, Product Type, Wieght, Regular Price & Product Dimensions.
Your ProcessFlow is also featured with a SyncBack as a Post Acknowledgement Task that returns back the ReturnEntityId back to SAP Business One.


6. **Product Add**

This ProcessFlow is featured to sync Simple Products from WooCommerce to SAP Business One. The following details of the simple products will be synced: Item Code, Item Name, Product Description, Wieght, Price, Currency, PriceList, Product Dimensions & ReturnEntityId.



7. **Stock Update**

This ProcessFlow is featured to update the Stocks On Hand. The operation will be intergated from SAP Business One to WooCommerce. The ReturnEntityId along the with the stocks quantity will be synced to WooCommerce.


8. **Sales Order Add**

This ProcessFlow is featured to add B2C Sales Orders from WooCommerce to SAP Business One. This ProcessFlow is featured to sync the following details: Customer Details, Order Document Date, Order Id, Order Total, Item Details, Tax Details, Discount.


9. **Shipment Status Add**

This ProcessFlow is featured to sync the Shipment Status agaisnt your generated order from SAP Business One to WooCommerce. The ProcessFlow will sync the Shipment Status against Order ReturnEntityId.

Integrating these ProcessFlows will require [creation of Custom fields UDF's](https://help.sap.com/doc/e8d8abefb22343a586d744db9cba0bcb/9.3/en-US/How_to_Create_User_Defined_Fields_and_Tables.pdf) and installation of Stored Procedures, which would be provided On-Demand.


## Action Filter configurations:

ProcessFlows in this package are pre-configured with the action filters that are required to GET and POST data from Source to Destination Application minimizing the implementation time. 
Have a glance on the [Action Filter](https://docs.appseconnect.com/processflow/manage-actions-actionfilters-errorfilters/) documentation, for more information.

## LookUp Mapping:
Your Package contains multiple Processflows and few of those Processflows may require mapping of specific values in certain fields as lookups. Few Processflow requires to create these lookups manually in the Reference Tables of the APPSeCONNECT [Repositories](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/). 
Follow the documentation of [Reference Tables](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/#reference-tables) for reference. The lookups listed below needs to be created in reference tables for the below mentioned ProcessFlow. The list is put based on the format given below:

[Processflow Name][Reference Table]

�  [Product Add][Currency]

�  [Sales Order Add][TAX]

�  [Sales Order Add][Frieght]


## Extension Configuration Information:

Your package comprises of  the following prepackaged applications SAP Business One & WooCommerce, that requires extension & Add Ons. 

Given below is the checklist of Extension & Add On�s required for this Package.

**WooCommerce Application**

�	Version: WooCommerce 2.6 V & Above

�	Extension: insync-wp-rest-filter-1.0.3

�	Description: This is used For API Filtration with respect to Date & Time


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


## Deployment Setup
Deploying is an essential step for integrating your business flow. Environment needs to have the configuration deployed which drives the integration process. Check the [Deployment Documents](https://docs.appseconnect.com/deployment/overview/) to know about the steps to deploy your flow on your selected environment.

Once deployed, you need to click on the RUN button in the designer page to [execute your flow](https://docs.appseconnect.com/processflow/deploying-and-executing-processfloww/#executing-deployed-processflow). All its execution generates [SNAPSHOTS](https://docs.appseconnect.com/processflow/snapshot-processflow/) that will allow you to monitor the data synced with the execution attempt.