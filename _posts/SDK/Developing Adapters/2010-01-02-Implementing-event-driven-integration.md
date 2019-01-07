---
title: "Implementing Event-driven integration"
toc: true
tag: developers
category: "SDK"
menus:
    overviewsdkadapter: 
        weight: 3
        icon: fa fa-gg
        title: "Basic Implementation"
        identifier: developadaptereventbasic    
---
An integration is generally scheduled at an interval or a specific time such that the data 
is pulled from the application only when the scheduler gets a trigger. Now, sometimes there is
an better way to do an integration only when the application which needs to send data gives us
webhooks. A webhook is a feature in an application that allows the application to put an endpoint 
url which it triggers automatically when some transaction is made on the application end. Or more
precisely, the application is expected to raise an event which the platform can subscribe for and 
when certain action is performed on the application it gets notification about the event.

### Webhooks

APPSeCONNECT provides a number of ways to do an event driven programming which one can use to 
subscribe the platform to get notifications. An integration in such a case will be based 
on trigges on the application.

- Direct call
- Proxy through ESB

Let us take a look on how different they are and what are their mutual advantages and disadvantages. 

### Direct call

When you deal with webhooks, the thing that you need is an URL which you can subscribe to a particular 
application to get notified. In case of APPSeCONNECT hybrid environment, you will get a free URL generated 
on your local application, which you can pick up from any touchpoint and perform the webhook execution. The main
feature of getting 

### Proxy through ESB

If you enable proxy for a Webhook, the URL will be generated on our Cloud platform, which you can get 
from the portal and execute the touchpoint.
