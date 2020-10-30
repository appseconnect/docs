---
title: "Migration of Workflow to Processflow"
toc: true
tag: developers
category: "Processflow"
menus: 
    processflow:
        title: "Migration of Workflow to Processflow"
        weight: 10
        icon: fa fa-file-word-o
        identifier: migration
---

APPSeCONNECT Process Flows suite features an extensive interface for the users. 
With the aid of Process Flow feature, users can now graphically organize, create and 
view the data flow of a process thereby enabling customers to design integration anytime 
and anywhere with the help of our cloud portal. 

So now we are providing the flexibilty to migrate the existing workflows from your 
organization to Processflows in a  hasselfree way and thus aid you continue your business integration .
with the advanced graphical interface of processflow.

## Benefits of Migration to Processflows   

1) Processflows are touchpoint independent and you get the flexibilty to
select application in the interface and continue with the operation.  

2) CUSTOMIZE AND EXTEND BEST PRACTICES  
* Build customized business-related flows and templates to use it across departments for best practices.
3) STREAMLINE AND AUTOMATE COMPLEX BUSINESS PROCESSES  
* Provide expertise and team collaboration to sell more effectively.  
* Enables quick decision making & Learn from inefficiencies  
* Eliminates Manual work & reduces human error  

4) Quick & Easy Deployment at one go   
5) Bundling of Processflows (Packaging) are available which can be
shared across organisation. 
7) Enhanced Check features for Unfinished Deployment & Redeployment.


## Prerequisites for Migrating Workflows to Processflow  
* You need to have valid credentials for login into the portal.
* You need to have workflows designed/executed for migration to process flows.
* Ensure the workflows are in active state before migrating.
* Inactive workflows are not migrated.


## Steps to Migrate Workflows to Processflow
1.	The first step to migrate your workflow to process flow is to share your Organisation Id with the implementer.  
2.  Ensure the workflows are in active state before migrating.    
![migratedpf-active-wf](\staticfiles\processflow\media\migratedpf-active-wf.PNG) 
3.  Once your workflow is migrated to processflow you can view them under Processflow>>Migrated-Workflow
folder, under Processflow listing page.      
![migrated-pf-listing](\staticfiles\processflow\media\migrated-pf-listing.PNG) 
4. Click on the folder to view your migrated workflows to processflow, enlisted there.      
5. You can Edit/Delete the migrated processflows, by clicking on Action menu.
![edit-migratedpf](\staticfiles\processflow\media\edit-migratedpf.PNG)
6. Now this migrated workflow will behave similar to the processflow and you can 
edit the Processflow from teh [designer](/processflow/designer-processflow/) section and carry on with the [deployment](/processflow/deploying-and-executing-processfloww/) process.
7. The migrated workflow to process flow should contain all the mapping data's as provided in workflow
8. You can make any mapping/configurational changes in the migrated processflow per requirement.  
9.  You can also rename the migrated processflow in the designer section.
 
**NOTE: (a)  Suppose your Organisation has ten workflows, and you want to migrate four workflows out of all.
In this instance, you need to make those four workflows active and rest six needs to be in inactive
mode. Else either ten workflows (if active state is enabled) will get migrated to processflows. Or if none of the 
workflows are in active stage, they won't get migrated.  
(b) Presently there is no migration support for Workflows implemented with Webhooks, Email & Filter Node**

