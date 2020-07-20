---
title: "HANA Plugin"
toc: true
tag: developers
category: "Deployment"
menus: 
    plugins:
        title: "Hana"
        icon: fa fa-deployment
        weight: 8
        identifier: hanaplugin
---

Working with SAP HANA Database requires SAP HANA Plugin that needs to be installed in the agent. 
HANA Plugin is now pre-packaged with AEC Agent and can be installed directly. This section of the document provides you the detailed instructions on the process of installing the SAP HANA Database Plugin in your System 
and how to use plugin in the adapter.

## Prerequisites
1.	SAP HANA Database installed in the system.
2.	The SAP client 32 Bit installed in the system.

## HANA Plugin Installation

As a Pre-requisite for Installing the Plugin, Configure the SAP HANA Database. The Detailed Procedure for SAP Hana installation is provided below.

1.	Login to the AEC Cloud Portal with the valid credentials. Download the SAP HANA Plugin from the download options in the portal.
![Downloading-HanaPlugin](/staticfiles/deployment/media/TransactionalStores/Downloading-HanaPlugin.png)
2.	Copy and Paste the .dll file on the Adapter Folder of the APPSeCONNECT File in your system. 
3.	Login to the On-Premise AEC Agent (credential as ADMINISTRATOR) with your cloud portal credential.
4.	Go to Agent- Settings. Click on Plugins.
5.	You will find the HANA Plugin present on the Plugin Manager Window.
![HanaPlugin-Manager](/staticfiles/deployment/media/TransactionalStores/HanaPlugin-Manager.png)
6.	Click HANA Plugin find the Install option below. Click and begin the Installation Process.
![HanaPlugin-Installation](/staticfiles/deployment/media/TransactionalStores/HanaPlugin-Installation.png)
7.	Enter details namely the  Driver Name, ServerIP, Serverport, UserID, Password, Database Name that you have 
configured in the database.  

![HanaPlugin-ConnectionString](/staticfiles/deployment/media/TransactionalStores/HanaPlugin-ConnectionString.png)

8. Right Click on the Hana Container > Properties > Hosts Used to Connect, to view the Port number.
![HanaContainer-Port](/staticfiles/deployment/media/TransactionalStores/HanaContainer-Port.png)

* Driver Name - This your SAP 32 Bit client environments driver name. 
* ServerIP - This is IP Address of your HANA container.
* Serverport - This is the port of the HANA container. 
* UserID -  Enter HANA Database Username
* Password -  Enter HANA Database Password
* Name - Enter name of database.

9. Click on SAVE. Successful message is delivered once the connection is validated.  

![HanaPlugin-ConnectionStringDetails](/staticfiles/deployment/media/TransactionalStores/HanaPlugin-ConnectionStringDetails.png)

**Protip** Before placing the .dll file in the Adapters Folder turn off the auto sync in the agent. Log off and exit the agent from the taskbar. Make sure to UNBLOCK Checkbox if ticked in the properties of .dll file
{: .notice--info}


The installation and configuration of the HANA Database will be done by the System Administrator 

The process of using hana plugin in [adapter](/sdk/overview-adapters/) is explained here.

## Integration scenarios with HANA Plugin

SAP HANA Plugin has been successfully tested for the application `MAGENTO2-SAP B1` for the touchpoints 
Business Partner Add and Sales Order Add.