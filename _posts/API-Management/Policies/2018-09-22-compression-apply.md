---
title: "Compression Policy"
toc: true
tag: developers
category: "API-Management"
menus: 
    policies:
        icon: fa fa-cogs
        title: "Apply Compression Policy" 
---
**Compression Policy** compresses the response coming from the backend and thus can help to increase the performance of websites.
As per configurations, it chooses the right algorithm to compress the content.So after execution of the backend action if the response 
is not compressed then this policy will create a compressed response.

### Policy Statement

Each policy requires certain configuration, which will allow to configure the policy for a particular API endpoint. 
Below are the list of configurations required for this policy.

![Compression Policy](/staticfiles/api-management/media/CompressionPolicy.png)

The rules and setup needs to be made accordingly. 

|Name|Description|Is Mandatory
|-----------|--------------------|----------
|Compression Type|Represents the algorithm to be used for compression|Yes|

### Policy Usage

The policy can be applied only at `outbound` section.

### Scope

Currently the policy can be applied at API Version Scope only.
