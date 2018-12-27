---
title: "Handling various events of Adapter"
toc: true
tag: developers,reseller
category: "SDK"
menus:
    overviewsdkadapter: 
        icon: fa fa-gg
        title: "Handling events"
        identifier: handlingeventssdk    
---
APPSeCONNECT provides a number of events which you as a developer can hook into, to write code specially when 
the execution stops at a particular event. Let us take a look at some of the events which appseconnect adapter 
development environment provides : 


|EventName|EventDescription|Used from|
|---|------|---|
|TaskStarted|The event will allow the adapter to track each individual integration start method| Initialize block|
|TaskCompleted| The event will be generated when any integration task is completed|Initialize block|
|WorkflowStarted| The event is raised when a dependency workflow is triggered|Initialize block|
|WorkflowCompleted| The event is raised when a dependency workflow is complete|Initialize block|
|TransformEventHandler|The event is raised after transformation|Initialize block|
|RealtimeProcessingStarted|The event is raised when Realtime engine gets a request for processing|Initialize block|
|RealtimeProcessingEnd| The event is raised when a realtime engine executed a request|Initialize block|

The events are raised whenever the special event occurs during execution of an integration.