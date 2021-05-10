---
title: "Webhook callback"
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
        title: "Webhooks" 
        identifier: nodesactionwebhooks
---

## Webhook Callback Action 

The concept of a WebHook is simple. A webhook occurs when something happens; it is a simple event-notification via HTTP POST. When a particular event occurs data is posted to a particular URL. By implementing Webhook user can tell the provider the situations when he/she like to receive data. Whenever there's something new, the webhook will send it to your URL.

![action-webhooks](/staticfiles/workflow-management/media/action-webhooks.png)
Components of a Webhook are

|  Element Name | Description  |
|---|---|
| Method  | HTTP methods based on which webhook will work . Currently four methods are supported POST,PUT,PATCH and DELETE |
| URL  | Webhook URL where data will be posted |
| Tokens  | Some predefined tokens used to build webhook body|
| Body  | Data to be send to webhook |
| Header  | Additional header need to pass when posting data to webhook |