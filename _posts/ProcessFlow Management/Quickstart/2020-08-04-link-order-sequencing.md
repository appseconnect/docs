---
title: "Link Order Sequencing"
toc: true
tag: developers
category: "Processflow"
menus: 
   quickstartprocessflow:
        title: "Link Order Sequencing"
        weight: 6
        icon: fa fa-file-word-o
        identifier: linkorderprocessflow
---

## Link Ordering of Nodes for Sequential Execution

processflow being the advanced sync flow feature of APPSeCONNECT, allows you to create and implement complex flows smoothly.
A processflow can cater and sync multiple business flows based upon the requirement.

For eg: You can design & implement the processflow in a sequential manner such that you can easily sync Products, Inventory Updates, New Customers & customer updated in a single processflow.

Execution of these flows can be sequantial and may have dependency on each other as you cannot update customers unless you add new customers first.
Implementing such complex cases totally depends on the execution order and within processflow, you can now easily modify the execution flows, without altering any of the node links or creating a new processflow.

The sequential Node Ordering enables you to manage the execution sequence of multiple flows with a processflow such that you do not have to unlink the nodes everytime to sequence the flows.

## Prerequisites

- You need to have valid credentials of the portal.
- [Create a processflow](/processflow/creating-processflow/) with 2 or more GET node attached to the Start Node.
- All the nodes should be linked with each other. 
- The processflow will be executed based on the Link Order sequenced.
- On altering or modifying the link orders, you need to save the processflow.
- a deployed processflow needs to be saved and redeployed, if the link ordering has been changed within the processflow.

**Note: The window for Link Ordering will not display the nodes that are not linked with the neighbouring nodes.**

## Steps to perform Link Ordering Sequence:

1) Navigate to the processflow module and open the processflow for which you are required to perform the link order execution.

2) Click on the **Link Order** button in the [header panel of the designer page](/processflow/designer-processflow/#process-flow-header-panel).

![Linkorder1](\staticfiles\processflow\media\linkorder1.PNG)

3) The Link Order Slider Window opens. Initially you can view the START Node only and will be represented to you in collapsed state.

![Linkorder2](\staticfiles\processflow\media\linkorder2.PNG)

4) While dragging you can view the dotted boundaries that represent the drag limit for those nodes. With Link Order you can drag and reorder any of the nodes having a parellel execution.

![Linkorder3](\staticfiles\processflow\media\linkorder3.PNG)

5) Drag the parent links and reorder execution flow of the processflow. On dragging, all the child nodes under it gets dragged too.

![Linkorder4](\staticfiles\processflow\media\linkorder4.PNG)

6) You need to save the processflow after re-ordering the execution flow. The processflow will be executed based on the ordering initiated.

7) Once saved, you need to [deploy the processflow](/processflow/deploying-and-executing-processfloww/#prerequisites-to-deploy-process-flows) to deploy the configurations to the environment. If already deployed and yet the execution is reordered, you need to [redeploy the processflow](/processflow/redeploying-processflow/).

8) On view the [snapshot](/processflow/snapshot-processflow/) for the execution, your snapshot will be displayed as per the ordering made in the Link Order Window.

**Note:** 

-  Decision node with multiple success or failure outputs can be reorder using Link Orders.

-  On hovering over the nodes in the Link order window, you can view the node description as tooltip.

-  The window for Link Ordering will not display the nodes that are not linked with the neighbouring nodes.

Thus following the above process, you can successfully sequence the execution order of a processflow using Link Order.
