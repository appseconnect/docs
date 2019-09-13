---
title: "Data Missing - Order not exist"
toc: true
tag: developers
category: "Connectors"
menus: 
    magentotroubleshooting:
        title: "Data Missing - Order not exist"
        weight: 5
        icon: fa fa-file-word-o
        identifier: magentotroubleshootingordernotexist
---
# You Received an error: # The order no longer exists

# Symptom

During your sync operation, you receive an error which says 'Order no longer exist' 
in the target application, which is Magento 2. 

# Cause

There might be a number of reasons for this error: 

- Order is deleted in Magento while updating
- Update Process is executed before order creation.



# Resolution

To resolve this issue, follow the links below for reference. 

- [How to Apply filteration in Application](/transformation/working-with-schemas-action-filter/#knowing-schema-actions--filters)  
- [Order Creation in Magento](https://www.tutorialspoint.com/magento/create_magento_orders.htm)