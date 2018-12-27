---
title: "Deployment Configuration"
toc: true
tag: developers
category: "Agent"
menus: 
    environment:
        title: "Deployment Configuration"
        icon: fa fa-deployment
        weight: 7
        
---
APPSeCONNECT is of Hybrid Architecture and the data can be integrated both on the `CLOUD PORTAL`
and in `OP Agent`. This section of the document will enable you to know and configure the Cloud Agent and the OP Agent.

## Cloud Agent Configuration

### Pre-requisites
* The Organisation should be cloud Enabled.
* The two applications between which data has to be synced should be cloud supported.
* The connection made for the two applications should be cloud supported.

### Configuration Process for Cloud

a.	On the Dashboard of your cloud portal, click PROJECTS > Manage Projects.

b.	Click on the Edit button on your project.

![Edit-Organization](/staticfiles/deployment/media/AgentConfig/Edit-Organization.PNG)

c.	Enable the Check-Box for **Cloud Hosting** and click **SAVE**.

![Edit-Organization1](/staticfiles/deployment/media/AgentConfig/Edit-Organization1.PNG)

d.	After enabling the organisation for Cloud Hosting, a new environment is to be created for CLOUD EXECUTION.

e.	In the Environment section of the cloud portal, Click on **CREATE NEW ENVIRONMENT**.

f.	Create New Environment window opens up. Input the **Environment Name, the Type of Agent, and the Error Types**.

g.	Click on SAVE. Now you can view the Agent in the Environment Window.

h.	The Agent is in Blocked state by default. To unblock the agent, click UNBLOCK option.

i.	You need to make agent active by clicking on the **Active/Inactive** check box. 

j.  Once the agent is active, it will be considered as a Primary Agent.


## On-Premise Agent Configuration: 

### Pre-requisites

1.	The user needs to have an account in the APPSeCONNECT Portal.
2.	The implementer/user needs to have a valid user name and password for accessing the APPSeCONNECT Portal.

### Configuration Process for OP
a.	Login to the portal. From the Dashboard section, download the Agent from the Downloads menu as shown below.

b.	Run the SETUP FILE (as administrator). The Setup wizard opens.

![AgentWizard](/staticfiles/deployment/media/AgentConfig/AgentWizard.png)

c.  Click **Next button** to begin the installation process.

d.	Open the Agent after the installation.

e.	Hover and activate the cursor on the Login ID field and Press CTRL+F10 for configuring 
    the Base API URL, Connection URL.

![AgentLogin-Screen](/staticfiles/deployment/media/AgentConfig/AgentLogin-Screen.png)

f.	Provide the Username and Password of your AEC Cloud Portal and click Login.

g.	Once logged in the *Agent provides four set of tabs*  as shown below:

![Agent-Icon](/staticfiles/deployment/media/AgentConfig/Agent-Icon.png)

* The home icon shows the Connections in the project.
* The Apps configuration icon (next to the home icon) shows the applications used for the connections 
  which need to be configured for successful sync.
* The Sync panel displays the connections deployed successfully for sync. It is visible after you have checked the Show in 
  sync panel checkbox in the Connections page.
* The last one is the Workflow Panel that displays the configured workflows in the project.