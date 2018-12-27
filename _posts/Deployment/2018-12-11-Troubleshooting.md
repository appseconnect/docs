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

**Troubleshooting Scenario 1:** - The error System.NullReferenceException, occurs during UPDATE CONFIGURATION.

![SystemError-UpdateConfig](/staticfiles/deployment/media/Troubleshooting/SystemError-UpdateConfig.png)

**Solution**

* Log Off and Exit your agent from your Taskbar. Close the Autosync Process from the Task Manager. 

![CloseAutosyncProcess-Taskbar](/staticfiles/deployment/media/Troubleshooting/CloseAutosyncProcess-Taskbar.png)

*  Go to the Adapters inside the APPSeCONNECT system folder.
*  Select all the Adapters, except the InSync.eConnect.NLogModule.dll file. Delete the selected files.
*	Login to the Agent. Do the Update Adapters and Update Configurations.

**NOTE** InSync.eConnect.NLogModule.dll is a system file, generated only during the agent installation. 
Updating Adapters will not fetch this file back



**Troubleshooting Scenario 2:** - CorrectFileNotFound - While Configuring an Application in the OP Agent

![AppConfig-Error](/staticfiles/deployment/media/Troubleshooting/AppConfig-Error.png)

**Solution**

* Check the Adapters folder inside the APPSeCONNECT system folder. Now Check for the Application Adapter (.dll file) present or not. 
If the adapter file is missing, Click UPDATE ADAPTERS in the agent.

![Error-UpdateAdapter](/staticfiles/deployment/media/Troubleshooting/Error-UpdateAdapter.png)

* After Update Adapters, Log Off and Exit your Agent and Open again.
* Check If the adapter file is present, and still the issue persists. Copy the .dll file and Paste it in a different location. 
* Delete the .dll from the Adapters folder and paste the copied .dll file back in to the adapters folder.
* Log Off and Exit the agent and Open again. Check your App Configuration Page.



**Troubleshooting Scenario 3:** - Nothing to POST to SAP - Often occurrs while Integrating with SAP 
even if data is present in the Source Application.
![TransactionLog-Error](/staticfiles/deployment/media/Troubleshooting/TransactionLog-Error.png)

**Solution**

* Execute the integration again by deleting the TEMP and the CACHE files. 
* Also switch OFF & ON the DI server before executing with the Integration for the 2nd Time.