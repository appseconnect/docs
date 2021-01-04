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

Integrations are scheduled to run automatically and for users its effecient to send reports for scheduled process that either may face errors 
or is success. However, its always productive and valuable to get a detailed report for the cause of errors that user may face during the integration.

APPSeCONNECT users will now recieve mail notifications with the mail header as **Interrupted Integration Process. Reason in details** that sends detailed reports 
for the cause of errors faced for the following Scenarios:

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
- **SQL Exception/errors:** If your SQL queries return errors and fails to return data.
- **SQL Deadlocks:** For any deadlocks in SQL, you will recieve the mails if any sync process is scheduled.
- **App Adapter or Function exception:** These components are responsible for connecting applications with APPSeCONNECT which failure results to the sync processes.
- **NAV Webservice/DI Server/Service Layer Connection Faults:** Will trigger the mail on returning error in the sync process
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
- **Adapter Unavailability**
- **Workflow Execution Failed**

## Requirement of the Rule

The is a Pre-packaged and Pre-Configured Rule that need to be activated in organisation to get the report. 
The Rule will be initiated every and will check for errors as per the scenarios given above. If any of the error scenarios is matched, 
you will be notified with a mail report. However if none errors occured, you will not recieve any mail notification even if the Rule is triggered as per schedule.

## Area of Implementation

This is a Pre-packaged & Pre-configured rule and needs to be activated from the [Choose Rule](/rule/choose-rule/) option in the Rule section. 
Users cannot modify any configuration to the rule. 

## Rule Notification
Users would receive the Error based Hourly Notification in the email id provided for the Organisation. The Rule will be triggered every hour and would check for errors. However, if No-Errors found, you will not recive any Email Notification Reports
even if the rule triggers. A sample mail is provided below:

![errormailnotification1](\staticfiles\rules\media\errormailnotification1.PNG)

**Note:**

- **If internal processes donot detect any errors, the mail notification will not be sent.**
- **Mail Notification will be sent if the internal processes detects atleast One Issue as per the above mentioned Scenarios.**
- **The notification will be sent only to the mail provided in the organisation details.**
- **You need to Update Configuration on your On-Premise Agent, after ACTIVATING the rule from the Portal.**
- **This Rule is only applicable for the integration processes based on TOUCHPOINTS & WORKFLOW**

