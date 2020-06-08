---
title: "Selfloop"
toc: true
tag: developers
category: "Processflow"
menus: 
    processnodeandlinks:
        icon: fa fa-gg
        weight: 5
        title: "Working with Selfloop" 
        identifier: selfloopprocesflow
---
### What is Loop node

In APPSeCONNECT Processflow using a Self-loop, we can repeatedly execute an individual node 
without affecting the other nodes that are linked with it. Lets take an example - If we draw a self-loop in GET 
element in Processflow it will ask for the no. of times it will be executed. Lets take a 
scenario where the source application associated can fetch 10 records at a time 
but the user wants to fetch a minimum of 50 unsynced data at a time if it is available. Here user can
implement a self-loop with 5 occurrences. Self loop enables the user to 
iterate a node execution as per the configuration.

Self-loop is an interesting functionality as it can be used in a node to iterate as per configuration. 
Presently three option is available to configure self-loop: 

- Until data available: This option allows a self loop execution over a Node where self-loop will continue to execute until data available in the source app or node.
- Number of occurrences: This option allows Number of iterations on node over which self-loop implemented will execute.  
**User can set Maximum 999, to iterate the occurrence** 
- Timespan: This option allows the User to define the duration for which the self-loop will iterate the node over which it defined.   
**User can set Maximum upto  24 hrs, 59 mints, 59 seconds, to iterate the occurrence**

You can execute a Self loop by choosing any one one of the three given options. 
Although the availability of data is always the prime criteria for executing the 
self-loop.

### Working Principle
[INSERT SELF LOOP LINK VIEW IMAGE]

Self Loop Execution on the nodes:

|Node|Requirements|    
|----|--------------|    
|Get Node| Fetching Large Number of data in smaller batches, self-loop configuration over get node will iterate for the option chosen in the configuration|
|Merger Node|Scenarios where splitter node is the predecessor node of Mapper node, self-loop over Mapper will iterate until splitter output available|  
|Post Node|Scenarios where splitter or Merger node is the predecessor node of POST node, self-loop over post node will iterate until splitter or Merger output available|

`Self-loop Configuration - Until data available`   
`Self-loop Configuration - Number of Occurence`  
`Self-loop Configuration - For a Timespan`  

**A. Choosing Self Loop Configuration - Number of Occurence**

1. In the self loop node, Select and choose the option `Number of Occurence` radio button. The following 
screen appears.   
[SCREENSHOT]
2. Here you have to provide the value for the no. of times the Self Loop will be executed over the node.  
(a) The input value of no. of times/occurence should be an integer number.  
(b) The value range is between 1 to 999 (min to max value).
3. Now provide the Description of the Self-loop configuration in the Description field which is mandatory.  
4. Self-loop execution over the GET/MAPPER/POST node will be executed as per the number of occurence defined 
   by you or until data availability. 

**B. Choosing Self Loop Configuration - For a Timespan**
1. In the self loop node, Select and choose the option `Time Span` radio button. The following 
screen appears.   
[SCREENSHOT]
2. Now you get the option to input the duration for which the Self Loop will be executed.
You have the option for the Time-Span in Hours, Minutes & Seconds. Enter the duration as per your requirement.  
(a) Hours: The value range of hours is from 1-24  
(b) Minutes: The value range of minutes is from 1-60  
(c) Seconds: The value crange of seconds is from 1-60  
[SCREENSHOT]  
3. Now provide the Description of the Self-loop configuration in the Description field which is mandatory.
4. Self-loop execution over the GET/MAPPER/POST node will be executed as per the given timespan defined 
   by you or until data availability.  

**C. Choosing Self Loop Configuration - Until data available**

**(a)Maximum no. of characters allowed in the Description Field will be Max.  
  (b)Self-loop over the GET/MAPPER/POST node will be iterated for the duration as
   defined by the user or until data availability.  
  (c)Data availability is the first condition for execution of the self-loop, irrespective
  of the options choosen  for execution.** 

Business Scenarios for Self loop Usabilty & Execution:

**(A) Using self loop in Get node, when the source application is unable to fetch more than
a limited number of records at a single execution.**

(B)

