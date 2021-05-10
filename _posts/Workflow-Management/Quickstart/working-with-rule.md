---
title: "Rule Node"
toc: true
tag: 
        - developers
        - nodes
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    nodeandlinks:
        icon: fa fa-link
        title: "Working with Rules" 
        identifier: noderule
---

### What is Rule Node?
This node is used for decision making during workflow execution. A rule can be applied on a single chunk of data based on the rule criteria defined in the rule definition. After data passed through role node there can be two scenarios either the data matched the rule definition or it fails and depending on success and a failure user can configure his/ her next processing steps. For example, a user wants to post a bunch of customer data from Shopify to SAP B1. After processing the Shopify data user can apply a rule along with a splitter node to check if a customer email address does not belong to a specific domain.If the rule satisfied then the data will be posted to SAP B1 otherwise we will store the data in our local storage.

### Working Principle

`RULE` node in APPSeCONNECT workflow used for controlling decision based flow in a workflow .

The above scenario can be implementd by defining below rule. In this rule we have defined the rule criteria using the EvaluateOutputData token with the following expression `~{EvaluateOutputData("//dis:EmailAddress")}~ ` .

![RuleNode](/staticfiles/workflow-management/media/Rule/RuleNode.PNG)

Below image show the implementation of above scenario using the `RULE` node.

![RuleWorkFlow](/staticfiles/workflow-management/media/Rule/RuleWorkFlow.PNG)