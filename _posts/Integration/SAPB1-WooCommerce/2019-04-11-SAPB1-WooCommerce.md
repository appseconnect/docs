---
title: "SAPB1-WooCommerce"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    integration:
        title: "SAPB1-WooCommerce"
        icon: fa fa-wpexplorer
        identifier: sapwoocommerceintegration
---

This section of the document will given you an overview of **SAP B1- WooCommerce** Integration and the subsequent chapters  will drive 
you to the process of integration between the applications.

The basic pre-requisites for the integration between SAP Business One and WooCommerce are given below:

## Prerequisites of Integration

1.	Login to the APPSeCONNECT Portal and [choose the app]() WooCommerce (>=2.6) and SAP Business One (≥8.8)
2.	Navigate to the connections module and [create a connection]() for both the selected applications. Navigate to the Touchpoints page to activate the pre-packaged touchpoints 
    by clicking on the [Choose Touchpoint]() button.
3.	Now navigate to the Workflow module, you can either [create a workflow]() or [can choose a pre-packaged workflow]().
4.	Before Integrating with [SAP Business One]() and [WooCommerce](), Users need to make sure the environment is configured accordingly.
5.	Install [SAP Addon]() for integration.

## Table of Integration scenarios for SAPB1-WooCommerce Application is given below:

|Integration Areas|Source & Destination Application|Dependencies for Integration|
|---|-------------|---|
|Business Partner Add|WooCommerce-SAP Business One|N/A|
|Product Add|SAP Business One-WooCommerce|Product Web Id Response|
|Sales Order Add|WooCommerce-SAP Business One|N/A|

**Note: All the dependency touchpoints are triggered automatically along with the primary touchpoints.** 




