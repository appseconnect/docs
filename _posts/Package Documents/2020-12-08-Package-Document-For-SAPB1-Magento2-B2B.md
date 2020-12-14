## Overview

The package **SAP Business One - Magento2 B2B** will let you integrate the pre-implemented ProcessFlows for your business processes integrations, seamlessly reducing your time and effort in configuring and design. 
One -Click installation allows you to access the packaged ProcessFlows designs and mappings. Amplify your revenue numbers and growth with Packages. 
Just Install, Deploy and Execute to integrate your ProcessFlows inbuilt in your package.

## Additional Information

- Version Number – 1.0.0 
- Package Name - SAP B1 and Magento2 B2B Package 
- Created By –  INSYNC Solutions
- Last Modified - 08/12/2020 07:23:30 PM (Date & Time)
- Apps Used in the Package – SAP Business One & Magento2

## Package Key Features

**SAP Business One - Magento2 B2B** will let you integrate all your business flows keeping and maintaining the complete transparency of your business integration. 
Checkout the Key Features of this package, listed below:

1.	Easy Package Sharing & Installation: Two step Package Sharing, and One Click Installation lets you share and unzip your packages with ease and reduces time and effort, encouraging Citizen Integration. Know more on [Processflow Packaging](https://docs.appseconnect.com/processflow/processflow-packaging-overview/)
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


1. **ProcessFlow - Company Add**

i.	Flow Description: This ProcessFlow will integrate the newly on boarded Companies and their details to your B2B business line-up from SAP Business One to Magento2. The following Customer details will be synced: Company Group ID, First Name, Last Name, Email, Gender, Store id, Website id, City, postcode, Shipping Address, Billing Address, Country Address, and Telephone.

ii.	Dependency flow: Not Applicable 


2. **ProcessFlow - Company Update**

i.	Flow Description: This ProcessFlow will integrate the updated Companies and their details to your B2B business line-up from SAP Business One to Magento2. The Details that are synced while adding companies will only be updated.

ii.	Dependency flow: ProcessFlow - Company Add


3. **ProcessFlow- Contact Person Add to Magento**

i.	Flow Description: This ProcessFlow is featured to add Contact Persons of the Companies added to your business network. This ProcessFlow is also equipped with a flow for adding new Companies as well so as to keep accepting the incoming of new Companies and to avoid Document Mismatch errors. 
The following details of the Contact Person Add will be integrated: Customer id, email, first name, last name. Both the flows in this ProcessFlow is also equipped with SyncBack that updates back a Post-Acknowledment value to the Source. All the Flows will be executed from SAP Business One to Magento2.

ii.	Dependency flow: Not Applicable


4. **ProcessFlow - Contact Person Update to Magento**

i.	Flow Description: This ProcessFlow is featured to Update the details of the Contact Persons of the Companies added to your business network. Only the details added will adding Contact Persons will be updated and synced to Magento from SAP Business One.

ii.	Dependency flow: ProcessFlow- Contact Person Add to Magento


5. **ProcessFlow - PriceLists Add**

i.	Flow Description: This ProcessFlow is featured to sync the Price Lists from SAP Business One to Magento2. The following details of the PriceLists would be synced: website_id, pricelist name, status & Factor.

ii.	Dependency flow: Not Applicable 


6. **ProcessFlow - SalesRep Add**

i.	Flow Description: This ProcessFlow is featured to sync the Sales Representatives from SAP Business One to Magento2. This ProcessFlow is also featured to link the added SalesReps with the Companies added on your Business Process.
The following details of the Sales Represatatives would be added: First Name, Last Name, Gender, website id. The Flow for assigning the Sales Rep to Companies will add the Sales Rep Id and the Company customer ID.
The flow for adding SalesRep is also equipped with a SyncBack that Posts the Post-Acknowledgement status of the primary sync back to the Source Application.

ii.	Dependency flow: ProcessFlow - Company Add 


7. **ProcessFlow - Credit Limit Add**

i.	Flow Description: This ProcessFlow is featured to sync the credit limits from SAP Business One to Magento2, that are assigned to companies. This integration will sync the following details: Company ID & Credit Limit.

ii.	Dependency flow: ProcessFlow - Company Add 


8. **ProcessFlow - Credit Limit Update**

i.	Flow Description: This ProcessFlow is featured to sync Updated Credit Limits from SAP Business One to Magento2, that are assigned to companies. This integration will sync the following details: Company ID & Credit Limit.

ii.	Dependency flow: Not Applicable 


9. **ProcessFlow - Customer Specific Special Price Sync B2B**

i.	Flow Description: 

ii.	Dependency flow: Not Applicable 


10. **ProcessFlow - Price List Product Price Assign**

i.	Flow Description: 

ii.	Dependency flow: Not Applicable 


11: **ProcessFlow - Special Price : Add**

i.	Flow Description: 

ii.	Dependency flow: Not Applicable 

