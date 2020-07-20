---
title: "Pre-Configured Rule for Misfire Event"
toc: true
tag: developers
category: "Rule"
menus: 
    defaultrule:
        title: "Pre-Configured Rule for Misfire Event"
        weight: 16
        icon: fa fa-wpexplorer
        identifier: preconfigrulemisfire
---

## SCENARIO

A workflow has been scheduled for it to run in every minute. It has been noticed that, it is taking 10 minutes for the 
process to complete. So, in this case, it misses on the scheduled trigger time if the process is busy or it cannot allocate 
enough resources for it to run it parallelly. Thus, misfire occurs when it cannot run on its scheduled time.

## REQUIREMENT OF THE MISFIRE RULE
Default rule is created like a normal rule in the pre-configured rule section from the portal. After creation it can be 
set as default rule. A toggle button is there to make it default or normal.

## MISFIRE EVENT RULE

|Event used|Token used |
|---|---|
|'MisfireTrigger'|'MisfireCountEqualsTo("6")'|

This demonstrates, for every 6th misfire, a notification would be sent to server to store the misfire count.

## AREA OF IMPLEMENTATION

Default Rule would not come in `Choose Rule` section. Default Rule will be available in the APPSeCONNECT Agent when user 
logs in for the first time or user updates the configuration in agent.

**Protip:** Misfire Default Rule would be available only for Live-Projects.
{: .notice--info}

## RULE NOTIFICATION

Each day for Misfire Event, Misfire Count of different Workflows and different Touchpoints or Resync Autosync are stored. 
All count per each process would be aggregated in a report for a day and that report would be sent to support team at 
10 am in the morning.

Notification would be sent via email and a support ticket will be generated stating the same report.
