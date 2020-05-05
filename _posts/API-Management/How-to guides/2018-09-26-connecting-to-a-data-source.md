---
title: "Connecting an API to any data source"
toc: true
tag: 
    - developers
    - implementation
category: "API-Management"
menus: 
    howtoapi:
        icon: fa fa-gg
        category: "How to guides"
        title: "Connecting to external data source" 
---

In today's world,organizations are having multiple data sources.With distrubuted architechture in place,these data sources are existing independently and scatteredly.It can be tricky to manage all these datasources alltoghether.

By designing and building an API,one can connect to any data source,be it a Database or any REST API or a SOAP based API and thus can easily manage all these data sources.

## Steps to connect to a data source.

If you are creating **API proxy** for the `First Time`, you are being presented with a Wizard like this.

![How To Connect Data Source Wizard](/staticfiles/api-management/media/HowToConnectDataSource-Wizard.png)

 * After Providing API Proxy Details and `Inbound Policy` details (if applicable) you will get to **Backend Service** tab.
 

![How To Connect Data Source Selectapp](/staticfiles/api-management/media/HowToConnectDataSource-selectapp.png)

 * Here First you have to choose app to which you want to connect.

![How To Connect Data Source Appandappversion](/staticfiles/api-management/media/HowToConnectDataSource-appandappversion.png)

 * For example,I have choosen an App called **GenericDatabaseConnect**. Upon selecting the app, you will have to choose
   App Version,Protocol,Credential(If provided already), Schema and Action. In my case,I have selected App Version `1.0`,
   Schema `OCRD` and Action `Insert`.

   If you want to know more about how you can import schema and actions for an app
   [Click here](/transformation/working-with-schemas-action-filter/) 

In this way,one can connect to a data source very easily.