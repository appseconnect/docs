---
title: "Nodes and Link overview"
toc: true
tag: developers
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    workflow:
        icon: fa fa-link
        weight: 5
        title: "Nodes and Links" 
        identifier: nodeandlinks 

---

Workflow in APPSeCONNECT generates flow that executes integration endpoints one by one through our Micro-service architecture and 
updates business data to all the applications that needs to be affected. Workflow has the ability to individually understand
each and every functions and business process, take decisions, invoke notifications etc. In this article, we cover how to use workflow
in efficient way to update business data from one application to another. 

## Templates of Workflow

* General Touchpoint - Dragging this, migrates the general touchpoint of a connection with all the three nodes GET, Process & POST.
* Post Touchpoint - Dragging a POST touchpoint, provides the user with a selection of the connection template for which the will get a POST operated touching point having the nodes, `PROCESS & POST`.
* Get Merge Touchpoint - Dragging a Get-Merge touchpoint, provides the user with the [Property configuration of Merger Node](/workflow/working-with-merger/) followed by the selection of the connection template for which the template will be having the `GET, MERGER, Process, POST` nodes.
* Push Merge Touchpoint - Dragging a Push-Merge touchpoint, provides the user with the [Property configuration of Merger Node](/workflow/working-with-merger/) followed by the selection of the connection template for which the template will be having the `GET, Process, Merger, POST` nodes.
* Get Splitted Touchpoint - Dragging a Get-splitted touchpoint, provides the user with the [Property configuration of Splitter Node](/workflow/working-with-splitter/) followed by the selection of the connection template for which the template will be having the `GET, Splitter, Process, POST` nodes.
* Push Splitted Touchpoint - Dragging a Push-Splitted touchpoint, provides the user with the [Property configuration of Splitter Node](/workflow/working-with-splitter/) followed by the selection of the connection template for which the template will be having the `GET, Process, Splitter, POST` nodes.

## Workflow major capabilities

Workflow in APPSeCONNECT is having a number of capabilities. Let us check what it can do : 

- [Call source application to get data.](/workflow/working-with-get)
- [Call target application to push data.](/workflow/working-with-post)
- [Convert a format of data to another using transformation.](/workflow/working-with-process)
- [Filter a particular section of data.](/workflow/working-with-filter)
- [Merge two or more data files into one or a batch of output.](/workflow/working-with-merger)
- [Run an infinite sequence of executions.](/workflow/working-with-loops)
- [Can set timeout between two executions.](/workflow/working-with-delay)
- [Halting & Resuming a process](/workflow/working-with-halt-resume/)
- [Sequence data inside applications](/workflow/working-with-sequencer)
- [Split a data batch into multiple files.](/workflow/working-with-splitter)
- [Generate notifications.](/workflow/generating-actions)
  - [Webhook based notification](/workflow/generating-notification-webhooks)
  - Email notification
  - [Support ticket notifications](/workflow/generating-notification-support-ticket)
  - [Storing files](/workflow/generating-storage-action)

A workflow is capable of handling any business integration, you can create integrations,
execute integrations and even debug data issues, directly from inside the workflow. 

