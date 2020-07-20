---
title: "Pre-Configured Rule for Log Bucket"
toc: true
tag: developers
category: "Rule"
menus: 
    preconfigurerule:
        title: "Pre-Configured Rule for Log Bucket"
        weight: 18
        icon: fa fa-wpexplorer
        identifier: preconfigurerulelog
---

Rules are a definite task, configured to perform Actions based on the type of events encountered during or after execution of the sync process.
This rule helps the user to choose a preconfigured rule where the user can have the control over the data present in Log Bucket. 
A token is configured, with a value in parameters are passed, which when scheduled, executes the rule and value wise data are kept on hold.  

## Steps to Activate and Edit the Rule

1.	Login to the AEC Portal and navigate to the Rule Section. [Click here](/rule/overview-of-rule/) to know more about the rules.
2.	Choose and Activate the rule for clearing Log Bucket. [Click here](/rule/choose-rule/)to know about the steps to choose and activate 
    a pre-packaged rule.  
![logbuckt-rule](/staticfiles/rules/media/logbuckt-rule.png) 
3. Click on the Edit button on the rule,  the basic information page opens. Users can edit only the `Rule Name` and `Rule 
   Description`. Click on the continue button.  
![logbuckt-rule2](/staticfiles/rules/media/logbuckt-rule2.png) 
4.	In the Rule Triggers window, the Triggered For field should be selected as Scheduled. 
5. In the Scheduler Activity section, the Repeat Field should be selected only as Hourly or Minutely. The Repeat interval
 can be altered by the user as per the requirement. The radio buttons for the END, can also be altered by the user as per
 the requirement.      
**Note:** By default, the Repeat field is pre-configured as Minutely and the Repeat as 10. The radio button for the END is preconfigured as NEVER.    
![logbuckt-rule3](/staticfiles/rules/media/logbuckt-rule3.png)     
6.	On clicking the continue button, the Rule Criteria window opens.  The token ~{LogCountOlderThanDays("1")}~ remains selected by default with the 1 passed in the parameters. Users can alter the parameters value based upon their requirement.
Explanation: Data present in the Log bucket will be kept on hold as per the parameter value passed. As the default value 
remains 1, therefore the present data and its previous day data, will kept on hold else all other data will be erased.  
![logbuckt-rule4](/staticfiles/rules/media/logbuckt-rule4.png)   
**Note: The checkbox beside the token should be enabled and the value field should be kept as true.** 
7.	Clicking on the Continue button, navigates to the Actions window. The Action should be selected as Clean Up Data. 
The clean up data property window opens. As the rule is being defined for clearing the Log bucket , the checkbox for Log needs
to be enabled.  
![logbuckt-rule5](/staticfiles/rules/media/logbuckt-rule5.png)   
8.	Click on the continue button, a window appears with the summarized view of the rule configuration. Click on the SAVE button.

With this, ends the process of editing the pre-packaged rule for clearing the Log Bucket.

**ProTip:**  Since this rule is dependent on the schedule, therefore we select the Scheduled option from the drop down.
{: .notice--info}

