---
title: "Working with Decision Node"
toc: true
tag: developers
category: "Advance Workflow"
menus: 
    advanceworkflow:
        title: "Working with Decision Node"
        weight: 3
        icon: fa fa-file-word-o
        identifier: designingworkflow
---

## What is Decision Node

Significance of Decision Node is implemented when fetching or synchronising data based on certain criteria or decisions. 
A decision can be applied on a single chunk of data based on the decision criteria defined in the decision definition window. 
After data passed through role node there can be two scenarios either the data matched the decision definition, or it fails 
and depending on success and failure user can configure his/ her next processing steps.

For example, a user wants to post a bunch of customer data from Shopify to SAP B1. After processing the Shopify data user can
apply a decision along with a splitter node to check if a customer email address does not belong to a specific domain. 
If the decision is satisfied, then the data will be posted to SAP B1 otherwise we will store the data in our local storage.

## Prerequisites for Implementing Decision Node

1.	User needs to have valid credentials of APPSeCONNECT Portal.
2.	Needs to create an [Advanced Workflow](/advance%20workflow/designing-executing-adv-workflow/) before implementing Decision. 

## Steps to implement Decision Node in Advanced Workflow

1.	Login to the APPSeCONNECT portal and Navigate to the Advance Workflow Module of APPSeCONNECT.
2.	Create a workflow or edit an existing workflow. The Create & Edit page opens.
3.	Drag and drop the Decision node to the design section, from the Process Property drop-down.  
4.	On releasing the node, the Decision node configuration window opens.  
![advance-decision1](/staticfiles/advance-workflow/media/advance-decision1.png)   
5.	The decision node has two radio buttons for providing the decision criteria:
* Select a Decision: All the decisions created or defined previously within the current organisation would be present in the drop-down. 
* Create Decision: Enable its radio button, user/implementer would be able to create a new decision criterion.
6.	User/Implementers can either select either of the two options. On enabling the radio button for create decision, users will be able to 
    define the decision criterion.
![advance-decision2](/staticfiles/advance-workflow/media/advance-decision2.png)   
7. Enter the name for the criteria and click on the Add criteria Button. The fields for entering the criteria appears. The fields are:
- Key : Specifies the tokens for implementing the decision. 
- Select: These are the operators for implementing the decision operation. User/Implementer needs to select the operators from the down, for execution the decision node conceptually.
- Value: Specify the value for the decision that needs to be implemented.  
![advance-decision3](/staticfiles/advance-workflow/media/advance-decision3.png) 
**Note: By Pressing the button `e` on the field `Key`, user/implementer can view all the tokens that are available for implementing decision to workflow.**
8.	Select the token from the list that appears and enter the respective value to the fields as per requirements.  
![advance-decision4](/staticfiles/advance-workflow/media/advance-decision3.png)   
9.	Once the criterions are provided, click on the SAVE Button.
After saving the configuration window for Decision, user needs to attach the node with the other nodes as per the decision position with 
respect to GET or POST.

**Note: When adding decision from the `Select a Decision` drop-down, user doesnot need to specify any tokens, the previously implemented token will be in use.**

