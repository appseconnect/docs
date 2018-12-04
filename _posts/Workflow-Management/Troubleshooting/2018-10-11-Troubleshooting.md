---
title: "Troubleshooting of Workflows"
toc: true
tag: developers
category: "Workflow"
menus: 
    workflow:
        title: "Troubleshooting" 
        icon: fa fa-file-word-o
        identifier: workflowtroubleshoot
---
Troubleshoot Experience 1: Workflow Created & Run Button Disabled: 

As we create a Workflow, we witness a very common issue and that is, the RUN button is disabled. 

IMAGE INSERT 

So, what is to be done to fix this?  
1.	First of all, make the workflow Active by Clicking on the Active/InActive Checkbox, After clicking 

IMAGE INSERT 

2.	Make sure the Touchpoint for the workflow is published on Cloud and Synced in the agent.
3.	Even after this we see, its inactive. This is possibly due to the autosync is Activated. Here, we just turn the Autosync Off/On once.
4.	We then click our cursor the START tab of the Workflow and we see the Run button is activated.

IMAGE INSERT 
5.	Here, we see our Run button to be Active, which signifies the workflow is ready to execute.

IMAGE INSERT 
6.  Now we Run our Workflow and check for our Data Sync Log in the agent’s Workflow Panel.

IMAGE INSERT 

Here, in the Workflow Panel, we check our data transaction LOG for any errors or error messages. If no error, the SYNC was successful.