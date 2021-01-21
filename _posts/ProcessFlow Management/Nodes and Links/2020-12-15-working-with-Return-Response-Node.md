---
title: "Working with Return Response Node"
toc: true
tag: developers
category: "Processflow"
menus: 
    processnodeandlinks:
        icon: fa fa-gg
        weight: 5
        title: "Return Response Node" 
        identifier: selfloopprocesflow
---

## What is Return Response Node?

Return Response Node is a confirmation node that returns back an acknowledgement information to your Source Application about its predecessor node.
Return Response Node needs to be implemented after the node whose response you're willing to return.

For Eg: If you're willing to return the response of GET Node, you need to implement the Response Node after GET Node.

The return information can be configured according to 2 Responses:

- User-defined Acknowledgement
- output of the previous node


## Working Principle:

1) Navigate to the designer and drag the Return Response Node to the design panel, available under **Flow Logic** menu.

2) The Node Configuration Window of the Return Response Node Opens.

![returnresponse2](\staticfiles\processflow\media\returnresponse2.PNG)

3) Response node can return Two types of Responses that can be selected using Radio Buttons:

- User-defined Acknowledgement
- output of the previous node

### Reponse Type: User Defined Acknowledgement

a. On selecting this response type, you get the following field:

- Define Acknowledgement Message: You need to provide a customized information that will be returned as the response.

![returnresponse3](\staticfiles\processflow\media\returnresponse3.PNG)

b. Click on the SAVE button, once you provided the customized info.

c. [Design](/processflow/creating-processflow/) your processflow and [Deploy](/processflow/deploying-and-executing-processfloww/#deploying-processflows-to-environment) to execute your designed processflow.

d. The snapshots will be generated for each execution that will allow you to survey the Data synced and the returned response. You will be able to view the Customized Info provided by the user as Return Response in the **ACTIVITY LOG** of Snapshot.

![returnresponse4](\staticfiles\processflow\media\returnresponse4.PNG)

e. Clicking over the specific LOG, you can view the complete defined text provided on a separate window.

![returnresponse6](\staticfiles\processflow\media\returnresponse5.PNG)

### Reponse Type: Output of the Previous Node

a.  On selecting this response type, the Output of the preceeding node will be displayed in the **Transaction file tab** of [snapshot](/processflow/snapshot-processflow/) for the Response Type node.

![responsenode5](\staticfiles\processflow\media\responsenode5.PNG)

b. Click on the SAVE button, once you provided the customized info.

c. d. The snapshots will be generated for each execution that will allow you to survey the Data synced and the returned response. You will be able to view the the previous node output in Response node transaction file.

![responsenode6](\staticfiles\processflow\media\responsenode6.PNG)

**Note:**

- You cannot implement Response Node with Start Trigger Type as Polling.
- You cannot link multiple Response Nodes with each other.