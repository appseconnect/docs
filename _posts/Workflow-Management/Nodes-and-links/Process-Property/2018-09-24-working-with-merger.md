---
title: "Merger Node"
toc: true
tag: 
tag: 
        - developers
        - nodes
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    nodesprocess:
        icon: fa fa-link
        title: "Working with Merger" 
        identifier: nodemerger
---

### What is Merger Node?

This node is used to merge smaller data chunks into a single data packet. Like a `SPLITTER` node, it also has three components XPath, Entity Name and Batch size. For example, you have specified a batch size of 10 in a `MERGER` node then it will take 10 data packets where each packet contains a chunk of data and merge them into a single data packet.

**Entityname** : Here specify the name which will act as a root element under which data will be merged.

**XPath** : Here user need to specify a XPath based on which data will be fetched from each data file for merging.

### Working Principle

`MERGER` node in APPSeCONNECT workflow used to take smaller data packets and merge them into single data packet.

For example: If there are 20 files or data chunks each of which contains a customer data with the below XML format. All the files will be merge them into single file in a batch size of 2. So, in the XPATH section the values are provided as following:
 `XPATH = //BusinessPartners`, Batch Size = 2 and the Entity name = `Envelope`.

![Merger2](/staticfiles/workflow-management/media/Merger/Merger2.png)

The concept of identifying the merger property is like that of the splitter property, that is by viewing the corresponding packet. 
(In this case, it is the transform packet as the merger node is used after the Process node).

The XPath provided for the MERGER Node is shown below:

![Merger3](/staticfiles/workflow-management/media/Merger/Merger3.png)

![Merger4](/staticfiles/workflow-management/media/Merger/Merger4.png)

