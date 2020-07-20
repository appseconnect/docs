---
title: "Overview of Custom Connectors"
toc: true
tag: developers
category: "Connectors"
menus: 
    Connectors:
        title: "Custom"
        weight: 6
        icon: fa fa-file-word-o
        identifier: customconnector
---
APPSeCONNECT requires connectivity to the application such that it can retrieve or send data to the application or data sources. In addition to pre-packaged connectors, which are readymade and easy to use, we also support 
technology connectors, which are developed taking in mind on standard protocol based adapters for custom applications. But in certain scenarios you might want to develop this connectivity 
from scratch as it might be a scenario in your case where the application does not fall into any of the solutions we provide as pre-packaged. Your application might be having 
non-standard API endpoint, it might be dependent on some OnPremise environmental resources or even your service might not have 
an Technology connect present in APPSeCONNECT platform, in all these scenarios, you are left with defining a completely new connect to the application
yourself. 

To start developing a custom connector, first thing you need is to [define an application on our portal](/getting-started/). Once your application is defined, you will need to install the pre-requisites required
to develop the connector. We provide standard [software development kit (SDK)](http://isdn.appseconnect.com/) which will help in developing the adapter.

The adapter development requires specific understanding on .NET based standard languages like (C# or VB.NET) which is used to 
[develop the adapter](/sdk/overview-adapters/) connecting to the data sources for the application. Once the adapter development is complete, you can upload the adapter file 
along with all the dependent files to start the connection. In case your application is hosted over cloud, you might also need to 
define Credential window using Credential designer such that you can define the credential for cloud hosted solution.

The latest version of the connector **SDK** is 4.1.0 hosted in [Nuget Package](https://www.nuget.org/packages/APPSeCONNECT/) which can be attached to your development project easily. You do not need to update
connectors when the SDK is updated. The API for all connector SDK releases with the same major version is guaranteed to be 
backward compatible. For example, a connector built againist any 4.x.x API release continues to operate correctly with any newer version
of 4.x.x API release. 
