---
title: "Merger Node"
toc: true
tag: developers
category: "Processflow"
menus: 
    processnodeandlinks:
        icon: fa fa-gg
        weight: 5
        title: "Working with Merger" 
        identifier: mergerprocesflow
---
### What is Merger Node?

This node is used to merge smaller data chunks into a single data packet, in order to avoid
multiple hits to the application. The Merger Node combines multiple XML documents into a single element.
 
**Prerequisites: All input documents should have the same set of schema and attributes. Input document has to be in XML format**

Like a `SPLITTER` node, it also has Four Components Node - Description, XPath, Entity Name
and Batch size. For example, you have specified a batch size of 10 in a `MERGER` node then 
it will take 10 data packets where each packet contains a chunk of data and merge them into a single data packet.

Merger Node Input file -  can have one or more document input.
Merger Node Output file - can have one or more document output.

- **Node Description:** Here, you need to provide a description to the merger node.
- **Entityname** : Here specify the name which will act as a root element under which data will be merged.
- **XPath** : Here user need to specify a XPath based on which data will be fetched from each data file for merging.
- **Batch Size** : Here, you need to define the size of the batch as how many should be 
merger to form a single packet. For example: You have 20 data that need to be merged 
and if the batch size is provided as 10 therefore, merger node will form 2 packets 
which will contain 10 data in each packet merged. 

**Note: Batch size should not allow 0 as input and the range of batch size value 
should be 1-999.**


### Working Principle

`MERGER` node in APPSeCONNECT processflow used to take smaller data packets and merge them into single data packet.

For example: If there are 20 files or data chunks each of which contains a customer data 
with the below XML format. All the files will be merged into single file in a batch 
size of 2. So, in the XPATH section the values are provided as following:
 `XPATH = //env:Envelop`, Batch Size = 2 and the Entity name = `mergedRoot`.

![Merger1](\staticfiles\processflow\media\merger1.PNG)

The concept of identifying the merger property is like that of the splitter property, that is by viewing the corresponding packet. 
(In this case, it is the transform packet as the merger node is used after the Process node).

The XPath provided for the MERGER Node is shown below:

![Merger2](\staticfiles\processflow\media\merger2.PNG)

![Merger4](/staticfiles/workflow-management/media/Merger/Merger4.png)


**1.Business Scenario - Destination Application is **    

