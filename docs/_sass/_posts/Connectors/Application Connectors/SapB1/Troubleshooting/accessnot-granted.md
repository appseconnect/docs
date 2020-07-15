---
title: "Access not granted"
toc: true
tag: developers
category: "Connectors"
menus: 
    sapb1troubleshooting:
        title: "Access not granted"
        weight: 12
        icon: fa fa-file-word-o
        identifier: sapb1troubleshootingaccessnotgranted
---
# You Received an error: Could not commit transaction

# Symptom

During your sync operation, you receive an invalid error showing `Could not commit transaction`
on target application, which is SAPB1 here. 

# Cause

There might be a number of reasons for this error: 

- This error indicate that you have an incorrect usage of the SBO_SP_TransactionNotification
- This is an application error
- Problems with DI-API



# Resolution

[How to Resolve DI-API Server](https://support.boyum-it.com/hc/en-us/articles/115002389708-Problems-with-DI-API)
[SBO_SP_TransactionNotification_Problem.pdf](https://support.boyum-it.com/hc/en-us/articles/202486533-SAP-Issue-1116-Could-not-commit-transaction)