## Overview

The package **SAP Service Layer - Prestashop B2C** will let you integrate the pre-implemented ProcessFlows for your business processes integrations, seamlessly reducing your time and effort in configuring and design both for your B2C and B2B Business Module. 
One -Click installation allows you to access the packaged ProcessFlows designs and mappings. Amplify your revenue numbers and growth with Packages. 
Just Install, Deploy and Execute to integrate your ProcessFlows inbuilt in your package.

## Package Key Features

**SAP Service Layer - Prestashop** will let you integrate all your business flows keeping and maintaining the complete transparency of your business integration. 
Checkout the Key Features of this package, listed below:

1. Easy Package Sharing & Installation: Two step Package Sharing, and One Click Installation lets you share and unzip your packages with ease and reduces time and effort, encouraging Citizen Integration. Know more on [Processflow Packaging](https://docs.appseconnect.com/processflow/processflow-packaging-overview/)
2. Automated Business Cycle Integration: Lets you just to plug and play every cycle of your business process automatically with the applications SAP Business One Service Layer & Prestashop.
3. Pre-Implemented mappings: The process flows in this package are pre-implemented with all the mappings required for integrating your ProcessFlow minimizing the manual efforts. However, you are always welcome in altering the [mappings](https://docs.appseconnect.com/processflow/customising-attribute-mapping/) as per your business process. 
4. Pre-implemented filters with variables: Processflows in this package are pre - implemented with variables that will allow only to alter on the variable configurations instead of the Filters used. However, you need to configure and create the variables as per your usage. Check this documentation further for the required details. 

## Package Setup

You are few steps away from UNBOXing this package on your APPSeCONNECT Organisation. Check out the [Installation Manual](https://docs.appseconnect.com/processflow/processflow-package-installation/) for more details.
Your installed package will be available in the **Installed Process Folder**.

Study this documentation for the Configuration, Deploy & the Execution details.

## App Authentication Mechanism

The applications used in the package requires to be authenticated for its integration. 
Check out the list of our [pre-packaged connectors](https://docs.appseconnect.com/connectors/overview-of-application-connectors/) in which, the applications used in this package is listed, in order to view the authentication mechanism of the applications used in the package. 
Study your required application’s document to know about the Authentication and its API details.

This package comprises of the following Applications.

- [SAP Service Layer](https://docs.appseconnect.com/connectors/Sap-Business-One-Service-Layer/) (S/L 9.0)
- [Prestashop](https://docs.appseconnect.com/connectors/Prestashop/) (>=1.5)

## Packaged Processflows & Dependencies:

This package comes with pre-designed and mapped Processflows between your chosen applications which will enable you to Install, Deploy and Execute your flow seamlessly. With pre-implemented lookups and mappings, this Package will minimize your efforts to design and map your flow accordingly.  
This package will not require any additional Configurational Master Data Sync which reduces additional Time and Efforts.

Given below are the Transactional Data Configuration Details:

1. **Customer & Address Add**

This processflow is equipped with two different flows with With SAP Business One Service Layer being the SOURCE for both.
This Processflow is equipped of adding new Customers in one flow and Address Details in the other. 
The following details will be synced with the **Customer Add** Flow: Password, First Name, Last Name, Email, Is_Guest & Source Key.
The following details will be synced with the **Address Add** Flow: Customer Id, City, First Name, Last Name, Postal Code, Address, Country Id, State Id, Contact No, Alias.

2. **Customer Add**
This ProcessFlow is featured to sync new incoming customers from Prestashop to SAP Business One Service Layer. The following details will be synced when integrated this processflow: CardCode, CardName, Group Code, Contact No, Email, Addresss Name,
Street, Block, ZIP Code, City, Country, State & U_WBCUSTADDID.

3. **Customer Group Price and Sync Update**

You will be having two different flows equipped with this ProcessFlow. Integrating this processflow, you can both ADD and UPDATE Customer Group Price from SAP Business One S/L to Prestashop.
The following details will be added when Customer Group Price is Integrated: Shop Group ID, Shop ID, Cart ID, Product ID, Currency ID, Country ID, Customer Group ID, Customer Id, Price, Quantity from & Reduction.
The details that were added in the previous flow, will be updated with this flow. This flow is also equipped with a sync back which returns back the U_GroupPriceSync and ItemCode back SAP Business One S/L.

4. **Simple Product Add**

This Processflow is equipped of adding Simple Products from SAP Business One S/L to Prestashop. The following details will be added when integrated this processflow: State, Shop Id, product price, Product Reference Id, Product Description, Tax group ID, Product Dimension, Product Add Date, 
Availability for Order, Product Condition, Minimal Quantity & Low Stock Alert.
This Processflow is also equipped with a sync back that returns back the Product Web Id back to SAP Business One Service Layer from Prestashop.

5. **Stock Update**

This Processflow will allow you update the Product Stocks from SAP Business One S/L to Prestashop. The following details will be updated integrating this processflow: Stock Data ID, Shop Id, Shop Group ID, Product ID, Product Attribute, Quantity, Depends on Stock value & Out of Stock Value.
This flow is also equipped with a sync back that return back and updates the Product Web Id from Prestashop to SAP Business One S/L.

6. **Sales Order Add**

This processflow is equipped with two different flows that updates existing Customer Details, simultaneously adds New Incoming Sales Orders both happening from Prestashop to SAP Business One S/L.
The flow for updating Customer Details will update the Customer Name along with the Address Details if any.
The flow for adding Sales Orders will add the following details when integrated: Document Type, Document date, Document Due Date, Card Code, Document Total, Document Object Code, Total Discount, Item Code, Quantity Ordered, Tax Code,
Unit Price, VAT Group, Shipping Address Details & Order Line Total.

7. **Invoice Upload**

This Processflow is will allow you to sync all the invoices generated against your Sales Order from SAP Business One S/L to Prestashop. The following details would be synced when integrated: Order ID, Order Number, Total Tax Paid, Total Product Expense, & Document Total.
The flow is also equipped with a sync back that returns back the updated Invoice Web ID from Prestashop to SAP Business One S/L.

## Action Filter configurations:

ProcessFlows in this package are pre-configured with the action filters that are required to GET and POST data from Source to Destination Application minimizing the implementation time. Store Variable are used within the `Action filters` to fetch the data from Source. For this Package, you need to configure the varaible within the each of the processflows 
with same naming convention used in the Action Filters. For The first instance of execution, your variable will store the value of the last data such that on next execution, all the data after the last execute date & time will be fetched. For more details on these Variable, Check out our feature document for [Store Variables](https://docs.appseconnect.com/processflow/working-with-variable/#capture-variables-utility)
Have a glance on the [Action Filter](https://docs.appseconnect.com/processflow/manage-actions-actionfilters-errorfilters/) documentation, for more information.

## LookUp Mapping:
Your Package contains multiple Processflows and few of those Processflows may require mapping of specific values in certain fields as lookups. You are required to create these lookups manually in the Reference Tables of the APPSeCONNECT [Repositories](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/). 
Follow the documentation of [Reference Tables](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/#reference-tables) for reference. The lookups listed below needs to be created in reference tables for the below mentioned ProcessFlow. 
The list is put based on the format given below:

[Processflow Name][Reference Table]

•  [Customer & Address Add][Customer Group]

•  [Sales Order Add][Tax]

•  [Sales Order Add][TaxCode]

•  [Customer Group Price and Sync Update][PriceListWebsite]

•  [Sales Order Add][TaxCode]

## Extension Configuration Information:

This package comprises of the following prepackaged applications namely SAP Business One Service Layer that requires to configure the required extension & Add Ons. For SAP Business One S/L, you are required to use the Addon for SAP Business One.
Given below is the checklist of Add On’s required for this Package.

**SAP B1 Application**

•	Version: Supported SAP B1 Version are:

    - SAP B1 9.1
    h
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


