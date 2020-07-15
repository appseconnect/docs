---
title: "Mapping and Transformation"
toc: true
tag: developers
category: "Connectors"
menus: 
    resttechnology:
        icon: fa fa-gg
        weight: 11
        category: "Mapping and Transformation"
        title: "Mapping and Transformation"
        identifier: restfiltersmapping
---
 
Given below is the mapping details for Rest Adapter required for data Integration.

### Basic prerequisite for Mapping: 
(A) Here the destination app has been configured using REST adapter and the destination App 
supports the request data without root element.

Omit Root: This attribute needs to be added to the transformation section when you need to remove any root tag 
from the transform packet as that root variable is not accepted by the destination application.

`Attribute name: OmitRoot`
`Type: string`  
`Mapping: True`

**NOTE: After the sync process, the output packet is checked and we find that the root tag has been removed.**

(B) Here Source app has been configured using REST adapter

maxDate: This root variable needs to be added to the mapping section when the source app is configured using REST adapter. 
This root variable fetch the date and time of the latest data record created in the Source app and store it so that whenever 
the sync is executed after the first sync, it does not fetch the old records everytime. This ensures quick sync process.

`Root variable name: maxDate`    
`Type: String`    
`Mapping: [sourcelib:WriteMaxDate(..,'{parent tag for each individual record}','{tag which as the value of the date & time when the record got created /updated}','1')]`     

Example: [sourcelib:WriteMaxDate(..,'Customer','createTime','1')]


















