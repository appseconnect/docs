---
title: "Getting started with deployment"
toc: true
tag: developers
category: "Deployment"
menus: 
    header:
        title: Deployment
        icon: fa fa-deployment
        weight: 1        
---

# Getting started with deployment

This section lets you get started with the deploying processes and components to an environment for APPSeCONNECT.

APPSeCONNECT Components for deployment includes the following items:

* AGENT
* ADAPTER
* PLUGINS
* ADDONS
* EXTENSIONS

1) AGENT - APPSeCONNECT Agent is a special tool that can be downloaded on your own Server and does the actual data
synchronization with on-premise application with the help of Adapters.The Agent is a background service which runs 
as per your configuration running on schedule, either automatically or manually, and syncing data between applications. 
The Agent is capable of responding to any configurational changes and can retain that application configuration until
the next change. 

2) ADAPTER -  Adapter represents an interface between an APPLICATION and APPSeCONNECT. 
An adapter is one of the intregal component which connects your app with APPSeCONNECT. 
There are few responsibilities of an adapter which are defined as under: 

 * Create a credentials view which allows connecting to the respective APP where you want to connect.
 * Create Push and Pull method inside the adapter which can send and receive data to and from the application.
 * Add additional business behavior with respect to the corresponding app.

The Adapter is loaded dynamically by the Agent and calls some specific methods using a fixed contract defined as an interface. 

3) PLUGINS - Plugin for AEC Database of Agent to Support any DBMS at client side/client-server such that AEC can support 
databases like MYSQL,HANA,OLE-DB, Oracle, etc. for keeping a log and other transaction details. 

4) ADDONS - AEC Add-on extends the functionality of a certain program but they are usually meant to function on a certain program. 

5) EXTENSIONS - APPSeCONNECT extension is something that is specific to the browser, and they are a bit different on 
each browser, but tend to be able to learn more about the overall state of the browser; they may be automatically 
added to pages, accessible separately from a page, etc.

