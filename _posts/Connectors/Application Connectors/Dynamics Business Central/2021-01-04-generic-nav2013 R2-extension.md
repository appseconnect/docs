---
title: "Generic NAV 2013R2 Extension"
toc: true
tag: developers
category: "Connectors"
menus: 
    navbusinesscentralconnector:
        title: "Generic NAV 2013R2 Extension"
        weight: 14
        icon: fa fa-file-word-o
        identifier: navbusinesscentralconnector2013R2
---

Here you will get the step by step process to use NAV 2015 Extension as and when required
in the data integration business scenario.

**ProTip:** Before installation of INS2.01 Extension please keep a backup of the NAV Database.
{: .notice--info}

## Installation of INS2.01 Extension for NAV2013

Installation of INS2.01 has been divided into two tasks. These two tasks are:

1. Importing of .fob files and web services XML file
2. Manual changes in base pages

### Importing of .fob files and web services XML file AEC

i) We need to import below listed .fob files
a) table
b) page
c) codeunit
d) xmlport

Step.1: Open NAV Development Centre and log in with SQL Server credentials or Windows authentication. Then, go to 'tools' and select object designer or just press 'Shift+F12'.

Step.2: Select tables and go to 'File Tab' and select import. After that select the '2013 R2 Tables.fob' file and import.

Step.3: Repeat the Step.2 for different '.fob' files, like for imports, tables, code units, and page.

Step.4:      
a) We need to run 'AEC WebServices Import' xmlport. An import popup will be shown where specify a direction value import and click on ok button. Another popup will be shown where we should select the webservices of the XML file.

OR

b) We need to run-ins import codeunit where we have called the AECWebServiceImport function with a parameter datafile path. This datafile path is webservices of XML file path. We will be provided XML file in extension build. You need to be changed function parameter path value as per your web service XML file location. This will insert data in Dynamics NAV 'Web Service' table.


### Manual changes in Base Pages
We have added some base table field and our extension page in base Page:

**Note:** After inserting the 1st part in each of the base pages we need to click on the left shift-arrow to make it distinguishable from the previous group

![nav2013ext1](\staticfiles\connectors\media\application-connector\navextension\nav2013ext1.png)

## Changes in "Customer Card" Page:

a)  We have added our Extension page 'AEC Customer Page' (33064472) as a part type with the name 'WebCustomer Details'. 
Page 'AEC Customer Page' SubpageLink field is 'No' and base page SubPageLink field is 'No.'

![nav2013ext2](\staticfiles\connectors\media\application-connector\navextension\nav2013ext2.png)

**Child Link Page Details**

|ID|Name|Type|SubType|
|---|---|---|---|
|33064472|WebCustomer Details|Part|Page|


**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|No=FIELD(No.)|
|PartType|Page|
|PagePartID|AEC Customer Page|

b) We have added our Extension page 'AEC Application Customer List' (33064474) as a part type with the name 'AEC Application Customer List'. 
Page 'AEC Application Customer List' SubPageLink field is 'CustomerNo' and base page SubPageLink field is 'No.'

![nav2013ext3](\staticfiles\connectors\media\application-connector\navextension\nav2013ext3.png)

**Child Link Page Details**

|ID|Name|Type|SubType|
|---|---|---|---|
|33064474|AEC Application Customer List|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|CustomerNo=FIELD(No.)|
|PartType|Page|
|PagePartID|AEC Application Customer List|  

## Changes in "Item Card" Page:

a) We have added our Extension page 'Web Product Details Page' (33064469) as a part type with name 'WebProductDetails'. 
Page 'Web Product Details Page' SubPageLink field is 'ItemNo' and base page SubPageLink field is 'No.'

![nav2013ext4](\staticfiles\connectors\media\application-connector\navextension\nav2013ext4.png)

**Child Link Page Details**

|ID|Name|Type|SubType|
|---|---|---|---|
|33064469|WebProductDetails|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|ItemNo=FIELD(No.)|
|PartType|Page|
|PagePartID|Web Product Details CP Page|

b) We have added our Extension page 'Web ProductWebsites Page' (33064466) as a part type with name 'ProductWebSites'. 
Page 'Web ProductWebsites Page' SubPageLink field is 'ItemNo' and base page SubPageLink field is 'No.'  

![nav2013ext5](\staticfiles\connectors\media\application-connector\navextension\nav2013ext5.png)

**Child Link Page Details**

|ID|Name|Type|SubType|
|---|---|---|---|
|33064466|ProductWebSites|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|ItemNo=FIELD(No.)|
|PartType|Page|
|PagePartID|Web ProductWebsites Page|

c) We have added our Extension page 'Web ProductAttribute Page' (33064467) as a part type with name 'ProductAttributes'. 
Page 'Web ProductAttribute Page' SubPageLink field is 'ItemNo' and base page SubPageLink field is 'No.'

![nav2013ext6](\staticfiles\connectors\media\application-connector\navextension\nav2013ext6.png)

**Child Link Page Details**

|ID|Name|Type|SubType|
|---|---|---|---|
|33064467|ProductAttributes|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|ItemNo=FIELD(No.)|
|PartType|Page|
|PagePartID|Web ProductAttribute Page|

d) We have added our Extension page 'Web ProductCategory Page' (33064468) as a part type with name  page 'Web ProductCategory Page' SubPageLink field is 'ItemNo' and base page SubPageLink field is 'No.'

![nav2013ext7](\staticfiles\connectors\media\application-connector\navextension\nav2013ext7.png)

**Child Link Page Details**

|ID|Name|Type|SubType|
|---|---|---|---|
|33064468|ProductCategories|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|ItemNo=FIELD(No.)|
|PartType|Page|
|PagePartID|Web ProductCategory Page|

e) We have added our Extension page 'Web Product Child Details' (33064471) as a part type with name 'ProductChild'. 
Page 'Web Product Child  Details' SubPageLink field is 'ItemNo' and base page SubPageLink field is 'No.'

![nav2013ext8](\staticfiles\connectors\media\application-connector\navextension\nav2013ext8.png)

**Child Link Page Details**

|ID|Name|Type|SubType|
|---|---|---|---|
|33064471|ProductChild|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|ParentItemNo=FIELD(No.)|
|PartType|Page|
|PagePartID|Web Product Child Details|

f) We have added our Extension page 'AEC Application Item List' (33064475) as a part type with the name 'AEC Application Item List'. 
SubPageLink field is 'ItemNo' and base page SubPageLink field is 'No.'

![nav2013ext9](\staticfiles\connectors\media\application-connector\navextension\nav2013ext9.png)

**Child Link Page Details**

|ID|Name|Type|SubType|
|---|---|---|---|
|33064475|ProductApplicationData|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|ParentItemNo=FIELD(No.)|
|PartType|Page|
|PagePartID|AEC Application Item List|

## Changes in 'Sales Order' Page

a) We have added our Extension page 'AEC Order Header Details' (33064476) as a part type with name 'WebOrder Header Details'. 
Page 'AEC Order Header Details' SubPageLink field is 'OrderNo' and base page SubPageLink field is 'No.'

![nav2013ext10](\staticfiles\connectors\media\application-connector\navextension\nav2013ext10.png)

**Child Link Page Details**

|ID|Name|Type|SubType|
|---|---|---|---|
|33064476|WebOrder Header Details|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|OrderNo=FIELD(No.)|
|PartType|Page|
|PagePartID|AEC Order Header Details|

b) We have added our Extension page 'AEC Order Line Details' (33064478) as a part type with name 'WebOrder Line Details'. 
Page 'AEC Order Line Details' SubPageLink field is 'OrderNo' and base page SubPageLink field is 'No.'

![nav2013ext11](\staticfiles\connectors\media\application-connector\navextension\nav2013ext11.png)

|ID|Name|Type|SubType|
|---|---|---|---|
|33064477|WebOrder Line Details|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|OrderNo=FIELD(No.)|
|PartType|Page|
|PagePartID|AEC Order Line Details|

## Changes in "Ship-to Address" Page

a) We have added our Extension page 'AEC Ship-To Address Cart Part' (33064478) as a part type with name 'WebDetails'. 
Page 'AEC Ship-To Address'  SubPageLink field is 'CustomerNo' and 'Code'.Base page SubPageLink field is 'Customer No.' and 'Code'.

![nav2013ext12](\staticfiles\connectors\media\application-connector\navextension\nav2013ext12.png)

|ID|Name|Type|SubType|
|---|---|---|---|
|33064478|WebDetails|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|CustomerNo=FIELD(Customer No.),Code=FIELD(Code)|
|PartType|Page|
|PagePartID|AEC Ship-To Address CartPart|

b) Add a base table (Ship-to Address) field "Customer No." with the name "Customer_No".

![nav2013ext13](\staticfiles\connectors\media\application-connector\navextension\nav2013ext13.png)

**Field Details**

|Name|Source Expression|Type|
|---|---|---|
|Customer_No.|Customer No.|Field|

## Changes in "Contact Card" Page:

a) We have added our Extension page 'AEC Contact Details CardPart' (33064481) as a part type with the name 'AEC Contact Details CardPart'. 
Page 'AEC Contact Details CardPart' SubPageLink field is 'No' and base page SubPageLink field is 'No.'

![nav2013ext14](\staticfiles\connectors\media\application-connector\navextension\nav2013ext14.png)

|ID|Name|Type|SubType|
|---|---|---|---|
|33064481|AEC Contact Details CardPart|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|No=FIELD(No.)|
|PartType|Page|
|PagePartID|AEC Contact Details CardPart|

b) We have added our Extension page 'AEC Application Contact LP' (33064482) as a part type with the name  'AEC Application Contact List'. 
Page 'AEC Application Contact LP' SubPageLink field is 'CustomerNo' and base page SubPageLink field is 'No.'

![nav2013ext15](\staticfiles\connectors\media\application-connector\navextension\nav2013ext15.png)

|ID|Name|Type|SubType|
|---|---|---|---|
|33064482|AEC Application Contact List|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|ContactNo=FIELD(No.)|
|PartType|Page|
|PagePartID|AEC Application Contact LP|

## Changes in "Contact Alt. Address Card" Page

a) We have added our Extension page 'AEC Contact Address CardPart' (33064483) as a part type with the name 'AEC Contact Address CardPart'. Page 'AEC Contact Address CardPart' SubPageLink field is 'ContactNo' and 'Code'. 
Base page SubPageLink field is 'Contact No.' and 'Code'.

![nav2013ext16](\staticfiles\connectors\media\application-connector\navextension\nav2013ext16.png)

|ID|Name|Type|SubType|
|---|---|---|---|
|33064483|AEC Contact Address CardPart|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|ContactNo=FIELD(Contact No.), Code=FIELD(Code)|
|PartType|Page|
|PagePartID|AEC Contact Address CardPart|

b) Add a base table (Contact Alt. Address) field "Contact No." with the name "Contact_No".

![nav2013ext17](\staticfiles\connectors\media\application-connector\navextension\nav2013ext17.png)

**Field Details**

|Name|Source Expression|Type|
|---|---|---|
|Contact_No|Contact No.|Field|

## Changes in Base Code Unit Sales Post (80) 

### For Invoice

Add a variable (varAECInvoice) for **AEC Invoice** in Sales Post (80) code unit.

![nav2013ext19](\staticfiles\connectors\media\application-connector\navextension\nav2013ext19.png)

**Added below line after : SalesInvHeader.INSERT;**

//INS2.6 Start>

IF (Invoice) THEN

BEGIN

varAECInvoice.WebInvoiceInsert(SalesHeader,SalesInvHeader."No.");

END;

//INS2.6 End<

**Added below code after SalesInvLine.INSERT;**
         
//InvoiceLine Start

varAECInvoice.WebInvoiceLineInsert(SalesInvLine);

//InvoiceLine End


### For Shipment

Add a variable (varAECShipment) for **AEC Shipment** in Sales Post (80) code unit.

![nav2013ext18](\staticfiles\connectors\media\application-connector\navextension\nav2013ext18.png)

**Add below line after  : SalesShptHeader.INSERT;**

//INS2.6 Start>

IF (Ship) THEN

BEGIN

varAECShipment.WebShipmentInsert(SalesHeader  ,SalesShptHeader."No.");

END;

//INS2.6 End<

**Added below line after  :  SalesShptLine.INSERT;**

//ShipmentLine Start

varAECShipment.WebShipmentLineInsert(SalesShptLine);

//ShipmentLine End


## Log table setup information:

In order to edit fields in the extension pages, we need to change the log table set up in NAV2009 generic extension. For this we need to follow the following steps:

1. Goto NAV Client.
2. Search Change Log Setup in Client.
3. You can see Change Log Setup in the Search list. Click on Changelog Setup.
4. A Change Log Setup window will pop up, check the 'Change Log Activated'  option.
5. Go to Action tab and Click on Tables
6. A Change Log Setup (Table) List window will appear.
7. Now as per your requirement Set values in Columns (Log Insertion / Log Modification / Log Deletion)  for a Table

Now we can set the log table according to the following details: 

|ID|Name|Log Insertion|Log Modification|Log Deletion|
|---|---|---|---|------|
|18|Customer|All Fields|All Fields|All Fields|
|27|Item|All Fields|All Fields|All Fields|
|36|Sales Header|All Fields|Some Fields|All Fields|
|37|Sales Line|All Fields|All Fields|All Fields|
|110|Sales Shipment Header|All Fields|All Fields|Some Fields|
|111|Sales Shipment Line|All Fields|All Fields|All Fields|
|112|Sales Invoice Header|All Fields|All Fields|Some Fields|
|113|Sales Invoice Line|All Fields|All Fields|All Fields|
|222|Ship-to Address|All Fields|All Fields|All Fields|
|5050|Contact|All Fields|All Fields|Some Fields|
|5051|Contact Alt. Address|All Fields|All Fields|All Fields|
|7002|Sales Price|All Fields|All Fields|All Fields|
|7004|Sales Line Discount|All Fields|All Fields|All Fields|
33064465|Web Category Master Table |All Fields|All Fields|All Fields|
|33064466|Web Product WebSite|All Fields|All Fields|All Fields|
|33064467|Web Product Attribute|All Fields|All Fields|All Fields|
|33064468|Web Product Category|All Fields|All Fields|All Fields|
|33064469|Web Product Details|All Fields|All Fields|All Fields|
|33064470|Web Product Child Details|All Fields|All Fields|All Fields|
|33064471|AEC Customer Details|All Fields|All Fields|All Fields|
|33064472|AEC Ship-to Address|All Fields|All Fields|All Fields|
|33064476|AEC Order Header Details|All Fields|All Fields|All Fields|
|33064480|AEC Contact Address|All Fields|All Fields|All Fields|
|33064482|AEC Shipment Line|All Fields|All Fields|All Fields|

**While performing the sync process we need to set the web item flag as YES in the action filter option of admin.appseconnect.com after installing NAV2013 generic extension.**

**In order to call the AEC Manager codeunit function we need to define some methods in the Application Manager.
 For this we need to follow these steps**

1. Open NAV Developer Environment.

2. Goto Codeunit> Application Management (ID-1) and click on Design option.

![NAV-Codeunit](/staticfiles/connectors/media/application-connector/navextension/NAV-Codeunit.png)

3. Define Variables : 

  a. Goto View > C/AL Globals 

  b. Name: `AECManager, Datatype: Codeunit, Structure: AEC Manager`

For Modify and Rename we need to define two local variables (RecRef and xRecRef) while for Insert and Delete we need only one (RecRef)

a. Goto View > C/AL Locals

Under Parameters:

b.  Name: RecRef     Datatype: RecordRef

Name: xRecRef   Datatype: RecordRef

4.  Under the OnDatabaseInsert, OnDatabaseModify, OnDatabaseDelete and OnDatabaseRename define methods as follows: 

![NAV-Codeunit2](/staticfiles/connectors/media/application-connector/navextension/NAV-Codeunit2.png)

5. Compile the changes.


## Troubleshoot:
Before installing the extension please keep a backup of your existing database, as installation and uninstallation of extension multiple times may crash your database. 





