---
title: "TokenList for Rules"
toc: true
tag: developers
category: "Rule"
menus: 
    overviewrule:
        title: "TokenList for Rules"
        weight: 15
        icon: fa fa-wpexplorer
        identifier: createrule
---

Here are the list of tokens required for rule creation in APPSeCONNECT


|RuleTokenName|Syntax|Description|Type|Applied On|
|---|---|---|---|------|----|
|ReSyncBucketCountOlderThanHours|~{ReSyncBucketCountOlderThanHours(20)}~|Can display Resync bucket for selected touchpoints in the list or all touchpoints in a table generated within specified number of hours mentioned|Function Token|Scheduled|
|ReSyncBucketWithinScheduledTime|${ReSyncBucketWithinScheduledTime}$|Can display Resync Bucket for selected touchpoint within a schedule mentioned for the rule|Property Token|Scheduled|
|LogCountOlderThanDays|~{LogCountOlderThanDays(5)}~|Return the count of logs present beyond a specified count of days|Function Token|Scheduled|
|DiskSpaceAvailable|~{DiskSpaceAvailable("sizeinbytes")}~|Available disk space in bytes|Function Token|Scheduled|
|LogDataWithinScheduledTime|~{LogDataWithinScheduledTime()}~|Returns logs within a specified time|Function Token|Scheduled|
|LogMessageFound|${LogMessageFound}$|Returns true if logs found|Property Token|Scheduled|
|ReSyncBucketCountOlderThanDays|~{ReSyncBucketCountOlderThanDays("5")}~|Returns the count of resync bucket older than number of days mentioned|Function Token|Scheduled|
|TimeStamp|${Environment.TimeStamp}$|Gets current time|Property Token|ApplicationCrash|
|OrgName|${Environment.OrgName}$|Returns the name of the organization|Property Token|ApplicationCrash|
|OrgEmails|${orgEmails}$|Returns semicolon separated email ids of all users approved for a current organization|Property Token|Emails|
|Summary|${MorningReportSummary}$|Generates a morning report summary HTML inside the body of the email|Property Token|Scheduled|
|ExecutedType|${Process.ExecuterType}$|Returns Touchpoint, Workflow or Realtime|Property Token|ApplicationCrash|
|Type of Process|${Process.ProcessType}$|Returns the name of the process|Property Token|ApplicationCrash|
|Memory|${Process.MemorySize}$|Memory taken by the process|Property Token|ApplicationCrash|
|TimeElapsed|${Process.TimeTaken}$|Time elapsed from last process start|Property Token|ApplicationCrash|
|IsTerminating|${Process.IsTerminating}$|Checks whether the process is in termination mode or not|Property Token|ApplicationCrash|
|ExecuterTypeName|${Process.ExecuterTypeName}$|Name of the job that executed this rule|Property Token|ApplicationCrash|
|Misfire counter|${Process.MisfireCount}$|Counts the number of misfire occurred|Property Token|ApplicationCrash|
|Last Execution Time|${Process.LastExecutionTime}$|datetime for last execution|Property Token|ApplicationCrash|
|Stopped|${Process.Stopped}$|Returns true if AutoSync process is stopped|Property Token|ApplicationCrash|
|Message|${Exception.Message}$|Returns Message for current exception|Property Token|ApplicationCrash|
|Source|${Exception.Source}$|Returns Source for current Exception|Property Token|ApplicationCrash|
|StackTrace|${Exception.StackTrace}$|Returns the stack trace for current exception|Property Token|ApplicationCrash|
|TargetSite|${Exception.TargetSite}$|Returns the target line for current exception|Property Token|ApplicationCrash|
|InnerException|${Exception.InnerException}$|Returns the inner exception for current exception|Property Token|ApplicationCrash|
|ReSyncBucketCountWithinScheduledTimeWithFilter|~{ReSyncBucketCountWithinScheduledTimeWithFilter("All")}~|Filters the count of resync bucket within a scheduled time, you can also specify the status name to filter out the resync bucket|Function Token|Scheduled|
|ReSyncBucketWithinScheduledTimeWithFilter|~{ReSyncBucketWithinScheduledTimeWithFilter("UNPROCESSED")}~|Returns the Resync bucket for a process within a scheduled time. You can also filter out the resync bucket using a comma separated status list|Function Token|Scheduled|
|LogDataWithinScheduledTime|~{LogDataWithinScheduledTime()}~|Returns the whole logs inside a specified time frame|Function Token|Scheduled|
|MisfireCountEqualsTo|~{MisfireCountEqualsTo("3")}~|Returns true if the value of misfire is equal to a specified value|Function Token|Scheduled|
|AutoSyncLastStopped|~{AutoSyncLastStopped()}~|Gets the last autosync stop time|Function Token|Event|