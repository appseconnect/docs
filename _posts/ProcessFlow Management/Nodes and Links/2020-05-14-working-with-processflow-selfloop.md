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

1.	Link up the self-loop in the node where you need the loop to perform. The node configuration page opens.

[Image]

2.	Select the check box against the option **Until Data Available**. You will not have to provide any additional details as in **Self-Loop for Time Span** & **Self-Loop for Number of Occurrence**.

**Note:** 

- On selecting this option, Self-Loop will execute its execution until all the Data are received for that single instance. 

- Self-Loop: Until Data Available will display only one iteration when checked for the Snapshot.

- Self-Loop:Until Data Availble will stop its execution when there is no further data availble send from its predecessor node or from the data Source.

- Self-loop over GET node will not be executed during the `RETRY` process if the GET node is connected to the START node as its predecessor node.

[Image]

3. Enter the Description of the self-loop node configuration window.
    
4. Self loop over these nodes GET/MAPPER/POST will be executed until all the data are fetched from the predecessor node.

**(a)Maximum no. of characters allowed in the Description Field will be Max.  
  (b)Self-loop over the GET/MAPPER/POST node will be iterated for the duration as
   defined by the user or until data availability.  
  (c)Data availability is the first condition for execution of the self-loop, irrespective
  of the options choosen  for execution.** 

### Business Scenarios for Self loop Usabilty 

**(A) Using self loop in the source application - Leverage Application Capabilities to accept multiple 
records in a single request/execution.**

Here to repeat actions until a condition gets met, you can create a `Self-loop`. Here you have to apply Self loop 
in the Source application. This will first run all the actions inside the loop, and then checks the condition or state. 
If the condition is met, the loop stops. Otherwise, the loop repeats to extract the bulk data's (unsynced) till all are
fetched. Thus with the aid of Self loop user can fetch bulk data (with the defined configuration in the self loop)
and execute a sync operation successfully to the destination application.

Example for Execution:  Start node-> Get Node(SELF LOOP)-> Mapper -> Post

**(B) Using self loop in the source application & destination application - When both the Source Application & destination application
 is unable to sync bulk records at a single execution.**    
One of the key elements for integration is processing and exchange of large amounts of data. 
To ensure that these scenarios are executed without any issues, especially related to memory, 
you can use the Self-Loop option in Processflow Integration in APPSeCONNECT. You can easily use this 
Selp loop in both the source and destination application in the Integration Process and invoke 
that process flow is executed and bulk data is synced using a Self Loop. This Process incorporates splitter node
for splitting bulk data into chunks of data for reducing data load in destination application.

Example for Execution:  Start node-> Get Node(SELF LOOP)-> Mapper -> Split-> Post (SELF LOOP)

**(C)Using self loop during data transformation - Data Loss Prevention For Processing number of input packets from 
Source Application to Destination Application**

Data loss Prevention for multiple input packets received during tansformation can be achieved by applying
Self Loop on the mapper node thus enabling to post all the data packets received during transformation.

Example for Execution:  Start node-> Get Node-> Split-> Mapper (SELF LOOP)-> Post