---
title: "Implementing Xpath in Mapping"
toc: true
tag: developers
category: "Transformation"
menus: 
    overviewusecase:
        title: "Implementing Xpath in Mapping"
        weight: 5
        icon: fa fa-file-word-o
        identifier: transformationxpath
---


## Use Case Name

Handling XPATH in Mapping

## Brief Description

XPATH is an essential concept that is required when implementing mapping and transformations. XPATH access 
nodes in a hierarchical structure as represented in the XML file. [Click here](/transformation/understanding-xml-and-xpath/) to know more about XPATH.

## Actors

Implementers, Developers, Partners

## Preconditions

Organisation Creation & Connection Creation

**Note: In case of Custom Apps Touchpoints is needed to be created first for implementing Tracking.**
## Basic Flow
1.	Navigate to the touchpoint after login, for which the Mapping is to be done.
2.	Click on the Transform button on the touchpoint you have selected. The user will now be able to view the Transform screen of that touchpoint. 
3.	Expand the Transform node till the Complex Objects and the ComplexObjectsCollections are visible.  
**Note: In this case the touchpoint Business Partner add is used for the connection Magento2 and SAP B1.**
4.	In the ComplexObject `BPAddresses`, XPATH has been provided for mapping the attribute Street.  
![xpath-usecase](/staticfiles/Transformation/media/xpath-usecase.png)  
**Note: The XPATH should be provided based upon the INPUT packet generated after the sync process. As a prerequisite, the touchpoint should be synced for viewing the XML nodes structure hierarchy.**  
5. The XPATH mapped is `{ {street/item[1]} }`. [1] indicates the first position instance of the node item under 
   the element street shall be accessed.
6.	For easy know-how, view the input packet provided below.
![xpath-usecase2](/staticfiles/Transformation/media/xpath-usecase2.png)

**Note: XPATH can be mapped in any entity, be it a ComplexObject, ComplexObjectCollection or an attribute. XPATH can be used for mapping in variables too.**\

## Post-Conditions  

The user can view the successful sync of the touchpoints for the connection Magento2 and SAP Business One.

## Exception Courses

The user can view the error logs in the RESYNC Bucket of the agent (Cloud and OP), if the touchpoint fails to sync.
[Click Here](/transformation/troubleshooting/) to know more about the troubleshootings. 

## Frequency of Use

The user can implement rendering when required for any touchpoint.

## Assumptions

Not Applicable