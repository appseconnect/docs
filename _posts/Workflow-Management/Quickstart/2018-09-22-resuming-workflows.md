---
title: "Resuming Workflows"
toc: true
tag: developers
category: "Resuming Workflows"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    quickstartworkflow:
        icon: fa fa-link
        weight: 8
        title: "Resuming Workflows"
        identifier: resumingworkflow

---

## Functionality of Resuming Workflows

Executing the process is a vital part when integrating any applications. With APPSeCONNECT, integrations are done by executing the workflow. 
Scenario may happen that Workflow can stop accidently due to system dependencies. Therefore, in this case user initially had to restart the workflow.
Workflow in APPSeCONNECT introduces the concept of Resuming Workflow wherein, when a workflow execution (executed through Autosync) gets stopped 
midway because of the system dependability, the user doesnt need to restart the workflow instead the workflow would resume from the node it stopped.

## Reasons for the workflow halt/stoppage

1.	APPSeCONNECT has a threshold amount (15 number of workflows approx. can run together simultaneously), wherein the number of workflows 
    above the threshold level will not be executed even after starting. Therefore the user needs to restart the workflow from the beginning.
2.	On the execution of workflow, two system services of APPSeCONNECT are on process in the background, which when stopped will stop the execution 
    of the workflow.

To know about the process of resuming workflows, [Click here](/workflow/workflow-showing-resume-functionality/)



