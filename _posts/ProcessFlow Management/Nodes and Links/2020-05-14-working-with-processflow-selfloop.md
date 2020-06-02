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
without affecting the other nodes that are linked with it. If we draw a self-loop in GET 
element in Workflow it will ask for the n.o of times it will be executed. Lets take a 
scenario where the source application associated can fetch 10 records at a time 
but I want to fetch a minimum of 50 unsynced data at a time if it is available. Here I can
implement a self-loop with 5 occurrences.If I want to fetch all unsynced data then we can 
choose the until data available option.

