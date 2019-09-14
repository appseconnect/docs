---
title: "Data validation failed BP Code Assigned to BP"
toc: true
tag: developers
category: "Connectors"
menus: 
    sapb1troubleshooting:
        title: "Data validation failed BP Code Assigned to BP"
        weight: 12
        icon: fa fa-file-word-o
        identifier: sapb1troubleshootingdatavalidation
---
# You received error : Business partner code 'XXX' already assigned to a business partner; enter a unique business partner code

# Symptom

During your sync operation, you receive an error message showing data validation failed BP Code assigned to BP
on target application, which is SAPB1 here. 

# Cause

- Duplicate data is mapped for the BP Code.


# Resolution

[Change integration to specify unique codes for each BP entity]()    
[How to use duplicate data check in data mapping](/transformation/define-logic-over-destination-mapping/)