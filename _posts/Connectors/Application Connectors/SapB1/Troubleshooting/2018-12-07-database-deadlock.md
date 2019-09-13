---
title: "SAPB1 Database deadlock"
toc: true
tag: developers
category: "Connectors"
menus: 
    sapb1troubleshooting:
        title: "SAPB1 Database deadlock"
        weight: 12
        icon: fa fa-file-word-o
        identifier: sapb1troubleshootingdatabaselock
---
# You received error : XXXX- Internal error (YYYY) occurred

# Symptom

During your sync operation, you receive `WebOrderID` already exist in your transactional logs. A `WebOrderId` keeps track of the source application's identifier for further update.

# Cause

There might be a number of reasons for this error: 

- Absence of freight mapping 
- Absence of item missing
- Absence of customer data in SAP B1
- DI server connectivity loss

# Resolution

To resolve this issue, follow the links below for reference. 

- proper mapping of shipping type (expense code)
- Check existence of item in SAP B1 (item master data item code)
- Check customer data existence (business partner card code)
- Check DI server connection 