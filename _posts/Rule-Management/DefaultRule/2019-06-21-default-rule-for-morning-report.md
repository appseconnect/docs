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
2.  The report will have two sections that would display the execution status for the last 24 hours: 
    a. Connection Wise Status Report: This section will display the execution reports for sync process implemented using **Workflow**.
    b. ProcessFlow Execution Status Report: This section will display the execution reports for sync process implemented using **ProcessFlows**

3. **Transaction Period:** Denotes the timespan of data transaction meant for report generation.
To Cite an example, if the transaction period is from 3.12.2019 - 00.00hrs to 4.12.2019 23.59 hrs (Inclusive of 59th minute)

4. **Data Generated From:** This will enlist your environment name using which the processes are integrated.

The report will have the following columns that will display the following details :

|Column Name|Utility Description |
|---|---|
|Connection/ProcessFlow Name| This will display the name of the Connection (Workflow) or ProcessFlow name  that was executed.|
|Success|These are the Data which is successfully synced within the transaction period|
|Failure|These are the Data which are unsuccessful within or before the transaction period. |

**Note: Failed data that have been attempted with autosync of resync, for Success, the count would be displayed on the success column on the morning report for the next day.**

![morning-report](/staticfiles/rules/media/morning-report.png) 

* The organization must be in Go-LIVE status to receive the morning report.
* Organization admin and all the associated users of the organization will receive the mail. 
* Default Rule for Morning Report will get auto-activated for cloud agent users without deploying/updating configuration.
* For OP Agent, the default Rule for Morning Report will get auto-activated for new organization users, after activating and logging in to their Agent.
* Existing Organisations with OP Agent environment, needs to the update/deploy the configurations for activating the rule.
* You will not recieve the Morning Report if the subscription of your organisation has expired.




