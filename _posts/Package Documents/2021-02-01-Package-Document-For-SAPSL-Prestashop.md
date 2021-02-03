## Overview

The package **SAP Service Layer - Prestashop B2C** will let you integrate the pre-implemented ProcessFlows for your business processes integrations, seamlessly reducing your time and effort in configuring and design both for your B2C and B2B Business Module. 
One -Click installation allows you to access the packaged ProcessFlows designs and mappings. Amplify your revenue numbers and growth with Packages. 
Just Install, Deploy and Execute to integrate your ProcessFlows inbuilt in your package.

## Package Key Features

**SAP Service Layer - Prestashop** will let you integrate all your business flows keeping and maintaining the complete transparency of your business integration. 
Checkout the Key Features of this package, listed below:

1. Easy Package Sharing & Installation: Two step Package Sharing, and One Click Installation lets you share and unzip your packages with ease and reduces time and effort, encouraging Citizen Integration. Know more on [Processflow Packaging](https://docs.appseconnect.com/processflow/processflow-packaging-overview/)
2. Automated Business Cycle Integration: Lets you just to plug and play every cycle of your business process automatically 
3. Pre-Implemented mappings: The process flows in this package are pre-implemented with all the mappings required for integrating your ProcessFlow minimizing the manual efforts. However, you are always welcome in altering the [mappings](https://docs.appseconnect.com/processflow/customising-attribute-mapping/) as per your business process. 
4. Multiple Product Types Support: This package will enable you to sync product of types: Configurable products, bundle products, virtual products, downloadable products etc.

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

3. 


## LookUp Mapping:
Your Package contains multiple Processflows and few of those Processflows may require mapping of specific values in certain fields as lookups. You are required to create these lookups manually in the Reference Tables of the APPSeCONNECT [Repositories](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/). 
Follow the documentation of [Reference Tables](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/#reference-tables) for reference. The lookups listed below needs to be created in reference tables for the below mentioned ProcessFlow. 
The list is put based on the format given below:

[Processflow Name][Reference Table]

•  [Customer & Address Add][Customer Group]

•  [][]
