---
title: "Pre-Configured Rule of Mail Notification of Errors"
toc: true
tag: developers
category: "Rule"
menus: 
    preconfigurerule:
        title: "Pre-Configured Rule of Mail Notification of Errors"
        weight: 18
        icon: fa fa-wpexplorer
        identifier: preconfigurerulelog
---

## Scenario

Integrations are scheduled to run automatically and for users its effecient to send reports for scheduled process that either may face errors 
or is success. However, its always productive and valuable to get a detailed report for the cause of errors that user may face during the integration.

APPSeCONNECT users will now recieve mail notifications with the mail header as **Interrupted Integration Process. Reason in details** that sends detailed reports 
for the cause of errors faced for the following Scenarios:

### Application Issue 

1) For ECommerce Applications:

Listed below are the scenarios that will trigger the MAIL if your ECommerce Application generate issues.

- **Password Change:** If there is a change in the password of your application, your integration process will throw Validations errors.
- **API doesn’t work:** API changes or modifications will result in Integration errors.
- **Request Timed out happens due to any limit issue:** Application Time out will result in error generation for which the mail will be triggered.
- **Throttling Errors:** API throttles effects integration process which return errors while sync.
- **Output response don’t translate :** Output response such as HTTP 404, 500 hampers sync errors that would trigger the mail notification.

2) For ERP Applications:

Listed below are the scenarios that will trigger the MAIL if your ERP Application generate issue.

- **Connection Issues:** Connection failures will also allow to trigger mail to the user.
- **SQL Exception/errors:** If your SQL queries return errors and fails to return data.
- **SQL Deadlocks:** For any deadlocks in SQL, you will recieve the mails if any sync process is scheduled.
- **App Adapter or Function exception:** These components are responsible for connecting applications with APPSeCONNECT which failure results to the sync processes.
- **NAV Webservice/DI Server/Service Layer Connection Faults:** Will trigger the mail on returning error in the sync process
- **Timeout:** Timeouts are responsible for sync failures in return will trigger this mail to notify the user for the cause.

3) For Process Oriented:

Listed below are the scenarios that will trigger the MAIL if your ERP Application generates issue.

- **Touchpoint Execution Failure**
- **Touchpoint/Workflow Transformation error**
- **Touchpoint/Workflow execution stuck**
- **Touchpoint/Workflow taking excess time to execute**

4) For APPSeCONNECT based:

Listed below are the scenarios that will trigger the MAIL if APPSeCONNECT generates issue.

- **APPSeCONNECT Crash**
- **License Expiration**
- **Agent Conectivity Issue**
- **AutoSync Failure**
- **Adapter Unavailability**
- **Workflow Execution Failed**





