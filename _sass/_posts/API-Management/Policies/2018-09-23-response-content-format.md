---
title: "Response content type conversion policy"
toc: true
tag: developers
category: "API-Management"
menus: 
    policies:
        icon: fa fa-cogs
        title: "Response content type conversion policy"
---
**Reponses Content type conversion policy** is a type of outbound policy. 
It can be configured for the output format such as XML or JSON. If the Response Conversion Type selected as 
XML and backend application response will be converted to XML.

**ProTip:** Policy can only be used once per API configuration.
{: .notice--info}

### Policy Statement

Each policy requires certain configuration, which will allow to configure the policy for a particular API endpoint. Below is the screen where you need to configure the Response Conversion Type (XML or JSON) 
you want to deploy in the Response Content type conversion policy.

![ResponseContent-TypeCoverionPolicy](/staticfiles/api-management/media/ResponseContent-TypeCoverionPolicy.png)

The rules and setup needs to be made accordingly. 

|Name|Description|Is Mandatory|
|-----------|--------------------|----------|
|Response Content type conversion|Represents the algorithm to be used for response content type conversion|Yes|
|Select Response Conversion Type| Either XML or JSON|Yes|

### Policy Usage

The policy can be applied only at `outbound` section.

### Scope

Currently the policy can be applied at API Version Scope only.