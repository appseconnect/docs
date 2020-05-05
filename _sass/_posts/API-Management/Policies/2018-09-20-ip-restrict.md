---
title: "Filter Request by IP policy"
toc: true
tag: developers
category: "API-Management"
menus: 
    policies:
        icon: fa fa-cogs
        title: "IP-Restrict Policy" 

---
The **IP Restrict Policy** is used to restrict the access of an API Proxy by limiting the number of IP Addresses who can access it.If an organization wants to develop an API which is to be accessed from only a set of IP addresses,and wants to block 
the access for all other clients,this policy would provide exactly that configuration and thus controls the access for a particular API Proxy.

**ProTip:** Policy can only be used once per API configuration.

### Policy Statement

Each policy requires certain configuration, which will allow to configure the policy for a particular API endpoint. 
Below are the list of configurations required for this policy.

![I P Restrict Policy](/staticfiles/api-management/media/IPRestrictPolicy.png)

The rules and setup needs to be made accordingly. 

|Name|Description|Is Mandatory|Default Value|
|-----------|--------------------------------------------------------|----------|----------|
|IP Restriction Policy Types|This policy provides two options  <br/> __Lists of Allowed__ : Whether the given IP Address Range will be allowed <br/> __Lists Of Restricted__ : Whether the given IP Address Range will be restricted |Yes| Not Applicable |
|From Range|This will provide the lower bound of the IP Address Range |Yes|Not Applicable|
|To Range|This will provide the upper bound of the IP Address Rane |Yes|Not Applicable|

### Policy Usage

The policy can be applied only at `inbound` section.

### Scope

Currently the policy can be applied at API Version Scope only.

