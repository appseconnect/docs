---
title: "Deploy, Execute & Undeploy"
toc: true
tag: developers
category: "Processflow"
menus: 
   quickstartprocessflow:
        title: "Deploy, Execute & Undeploy"
        weight: 6
        icon: fa fa-file-word-o
        identifier: deployprocessflow
---

Created or Edited processflows needs to be deployed to the environment in order to execute the integration process. 
Users, now need not have to update configuration every time for deploying every change made in the processflows. 
`DEPLOY` button enables the user to automatically deploy the changes in the environment as well as assign the 
credential for the applications that is used in the processflows.

## Prerequisites 

1)	Should have valid credentials for logging in to the APPSeCONNECT portal.

2)	[APPS](/processflow/processflow-app/) should be chosen from the apps section, for proceeding with the design of processflows.

3)	The [designed](/processflow/designer-processflow/) processflow should be saved before deploying it to the environment.

4)  If you are deploying the processflow to the On-Premise environment, you need to check the `Enable Environment` checkbox in the Agent Settings as Active. 

## Deploying processflows to Environment

1)	Login to the portal and navigate to the processflow module available on the left menu. 

2)  Choose the processflow which is already designed and was saved or you can [create a processflow](/processflow/creating-processflow/)    

3)  Click on the `edit button` available for the selected processflow, which will navigate the user to the processflow Designing Page. Click on the `deploy button` in the processflow Designing Page.  

![Deploy Processflow2](../../staticfiles/processflow/media/deploy-processflow2.png) 

4) The Deploy wizard opens on clicking the `Deploy` button. The deploy wizard is divided in to three sections.

- **Select Environment:** You need to select the type of environment (Cloud or On-Premise) for deploying the processflow.
- **Set up Connection:** You need to select the credential for the applications selected in the processflow provided in the Agent.
- **Select lookups:** You need to fix up the lookups mapped for the attribute in the mapper node.
- **Sync & Retry:** You need to configure the Manual/Auto  & Retry execution of the processflow.

**Note: You can view some explained steps on the Right Side of the Deploy Wizard in the How it 
Works section, that will also help you deploy your processflow successfully.** 

![Deploy Processflow3](../../staticfiles/processflow/media/deploy-processflow3.png) 

## Deploy processflows: Hosted Environment
This section will allow you to deploy processflows, if you want to deploy your designed processflows in **Hosted Environment.**

### Select Environment: Hosted
This section will let you define and select the environment where you want to deploy your designed processflow.

(a)  Choose the type of environment as **HOSTED** by selecting its Radio button. - Incase, no options available in the drop-down for **Hosted environment**, you will have to create your [HOSTED environment](/deployment/Environment-Management/#hosted). 

![pfdeploycloud](\staticfiles\processflow\media\pfdeploycloud1.PNG)

* For more Environment related details, [Click Here](/deployment/Environment-Management/). 

(b) Select your Hosted agent from the drop down and click on the NEXT button. The screen moves **Set Up connection** section.

![pfdeploycloud2](\staticfiles\processflow\media\pfdeploycloud2.PNG)

### Set up Connection: Hosted

The section will allow you to map the credential tokens selected in the app node configuration window with the credentials provided in your agent.

_**Note: You cannot navigate to the next section of the wizard without selecting the credentials the applications used.**_  

(a) The screen navigates to the Set-up connection section of the Deploy wizard. You need to select the credential from the drop down, for the respective application used in the processflow. 

![deployhostedcred1](\staticfiles\processflow\media\deployhostedcred1.PNG)

(b) If you do not have any credentials in the drop down, click on the `+` button. 

![deployhostedcred2](\staticfiles\processflow\media\deployhostedcred2.PNG)

(c) The credential page opens for providing the [cloud credentials](/connectors/OLEDB-Credentials/#how-to-add-credentials-for-cloud-integration) for that application. You can provide your application credentials or can modify an existing one.

![deployhostedcred3](\staticfiles\processflow\media\deployhostedcred3.PNG)

(d) Clicking on the NEXT button will allow you to navigate to the [Select Lookups](/processflow/deploying-and-executing-processfloww/#select-lookups) section

### Select Lookups: Hosted

This section will allow you to fix, unfix the lookups mapped in the mapper node. The operations in this section is same as that of On Premise, to know more about the steps, [Click Here](/processflow/deploying-and-executing-processfloww/#select-lookups-on-premise).

![Deploy Processflow8](../../staticfiles/processflow/media/deploy-processflow8.png)

### Sync and Retry: Hosted

This section enables you to configure your processflow Sync and Re-try either in **auto mode** or **manual mode** before 
execution of the processflow. The operations in this section is same as that of On Premise, to know more about the steps, [Click Here](/processflow/deploying-and-executing-processfloww/#sync-and-retry-on-premise)

![Deploy Processflow13](../../staticfiles/processflow/media/deploy-processflow13.png)

## Deploy processflows: On Premise Environment

This section will allow you to deploy processflow to your On-Premise Environments.

### Select Environment: On Premise

(a)  Choose the type of environment as **On Premise** by selecting its Radio button. If you don't get any options in the drop-down, you will have to activate the **Enable Environment** button on your [Agent Settings](/deployment/settings/#enable-environment). Click on the REFRESH button to get the environment in the drop down.

* You need to install the agent if you do not have an installed [Environment](/deployment/Deployment-Configuration/#on-premise-agent-configuration). 

![Deploy Processflow4](../../staticfiles/processflow/media/deploy-processflow4.png) 

* For more Environment related details, [Click Here](/deployment/Environment-Management/). 

(b) Click on the NEXT button, the selected apps and its adapters in the designed processflow would get downloaded. The latest adapters set for your application, gets downloaded on your selected On-Premise Environment. The screen navigates to the **Set up Connection** section.

### Set up Connection: On-Premise

The section will allow you to map the credential tokens selected in the app node configuration window with the credentials provided in your agent.

_**Note: You cannot navigate to the next section of the wizard without selecting the credentials the applications used.**_  
  
(a) The screen navigates to the Set-up connection section of the Deploy wizard. You need to select the credential from the drop down, for the respective application used in the processflow. 

![Deploy Processflow5](../../staticfiles/processflow/media/deploy-processflow5.png)

(b)Provide the credentials in the App Configuration section of the On-Premise Agent. You can view the [pre-packaged applications](/connectors/Overview-of-Connectors/).

![Deploy Processflow6](../../staticfiles/processflow/media/deploy-processflow6.png)

(c) Click  the `Refresh Connection button`. You will get the latest credentials or updates to credentials made in the OP Agent. Click on the NEXT button. The screen navigates to the **Select Lookups Section**

![Deploy Processflow7](../../staticfiles/processflow/media/deploy-processflow7.png) 

### Select Lookups: On Premise

This section will let you work with assigning of lookups mapped in the mapper node. If you dont have any lookups mapped, you can click on the NEXT button as **SELECT LOOKUPS** is not a mandatory step.
Follow the steps below if you are required to fix and assign lookups.

**The below steps are same, if you are deploying your processflow on your **HOSTED** environment.**

(a) The screen navigates to the lookup section of the Wizard, where you are required to fix the lookups if provided while mapping the attributes.

![Deploy Processflow8](../../staticfiles/processflow/media/deploy-processflow8.png)

(b) The lookup section would be listed with all the lookups that are mapped in the mapper node. Click the button FIX to select the lookup type/table that is needed to deploy with the processflow.

![Deploy Processflow9](../../staticfiles/processflow/media/deploy-processflow9.png)

(c) Click the fix button. You can view all the Repository Collection and the Reference Table available. Click here to know about [Repositories]().    

![Deploy Processflow10](../../staticfiles/processflow/media/deploy-processflow10.png)

(d) Expand the Collection and select the table that is required to be fixed for deploying the lookup.

![Deploy Processflow11](../../staticfiles/processflow/media/deploy-processflow11.png)

**Note:** 

- **Here, the lookup is implemented for Country, therefore we select the table country for fixing the lookup mapping.** 
- **You can select only one table at a time.**

(e) Click on the Done button. You can view a tick icon beside the button FIX.

![Deploy Processflow12](../../staticfiles/processflow/media/deploy-processflow12.png)

(f) The screen navigates to the Sync and Retry section of the deploy wizard after clicking on the NEXT button.

### Sync and Retry: On Premise

This section enables you to configure your processflow Sync and Re-try either in **auto mode** or **manual mode** before 
execution of the processflow here. By default, the sync type toggle button is selected in Manual Mode. 

**The below steps are same, if you are deploying your processflow on your **HOSTED** environment.**

![Deploy Processflow13](../../staticfiles/processflow/media/deploy-processflow13.png)

#### Process to configure Sync Process - Manual Mode
By toggling the **Select Sync** Toggle to Manual, your processflow will be configured to manual mode of execution. You will not have to configure any details for manual mode of sync process.

#### Process to configure Sync Process - Auto Mode
Select Frequency - There are three Options to choose from-  Every Day, Minute & Hour             
(a) If the Frequency selected as `Everyday`, you need to provide Interval/Sync Daily 
as shown below: 

![Processflow Autosync1](../../staticfiles/processflow/media/processflow-autosync1.png)  

(b) If frequency selected as Minute, you can provide input (Only 1-59). You can select End Execution or Never.If you select End Execution, Execution of a process 
flow will stop auto-sync after ‘N’ number of occurrences.    
If your selected option is **NEVER**, processflow will never stop execution.    
![Processflow Autosync2](../../staticfiles/processflow/media/processflow-autosync2.png)  

(c) If frequency selected as Hour, you can provide input (Only 1-23). You can select 
End Execution or Never.If you select End Execution, Execution of a process 
flow will stop auto-sync after ‘N’ number of occurrences.    
If your selected option is **Never**, processflow will never stop execution.
![Processflow Autosync3](../../staticfiles/processflow/media/processflow-autosync3.png)

#### Process to configure Retry - Auto & Manual
Retry setting can also be configured either in AUTO Mode or MANUAL mode. Enabling the Toggle button to **Manual** will allow the user to perform RETRY manually.
To know more about configuring RETRY in AUTO mode, navigate to the [Sync & Retry section](/processflow/retry-processflow/) of deploy wizard. 

(a) After configuring, click Finish button. The Tracker Window opens and you can view these messages processflow Publish Started, processflow Publish Completed, 
Downloading processflow Data, Downloading XSLT Files, Deployed etc.  

![Deploy Processflow14](../../staticfiles/processflow/media/deploy-processflow14.png)

(b) Once deployed, click on the Execute button in the processflow Designer page of the processflow.  

![Deploy Processflow15](../../staticfiles/processflow/media/deploy-processflow15.png)

Following the above steps, you can successfully Deploy and Execute a processflow.

## Executing Deployed processflow
Execution of a processflow is a vital process for transforming data from one application to another. The basic prerequisites for executing a processflow is given below:
Prerequisites:
* You need to create a processflow. Steps to create a processflow is given here.
* You need to deploy the created processflow or an existing process that needs to be executed. Follow the above steps to know about the process of deploying.
* Environment should be active for the processflow to execute successfully.

### Steps to execute a processflow

1.	Once deployed, you need to click on the Execute button in the processflow Designer page.
![Deploy Tracker1](../../staticfiles/processflow/media/deploy-tracker1.png)  
2.	The tracker window opens on clicking the EXECUTE button. The Tracker window displays the node specific execution logs and messages as the processflows enters from one node to another.
![Deploy Tracker2](../../staticfiles/processflow/media/deploy-tracker2.png)  
3.	You can view each step of the operation. Nodes in the processflow will change its colour according to the operation. 
  * On-Going Operation: Yellow      
  * Failed Operation: Red       
  * Successful Operation: Green      
4.	You can [view the node specific snapshot](/processflow/snapshot-processflow/) for the processflow results. 
![Deploy Tracker3](../../staticfiles/processflow/media/deploy-tracker3.png)  

## Deployed processflows in Environment

1.	Navigate to the [Environment section](/deployment/Environment-Management/) in the portal & click on the active environment. The details page of the active environment opens
![Deploy Processflow Env](../../staticfiles/processflow/media/deploy-processflow-env.png)    
2.	Click on the processflows tab in the Environment Details Page. You can view all the processflow those are deployed on that environment.
The following are the details that will displayed for deployed processflows.    
a.	Name of the processflow  
b.	Description of the processflow    
c.	Version of the processflow  
d.	The time of Deployment    
e.	Actions        
![Deploy Processflow Env2](../../staticfiles/processflow/media/deploy-processflow-env2.png) 

## Undeploy processflow from Environment

The deployed processflow (both executed/non-executed) can be undeployed from the environment
listing page. 

1. Go to [environment listing](/deployment/Environment-Management/) page.
2. You can view the list of processflow from Choose the processflow you want to undeploy, and click on the Undeploy button.
![Processflow Undeploy2](../../staticfiles/processflow/media/processflow-undeploy2.png)   
3. You get a pop up message for undeploying processflow. Click `Yes` and the deployed processflow automatically will gets undeployed and you can view the same in the 
portal. To cancel the step, click `No`.
![processflow-undeploy1.PNG](../../staticfiles/processflow/media/processflow-undeploy1.PNG)  
The undeployed processflow remains visible in the environment listing page but it gets completly
detached from the agent. You can later deploy the undeployed processflow.

### Impact of Undeploying Processflow from On-Premise Agent 

* This deletes processflow data, link and nodes.
* Deletes processflow database.
* Response back to Portal with signalR.
* Visual representation of waiting.

### Impact of Undeploying Processflow from Cloud Agent

For cloud agent undeploy API will be called and this need to unscheduled.