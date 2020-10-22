---
title: "Steps to Create a ProcessFlow"
toc: true
tag: developers
category: "Processflow"
menus: 
   quickstartprocessflow:
        title: "Steps to Create a ProcessFlow"
        weight: 5
        icon: fa fa-file-word-o
        identifier: creatingprocessflow
---

This section of the documentation will guide the user with the process of Creating & Saving new processflows. The steps for implementing the same is provided below:

## Prerequisites for Creating a processflows
1. Should have valid credentials for logging in to the APPSeCONNECT portal.
2. Applications should be chosen from the apps section, for proceeding with the design of processflows.
3. You can also create a Package out of the your create processflow for sharing it to your other organisations. [Click Here](/processflow/processflow-packaging-overview/) to know more about processflow Packaging.

## Steps to create a processflows
1)	Login to the Portal and navigate to the **Designer > processflow** module. The processflow listing page appears.
![Create Basicprocessflow1](../../staticfiles/processflow/media/create-basicprocessflow1.png)     
2)	Click on the folder where you want to create your processflows on the [listing page](/processflow/processflow-listing-page/)      
3)	Click on the new button for creating a new processflow.  
![Create Basicprocessflow2](../../staticfiles/processflow/media/create-basicprocessflow2.png)   
**Note: If the Folder is empty, you can view the button Create a processflow, that navigates 
you to the processflow Designer Page.**    
4)	You will be navigated to the [processflow Designer Page](/processflow/designer-processflow/).     
![Create Processflow3](../../staticfiles/processflow/media/create-processflow3.png)
5)	Provide a Name and Description for the processflow in the processflow header panel.        
![Create Basicprocessflow4](../../staticfiles/processflow/media/create-basicprocessflow4.png)     
6)	Drag the Start node that signifies the start process of the processflow.    
![Create Basicprocessflow5](../../staticfiles/processflow/media/create-basicprocessflow5.png)     
7)	Expand the [App](/processflow/processflow-app/) menu. You can view all the Pre-packaged application selected in [Choose App](/configuring%20appseconnect/configurations/#process-of-choosing-app) section.    
8)	Drag an application to the [designer panel](/processflow/designer-processflow/) that you want to integrate 
    (in this case SAP Business One & Magento2 ). On dragging the applications to the designer panel, the node configuration 
    slider would appear.        
![Create Basicprocessflow6](../../staticfiles/processflow/media/create-basicprocessflow6.png)      
9)	The following are the fields available in the Node Configuration Slider          
* Node Description: This denotes the description of the node.  
* Node Type: This denotes the type of action that the node needs to perform GET or POST   
* App Version: This denotes the version of the Application. You need to select the version of the application you need for the integration.  
* Protocol: The protocols would be listed for the application that is selected.     
* Schema: The schemas for the selected application and protocol would be listed in the drop-down.   
* Action: All the action based on the selected schema would be available. You can also modify Action filters by clicking on the [Configure Action Filter](/transformation/working-with-schemas-action-filter/) button.   
* Credential: You need to click the button Add, beside Credential to add token in the list. Select the Credential Token added for storing the credential provided for the application in the OP Agent.    
 ![Create Basicprocessflow7](../../staticfiles/processflow/media/create-basicprocessflow7.png)    
10)	Once all the details are the provided click Save button.       
11)	Drag the [mapper](/processflow/working-with-mapper/) node and the destination application in the design panel. You need to save the fully created processflow for opening the Mapper Node Configuration Window, after linking all the nodes from START to END.

12)	Provide the node configuration details for the destination application and click save button.  
![Create Basicprocessflow8](../../staticfiles/processflow/media/create-basicprocessflow8.png)     
**Note: The Node type for the destination applications is selected as POST as data would be posted to the destination application from Source.**    
13)	Join the dragged node from Start to End. On joining the mapper node & the destination application, the transformation window opens. The user can perform the mapping for the applications      
![Create Basicprocessflow9](../../staticfiles/processflow/media/create-basicprocessflow9.png)    
**Note: You need to save the fully created processflow for opening the Mapper Node Configuration Window, after linking all the nodes from START to END.**

14)	You can edit the mapping anytime by click over the node configuration button, available on the [Mapper](/processflow/working-with-mapper/) Node. Clicking on the cross button will delete the node from the designer panel.      
![Create Basicprocessflow10](../../staticfiles/processflow/media/create-basicprocessflow10.png)   
**Note: Every node has a node configuration button (except Start & End), the configuration window opens when clicked on that button.**    
15)	Once all the nodes are joined, the steps for creating a processflow ends. You can also add other nodes as per the business requirement.       
16)	Click save button once the processflow is designed. The saved processflow would be listed under the folder you have created.         
![Create Basicprocessflow11](../../staticfiles/processflow/media/create-basicprocessflow11.png)    
17)	Click on the edit button against the created processflow, will redirect you to the [designer page](/processflow/designer-processflow/).       
![Create Basicprocessflow12](../../staticfiles/processflow/media/create-basicprocessflow12.png)   

Following the above steps, you can successfully create a basic processflow. However, business process will require other nodes for designing as per the requirement.  

You can also create a Package out of the your create processflow for sharing it to your other organisations. [Click Here](/processflow/processflow-packaging-overview/) to know more about processflow Packaging.

**Note: Unlinking of the nodes will now not erase the mapping made inside the mapper node. If a different application is dragged and linked with the existing GET or Destination node, it will remove the existing mapping when saving the processflow.  
However, you will get a confirmation message when implementing the same. You view the message in the below screen.**

![mappingerase1](\staticfiles\processflow\media\mappingerase1.PNG)

**Your mapping will also disappear if change the selected SCHEMA in the application nodes**