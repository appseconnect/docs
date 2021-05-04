---
title: "Unfinished Deployment"
toc: true
tag: developers
category: "Processflow"
menus: 
    quickstartprocessflow:
        title: "Unfinished Deployment"
        weight: 9
        icon: fa fa-file-word-o
        identifier: redeployprocessflow
---

Unfinished Deployment functionality enables the user to track the undeployed processflows, and inturn 
aids you to check the status of unfinished deployment in the portal itself, and carrry on smoothly the functionality of 
[redeployment](/processflow/redeploying-processflow/) of those undeployed processflows.  

## Causes for Unfinished Deployment of processflow 

1) Background Services Interrupted  
2) API Service Down  
2) Cloud Agent Services Down    
3) Autosync Stopped working during deployment  

### Prerequisites 

1.	Should have valid credentials for logging in to the APPSeCONNECT portal.    
2.  A [Designed Process](/processflow/designer-processflow/) flow with source and destination application node 
configurations done.    
3.  A [deployed processflow](/processflow/deploying-and-executing-processfloww/) should be available to make the changes for redeploying.  
4.  Enable Environment should be checked in the Agent.      

### Steps to redeploy processflows to Environment
1.	Login to the portal and navigate to the [processflow](/processflow/overview-of-processflow/) module available on the left menu.  
2.  Choose the processflow to be deployed to make any redeployment or do deploy a designed configured processflow.   
3.	Click on the deploy button in the processflow [Designing Page](/processflow/designer-processflow/).   
![unfinished_deployment1](\staticfiles\processflow\media\unfinished_deployment1.png)    
4. The deploy wizard opens up and the consecutive steps to [deployment](/processflow/deploying-and-executing-processfloww/) starts.  
5. Deployment wizard takes you to the Processflow Designer page. The Tracker window opens automatically.    
6. During the process of deployment, if the background service is interuppted/API Service gets down, the 
 deployment process goes into unfinished state. Now the user can view status of unfinished deployments 
 in the [environment](/deployment/Environment-Management/) section of the portal.     
7. During Processflow deployment user will be able to see the status in the tracking window. 
 and the `Deploy` button remains in disabled state.       
8.  After Deployment, You can view the [Environment section](/deployment/Environment-Management/). Here you can  view the deployed processflow under the
Processflow tab. All-Status of the deployment should be updated from agent through API.    
![unfinished_deployment2](\staticfiles\processflow\media\unfinished_deployment2.png)          
9. You can view the `deployment log` in Environment section, of the selected processflow under Action . This helps
to track the last deployment logs at any time and also, when the processflow gets tracker
 window is closed.    
**To carry out the steps on unfinished deployment of processflow, you have to check the environment section of the portal.** 
10. In the environment section, you can view three columns under processflow tab -  `Number of tries`, `Status`, 
&  `Deployment Log`.          
11. The deployment status of a processflow is vsible under `Status` section.   
You can view the following deployment status      
(a) Successful - Here the Deployment is executed successfully without any error.    
(b) Pending - Here the deployment process started but remains incomplete.     
![unfinished_deployment3](\staticfiles\processflow\media\unfinished_deployment3.png)         
 * `Pending time out`  is configurable from [environment](/deployment/Environment-Management/) *settings* in the portal.   
 * Here the Time out for Pending is in a range within 5 mint to 60 mints. Default Pending time out 
   for the field will be 5 mints.    
 * During the deployment process, if the disconnected agent from cloud gets reconnected
 within the time range of pending time out, then the agent will automatically retry the pending 
 steps of deployment and will complete the deployment process.  
 * In the pending state of deployment - Resync, Un-deploy context menu will be unavailable.
 * Pending state will show -  Deployment Started: (time), Pending timeout: 5 mint, 
   Wait till :(start time+Pending timeout).
   ![pendingstatus](\staticfiles\processflow\media\pendingstatus.png)  
*  processflows are editable in `Pending` state of deployment.     
![unfinished_deployment4](\staticfiles\processflow\media\unfinished_deployment4.png)        
(c) Unsuccessful - If the Deployment is incomplete and have not reached the finishing step. 
You can try to redeploy the processflow from unsuccessful status.
If pending time out gets over and deployment not completed within the timeout frame, 
it will show `Unsuccessful` status.       
12. You can view the `n` number of try  under `Number of tries` column you did to 
deploy specific processflow to the selected environment.  Once deployed successfully, 
the number of tries reset to zero.  
13. `Deployment Log`- column will have a link that will open the Deployment Log window. 
The window will show the last deployment log that shows in the Tracker window.   
Users will be able to un-deploy any processflow that has the status of `Successful or Unsuccessful`. 
 
Thus the above given steps enable you to work with unfinished deployment of Processflow and [redeploy](/processflow/redeploying-processflow/)
it to your organization. 

**NOTE: (a) `Deploy` button always remains disabled- Till the completion of  processflow deployment or processflow deployment state remains Pending 
in [environment](/deployment/Environment-Management/) section.  
(b) `Execute` button always remain disabled -  Till the completion of  processflow deployment or processflow deployment state remains Pending 
in [environment](/deployment/Environment-Management/) section    
(c) Before redeploying, the agent will take backup of the previously 
deployed XSLT of the specific processflow and processflow database, along with dependent data. 
If redeployment of the processflow fails, the agent will automatically restore backed up 
configuration after pending time outs. Then after successful deployment, the deploy button
will get enabled** 




 








