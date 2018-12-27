---
title: "Basics of Source-Destination Mapping"
toc: true
tag: developers
category: "Transformation"
menus: 
    transformation:
        title: "Mapping"
        weight: 3
        icon: fa fa-file-word-o
        identifier: transformationbasic
---

Mapping is done to initiate the transformation process successfully between the Source and the Destination apps. This document will help you to know the Source-Destination Mapping in APPSeCONNECT portal.

## Source - Destination Mapping

Source-Destination mapping is used to map the attributes of destination application with source application attributes.

![sourcedestination-mapping](/staticfiles/transformation/media/sourcedestination-mapping.png)

Mapping is done at various level of Input Packet.

1.	**For-Each loop** - This is used for execution on a block of code on each element in a collection of items. 
It is useful to display each item in a collection of items till when the loop is defined.
Under For-Each loop, Entities have been used and Variables are set under Entities.

2.	**Complex Object Collection** - This specify the mapping list within a complex object. This mainly includes the collection of complex object and attributes. 

3.	**Complex Object** - Complex Objects are the objects which are highly structured and large in size (can also be small) of Variable Representation Length (VLR).

4.	**Attributes** - Each target system configuration constructs an "attribute map" which contains all the attributes known by the system. 

Variables are defined by two types of scopes. One is `Root variable` which can be used by any entity. 
Second is `Root Entry Variable` which is generally used under the scope of an entity.