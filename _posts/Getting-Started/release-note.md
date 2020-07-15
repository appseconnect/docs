---
title: "2020 Q2 Release Notes"
toc: true
tag: developers
category: "2020 Q2 Release Notes"
menus: 
    ReleaseNotes:
        title: "2020Q2 Release Notes"
        weight: 1
        icon: fa fa-wpexplorer
        identifier: 2020Q2ReleaseNotes
---
Product Release Version: 4.7.0   
We are pleased to present APPSeCONNECT 4.7.0   
Patch code and the release notes were published and last revised in July 2020. 
Updates in this release include New Feature Development & Enhancements, UI Enhancements, 
Integration Enhancements, Adapters & Plugin Development.
     
Log in to the portal to access the latest version of Workflow, Environment, etc. 
along with the newly introduced Process flow and download the latest version of 
`APPSeCONNECT AGENTS, PLUGINS, ADAPTERS`. The following section shows the list related 
to APPSeCONNECT integration and Adapter development, as on July 2020 release.   

## (A) New Features and Enhancements

###  1.  Process Flow Management (Beta Version Release)  
We have Introduced APPSeCONNECT Process Flow suite in our 2020 Q1 release which 
features an extensive interface that provide the ability to easily create 
business requirements designs   to make out robust process flows simple for 
catering your business requirements.   

We added more features for the users in 
this release which includes – `Self loop, Splitter Node, Merger Node, Decision Node, 
Unassign Lookup, Auto Retry` and many more. These features are exciting and helps 
you to easily plug and play with data during an integration using process flow.     

Highlights of the process flow management functionalities are mentioned   below:  
Designer 

#### Designer

In the designer area of Process flow, we have come up with the following features

**(a) Self-loop for Iterating in Loop Variable**  

You now have the flexibility to use loop in a node to iterate as per configuration. Presently you will get two options to configure self-loop. 
* Until data available - To iterate over a node and continue to execute until data is available in that node.
* Number of occurrences - To choose number of iterations on node over for self-loop execution.  The maximum limit you can set for the iteration is 999.

**(b) Splitter Node for Load Balancing in Nodes**

You can now manage huge volume of data in process flow with the availability of Splitter node
* To Split large volume of data.
* To process and validate each data individually.
* To reduce the load to successive node.

**(c) Merger Node for Managing Multiple Records**  
 You can now manage collection of records in order   
•	To Merge multiple records.  
•	To reduce number of hits into successive nodes.  

**(d) Decision Node for Controlled Execution** 

You can now use decision node in Process flow   
* To carry out an execution based on the condition tables.
* To control execution path based on IF-ELSE criteria. 
* To evaluate the condition using Static Value /Generic Functions/ Attribute.

#### Deploy

**(a) Lookup Repository Deployment**

You can now manage and create Lookup types in form of tables for the organisation.

* To unfix & unassign the lookup warnings in the Deployment Wizard for quick implementation of changes with respect to execution
* To deploy Reference tables such that the lookup mapping used for the attributes syncs correct data to destination application

**(b) Support for Auto Retry for Failed Transaction**   
You will now get  Auto retry feature in Processflow
* To sync failed data during execution. 
* To set re-sync into either Manual or Automatic mode on defined Schedule.

**(c)  Custom Appresource Functions for Mapping Requirements**  
You will now get Custom Appresource function in Process flow, where you can create AppSource and use in all your mapping requirements. 

* To share and reuse the custom Appresource function, you get the flexibility to create it in app level. 
* To restrict reusing of the custom Appresource function, you can define within the specific mapper node.


**Workflow Snapshot**   
Fix Given:      
      For Workflow (Cloud Agent Execution) Snapshot generation is happening for huge data sync, however the POST node was blank.    
      
With this release, users can view the workflow POST node with accurate data of execution for both success and failed data.    

**Workflow Self Loop Iteration**

Fix Given:   
      Workflow with Self Loop allowed only '2' in the corresponding field to execute the self-loop  
      
With this release, users can execute a workflow, enabling Self loop with values ranging from `1 to 99`. 
Therefore, you can run the self-loop multiple times per your business requirements.


#### Manage 

**(a) Snapshot Operation for Hosted Environment** 

APPSeCONNECT now provides the user with snapshot data view for Hosted Environment.  

To view node specific data for hosted environment during integration process.

**Feeds Message Display**   
Fix:     

* Wrong message is getting updated in the feeds after updating the schedule interval of a workflow from the OP Agent from Auto to Manual.    
With this release, users will now get proper message updated in the feeds after scheduling the time interval of workflow from Auto mode 
to Manual in the OP Agent.      

Fix:  

* Changes made in the schedule interval of the on –Premise workflow is not displayed properly  
With this release, Users will now get Updated feeds with proper messages after scheduling the time interval of workflow from On –Premise  Agent.

**New User Registration Email Activation**  
Fix: 
* Broken Hyperlinks was present in the New User Registration Email, which was taking into erroneous page.      

With this release, New User Registration Activation Email Template is fully updated with fixation on broken links to the resources of getting started with our platform easily.

**View of Support Ticket**    
Fix:
* All tickets were visible irrespective of the customer or Organization.
 
With this release, this issue has been resolved as Ticket View has been upgraded and streamlined and users can view organization specific tickets only.

## (B) New Integrations

Given below are the integration areas for business process automation  

**(1) Sage 300 to Magento 2 B2C**  
This feature syncs data from Sage 300 to Magento 2 B2C and vice versa so that sync requirements between the applications are met. 

(a) Here the following components will be synced successfully from Sage 300 to Magento 2 B2C with all details.  

* Invoice Add  
* Delivery/Shipment Add  
* Inventory Control (IC) Product Add  
* Inventory Update  


(b) Here the following components will be synced successfully from Magento 2 B2C to Sage 300 with all details.  

* Customer Add 
* Customer Update  
* Sales Order  

**(2) Sage 300 to Shopify B2C**

This feature syncs data from Sage 300 to Shopify B2C and vice versa so that sync requirements between the applications are met. 

(b) Here the following components will be synced successfully from Shopify to Sage 300 with all details.

* Customer Add
* Customer Update
* Sales Order


(b) Here the following components will be synced successfully from Sage 300 to Shopify with all details.  

* Delivery/Shipment Add 
* Inventory Control (IC) Product Add 
* Inventory Update

## (C) Adapter & Plugins
These are the Adapters which has been enhanced in this release:

### (a)	Enhanced Lightspeed Adapter   
 Enhanced version of Lightspeed adapter presents you with the following features
* Custom browsing Supported - Lightspeed adapter latest version supports custom browsing thereby enabling dependency download automatically.  
* Lightspeed app validation in agent, provides dependency download.

### (b)	Enhanced Zoho CRM Adapter 
Enhanced version of Zoho CRM is enabled with the following bug fix with 
Fix:
* Shopify Credentials Base URL is getting replaced by Zoho CRM URL.
With this release, the updated Zoho CRM adapter version allows saving credentials, and these should not be replaced by other app's credentials during integration process.

### (c)	Enhanced Magento 2 Adapter
Enhanced adapter for the application Magento 2  presents you with the following feature
* Single Token Authentication       
o	Users can now validate Magento 2 enhanced adapters using Integration Access Token generated on the Magento2 Platform.   
o	The single access token can be used in all API calls made on behalf of the integration, thereby reducing the API hits.   
o	This provides the flexibility of providing access to only those modules that are required for the Integration Process.  

### (d)	Enhanced Sage Adapter
Enhanced Sage Adapter is now enabled with the following bug fixes which includes optimized codes.
Fix:  
* Order Syncing fetching 409 conflict error and not giving error info in the log bucket.
With this release, users will be able to view Log information which will be traceable to resolve the issue.
Fix:  
* For successful Data sync log is throwing incorrect error log information 
With this release, users will be able to view Log with valid information as expected
Fix:  
*  Deleted primary address details in Shopify is still visible as primary ship to address record in Sage 300.
Primary Ship to Address details delete issue has been resolved with the upgraded version.

(e)	Enhanced Priority Adapter
Enhanced adapter for the application Priority is now enabled with the given bug fix.
Fix: 
* Priority adapter was not able to generate Output packet after data gets posted in Priority
With this release, the output packet is getting generated as expected after data posting.  
 
### (E) Release Component Versioning Details

|Area|Component|Version|
|---|---|----|
|Agent|Cloud|4.7.0|
|Agent|On-Premise|4.7.0.0|
|Adapter|Lightspeed|4.4.5.0|
|Adapter|Magento2|4.6.5.0|
|Adapter|Zoho CRM|4.4.13.0|
|Adapter|Sage|4.2.4.0|
|Adapter|Priority|4.2.3.0|
|Portal|WebApp|4.7.0|
|Portal|WebAPI|4.7.0|

As always for any support, please mail us to support@appseconnect.com.
