---
title: "Working with Start Node"
toc: true
tag: developers
category: "Processflow"
menus: 
    processnodeandlinks:
        icon: fa fa-gg
        weight: 5
        title: "Working with START" 
        identifier: getprocessflow 
---

## What is Start Node?

Start Node node intitates the ignition of the Start process and Trigger Type of the ProcessFlow. Based upon your Start node, your designed processflow will initiate its
Trigger Type. 

On dragging the Start node to the designer panel, the Start Node Configuration window opens that consists the following Trigger Type:

- **Polling :** This is the default selection and this trigger type defines the normal execution of the ProcessFlow either in Manual or Scheduled Mode.
- **Event:**  This type defines the RealTime Trigger of your processflow using API proxy Register URL.

![startnode1]()

## Working Principle

1) Drag the start node to the designer panel. The Start Node Configuration Panel Opens.

![startnode1]()

2) You will get the following 2 Trigger Type:

- Polling
- Event

By default, the **Polling type** would be selected.

3) Selection of Polling Type will allow your processflow to trigger a normal sync process either manually or if scheduled.

4) On selecting the Trigger Type as **Event**, the following field would appear. **Enter Register URL** & **Provide Description**.

![startnode2]()

5) Provide the details for these fields.

- **Enter Register URL :** You will have to provide your Organisation name as the sub-domain that would be merged with the APPseCONNECT Domain. This field for registering URL will appear only when you havent register any URL for that processflow. 
The URL will be displayed in the Regsiter URL field, if its already registered.

- **Provide Description :** A general text field for the users to provide description for the URL.

![startnode3]()

5) Once you are done with the configurations, Click on the SAVE button.

6) Now you need to design your processflow. [Click Here](/processflow/creating-processflow/) to know more on ProcessFlow creation.

7) Deploy your designed processflow to your required environment. 

a. If your Trigger Type is selected as **Polling**, the steps for deployment will remain same.

b. If your Trigger Type is selected as **Event**, the deployment will not have the **Sync & Retry** step.

[Click Here](/processflow/deploying-and-executing-processfloww/#deploying-processflows-to-environment) for more details ProcessFlow Deployment.

8) The deployed processflows with Trigger Type will **EVENT** will represent with a Black Icon in the ProcessFlow tab in environment section.

![startnode4]()

9)






