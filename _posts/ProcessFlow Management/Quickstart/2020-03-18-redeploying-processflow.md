---
title: "Redeploy"
toc: true
tag: developers
category: "Processflow"
menus: 
    quickstartprocessflow:
        title: "Redeploy"
        weight: 9
        icon: fa fa-file-word-o
        identifier: redeployprocessflow
---

Redeploying processflow functionality allows you to re-deploy an existing processflows (deployed/deployed and executed)
to the  same environment in order to make any changes and execute the integration process.
Users, can redeploy the changes made in the processflows and there can be various types of 
changes pertaining to redeloying a processflow.

## Causes for Redeployment of processflow 

1) Deletion of an existing node.  
2) Addition of an existing node.  
3) Changes in Mapper node/Mapping  
4) Changes in Lookup Mapping- Addition, Deletion & Updation  
5) Updating Credential Token  
6) Updation in Action Filter & Error Filter  

### Prerequisites to deploy processflows

1.	Should have valid credentials for logging in to the APPSeCONNECT portal.
2.  A [deployed process](/processflow/deploying-and-executing-processfloww/) flow should be available to make the changes for redeploying.

### Steps to redeploy processflows to Environment
1.	Login to the portal and navigate to the processflow module available on the left menu.  
2.  Choose the processflow which is already deployed.   
3.	Click on the deploy button in the processflow Designing Page. 
![Deploy Processflow2](../../staticfiles/processflow/media/deploy-processflow2.png)
4.  The deploy wizard appears where you can redeploy the processflow by making any changes.
5.  You can view the Environment section is already selected (remains same as chosen earlier)
    and the remaining part is in disabled Mode. This means if your selected environment is 
   `On-Premise` then Hosted will be in diabled mode and vice-versa. Make sure to check the
    envirnonment is in conneced state.    
![Redeploy Processflow](../../staticfiles/processflow/media/redeploy-processflow.png) 

**NOTE: If the environment is in disconnected state, you will get an error message -
`Environment is not connected` and thus you cannot proceed with further deployment steps**    

6. Click NEXT button, the selected apps and its adapters in the designed processflow would get downloaded.
7. The screen navigates to the Set-up connection section of the Deploy wizard. Select the credential from the drop down, 
for the respective application used in the processflow.Previously chosen credentials will be selected if exists in the processflow,
incase of new credentials added to the application will be visible in the drop down list. Choose the credential as required.   
![Redeploy3](../../staticfiles/processflow/media/redeploy3.png)
8. Click `Refresh Connection` button. You will get the latest credentials or updates to credentials made in the OP Agent. 
Now Click on the NEXT button.
9. The screen navigates to the lookup section of the Wizard, where you can view the existing lookups implemented
 while mapping the attributes. During the redeployment of processflow, latest fixes will 
 be displayed with selected Reference Table with a green tick.
![Redeploy4](../../staticfiles/processflow/media/redeploy4.png)  
* User will have option to re-assigned preassigned `Reference Table`.
* User will have option to assigned fix unfixed warnings.
* If a `Reference Table` has already been selected during a processflow deployment 
  and then the Lookup Mapping or the Reference Table is deleted (from the Lookup Repositories), 
  then during Redeployment process, the deleted lookup mapping will show as an unresolved 
  warning which the user may fix if desired.
![Redeploy5](../../staticfiles/processflow/media/redeploy5.png)  
10. Click Next, The screen navigates to the Sync & retry section of the deploy wizard. You can choose or change the configuration from 
Manual/Auto for re-deploying the processflow.  
![Redeploy6](../../staticfiles/processflow/media/redeploy6.png)    
11. After configuring the sync and retry section, click Finish button. 
The processflow would be successfully re-deployed.   

You can view these messages processflow Publish Started, processflow Publish Completed, 
Downloading processflow Data, Downloading XSLT Files, Deployed etc. while re-deploying. 
click the Finish button. Following the above steps, you can successfully Deploy and Execute 
a processflow.

Following the above steps, you can successfully Redeploy and Execute a processflow.

**NOTE: (a) You can redeploy a processflow by clicking `Deploy` button in the designer. 
(b) Before redeployment starts, the agent will take a backup of the previously deployed 
XSLT of the specific processflow, processflow database, along with dependent data. 
(c) If redeployment of the processflow fails, the agent will automatically restore backed up configuration 
after pending time outs. 
(d) After successful deployment, the deploy button will get enabled** 








 








