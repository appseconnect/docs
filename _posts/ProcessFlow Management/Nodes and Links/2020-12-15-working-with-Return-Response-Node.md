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

1) Navigate to the designer and drag the Return Response Node to the design panel, available under **Flow Logic**.

![returnresponse1]()

2) The Node Configuration Window of the Return Response Node Opens.

![returnresponse2]()

3) Response node can return Two types of Responses that can be selected using Radio Buttons:

- User-defined Acknowledgement
- output of the previous node

### Reponse Type: User Defined Acknowledgement

a. On selecting this response type, you get the following field:

- Define Acknowledgement Message: You need to provide a customized information that will be returned as the response.

![returnresponse3]()

b. Click on the SAVE button, once you provided the customized info.

c. [Design](/processflow/creating-processflow/) your processflow and [Deploy](/processflow/deploying-and-executing-processfloww/#deploying-processflows-to-environment) to execute your designed processflow.

d. The snapshots will be generated for each execution that will allow you to survey the Data synced and the returned response. You will be able to view the Customized Info provided by the user as Return Response.

![returnresponse4]()

### Reponse Type: Output of the Previous Node