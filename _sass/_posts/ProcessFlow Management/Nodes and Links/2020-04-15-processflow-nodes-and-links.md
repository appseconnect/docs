---
title: "Nodes and Link overview"
toc: true
tag: developers
category: "Processflow"
menus: 
    processflow:
        icon: fa fa-link
        weight: 5
        title: "Nodes and Links" 
        identifier: processnodeandlinks 

---

Given below is the list of elements you will be able to use in APPSeCONNECT Process Flow. You can use the following nodes for designing and executing Process Flows for sync purpose:

1.	Start Node: This node initiates the start process of the Process Flow execution. You cannot SAVE or execute a Process Flow without a Start Node.

2.	GET Node: This node fetches the data from the source application for the sync purpose. You need to enable the APP dragged for operating GET node by selecting the Node Type as GET in the Node Configuration window of the dragged application.

3.	[Mapper Node](/processflow/working-with-mapper/): This node transforms the data to the destination application by applying field mappings of source and destination application.

4.	POST Node: This node dumps the transformed data to the destination application after the transformation process is completed. You need to enable the destination application as POST node by selecting the Node Type as POST in the Node Configuration window of the dragged destination application.

5.	End Node: This node signifies the completion of the sync process. You may or may not use the End node to design Process Flows.
![Nodes Overview](../../../staticfiles/processflow/media/mapper/nodes_overview.png)  