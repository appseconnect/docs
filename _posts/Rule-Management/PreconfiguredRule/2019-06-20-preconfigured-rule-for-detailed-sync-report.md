---
title: "Pre-Configured Rule for Detailed Sync Report"
toc: true
tag: developers
category: "Rule"
menus: 
    preconfigurerule:
        title: "Pre-Configured Rule for Detailed Sync Report"
        weight: 18
        icon: fa fa-wpexplorer
        identifier: preconfigurerulelog
---

## Scenario

Workflows are scheduled for it to run as per the requirement. Workflows can either have the result as Success or can have Errors. 
Functionality is always efficient if the user gets a complete report of the sync process. This pre-packaged rule provides hourly 
reports to the user related to the sync process. 

Once activated, user will get timely notifications over email, stating the detailed sync errors that incurred during the time period. Default time interval is on hourly basis.  

**Note: User is required to activate the rule for Detailed Sync Report from the choose rule 
section. However, the user cannot edit and customize any of the fields of this rule.** 


## Requirement of the Rule

This is a Pre-packaged & Pre-configured rule. This rule triggers the tokens that generates the hourly report.

## Hourly Report Rule

|Event used|Token used |
|---|---|
|Hourly Based Sync Report|~{ReSyncBucketWithinScheduledTime("Error","Skipped")}~|

**Note: The token remains activated by default. The default operator passed is `Not Equal to` , and its value passed is `False`.**

## Area of Implementation

This is a Pre-packaged & Pre-configured rule and could be activated from the [Choose Rule](/rule/choose-rule/) option in the Rule section. 
Users cannot modify any configuration to the rule.

## Rule Notification

Users would receive the hourly report in the email id provided for the Organisation. The email would consist 
of the sync report (for failed during the execution process) for the previous hour. 

**Note: 
        * In-case of no error, there wont be any mail sent.      
        * The organisations need to be in Go-Live status for the Hourly Report.      
        * Also, by default, the token for sending mails is set as ${orgEmails}$ which represents, that all users of the same organization will receive the notifications.       
        * Users can provide the specific recipient email address directly to mail field for sending the notification to selective users.
        * This Report will only display the errors that are faced during the sync process of the last hour
        * You will not recieve the Detailed Sync Report if the subscription of your organisation has expired.**


