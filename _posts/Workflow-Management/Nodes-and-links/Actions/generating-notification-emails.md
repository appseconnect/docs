---
title: "Sending Emails"
toc: true
tag: 
     - developers
     - actions
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    nodesaction:
        icon: fa fa-link
        title: "Emails" 
        identifier: nodesactionemail
---

### Email Action Notification 

This node is used to send an email notification to a user during workflow execution. For example using this node we can trigger an email when a node executed successfully. 
In email message body we can use various predefined tokens to construct an email message body. 

|  Element Name | Description  |
|---|---|
| To  | Email recipient  |
| Subject  | Subject of the Email  |
| Tokens  | Some predefined tokens used to build email body|
| Body  | Email body |


**Mail Tokens**

### Workflow showing Email Action

**Application Used Magento2 and SAPB1**

Here you can view a workflow with touchpoint `Invoice Add` and `Email` Action is used.

![EmailAction](/staticfiles/workflow-management/media/Email/EmailAction.png)

### Tokens

1. Currently these are the tokens present in APPSeCONNECT as shown below. 

![Emailtokens](/staticfiles/workflow-management/media/Email/Emailtokens.png)

A. Source Input:${SourceInputData}$
Connects the corresponding Source Input datas with the Email Body.

B. Tag: ${Tag}$
Displays the corresponding data for the tag token.

C. Started At: ${StartTime}$
Displays the Start Time of the integration in the mail body.

D. EvaluateXPath: ${EvaluateXPath ("data","Path")
Provides the details, corresponding to the token EvaluateXPath.

E.	Evaluate Output: ~{EvaluateOutputData("Path")}
Provides the details, corresponding to the token EvaluateOutputData.

F.	Ends At: ${EndTime}$
Displays the End time of the integration in the mail body.

G.	CurrentTime: ${CurrentTime}$
Shows the time, when the Execution operation were executed.

H.	Source Output: ${SourceOutputData}$
Provides the details, corresponding to the token Source Output.

I. 	ExecuterType: ${ExecuterType}$
Provides the details, corresponding to the token Executer Type.

J.	EvaluateInput: ~{EvaluateInputData("path")} ~
Connects the corresponding Evaluate Input token with the Email Body.

K.	WorkflowName:

2. Provides the details corresponding to the token Workflow Name.

3. Users can implement this token in the `Email Action` by attaching it with Email Body.

![Emailbody](/staticfiles/workflow-management/media/Email/Emailbody.png)


### Troubleshooting Area 

UDF needs to be created for the attribute U_InvoiceId in SAP B1 inside the table Marketing Documents.
Pathway for UDF-Tools> Customization Tools> User-DefinedFields-Management> Marketing Documents> Title

**Note: For the EMAIL Action Node only the LOG BUCKET will be generated in the Process Snapshot View**
