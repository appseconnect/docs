---
title: "Troubleshooting"
toc: true
tag: developers
category: "Deployment"
menus:
    deployment: 
        icon: fa fa-gg
        weight: 6
        title: "Troubleshooting"
        identifier: troubleshootingdeployment              
---

While executing the integration process on the OP Agent, you may face Techno-Functionality errors common to executing the agent.
Given below are common troubleshooting scenarios to ease the debugging areas. 

### Troubleshooting:  Agent is Disconnected/Blocked  
![agent-disconnected](/staticfiles/deployment/media/RevampedEnv/agent-disconnected.png)  

When setting up the environment for the sync process, the environment for selected agent displays the message `Agent is Disconnected`. Also, while logging in to the OP agent, 
it displays the message `Agent is Blocked`. This is due to the reason that the agent has been detached from the portal.  

**Steps to Troubleshooting:** 

* Login to the portal and navigate to Manage > Environment.
* The [environment listing](/deployment/Environment-Management/) page opens. Click over the environment which is disconnected and is needed to be connected.
* Click on the Attach button visible at the top right corner of the page, to reactivate the environment

![troubleshooting-scenario4](/staticfiles/deployment/media/Troubleshooting/troubleshooting-scenario4.png)  

* Upon attaching the environment from the portal, restart and login to the agent on your local system. 
* Navigate to the settings page of the agent and Activate the autosync. On activating the autosync, your environment will connect with the portal.

Note: (a) Without activating the autosync or if the autosync is off, your environment in portal would remain as disconnected. Before troubleshooting this scenario verify, whether your Autosync is activated or not.    
      (b) Old agent users would get the message as `Your agent is deactivated`. Please contact the administrator while logging in to OP Agent.   
          The steps to troubleshoot the error is common to this scenario. Old agent users could troubleshoot easily following the above given steps.   

### Troubleshooting: CorrectFileNotFound - While Configuring an Application in the OP Agent

![AppConfig-Error](/staticfiles/deployment/media/Troubleshooting/AppConfig-Error.png)

**Steps to Troubleshooting:** 

* Check the Adapters folder inside the APPSeCONNECT system folder. Now Check for the Application Adapter (.dll file) present or not. 
If the adapter file is missing, Click UPDATE ADAPTERS in the agent.

![Error-UpdateAdapter](/staticfiles/deployment/media/Troubleshooting/Error-UpdateAdapter.png)

* After Update Adapters, Log Off and Exit your Agent and Open again.
* Check If the adapter file is present, and still the issue persists. Copy the .dll file and Paste it in a different location. 
* Delete the .dll from the Adapters folder and paste the copied .dll file back in to the adapters folder.
* Log Off and Exit the agent and Open again. Check your App Configuration Page.  

### Troubleshooting: Nothing to POST to SAP(Often occurrs while Integrating with SAP even if data is present in the Source Application)  
![TransactionLog-Error](/staticfiles/deployment/media/Troubleshooting/TransactionLog-Error.png)  

**Steps to Troubleshooting:**

* Execute the integration again by deleting the TEMP and the CACHE files. 
* Also switch OFF & ON the DI server before executing with the Integration for the 2nd Time.

### Troubleshooting: The error System.NullReferenceException, occurs during UPDATE CONFIGURATION.

![SystemError-UpdateConfig](/staticfiles/deployment/media/Troubleshooting/SystemError-UpdateConfig.png)

**Steps to Troubleshooting:**

* Log Off and Exit your agent from your Taskbar. Close the Autosync Process from the Task Manager. 

![CloseAutosyncProcess-Taskbar](/staticfiles/deployment/media/Troubleshooting/CloseAutosyncProcess-Taskbar.png)

*  Go to the Adapters inside the APPSeCONNECT system folder.
*  Select all the Adapters, except the InSync.eConnect.NLogModule.dll file. Delete the selected files.
*	Login to the Agent. Do the Update Adapters and Update Configurations.

**NOTE: InSync.eConnect.NLogModule.dll is a system file, generated only during the agent installation. 
Updating Adapters will not fetch this file back.**

### Troubleshooting: Agent Upgraded, Data are syncing but the view is unavailable in the Sync Bucket

The sync bucket is showing blank, although data has been synced.  

![Troublshooting Syncdata](../../staticfiles/deployment/media/Troubleshooting/troublshooting-syncdata.PNG)

**Steps to Troubleshooting:**
* Upgrade the Agent Version (In case of both Cloud & OP)  
* Open the [Migration](/deployment/upgradation-and-migration/) tool  
* Choose the option `Migrate All Timestamp`    
![MIgrationTool-Snapshot](/staticfiles/deployment/media/Migration/MIgrationTool-Snapshot.png)
* Run the Migration Tool  
* Enable Environment   
* Now sync data and you will be able to view the data in the sync bucket.  

**NOTE: Choosing `Migrate All Timestamp` will take time depending on the volume of your data,
so plan it according to the business requirement**

### Troubleshooting: User cannot Login into the Agent, No error is displayed in the Agent Login section and gives blank Response.

The scenario usually occures when the **CONFIG** file gets corrupt. The issue is resolved and for this scenario if occured, you will not get the following message **Configuration file is corrupt. Do you want to recreate it**. This helps to you to identify and troubleshoot the problem.

**Steps to Troubleshooting:**

1) When you get the above message, you will provided with an option for YES or NO.

2) On Clicking Yes, it recreates the config file internally and it redirects to On Premise agent Login screen. 

3) Provide your credentials and click on the Login button. You should login successfully.


