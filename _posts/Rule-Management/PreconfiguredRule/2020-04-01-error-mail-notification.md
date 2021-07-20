---
title: "Pre-Configured Rule of Mail Notification of Errors"
toc: true
tag: developers
category: "Rule"
menus: 
    preconfigurerule:
        title: "Pre-Configured Rule Error Mail Notification"
        weight: 18
        icon: fa fa-wpexplorer
        identifier: preconfigurerulelog
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


## Scenarios for Error Mail Report Generation

### 1) For ECommerce Applications:

Listed below are the scenarios that will trigger the MAIL if your ECommerce Application generate issues.

- **Password Change:** If there is a change in the password of your application, your integration process will throw Validations errors.
- **API doesnt work:** API changes or modifications will result in Integration errors.
- **Request Timed out happens due to any limit issue:** Application Time out will result in error generation for which the mail will be triggered.
- **Throttling Errors:** API throttles effects integration process which return errors while sync.
- **Output response do not translate :** Output response such as HTTP 404, 500 hampers sync errors that would trigger the mail notification.

### 2) For ERP Applications:

Listed below are the scenarios that will trigger the MAIL if your ERP Application generate issue.

- **Connection Issues:** Connection failures will also allow to trigger mail to the user.
- **App Adapter or Function exception:** These components are responsible for connecting applications with APPSeCONNECT which failure results to the sync processes.
- **Timeout:** Timeouts are responsible for sync failures in return will trigger this mail to notify the user for the cause.

### 3) For Process Oriented:

Listed below are the scenarios that will trigger the MAIL if your ERP Application generates issue.

- **Touchpoint Execution Failure**
- **Touchpoint/Workflow Transformation error**
- **Touchpoint/Workflow execution stuck**
- **Touchpoint/Workflow taking excess time to execute**

### 4) For APPSeCONNECT based:

Listed below are the scenarios that will trigger the MAIL if APPSeCONNECT generates issue.

- **APPSeCONNECT Crash**
- **License Expiration**
- **Agent Conectivity Issue**
- **AutoSync Failure**
- **Workflow Execution Failed**

## Requirement of the Rule

The is a Pre-packaged and Pre-Configured Rule that need to be activated in organisation to get the report. 
The Rule will be initiated every and will check for errors as per the scenarios given above. If any of the error scenarios is matched, 
you will be notified with a mail report. However if none errors occured, you will not recieve any mail notification even if the Rule is triggered as per schedule.

## Area of Implementation

This is a Pre-packaged & Pre-configured rule and needs to be activated from the [Choose Rule](/rule/choose-rule/) option in the Rule section. 
Users cannot modify any configuration to the rule. This rule triggers the tokens that generates the hourly report.

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


## Rule Notification
Users would receive the hourly report in the email id provided for the Organisation. The email would consist 
of the sync report (for failed during the execution process) for the previous hour. 

![errormailnotification1](\staticfiles\rules\media\appseconnect-status-report.jpg)

**Note:**
        * In-case of no error, there wont be any mail sent.           
        * Also, by default, the token for sending mails is set as ${orgEmails}$ which represents, that all users of the same organization will receive the notifications.       
        * Users can provide the specific recipient email address directly to mail field for sending the notification to selective users.
        * This Report will only display the errors that are faced during the sync process of the last hour
        * You will not recieve the Error details in certain heads based on the type of error which has occurred since last email.**
        * If there are no errors during this period, email will not be sent out.
