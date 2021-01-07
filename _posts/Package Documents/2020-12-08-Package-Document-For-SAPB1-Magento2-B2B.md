## Overview

The package **Magento2.X  - SAP Business One B2B** will let you integrate the pre-implemented ProcessFlows for your business processes integrations, seamlessly reducing your time and effort in configuring and design. 
One -Click installation allows you to access the packaged ProcessFlows designs and mappings. Amplify your revenue numbers and growth with Packages. 
Just Install, Deploy and Execute to integrate your ProcessFlows inbuilt in your package.

## Additional Information

- Version Number – 1.0.0 
- Package Name - Magento2.X  - SAP Business One B2B Package 
- Created By –  INSYNC Solutions
- Last Modified - 08/12/2020 07:23:30 PM (Date & Time)
- Apps Used in the Package – SAP Business One (>= 8.8) & Magento2 (>=2.0.0.0)

## Package Key Features

**Magento2.X  - SAP Business One B2B** will let you integrate all your business flows keeping and maintaining the complete transparency of your business integration. 
Checkout the Key Features of this package, listed below:

1.	Easy Package Sharing & Installation: Two step Package Sharing, and One Click Installation lets you share and unzip your packages with ease and reduces time and effort, encouraging Citizen Integration. Know more on [Processflow Packaging](https://docs.appseconnect.com/processflow/packaging-overview/)
2.	Automated Business Cycle Integration: Lets you just to plug and play every cycle of your business process automatically 
3.	Pre-Implemented mappings: The process flows in this package are pre-implemented with all the mappings required for integrating your ProcessFlow minimizing the manual efforts. However, you are always welcome in altering the [mappings](https://docs.appseconnect.com/processflow/customising-attribute-mapping/) as per your business process. 
4.	Easy integrations of B2B Business Model: This package will let you sync the B2B business areas with Magento 2 and SAP Business One making your integrations cover the B2B areas as well.

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

- [SAP Business One](https://docs.appseconnect.com/connectors/Sap-Business-One/)
- [Magento 2](https://docs.appseconnect.com/connectors/magento2/) 

If you have an application which has an application connector present on platform, you as a user require very small effort to configure the connector to work correctly with the application. 

## Packaged Processflows & Dependencies:

This package comes with pre-designed and mapped Processflows between your chosen applications which will enable you to Install, Deploy and Execute your flow seamlessly. With pre-implemented lookups and mappings, this Package will minimize your efforts to design and map your flow accordingly.  
Data Configuration is broadly classified into Master Data Configuration & Transactional Data Configuration. Your package may require both type of Data Configuration Processflows or simply transactional data Configuration, depending on your chosen application.

**This package has dependencies based on other ProcessFlows which are not available in this Package. However, SAP Business One - Magento2 B2B package, will require to integrate ProcessFlows from `SAP Business One - Magento2 B2C` package.** 
**The related dependent informations are provided in the package for `SAP Business One - Magento2 B2C`.** 

Given below are the Transactional Data Configuration Details:

1. **Company Add [B2B]**

i.	Flow Description: This ProcessFlow will integrate the newly on boarded Companies and their details to your B2B business line-up from SAP Business One to Magento2. The following Customer details will be synced: Company Group ID, First Name, Last Name, Email, Gender, Store id, Website id, City, postcode, Shipping Address, Billing Address, Country Address, and Telephone.


2. **Company Update [B2B]**

i.	Flow Description: This ProcessFlow will integrate the updated Companies and their details to your B2B business line-up from SAP Business One to Magento2. The Details that are synced while adding companies will only be updated.


3. **Contact Person Add (SAP B1 to Magento) [B2B]**

i.	Flow Description: This ProcessFlow is featured to add Contact Persons of the Companies added to your business network. This ProcessFlow is also equipped with a flow for adding new Companies as well so as to keep accepting the incoming of new Companies and to avoid Document Mismatch errors. 
The following details of the Contact Person Add will be integrated: Customer id, email, first name, last name. Both the flows in this ProcessFlow is also equipped with SyncBack that updates back a Post-Acknowledment value to the Source. All the Flows will be executed from SAP Business One to Magento2.


4. **Contact Person Update (SAP B1 to Magento) [B2B]**

i.	Flow Description: This ProcessFlow is featured to Update the details of the Contact Persons of the Companies added to your business network. Only the details added will adding Contact Persons will be updated and synced from SAP Business One to Magento2.


5. **Contact Person Update (Magento to SAP B1) [B2B]**

i.	Flow Description: This ProcessFlow is featured to update the details of the Contact Persons of the Companies. All the details of the Contact Persons will be updated from Magento2 to SAP Business One.


6. **PriceLists Add [B2B]**

i.	Flow Description: This ProcessFlow is featured to sync the Price Lists from SAP Business One to Magento2. The following details of the PriceLists would be synced: website_id, pricelist name, status & Factor.


7. **SalesRep Add**

i.	Flow Description: This ProcessFlow is featured to sync the Sales Representatives from SAP Business One to Magento2. This ProcessFlow is also featured to link the added SalesReps with the Companies added on your Business Process.
The following details of the Sales Represatatives would be added: First Name, Last Name, Gender, website id. The Flow for assigning the Sales Rep to Companies will add the Sales Rep Id and the Company customer ID.
The flow for adding SalesRep is also equipped with a SyncBack that Posts the Post-Acknowledgement status of the primary sync back to the Source Application.


8. **Credit Limit Add**

i.	Flow Description: This ProcessFlow is featured to sync the credit limits from SAP Business One to Magento2, that are assigned to companies. This integration will sync the following details: Company ID & Credit Limit.


9. **Credit Limit Update**

i.	Flow Description: This ProcessFlow is featured to sync Updated Credit Limits from SAP Business One to Magento2, that are assigned to companies. The integration will update only the added details of Credit Limits.


10. **Customer Specific Special Price Add [B2B]**

i.	Flow Description: This ProcessFlow is featured to sync Customer Specific Special Price from SAP Business One to Magento2. The following details are synced when integrated: website id, company id, pricelist id, discount type, Start Date, End Date & Product Details.


11. **Customer Specific Special Price Update [B2B]**

i.	Flow Description: This ProcessFlow is featured to Update the Customer Specific Special Price from SAP Business One to Magento2. All the details that were added previously will only updated with this ProcessFlow.


12. **Customer Specific TierPrice Add B2B**

i.	Flow Description: This ProcessFlow is featured to add Tier Prices, customer specific from SAP Business One to Magento2. The following details would be synced: website id, company id, pricelist id, discount type & Product details.


13. **Customer Specific TierPrice Sync Update B2B**

i.	Flow Description: This ProcessFlow is featured to update the customer specific Tier Prices from SAP Business One to Magento2. The details synced with the ADD opration will only be updated when triggered this ProcessFlow.


14. **PriceList specific Product Price Add [B2B]**

i.	Flow Description: This ProcessFlow is featured to add Product Specific Pricelists from SAP Business One to Magento2. The PriceLists ID, Product SKU and Product Price will be added using this ProcessFlow.


## Action Filter configurations:

ProcessFlows in this package are pre-configured with the action filters that are required to GET and POST data from Source to Destination Application minimizing the implementation time. 
Have a glance on the [Action Filter](https://docs.appseconnect.com/processflow/manage-actions-actionfilters-errorfilters/) documentation, for more information.

## LookUp Mapping:
Your contains multiple Processflows and few of those Processflows may require mapping of specific values in certain fields as lookups. Few Processflow may need you to create these lookups manually in the Reference Tables of the APPSeCONNECT Repositories. 
Follow the documentation of Reference Tables for reference. The lookups listed below needs to be created in reference tables for the below mentioned ProcessFlow. The list is put based on the format given below:

[Processflow Name][Reference Table]

• [Order Add][Freight] 

• [Order Add][Tax]

**Your Package doesnt consist of ProcessFlow for Adding Orders, however, you need to use dependent ProcessFlows available in the `SAP Business One - Magento2 B2C` package.**

## Extension Configuration Information:

If your package comprises of prepackaged applications namely SAP, SAP ByDesign, Dynamics GP, Dynamics NAV Extension & WooCommerce, you need to configure the required extension & Add Ons. 

Given below is the checklist of Extension & Add On’s required for these applications.

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
