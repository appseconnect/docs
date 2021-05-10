---
title: "Logging and Tracing"
toc: true
tag: developers
category: "SDK"
menus:
    overviewsdkadapter: 
        icon: fa fa-gg
        weight: 6
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
 
**NOTE** As a professional, you need to understand that logger class is intelligent enough to automatically detect the 
serverity and type of logs being created. But if you want to specify the exact logging of the method
you can use the overloads of [`Log`](http://isdn.appseconnect.com/html/8B9C0216.htm) method in [Logger](http://isdn.appseconnect.com/html/F5BC0481.htm) to specify the [`ErrorTypes`](http://isdn.appseconnect.com/html/CCEB8877.htm), [`MessageTypes`](http://isdn.appseconnect.com/html/34345FD6.htm) and [`Severitys`](http://isdn.appseconnect.com/html/42A720FA.htm). 


### Best practices of writing logs

Even though as an adapter developer, you are free to write logs whatever suits you, but as an APPSeCONNECT we recommend certain best practices 
on writing logs. 

- Each log method will have two properties `errorMessage` and `detailMessage`. Specify different messages for both the values. 
  - `errorMessage` needs to be to-the-point and crisp, such that it is end user friendly. 
  - `detailMessage` on the other hand needs to be developer friendly. You need to spcify as much information as you can to make sure you trap the state properly. 
- For every operation, there should be one call to Info or Error method interchangeably in Logs. Capture critical errors only such that you rollback the whole transaction if error is encountered. Ideally we recommend to pass the Exception object directly to the Log.
- You should write Status messages as many as possible such that every important line captures the state correctly. 
