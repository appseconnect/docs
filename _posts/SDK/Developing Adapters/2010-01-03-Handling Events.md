---
title: "Handling various events of Adapter"
toc: true
tag: developers
category: "SDK"
menus:
    overviewsdkadapter: 
        icon: fa fa-gg
        weight: 9
        title: "Handling events"
        identifier: handlingeventssdk    
---
APPSeCONNECT provides a number of events which you as a developer can hook into, to write code specially when 
the execution stops at a particular event. Let us take a look at some of the events which appseconnect adapter 
development environment provides : 


|EventName|EventDescription|Used from|
|---|------|---|
|[TaskStarted](http://isdn.appseconnect.com/html/13C231FD.htm)|The event will allow the adapter to track each individual integration start method| Initialize block|
|[TaskCompleted](http://isdn.appseconnect.com/html/E9157DE9.htm)| The event will be generated when any integration task is completed|Initialize block|
|[WorkflowStarted](http://isdn.appseconnect.com/html/D1A05ECF.htm)| The event is raised when a dependency workflow is triggered|Initialize block|
|[WorkflowCompleted](http://isdn.appseconnect.com/html/160B3CF3.htm)| The event is raised when a dependency workflow is complete|Initialize block|
|[TransformEventHandler](http://isdn.appseconnect.com/html/3C959725.htm)|The event is raised after transformation|Initialize block|
|[RealtimeProcessingStarted](http://isdn.appseconnect.com/html/3C455B56.htm)|The event is raised when Realtime engine gets a request for processing|Initialize block|
|[RealtimeProcessingEnd](http://isdn.appseconnect.com/html/2B0401DA.htm)| The event is raised when a realtime engine executed a request|Initialize block|

The events are raised whenever the special event occurs during execution of an integration.

To implement the event, it is recommended to use the [Initialize](http://isdn.appseconnect.com/html/1538BE75.htm) method of [IAdapter](http://isdn.appseconnect.com/html/73508818.htm) interface, if not otherwise, so as to ensure 
the event is not hooked more than once. 

```csharp

public void Initialize(ApplicationContext context)
{
    this._context = context;
    this._resource = new AppResource(context);

    context.TaskCompleted += Context_TaskCompleted;
}

private void Context_TaskCompleted(IAdapter sourceAdapter, IAdapter destinationAdapter, ExecutionSettings currentExecutionObject)
{
    // your code goes here connecting both the adapters.
}

```

Here in the Initialize method of IAdapter interface, we have hooked the event `TaskCompleted`, the method 
will automatically get executed after the execution is completed. By completion, we mean that the data transferred correctly from Source to Target application.

Generally we store the data late when we are not sure whether the data is available beforehand. 