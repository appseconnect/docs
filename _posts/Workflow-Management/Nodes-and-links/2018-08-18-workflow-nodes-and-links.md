---
title: "Nodes and Link overview"
toc: true
tag: developers
category: "Workflow"
menus: 
    workflow:
        icon: fa fa-link
        title: "Nodes and Links" 
        identifier: nodeandlinks 

---

Workflow in APPSeCONNECT generates flow that executes integration endpoints one by one through our Micro-service architecture and 
updates business data to all the applications that needs to be affected. Workflow has the ability to individually understand
each and every functions and business process, take decisions, invoke notifications etc. In this article, we cover how to use workflow
in efficient way to update business data from one application to another. 

## Workflow major capabilities

Workflow in APPSeCONNECT is having a number of capabilities. Let us check what it can do : 

- [Call source application to get data.](/workflow/working-with-get)
- [Call target application to push data.](/workflow/working-with-post)
- [Convert a format of data to another using transformation.](/workflow/working-with-process)
- [Filter a particular section of data.](/workflow/working-with-filter)
- [Merge two or more data files into one or a batch of output.](/workflow/working-with-merger)
- [Run an infinite sequence of executions.](/workflow/working-with-loops)
- [Can set timeout between two executions.](/workflow/working-with-delay)
- [Sequence data inside applications](/workflow/working-with-sequencer)
- [Take business decisions on data integration.](/workflow/working-with-rule)
- [Split a data batch into multiple files.](/workflow/working-with-splitter)
- [Generate notifications.](/workflow/generating-actions)
  - [Webhook based notification](/workflow/generating-notification-webhooks)
  - [Email notification](/workflow/generating-notification-emails)
  - [Support ticket notifications](/workflow/generating-notification-support-ticket)
  - [Storing files](/workflow/generating-storage-action)

A workflow is capable of handling any business integration, you can create integrations,
execute integrations and even debug data issues, directly from inside the workflow. 

