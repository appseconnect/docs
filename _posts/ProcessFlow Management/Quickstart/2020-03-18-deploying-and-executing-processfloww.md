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

Created or Edited Process Flows needs to be deployed to the environment in order to execute the integration process. 
Users, now need not have to update configuration every time for deploying every change made in the process flows. 
`DEPLOY` button enables the user to automatically deploy the changes in the environment as well as assign the 
credential for the applications that is used in the Process Flows.

### Prerequisites to deploy Process Flows

1.	Should have valid credentials for logging in to the APPSeCONNECT portal.
2.	[APPS](/processflow/processflow-app/) should be chosen from the apps section, for proceeding with the design of Process Flows.
3.	The [designed](/processflow/designer-processflow/) Process Flow should be saved before deploying it to the environment.
4.  If you are deploying the process flow to the On-Premise environment, you need to check the `Enable Environment` checkbox in the Agent Settings as Active. 

### Steps to deploy Process Flows to Environment
1.	Login to the portal and navigate to the Process Flow module available on the left menu.  
2.  Choose the Process Flow which is already designed and was saved or you can [create a process flow](/processflow/creating-processflow/)     
3.  Click on the `edit button` available for the selected Process Flow, which will navigate the user to the 
    Process Flow Designing Page.  
 ![Deploy Processflow2](../../staticfiles/processflow/media/deploy-processflow2.png) 
4.	Click on the `deploy button` in the Process Flow Designing Page.  
 **Note: You can view some explained steps on the Right Side of the Deploy Wizard in the How it 
Works section, that will help you deploy your process flow successfully.**  
5. The Deploy wizard opens on clicking the `Deploy` button. The deploy wizard is divided in to three sections.
* Select Environment: You need to select the type of environment (Cloud or On-Premise) for deploying the process flow.
* Set up Connection: You need to select the credential for the applications selected in the process flow provided in the Agent.
* Select lookups: You need to fix up the lookups mapped for the attribute in the mapper node.
* Sync & Retry: You need to configure the Manual/Auto  & Retry execution of the Process Flow.  
![Deploy Processflow3](../../staticfiles/processflow/media/deploy-processflow3.png) 
(a) Now choose the type of environment (Cloud or On-Premise) by selecting the proper Radio button.  
* You need to install the agent if you do not have an installed [Environment](/deployment/Deployment-Configuration/#on-premise-agent-configuration). For more Enviroment related details, [Click Here](/deployment/Environment-Management/).
* As per the selected type of environment, you need to select an environment from the list of environments in the drop down. 

(b) Click on the NEXT button, the selected apps and its adapters in the designed Process Flow would get downloaded. The latest adapters set for your application, gets downloaded on your selected On-Premise Environment.
![Deploy Processflow4](../../staticfiles/processflow/media/deploy-processflow4.png)   
(c) The screen navigates to the Set-up connection section of the Deploy wizard. You need to select the credential from the drop down, for the respective application used in the Process Flow.   
 ![Deploy Processflow5](../../staticfiles/processflow/media/deploy-processflow5.png)
(d)Provide the credentials in the App Configuration section of the On-Premise Agent. You can view the [pre-packaged applications](/connectors/Overview-of-Connectors/).
![Deploy Processflow6](../../staticfiles/processflow/media/deploy-processflow6.png)
(e) Click  the `Refresh Connection button`. You will get the latest credentials or updates to credentials made in the OP Agent. Click on the NEXT button.
![Deploy Processflow7](../../staticfiles/processflow/media/deploy-processflow7.png) 
(f) The screen navigates to the lookup section of the Wizard, wherḍe you are required to fix the lookups if provided while mapping the attributes.
![Deploy Processflow8](../../staticfiles/processflow/media/deploy-processflow8.png)
* The lookup section would be listed with all the lookups that are mapped in the mapper node. Click the button FIX to select the lookup type/table that is needed to deploy with the Process Flow.
![Deploy Processflow9](../../staticfiles/processflow/media/deploy-processflow9.png)
* Click the fix button. You can view all the Repository Collection and the Reference Table available. Click here to know about [Repositories]().    
![Deploy Processflow10](../../staticfiles/processflow/media/deploy-processflow10.png)
*Expand the Collection and select the table that is required to be fixed for deploying the lookup.
![Deploy Processflow11](../../staticfiles/processflow/media/deploy-processflow11.png)
**Note: (a) Here, the lookup is implemented for Country, therefore we select the table country for fixing the lookup mapping.
        (b) You can select only one table at a time.**
 * Click on the Done button. You can view a tick icon beside the button FIX. 
![Deploy Processflow12](../../staticfiles/processflow/media/deploy-processflow12.png)
**Note: (a) Fixing the lookups is not a mandatory process, if required you can ignore the Select Lookups step.
        (b) User cannot navigate to the next section of the wizard without selecting the credentials the applications used.**  

(g) The screen navigates to the Sync and Retry section of the deploy wizard. 
This section enables you to configure your process flow Sync and Re-try in either auto mode or in manual mode before 
execution of the Process Flow here. By default, the sync type toggle button is selected in Manual Mode. 
![Deploy Processflow13](../../staticfiles/processflow/media/deploy-processflow13.png)

### Process to configure schedule Sync - Auto & Manual   
Select Frequency - There are three Options to choose from-  Every Day, Minute & Hour             
(a) If the Frequency selected as `Everyday`, you need to provide Interval/Sync Daily 
as shown below: 

![Processflow Autosync1](../../staticfiles/processflow/media/processflow-autosync1.png)  
(b) If frequency selected as Minute, you can provide input (Only 1-59).  
You can select End Execution or Never.If you select End Execution, Execution of a process 
flow will stop auto-sync after ‘N’ number of occurrences.    
If you select Never, process flow will never stop execution.    
![Processflow Autosync2](../../staticfiles/processflow/media/processflow-autosync2.png)  
(c) If frequency selected as Hour, you can provide input (Only 1-23). You can select 
End Execution or Never.If you select End Execution, Execution of a process 
flow will stop auto-sync after ‘N’ number of occurrences.    
If you select Never, process flow will never stop execution.
![Processflow Autosync3](../../staticfiles/processflow/media/processflow-autosync3.png)

### Process to configure Retry - Auto & Manual

Configure the settings for deploying the process flow and navigate to the [Sync & Retry 
section](/processflow/retry-processflow/) of deploy wizard. 

After configuring the, click Finish button. The Process Flow would be successfully 
deployed. You can view these messages Process Flow Publish Started, Process Flow Publish Completed, 
Downloading Process Flow Data, Downloading XSLT Files, Deployed etc. while deploying steps after 
clicking the Finish button.  
![Deploy Processflow14](../../staticfiles/processflow/media/deploy-processflow14.png)
Once deployed, click on the Execute button in the Process Flow Designer page of the Process Flow.  
![Deploy Processflow15](../../staticfiles/processflow/media/deploy-processflow15.png)

Following the above steps, you can successfully Deploy and Execute a Process Flow.

### Executing Deployed Process Flow
Execution of a Process flow is a vital process for transforming data from one application to another. The basic prerequisites for executing a process flow is given below:
Prerequisites:
* You need to create a process flow. Steps to create a process flow is given here.
* You need to deploy the created process flow or an existing process that needs to be executed. Follow the above steps to know about the process of deploying.
* Environment should be active for the process flow to execute successfully.

## Steps to execute a Process Flow

1.	Once deployed, you need to click on the Execute button in the Process Flow Designer page.
![Deploy Tracker1](../../staticfiles/processflow/media/deploy-tracker1.png)  
2.	The tracker window opens on clicking the EXECUTE button. The Tracker window displays the node specific execution logs and messages as the Process Flows enters from one node to another.
![Deploy Tracker2](../../staticfiles/processflow/media/deploy-tracker2.png)  
3.	You can view each step of the operation. Nodes in the process flow will change its colour according to the operation. 
  * On-Going Operation: Yellow      
  * Failed Operation: Red       
  * Successful Operation: Green      
4.	You can [view the node specific snapshot](/processflow/snapshot-processflow/) for the Process Flow results. 
![Deploy Tracker3](../../staticfiles/processflow/media/deploy-tracker3.png)  

### Deploying Process Flows to Environment

1.	Navigate to the [Environment section](/deployment/Environment-Management/) in the portal & click on the active environment. The details page of the active environment opens
![Deploy Processflow Env](../../staticfiles/processflow/media/deploy-processflow-env.png)    
2.	Click on the Process Flows tab in the Environment Details Page. You can view all the Process Flow those are deployed on that environment.
The following are the details that will displayed for deployed Process Flows.    
a.	Name of the Process Flow  
b.	Description of the Process Flow    
c.	Version of the Process Flow  
d.	The time of Deployment    
e.	Actions        
![Deploy Processflow Env2](../../staticfiles/processflow/media/deploy-processflow-env2.png) 

### Undeploy Process Flow from Environment

The deployed process flow (both executed/non-executed) can be undeployed from the environment
listing page. 

1. Go to [environment listing](/deployment/Environment-Management/) page.
2. You can view the list of process flow from Choose the process flow you want to undeploy, and click on the Undeploy button.
![Processflow Undeploy2](../../staticfiles/processflow/media/processflow-undeploy2.png)   
3. You get a pop up message for undeploying process flow. Click `Yes` and the deployed process flow automatically will gets undeployed and you can view the same in the 
portal. To cancel the step, click `No`.
![processflow-undeploy1.PNG](../../staticfiles/processflow/media/processflow-undeploy1.PNG)  
The undeployed process flow remains visible in the environment listing page but it gets completly
detached from the agent. You can later deploy the undeployed process flow.

### Impact of Undeploying Processflow from On-Premise Agent 

* This deletes process flow data, link and nodes.
* Deletes Process Flow database.
* Response back to Portal with signalR.
* Visual representation of waiting.

### Impact of Undeploying Processflow from Cloud Agent

For cloud agent undeploy API will be called and this need to unscheduled.