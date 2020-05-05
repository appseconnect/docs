---
title: "Handling Dependent data"
toc: true
tag: developers
category: "Transformation"
menus: 
    transformtipsandtricks:
        title: "Handling Dependent data"
        weight: 2
        icon: fa fa-file-word-o
        identifier: transformdependentdata
---


Data dependency is a concept which requires the data which are mutually dependent on one another to be kept in sync. 
As dependent data is always required to be transferred during the primary data synchronization, these data is somewhat
 inseparable to make any meaningful data on the business application. For instance, let us suppose, a reference of one
 particular data is present inside another process, such that you need the data to be available in first place to complete
 this operation, in such case, we manage the data synchronization so that the dependent data is synched before doing
 the dependent data sync. While defining business process integration, you need to identify dependencies between APIs
 and processes correctly to create workflow such that the data between application can feely flow.

Workflows are made in such a manner, so that the data dependencies are maintained correctly inside one single workflow
 and data from one business process could be used to another.

## Types of dependencies

Pre-Task : Dependent touchpoints that are executed before the main task. The touchpoint will be executed 
independently with both Get / Push being called. In case of workflow, two touchpoints are placed vertically
 one after another to execute them sequentially. 

Post Task : Dependent touchpoints are executed after the
 main task is executed. The touchpoint will be executed independently with both Get and Push being called. 

Post-Acknowledgement Task : Dependent touchpoints that will take the output of main task and execute the task. 
While defining this touchpoint you need to make sure the Source entities map with the output of the main touchpoint. 
Here only Push operation will be getting executed. We draw a line from the Post node to execute another touchpoint. 

Post-Input Task : The post input touchpoint will be passing the same input data to the main touchpoint. 
Here only the Push operation will be executed. In this case the same input from Get is sent to another process for 
execution. 

In-Process Task : Dependent touchpoints that gets executed in between Pull and Push operation 
It takes the filtered output of the main task fetched through Get operation, execute itself and then 
Push operation is performed.

Using workflow you can solve any kind of dependencies present in your data.