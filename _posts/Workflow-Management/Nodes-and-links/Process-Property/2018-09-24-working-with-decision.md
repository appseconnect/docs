---
title: "Decision Node"
toc: true
tag: 
        - developers
        - nodes
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    nodesprocess:
        icon: fa fa-link
        title: "Working with Decision" 
        identifier: noderule
---

### What is Decision Node?
This node is used for decision making during workflow execution. 
A decision can be applied on a single chunk of data based on the decision criteria defined in the decision definition. 
After data passed through role node there can be two scenarios either the data matched the decision definition or it fails and depending on success and failure user can configure his/ her next processing steps. 
For example a user want to post a bunch of customer data from Shopify to SAP B1. After processing the Shopify data user can apply a decision along with a splitter node to check if a customer email address 
does not belong to a specific domain.If the decision is satisfied then the data will be posted to SAP B1 otherwise we will store the data in our local storage.

### Working Principle

`DECISION` node in APPSeCONNECT workflow is used for controlling decision based flow in a workflow .

**Application used for the scenario is: Magento2 and SAP B1.**

The Business Partner Touchpoint is used, where the DECISION node is implemented after the PROCESS Operation. 
Here a condition is implemented that `if the country of the Business Partner is US`, the data will be 
accepted else if the `Business Partner is from different country` the `decision will be a failure`.  
On the Failure an Email Action is setup which will be triggered only when a Business Partner has failed 
to meet the condition of the decision.

**The Decision property window is shown below**

![decisionproperty](/staticfiles/workflow-management/media/rule/decisionproperty.png)

The fields present in the decision screens are:

1. Decision Name- This can be any name. It represents the name of the Decision. 
2. Key-  The Key is the Token against which the Decision is to be implemented taken.
3. The drop-down list has the operators which is for executing the decisions.
4. Value -  This is the value corresponding to which the decision is to be taken.

**Note: It is mandatory to enable the checkbox beside the KEY for evaluating the decision.**  
![decisionproperty1](/staticfiles/workflow-management/media/rule/decisionproperty1.png)

**Execution screen for the DECISION Workflow**

![decisionworkflow](/staticfiles/workflow-management/media/rule/decisionworkflow.png)

### Troubleshooting for Decision

The Decision node requires a key which is the syntax for the tokens present in APPSeCONNECT. 

Using DECISION after Process node requires the KEY depending on the TRANSFORM Packet and if the DECISION 
is used after GET and before PROCESS the key will be depending on the INPUT Packet.

The syntax for the KEY which depends on the input packet is ~{EvaluateInputData("path")}~
The syntax for the KEY which depends on the output packet is ~{EvaluateOutputData("path")}~

**Note: Here the path is the XPATH of the XML data.**

For the above scenario: the key was ~{EvaluateOutputData("//BPAddresses/row/Country")}~
Here the XPATH is the //BPAddresses/row/Country where 

BPAddresses is the Parent Node row is the child node of the Parent and the Country is the field 
or the element upon which the decision is to be implemented on each data.

The below image will help the reader to understand the concept in detail.  
![decision-xml](/staticfiles/workflow-management/media/rule/decision-xml.png)

Similarly this process can be implemented for the other touchpoints. The concept for applying the key in the DECISION node will remain 
same if executed for any other touchpoint and also for a different connection.

