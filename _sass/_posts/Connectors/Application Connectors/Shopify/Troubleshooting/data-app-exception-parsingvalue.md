---
title: "Data Application Exception while Parsing values"
toc: true
tag: developers
category: "Connectors"
menus: 
    shopifyconnectortroubleshooting:
        icon: fa fa-gg
        weight: 7
        title: "Data Application Exception while Parsing values"
        identifier: shopifydataappexception
---

# You received error: Unexpected character encountered while parsing value: <. Path '', line 0, position 0.

# Symptom

During your sync operation, you receive an error showing, Unexpected character encountered while parsing value
on target application, which is Shopify here. 

# Cause

There might be a number of reasons for this error: 

- Value Mapping Unavailable or Missing from some fields
- Invalid Character in some attributes
- Data type mismatch

# Resolution

[ValueMapping](/transformation/using-lookups-for-value-exchange/)  
[How to do Attribute Mapping in AEC](/transformation/steps-to-cutomize-prebuilt-mapping/#implementing-attribute-mapping).
[How to Use Action filter to check data type mismatch](/transformation/working-with-schemas-action-filter/)  




