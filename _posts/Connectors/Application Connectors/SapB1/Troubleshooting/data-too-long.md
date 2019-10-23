---
title: "Data too long"
toc: true
tag: developers
category: "Connectors"
menus: 
    sapb1troubleshooting:
        title: "Data too long"
        weight: 12
        icon: fa fa-file-word-o
        identifier: sapb1troubleshootingdatatoolong
---
# You received error : CServiceData::SetPropertyValueString failed; Value too long in property 'field' of 'attribute'

# Symptom

During your sync operation, you receive an error message showing Value too long in property
on target application, which is SAPB1 here. 

# Cause

There might be a number of reasons for this error: 

- Field Value provided in the source application is too long and is in untrimmed condition.
- In the source application reduce the value size of the field.

# Resolution

To resolve this issue, follow the links below for reference. 

- [Use Substring-Subfunction]()