---
title: "Pre-Configured Rule for Generation of Hourly Report"
toc: true
tag: developers
category: "Rule"
menus: 
    preconfigurerule:
        title: "Pre-Configured Rule for Generation of Hourly Report"
        weight: 18
        icon: fa fa-wpexplorer
        identifier: preconfigurerulelog
---

## Scenario

Workflows are scheduled for it to run as per the requirement. Workflows can either have the result as Success or can have Errors. 
Functionality is always efficient if the user gets a complete report of the sync process. This pre-packaged rule provides hourly 
reports to the user related to the sync process. 

## Requirement of the Rule

This is a Pre-packaged rule and the user can edit the rule criteria as per the requirement. 
[Click Here](/rule/create-rule/) to know about editing a rule. This rule triggers the tokens that generates the hourly report.

## Hourly Report Rule

|Event used|Token used |
|---|---|
|Hourly Based Sync Report|~{ReSyncBucketWithinScheduledTime("Error","Skipped")}~|

|Event used|Token used |
|---|---|
|Hourly Based Sync Report|~{ReSyncBucketWithinScheduledTime("Error","Skipped")}~|

Note: 
* The token remains activated by default. The default operator passed is `Not Equal to` , and its value passed is `False`.
* The users can anytime change the parameter value based upon their requirement.  


## Area of Implementation

This is a pre-packaged rule and could be activated from the [Choose Rule](/rule/choose-rule/) option in the Rule section. 
Users can anytime edit the rule based on the requirement.

## Rule Notification

Users would receive the hourly report in the email id provided for the Organisation. The email would consist 
of the sync report (for failed data) for the previous hour. 

**Note: In-case of no error, there wont be any mail sent**


