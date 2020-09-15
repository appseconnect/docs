---
title: "Easy Environment Management"
toc: true
tag: developers
category: "Deployment"
menus: 
    environment:
        title: "Easy Environment Management"
        icon: fa fa-cloud-download
        weight: 7
        
---
## Pre-requisites

* It is recommended that user should upgrade/install the latest Agent from cloud. Even though we are backward compatible, and older Agents can still communicate with server, we still ask users to upgrade to get full flavour of new features. 
* You must have Environment Management privilege to perform actions on the Environment Settings panel.
* By default, on landing up on the environment page, you will be selected with the hosted section. Scroll below to view more details on the Hosted section.
* Enviroments that are available on your organisation, will have the indicators that displays whether the agents are active or inactive for an On-Premise agent.
    - RED indicator - Agent is either detached or inactive.
    - BLUE indicator - Agent is up and Running.
* The will be no colour indicators for an Hosted Agent.

## On-Premise

By default, you will be on the On-Premise section, when landing in the environment page. This section will allow you to know about the On-Premise environments that will be installed on your local server for executing the sync processes.

1) If you are a new user and if you do not have any On-Premise Environment installed, you would get the following view.

![openv1](\staticfiles\deployment\media\EasyEnv\openv1.PNG)

However, clicking the **DOWNLOAD** button will start the download process the On-Premise environment. [Click Here](/deployment/Deployment-Configuration/#on-premise-agent-configuration) to know more about its installation process.

2) If you already have the On-Premise agents installed, you will be getting the following view.

![openv2](\staticfiles\deployment\media\EasyEnv\openv2.PNG)

[Click Here](/deployment/Easy-Environment-Management/#on-premise-environment-details-page) to know more about the On-Premise environment details page.

### On-Premise Environment Details page

This section of the document will allow you to view and understand the details of your On Premise environment.

1) Click on the OP environment. You will be able to view the following tabs: **Properties** , **Process Flows**, **Plugins** , **Settings**. By default the properties tab will be displayed.

![opdetails1](\staticfiles\deployment\media\EasyEnv\opdetails1.PNG)

2) Click on the **Properties** tab, you will able to view the live architectural details of your On-Premise environment. The follwoing details will be displayed.

* Architecture in use
* The latest agent deployment version for the selected environment
* Agent last restart time is default 03:49 for all organizations who are using OP Agent. On its restart, the Enable Environment(Autosync) should also restart automatically. However, you can view a dynamic time of agent restart if restarted manually.  
* APPSeCONNECT directory free space available
* CPU and Memory Usage display the dynamic data depending on the consumption rate.
* Agent Installation directory path
* Date of Agent Installation
* Agent Logs - These are the dynamic process logs and the notifications, from where one can keep track of Scheduler details, rule that are scheduled and are under execution, service status etc.  

**Note: User can view the log files by double clicking on them.** 

3) Click on the **Process Flows** tab in the Environment Details Page. You can view all the Process Flow those are deployed on that environment. The following are the details that will displayed for deployed Process Flows.

- **Process Flow Name:** The name of the process flow, deployed, will be displayed.
- **Deployed At:** The last deployment of the process flow will be displayed.
- **No. of tries:** You will be able to view the count of the number of retries performed.
- **Status** The status of the attempt of the deployment process (Successful or Unsuccessful) will be displayed.
- **Actions** The following actions can be formed for each process flows: **Last Deployment Log** , **[Undeploy](/processflow/deploying-and-executing-processfloww/#undeploy-process-flow-from-environment)** , **[View Snapshot](/processflow/snapshot-processflow/)** and **[Retry](/processflow/retry-processflow/)**

![opdetails2](\staticfiles\deployment\media\EasyEnv\opdetails2.PNG)

4) Click on the **PLUGINS** tab. You will be able to view the all the plugins available on your On-Premise environment. The following plugins will be listed: **[MySQL](/deployment/MYSQL-plugin-installation/)** , **[OLEDB](/deployment/OLE-db-plugin-installation/)** , **[HANA](/deployment/hana-plugin-installation/)** and **SQLite**.

![opdetails3](\staticfiles\deployment\media\EasyEnv\opdetails3.PNG)

5) Clicking on the **Setting** tabs, you get the following view. This page is only accessible to users who has the privilege to control the settings of On Premise environment.

![opdetails4](\staticfiles\deployment\media\EasyEnv\opdetails4.PNG)

**`Settings` have three available sections for managing OP Agents:**

1) Retry Setting - One can schedule resync of failed integrations, where you can provide the start time, 
   no. of iterations and batch size for each resync. Default frequency is daily. To make the resync schedule active,
   you must activate Retry transaction.

2) Log Settings - You can control the way you want to view and store the log in OP Agent from portal now.

* If Log in detail is set, then the log will be reflected in .txt files and stored in the same way. If Log in Database is set, then the log will be 
  stored in sql lite database and will be reflected in the log bucket.
* Set Target for - It will allow you to define the type of log that you want to view, whether Error, Infor or Status.
* Severity Level - Each log has its own severity level. You can set the type - Critical, High, Medium, depending on the log, you want to view.

3) Real Time Settings - Users can provide the Realtime details when working with APPSeCONNECT API Management. 
   Users need to provide the Hostname and the Port for the RealTime Execution.    

4) Diagnostic Settings - You can turn the Diagnostic mode on, from portal itself. Once the its active, all the transaction and process 
   files will get available in Agent and service path as shown in the image.  

Diagnostic Settings is provided with two output paths:

a)	Agent Output Path: This path provides the details of the transformed files when triggered manually.         
b)	Service Output Path: Service path provides the details of the transformed files when triggered through Autosync.       

![opdetails5](\staticfiles\deployment\media\EasyEnv\opdetails5.PNG)    
(Image of Realtime settings & Diagnostics Settings)

After saving the changes in settings, the updated information gets auto-reflected in OP Agent. 

**Note:**

**- Any changes done and saved in the environment settings page of the portal, will get updated in the Settings section of the corresponding OP Agent and vice-versa.**

**- The environment details page appears only when the autosync checkbox is enabled and activated in the settings of OP Agent as keeping autosync activated keeps the Agent and the Portal connected.**


### Grouping of On-Premise Environments
This section of the document will allow you to Group multiple OP environments in folders. Grouping is initiated to manage and the arrangement of multiple similar elements for distinguishing its exact purpose. In APPSeCONNECT, for On-Premise environments
, you can group environments in folders as per your requirement. You can view all your created folders on expanding the On-Premise section.
Follow the process below to create folders for grouping.

1) Navigate to Manage > Environments. Click on the Ellipses (Three Horizontal Dots) beside the On-Premise Node to view the option **Create Folder**.

![opfolder1](\staticfiles\deployment\media\EasyEnv\opfolder1.PNG)

2) You get the window for providing the name of the folder. The folder would be created with the provided name under the On-Premise section.

![opfolder2](\staticfiles\deployment\media\EasyEnv\opfolder2.PNG)

3) Expand the On-Premise node, to view your created Folder. Clicking on the folder, you will view following page.

![opfolder3](\staticfiles\deployment\media\EasyEnv\opfolder3.PNG)

4) You can Drag and drop the OP environments to the folders for easy arrangements.

![opfolder4](\staticfiles\deployment\media\EasyEnv\opfolder4.PNG)

5) You can perform the following functionalities within a created folder. Click on the Ellipses beside the created folder to view these following option in the context menu.

- **Add Folder:** You can add a sub folder to your created folder for micro management of the On-Premise environments.
- **Rename:** You can anytime RENAME your created folder as per the need of yours.
- **Delete** In case the folder is not required, you will be able to delete the created folders anytime.

![opfolder5](\staticfiles\deployment\media\EasyEnv\opfolder5.PNG)

** You can delete your created folders anytime. On its deletion, all the  On-Premise Enviroments under that folder will be unparented and will shift under the main On-Premise folder.**

Following the above process you can easily create and group your On Premise Environments.

**Note:**

- You can create to max upto two level when creating folders exculding the main **On-Premise**: On Premise > Folder 1 > Sub folder 1.
- You cannot create Folders, Sub-Folders with same name in your organisation. Each name provided for any folders or sub-folders should be unique.

## Manage Control of Environments

Managing Control over an Environment is an eesential requirement that depicts which environment is set as PRIMARY. As Workflow are deployed only to the environments which are set as PRIMARY.
Therefore, users needs to manage control of their environment. This section of the document will allow you to manage the control of your environments be it the **HOSTED** or **On-Premise**

1) Navigate to Manage > Environments and click on the environment which you are required to control. 

2) You get to view the Environment Details Page of your selected environment (either [HOSTED](/deployment/Easy-Environment-Management/#hosted-environment-details-page) or [On-Premise](/deployment/Easy-Environment-Management/#on-premise-environment-details-page))
In this case, On-Premise environment is selected.

3) You are required to click on the checkbox available in the Top-Right corner of the details page. Enabling the checkbox will allow you to control the selected environment.

![controlenv1](\staticfiles\deployment\media\EasyEnv\controlenv1.PNG)

4) On enabling, you can confirm your current control status in the environment page itself.

![controlenv2](\staticfiles\deployment\media\EasyEnv\controlenv2.PNG)

Following the above steps, you can successfully control environments for your organisation.

**Note:**

- The steps to control an HOSTED environment is same as that mentioned in the above steps.
- You cannot control multiple environments at the same time for an organisation.

## Hosted 

This section will enable you to create an hosted (Cloud) environment. You can view all the related environment details in its [Environment Details page](/Easy-Environment-Management/#hosted-environment-details-page)

1) If you do not have the support of the Hosted (cloud) environment, you will get the following view. 

![hostedenv1](\staticfiles\deployment\media\EasyEnv\hostedenv1.PNG)

To enable your organisation with cloud support, [Click here.](/deployment/Deployment-Configuration/#configuration-process-for-cloud)

2) If you have the support of Hosted (cloud) environment on your organisation, yet, you don't have a Hosted environment created, you will get the following view. 

![hostedenv2](\staticfiles\deployment\media\EasyEnv\hostedenv2.PNG)

[Click here](/deployment/Easy-Environment-Management/#create-hosted-environment) to know more about Hosted Environment creation. 

**Note:** There can be scenarios where you may have an hosted environment present, yet clicking on the HOSTED section it displays **Your organisation is not cloud enabled** and
your Hosted agent will be in **GREYED form** and clicking on the environment, will also display **Your organisation is not cloud enabled**. For such cases, you will have to enable
your organisation with HOSTED Support.

### Create Hosted Environment

This section of the document will help you to create the Hosted (cloud) environment on your organisation, provided your organisation has to be 
Cloud supported. To enable your organisation with cloud support, [Click here.](/deployment/Deployment-Configuration/#configuration-process-for-cloud)

1) Navigate to Manage > Environment. The Environment page opens.

2) You will get the following view if you do not have the hosted (cloud) environment created. Click on the **Click Here** button.

![hostedcreate1](\staticfiles\deployment\media\EasyEnv\hostedcreate1.PNG)

3) Your Hosted environment will be created automatically. You will be provided with a confirmation message on its successful creation.

![hostedcreate2](\staticfiles\deployment\media\EasyEnv\hostedcreate2.PNG)

4) You can view the created environment in the listing, by expanding the Hosted Node. By default, the name of hosted environment will created as **My-Hosted-Environment**.

![hostedcreate3](\staticfiles\deployment\media\EasyEnv\hostedcreate3.PNG)

5) Clicking on the created environment, you will be able to view the details page consisting of the following tabs:

- Settings -> You can modify and update the environment setting from this tab
- Process Flow -> You will be able to view all the deployed process flows, related snapshots, retry, undeploy etc.

For more details on the Environment Details page, [Click Here](/deployment/Easy-Environment-Management/#hosted-environment-details-page)

**Note:**

**- Every organisation can have only one Hosted environment created.**

**- You cannot rename the name of the created hosted environment.**

**- You cannot group environments in folders in the HOSTED section.**

### Hosted Environment Details page

You will be able to view this page only when you have you hosted environment created. Clickin on the Hosted environment, you can view the details page.

![hosteddetails1]()

1) Clicking on the Hosted environment, will provide you with TWO tabs: **Settings** and **Process Flows**.

2) You will be able to view the following section when clicked on the **Settings** tab.
- **Retry Settings:** - This will enable you to configure the retry/resync of the integration process if executed on this environment. The following configuration can be made in the retry section.
    - Frequency: This is a static field and is for the schedule period for the Resync to happen. By default, its configured as Daily.
    - Start Time: This is a customizable field for the user. It defines the start time of the Resync Process.
    - Execute For: This a time span as for how long the Resync process will occur. The span is processed in hours and users can customize it as per their requirement. By default, its configured as 0.
    - Batch Size: This field states, the no of data in a batch to be resynced. The Default value is 10 but the users are open to customize as per their requirement.

- **Log Settings:** You can control the way you want to view and store the logs for every execution on you hosted environment.
    - Log in Detail: Detailed log would be fetched as per the sync is processed.
    - Log in Database: The log fetched, would be stored in the database.
    - Set target for: Users can filter the failed sync based on Error, Info and Status.
    - Severity Level: Users can filter the error logs based on the severity level of the errors generated. The severity level is categorized into Medium, High & Critical. 

![hosteddetails2](\staticfiles\deployment\media\EasyEnv\hosteddetails2.PNG)

3) Clicking on the **Process Flow Tab** You can view all the Process Flow those are deployed on that environment. 
The following are the details that will displayed for deployed Process Flows. 
- **Process Flow Name:** The name of the process flow, deployed, will be displayed.
- **Deployed At:** The last deployment of the process flow will be displayed.
- **No. of tries:** You will be able to view the count of the number of retries performed.
- **Status** The status of the attempt of the deployment process (Successful or Unsuccessful) will be displayed.
- **Actions** The following actions can be formed for each process flows: **Last Deployment Log** , **[Undeploy](/processflow/deploying-and-executing-processfloww/#undeploy-process-flow-from-environment)** , **[View Snapshot](/processflow/snapshot-processflow/)** and **[Retry](/processflow/retry-processflow/)**


![hosteddetails3](\staticfiles\deployment\media\EasyEnv\hosteddetails3.PNG)

Following the above process, you can easily view and update the details of the Hosted agent.

## Detaching & Deleting the Environments

Environment detachment is a functionality that blocks the Agent from use in that specific environment. 
This section of the document will allow to attach/detach your environments. You can also DELETE you environments. The processes are given below.

### Attach/Detach of Environments

1) To detach your environment, you need to click on the ellipses (Three horizontal dots) beside the environment name that needs to be detached.

![detach1]()

2) On detaching the selected environment from Portal, it remains in the list but will be displayed as **Agent is Detached** when clicked on it.

![detach2]()

3) Post detachment, if the user tries to re-login to the On-Premise environment, it will display the message, **Agent is Blocked.**

![detach3]()

**Note:**
**- On detaching the Agent from portal, the On-Premise Agent automatically gets shut down.**
**- Detached Agents, needs to be reattached from the portal for further logging in to it.**
**- Users can anytime delete and detach/attach an inactive agent in the portal.** 

### Deleting Environments

You can now directly delete environments that are no longer in use from the listing itself. As soon as you perform delete from portal, the OP Agent instance (active/inactive) gets auto-removed from the local environment and all the associated licenses will get removed.

All the services and sync operations will get stopped. If any new user or different project user logs in further to the same environment, a new license will be generated against it. Follow the below steps to delete an environment (On-Premise or HOSTED).

1) Navigate to Manage > Environments.

2) Click on the ellipses of the environment (On-Premise or HOSTED) which you want to delete. Click on the DELETE button in the context menu that appears.

![delete1](\staticfiles\deployment\media\EasyEnv\delete1.png)

3) You will get a confirmation pop-up before the deletion process.

![delete2](\staticfiles\deployment\media\EasyEnv\delete2.png)

4) Once deleted, user get a successful message for the deletion of the environment. The environment gets removed from the environment list after the deletion process.

**Note: If a user has relogged in to a deleted Agent from the portal, 
the deleted agent now will be visible in attached mode in the portal.**

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

**Note: Old Agent in Detached mode, will not be able to deploy any configuration to the corresponding agent.**
 
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

**Resync Settings:** This section of the page has a checkbox for the user to Enable/Disable the autosync of resync.









