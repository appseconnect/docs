---
title: "NAV-Magento 2 Multiple Connection"
toc: true
tag: developers
category: "Integration"
menus: 
    integration:
        title: "NAV-Magento 2 Multiple Connection"
        icon: fa fa-wpexplorer
        identifier: navmagentointegration
---

This section of the document will given you an overview of **NAV- Magento2 Mutliple Connection** Integration and the subsequent chapters  will drive 
you to the process of integration between the applications.

The basic pre-requisite and list of Master Data Processess for Integration is given below: 

## Prerequisites of Integration

1.	Login to the APPSeCONNECT Portal and select the app MAGENTO (with mutiple webstore) and NAV 2017.
2.	Navigate to the connections module and [create a connection](/getting-started/#creating-connection--executing-the-touchpoint) for both the selected applications.	
3.	Now navigate to the Workflow module, you can either [create a workflow](/workflow/steps-to-create-your-first-workflow/) or 
    can [choose a pre-packaged workflow](/workflow/steps-to-choose-your-workflow/).
4.	Before Integrating with [Dynamics NAV]() and [Magento2](/connectors/Magento2/), all the master data needs to be synced. Master Data Sync is used 
    for synchronizing set of core information (viz. Websites, Product Category, Attribute set, and Tax Class etc.) from E-commerce database to SAP B1.

## List of Master Data Processes

a.	Master Data Add [Attribute Sets/Attributes/Attribute Options]: - All the information about the Attribute Sets, Attributes and Attribute Options in Magento (multi webstore) will be synced into NAV.                       
c.	Master Data Add [Website List]: -  All the information about the Magento websites will be synced into NAV.              
d.	Master Data Add [Category]: - All the information about the Magento Category will be synced into NAV.                
e.	Master Data Add [Tax Class]: - All the information about the Magento Product Tax Class will be synced into NAV.         
            
Once all the core information is synced, you can proceed with further integrations. 

You will also get detailed understanding of the [NAV](/connectors/Dynamicsnav-Business-Central/) & [Magento2](/connectors/Magento2/) application agent configuration, endpoints, attibutes and actions required for integration.

## Table of Integration scenarios for NAV-Magento (Multiple Connection) Application is given below:

|Integration Areas|Source & Destination Application|Dependencies for Integration|
|---|-------------|---|
|[Simple Product Add](/integration/simple-productadd/)|NAV-Magento2 Multi-store|Product Response Sync|
|[Inventory Update](/integration/inventory-update/)|NAV-Magento2 Multi-store|NA|
|[ Invoice Add ](/integration/invoice/)|NAV-Magento2 Multi-store|Payment with cheque, Payment with Bank Transfer, Payment with Cash|
|[Sales Order Add](/integration/sales-order/)|Magento2 Multi-store - NAV|NA|
|[Shipment Add](/integration/shipment/)|NAV-Magento2 Multi-store|NA|



