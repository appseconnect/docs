## Overview

The package **Magento2.X  - Dynamics NAV B2B** will let you integrate the pre-implemented ProcessFlows for your business processes integrations, seamlessly reducing your time and effort in configuring and design. 
One -Click installation allows you to access the packaged ProcessFlows designs and mappings. Amplify your revenue numbers and growth with Packages. 
Just Install, Deploy and Execute to integrate your ProcessFlows inbuilt in your package.

## Package Key Features

**Magento2.X  - Dynamics NAV B2B** will let you integrate all your business flows keeping and maintaining the complete transparency of your business integration. 
Checkout the Key Features of this package, listed below:

1.	Easy Package Sharing & Installation: Two step Package Sharing, and One Click Installation lets you share and unzip your packages with ease and reduces time and effort, encouraging Citizen Integration. Know more on [Processflow Packaging](https://docs.appseconnect.com/processflow/packaging-overview/)
2.	Automated Business Cycle Integration: Lets you just to plug and play every cycle of your B2B business process automatically 
3.	Pre-Implemented mappings: The process flows in this package are pre-implemented with all the mappings required for integrating your ProcessFlow minimizing the manual efforts. However, you are always welcome in altering the [mappings](https://docs.appseconnect.com/processflow/customising-attribute-mapping/) as per your business process. 
4.	Easy integrations of B2B Business Model: This package will let you sync the B2B business areas with Magento 2 and SAP Business One making your integrations cover the B2B areas as well.
5.  Generic Compatibility: This package is compatible with any Generic Versions of Dynamics NAV integrating its B2B Module with Magento2.

## Package Setup

You are few steps away from UNBOXing this package on your APPSeCONNECT Organisation. Check out the [Installation Manual](https://docs.appseconnect.com/processflow/processflow-package-installation/) for more details.
Your installed package will be available in the **Installed Process Folder**.

Study this documentation for the Configuration, Deploy & the Execution details.

## App Authentication Mechanism

The applications used in the package requires to be authenticated for its integration. 
Check out the list of our [pre-packaged connectors](https://docs.appseconnect.com/connectors/overview-of-application-connectors/) in which, the applications used in this package is listed, in order to view the authentication mechanism of the applications used in the package. 
Study your required application’s document to know about the Authentication and its API details.

This package comprises of the following Applications.

- [Dynamics NAV](https://docs.appseconnect.com/connectors/Dynamicsnav/)
- [Magento 2](https://docs.appseconnect.com/connectors/magento2/) (>=2.0.0.0)

If you have an application which has an application connector present on platform, you as a user require very small effort to configure the connector to work correctly with the application. 

## Packaged Processflows & Dependencies:

This package comes with pre-designed and mapped Processflows between your chosen applications which will enable you to Install, Deploy and Execute your flow seamlessly. With pre-implemented lookups and mappings, this Package will minimize your efforts to design and map your flow accordingly.  
Data Configuration is broadly classified into Master Data Configuration & Transactional Data Configuration. Your package may require both type of Data Configuration Processflows or simply transactional data Configuration, depending on your chosen application.

**This package has dependencies based on other ProcessFlows which are not available in this Package. However, this package, will require to integrate ProcessFlows from `Magento2.X  - Dynamics NAV B2B` package.** 
**The related dependent informations are provided in the package for `Magento2.X  - Dynamics NAV B2B B2C`.** 

Given below are the Transactional Data Configuration Details:

1. **Company Add [B2B]**

This ProcessFlow will integrate the newly on boarded Companies and their details to your B2B business line-up from Dynamics NAV to Magento2. The following Customer details will be synced: Company Group ID, First Name, Last Name, Email, Gender, Store id, Website id, City, postcode, Shipping Address, Billing Address, Country Address, and Telephone.
This ProcessFlow is also equipped with a Post-Acknowledgement flow that syncs back WebCustomerId & WebSyncFlag back to Dynamics NAV from Magento2.


2. **Company Update [B2B]**

This ProcessFlow will integrate the updated Companies and their details to your B2B business line-up from Dynamics NAV to Magento2. The Details that are synced while adding companies will only be updated.


3. **Contact Person Add (Dyanmics NAV to Magento) [B2B]**

This ProcessFlow is featured to add Contact Persons of the Companies from Dynamics NAV to Magento2. 
The following details of the Contact Person Add will be integrated: Customer id, email, first name, last name & Customer Business Relation. Both the flows in this ProcessFlow is also equipped with SyncBack that updates back a Post-Acknowledment value to the Source. All the Flows will be executed from SAP Business One to Magento2.


4. **Contact Person Update (SAP B1 to Magento) [B2B]**

This ProcessFlow is featured to Update the details of the Contact Persons of the Companies added to your business network. Only the details added will adding Contact Persons will be updated and synced from SAP Business One to Magento2.


5. **Customer Specific Special Price Add [B2B]**

This ProcessFlow is featured to add Company specific Special Prices from Dynamics NAV to Magento2. The following are the details that will be added on its sync: WebsiteId, customer id, pricelist details, Start & End Date, Product SKU, & Special.


6. **Customer Specific Special Price Update [B2B]**

This ProcessFlow is featured to update the added Company specific Special Prices frmom Dynamics NAV to Magento2. The following are the details that were added will only be updated when executed this ProcessFlow. 


7. **Customer Specific Tier Price Add [B2B]** 

This Processflow is featured to add Company Specific Tier prices from Dynamics NAV to Magento2. The following details would be added with this processflow: SourceKey, website id, pricelist id, discount type, Product SKU, Quantity, & Tier Price. 
This processflow is also equipped with a post - acknowledgement flow thats sync back Customer Tier Price Flag & Customer Tier Price Id from Magento2 to Dynamics NAV.


8. **Customer Specific Tier Price Update [B2B]** 

This Processflow is featured to UPDATE the customer specific tier prices from Dynamics NAV to Magento2. The details that were added in the processflow **Customer Specific Tier Price Add [B2B]** will only be updated on executing this processflow.
This processflow is will also update the post acknowledgment values of the syncs back the updated  Customer Tier Price Flag & Customer Tier Price Id from Magento2 to Dynamics NAV.

9. **Sales Representative Add [B2B]**

This Processflow is featured to add Sales Representatives of your Business Model from MS Dynamics NAV to Magento2. The following details would be synced upon its integration: Group ID, Email, First Name & Last Name.
This processflow will also sync back the Web Id and Sync Flag back to MS Dynamics NAV.

10. **Company Link to Sales Representative**

This Processflow is featured to add Sales Respresentatives against the Company profile from Dynamics NAV to Magento. The following details will be added: Sales Rep ID, Customer (Company) Id.

11. **Shipment add [Magento2.x to Dynamics NAV OP]**

This Processflow is featured to add Shipments from Magento to Dynamics NAV. The following details will be integrated: Order Increment Id, Shipment Web Id, Tracking Number and Application ID.

12. **Invoice Add [Magento2.x to Dynamics NAV OP]**

This Processflow is featured to add order Invoices from Magento to Dynamics NAV. The following details will be integrated: Order Increment Id, Application ID & Invoice Web ID.

13. **Shipment and Invoice add [Magento2.x to NAV]** 

This Processflow is featured with two different flows for integrating Shipment and Invoice on one go. Both the flows will be executed from Magento to Dynamics NAV.
The flow for adding SHIPMENT will integrate the following data: Order Increment Id, Shipment Web Id, Tracking Number & Application Id.
The flow for adding INVOICE will integrate the following data: Order Increment Id, Application Id & Invoice Web Id.


## Action Filter configurations:

ProcessFlows in this package are pre-configured with the action filters that are required to GET and POST data from Source to Destination Application minimizing the implementation time. 
Have a glance on the [Action Filter](https://docs.appseconnect.com/processflow/manage-actions-actionfilters-errorfilters/) documentation, for more information.

## LookUp Mapping:
Your Package contains multiple Processflows and few of those Processflows may require mapping of specific values in certain fields as lookups. Few Processflow requires to create these lookups manually in the Reference Tables of the APPSeCONNECT [Repositories](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/). 
Follow the documentation of [Reference Tables](https://docs.appseconnect.com/processflow/Lookup-repository-masterdata/#reference-tables) for reference. The lookups listed below needs to be created in reference tables for the below mentioned ProcessFlow. 
The list is put based on the format given below:

[Processflow Name][Reference Table]

• [  ][] 

• [  ][]

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
