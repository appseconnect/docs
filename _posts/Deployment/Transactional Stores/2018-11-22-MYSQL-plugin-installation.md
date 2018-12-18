---
title: "MYSQL Plugin"
toc: true
tag: developers
category: "APPSeCONNECT"
menus: 
    environment:
        title: "MYSQL"
        icon: fa fa-deployment
        weight: 7
        identifier: mysqlplugin
---

This Document provides you the detailed instructions on how to install the MySQL Database ODBC Connector in your System.

## Prerequisites

1.	MYSQL Database installed in the system.
2.	MYSQL Connector ODBC  installed in the system. Visit [this](https://dev.mysql.com/downloads/connector/odbc/) link to download the ODBC Connector.

## MYSQL Plugin Installation

As a Pre-requisite for Installing the Plugin, you need to specify few Configurations. The Detailed Procedure is provided below.

1.	After Installing the MySQL ODBC Connector and the MySQL Database, Login to your Local Database with the Password that was 
 provided by you during its Installation.

2.	Click on Database > Connect to Database.

3.	Create a new Schema with a proper Name and click APPLY. The defined Schema appears on the Leftside of the screen. 

4.  The Schema is created. Now open ADMINISTRATIVE TOOLS from Control Panel. 

5.	Double Click ODBC Data Sources (32 bit). Click System DSN tab for its window to open and Click on ADD.

6. Select MySQL ODBC Unicode from the window that opens and click on Finish.

7.	You can now view the Driver present in this window.

8.  Once You are done with these Prerequisites, Download the MySQL ODBC Plugin form the Cloud Portal of AEC.

9.  After the download is complete Copy and Paste the .dll file on the Adapter Folder of the APPSeCONNECT File in your system. 

10. Log Off and Exit your OP agent and Login again.

11. Go to setting button of the agent & Click on Plugins. You can view the MySQL Plugin, present on the Plugin Manager Window.  