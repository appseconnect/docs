---
title: "Designer"
toc: true
tag: developers
category: "Processflow"
menus: 
   quickstartprocessflow:
        title: "Designer"
        weight: 4
        icon: fa fa-file-word-o
        identifier: desiningprocessflow
---
This section enables the user to implement business scenarios by designing processflows. Here user would get the detailed usability of processflow Designer Page.

* Click on the [Create a processflow](/processflow/creating-processflow/) button on any folder in the listing page.
 ![Create Processflow1](../../staticfiles/processflow/media/create-processflow1.png) 
* The button Create a processflow will only appear when the selected folder is empty. Folder with a created processflow listed will have a NEW button that will redirect the user to the processflow Designer Page. 
![Create Processflow2](../../staticfiles/processflow/media/create-processflow2.png) 
* You will be redirected to processflow designer page where the you can design the business specific processflows.
![Create Processflow3](../../staticfiles/processflow/media/create-processflow3.png)

The page is divided into 4 sections that are static for every processflow designing page. 
The following sections are:  

**Processflow Header panel**  
**Processflow Left panel**  
**Processflow Designer View**  
**Processflow Right Panel**  

## Processflow Header Panel

![Create Processflow4](../../staticfiles/processflow/media/create-processflow4.png)


Here you can provide name and description to the processflow.Navigate to the processflow designer page, the field for providing the NAME remains blank. You need to provide the processflow name in the processflow header Panel. 

**Note: The processflow name will be a mandatory field for designing and saving any processflows.**

Below the processflow name, you get an option to add description to the Process 
Flow. The field for providing the Description to the processflow is an optional field. You can edit the description any number of times as required.

Details of the list of executable buttons are given below:

* Play button: The play button will allow you to execute the saved version of the processflow. 
* Tracker button: You can view the execution status and messages related to execution process in the Tracker Window. The deployment and execution logs will be displayed in the tracker window.
* Delete button: The delete button will allow to delete the selected Nodes and link in the processflow. You will get a confirmation pop-up for the delete operation of the workflow. 
* Zoom in: You can zoom in the processflows for better viewing purpose.
* Zoom out: You can zoom out the processflow for better user experience. Users can also resize the screen accordingly. 
* Link Order: You can sequence your execution order of your processflow. On clicking the [Link Order](/processflow/link-order-sequencing/) button, the order sequence window configuration window opens.
* User Defined Functions: Here, you can implement multiple Cloud Appresource User Defined Functions for implementing Definite Tasks within your ProcessFlow. For more details on the Cloud Appresource User Defined Functions, [Click Here](/processflow/overview-of-user-defined-functions/).
* To view the screen in full screen mode, click the Button for Full Screen.
* You will have the option adjust the screen resolution to 100%, 50% & 25% & Fit to Screen as per the need.
* Save: The save button allows you to save the following processflow for later use. You can edit the processflows anytime by clicking the edit button available in the processflow listing Page.
* Delete: You can view this button beside the **SAVE** button that will allow you to [delete](/processflow/delete-processflow/) the complete processflow.

You can view the **Back to processflow** button that will navigate you to the [listing page](/processflow/processflow-listing-page/). 

## Processflow Left Panel
Here the users can add processflows nodes to the processflow designer panel. The nodes
 can be dragged and dropped in the design panel for configuring & designing the Process 
flow. Users can utilize any node based on the business requirement and can view the 
following tabs and menus in the left panel of the page.    

1)	Search: You will be able to search any Nodes & Apps related to processflow. You will be filtered with the results based on the alphabets you type.
2)  Start:  This node initiates the start of the execution of the processflow.
3)	End: This node depicts the completion of the processflow.  
4)	[Mapper](/processflow/working-with-mapper/): This node allows you to map the applications used in the processflow.       
5)	[Apps](/processflow/processflow-app/): You can view two tabs on expanding **Apps**: `Pre-prackaged apps` & `My Apps`. 

    - **Pre-packaged Apps:** You will be able to view all the pre-packaged apps available for your organisation as per the plan.
    - **My Apps:** You can view all the custom and the technology apps created in your organisation.

On dragging the applications to the designer panel, the node configuration window would appear.     

6)	Flow Connect: You can view the following connector nodes upon expanding: FTP, Database, REST, Connector.   
7)	Flow Logic: Here you can view all the process property nodes namely halt, resume etc required to implement the customer business process.  
8)	Notifications Expanding this menu, you can view all the nodes for implementing actions within a processflow.  

![Create Processflow5](../../staticfiles/processflow/media/create-processflow5.png)

## Processflow Designer View 
Here you can design/create the processflow. Drag and drop the required nodes to the 
designer panel for creating the processflow. Expanding the menu in the left panel, 
you can view all the node that can applied for designing the processflow.

![Create Processflow6](../../staticfiles/processflow/media/create-processflow6.png)  

## Processflow Right Panel
The right panel of the processflow Designer Page will have the following sections:  
![Create Processflow7](../../staticfiles/processflow/media/create-processflow7.PNG)  
* Suggested Node: Here you will get suggestions of providing nodes that can be applied with the node dragged in the processflow designer panel.
* Real Time View: Here you would display the real-time view of the processflow.
