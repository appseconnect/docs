---
title: "Overview on policies development"
toc: true
category: "SDK"
tag: developers
menus:
    sdk: 
        icon: fa fa-gg
        weight: 4
        title: "Policies"
        identifier: overviewsdkpolicies           
---
Policies are special modules which hooks over an Http pipeline of API execution. In addition to prebuilt policies,
APPSeCONNECT also allows the developer to develop custom policies which will be applied through the API process 
execution. A custom made policy provides a Data repository, which needs a designer on the Portal itself to build the 
data design, and when the policy is applied with proper data dynamically provided while API creation, 
the policy can inspect the incoming Http Request and Response and provide certain action over it. 

## Pre-packaged Policies

APPSeCONNECT provides a number of pre-packaged policies which one can use out of the box without requiring any further 
development. Some of them like [Throttle](/api-management/quota-per-user-key/), [IP-restrict](/api-management/ip-restrict/), [Invalidate Http headers](/api-management/validate-http-header/), [Compression](/api-management/compression-apply/) etc. These policies can be used
directly on any API created on the portal. 

## Custom Policies

A custom policy is defined using APPSeCONNECT SDK. The SDK provides IPolicy interface which lets the developer create 
a policy which can be applied during execution. 

```csharp
[Policy(PolicyName = "CustomPolicy", Type = ExecutionTypes.Pre)]
public class CustomPolicy : PolicyBase, IPolicy
{


    private IDataRepository _repository;
    private Policy _policyinfo;

    public IPRestrictPolicy(Policy policySettings, DataManager manager) 
                : base(policySettings, manager)
    {
        this._policyinfo = policySettings;
        this.DataManager = manager;

    }

    public IDataRepository Repository
    {
        get { return this._repository; }
        set { this._repository = value; }
    }

    public async Task Execute(IOwinRequest request, CancellationToken cancellationToken)
    {
        if(!cancellationToken.IsCancellationRequested)
        {
            //Retrieve the Repository
        }
    }
}

```

You can inspect the request using the `request` object and perform your tasks. 