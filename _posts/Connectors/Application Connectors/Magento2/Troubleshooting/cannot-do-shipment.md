---
title: "Data Validation Failed - Cannot do shipment for Order"
toc: true
tag: developers
category: "Connectors"
menus: 
    magentotroubleshooting:
        title: "Data Validation Failed - Cannot do shipment for Order"
        weight: 5
        icon: fa fa-file-word-o
        identifier: magentotroubleshootingshipment
---
# You Received an error: Cannot do shipment for order

# Symptom

During your sync operation, you receive an error which says 'cannot do shipment for order' 
in the target application, which is Magento 2. 

# Cause

There might be a number of reasons for this error: 

- Order is already fulfilled
- Shipment is made from virtual product.

# Resolution

To resolve this issue, follow the links below for reference.     
[Define Action filter to filter out virtual product  from source product](/transformation/working-with-schemas-action-filter/#knowing-schema-actions--filters)  
[Apply Condition in mapping or transformation](/transformation/define-logic-over-destination-mapping/#pre-requisites-for-mapping)

