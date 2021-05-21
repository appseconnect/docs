---
title: "Workflow Actions"
toc: true
tag: 
     - developers
     - actions
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    nodeandlinks:
        icon: fa fa-link
        weight: 2
        title: "Actions" 
        identifier: nodesaction
---

### Why do you need action?
Workflow is capable of generating action by placing an action node directly on the workflow canvas. The Actions are generally used 
to notify something to the someone or perform a special activity. In case of workflow of 
APPSeCONNECT, there is a number of actions that you can perform while executing the workflow.

### Actions Type of Workflow 

|Action Name|Description|
|---|--------|
|Email Action|Email action is used to send email notification from inside the workflow such that an email with proper data could be send to the intended users whenever it reaches the action.|
|[Support Ticket Action](/workflow/generating-notification-support-ticket/)| A support ticket could be raised to APPSeCONNECT support team to notify them on a problem that occurred directly from within the workflow. A support ticket will be taken care of by APPSeCONNECT support team.|
|[Storage Action](/workflow/generating-storage-action/)|In certain scenario, you want to store or archive some data for later inspection, the storage action is used to store such data from the workflow for future inspection.|
|[Webhook Action](/workflow/generating-notification-webhooks/)|Webhooks are special callback which your workflow can generate if a workflow encounters a webhook action. A webhook will require a callback url where it will post certain data which is being configured through workflow.|

These activities have some scope and limitations which are applied to ensure limiting critical resources. 