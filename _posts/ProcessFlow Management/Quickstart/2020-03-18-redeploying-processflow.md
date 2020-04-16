---
title: "Redeploy"
toc: true
tag: developers
category: "Processflow"
menus: 
    quickstartprocessflow:
        title: "Redeploy"
        weight: 6
        icon: fa fa-file-word-o
        identifier: redeployprocessflow
---


Redeploying processflow functionality allows you to re-deploy an existing Process Flows (deployed/deployed and executed)
to the  same environment in order to make any changes and execute the integration process.
Users, can redeploy the changes made in the Process Flows and there can be various types of 
changes pertaining to redeloying a process flow.

## Causes for Redeployment of Process Flow 

1) Deletion of an existing node.  
2) Addition of an existing node.  
3) Changes in Mapper node/Mapping  
4) Changes in Lookup Mapping- Addition, Deletion & Updation  
5) Updating Credential Token  
6) Updation in Action Filter & Error Filter  

### Prerequisites to deploy Process Flows

1.	Should have valid credentials for logging in to the APPSeCONNECT portal.
2.  A [deployed process](/processflow/deploying-and-executing-processflow/) flow should be available to make the changes for redeploying.

### Steps to redeploy Process Flows to Environment
1.	Login to the portal and navigate to the Process Flow module available on the left menu.  
2.  Choose the Process Flow which is already deployed.   
3.	Click on the deploy button in the Process Flow Designing Page. 
![Deploy Processflow2](../../staticfiles/processflow/media/deploy-processflow2.png)
4.  The deploy wizard appears where you can redeploy the process flow by making any changes.
5.  You can view the Environment section is already selected (remains same as chosen earlier)
    and the remaining part is in disabled Mode. This means if your selected environment is 
   `On-Premise` then Hosted will be in diabled mode and vice-versa. Make sure to check the
    envirnonment is in conneced state.    
![Redeploy Processflow](../../staticfiles/processflow/media/redeploy-processflow.png) 
**NOTE: If the environment is in disconnected state, you will get an error message -
`Environment is not connected` and thus you cannot proceed with further deployment steps**    
6. Click NEXT button, the selected apps and its adapters in the designed Process Flow would get downloaded.
7. The screen navigates to the Set-up connection section of the Deploy wizard. Select the credential from the drop down, 
for the respective application used in the Process Flow.Previously chosen credentials will be selected if exists in the process flow,
incase of new credentials added to the application will be visible in the drop down list. Choose the credential as required.   
![Redeploy3](../../staticfiles/processflow/media/redeploy3.png)
8. Click `Refresh Connection` button. You will get the latest credentials or updates to credentials made in the OP Agent. 
Now Click on the NEXT button.
9. The screen navigates to the lookup section of the Wizard, where you can view the existing lookups implemented
 while mapping the attributes. During the redeployment of Process Flow, latest fixes will 
 be displayed with selected Reference Table with a green tick.
![Redeploy4](../../staticfiles/processflow/media/redeploy4.png)  
* User will have option to re-assigned preassigned `Reference Table`.
* User will have option to assigned fix unfixed warnings.
* If a `Reference Table` has already been selected during a Process Flow deployment 
  and then the Lookup Mapping or the Reference Table is deleted (from the Lookup Repositories), 
  then during Redeployment process, the deleted lookup mapping will show as an unresolved 
  warning which the user may fix if desired.
![Redeploy5](../../staticfiles/processflow/media/redeploy5.png)  
10. Click Next, The screen navigates to the Sync & retry section of the deploy wizard. You can choose or change the configuration from 
Manual/Auto for re-deploying the Process Flow.  
![Redeploy6](../../staticfiles/processflow/media/redeploy6.png)    
11. After configuring the sync and retry section, click Finish button. 
The Process Flow would be successfully re-deployed.   

You can view these messages Process Flow Publish Started, Process Flow Publish Completed, 
Downloading Process Flow Data, Downloading XSLT Files, Deployed etc. while re-deploying. 
click the Finish button. Following the above steps, you can successfully Deploy and Execute a Process Flow.

Following the above steps, you can successfully Redeploy and Execute a Process Flow.








 








