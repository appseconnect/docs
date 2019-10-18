---
title: "Environment Overview"
toc: true
tag: developers
category: "Deployment"
menus: 
    deployment :
        title: "Environment"
        icon: fa fa-cloud-download
        weight: 5
        identifier: environment
---


APPSeCONNECT platform enables you to create and manage multiple deployment environment for your application integration needs.  
As an user, you will see all your environments in a single screen where you can identify each of environment, 
tear down one without affecting others, manage cloud environments etc Each environment shows its status, primarily 
if it is reachable or not, different machine details, deployed processes, and allows you to setup behaviours.

This feature can be useful for following scenarios:
* Tracking Properties - User can keep track of the count and status of agents that are running across multiple environments for their organization. In addition, it will allow the user to keep track of system status where the agents are connected, its resource utilization, finding logs etc.
* Managing Projects - In this screen, user can also distribute workflows in multiple environments such that we can individually identify where processes are getting executed. One thing we need to keep in mind, credentials cannot be shared between environments. You can distribute your workloads into multiple environment only when you have independent applications running
* Easy classification of test and production environment


## Hybrid Integration and Cloud Integration


|Hybrid Integration|Cloud Integration|
|---|---|
|The hybrid model allows the customer to configure integration settings on the cloud portal and download and install the APPSeCONNECT on-premise agent in their own infrastructure. So, the data transfer between applications happen within the company(s) own network|The cloud integration model allows the customer to integrate two or more cloud applications, that is, applications which are available via the web as a service. There is no need to download and install any software in the company(s) system and the entire integration process and data exchange work through the APPSeCONNECT cloud-agent in the web portal|


* There are multiple activites whch can be executed in the Enviornment section.  The user can **Block, Unblock, Deploy Configuration, 
  Deploy Adapter** and do agent specific settings from the Environment Section in the Cloud AEC Portal.

Refer to the [Deployment Configuration](/deployment/Deployment-Configuration/) section to know about the Environment Overview.


