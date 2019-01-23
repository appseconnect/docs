---
title: "Upgradation & Migration"
toc: true
tag: developers
category: "Deployment"
menus:
    deployment: 
        icon: fa fa-gg
        weight: 7
        title: "Upgradation & Migration"
        identifier: upgradationmigration              
---

With every update AEC Agent need upgradation to a higher version without losing any data in the agent. 
This upgradation can be done conviniently by installing the updated agent without uninstalling the previous version. 
The Procedure of the Upgradation and Migration of the Agent is provided in this document.

## Upgradation and Migration Process

* Take back up of existing data in folder "C:\ProgramData\APPSeCONNECT"
* Stop every running process for the APPSeCONNECT agent.
* Run the latest version of APPSeCONNECT agent installation File without uninstalling the previous version.
* Once installed, APPSeCONNECT agent will start running. Stop the Running Process.
* Run "MigrateTo30" .exe file in "C:\Program Files (x86)\APPSeCONNECT" folder, in administrator mode. 

The following window appears.

![MIgrationTool-Snapshot](/staticfiles/deployment/media/Migration/MIgrationTool-Snapshot.png)

**NOTE: 
        1) Select the checkbox of `Clear Connection` if you want to remove the existing connection credentials.  
        2) `Migrate All TimeStamp` will migrate all the data's including the Success, Failure, unprocessed, skipped that was present
            in the Resync Buckets.  
        3) `Migrate Non-Success TimeStamp` will migrate only the data's that is Unprocessed, Skipped, Failure present in the
                Resync Buckets.**
            


* Click **Upgrade Connection** button. The Following window appears

![MIgrationTool-Window](/staticfiles/deployment/media/Migration/MIgrationTool-Window.png)

* Click Yes button. The following window will open.

![MIgration-Successful](/staticfiles/deployment/media/Migration/MIgration-Successful.png)

* Click OK once the Migration process is successful.

* Close the Migration Tool Window.

* Follow **Update Configuration, Update Adapters,Update Value Map** from agent setting options.

**Note: Doing this removes existing adapter data and configuration from your agent. Hence after Upgrading and opening Agent, you will see a blank page in the Agent.
Update your adapters and configuration before proceeding with any other processes for an agent**
