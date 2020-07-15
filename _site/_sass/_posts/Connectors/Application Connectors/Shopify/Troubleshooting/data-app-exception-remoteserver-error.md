---
title: "Data Application Exception Remote Server Error"
toc: true
tag: developers
category: "Connectors"
menus: 
    shopifyconnectortroubleshooting:
        icon: fa fa-gg
        weight: 7
        title: "Data Application Exception Remote Server Error"
        identifier: shopifydataappexception
---


# You received error: The remote server returned an error: (XXX) Not Acceptable.

# Symptom

During your sync operation, you receive an error showing, Unexpected character encountered while parsing value
on target application, which is Shopify here. 

# Cause

There might be a number of reasons for this error: 

- Data fieldsize exceeding the limits
- Packet size exceeding limit during or post transformation, hence packet size must be reduced by applying split and merge filter. 

# Resolution

[Checkdata fieldsize in Destination Application]()  
[Workflow- Use of split and Merge filter]()  








