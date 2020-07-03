---
title: "Basics of Source-Destination Mapping"
toc: true
tag: developers
category: "Transformation"
menus: 
    transformation:
        title: "Quickstart"
        weight: 13
        icon: fa fa-file-word-o
        identifier: transformationbasic
---

Mapping triggers the transformation process between the Source and the Destination Applications. 
Source and destination schemas are mapped in the Transform section of the touchpoint. 
This document will help you to know about the Source-Destination Mapping in APPSeCONNECT portal.

## Pre-requisites for Source and Destination Mapping

1.	Valid credentials for logging into the APPSeCONNECT Portal.
2.	[Choose APP](/getting%20started/configurations/#process-of-choosing-app) or [Create APP](/getting%20started/configurations/#create-application)
3.	[Create Connection template](/getting%20started/configurations-for-integration/#configuring-connector-while-creating-connection) 
The pathway for source-destination mapping section is provided [here](/transformation/overview/).

## Source-Destination Mapping

Mapping of the attributes of destination application with source application attributes is implemented by the process known as 
Source-Destination mapping.  
![sourcedestination-mapping](/staticfiles/Transformation/media/sourcedestination-mapping.png)
Mapping Processes are initiated at various level of Input Packets
1.	**For-Each loop** - This is used for execution on a block of code on each element in a collection of items. 
It is useful to display each item in a collection of items till when the loop is defined.
Under For-Each loop, Entities have been used and Variables are set under Entities.
2.	**Complex Object Collection** - This specify the mapping list within a complex object. This mainly includes the collection of complex object and attributes. 
3.	**Complex Object** - Complex Objects are the objects which are highly structured and large in size (can also be small) of Variable Representation Length (VLR).
4.	**Attributes** - Each target system configuration constructs an "attribute map" which contains all the attributes known by the system. 

Variables are defined by two types of scopes. 

1. **Root Variable** - Global variable which can used in any entity.
2. **Root Entity Variable** - is a local Variable which is generally used under the scope of an entity.

## Steps to Perform the Source-Destination (Attribute) Mapping

1. Log in with valid credentials in the AEC portal.
2. Choose any project and navigate to Connections- Choose a connection - View The Connection.  
![viewconnection-sourcedestination](/staticfiles/Transformation/media/viewconnection-sourcedestination.png)
3. The Touchpoints page will be viewed upon clicking the View the Connection button. Click on the Transform button.  
![transformbutton](/staticfiles/Transformation/media/transformbutton.png)
4. The Transformation Page opens up. Expand the For-Each Loop node for mapping the attributes. 
    Click on the OPEN button provided beside every attribute.  
![transformation-page](/staticfiles/Transformation/media/transformation-page.png)
5. The Mapping window opens up.  In the Mapping Space, fields for mapping is needed to be provided. 
   The User can also click on the entities/attributes to get it on the box.  
![mapping-space](/staticfiles/Transformation/media/mapping-space.png)

6. Click on the Submit option after the mapping is done in that attribute. Similarly other attributes can also be mapped.

**Note: If lookup mapping is required, select the options as required from the lookup type drop down option. 
And click on the checkbox**

**Note: The user can enable and disable the attribute mappings. The `Disabling Mapping` feature is not available for the 
attributes with the primary key.**

For more details on Attribute Mapping [click here](/transformation/steps-to-cutomize-prebuilt-mapping/)