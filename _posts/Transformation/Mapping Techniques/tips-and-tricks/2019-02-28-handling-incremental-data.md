---
title: "Handling Incremental data"
toc: true
tag: developers
category: "Transformation"
menus: 
    transformtipsandtricks:
        title: "Handling Incremental data"
        weight: 1
        icon: fa fa-file-word-o
        identifier: handlingincrementaldata
---

This is a very common scenario where syncing records incrementally in one direction between two applications, occurs. 
An incremental (or "delta" ) sync is a process where the data records that have changed (created or modified) after the last time the integration ran as opposed to processing the entire data set every time. 
It is the favoured approach for most point-to-point integration scenarios since by restricting the number of 
records being processed to only what has changed, it permits the integration to run more rapidly 
and proficiently which in chance allows it to run more frequently to keep systems up to date.
Designing and executing an incremental sync does require more effort than simply syncing all records every time. 

However, if you have got thousands and thousands or even hundreds of records, when you try to shift through error logs,
or you start exceeding API limits, or the integration takes hours to run, that extra effort up front will pay off.

The three strategies we will review are:

**BEST: Extract by "Flag" Field Value**   

**GOOD: Extract by Last Modified Date**     

**LAST RESORT: Change Data Capture**    

BEST: Extract by "Flag" Field Value
On completion of an integration successfully, records or data are extracted based on the value of some status or "flag" field. 
On integrated for the second time, different values are updated in this field so to avoid duplicate data.  
This option provides the End users, the ability to control the sync behaviour by modifying values within the
end application. Therefore, it is always wise to use this option.

GOOD: Extract by Last Modified Date
Another option to extract data is according to that of the time-stamp. In this approach, records are extracted 
based on the value of their last modified date or created date, where the field being greater than date, when the 
integration ran the last time, or the most recent record synced previously.

LAST RESORT: Change Data Capture
This option is, when, neither of the previous options are applicable. Here, the integration process must retain 
the entire set of data from the last execution in a "cache" so that it can be compared with the current data set. 
Through this, Unique data can be identified in terms of Addition, Modification and Removal.