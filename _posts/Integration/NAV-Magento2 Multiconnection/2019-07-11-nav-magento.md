---
title: "NAV-Magento 2 Multiple Connection"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    integration:
        title: "NAV-Magento 2 Multiple Connection"
        icon: fa fa-wpexplorer
        identifier: navmagentointegration
---

This section of the document will given you an overview of **NAV- Magento2 Mutliple Connection** Integration and the subsequent chapters  will drive 
you to the process of integration between the applications.

- Here multiple connections are required (i.e two atleast).
- User require more than one licence of APPSeCONNECT. 
- The unique thing is that though the whole process is similar to any single NAV-Magento connection, the basic requirement to 
  achieve this feature is that you need to have minimum of two (more than one always) individual MAGENTO templatebar 
  URL's and only one ERP that is NAV. 
 - The total number of Templatebar URL you have, indicates the number of connections you need to 
  create in your organization using this NAV-Magento 2 multiple connection template.

The basic pre-requisite and list of Master Data Processess for Integration is given below: 

## Prerequisites of Integration

1.	Login to the APPSeCONNECT Portal and select the app MAGENTO (with mutiple webstore) and NAV 2017.
2.	Navigate to the connections module and [create a connection](/getting%20started/configurations-for-integration/#configuring-connector-while-creating-connection) for both the selected applications.	
3.	Now navigate to the Workflow module, you can either [create a workflow](/workflow/steps-to-create-your-first-workflow/) or 
    can [choose a pre-packaged workflow](/workflow/steps-to-choose-your-workflow/).
4.	Before Integrating with [Dynamics NAV](/connectors/Dynamicsnav/) and [Magento2](/connectors/magento2/), all the master data needs to be synced. Master Data Sync is used 
    for synchronizing set of core information (viz. Websites, Product Category, Attribute set, and Tax Class etc.) from E-commerce database to SAP B1.

## List of Mandatory Tables with Connection ID & Connection Name fields

* AEC Application Customer
* AEC Application Item
* AEC Order header details
* AEC Contact Details
* AEC Customer Details
* AEC Ship to Address
* AEC Shipment Invoice Sync
* AEC Shipment Line
* Web Product Website 
* Web Product Attribute
* Web Product Category
* Web Product Details
* Web Product Child details
* All related Master Tables

**Note: Web Product Details CP Page should be list type page**

The view of Web Product Details CP Page is given below for quick reference

![webproduct-detailpage](/staticfiles/integration/media/webproduct-detailpage.png)  

## List of Master Data Processes

a.	Master Data Add [Attribute Sets/Attributes/Attribute Options]: - All the information about the Attribute Sets, Attributes and Attribute Options in Magento (multi webstore) will be synced into NAV.                       
c.	Master Data Add [Website List]: -  All the information about the Magento websites will be synced into NAV.              
d.	Master Data Add [Category]: - All the information about the Magento Category will be synced into NAV.                
e.	Master Data Add [Tax Class]: - All the information about the Magento Product Tax Class will be synced into NAV.         
            
Once all the core information is synced, you can proceed with further integrations. 

**NOTE: These processes need to be completed for each and every connection.**

You will also get detailed understanding of the [NAV](/connectors/Dynamicsnav/) & [Magento2](/connectors/magento2/) application agent configuration, endpoints, attibutes and actions required for integration.

## Table of Integration scenarios for NAV-Magento (Multiple Connection) Application is given below:

|Integration Areas|Source & Destination Application|Dependencies for Integration|
|---|-------------|---|
|[Simple Product Add NAV- Mage2 Multiconnection](/integration/simple-productadd/)|NAV-Magento2 Multi-store|Product Response Sync|
|[Simple Product Update NAV-Mage2 MultiConnection](/integration/simpleprdct-update/)|NAV-Magento2 Multi-store|NA|
|[Simple Product Add Mage2- NAV Multiconnection](/integration/simple-productadd-mage2tonav/)|NAV-Magento2 Multi-store|NA|
|[Configurable Product Add NAV- Mage2 Multiconnection](/integration/configproduct-add/)|NAV-Magento2 Multi-store|NA|
|[Configurable Product Update NAV- Mage2 Multiconnection](/integration/configprdt-update/)|NAV-Magento2 Multi-store|NA|
|[Customer Add Magento2-NAV Multiconnection](/integration/customeradd-mage2tonav/)|NAV-Magento2 Multi-store|NA|
|[Customer Add NAV- Magento2 Multiconnection](/integration/customeradd-navtomage2/)|NAV-Magento2 Multi-store|NA|
|[Contact Person Add NAV- Magento2 Multiconnection](/integration/contactperson-add/)|NAV-Magento2 Multi-store|NA|
[Contact Person Add/Update Magento2- NAV Multiconnection](/integration/contactperson-addupdate/)|NAV-Magento2 Multi-store|NA|
|[Inventory Update NAV- Magento2 Multiconnection](/integration/inventory-update/)|NAV-Magento2 Multi-store|NA|
|[Invoice Add NAV- Magento2 Multiconnection](/integration/invoice-add/)|NAV-Magento2 Multi-store|Payment with cheque, Payment with Bank Transfer, Payment with Cash|
|[Sales Order Add Magento2-NAV Multiconnection](/integration/sales-order/)|Magento2 Multi-store - NAV|NA|
|[Shipment Add NAV- Magento2 Multiconnection](/integration/shipment/)|NAV-Magento2 Multi-store|NA|



