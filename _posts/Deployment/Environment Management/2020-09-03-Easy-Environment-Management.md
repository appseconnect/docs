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

2) 


### Grouping of On-Premise Environments
This section of the document will allow you to Group multiple OP environment in folders. Follow the process below to create folders for grouping.



## Manage Control of Environments

This section of the document will allow you to manage the control of your environments be it the **HOSTED** or **On-Premise**



## Detaching & Deleting the Environments

This section of the document will allow to attach/detach your environments. You can also DELETE you environments. The processes are given below.










