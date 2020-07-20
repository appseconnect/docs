---
title: "Default Rule for Data Purge Policy"
toc: true
tag: developers
category: "Rule"
menus: 
    defaultrule:
        title: "Default Rule for Data Purge Policy"
        weight: 18
        icon: fa fa-wpexplorer
        identifier: datapurgepolicy
---

IT organizations mostly struggle with data volume that accumulates and increases the overhead of operational cost. Due to the sheer growth in 
data size, an efficient storage mechanism became one of the vital needs for businesses, in order to improve the capabilities of their 
existing storage resources.

Data Purge Policy, as part of data retention method has been developed that will give full control of maintaining storage of runtime data, 
viz. transactional data, process log for a defined time interval. The default value for storing this information is 15 days.

This feature will keep the local, as well as cloud storage of APPSeCONNECT Agent, optimized for better resource utilization 
with the implementation of the default rules for this policy.

## Impact Area of Implementation:

1.	In On Premise Agent, data compression will happen for SQL lite database, process files, and transactional log files.
2.	The feature will also optimize the cloud agent storage environment.


## Conditions for the Purge Policy

1.	Transactional data (Resync entries including Success, Failure, Unprocessed, skipped whether in the database or in files which are older than 15 days will get auto-purged).
2.	Process Log entries will get auto-purged for data prior to 15 days.
3.	Snapshot will get auto-purged for data prior to 15 days.
4.	The rule gets triggered on default scheduled time for all organization users. (00:00 hrs Local Time for OP Agent and UTC Time for Cloud Agent users)
5.	Purge Policy will get autoactivated for newly created organization. Existing organization needs to run update configuration once and reactivate auto-sync in OP Agent to implement the feature.

Note: 

* For organization-specific rules or custom rules created by the user, the `auto-activation cannot be incorporated`.
* Organization must be LIVE state for any rule implementation to take effect.

## User Notification on Sync Halt with Purge Policy implementation

The [Feeds section](/#appseconnect-platform---functional-menus) of the APPSeCONNECT Portal will notify users whenever the data purge initiates and ends. 
During that time, all the sync operation gets halted for time period, until the purge rule execution gets completed.

![data-purge-policy](/staticfiles/rules/media/data-purge-policy.png) 

**Note: Sync will not be halted for organizations that are using cloud agent.**

## Reason for Halting the sync process

When OP database is in use or engaged in managing a process or transaction, it becomes difficult for any application to write anything 
further on the same database file. Generally, the execution of data purge will face conflict if there is one or more open transaction 
in place which is still accessing the outdated version or deleted version of data (i.e. data which is already taken for purging). 

Therefore, it is vital to ensure that transactions are closed.

Ideally, for OP Agent, it takes 4-5 minutes for purging Data of 1-2GB, in the following system setup:

* Disk consumption - 77 to 100%
* Memory Consumption - 40 to 45%
* RAM - 8GB
* OS - 64 bit &  Windows 10







