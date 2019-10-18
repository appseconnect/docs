---
title: "Environment Management"
toc: true
tag: developers
category: "Deployment"
menus: 
    environment:
        title: "Environment Management"
        icon: fa fa-cloud-download
        weight: 7
        
---

## Pre-requisites

* It is recommended that user should upgrade/install the latest Agent from cloud. Even though we are backward compatible, and older Agents can still communicate with server, we still ask users to upgrade to get full flavour of new features. 
* You must have Environment Management privilege to perform actions on the Environment Settings panel. As an administrator of an organization, you can use the environment screens as you want, but if you are assigned as Standard user, you might only get read-only access to the screen. 

**Note: Each project can have multiple Agent deployment setup in multiple environments. One or more users of an organization can login
to each of these environments to manage their respective integrations. With the upgradation/installation the current Agent, the 
status will be auto reflected in Portal Environment, after reactivating Autosync once.**

## Accessing the Environment User Interface

1.	Login to Portal
2.	Go to your project
3.	Click on Manage
4.	Go to Environments

![Enviornment1](/staticfiles/deployment/media/RevampedEnv/Enviornment1.png)

Environment section in your project will give you a detailed overview about the number of Agent deployed in your network, whether they are 
connected or not, or if there are any issues with the environment. The indicators present as a prefix to each environment enables you in 
identifying whether the Agent is offline, indicated in red, or if it is up and running, it is indicated with green/blue.

Let us have a look on some of the available features:

**1.Environment Listing**

This section shows, the list of environments where the Agents deployments are done for the project/organization. 

a.	View the Environment Status - Clear indicator to visualize that which Agents are active, and which are offline.
b.	Grouping of environments - One can add multiple groups, depending on the environment they are working on whether production, or test, 
    or if you want to group two or more environments region-wise. You can move an environment by dragging and dropping from one group to another.
c.	Adding Cloud Environment - If your organization is cloud-enabled, you will get the option to create cloud environment.

![Enviornment2](/staticfiles/deployment/media/RevampedEnv/Enviornment2.png)

**Note: Only one cloud environment can be set as primary at a time.**

Once the cloud environment is ready, you will get the active cloud agent in the listing and the 
add indicator (as shown in above figure) will become inactive.

![Enviornment3](/staticfiles/deployment/media/RevampedEnv/Enviornment3.png)

**2.Environment Details**

This section will give the detailed overview and settings control (privilege based), for the environment 
that are running the current Agent.  

(a) New Agent - Users of new agent will be presented with following pages with respect to the selected environment:
(b) Properties - The panel appears, when you select an active Agent environment from the environment listing of the project.

![Enviornment4](/staticfiles/deployment/media/RevampedEnv/Enviornment4.png)

This page will give live information about the current OP agent, including:

* Architecture in use
* The latest agent deployment version for the selected environment
* Agent last restart time is default 03:49 for all organizations who are using OP Agent.
* APPSeCONNECT directory free space available
* CPU and Memory Usage display the dynamic data depending on the consumption rate.
* Agent Installation directory path
* Date of Agent Installation
* Agent Logs - These are the dynamic process logs and the notifications, from where one can keep track of Scheduler details, rule that are 
  scheduled and are under execution, service status etc.

(c) Plugins - This page will only display the plugin details from OP Agent.
(d) Settings - This page is only accessible to users who have the privilege to control the settings of OP.

![Enviornment5](/staticfiles/deployment/media/RevampedEnv/Enviornment5.png)

**Settings have three available sections for managing OP Agents:**

1) Retry Setting - One can schedule resync of failed integrations, where you can provide the start time, 
   no. of iterations and batch size for each resync. Default frequency is daily. To make the resync schedule active,
   you must activate Retry transaction.

2) Log Settings - You can control the way you want to view and store the log in OP Agent from portal now.

* If Log in detail is set, then the log will be reflected in .txt files and stored in the same way. If Log in Database is set, then the log will be stored in sql lite database and will be reflected in the log bucket.
* Set Target for - It will allow you to define the type of log that you want to view, whether Error, Infor or Status.
* Severity Level - Each log has its own severity level. You can set the type - Critical, High, Medium, depending on the log, you want to view.

3)	Diagnostic Settings - You can turn the Diagnostic mode on, from portal itself. Once the its active, all the transaction and process 
    files will get available in Agent and service path as shown in the image.

After saving the changes in settings, the updated information gets auto-reflected in OP Agent. 

a.	Old Agent - Users with earlier versions of Agent, will be presented with following page, when they select their environment:

![Enviornment6](/staticfiles/deployment/media/RevampedEnv/Enviornment6.png)

All the earlier features will be available as-is for the existing Agent users -

* Deploying configuration from Portal to Agent
* Agent Settings (ref. above) can be added and modified from Portal, that will get reflected in OP Agent.
* Blocking/Unblocking Agent from Portal.

**Note: For old agent, any changes even made in OP Agent will get reflected in Portal after restarting the Autosync service in OP.**

b. Cloud Agent

Cloud organizations can currently control the followings settings of their cloud agent from portal

**Log Settings**

![Enviornment7](/staticfiles/deployment/media/RevampedEnv/Enviornment7.png)

**Autosync of Resync Settings**

![Enviornment8](/staticfiles/deployment/media/RevampedEnv/Enviornment8.png)

**3.Deleting Environment**

You can now directly delete environments that are no longer in use from the listing itself. As soon as you perform delete from portal, 
the OP Agent instance (active/inactive) gets auto-removed from the local environment and all the associated licenses will get removed. 

All the services and sync operations will get stopped. If any new user or different project user logs in further to the same environment, 
a new license will be generated against it.

Steps:

1) Login to Portal
2) Go to your Project
3) Go to Manage > Environments
4) Select the environment which you want to delete from listing
5)	Click on Delete

![Enviornment9](/staticfiles/deployment/media/RevampedEnv/Enviornment9.png)

**4. Detaching and Attaching Environment**

Environment detachment is blocking the Agent from use in that specific environment. So, when you detach the selected environment from Portal, 
it remains in the list but will show as disconnected. Post detachment, if the user tries to relogin, it will give `Agent is blocked` error.

To unblock the environment, you must Attach that environment once again.

NOTE:

* Activate Autosync is restarted/active.
* Delete and Detach feature is currently not available in Cloud Agent.
* Implementers and partners must note that once they login with one organization credentials in one system, they won't be able to further login with different organization 
  credentials in the same system. [Ref: License Key Implementation document]
* Multi-environment support in parallel for cloud and OP Agent is not in the scope of this release.



