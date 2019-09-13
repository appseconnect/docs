---
title: "Column Not found"
toc: true
tag: developers
category: "Connectors"
menus: 
    shopifyconnectortroubleshooting:
        icon: fa fa-gg
        weight: 7
        title: "Column Not found"
        identifier: shopifycolumnnotfound
---


# You received error : <errors> <inventory_item_id>Required parameter missing or invalid</inventory_item_id> </errors>

# Symptom

During your sync operation, you receive an invalid property on an entity. The 'XXX' attribute of your Transformed file is 
invalid on target application, which is SAP B1. 
# Cause

There is some instances where such error occurs

* Attribute mapping missing
* API modified


# Resolution

To resolve this issue, follow the links below for reference. 

[Attribute Mapping Required](/transformation/steps-to-cutomize-prebuilt-mapping/#implementing-attribute-mapping).
[As per the destination value required you have to define a Value in source](/transformation/define-logic-over-destination-mapping/).

