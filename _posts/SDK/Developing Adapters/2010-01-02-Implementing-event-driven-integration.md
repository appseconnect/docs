---
title: "Implementing Event-driven integration"
toc: true
tag: developers
category: "SDK"
menus:
    overviewsdkadapter: 
        weight: 3
        icon: fa fa-gg
        title: "Event-based Integration"
        identifier: developadaptereventbasic    
---
An integration is generally scheduled at an interval or a specific time such that the data 
is pulled from the application only when the scheduler gets a trigger. Now, sometimes there is
an better way to do an integration only when the application which needs to send data gives us
webhooks. A webhook is a feature in an application that allows the application to put an endpoint 
url which it triggers automatically when some transaction is made on the application end. Or more
precisely, the application is expected to raise an event which the platform can subscribe for and 
when certain action is performed on the application it gets notification about the event.

### Webhooks

APPSeCONNECT provides a number of ways to do an event driven programming which one can use to 
subscribe the platform to get notifications. An integration in such a case will be based 
on trigges on the application.

- Direct call
- Proxy through ESB

Let us take a look on how different they are and how to implement the same in an adapter. 

### Direct call

When you deal with webhooks, the thing that you need is an URL which you can subscribe to a particular 
application to get notified. In case of APPSeCONNECT hybrid environment, you will get a free URL generated 
on your local application, which you can pick up from any touchpoint and perform the webhook execution. For a direct call 
execution, there should be a global ip associated, so network configuration is must. 

### Proxy through ESB

If you enable proxy for a Webhook, the URL will be generated on our Cloud platform, which you can get 
from the portal and execute the touchpoint. In this case, there is an Enterprise Service bus which takes care of messages
and you do not need global and appseconnect provides an URL for the resource. In this case the application 
stores the messages before processing it and hence it is safe. 

### Implementing the Realtime Processor

To implement the functionality to work with Webhook touchpoints, you need to implement a class from [`IRealtimeProcessor`](http://isdn.appseconnect.com/html/71470DA4.htm). Let us look
how to implement a realtime interface for Adapter.

```csharp

public class RealtimeAdapter : IRealTimeProcessor
{
	private AppResource _resource = null;
	private ApplicationContext _context = null;

	public RealtimeAdapter()
	{
   
	}
	
	public void Initialize(ApplicationContext context)
	{
		this._context = context;
		this._resource = new AppResource(context);
	}


	public RealtimeContext Request
	{
		get;
		set;
	}
	
	/// <summary>
	/// Generate response for realtime requests such that APIs or Webhook could receive a response
	/// </summary>
	/// <param name="settings"></param>
	/// <returns></returns>
	public ReturnMessage<string> Execute(RealtimeExecutionSettings settings)
	{
		var returnMessage = new ReturnMessage<string>(string.Empty, "Execution unsuccesful");
		
		try 
		{
		   string outputresponse = string.Empty;
		   //ToDo: Generate a response either by calling Get / Post Operation or completely rewrite and put it in outputresponse. 
		   returnMessage.SetSuccess("Response generated", outputresponse);
		}
		catch(Exception ex)
		{
			returnMessage.Message = ex.Message;
			returnMessage.Exceptions.Add(ex);
			returnMessage.SetError("Exception Occured due to" + ex);
		}
		
		return returnMessage;


	}
	/// <summary>
	/// This function is written for validating a real time request
	/// </summary>
	/// <param name="settings">Setting data of a realtime request</param>
	/// <returns>Validation status</returns>
	public ReturnMessage<bool> ValidateRequest(RealtimeExecutionSettings settings)
	{
		var returnMessage = new ReturnMessage<bool>();
		try
		{
			//ToDo: Check and validate the request and return true if request is made from a valid source 
			returnMessage.SetSuccess("Validated successfully");
		}
		catch (Exception ex)
		{
			returnMessage.Message = ex.Message;
			returnMessage.Exceptions.Add(ex);
			returnMessage.SetError("Exception Occured due to" + ex);
		}
		return returnMessage;
	} 
}

```

Here in the code, you can see we generally have to deal with two methods. 

1. [`ValidateRequest`](http://isdn.appseconnect.com/html/FA557F0A.htm): For every request, the request first goes through this block. The block is to ensure all the functions of the API is working correctly and also the request is coming from a Valid request. The call also receives an [`Request`](http://isdn.appseconnect.com/html/5C4F78D3.htm) object whcih holds all the necessary information about the call, and also an object of [`RealtimeExecutionSettings`](http://isdn.appseconnect.com/html/EC529EA5.htm) for contextual settings. If the return message for the call is failure, the actual execution will not execute. 
2. [`Execute`](http://isdn.appseconnect.com/html/451B9092.htm): This method receives the actual call to the request and the objective is to send response back to APPSeCONNECT. Once the Execute action is performed, the object is termed as valid and the transformation is performed and Post activity is performed for that operation. 


**NOTE: As API is realtime, the idea of executing an API should not take long time, as this will create request timeout for certain requests**
