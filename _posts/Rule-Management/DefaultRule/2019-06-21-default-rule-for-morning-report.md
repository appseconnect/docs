---
title: "Default Rule for Morning Report"
toc: true
tag: developers
category: "Rule"
menus: 
    defaultrule:
        title: "Default Rule for Morning Report"
        weight: 18
        icon: fa fa-wpexplorer
        identifier: defaultmorningreport
---

## Requirement of the Rule

APPSeCONNECT Morning Report updates the users about the data synchronization status for each connection, 
on daily basis. The main utility for this report is:

1.	The feature has been implemented in APPSeCONNECT Rule engine, so that rule gets triggered on default scheduled time for all organization users. 
    (00:00 hrs Local Time for OP Agent and UTC Time for Cloud Agent users)
2.	The report will have the following columns that will display the following details :


|Column Name|Utlity Description |
|---|---|
|Success count|Will indicate the no. of items that got success in the last 24 hours|
|Successful Retries count|Will indicate data that got success after resyncing the data which are older than 24 hours|
|Failure Count|Will indicate the no. of items that fetched error or was failed during the sync process in the last 24 hours.|

![morning-report](/staticfiles/rules/media/morning-report.png) 

* The organization must be in Go-LIVE status to receive the morning report.
* Organization admin and all the associated users of the organization will receive the mail. 
* Default Rule for Morning Report will get auto-activated for cloud agent users without deploying/updating configuration.
* For OP Agent, the default Rule for Morning Report will get auto-activated for new organization users, after activating and logging in to their Agent.
* Existing Organisations with OP Agent environment, needs to the update/deploy the configurations for activating the rule.




