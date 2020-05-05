---
title: "Understanding Touchpoint Dependencies"
toc: true
tag: developers
category: "Transformation"
menus: 
    overviewusecase:
        title: "Understanding Touchpoint Dependencies"
        weight: 3
        icon: fa fa-file-word-o
        identifier: touchpointdependency
---
## Use Case Name

Touchpoint Dependency

## Brief Description

Touchpoints are the point of action which when triggered transfers informations between the schema/entities. This happens when the attributes of the source entity are mapped with the attributes of the destination entity of that touchpoint.
Touchpoints are needed to be triggered in an order as each touchpoint's serves each purpose. 

For Instance: Before triggering the touchpoint `INVOICE ADD, the touchpoint ORDER ADD` is needed to be triggered before and before triggering 
order add, `CUSTOMER ADD or BUSINESS PARTNER ADD` is needed to be triggered. 

This is done to remove discrepancy with the customer records. So this raises a dependency factor among each of the touchpoint.

## Actors
 Implementers, Developers, Partners.

## Preconditions 
Organisation Creation & Connection Creation.

## Touchpoint Dependencies

APPSeCONNECT has the feature to setup these dependencies and is categorized accordingly:

**1.Pre-Task:** This kind of dependency is when the related touchpoint needs to be synced ahead of the primary touchpoint.

**2.Post-Task:** This kind of dependency is when the related touchpoint is needed to be synced immediately after the sync process of the primary touchpoint. 
   Therefore instead of triggering the sync process two times, dependency setup can be done for the primary touchpoint.

**3.In-Process Task:** This kind of dependency is when the user requires to halt the operation of the primary touchpoint,
   for getting the related data from the source application in order to execute the related touchpoint. 
   The primary touchpoint will resume immediately after the related touchpoint executes.

For Instance: Suppose before executing the touchpoint `ORDER ADD` an `In-Process` Task is executed for the touchpoint 
Business Partner Add where, all the orders will be fetched but will be halted for the related touchpoint to get synced. 
This is done to reduce the discrepancy with the data alignment. Like if the Business Partner Touchpoint is synced
all the customer would be fetched, and after a minute the ORDER ADD touchpoint is synced now the discrepancy might happen 
as within that period of time some more order might appear. Therefore, the In-Process Task is initiated to reduce the 
data discrepancy.

**4.Post Acknowledgement Task:** This kind of dependency is implemented when the result from the primary touchpoint is served 
as the input of the related touchpoint. For e.g. order increment id of sales order serves as the primary key for the invoice add.

**5.Post-Input Task:** This kind of dependency is implemented when the data fetched from the primary touchpoint serves as the source data of 
   the related touchpoint. 

For Eg: In case of the Order `add touchpoint` and the Guest` Customer Add touchpoint`, the data fetched from the source of the primary touchpoint 
(in this case, Order Add) acts as the source data for the related touchpoint, letting both the task to work without any discrepancy.

## Prerequisite

1. Need to have a valid APPSeCONNECT Account.
2. Create connection for which the dependency setup is to be done.
3. Create Touchpoints if any of the application used is a custom app.
4. Make sure the touchpoints are active, before setting up the dependency.

## Basic Flow

1.	Login to the APPSeCONNECT portal and Navigate to the touchpoints page.
2.	Select the touchpoint which will be acting as the primary touchpoint (in this case, the touchpoint used is Invoice Add). 
    Click on the dependency icon in the touchpoint.
![touchpoint-dependency1](/staticfiles/Transformation/media/touchpoint-dependency1.png)
3. The Dependency setup page opens up. On clicking the expand button, the node expands up to show the dependency touchpoints present. On clicking, 
    the PLUS Symbol (in BOLD), new node opens with the field present to setup the dependency.
![touchpoint-dependency2](/staticfiles/Transformation/media/touchpoint-dependency2.png)
4. In the drop-down menu of the field EVENTS all the dependency tasks are displayed. Click on any of them for selecting the task.
![touchpoint-dependency3](/staticfiles/Transformation/media/touchpoint-dependency3.png)
5. Select the related touchpoint from the drop-down list, for which the dependency is to be setup. And click on SAVE.
![touchpoint-dependency4](/staticfiles/Transformation/media/touchpoint-dependency4.png)
6. Similarly other touchpoints can also have dependencies and in the similarly way the setup is to be done for 
   any other dependency task required.

## Post-Conditions
The user can view the successful sync of the touchpoint Invoice Add as in this case.

## Exception Courses
The user can view the error logs in the RESYNC Bucket of the agent (Cloud and OP), if the touchpoint fails to sync for any cases.

## Frequency of Use
The user can sync the touchpoint whenever required.

## Assumptions
Not Applicable
