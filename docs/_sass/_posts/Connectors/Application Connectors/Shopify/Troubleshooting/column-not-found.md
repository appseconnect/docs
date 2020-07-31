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

During your sync operation, you receive an error showing, The 'XXX' attribute of your Transformed file is missing or invalid
on target application, which is Shopify here. 

# Cause

There might be a number of reasons for this error: 

* Invalid Attribute mapping exist in transformation
* Attribute mapping is disabled
* API Missing or Updated


# Resolution

To resolve this issue, follow the links below for reference. 

[How to do Attribute Mapping in AEC](/transformation/steps-to-cutomize-prebuilt-mapping/#implementing-attribute-mapping).  
[How to Enable/Disable Attribute Mapping](/transformation/define-logic-over-destination-mapping/#respect-hierarchical-rendering-on-mapping-state)  
[How to Add or Update API](/api-management/quickstart-guides-to-api-management/).

