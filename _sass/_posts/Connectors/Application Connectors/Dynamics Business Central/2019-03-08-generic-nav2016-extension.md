---
title: "Generic NAV 2016 Extension"
toc: true
tag: developers
category: "Connectors"
menus: 
    navbusinesscentralconnector:
        title: "Generic NAV 2016 Extension"
        weight: 14
        icon: fa fa-file-word-o
        identifier: navbusinesscentralconnector2016
---
Here you will get the step by step process to use NAV 2016 Extension as and when required
in the data integration business scenario.

**ProTip:** Before installation of INS2.05 Extension please keep a backup of the NAV Database.
{: .notice--info}

## Installation of INS2.05 Extension for NAV2016

Installation of INS2.05 has been divided into two tasks as given below:

**1. Importing of .fob files and web services XML file**

**2. Manual changes in base pages**

## Importing of .fob files and web services XML file

1) You need to import below listed .fob files

* table
* page
* codeunit
* xmlport

2) There is two option to import extension WebServices from XML file and they are provided below:

a) Run `AEC WebServices Import` xmlport. An import popup will appear. Specify a direction value import and click OK button. 
   Another popup will be shown where you need to select the Webservices of the XML file.

b) Run-`ins import codeunit` where we have called `AECWebServiceImport function` with a `parameter datafilepath`. 
  This datafilepath is webservices of XML file path. You will be provided with XML file in extension build. 
  You need to be changed function parameter path value as per your webservice XML file location. 
  This will insert data in Dynamics NAV `Web Service` table.

## Manual changes in Base Pages

We have added some base table field and our extension page in base Page:

**NOTE: After inserting the 1st part in each of the base pages you need to click on the right shift-arrow to make it distinguishable from the previous group.
(#Left shift is done to keep the child separately as a field within the group and not as any sub-child of a child)**

![manualchange-basepage1](/staticfiles/connectors/media/application-connector/navextension/manualchange-basepage1.png)

### Changes in Customer Card Page

a)  We have added our Extension page `AEC Customer Page` (33064472) as a part type with the name `WebCustomer Details`. 
    After the creation of the WebCustomerDetails, click on the property button. The WebCustomerDetails property window opens.
   `AEC Customer Page` SubpageLink field is `No.` and base page SubPageLink field is `No.`

![customercard-page-nav2016](/staticfiles/connectors/media/application-connector/navextension/customercard-page-nav2016.png)

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

b) We have added our Extension page `AEC Application Customer List` (33064474) as a part type with the name `AEC Application Customer List`. 
 Click on Property button and Application Customer Detail page appears. Page AEC Application Customer List SubPage Link field is `CustomerNo` 
 and base page SubPageLink field is `No.`

![aecapplication-customerlist-nav2016](/staticfiles/connectors/media/application-connector/navextension/aecapplication-customerlist-nav2016.png)

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

**Note: In NAV 2017 the same changes will be applicable as mentioned in A.(a),(b) above "Container" type.**

![customercard-nav2016](/staticfiles/connectors/media/application-connector/navextension/customercard-nav2016.png)

**Note: There is a slight change in the Page View in NAV 2017 as two additional fields are now visible just below which you will have to make the necessary changes** 

### Changes in Item Card Page

a) We have added our Extension page `Web Product Details Page` (33064469) as a part type with name `WebProductDetails`. Click on Property button and Web Product Details window appears.
   Page Web Product Details Page SubPageLink field is `ItemNo.` and base page SubPageLink field is `No.`

![itemcard-nav2016](/staticfiles/connectors/media/application-connector/navextension/itemcard-nav2016.png)

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

b) We have added our Extension page `Web ProductWebsites Page` (33064466) as a part type with name `ProductWebSites`. Click on Property button and the ProductWebSites window appears.  
   Page Web ProductWebsites Page SubPageLink field is `ItemNo.` and base page SubPageLink field is `No.`

![webproduct-websitepage-nav2016](/staticfiles/connectors/media/application-connector/navextension/webproduct-websitepage-nav2016.png)

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

c) We have added our Extension page `Web ProductAttribute Page` (33064467) as a part type with name `ProductAttributes`. 
   Click on Property button and the ProductAttribute window appears. Page Web ProductAttribute Page SubPageLink field is `ItemNo` 
   and base page SubPageLink field is `No.`

![webproduct-attributepage-nav2016](/staticfiles/connectors/media/application-connector/navextension/webproduct-attributepage-nav2016.png)

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

d) We have added our Extension page `Web ProductCategory Page` (33064468) as a part type with name `ProductCategories`. 
   Click on Property button and the ProductCategory window appears. Page Web ProductCategory Page SubPageLink field is `ItemNo` 
   and base page SubPageLink field is `No.`

![webproduct-categorypage-nav2016](/staticfiles/connectors/media/application-connector/navextension/webproduct-categorypage-nav2016.png)

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

e) We have added our Extension page `Web Product Child Details` (33064471) as a part type with name `ProductChild`. Click on Property button and the Product Child window appears.
   Page Web Product Child Details SubPageLink field is `ItemNo` and base page SubPageLink field is `No.`

![webproduct-childdetails-nav2016](/staticfiles/connectors/media/application-connector/navextension/webproduct-childdetails-nav2016.png)

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

f) We have added our Extension page `AEC Application Item List` (33064475) as a part type with the name `ProductApplicationData`.
     Click on Property button and the Product application data window appears. Page AEC Application Item List SubPageLink field is `ItemNo` 
     and base page SubPageLink field is `No.`

![aec-application-itemlist-nav2016](/staticfiles/connectors/media/application-connector/navextension/aec-application-itemlist-nav2016.png)

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


## Changes in Sales Order Page

a) We have added our Extension page `AEC Order Header Details` (33064476) as a part type with name `WebOrder Header Details`. 
   Click on Property button and the weborder header details window appears. Page AEC Order Header Details SubPageLink field is `OrderNo` 
   and base page SubPageLink field is `No.`

![sales-orderpage-nav2016](/staticfiles/connectors/media/application-connector/navextension/sales-orderpage-nav2016.png)

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

b) We have added our Extension page `AEC Order Line Details` (33064477) as a part type with name `WebOrder Line Details`. 
   Click on Property button and the weborder line details window appears. Page AEC Order Line Details SubPageLink field is `OrderNo` 
   and base page SubPageLink field is `No.`

![orderline-detailspage-nav2016](/staticfiles/connectors/media/application-connector/navextension/orderline-detailspage-nav2016.png)

|ID|Name|Type|SubType|
|---|---|---|---|
|33064477|WebOrder Line Details|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|OrderNo=FIELD(No.)|
|PartType|Page|
|PagePartID|AEC Order Header Details|

## Changes in Ship-to Address Page

a) We have added our Extension page `AEC Ship-To Address Cart Part` (33064478) as a part type with name `WebDetails`. 
Click on Property button and the webdetail window appears. Page AEC Ship-To Address  SubPageLink field is `CustomerNo and `Code` 
and base page SubPageLink field is `CustomerNo and `Code` 

![ship-to-addresspage-nav2016](/staticfiles/connectors/media/application-connector/navextension/ship-to-addresspage-nav2016.png)

|ID|Name|Type|SubType|
|---|---|---|---|
|33064478|WebDetails|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|CustomerNo=FIELD(Customer No.),Code=FIELD(Code)|
|PartType|Page|
|PagePartID|AEC Ship-To Address CartPart|

Add a base table (Ship-to Address) field "Customer No." with name "Customer_No".

![ship-to-addresspage2-nav2016](/staticfiles/connectors/media/application-connector/navextension/ship-to-addresspage2-nav2016.png)

|Name|SourceExp|Type|
|---|---|---|
|Customer_No.|Customer No.|Field|

**Note: In NAV 2017, you do not need to Add a base table (Ship-to Address) field "Customer No." with the name "Customer_No, since it has already been provided. You only need to do the same changes as defined in D.(a).** 

![ship-to-addresspage3-nav2016](/staticfiles/connectors/media/application-connector/navextension/ship-to-addresspage3-nav2016.png)
![ship-to-addresspage4-nav2016](/staticfiles/connectors/media/application-connector/navextension/ship-to-addresspage4-nav2016.png)

## Changes in Contact Card Page

a) We have added our Extension page `AEC Contact Details CardPart` (33064481) as a part type with name `AEC Contact Details CardPart`. 
 Click on Property button and the AEC Contact Details CardPart window appears.Page AEC Contact Details CardPart SubPageLink field is 
`No` and base page SubPageLink field is `No.`

![contact-card-nav2016](/staticfiles/connectors/media/application-connector/navextension/contact-card-nav2016.png)

|ID|Name|Type|SubType|
|---|---|---|---|
|33064481|AEC Contact Details CardPart|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|No=FIELD(No.)|
|PartType|Page|
|PagePartID|AEC Contact Details CardPart|

b) We have added our Extension page `AEC Application Contact LP` (33064482) as a part type with the name `AEC Application Contact List`. 
   Click on Property button and the AEC Application Contact List window appears. Page AEC Application Contact LP 
   SubPageLink field is `CustomerNo` and base page SubPageLink field is `No.`

![contactLP-nav2016](/staticfiles/connectors/media/application-connector/navextension/contactLP-nav2016.png)

|ID|Name|Type|SubType|
|---|---|---|---|
|33064482|AEC Application Contact List|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|ContactNo=FIELD(No.)|
|PartType|Page|
|PagePartID|AEC Application Contact LP|

## Changes in Contact Alt. Address Card Page

a) We have added our Extension page `AEC Contact Address CardPart` (33064483) as a part type with the name `AEC Contact Address CardPart`. 
  Click on Property button and the AEC Contact Address CardPart window appears. Page AEC Contact Address CardPart SubPageLink field is `ContactNo and Code`
  and base page SubPageLink field is `Contact No. and Code`

![contact-alt-addresscard-page-nav2016](/staticfiles/connectors/media/application-connector/navextension/contact-alt-addresscard-page-nav2016.png)

|ID|Name|Type|SubType|
|---|---|---|---|
|33064483|AEC Contact Address CardPart|Part|Page|

**The property value should be set**

|Property|Value|
|---|---|
|SubPageLink|ContactNo=FIELD(Contact No.), Code=FIELD(Code)|
|PartType|Page|
|PagePartID|AEC Contact Address CardPart|

b) Add a base table (Contact Alt. Address) field `Contact No.` with the name `Contact_No`.

![manualchange-contactalt2](/staticfiles/connectors/media/application-connector/navextension/manualchange-contactalt2.png)

|Name|SourceExpr|Type|
|---|---|---|
|Contact_No|Contact No.|Field|

## Managing Variants in AEC Extension 

![managingvariants-extension](/staticfiles/connectors/media/application-connector/navextension/managingvariants-extension.png)

In the Above Screen, if the Checkbox for "MaintainCrossReference" is enabled, the users can add the variants from the table "ItemCrossReference" for sync purpose as enabling this field populates the data from the table "ItemCrossReference" to "WebProductChildDetails". 
And if the checkbox for "MaintainCrossReference" is disabled, the Variants will be added from the table "Item Variants" to "WebProductChildDetails".

**Note: This is done only for Dynamics NAV 2016.** 

## Troubleshoot

Before installing the extension you always need to keep a backup of your existing database, 
as installation and uninstallation of extension may happen multiple times.



