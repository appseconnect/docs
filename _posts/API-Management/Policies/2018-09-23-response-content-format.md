---
title: "Response content format identification policy"
toc: true
tag: developers
category: "API-Management"
menus: 
    policies:
        icon: fa fa-cogs
        title: "Response Content Format Transform Policy" 
---
**Reponse Content Format** policy inspects `Content-Type` for each HTTP request header and based upon the 
identification,it modifies the response content. For example,if the incoming HTTP request contains 
the `Content-Type` **XML** or **JSON** then the response content format would be converted to **XML** or **JSON** according to the 
Request `Content-Type` header.

**ProTip:** Policy can only be used once per API configuration.
{: .notice--info}

### Policy Usage

The policy can be applied only at `outbound` section.

### Scope

Currently the policy can be applied at API Version Scope only.