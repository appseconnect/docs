---
title: "Architecture"
toc: true
tag: developers
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    workflow:   
        icon: fa fa-gg
        weight: 0
        title: "Architecture" 
        identifier: workflowarchitecture
---

Workflow is a visual representation of a business process integration, which helps you as an user
to orchestrate a business process in such a way so that you can modularize and control the complexity
of business integration properly. A workflow, under the hood creates a micro-service architecture
that can run in cloud servers or on premise getting or pushing data directly to the applications 
in execution and generate both transactional and data logs. In this article, we will see how the 
architecture of APPSeCONNECT workflow is laid out such that we can understand the under the hood big 
picture of the workflow. 

## Architecture

![Workflow Architecture](/staticfiles/workflow-management/media/appseconnect-workflow-architecture.png)

When an workflow is getting executed, there are a number of things that can happen. First, an execution 
can happen on cloud directly on an hosted environment maintained by APPSeCONNECT, or it can genarate a call
to your own on-premise environment and execute the business flow using our APPSeCONNECT integration tool. 

When the user triggers a workflow manually (or APPSeCONNECT Scheduler triggers it for you), the first thing 
it tries to do, is to identify the environment(s) on which the workflow needs to be executed on. It can either
execute itself on APPSeCONNECT cloud premise on an hosted agent, or on-premise environment where the agent
is installed. The workflow starts with `Start` node and execute each links to find the next node. 
The nodes plays a vital role in a workflow determining what action it needs to execute, and passing or delegating
activities to different workloads. 

The workflow engine takes care of each and every task or activity that needs to be executed on the platform. The 
engine takes help of Adapter to call individual Applications to invoke Get or Post actions. The engine calls the 
adapters, execute stroage plugins, triggers notification, generate logs etc. 

If there is any cloud involvement from an on-premise execution or an on-premise dependency for a 
cloud solution, it triggers the call automatically using Service Bus and executes the process. 

The repository services takes care of storage and snapshot of the workflow executions which one can investigate later.


