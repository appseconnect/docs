---
title: "OLEDB Plugin"
toc: true
tag: developers
category: "Deployment"
menus: 
    plugins:
        title: "OLE"
        icon: fa fa-deployment
        weight: 9
        identifier: oleplugin
---
Plugin for AEC Database of Agent to Support any DBMS at client side/client server such that AEC can support databases like MS SQL, Oracle, etc. for keeping the log 
and other transaction details. Please follow the below steps to install database plugin in AEC agent using plugin manager.
OLEDB Plugin is now pre-packaged with AEC Agent and can be installed directly

1. Login to APPSeCONNECT agent using valid credentials
2. Click on the Settings icon
3. Click on the Plugins option from the menu  
![Agent Plugin Selection](/staticfiles/deployment/media/TransactionalStores/Agent_plugin-selection.png)
4. Select OleDb plugin appeared in the list of plugin manager.
5. Click on the Install button and confirm the installation  
![Plugin Manager](/staticfiles/deployment/media/TransactionalStores/PluginManager.png)
6. Select Microsoft OLE DB Provider for SQL Server and click on the Next button  
![Data Plugin Properties1](/staticfiles/deployment/media/TransactionalStores/DataPluginProperties1.png)
7. Select the server name from the Select server drop down.
8. Provide database username and password and also click on the Allow saving password checkbox
9. Select the target database from the Select database on the server drop down.
![Connection Setup](/staticfiles/deployment/media/TransactionalStores/ConnectionSetup.png)
10. Click on the Test Connection button.  
![Connection2](/staticfiles/deployment/media/TransactionalStores/Connection2.png)
11. Click on the Ok button.

**Protip** It is recommended to create a separate database to configure the database in the plugin.
{: .notice--info}