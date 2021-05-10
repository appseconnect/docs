---
title: "Generating Support tickets"
toc: true
tag: 
       - developers
       - actions
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    nodesaction:
        icon: fa fa-link
        title: "Support Tickets" 
        identifier: nodesactionsupport
---

### Support Ticket  Notification 

Using this node user can create a support ticket during workflow execution. For example, after data is pushed to an application user can check the push status and create a support ticket if any error occurred during the push operation. The support ticket will be created in the Appseconnect support portal and notification about the support ticket will be sent to the AppseConnect support team.

![action-support-ticket](/staticfiles/workflow-management/media/action-support-ticket.png)

Components of the support tickets are 

|  Element Name | Description  |
|---|---|
| Priority  | Priority of support ticket |
| Summary  | Summary of the support ticket |
| Tokens  | Some predefined tokens used to build ticket body|
| Body  | Support ticket body |