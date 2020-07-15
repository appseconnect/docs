---
title: "Duplicate Web Order"
toc: true
tag: developers
category: "Connectors"
menus: 
    sapb1troubleshooting:
        title: "Duplicate Web Order"
        weight: 12
        icon: fa fa-file-word-o
        identifier: sapb1troubleshootingweborderduplicate
---
# You received error : WebOrderID 'XXX' already exist 

# Symptom

During your sync operation, you receive `WebOrderID` already exist in your transactional logs. 
A `WebOrderId` keeps track of the source application's identifier for further update.

# Cause

There might be a number of reasons for this error: 

- The query you have used to fetch data returns duplicate data.
- Duplicate Data Check Filter is not implemented or not working properly during transformation.
- Sync Back touchpoint have failed to execute

# Resolution

To resolve this issue, follow the links below for reference. 

- [How to modify action filter query for your workflow](/transformation/working-with-schemas-action-filter/)
- [How to identify duplicate data during transformation](/transformation/define-logic-over-destination-mapping/#mapping-at-loop-level)
- [How to link sync back touchpoint in a workflow](/workflow/process-to-configure-a-task-with-acknowledgement/)
- [How to eliminate duplicate data from SAP B1](https://stackoverflow.com/questions/45148966/sql-query-remove-duplicates-from-specific-column)