---
title: "Working with Loops"
toc: true
tag: 
        - developers
        - nodes
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    nodeandlinks:
        icon: fa fa-link
        weight: 4
        title: "Working with Loops" 
        identifier: linkloops

---

### What is Loop Node?
In APPSeCONNECT Workflow using a Self-loop, we can repeatedly execute an individual node without affecting the other nodes that are linked with it. If we draw a self-loop in GET element in Workflow it will ask for the no of times it will be executed. Let's take a scenario where touchpoint associated with the GET node can fetch 10 records at a time but I want to fetch a minimum of 50 unsynced data at a time if it is available. Here I can implement a self-loop with 5 occurrences.If I want to fetch all unsynced data then we can choose the until data available option.

### Self loop with 5 occurences.

![No Of Time](/staticfiles/workflow-management/media/Selfloop/No_ofTime.png)

Self loop with until data available option

![Until Data](/staticfiles/workflow-management/media/Selfloop/UntilData.png)

## Self Loop Scenarios: 

**Case 1: When Self loop applied in GET Node** 

**Description:** You may have a scenario to fetch data for a specific input, which signifies if your input value is 5, the self-loop on get would be executed 5 times. 
If your input value is 2, the self-loop would be executed twice.

![selfloop_case1](\staticfiles\workflow-management\media\Selfloop\selfloop_case1.png)

**Case 2: When Self loop applied in POST Node**

**Description:** You may have a business scenario where you are splitting the transformed data as 1 single packets, and then posting it to destination application. Therefore, if Self Loop on POST node is not applied, only a single data after a splitter would be posted. 
Applying self-loop will fetch data until available after splitting.

For Example: you may have Splitted a transform packet in a batch of 1, which contains 10 data. Therefore, after splitting, it will generate 10 packets for 10 different data. 
If self-loop on POST node is configured as Until Available, self-loop on post will execute until all the data are fetched after split. 

![selfloop_case2](\staticfiles\workflow-management\media\Selfloop\selfloop_case2.png)

**_Note: Adding self-loop is not mandatory after splitter or merger node, however it is self-loop is recommended seriously to minimize the loss of data by a great margin in such cases._**