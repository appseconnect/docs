---
title: "How to test an Adapter"
toc: true
tag: developers
category: "SDK"
menus:
    overviewsdkadapter: 
        icon: fa fa-gg
        weight: 10
        title: "Testing"
        identifier: testingsdk    
---
Adapter development is a common practice, and one of the most challenging thing to do is to debug an adapter 
before you finally publish it to the APPSeCONNECT cloud. To debug an adapter, you need to install 
appseconnect agent and use Visual Studio to debug the code. 

## Steps to debug an adapter

1. To start debugging the adapter, first you need to [configure](https://docs.appseconnect.com/getting%20started/getting-started/) appseconnect portal taking your application into account. 
2. Once the agent is installed on your premise you can [configure](/deployment/Deployment-Configuration/) the onpremise agent with credentails such that you can execute a process. 
3. Now open the adapter code and use Debug -> Attach to Process.
4. A window will popup, where you need to select InSync.eConnect.AppStarter.exe. 
5. Now execute the touchpoint, and put a breakpoint on the code which is getting executed for Pull and Push operation.   
![Attachtoprocesshandler](/staticfiles/sdk-references/media/attachtoprocesshandler.png)
6. You can debug and step through your code to ensure proper working of the method. 

The debugger will allow you to debug, step - into, see local variables, or even use Intermediate Window from Visual Studio.