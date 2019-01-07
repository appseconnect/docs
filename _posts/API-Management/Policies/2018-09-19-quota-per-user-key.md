---
title: "Throttling policy"
toc: true
tag: developers
category: "API-Management"
menus: 
    policies:
        icon: fa fa-cogs
        title: "Throttling policy" 
---
Throttling policy prevents an API usage spikes on per user basis, such that if the same API is 
getting somehow spammed, the policy will automatically detect it and update the response accordingly. The 
API rate limit can be set up by the developer for a specified time period and when the policy is
triggered for a specific call, the caller will receive `429 - Throttling Maximum sending rate exceeded` as response status code.

**ProTip:** Policy can only be used once per API configuration.  
{: .notice--info}.

### Policy Statement

Each policy requires certain configuration, which will allow to configure the policy for a particular API endpoint. 
Below are the list of configurations required for this policy. 

Sequence - The order of your policies applied/you want this policy to run.

![Ip Restrict Policy](/staticfiles/api-management/media/ip-restrict-policy.PNG)

The rules and setup needs to be made accordingly. 

|Name|Description|Is Mandatory|Default Value|
|-----------|--------------------|----------|----------|
|Sequence|In which order of your policies applied, you want this policy to run|No|Null|
|Span of time|Represent the amount of timespan required after which the requests from that particular user will automatically throttle|No|Empty|
|Maximum no. of Requests|The maximum number of request, the user needs to prevent within the specified time|No|Empty|

### Policy Usage

The policy can be applied only at `inbound` section.

### Scope

Currently the policy can be applied at API Version Scope only.


