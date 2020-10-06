---
title: "Deployment Configuration"
toc: true
tag: developers
category: "Deployment"
menus: 
    environment:
        title: "Deployment Configuration"
        icon: fa fa-cloud-download
        weight: 7
        
---
APPSeCONNECT is of Hybrid Architecture and the data can be integrated both on the `CLOUD PORTAL`
and in `OP Agent`. This section of the document will enable you to know and configure the Cloud Agent and the OP Agent.

## Cloud Agent Configuration

**Protip** By default, organisations will only be On-Premise enabled. Users of the organisation needs to  
contact the APPSeCONNECT team for enabling cloud hosted organisation so that users can integrate cloud application 
using the cloud agent.
{: .notice--info}

### Pre-requisites
* The Organisation should be cloud Enabled.
* The two applications between which data has to be synced should be cloud supported.
* The connection made for the two applications should be cloud supported.

### Enabling Organisations for Cloud Support:

a.	On the Dashboard of your cloud portal, click PROJECTS > Manage Projects.

b.	Click on the Edit button on your project.

![Edit-Organization](/staticfiles/deployment/media/AgentConfig/Edit-Organization.png)

c.	Enable the Check-Box for **Cloud Hosting** and click **SAVE**.

![Edit-Organization1](/staticfiles/deployment/media/AgentConfig/Edit-Organization1.png)

d.	After enabling the organisation for Cloud Hosting, a new environment is to be created for CLOUD EXECUTION.

e.	In the Environment section of the cloud portal, Click on the **HOSTED** button. [Click Here](/deployment/Environment-Management/#create-hosted-environment) to know more on creating a Cloud Environment.

## On-Premise Agent Configuration: 

### Pre-requisites

1.	The user needs to have an account in the APPSeCONNECT Portal.
2.	The implementer/user needs to have a valid user name and password for accessing the APPSeCONNECT Portal.

### Installing Process of an On Premise Agent:
a.	Login to the portal. Download the Agent from the [Downloads menu](/accessing%20portal/accessing-portal/#downloads-section) as shown below.

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


1.	The **home icon** shows the all the Connections Present in the project. New connection if made, 
    will reflect only if Update Configuration is clicked. Click on the checkbox in each connection 
    for viewing the touchpoint in the SYNC PANEL.

![Agent-Home](/staticfiles/deployment/media/AgentConfig/Agent-Home.png)

2.	The **Apps configuration icon** (next to the home icon) shows the applications used for the connections 
    which need to be configured for successful sync.  Clicking on the + beside any application, 
    opens the application validation page.

**Note: The drop-down provided beside the application is for editing the application configuration details. The drop-down gets activated only after the first validation of the corresponding application.**


**Note: Validated application can only be edited, when the check box is disabled for that application in the connections page of the agent**

![Agent-AppConfig](/staticfiles/deployment/media/AgentConfig/Agent-AppConfig.png)

3.	The **Sync panel**  displays the connections deployed successfully for sync. All the activated transaction 
    and configuration touchpoints are displayed here. The touchpoints in sync panel is visible after you 
    have checked the Show in sync panel checkbox in the Connections page.

![Agent-SyncPanel](/staticfiles/deployment/media/AgentConfig/Agent-SyncPanel.png)

4.	 The last one is the **Workflow Panel** that displays the workflows created or activated in the portal. 
     The workflows can be synced from the sync panel. All the errors in sync bucket and log bucket can be 
     viewed in the Workflow Panel.

![Agent-WorkflowPanel](/staticfiles/deployment/media/AgentConfig/Agent-WorkflowPanel.png)