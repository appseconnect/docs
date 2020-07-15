---
title: "Inconsistent Data entry internal error occured"
toc: true
tag: developers
category: "Connectors"
menus: 
    sapb1troubleshooting:
        title: "Inconsistent Data entry internal error occured"
        weight: 12
        icon: fa fa-file-word-o
        identifier: sapb1troubleshootingdatainvalid
---
# You received error : Internal error (XXXX) occurred

# Symptom

During your sync operation, you receive a message showing Internal error (XXXX) occurred
on target application, which is SAPB1 here. 

# Cause

- Improper data import in SAP B1
- Using SQL query any table data modification 


# Resolution

To resolve this issue, follow the links below for reference. 

- Verify data before importing into SAP B1, To Import data [click here](/getting-started/#importing-schemas-and-actions-of-an-application)
- Avoid using any direct SQL query to modify any table data or to delete any table data 
