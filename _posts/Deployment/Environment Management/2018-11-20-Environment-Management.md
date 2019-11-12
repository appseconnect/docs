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

1.	Login to APPSeCONNECT portal with valid credentials & navigate to the `Manage` section of your Project.
2.	Click on the Environments button from the Manage drop-down.   
![Enviornment1](/staticfiles/deployment/media/RevampedEnv/Enviornment1.png)  
3. Environment section in your project will give you a detailed overview about the number of Agent (both OP & Cloud) deployed in your network, whether they are 
connected or not.   
4.	Agents that are deployed will have the indicators that displays whether the agent is active or inactive.  
* RED indicator - Agent is either detached or inactive.
* BLUE indicator - Agent is up and Running.

Given below are the available features of Environment.

### Environment Listing

This section shows, the list of environments where the Agent deployments are done for the project/organization.
Listed below are the functionalities that are displayed in the Environment Listed Page. 

a.	Environment Status: Agent indicators to visualize the status of the Agents (Active/Inactive).        
b.	Grouping of environments:      
 * User can create multiple environment group for an organisation by click on the `Add Group` button.  
 * User can drag and drop every agent with respect to the groups (For Ex: Production or for testing or Region Wise).     
 * User can also move the agents from one group to another.     
![grouping-env](/staticfiles/deployment/media/RevampedEnv/grouping-env.png)      

### Adding Cloud Environment 

If your organization is cloud-enabled, you will get the option to create cloud environment.
![Enviornment2](/staticfiles/deployment/media/RevampedEnv/Enviornment2.png)

1.	Click on the + button to add a new cloud environment. The new cloud env setup window appears. 
![Enviornmentnew1](/staticfiles/deployment/media/RevampedEnv/Enviornmentnew1.png)
2.  Enter the cloud env details and click on the save button. 
![Enviornmentnew2](/staticfiles/deployment/media/RevampedEnv/Enviornmentnew2.png)
3.  On saving, the user gets the confirmation message for the successful creation of Cloud Environment.
![Enviornmentnew3](/staticfiles/deployment/media/RevampedEnv/Enviornmentnew3.png)

**Note: (a) Only one cloud environment can be set as primary at a time.    
        (b) By default the agents are positioned in the group named Untitled.    
        (c) Each organisation can have only one cloud agent. User cannot create another cloud agent after creating one.**    

Once the cloud environment is ready, you will get the active cloud agent in the listing and the 
add indicator (as shown in above figure) will become inactive.

![Enviornment3](/staticfiles/deployment/media/RevampedEnv/Enviornment3.png)

### Environment Details - On-Premise Agent

This section will provide the detailed overview and settings control (privilege based) 
for the environment(On-Premise Agent) that are running the current Agent.

Users of new agent (On-Premise Agent) will get the following sub-tabs with respect to the selected environment.  
a. **Properties**: The panel appears, when the user selects an active OP Agent from the environment listing of the project.      
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

b. **Plugins** - This page will only display the plugin details from OP Agent.    
c. **Settings** - This page is only accessible to users who have the privilege to control the settings of OP.    
![Enviornment5](/staticfiles/deployment/media/RevampedEnv/Enviornment5.png)  

**Settings have three available sections for managing OP Agents:**

1) Retry Setting - One can schedule resync of failed integrations, where you can provide the start time, 
   no. of iterations and batch size for each resync. Default frequency is daily. To make the resync schedule active,
   you must activate Retry transaction.

2) Log Settings - You can control the way you want to view and store the log in OP Agent from portal now.

* If Log in detail is set, then the log will be reflected in .txt files and stored in the same way. If Log in Database is set, then the log will be 
  stored in sql lite database and will be reflected in the log bucket.
* Set Target for - It will allow you to define the type of log that you want to view, whether Error, Infor or Status.
* Severity Level - Each log has its own severity level. You can set the type - Critical, High, Medium, depending on the log, you want to view.

3)	Diagnostic Settings - You can turn the Diagnostic mode on, from portal itself. Once the its active, all the transaction and process 
    files will get available in Agent and service path as shown in the image.

After saving the changes in settings, the updated information gets auto-reflected in OP Agent. 

### Environment Details - Cloud Agent

Cloud organizations can currently control the followings settings of their cloud agent from portal
![Enviornment7](/staticfiles/deployment/media/RevampedEnv/Enviornment7.png) 

**Autosync of Resync Settings**
Detailed field description: 
* Frequency: This is a static field and is for the schedule period for the Resync to happen. By default, its configured as Daily.
* Start Time: This is a customizable field for the user. It defines the start time of the Resync Process.
* Execute For: This a time span as for how long the Resync process will occur. The span is processed in hours and users can customize it as per their requirement. By default, `its configured as 0`.
* Batch Size: This field states, the no of data in a batch to be resynced. The `Default value is 10` but the users are open to customize as per their requirement.

**Log Settings**
Detailed field description: 
* Log in Detail: Detailed log would be fetched as per the sync is processed.
* Log in Database: The log fetched, would be stored in the database.
* Set target for: Users can filter the failed sync based on Error, Info and Status.
* Severity Level: Users can filter the error logs based on the severity level of the errors generated. 
  The severity level is categorized into `Medium, High & Critical`.

### Deleting Environment

You can now directly delete environments that are no longer in use from the listing itself. As soon as you perform delete from portal, 
the OP Agent instance (active/inactive) gets auto-removed from the local environment and all the associated licenses will get removed. 

All the services and sync operations will get stopped. If any new user or different project user logs in further to the same environment, 
a new license will be generated against it.

Steps:

1) Login to Portal.  
2) Go to your Project  
3) Go to Manage > Environments  
4) Select the environment which you want to delete from listing  
5)	Click on Delete  

![Enviornment9](/staticfiles/deployment/media/RevampedEnv/Enviornment9.png)

### Detaching and Attaching Environment

Environment detachment is blocking the Agent from use in that specific environment. So, when you detach the selected environment from Portal, 
it remains in the list but will show as disconnected. Post detachment, if the user tries to relogin, it will give `Agent is blocked` error.

![agent-disconnected](/staticfiles/deployment/media/RevampedEnv/agent-disconnected.png)

To unblock the environment, you must Attach that environment once again.

**NOTE:**
* Activate Autosync is restarted/active.
* Delete and Detach feature is currently not available in Cloud Agent.
* Implementers and partners must note that once they [login with one organization credentials](/license-management/#usability-aspect-of-license-management) in one system, they won't be able to further login with different organization 
  credentials in the same system

## Environment View for Old Agents

APPSeCONNECT License management & environment management is equipped with the full supportability of old agents. However, old agent users are 
restricted from viewing the environment details which is available on for latest agents. Users need to update the old agent for viewing the 
details of the environment. 

Old agent will support the complete functionality of the integration process. Old Agent user shall view the environment as given below:
![old-environment1](/staticfiles/deployment/media/RevampedEnv/old-environment1.png)

The UI will have three buttons:
* Deploy Configuration: Any changes or modifications made in the portal will be deployed to the OP agent for the sync process when deployed the configurations from the portal. 
* Agent Settings: This page has three tabs that configures the setting for the environment.  
  (a)Log Settings: Log settings captures the details of the Sync process.    
  (b)Real Time Settings: Real Time settings is required when working with Real Time touchpoints using [Webhooks](/api-management/steps-to-create-webhook-endpoint/) of the API Management.  
  (c)Resync Settings: Users can enable/disable the Autosync feature of the OP agent in the Resync Settings tab.  


### Working with the Agent Settings Panel in Old Agent

Environments needs to be configured for the generation of the sync logs, autosync activation and Realtime settings configuration. Users need to 
configure the panel accordingly for detailed output and process.

![old-environment2](/staticfiles/deployment/media/RevampedEnv/old-environment2.png)

**Note: (a) Agent status for old agents will be displayed in RED but will have the complete functionality of an Active Agent.  
        (b) Users can detach/attach the agents for detaching/attaching the agent**. 

**ProTip:** (1) Agent needs to be dissociated first from the portal, before reassigning the same license key.   
            (2) APPSeCONNECT [License Management](/license%20management/license-management/) is compatible even with older versions of the agent.
{: .notice--info}

**Log Settings:** Log settings captures the severity details of the logs that are generated. User can filter accordingly as per severity basis of the logs. 
The page captures the following operations:
* Log in Detail: Detailed log would be fetched as per the sync is processed.
* Log in Database: The log fetched, would be stored in the database.
* Set target for: Users can filter the failed sync based on Error, Info and Status.
* Severity Level: Users can filter the error logs based on the severity level of the errors generated. The severity level is categorized into Medium, High, Critical.


**Note: It is recommended that users select all the three option for detailed information for the SET TARGET FOR and SEVERITY LEVEL option**.

![old-environment3](/staticfiles/deployment/media/RevampedEnv/old-environment3.png)

**Real Time settings** - Realtime settings is required when working with the Realtime Touchpoint in API Management. Configurations should be made only when working with the Webhook API(s) and the Real Time Touchpoints in 
[APPSeCONNECT API Management](/api-management/overview/).
Real Time settings has two field for the configurations:
* Real Time Host Name: Users needs to enter the [Register URL](/api-management/Steps-to-register-url/) of the Real Time Touchpoints.
* Port: This is the Port number of the hosted URL.
![old-environment4](/staticfiles/deployment/media/RevampedEnv/old-environment4.png)

**Resync Settings:** This section of the page has a checkbox for the user to Enable/Disable the autosync from the portal.






