---
title: "Troubleshooting of Workflows"
toc: true
tag: developers
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    workflow:
        icon: fa fa-gg
        weight: 7
        category: "Troubleshooting" 
        title: "Troubleshooting" 
        identifier: workflowtroubleshoot
---
This topic describes common problems that can occur when you develop and test a workflow in AEC Portal. Given below are few common trouble shooting
solution for your needs.

### Scenario 1: Workflow Created although Run Button Disabled.

You have created the Workflow as per business need, although attimes you may witness a very common issue 
and that is the `RUN button is disabled`. 

**Troubleshooting for Scenario 1:**

1. Make the workflow Active by Clicking `Active/InActive Checkbox` thereafter check the Touchpoint for the workflow is published on Cloud and Synced in the agent.
   The Runbutton should be working now.

2.  If the Run button is yet inactive, this might be possible due to the activation of autosync. Check and turn the autosync Off/On once.

3. Check the `START` node of the Workflow and now you can view the Run button is in activated mode which signifies the workflow is ready for execution.

4.  Now Run the Workflow and check for `Data Sync Log` in `Agent's Workflow Panel`and also check `data transaction LOG` for any errors or error messages. 
    If there is no error, the SYNC is successful.

### Scenario 2: Workflow is executed, but nothing is posted in the Destination Application

**Troubleshooting for Scenario 2**

1. After workflow execution, if nothing is posted in the destination application, go to agent and check the transactional
   logs under workflow panel. Double click on the error received and a window will appear.

2.	In the Technical info section of the window, Select and Copy the 1st set of the code, and search for it in the APPSeCONNECT 
    system folder, on the directory where your system folder is installed.

`C:\Users\{user name}\AppData\Local\APPSeCONNECT\Content`

3. If you find the input and the output packet, irrespective of this error code in your AEC system folder 
(Packet - type  Input/Process/Output). Open each of the folders and look for the XML Code errors in it.

4. In case, if you don't get any input or output packets, its probable reason is, your source and 
destination application are not validated properly, or any of the applications prerequisite hasn't
properly made.

### Scenario 3: Transformation Failed and skipped further synchronization

**Troubleshooting for Scenario 3**

1. This is the situation where you have done integration but transformation failed and skipped further synchronization.
Similarly, as of the previous one, select and copy the error code and check for the packets (input, Transform, output) in the given path
`C:\Users\{user name}\AppData\Local\APPSeCONNECT\Content`.

2. In this case you will get the input packet, as the error says about transformation, you will not get the Transform Packet and the Output packet.

3. This error is due to the mapping of data files. Check for the Mapping in the Transform section of the touchpoint (you'll find it in the menu bar below the touchpoint) 
    you are synchronizing. Now when the mapping is properly done, you are ready to sync the data again.


