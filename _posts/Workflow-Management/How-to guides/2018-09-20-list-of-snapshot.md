---
title: "Listing of Snapshot for a Workflow for OP Agent"
toc: true
tag: developers
category: "Workflow"
menus: 
    workflow:
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

2. Click on the button and the following execution of workflow data gets fetched.

![workflowexe-snapshot](/staticfiles/workflow-management/media/workflowexe-snapshot.png)

The execution screen contains the following details of the workflow snapshot

* Execution Timestamp: This indicates the date, start and end time of the workflow.
* Time Taken: This is the time taken for executing the workflow.
* View button: This indicates the node level tree structure view of the workflow which shows the single execution 
details at the node level.

**Protip** `Currently 7 days data` can be viewed in the List of Snapshot and by `default 10 data view` is available 
in single screen listing of snapshot.
{: .notice--info}

3. Click on the *View button* node against a snapshot list of the workflow you want to view. The following screen 
appears.

![workflowexe-snapshot](/staticfiles/workflow-management/media/workflowexe-snapshot.png)

4. The screen above gives drill down node view of the workflow.

![workflowexe-processsnapshot](/staticfiles/workflow-management/media/workflowexe-processsnapshot.png)

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

The process of execution of every node is same as explained above, the only difference is there
for POST node while, where the resync bucket shows the message as `Success/Failure`depending on the workflow 
execution.

![post operation-resyncbucket](/staticfiles/workflow-management/media/post operation-resyncbucket.png)

**Protip** For execution of action nodes (support ticket, storage, webhook, email) only log view is available.
{: .notice--info}