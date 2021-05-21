---
title: "SAPB1-Magento2"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    integration:
        title: "SAPB1-Magento2"
        icon: fa fa-wpexplorer
        identifier: sapbmagentointegration
---

This section of the document will given you an overview of **SAP B1- Magento 2** Integration and the subsequent chapters  will drive 
you to the process of integration between the applications.

The basic pre-requisite and list of Master Data Processess for Integration is given below: 

## Prerequisites of Integration

1.	Login to the APPSeCONNECT Portal and [choose the app](/getting%20started/configurations/#process-of-choosing-app) MAGENTO2 and SAP Business One (≥8.8)
2.	Navigate to the connections module and [create a connection](/getting%20started/configurations-for-integration/#configuring-connector-while-creating-connection) for both the selected applications.	
3.	Now navigate to the Workflow module, you can either [create a workflow](/workflow/steps-to-create-your-first-workflow/) or 
    can [choose a pre-packaged workflow](/workflow/steps-to-choose-your-workflow/).
4.	Before Integrating with [SAP Business One](/connectors/Sap-Business-One/) and [Magento2](/connectors/magento2/), all the master data needs to be synced. Master Data Sync is used 
    for synchronizing set of core information (viz. Websites, Product Category, Attribute set, and Tax Class etc.) from E-commerce database to SAP B1. Users need to make sure the [environment](/getting%20started/configurations-for-integration/#configuring-environment---agent-download--cloud-agent-configuration) is configured accordingly. 
5. Install [SAP Addon](/connectors/Sap-Business-Addon/) for integration.

## List of Master Data Processes

a.	Master Data Add [Attributes/Attribute Sets/Attribute Options]: - All the information about the Attributes, Attribute Sets and Attribute Options in Magento will be synced into SAP B1.                       
c.	Master Data Add [Website]: -  All the information about the Magento website will be synced into SAP B1.              
d.	Master Data Add [Customer Group]: - All the information about the Magento Customer Group will be synced into SAP B1.                
e.	Master Data Add [Tax Class]: - All the information about the Magento Product Tax Class will be synced into SAP B1.          
f.	Master Data Add [Country]: - All the information about the Magento country will be synced.   
h.  Master Data Add [Category]: - All the information about the Magento product category will be synced.              

Once all the core information is synced, you can proceed with further integrations. 

You will also get detailed understanding of the [SAPB1](/connectors/Sap-Business-One/) & [Magento2](/connectors/magento2/) application agent configuration, endpoints, attibutes and actions required for integration.

## Table of Integration scenarios for SAPB1-Magento2 Application is given below:

|Integration Areas|Source & Destination Application|Dependencies for Integration|
|---|-------------|---|
|[Business Partner Add](/integration/business-partneradd/)|Magento2-SAPB1|Contact Person Update (Only for B2B Customers)|
|[Product Add](/integration/productadd/)|SAPB1-Magento2|Product Response Sync|
|[Inventory Update](/integration/inventoryupdate/)|SAPB1-Magento2|NA|
|[Order Add](/integration/order-add/)|Magento2-SAPB1|NA|
|[Invoice Add](/integration/invoice-add/)|Magento2-SAPB1|Payment with cheque, Payment with Bank Transfer, Payment with Cash|



