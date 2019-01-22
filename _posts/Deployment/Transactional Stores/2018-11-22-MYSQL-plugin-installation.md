---
title: "MYSQL Plugin"
toc: true
tag: developers
category: "Deployment"
menus: 
    plugins:
        title: "MYSQL"
        icon: fa fa-deployment
        weight: 7
        identifier: mysqlplugin
---
Working with MySQL Database requires MySQL Plugin that needs to be installed in the agent. 
MySQL Plugin is now pre-packaged with AEC Agent and can be installed directly. 
This Document provides you the detailed knowhow on the installation process of MySQL Database ODBC Connector in your System.

## Prerequisites

1.	MYSQL Database installed in the system.
2.	MYSQL Connector ODBC  installed in the system. Visit [this](https://dev.mysql.com/downloads/connector/odbc/) link to download the ODBC Connector.

## MYSQL Plugin Installation

As a Pre-requisite for Installing the Plugin, you need to specify few Configurations. The Detailed Procedure is provided below.

*  MySQL ODBC Connector and the MySQL Database is now installed in your system. Login to your Local Database with the Password that was 
 provided by you during its Installation.
* Click Database > Connect to Database.
![MYSQLBench](/staticfiles/deployment/media/TransactionalStores/MYSQLBench.png)
* Create a new Schema with a proper Name and click APPLY. The defined Schema appears on the Leftside of the screen. 
![Defined-Schema](/staticfiles/deployment/media/TransactionalStores/Defined-Schema.png)
* The Schema is now created. Open **ADMINISTRATIVE TOOLS** from Control Panel. 
* Double Click ODBC Data Sources (32 bit). Click `System DSN` tab for its window to open and Click ADD. **Here Choosing User DSN will 
fetch errors, so System DSN needs to be choosen**.
![SystemDSN-tab](/staticfiles/deployment/media/TransactionalStores/SystemDSN-tab.png)
* A window appears, Select MySQL ODBC Unicode and click Finish.
![MYSQL-ODBC-Code](/staticfiles/deployment/media/TransactionalStores/MYSQL-ODBC-Code.png)
* Input the details as shown below for the fields Data Source Name (No Specific Naming convention, can be any name), TCP/IP Server, Port, 
  User and Password (The Password that was provided during the MySQL Installation). Click on Test button.
![Mysqlconnector-ODBC](/staticfiles/deployment/media/TransactionalStores/Mysqlconnector-ODBC.png)
* You can now view the Driver present in this window.
![SystemDSN-Driver](/staticfiles/deployment/media/TransactionalStores/SystemDSN-Driver.png)

*  Once You are done with these Prerequisites, Download the MySQL ODBC Plugin form the Cloud Portal of AEC.
* After the download is complete Copy and Paste the .dll file on the Adapter Folder of the APPSeCONNECT File in your system. 
* Log Off and Exit your OP agent and Login again.

* Go to setting button of the agent & Click on Plugins. You can now view the MySQL Plugin, present on the Plugin Manager Window.  
![Downloading-MySQLPlugin](/staticfiles/deployment/media/TransactionalStores/Downloading-MySQLPlugin.png)

## Integration scenarios with MySQL Plugin

MySQL Plugin has been successfully tested for the various application like `MS Dynamics GP-Shopify for the touchpoints Product Add Variant,
Inventory Update and Price Update`.

Similarly this has been tested for the `Application Magento 2 and SAP B1 for the touchpoints Business Partner Add and Simple product Add`.