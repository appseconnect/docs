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

## Hosted 

By default, you will be on the Hosted section, when landing in the environment page. This section will enable you to create an hosted (Cloud)
environment. You can view all the related environment details in its [Environment Details page](/Easy-Environment-Management/#hosted-environment-details-page)

1) If you do not have the support of the Hosted (cloud) environment, you will get the following view. 

![hostedenv1]()

To enable your organisation with cloud support, [Click here.](/deployment/Deployment-Configuration/#configuration-process-for-cloud)

2) If you have the support of Hosted (cloud) environment on your organisation, yet, you don't have a Hosted environment created, you will get the following view. 

![hostedenv2]()

[Click here](/deployment/Easy-Environment-Management/#create-hosted-environment) to know more about Hosted Environment creation. 

### Create Hosted Environment

This section of the document will help you to create the Hosted (cloud) environment on your organisation, provided your organisation has to be 
Cloud supported. To enable your organisation with cloud support, [Click here.](/deployment/Deployment-Configuration/#configuration-process-for-cloud)

1) Navigate to Manage > Environment. You will be selected with the hosted section by default.

2) You will get the following view if you do not have the hosted (cloud) environment created. Click on the **CREATE** button.

![hostedcreate1]()

3) Your Hosted environment will be created automatically. You will be provided with a confirmation message on its successful creation.

![hostedcreate2]()

4) You can view the created environment in the listing, by expanding the Hosted Node. By default, the name of hosted environment will created as **My-Hosted-Environment**.

![hostedcreate3]()

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

![hosteddetails2]()

3) Clicking on the **Process Flow Tab** You can view all the Process Flow those are deployed on that environment. 
The following are the details that will displayed for deployed Process Flows. 
- Name of the Process Flow 
- Description of the Process Flow 
- Version of the Process Flow 
- The time of Deployment

![hosteddetails3]()

Following the above process, you can easily view and update the details of the Hosted agent.


## On-Premise

This section will allow you to know about the On-Premise environments that will be installed on your local server for executing the sync processes.

1) If you are a new user and if you do not have any On-Premise Environment installed, you would get the following view.

![openv1]()

However, clicking the **DOWNLOAD** button will start the download process the On-Premise environment. [Click Here](/deployment/Deployment-Configuration/#on-premise-agent-configuration) to know more about its installation process.

2) If you already have the On-Premise agents installed, you will be getting the following view.

![openenv2]()

[Click Here]() to know more about the On-Premise environment details page.

### On-Premise Environment Details page

This section of the document will allow you to view and understand the details of your On Premise environment.

1) Click on the OP environment. You will be able to view the following tabs: **Properties** , **Process Flows**, **Plugins** , **Settings**

![opdetails1]()

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
- **Actions** The following actions can be formed for each process flows: **[Last Deployment Log]()** , **[Undeploy](/processflow/deploying-and-executing-processfloww/#undeploy-process-flow-from-environment)** , **[View Snapshot](/processflow/snapshot-processflow/)** and **[Retry](/processflow/retry-processflow/)**

![opdetails2]()

4) Click on the **PLUGINS** tab. You will be able to view the all the plugins available on your On-Premise environment. The following plugins will be listed: **[MySQL](/deployment/MYSQL-plugin-installation/)** , **[OLEDB](/deployment/OLE-db-plugin-installation/)** , **[HANA](/deployment/hana-plugin-installation/)** and **SQLite**.

![opdetails3]()

5) Clicking on the **Settings** tabs, you get the following view. This page is only accessible to users who has the privilege to control the settings of On Premise environment.

![opdetails4]()

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

![opdetails5]()    
(Image of Realtime settings & Diagnostics Settings)

After saving the changes in settings, the updated information gets auto-reflected in OP Agent. 

**Note:**

**- Any changes done and saved in the environment settings page of the portal, will get updated in the Settings section of the corresponding OP Agent and vice-versa.**

**- The environment details page appears only when the autosync checkbox is enabled and activated in the settings of OP Agent as keeping autosync activated keeps the Agent and the Portal connected.**


### Grouping of On-Premise Environments
This section of the document will allow you to Group multiple OP environment in folders. Follow the process below to create folders for grouping.



## Manage Control of Environments

This section of the document will allow you to manage the control of your environments be it the **HOSTED** or **On-Premise**



## Detaching & Deleting the Environments

This section of the document will allow to attach/detach your environments. You can also DELETE you environments. The processes are given below.










