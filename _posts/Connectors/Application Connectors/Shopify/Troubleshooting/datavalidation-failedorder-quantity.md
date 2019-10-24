---
title: "Data validation failed order quantity"
toc: true
tag: developers
category: "Connectors"
menus: 
    shopifyconnectortroubleshooting:
        icon: fa fa-gg
        weight: 7
        title: "Data validation failed order quantity"
        identifier: shopifydatavalidation
---

# You received error: Order Quantity

# Symptom

During your sync operation, you receive an error showing, Failed Order Quantity
on target application, which is Shopify here.

# Cause

There might be a number of reasons for this error: 

* Inventory mismatch in both the source and target application.


# Resolution

- [Stock update in Shopify should be performed before order fullfillment through dependency in Integration](https://help.shopify.com/en/manual/products/add-update-products).
- [Sales Cycle should be performed with Post and Post Task Input](/workflow/workflow-showing-salescycle-with-post-and-post-taskinput/)






