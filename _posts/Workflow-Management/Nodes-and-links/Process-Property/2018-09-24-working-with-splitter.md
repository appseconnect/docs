---
title: "Splitter Node"
toc: true
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
        title: "Working with Splitter" 
        identifier: nodesplitter
---

### What is Splitter Node?

This node is used to split a data packet into smaller chunks for processing in small batches. There are three components in a splitter. First one is batch size. For example, suppose you have a data packet which contains 10 customer data and you applied a splitter with 2 batch size, so after execution of the splitter node the data packet will be split into 5 data packets where each packet contains two customer data and smaller packets will be sent to the next node for processing. The other two component are Entity name and XPath.

**Entityname**: Here specify the name which will act as a root element to append the splitted data.

 **XPath** : Here user need to specify a XPath based on which data will be splitted.

### Working Principle

`SPLITTER` node in APPSeCONNECT workflow used for splitting large volume of data in smaller chunks and smaller chunks of data will go to the next process flow .

For example: if a packet contains multiple customer data. A batch size of 1 is defined in the splitter node,where XPATH  is  //items/item and Entity name as response/items. 
So, after data passed through the Splitter node 20 individual data files will be created where each file contains a single customer data.

![Splitter](/staticfiles/workflow-management/media/Splitter/Splitter.png)

`For providing the properties of Split and Merger, XPath for the packets is needed to be known.` 

The Parent node for the items present in the XSLT is the `XPATH` that needs to be given in the Split and Merger Property.

**Note: Single forward Slash (For Eg: /Items) access all the sub nodes present inside it. 
Double Forward Slash (For Eg: //Items) access all the nodes present inside it**

The XPath provided also depends on the packets. If the Split Node is attached before PROCESS the xpath needs to provided 
viewing the INPUT Packet and if the node is attached after the process, the XPath is needed to be provided
viewing the Transform Packet.

The Entity field is the Parent nodes of the packet that would be split. The XPath are the child nodes of the Entity.

![TroubleshootingSplitter2](/staticfiles/workflow-management/media/Splitter/TroubleshootingSplitter2.png)

**Note:The Property window for both the Split and Merger is same. Also, when working with splitter or merger, initiating a self-loop is mandatory.**  


The XPath provided for the node SPLIT (Magento2 to SAP B1) is shown below:

![TroubleshootingSplitter1](/staticfiles/workflow-management/media/Splitter/TroubleshootingSplitter1.png)


**Protip:** The ENTITY and the XPATH is different for the INPUT Packet, TRANSFORM Packet, OUTPUT Packet and for 
different Application.
{: .notice--info}