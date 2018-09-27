---
title: "Important Terminologies"
toc: true
tag: developers
category: "Workflow"
menus: 
    workflow:
        title: "Terminology" 
        icon: fa fa-file-word-o
        identifier: workflowterminology
---

This article demonstrates the important terminologies that you need to consider while using our Workflow system.

- Flow 
- Touchpoint - Touchpoints are special connections which map the source entity for a particular action with the destination entity for a particular action. By generating a process of transforming and pushing data for every touchpoint. Thus, in other words, Touchpoint is said to be the unit of pulling and pushing data.

- Action - As a user, if you want to perform some actions in your Workflow such as sending an email notification or raise every time a touchpoint encounters XSLT transformation failure or save the file which failed to be synced for later reference then one can use the Action node. This action node basically performs some real-time action in the Agent or in the cloud, This node currently can perform actions like:

   1.Email: Sending Email notification to the user account which is currently logged in to the admin portal.
   2.Support Ticket: Raising a support ticket to the cloud automatically.
   3.Webhook: Webhook is used for sending some data(information) to an external application apart from the destination application with the help of an URL which would hit directly the web service of that external application.
   4.Archive Output: This option will allow the user to save the processing file at certain state intact in a location at the remote server for future reference.

- Filters- The filter is a special kind of data manipulation node, that uses criteria to produce a subset of data 
  collection from original data. These criteria are written using xpath of the parent file.
- Links - 
- Nodes - Nodes are associated with a particular action which uses specific action filters and credentials  mentioned to the application to get a response back to APPSeCONNECT. Each node in APPSeCONNECT workflow is tied to a particular connection, such that when the node is executed the data from that particular Application is generated 
and responded back to the application workspace. 
- Properties - Properties contains the details of that node/Touchpoint in the workflow creation panel which is
  currently selected.     
- Scheduler - APPSeCONNECT is all about connecting two Apps together so that they can execute certain process 
 periodically and sync data.The scheduler will allow you as a user to individually specify how many times you want to schedule a Workflow to execute, its recurrence minutely or hourly etc. It gives you granular level scheduler for each and every Workflow, which by default will use 5 minutes interval.
- Debugging - Debugging is the process of finding and resolving defects or problems within a computer program that 
  prevent correct operation of computer software or a system.   
- Output - 
- Resync Bucket - APPSeCONNECT uses Resync Bucket to keep track of all the items that are getting synced. There are  mainly four states that an item can go through from Resync Bucket.For Workflow we have implemented the same resync  bucket but this Resync bucket will have multiple touchpoint records. The user will be able to resync the data
 touchpoint wise or else Check all at once if required. Delete, Purge or Export options will be available in Agent's  Resync Bucket.
   
   1.Unprocessed: This state is when the item is not synced and also the Transformation is not performed correctly. 

   2. Skipped: These items are forcefully skipped by the adapter, hence our agent will not allow you to sync them again.

   3. Failed: These items are failed at the point of the instant when it wanted to sync. These items will be again resynced from the resync bucket. 

   4. Success: These items went through the entire process and succeeded through the push operations. 


- Logs
