---
title: "Overview on plugin development"
toc: true
category: "SDK"
tag: developers
menus:
    sdk: 
        icon: fa fa-gg
        weight: 3
        title: "Plugins"
        identifier: overviewsdkplugin            
---
[Plugins](http://isdn.appseconnect.com/html/9B9A41E5.htm) are a piece of software which lets to tightly couple with the platform to enhance the platform
and / or improve performance of the integration. As you know the default integration platform is sufficient
to build any integration out of the box, but still we thought for advanced need, there should be separate hooks which an enterprise developer or team of 
developers might need to build plugins on top of our components. The plugin is built using the SDK to enhance or change functionality of how the platform 
behaves. For instance, you can build a plugin which will allow you to move our data storage to a separate database rather than the inbuilt databases 
which we provide by default. 

For an enterprise, it is high chance that they want to properly maintain the data which are produced during transaction of integration. Even though these data 
does not contain any sensitive information, but losing them might have large number of hours to recreate these data again. 


## How plugins are different from an Adapter

Plugins and adapter are completely different in nature, even though they look the same and also both of them are part of APPSeCONNECT SDK. An adapter is specially 
designed component which lets the application to communicate with an external application, while a plugin are internally used by the platform to enhance the 
functionality of the platform iteself. 

Adapter are required for bridging the data from application to appseconnect and is generally built by an ISV partner, while a plugin is more inclined to an
experienced or seasones developer of appseconnect platform who might have extensive knowledge of the platform and know how internally the platform communicates data
between application. 

## Types of Plugins

- Database Plugin
- Data formatters


