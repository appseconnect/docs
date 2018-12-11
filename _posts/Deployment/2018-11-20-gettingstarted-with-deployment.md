---
title: "Getting started with deployment"
toc: true
tag: developers
category: "Deployment"
menus: 
    deployment:
        icon: fa fa-gg
        title: "Getting started"
        identifier: gsdeployment
               
---

This section lets you get started with the deploying processes and components to an environment for APPSeCONNECT.

`APPSeCONNECT Components` for deployment includes the following items:

* AGENT
* ADAPTER
* PLUGINS
* ADDONS
* EXTENSIONS

1) **AGENT** - APPSeCONNECT Agent is a special tool that can be downloaded on your own Server and does the actual data
synchronization with on-premise application with the help of Adapters.The Agent is a background service which runs 
as per your configuration running on schedule, either automatically or manually, and syncing data between applications. 
The Agent is capable of responding to any configurational changes and can retain that application configuration until
the next change. 

2) **ADAPTER** -  Adapter represents an interface between an APPLICATION and APPSeCONNECT. 
An adapter is one of the intregal component which connects your app with APPSeCONNECT. 
There are few responsibilities of an adapter which are defined as under: 

 * Create a credentials view which allows connecting to the respective APP where you want to connect.
 * Create Push and Pull method inside the adapter which can send and receive data to and from the application.
 * Add additional business behavior with respect to the corresponding app.

The Adapter is loaded dynamically by the Agent and calls some specific methods using a fixed contract defined as an interface. 

3) **PLUGINS** - Plugin for AEC Database of Agent to Support any DBMS at client side/client-server such that AEC can support 
databases like MYSQL,HANA,OLE-DB, Oracle, etc. for keeping a log and other transaction details. 

4) **ADD ONS** - AEC Add-on extends the functionality of a certain program but they are usually meant to function on a certain program. 

5) **EXTENSIONS** - APPSeCONNECT extension is something that is specific to the browser, and they are a bit different on 
each browser, but tend to be able to learn more about the overall state of the browser; they may be automatically 
added to pages, accessible separately from a page, etc.

Deployment primarly talks about APPSeCONNECT Agent which is your own on-premises tool which needs to be installed on your own server to start doing the actual sync operation.

##  System Requirement for Agent Installation. 

APPSeCONNECT Agent is a tool that is installed on-premise and does the actual sync, 
so to get the highest performance on your sync operation, you should have a good hardware and best connectivity 
and network speed. Prefer using local IP to connect to your application if the app is accessible using LAN to 
improve performance, but with a high-speed network, APPSeCONNECT also performs great with remotely. 

Here is a list of minimum requirement for APPSeCONNECT to run : 

* 2 GHz Processor or faster 32-bit (x86) or 64-bit (x64)
* 4 GB RAM 
* At least 1 GB of Hard disk space in system drive.
* Windows Vista SP 2 and above or Windows Server 2008 SP 2 and above.
* Updated graphics drivers (Always best for performance)
* .NET Framework 4.6.1 or above
* Internet connectivity to get configurations and activation of the agent.
* Administrative user
* Internet browser to access our cloud portal (at portal.appseconnect.com)
* Dedicated bandwidth of 1 Mbps.

For best performance, our Agent will require admin rights so that it can install our agent and can have universal access
to all the required folders. 

APPSeCONNECT also installs a background agent which will be installed in Local System account
and would access the local application data folder to store cache and log files. 

Please ensure local system account have proper privilege to access "Installation directory".

To run APPSeCONNECT, you need to make sure of few things : 

You should whitelist the following URLs from Network Firewall settings :
https://admin.appseconnect.com
https://cloud.appseconnect.com
https://appsdrive.blob.core.windows.net/
https://services.appseconnet.com/

**Protip:** We also require you to keep some of the Ports Open for APPSeCONNECT. 
Here is the list : 8080, 443, 59051, 59050.{: .notice--info}