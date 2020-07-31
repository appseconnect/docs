---
title: "Create & Edit Rule"
toc: true
tag: developers
category: "Rule"
menus: 
    overviewrule:
        title: "Create & Edit Rule"
        weight: 15
        icon: fa fa-wpexplorer
        identifier: createrule
---

APPSeCONNECT cloud portal provides you an option to list out a set of rules. To Add Rule, you must follow the steps given below:

1. Go to `My Rules` under Account section & Choose `Add Rule`.
![create-rule1](/staticfiles/rules/media/create-rule1.png)
2. Enter `Rule Name & Rule description` as they mandatory fields. The Status of the Rule
is of three types -  Released, Obsolete & Work in Progress. By default, the status of the rule is "released".
![create-rule2](/staticfiles/rules/media/create-rule2.png)
**Note: You cannot use any special character in the rule name except Hyphen (-) but not as a starting or an ending character. 
Character from a-z and 0-9 can be used for provided rule name**
3. Click Continue button to go to the next page. `Rule Trigger` section appears
![rule-trigger](/staticfiles/rules/media/rule-trigger.png)
4. Now Choose `Triggered For'  from the Dropdown list. This is of two types - Event and Scheduled. 
If the Triggered for is selected as Event. The Event type from the list of the events is as given below: 
* Execution Starts - The rule will be triggered when the event occurred, while starting of the execution. 
* Application Crash - The rule will be triggered when the event occurred during an application crash. 
* Execution End: The rule will be triggered when the event happened at the Execution End. 
* Execution Failure: This rule will be triggered when the execution process gets failed. 
5. If the Rule Triggered for is selected as Scheduled, the scheduled property opens. 
![create-rule3](/staticfiles/rules/media/create-rule3.png)
Provide the Repeat Schedule (Minutely, Hourly, Daily) and the Repeat Interval (In Seconds) and the End Status. 
Click Continue Button.  
6. You will be redirected to a new page where you can Define criteria for a Rule.
![create-rule4](/staticfiles/rules/media/create-rule4.png)
* If you have not given a valid Key-Value pair, an error will be shown.
* Later, if you find the Rule criteria is not required anymore, you can check and Delete it also.
7. In the Actions tab, you will provide actions to be taken regarding the rule.
![create-rule5](/staticfiles/rules/media/create-rule5.png)
* For e-mail, you will get options like - To, Subject & Token & description is mandatory.
![email](/staticfiles/rules/media/email.png)
* For support Ticket, giving Priority, Summary & description is mandatory.
![support-tckt-rule](/staticfiles/rules/media/support-tckt-rule.png)
* For Webhook, fill all the mandatory fields.
* For Clean Up Data, select the Clean-up Action type and click on the continue button.
![action-cleanup](/staticfiles/rules/media/action-cleanup.png)
**Note: A webhook (HTTP push API) is a way for an app to provide other applications with real-time information. 
A webhook delivers data to other applications as execution happens, means you will get data immediately**
8. `Confirm the Rule' is the last tab of rule creation process. Click SAVE and you will get to see the overview of the rule.
![rule-saved](/staticfiles/rules/media/rule-saved.png)
The above steps complete the rule creation process.
