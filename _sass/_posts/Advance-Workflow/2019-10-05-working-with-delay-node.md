---
title: "Working with Delay Node"
toc: true
tag: developers
category: "Advance Workflow"
menus: 
    advanceworkflow:
        title: "Working with Delay Node"
        weight: 3
        icon: fa fa-file-word-o
        identifier: designingworkflow
---

## What is Delay Node

DELAY node is used to delay or stop an execution flow for a specific period (in terms of seconds). 
For example: If the user has an API which accepts only one request per second. So before calling the 
API for POST or GET operation, user can implement the delay node which will hold up the execution of 
`GET or POST` node for the specified amount of time.

## Prerequisites for Implementing Delay Node

1.	User needs to have valid credentials of APPSeCONNECT Portal.
2.	Needs to [Advanced Workflow](/advance%20workflow/designing-executing-adv-workflow/) before implementing Delay. 

## Steps to implement the Delay node in Advanced Workflow

1.	Login to the APPSeCONNECT Portal and Navigate to the Advance Workflow Module.
2.	Edit an existing workflow where the user needs to implement the workflow. User can also [create a new workflow](/advance%20workflow/designing-executing-adv-workflow/) as per the requirement. 
3.	Drag and the drop the Delay node from the Process Property folder. The Delay Node Configuration window opens.
![advance-delay1](/staticfiles/advance-workflow/media/advance-delay1.png) 
4.	User needs to specify the time (in Seconds) for the defining the hold up time. 
![advance-delay2](/staticfiles/advance-workflow/media/advance-delay2.png) 
5.	After specifying the time, click on the Save Button.  

After saving the configuration window, user needs to attach the node with the other nodes as per the delay position Get/Post.

