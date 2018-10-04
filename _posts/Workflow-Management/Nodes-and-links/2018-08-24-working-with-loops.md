---
title: "Working with Loops"
toc: true
tag: 
tag: 
        - developers
        - nodes
category: "Workflow"
menus: 
    nodeandlinks:
        icon: fa fa-link
        title: "Working with Loops" 
        identifier: linkloops
---
In APPSeCONNECT Workflow using a Self-loop, we can repeatedly execute an individual node without affecting the other nodes that are linked with it. If we draw a self-loop in GET element in Workflow it will ask for the no of times it will be executed. Let's take a scenario where touchpoint associated with the GET node can fetch 10 records at a time but I want to fetch a minimum of 50 unsynced data at a time if it is available. Here I can implement a self-loop with 5 occurrences.If I want to fetch all unsynced data then we can choose the until data available option.

Self loop with 5 occurences.

![No Of Time](/staticfiles/workflow-management/media/Selfloop/No_ofTime.PNG)

Self loop with until data available option

![Until Data](/staticfiles/workflow-management/media/Selfloop/UntilData.PNG)