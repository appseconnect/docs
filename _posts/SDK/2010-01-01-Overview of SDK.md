---
title: "SDK Overview"
toc: true
category: "SDK"
tag: developers
menus:
    header: 
        weight: 14
        icon: fa fa-gg
        title: "SDK"
        identifier: sdk            
---

APPSeCONNECT is a generic platform that helps a developer as well as an integration consultant to work on specific application, connecting them to the platform
or even integrate data for business need. The SDK (Software Development Kit) is open publicly, which any potential developer can use to build a connect between 
an application or a protocol. 

The APPSeCONNECT SDK is hosted using `Nuget` package which lets you download the package directly using Visual Studio. 

[APPSeCONNECT Nuget](https://www.nuget.org/packages/APPSeCONNECT/)

We also have complete help document for our [SDK hosted publicly](http://isdn.appseconnect.com) which as an user you can take help from. To install the nuget package
to your project, go to `Package Manager Console` and type the command below. 

```command
Install-Package APPSeCONNECT -version 4.x.x
```

The command will download all the necessary files which you might need while developing adapters using our SDK. 

## What does SDK provide? 

The SDK (Software development toolkit) provided to build custom solution are mainly considered for : 

- [Adapters](/sdk/overview-adapters/): That connects to an application for transferring data to APPSeCONNECT. 
- [Plugins](/sdk/overview-plugins/) : It plugs in to APPSeCONNECT to specially expose and enrich functionalities of the platform. 
- [Policies](/sdk/overview-policies/) : These are separate set of policies which are used for any API built over APPSeCONNECT API Platform which lets you to hook between API request / response Pipeline. 


To improve the delivery of robust and good code, it is important to consider [best practicies](/sdk/Dos-and-Donts-for-SDK/) which we follow thoroughly for any development. We also encourage to 
build an integration using the adapter to test or debug code written on adapter. 


