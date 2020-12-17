---
title: "Working with Start Node"
toc: true
tag: developers
category: "Processflow"
menus: 
    processnodeandlinks:
        icon: fa fa-gg
        weight: 5
        title: "START Node" 
        identifier: getprocessflow 
---

## What is Start Node?

Start Node node intitates the ignition of the Start process and Trigger Type of the ProcessFlow. Based upon your Start node, your designed processflow will initiate its
Trigger Type. 

On dragging the Start node to the designer panel, the Start Node Configuration window opens that consists the following Trigger Type:

- **Polling :** This is the default selection and this trigger type defines the normal execution of the ProcessFlow either in Manual or Scheduled Mode.
- **Event:**  This type defines the RealTime Trigger of your processflow using API proxy Register URL.

![startnode1](\staticfiles\processflow\media\startnode1.PNG)

## Working Principle

1) Drag the start node to the designer panel. The Start Node Configuration Panel Opens.

![startnode1](\staticfiles\processflow\media\startnode1.PNG)

2) You will get the following 2 Trigger Type:

- Polling
- Event

By default, the **Polling type** would be selected.


### Trigger Type - Polling

a) Selection of Polling Type will allow your processflow to trigger a normal sync process either manually or if scheduled. Click on the SAVE button after selecting the Radio button for POLLING Type.

b) [Design](/processflow/creating-processflow/) and [Deploy](/processflow/deploying-and-executing-processfloww/#deploying-processflows-to-environment) your ProcessFlow to your choice of environment.

c) [Execute](/processflow/deploying-and-executing-processfloww/#executing-deployed-processflow) ProcessFlow by clicking on the PLAY button on your designer page.

d) You can anytime check your snapshot for the execution status and data survey for both Trigger Types. For more details on Snapshot, [Click Here](/processflow/snapshot-processflow/).


### Trigger Type - Event

a) On selecting the Trigger Type as **Event**, the following field would appear: **Enter Register URL**.

![startnode2](\staticfiles\processflow\media\startnode2.PNG)

b) Provide the details for the field.

- **Enter Register URL :** You will have to provide your Organisation name as the sub-domain that would be merged with the APPseCONNECT Domain. 

For Example: `MRFCorporation.APPSeCONNECTAPI.com` where **MRFCorporation** is the sub-domain name of the organisation. The rest is the Domain name.

This field for registering URL will appear only when you havent register any URL for that processflow. The URL will be displayed in the Regsiter URL field in Read-Only mode, if its already registered on your organisation. 

![startnode3](\staticfiles\processflow\media\startnode3.PNG)

c) Once you are done with the configurations, Click on the SAVE button. On saving the Registered URL, you get a confirmation message. 

![startnode6](\staticfiles\processflow\media\startnode6.PNG)

You can also view your registered URL on your **APIs Section**. Navigate: Manage > APIs > Register URL.

![startnode7](\staticfiles\processflow\media\startnode7.PNG)

**Note: You cannot alter a registered URL for any processflow, once SAVED in your organisation.**

d) design your processflow to integrate your chosen apps. [Click Here](/processflow/creating-processflow/) to know more on ProcessFlow creation.

e) Deploy your designed processflow to your required environment. For Trigger Type **Event**, the deployment will not have the **Sync & Retry** step.

[Click Here](/processflow/deploying-and-executing-processfloww/#deploying-processflows-to-environment) for more details ProcessFlow Deployment.

f) The deployed processflows with Trigger Type **EVENT** will represent with a Black Icon in the [ProcessFlow tab](/deployment/Environment-Management/#pre-requisites) in environment section.

![startnode4](\staticfiles\processflow\media\startnode4.PNG)

g) The ProcessFlows needs to be executed once the deployment is over. For **Event Type**, The execution will on REALTIME basis. The RUN button in the designer page will be disabled for **EVENT** Trigger.

h) You can anytime check your snapshot for the execution status and data survey for both Trigger Types. For more details on Snapshot, [Click Here](/processflow/snapshot-processflow/).

![startnode5](\staticfiles\processflow\media\startnode5.PNG)

i) You can also view your Triggered **EVENT** URL, from Environment Section. Navigate: **Deploy > Environments > Processflow Tab > [Processflow URL](/deployment/Environment-Management/#on-premise-environment-details-page)** (in the context menu).

![startnode8](\staticfiles\processflow\media\startnode8.PNG)

Following the above process you can successfully configure and execute Start Nodes with both the Trigger Types.

**Note:**

- You cannot edit or modify the sub domain of the URL, once SAVED.
- Your Sub-Domain name can be upto 100 characters.
- Registered URL will be displayed on Read-Only mode.
- You can anytime convert a normal Processflow to a Triggered Processflow, by updating START node Configurations.
- For the Trigger Type `EVENT`, the SYNC & RETRY section will not be available during its deployment process. 
- The RUN button in the designer page will be disabled for Trigger Type **EVENT**.






