---
title: "Protocol Implementation for Applications"
toc: true
tag: developers
category: "Processflow"
menus: 
    processflow:
        title: "Protocol Implementation for Applications"
        weight: 9
        icon: fa fa-file-word-o
        identifier: protocolimplementation
---
Applications are built with protocols for making them communicate with network resources and other applications. Application like SAP Business One is a SOAP based but follows multiple sub protocols for communicating with other applications with respect to data transfer. 

Irrespective of data, SAP Business One follows these sub protocols. 

For Eg: 

- For creating master data in SAP Business One, you need work with the protocol **DI Server Service**.
- For creating general transactional data like Business Partner, Products etc. you need to work with the protocol **DI Server Object**.

SAP Business One follows two more protocols **DI API** & **FTP** for other purposes as well with respect to data. As an user, for integrating data you need to understand the protocol structure of the application you are working with, before implementing protocols in APPSeCONNECT processflow.

**_Note_**: _You can anytime view the differences of these protocols in XSLT preview of Mapper Node._

## Prerequisites for Protocol Implementation in processflow

1. You need to have basic knowledge of the protocol used by the application selected by you.

2. You need to design a processflow before implementing Protocol. [Click Here](/processflow/creating-processflow/) for the steps to design a processflow. 

3. Protocol implementation is done only for the application in POST operation. Therefore you need to design the processflow with you application in destination.

## Steps to setup Protocol in processflow:

**_Note_**: _Here we will demonstrate you with the steps to implement and setup Protocol keeping SAP business One in Destination. The flow remains the same if you are working with other application as well apart of SAP Business One_.

1. Login to the Portal and Navigate to the [processflow](/processflow/overview-of-processflow/) section. Click on the new button to [create a new processflow](/processflow/creating-processflow/).

2. Design the processflow keeping the selected application in Destination (In this case SAP Business One).

3. On dragging the [destination application](/processflow/working-with-POST/) (SAP Business One in this case), the Node Configuration Window opens. 

![protocol1](\staticfiles\processflow\media\protocol1.PNG)

4. You need to select the **Protocols** from the drop-down. The protocols would be displayed as per the App version selected. For SAP Business One (version >= 8.8), you will get the following protocols. 

- **Di API:** Used for operating any type of data using SAP Business One API.
- **Di Server Object:** Used for operating general transactional data like Business Partner, Products etc.
- **Di Server Service:** Used for creating master data in SAP Business One, you need work with the protocol **DI Server Service**.
- **FTP:** Used for operating any type of data using File System.

![protocol2](\staticfiles\processflow\media\protocol2.PNG)

5. Click on the SAVE button after all the mandatory fields are filled up. 

6. Link up the Node and Save the processflow. Click on the Node configuration Button of the [Mapper Node](/processflow/working-with-mapper/). The Mapper Window opens.

7. Click on the **Preview** button to view the generated XSLT with respect to the chosen protocol.

8. When the Protocol is selected as **DI API** you get the following XSLT Preview.

![protocol3](\staticfiles\processflow\media\protocol3.PNG)

9. When the Protocol is selected as **DI Server Object**, you get the following XSLT Preview.

![protocol4](\staticfiles\processflow\media\protocol4.PNG)

10. When the Protocol is selected as **DI Server Service**, you get the following XSLT Preview

![protocol5](\staticfiles\processflow\media\protocol5.PNG)

11. When the protocol is selected as **FTP**, you get the the following XSLT Preview.

![protocol6](\staticfiles\processflow\media\protocol6.PNG)

**_Note:_** _The XSLT format and structure for the protocols `DI API` & `FTP` remains same._

Following the above process you can successfully select a protocol for an application performing POST operation.

