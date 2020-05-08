---
title: "Delete Processflow"
toc: true
tag: developers
category: "Processflow"
menus: 
    quickstartprocessflow:
        title: "Delete Processflow"
        weight: 8
        icon: fa fa-file-word-o
        identifier: deleteprocessflow
---
Deleting option enables you to delete a process flow once you have designed it,
[deployed](/processflow/deploying-and-executing-processfloww/) it or executed it. Deletion is an easy process for the user and this 
button is available in the [designer section](/processflow/designer-processflow/) of the portal.

## Prerequisites for Deleting a Process Flows
1.	Should have valid credentials for logging in to the APPSeCONNECT portal.
2.	A process flow needs to be designed prior to using this functionality .

## Steps to Delete Process flow

1. Login to the Portal and navigate to the Process Flow module. The [Process Flow listing](/processflow/processflow-listing-page/) page appears.
Click New button in listing page.   

![pfdelete1](\staticfiles\processflow\media\pfdelete1.png)

2. You are now in the [designer](/processflow/designer-processflow/) section.  

3. [Create](/processflow/creating-processflow/) a Process Flow. Once you have created the process flow, click `SAVE` button on the right area of top pane.
**When a user is creating a new Process Flow for the first time, only `SAVE` button will be available.**    

![pfdelete2](\staticfiles\processflow\media\pfdelete2.png)     

4. Now you can view the `DELETE` button which will be available next to `SAVE` button.    

![pfdelete3](\staticfiles\processflow\media\pfdelete3.png)

5. You can delete a process flow just after saving by clicking on the `Delete` button. A pop up will appear 
to run the process of deletion as shown below.  

![pfdelete4](\staticfiles\processflow\media\pfdelete4.png)    

6. If you wish to [deploy](/processflow/deploying-and-executing-processfloww/) the Process Flow in any environment you can proceed with the 
deployment option. Once the process flow is deployed, if you try deleting the process flow without undeploying it, you get the 
following message. 

![pfdelete5](\staticfiles\processflow\media\pfdelete5.png)

7. To finally `Delete` a deployed process flow, go to the[Environment](/deployment/Environment-Management/) section to [Undeploy](/processflow/deploying-and-executing-processfloww/#undeploy-process-flow-from-environment) 
the process flow from the environment.    

![pfdelete6](\staticfiles\processflow\media\pfdelete6.png)  

8. Now come back in the designer section, to carry on the process of deletion of process flow.

![pfdelete7](\staticfiles\processflow\media\pfdelete7.png)      

9. On clicking on the `DELETE` option, a Confirmation message will be displayed. Click `Yes` to proceed and `No` to Cancel the deletion process. 

![pfdelete8](\staticfiles\processflow\media\pfdelete8.png)                

The above steps will aid the deletion of processflow and User will be redirected to the Process Flow [Listing page](/processflow/processflow-listing-page/).   

10. Users also get the option to delete a process from the listing page. If the process flow is deployed in an environment, you will be unable to perform the 
delete operation as shown below.  

![pfdelete9](\staticfiles\processflow\media\pfdelete9.png)    

11. Undeployed process flows can be deleted from the listing page by clicking on the delete button as shown below.  

![pfdelete10](\staticfiles\processflow\media\pfdelete10.png)    

The deleted process flow moves to trash folder.

