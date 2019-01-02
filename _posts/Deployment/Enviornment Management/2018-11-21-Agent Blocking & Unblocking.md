---
title: "Agent Blocking & Unblocking"
toc: true
tag: developers
category: "Deployment"
menus: 
    environment:
        title: "Agent Blocking & Unblocking"
        icon: fa fa-cloud-download
        weight: 8
        
---
APPSeCONNECT is of Hybrid Architecture and the data can be integrated both from the CLOUD PORTAL 
as well as from the OP Agent. The Implementer or User can control and modify settings for all the agents, 
from cloud portal for his/her organisation. This section of the document will enable you to know about the Block/Unblock
and other features in the Environment section of the cloud Portal.

## Environment Setup for the OP Agent

1.	Log in to cloud portal with your valid credentials.
2.	Navigate to Environments section. 
3.	You can view Primary agents and Secondary Agents (if any). Agents with the Tickmark Toggle is considered as the Primary Agent.
4.	Under Primary Agents you will see options like Agent Settings, Block/Unblock, Deploy Configuration & Deploy Adapter.
5.  In the Agent Settings section, you can view the detailed settings of your Agents.
6.	The Deploy Configuration & Deploy Adapter button is used for updating the Configuration and Adapter respectively, but this feature is only applicable to Primary Agent.
7.	Blocking an Agent, will stop all the processes running in the agent and it will stop permanently. 
8.  Blocking will result into Agent login failure in the system.

## Environment Setup for the Cloud Agent

Steps 1 to 3 is similar to the enviornment setup for OP Agent.

1. You can identify the Cloud Agent with cloud icon beside the enviornment name.
2. In the Primary cloud agent, you can view the options Agent Settings and the Block/Unblock option.
3.	In the Agent Settings section, you will be able to see the detailed settings of your cloud Agents.
4.	Blocking the Cloud Agent, will disable the cloud integration process for that organisation.

**Protip:** By default, Cloud agent remains blocked after its creation 
{: .notice--info}

## Quick Facts about Agents (OP & Cloud) Enviornment Setup

-	If the Agent is in Block State, you can view the Unblock button for unblocking the agent.
-	An Organisation can have only one primary agent.
-	Blocking an Agent, will stop all the Processes that was done on that agent. Blocking will result into Agent login failure in the system.
-	Here Deploying Configuration and Deploy Adapter is equivalent to Update configuration and Update Adapter operation of the agent.
-	For Deploy Adapter one has to restart the Agent and Autosync in the deployed environment.
-	Upon Unblocking an agent, one must restart the Agent and Autosync in the deployed environment.
-	Upon setting a new Agent as primary, You have to restart Agent and Autosync in the deployed environment.
-	Blocked Agents are considered as the Inactive agents. Agents which are not blocked are the Active Agents.
