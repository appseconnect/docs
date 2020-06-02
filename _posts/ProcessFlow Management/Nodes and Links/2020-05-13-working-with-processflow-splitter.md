---
title: "Splitter Node"
toc: true
tag: developers
category: "Processflow"
menus: 
    processnodeandlinks:
        icon: fa fa-gg
        weight: 5
        title: "Working with Splitter" 
        identifier: splitterprocesflow
---

### What is Splitter Node?

This node is used to split a data packet into smaller chunks for processing in small batches. There are four components in a splitter node of a processflow
as shown below. 

- **Node Description** : Here, you can provide a short description for the splitter node.  
- **BatchSize**: Here you need to specify the number  of data to be present in each splitted data of the output file of the spiltter node.  
For example, suppose you have a data packet which contains 10 customer data and you applied a splitter 
with 2 batch size, so after execution of the splitter node the data packet will be split into 5 data 
packets where each packet contains two customer data and smaller packets will be sent to the next node
for processing.     
- **Entityname**: Here specify the name which will act as a root element to append the splitted data.    
 - **XPath** : Here user need to specify a XPath based on which data will be splitted.

**Notes**  
(a)Entity Name should be the same as in the Input Document.  
(b)The wrong Xpath given by the user will throw an error during execution.  
(c)Batch Size 0 will not be allowed.  

### Working Principle

`SPLITTER` node in APPSeCONNECT processflow is used for splitting large volume of data received as input files and 
breaking them into  smaller chunks go to the next process of transformation in the processflow .

For example: If a packet contains 20 customer data. A batch size of 1 is defined in the splitter node,where XPATH  is  //items/item and Entity name as response/items. 
So, after data passed through the Splitter node 20 individual XML data files will be created as output file where each file contains a single customer data.

![Processflow Splitter Properties](\staticfiles\processflow\media\splitter1.PNG)     
`For providing the properties of Split/ Merger, XPath for the packets is needed to be known.` 

The Parent node for the items present in the XSLT is the `XPATH` that needs to be given in the Split and Merger Property.

**Note: Single forward Slash (For Eg: /Items) access all the sub nodes present inside it. 
Double Forward Slash (For Eg: //Items) access all the nodes present inside it.**

The XPath provided in the split node section also depends on the packets. If the Split Node is attached before the 
mapper node the xpath needs to provided viewing the INPUT Packet and if the split node is attached after the mapper 
node the XPath is needed to be provided viewing the Transform Packet.

The Entity field is the Parent nodes of the packet that would be split. The XPath are the child nodes of the Entity.

![TroubleshootingSplitter2](/staticfiles/workflow-management/media/Splitter/TroubleshootingSplitter2.png)  

`Application used for the Processflow Execution is: Magento2 and SAP B1`.

The XPath provided for the node SPLIT (Magento2 to SAP B1) is shown below:
![Processflow Splitter2](../../../staticfiles/processflow/media/mapper/processflow_splitter2.PNG)

1) Go to Processflow section & [Design]() a Processflow.
2) The Processflow is designed as shown in the above screen.
3) Here 

**1.Business Scenario - Low Server Response in Destination Application**    

1. Here we have designed a process flow with splitter node. The splitter node is attached
just after Source Application (E.g: Magento2) which is fetching a huge number of data but the
destination application (E.g: SAP B1) is unable to sync the single data packet with huge number of 
data due to low server response.
2. We are adding the splitter node after the source application and defining a batch size in splitter node
window for data packet generation in smaller chunks.
3. Now Self loop is added to the mapper node, which enables to run the execution until all data are
available from the source application, and it enables to stop any data loss due to splitter node.
4. The data packets are thus transformed and posted in multiple output packets in destination
application, thereby enabling a smooth sync process of huge data into splitted data packeets 
with low server response capability.


**Protip:** The ENTITY and the XPATH is different for the INPUT Packet, TRANSFORM Packet, OUTPUT Packet and for 
different Application.
{: .notice--info}