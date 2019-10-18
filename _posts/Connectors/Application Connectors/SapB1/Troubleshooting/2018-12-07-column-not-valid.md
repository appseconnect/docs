---
title: "Invalid Attribute"
toc: true
tag: developers
category: "Connectors"
menus: 
    sapb1troubleshooting:
        title: "Invalid Attribute"
        weight: 12
        icon: fa fa-file-word-o
        identifier: sapb1troubleshootinginvalidattribute
---
# You received error : Property 'Attribute' of 'Entity' is invalid

# Symptom

During your sync operation, you receive an invalid property on an entity. The 'XXX' attribute of your Transformed file is 
invalid on target application, which is Shopify here. 

# Cause

There might be a number of reasons for this error: 

- The propery is mistakenly created during transformation, and you don't need it to be present in Target application. 
- The property is created from pre-packaged template, and you don't know what to do with it. 
- The property is required to be synched to target application as an User Defined field. 

# Resolution

To resolve this issue, follow the links below for reference. 

- [How to disable invalid mapping on transformation](/transformation/define-logic-over-destination-mapping/#respect-hierarchical-rendering-on-mapping-state)
- [How to create UDFs through extension](/connectors/Sap-Business-Addon/)
- [How to create user defined field in SAP B1](https://help.sap.com/doc/saphelp_sbo91/9.1/en-US/45/10ff7bcf465d7be10000000a11466f/frameset.htm)