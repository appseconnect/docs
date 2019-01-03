---
title: "Logging and Tracing"
toc: true
tag: developers,reseller
category: "SDK"
menus:
    overviewsdkadapter: 
        icon: fa fa-gg
        title: "Logging and tracing"
        identifier: loggingsdk    
---
Adapter works on background always to communicate data between application and APPSeCONNECT. As there are a large part of code 
written by you which the platform need to execute, logging and tracing problems that might come in production 
environment might sometimes becomes very important. Inside SDK, APPSeCONNECT provides a number of methods which 
you as a developer can invoke to perform various types of logging from the platform. 

```csharp

var logger = context.Logger; //where context is the instance of ApplicationContext

```

The adapter sends the object logger to the application provider which can be used to perform various logging functionalities 
while executing the adapter code. 

|Types|Functionailty|
|---|------|
|InfoLog| This method is used to occationally store the overall execution status of the integration. We generally encourage one InfoLog for an entire execution|
|ErrorLog|This method is used to track errors produced during execution of an integration. We provide different overloads to easily push exception objects while integration is being performed|
|StatusLog|This method is used to track individual critical lines. We encourage to add a number of statuslogs directly inside adapter code to track each and every execution of adapter critical lines|
|WarnLog|This is used to track some unusual activity on an adapter.|

The logs can be used extensively to ensure you dont require debugging to diagonize an issue. 

