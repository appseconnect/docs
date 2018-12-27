---
title: "Listing of Snapshot for a Workflow for OP Agent"
toc: true
tag: developers
category: "Workflow"
menus: 
    deployworkflow:
        icon: fa fa-link
        title: "Listing of Snapshot" 
        identifier: snapshotworkflow 
---

List of snapshot is a pictorial representation of the executed workflow at various node level. Here the user will
get the snapshot view of the workflow whenever executed. This feature of the workflow is beneficial to the users 
because they can now view the effective debugging at the node level in the user interface. 

After a successful execution of workflow the user can see the snapshot listing on the multiple time execution 
of the workflow and the latest listing is visible on the upper section of the list.

Steps to executing list of snapshot for the workflow:

1. List of Snapshot is present on the upper section of the workflow screen as shown below:

![snapshot-button](/staticfiles/workflow-management/media/snapshot-button.PNG)

2. Click on the `Snapshot`button and the following execution of workflow data will be fetched.

![workflowexe-snapshot](/staticfiles/workflow-management/media/workflowexe-snapshot.png)

The execution screen contains the following details of the workflow snapshot

* Execution Timestamp: This indicates the date, start and end time of the workflow.
* Time Taken: This is the time taken for executing the workflow.
* View button: This indicates the node level tree structure view of the workflow which shows the single execution 
details at the node level.

**Protip** `Currently 7 days data` can be viewed in the List of Snapshot and by `default 10 snapshot view per screen` is available 
in single screen listing of snapshot.
{: .notice--info}

3. Click on the `View button`  against a snapshot list of the workflow you want to view. The following screen 
appears. The screen above gives drill down node view of the workflow.

![workflowprocess-shapshot](/staticfiles/workflow-management/media/workflowprocess-shapshot.png)

5. Click on the Touchpoint (e.g: Sales Order Add/Business Partner Add) and this maximises and give details of nodes like
Get, Halt, Resume,Process, Post etc. as shown below

![getoperation-resyncbucket](/staticfiles/workflow-management/media/getoperation-resyncbucket.png)

7. Every node captures the following details as given below:

* Resync Bucket - This shows the status of the resync bucket wrt to the node. By default, Resync bucket opens up wrt to 
the selected node of the workflow. Resync Bucket gives information of the node being processed and it captures information 
like source id, destination id, status of the execution, message and additional data.
* Log Bucket - This shows the logs specific to a node/loop. The errors will be displayed, if any.
* File - This shows the XML File on our local systems,for the error will be shown directly in the FILE tab.  

By default Resync bucket tab is selected. 

9. Click on log bucket tab to view the Log bucket of the processed node as shown below.

![Getoperation-logbucket](/staticfiles/workflow-management/media/Getoperation-logbucket.png)

9. Click on File tab to view the XML File details.

![getoperation-file](/staticfiles/workflow-management/media/getoperation-file.png)

Here you can view the XML File with respect to the choosen node to sort out any errors in your local srver.

The process of execution of every node can be changed as per user requirement and some of them are explained below:

**Scenario 1:**

For **POST** node while, you can see that the resync bucket shows the message as `Success/Failure`depending on the workflow 
execution.

![post operation-resyncbucket](/staticfiles/workflow-management/media/post operation-resyncbucket.png)

**Protip** For execution of action nodes (support ticket, storage, webhook, email) only log view is available.
{: .notice--info}

**Scenario 2:**

Here we are executing a workflow with a **DELAY** element, where we are delaying the process by 10 seconds.
In the screen given below, you can see the Touchpoint `Product ADD` (with Variants) has failed and you can view the log bucket with errors. 

![delayelement-process-snapshot](/staticfiles/workflow-management/media/delayelement-process-snapshot.png)

In the below screen, you can see the DELAY element has been successfully executed.

![delayelement-execution-snapshot](/staticfiles/workflow-management/media/delayelement-execution-snapshot.png)

**Protip** For the DELAY node, only Log Bucket is generated.
{: .notice--info}

**Scenario 3:**

Here we are executing a workflow with a **Split-Process** Property. Here the execution is splitted into multiple process and you can see for each process,
files are generated as shown in t he screen given below.

![Split-Process-Snapshot](/staticfiles/workflow-management/media/Split-Process-Snapshot.png)

**Protip** For each split individual files are generated. You can double click on each of them to view the XML code inside. 

{: .notice--info}


**Scenario 4:**
Here we are executing a workflow with **Merge Process** property. You can see the `Resync Bucket, Log Bucket and File` for each of the merged process. 
In the Resync Bucket, you can view the Source ID, Status and the Message of the single merge process.

![Mergeprocess-Snapshot](/staticfiles/workflow-management/media/Mergeprocess-Snapshot.png)

**Protip** Execution of `Rule Process Property, Halt Node, Resume Element, Filter Element` will give similar node 
level view as explained above 
{: .notice--info}


**Scenario 5:**
Webhook is one of the Action nodes in workflow. Here, you will only be able to view the Log Bucket generated for webhook. 
Below is the Screen for Webhook Log Bucket.

![webhook-snapshot](/staticfiles/workflow-management/media/webhook-snapshot.png)

**Scenario 6:**
Email is another Action Node in workflow. Here, too you will only get the LOG BUCKET, generated. 
Below, is the screen of Email Action Log Bucket generated.

![Email-snapshot](/staticfiles/workflow-management/media/Email-snapshot.png)

**Protip** For all the ACTION NODES, you will only get the View of the Log Bucket.
{: .notice--info}