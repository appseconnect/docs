---
title: "Pre-Configured Rule for Environment Issues"
toc: true
tag: developers
category: "Rule"
menus: 
    preconfigurerule:
        title: "Pre-Configured Rule for Environment Issues"
        weight: 19
        icon: fa fa-wpexplorer
        identifier: preconfigureruleerrorenvironment
---

## Scenario

Integration is a continuous process which gives the flexibility to the users to run an integration procedure again and again
based on the schedule defined by the user. As the process executes in background without any human intervension, it gives 
the user a piece of mind such that the data syncs seamlessly. 

But occassionally there might be a situation where the integration stops all of a sudden and the user who is not regularly monitoring
it, does not get any clue about it. This rule will identify any issue in the platform and generate notification
based on various parameters, such that any decrepancy could be identified easily.

**Note: User is required to activate the rule for Error email notification from the choose rule 
section. However, the user cannot edit and customize any of the fields of this rule.** 


## Requirement of the Rule

This is a Pre-packaged & Pre-configured rule. This rule triggers the tokens that generates the hourly report.

## Hourly Report Rule

|Event used|Token used |
|---|---|
|Network failure hapeend for X number of times|${NetworkConnectivityCount}$|
|Agent is crashed|${AppsEconnectCrashCount}$|
|Server communication channel interrupted|${SignalRDisconnectedCount}$|
|Process generated error during the scheduled exection|${ErrorLogDataWithinScheduledTime}$|
|Process is not executed as per schedule|${NoLogInScheduledTime}$|
|Configuration file is corrupt|${ConfigCorrupt}$|
|Process took longer than expected time|${LongerTouchpointExecutionTime}$|
|Transformation failed during process execution|${TouchpointHasTransformationError}$|
|Credential for applications failed|${AppCredentialErrorMessage}$|
|License for the server is expired|${LicenseExpired}$|

**Note: The token remains activated by default. If the process does not find any of the token as true, the notification will not be generated.**

## Area of Implementation

This is a Pre-packaged & Pre-configured rule and could be activated from the [Choose Rule](/rule/choose-rule/) option in the Rule section. 
Users cannot modify any configuration to the rule.

## Rule Notification

Users would receive the hourly report in the email id provided for the Organisation. The email would consist 
of the sync report (for failed during the execution process) for the previous hour. 

**Note: 
        * In-case of no error, there wont be any mail sent.           
        * Also, by default, the token for sending mails is set as ${orgEmails}$ which represents, that all users of the same organization will receive the notifications.       
        * Users can provide the specific recipient email address directly to mail field for sending the notification to selective users.
        * This Report will only display the errors that are faced during the sync process of the last hour
        * You will not recieve the Error details in certain heads based on the type of error which has occurred since last email.**
        * If there are no errors during this period, email will not be sent out.

