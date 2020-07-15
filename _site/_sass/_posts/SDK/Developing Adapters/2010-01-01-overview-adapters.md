---
title: "Overview on adapter development"
toc: true
category: "SDK"
tag: developers
menus:
    sdk: 
        icon: fa fa-gg
        weight: 2
        title: "Adapters"
        identifier: overviewsdkadapter            
---
Adapter in terms of APPSeCONNECT is a piece of software component external to the application core is plugged in to the system seamelessly such that the
 platform can communicate to the respective application. In case of building an integration between two disparate apps, you need an adapter. Even though if the 
application is following standard protocols, we encourage to use [prebuild technology connectors](/connectors/Overview-of-technology-connectors/) which will help in fetching data without requiring to write 
a single lines of code. But in case, you are not sure about the protocol or you want to optimize the connection for the application itself, or even you 
want to remove the complexity from the user while connecting to the application from cloud, adapter development would be your perfect choice down the line. 

APPSeCONNECT platform is built using Microsoft.NET, so you need to be acquanted with any of the high level languages present in .NET platform. For this article,
we will use C# as a primary language for developing an adapter, but you can also interchangeably use any other language which works with .NET framework.

## Steps to building adapter

If you have installed [all the prerequisites](/sdk/Prerequisites/) of the adapter development, you can start writing your code. If you are still unsure what you need, please go ahead
and refer to this document which will help you in installing and setting up all the required resources. There are a number of Do's and Don'ts which we prefer as 
best practices for adapter development, we encourage to read it before writing your first line of code. 

The adapter development process consists of different areas : 

- [Implementing Adapter basic functionality viz, Pull, Push, Resync](/sdk/Implementing-adapter-basic-functionalities/)
- [Understanding Action filters and techniques to parse Action filters](/sdk/Implementing-Actionfilter-Parsers/)
- [Understanding transactional store, and how to store transactional data.](/sdk/storing-transactional-data/)
- [Handling events and creating notifications](/sdk/Handling-Events/)
- [How to efficiently log in adapter.](/sdk/Logging-and-Tracking)
- [Working with AppResources](/sdk/Developing-AppResources/)
- [Working with Event based integration](/sdk/Implementing-event-driven-integration)
- [Debugging and Testing Adapter code](/sdk/How-to-test-an-Adapter/)

An adapter is the building block of data for any connector. It is plugged in directly to the appseconnect platform to connect and execute integration points. 

## Naming convension

The adapter is a [piece of software](http://isdn.appseconnect.com) which lets you connect to an application to fetch or push data from APPSeCONNECT. We follow separate 
naming convension for each adapter we build, such that it makes them all uniform and also self explantory. 

The name of an adapter is the file name of the dll(dynamic linked library) which you are going to ship to the enduser. The name of the adapter would also represent 
the namespace title or more precisely assembly title and the default namespace of the project. 

> *{Name of the Company}*.eConnect.*{Name of the application}*

By `Name of the Company` we meant the company who is building the adapter. If the adapter is built by InSync, the name of the company will say `InSync` only. If the 
adapter is built by some 3rd party ISV partner, the name of the company will lead to that company or individual. The `Name of the application` on the other hand
is the application which it connects to. Every adapter connect to a particular application or a protocol, so whatever it can be, we name it accordingly. 

For example **InSync.eConnect.Magento** will individate that the adapter is built by InSync which connects to `Magento`. On the other hand if we say 
**Contoso.eConnect.Netsuite** that will mean the adapter is built by Contoso and the adapter is connecting to `Netsuite`. 


