---
title: "Understanding Components of Mapping"
toc: true
tag: developers
category: "Transformation"
menus: 
    transformationbasic:
        title: "Understanding Components of Mapping"
        weight: 3
        icon: fa fa-file-word-o
        identifier: tmappingcomponents
---
Mapping triggers the transformation process between the Source and the Destination Applications.
Source and destination schemas are mapped in the Transform section of the touchpoint. 
This document will help you to know about the components required for executing Source-Destination Mapping 
in APPSeCONNECT portal.

![Scenario1-GroupingCondition](/staticfiles/Transformation/media/mapping_defaultscreen.png)

## Components of Mapping

Mapping of the attributes of destination application with source application attributes is implemented by the process known as Source-Destination mapping. 
The Components present for implementing the Mapping process are:

1.	For-Each loop - This is used for execution on a block of code on each element in a collection of items. 
    It is useful to display each item in a collection of items till when the loop is defined. 
    Under For-Each loop Entities have been used and Variables are set under Entities. Every time the touchpoint is synced
    the loop undergoes the execution for the transformation instead of writing the logic multiple times.

**Note: The path provided beside the For-Each-Loop is the XPath of the XML for that touchpoint**

2.	Schema - Every touchpoint has its respective schema which can have the complex object collections and the complex object is listed. When the touchpoint is synced this schema is called for the execution of the touchpoint. 

**Note: For different touchpoints the object is different. For the touchpoint `Invoice Add` the object is `oInvoices` for `Simple Product Add` it is `oItems` and so on**

3.	Complex Object Collection - This specify the mapping list within a complex object. This mainly includes the collection of complex object and attributes.

4.	Complex Object - Complex Objects are the objects which are highly structured and large in size (can also be small) of Variable Representation Length (VLR).

5.	Attributes - Each target system configuration constructs an `attribute map` which contains all the attributes known by the system.

6.	Root Variable - These are the Global variable which can be used inside any entity. 

7.	Root Entity Variable - Root Entity Variable can be used several times in different parts of the transformation process underlying in the touchpoint.

8.	Namespaces - This feature is used to differentiate two XML files for avoiding the duplication and redundancy.

9.	Renderer - APPSeCONNECT provides a feature to define and format XML rules as needed while implementing Attribute Mapping. 
XML has a default expression which can be viewed in the XSL after the Mapping. 

This default expression can be overridden by the Renderer.



