---
title: "Overview of Technology Connectors"
toc: true
tag: developers
category: "Connectors"
menus: 
    Connectors:
        title: "Technology"
        weight: 6
        icon: fa fa-file-word-o
        identifier: technologyconnector
---
Connectors are part of the communication bridge that connects different data sources both on-premise 
or in cloud (exposed to WWW) using standard protocol for communication. APPSeCONNECT comes with a number of 
technology connectors which can connect any data source having standard protocol based communication channel 
established. The connectors are plug and play oriented and hence within APPSeCONNECT one can 
easily add a technology connector and connect an App using popular technology. 

APPSeCONNECT allows custom development of connectors. As these [technology connectors](/getting%20started/configurations/#b-technology-app-creation) are more inclined towards
own custom made applications or custom data sources, the connection need to be implemented correctly 
within the application such that data can freely flow from the data source to the other end of the application. 

With the introduction of [ProcessFlows](/processflow/overview-of-processflow/), you can now create your **Technology applications** for the ProcessFlow designer page itself. [Click Here](/processflow/technology-app-creation-using-processflow/) to know more on tech app creation from ProcessFlows.

|Connector Name|Supported Protocol|Description|
|---|---|---------|
|HTTP|[REST](/connectors/Overview-of-GenericRest-Adapters/)|Connects to any HTTP based RESTful API using standard authentication mechanisms support by the REST protocol|
|Database|[OLE Database](/connectors/Overview-of-OLEDB-Adapter/)|Connects to any database which supports OLE drivers. The protocol uses standard OLE drivers in the environment and supports a wide variety of databases|
|File System|File|Connects to a disk folder or files, reads in different formats and connects the data to APPSeCONNECT. This connector is suitable in scenarios where you generate files in the file system both in network drive or in local machine|
|FTP File System|FTP|Connects to a remote location using File transfer protocol to download or upload file to a folder structure.|
  
To connect to a Technology connector from an organization, you first need to add an app connecting to the protocol required for your 
own data source. Once an application is created on APPSeCONNECT, you can configure the application endpoints and schemas to retrieve or send 
data to your own data sources. 

