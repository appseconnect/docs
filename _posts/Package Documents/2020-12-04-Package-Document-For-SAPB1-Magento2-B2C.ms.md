## Overview

The package **SAP Business One - Magento2 B2C** will let you integrate the pre-implemented ProcessFlows for your business processes integrations, seamlessly reducing your time and effort in configuring and design. 
One -Click installation allows you to access the packaged ProcessFlows designs and mappings. Amplify your revenue numbers and growth with Packages. 
Just Install, Deploy and Execute to integrate your ProcessFlows inbuilt in your package.

## Additional Information

- Version Number � 1.0.0 
- Package Name - SAP B1 and Magento2 B2B Package 
- Created By �  INSYNC Solutions
- Last Modified - 07/12/2020 01:40:46 PM (Date & Time)
- Apps Used in the Package � App Icons/names

## Package Key Features

**SAP Business One - Magento2 B2C** will let you integrate all your business flows keeping and maintaining the complete transparency of your business integration. 
Checkout the Key Features of this package, listed below:

1.	Easy Package Sharing & Installation: Two step Package Sharing, and One Click Installation lets you share and unzip your packages with ease and reduces time and effort, encouraging Citizen Integration. Know more on [Processflow Packaging](https://docs.appseconnect.com/processflow/processflow-packaging-overview/)
2.	Automated Business Cycle Integration: Lets you just to plug and play every cycle of your business process automatically 
3.	Pre-Implemented mappings: The process flows in this [package] are pre-implemented with all the mappings required for integrating your ProcessFlow minimizing the manual efforts. However, you are always welcome in altering the [mappings](https://docs.appseconnect.com/processflow/customising-attribute-mapping/) as per your business process. 
4.	Easy integrations of Bundled and Configurable products: This package will let you sync the Bundled and Configurable Products if sold within your Business Process. The Configurations and Mappings will be pre-implemented for its integration process.

## Package Tech Specification

This package consists the following configurations details:

1.	App Authentication Mechanism
2.	Packaged Processflows & Dependencies
3.	Action Filter configurations 
4.	Field/Attribute Mappings 
5.	LookUp Mapping
6.	Extensions & Add-On Installation Details
7.	Environment Setup Parameter 
8.	Deployment Setup 

## App Authentication Mechanism

The applications used in the package requires to be authenticated for its integration. 
Check out the list of our [pre-packaged connectors](https://docs.appseconnect.com/connectors/overview-of-application-connectors/) in which, the applications used in this package is listed, in order to view the authentication mechanism of the applications used in the package. 
Study your required application�s document to know about the Authentication and its API details.

This package comprises of the following Applications.

- [SAP Business One](https://docs.appseconnect.com/connectors/Sap-Business-One/)
- [Magento 2](https://docs.appseconnect.com/connectors/magento2/) 

If you have an application which has an application connector present on platform, you as a user require very small effort to configure the connector to work correctly with the application. 

## Packaged Processflows & Dependencies:

This package comes with pre-designed and mapped Processflows between your chosen applications which will enable you to Install, Deploy and Execute your flow seamlessly. With pre-implemented lookups and mappings, this Package will minimize your efforts to design and map your flow accordingly.  
Data Configuration is broadly classified into Master Data Configuration & Transactional Data Configuration. Your package may require both type of Data Configuration Processflows or simply transactional data Configuration, depending on your chosen application.

Given below are the Master Data Configuration Details:

� ProcessFlow - Master Data Add [Attribute Set] 
Description: This master data syncs the configuration details of the Product Attribute Sets. 

� ProcessFlow - Master Data Add [Attributes]
Description: This master data syncs the configuration details of the Product Attributes. 

� ProcessFlow - Master Data Add [Attribute Options]
Description: This master data syncs the configuration details of the Product Attribute Options. 

� ProcessFlow - Master Data Add [TaxClass]
Description: This master data syncs the configuration details of the Product Tax Classes. 

� ProcessFlow - Master Data Add [Country State]
Description: This master data syncs the configuration details of Countries and States. 

� ProcessFlow - Master Data Add [Website]
Description: This master data syncs the configuration details of the application websites.

� ProcessFlow - Master Data Add [Category] 
Description: This master data syncs the configuration details of the Product Categories. 

� ProcessFlow - Master Data Add [Customer Group]
Description: This master data syncs the configuration details of the Customer Groups. 

Given below are the Transactional Data Configuration Details:

- **Business Partner Add:**

i.	Flow Description: This ProcessFlow will integrate the newly on boarded Customer and their details in your business line-up. The following Customer details will be synced: Customer ID, Name, Email Id, City, Country Address, and Telephone. 

ii.	Dependency flow: Not Applicable 

- **Simple Product Add:** 

i.	Flow Description: This ProcessFlow is featured to sync the following details of Simple Products to your destination application. The details are: Product Id, Product SKU, Product Name, Price, Product Status, Attribute id, Product type, weight etc. 

ii.	Dependency Flow: Not Applicable 

-	**Simple Product Update:** 

i.	Flow Description: This ProcessFlow is featured to update the changes of the product details. This ProcessFlow will only update the changes of the details that was synced while adding a new simple product. 

ii.	Dependency Flow: Simple Product Add 
Simple Product Update is equipped of updating the changes made to the Product details on your Source Application. As the updates are made against the ItemCode, therefore the dependency of Simple Product Add occurs which is responsible of adding the ItemCode primarily.

-	**Inventory Update:**

i.	Flow Description: This ProcessFlow is featured to sync and update your warehouse inventory stocks. This ProcessFlow will sync the Item Quantity against the item code available on your inventory. 

ii.	Dependency Flow: Simple Product Add 
As the inventory is updated against the ItemCode, the item needs to be added first so that the respective stocks can be updated accordingly.

-	**Order Add:** 

i.	Flow Description: This ProcessFlow is featured to sync the following details of each Sales Orders from your customer facing application to the destination application. The details are: Order Id, Customer Name, Product details, Product Unit Price, Ordered Quantity, Tax, VAT, Discount, Sales Order generation date and shipment details. 

ii.	Dependency Flow: Business Partner Add, Product Add, Inventory Update. 
The Sales Order ProcessFlow is equipped of integrating the details of the customers and products. The above-mentioned dependencies need to be integrated first so as to avoid document mismatch errors. 

-	**Invoice Add:** 

i.	Flow Description: This ProcessFlow is featured to sync the Invoices raised against the Sales Order Generated. The flow syncs the Item SKU, Quantity, and the Order Details to your destination application. Invoice Add is also equipped with a Post Acknowledgement task that integrates Sync Back Invoice Flag details back to your Source Application. Also, the ProcessFlow Invoice Add is featured to sync the payment type made for each invoice be it **Payment through Cash**, **Payment through Bank transfer**, **Payment thorugh Cheque**

ii.	Dependency Flow: Business Partner Add, Product Add, Inventory Update, Order Add 
The Invoice Add ProcessFlow is equipped of integrating the details of the order Invoice receipt. The above-mentioned dependencies need to be integrated first so as to avoid document mismatch errors.

-	**Delivery/Shipment Add:** 

i.	Flow Description: This ProcessFlow is featured to sync the Delivery/Shipment docs generated against your Sales Order to your destination application. This flow sync the Shipment Tracking Number along with the Customer details, order details, and tax information�s. 
Delivery/Shipment Add is also equipped with a Post Acknowledgement task that integrates Sync Back ShipmentSyncFlag details.

ii. Dependency Flow: Business Partner Add, Product Add, Inventory Update, Order Add 
The Delivery/Shipment Add ProcessFlow is equipped of integrating the details of the order delivery receipt. The above-mentioned dependencies need to be integrated first so as to avoid document mismatch errors.

-	**Bundle Product Add:**

i.	Flow Description: This ProcessFlow syncs all the details bundled products to your destination application. As Simple product a bundled to form Bundle Products, this ProcessFlow is featured with Simple product add such that when triggered, new Simple Products will get added followed by the Bundle Product Add. 

ii.	Dependency Flow: NA. 
As Simple Product Add is already equipped in this flow, you will not have to trigger Simple product add flow again. 

-	**Configurable Product Add:**

i.	Flow Description: This ProcessFlow syncs all the details of the configurable products to your destination application. A configurable product are the simple products with options, this ProcessFlow is featured with Simple product add such that when triggered, new Simple Products will get added followed by the Configurable Product Add. The Simple Product Add flow is also equipped with a Post Acknowledgement task that integrates Sync Back Flag details. 

ii.	Dependency Flow: NA. 
As Simple Product Add is already equipped in this flow, you will not have to trigger Simple product add flow again.

-	**Grouped Product Add:**

i.	Flow Description: This ProcessFlow syncs all the details of the Grouped Products to your destination application. Group products are the pack of multiple simple products. This ProcessFlow is featured with Simple product add such that when triggered, new Simple Products will get added followed by the Configurable Product Add. 

ii.	Dependency Flow: NA. 
As Simple Product Add is already equipped in this flow, you will not have to trigger Simple product add flow again.

## Action Filter configurations:

ProcessFlows in this package are pre-configured with the action filters that are required to GET and POST data from Source to Destination Application minimizing the implementation time. 
Have a glance on the [Action Filter](https://docs.appseconnect.com/processflow/manage-actions-actionfilters-errorfilters/) documentation, for more information.

## LookUp Mapping:
Your contains multiple Processflows and few of those Processflows may require mapping of specific values in certain fields as lookups. Few Processflow may need you to create these lookups manually in the Reference Tables of the APPSeCONNECT Repositories. 
Follow the documentation of Reference Tables for reference. The lookups listed below needs to be created in reference tables for the below mentioned ProcessFlow. The list is put based on the format given below:

[Processflow Name][Reference Table]

� [Order Add][Freight] 
� [Order Add][Tax]

## Field Mapping Information:

The ProcessFlows in this package are pre-implemented with the field mappings that will let you just to plug and play the integrations. The mapped attributes will let your Source App sync data in required fields of your Destination App minimizing sync errors and maximizing data integration efficiency. 

However the mappings can always be customized and may require, usage of variables as per your need of any variable type. These variables store sync related data that can be used later in the mapping for the transformation process. These variables can be of multiple datatypes, as per your usage. Check [Docs](https://docs.appseconnect.com/processflow/defining-variables-in-processflow-mapping/) for more details on variable creation.

**1. Process Flow: Business Partner Add**

|Complex Object/Collection|Attribute|Mapping|  
|-----------------|-------|-----------------------------------------------------|
| BusinessPartners| CardCode | `{{id}}`|
| BusinessPartners| EmailAddress | `{{email}}`|
| BusinessPartners| CardName | `{{concat(firstname,' ',lastname)}}`|
| BusinessPartners| U_WBCUSTGR| `{{group_id}}`|
| BusinessPartners| U_GENDER | `{{gender}}` |
| BusinessPartners| U_WEBSITE | `[destinationlib:GetMasterDataValue('U_Name','website','U_Code',{{website_id}})]`|
| BusinessPartners| U_WEB_FLAG | `Y`|
| BPAddresses| - | `{{$CustomerAddresses/item}}`|
| BPAddresses| row | `{{item}}`|
| BPAddresses| City | `{{city}}`|
| BPAddresses| Country | `{{country_id}}`|
| BPAddresses| AddressName | `{{$AddressesNames//Item[position()=$addresposition]/names}}`|
| BPAddresses| ZipCode | `{{postcode}}`|
| BPAddresses| Street | `{{street/item[1]}}`|
| BPAddresses| State | ` {{region/region_code}}`|
| BPAddresses| AddressType | `[choose] [when] ({{default_billing}}='true') bo_BillTo [endwhen] [when] ({{default_shipping}}='true') bo_ShipTo [endwhen] [otherwise] bo_ShipTo [endotherwise] [endchoose]`|
| BPAddresses| Block | `{{street/item[2]}}`|
| BPAddresses| U_WBCUSTADDID | `{{id}}`|
| BPAddresses| U_TelNo | `{{telephone}}`|

**2. Process Flow: Simple Product Add**

|Complex Object/Collection|Attribute|Mapping|  
|-----------------|-------|-----------------------------------------------------|
| product| UploadURL | products|
| product| sku | `{{dis:ItemCode}}` |
| product| name | `{{dis:ItemName}}` |
| product| price | `{{$itemDetailsRead//dis:ItemPrices//dis:ItemPrice[dis:PriceList =1]//dis:Price}}`|
| product| status | `[choose] [when] ({{$webitemdetail//dis:U_IsEnbl}}='Y') 1 [endwhen] [otherwise] 2 [endotherwise] [endchoose]` |
| product| attribute_set_id| `[sourcelib:GetMasterDataValue('U_Code','attributeset','U_Name',{{$webitemdetail//dis:U_AttrSet}})]`|
| product| visibility | `[choose] [when] ({{$webitemdetail//dis:U_IsVisbl}}='Y') 4 [endwhen] [otherwise] 1 [endotherwise] [endchoose]`|
| product| type_id| simple |
| product| custom_attributes| `{{$productAttributes//Item[value!='']}}`|
| product| attribute_code | `{{attribute_code}}`|
| product| value | `:=loop {{.}} : {{value//item}}`|
| extension_attributes| weight | `{{format-number($itemDetailsRead//dis:SalesUnitWeight,'.00')}}`|
| product_links| - | `{{$productDetails/item[sku!='']}}` |
| product_links| sku | `{{$itemSKU}}`|
| product_links| link_type | `{{type}}`|
| product_links| linked_product_sku| `{{sku}}` |
 
**3. Process Flow: Simple Product Update**

|Complex Object/Collection|Attribute|Mapping|  
|-----------------|-------|-----------------------------------------------------|
| product| UploadURL | `{{concat('products/',dis:ItemCode)}}`|
| product| sku | `{{dis:ItemCode}}` |
| product| name | `{{dis:ItemName}}` |
| product| price | `{{$itemDetailsRead//dis:ItemPrices//dis:ItemPrice[dis:PriceList =1]//dis:Price}}`|
| product| status | `[choose] [when] ({{$webitemdetail//dis:U_IsEnbl}}='Y') 1 [endwhen] [otherwise] 2 [endotherwise] [endchoose]` |
| product| attribute_set_id| `[sourcelib:GetMasterDataValue('U_Code','attributeset','U_Name',{{$webitemdetail//dis:U_AttrSet}})]`|
| product| visibility | `[choose] [when] ({{$webitemdetail//dis:U_IsVisbl}}='Y') 4 [endwhen] [otherwise] 1 [endotherwise] [endchoose]`|
| product| type_id| simple |
| product| custom_attributes| `{{$productAttributes//Item[value!='']}}`|
| product| attribute_code | `{{attribute_code}}`|
| product| value | `:=loop {{.}} : {{value//item}}`|
| extension_attributes| weight | `{{format-number($itemDetailsRead//dis:SalesUnitWeight,'.00')}}`|
| product_links| - | `{{$productDetails/item[sku!='']}}` |
| product_links| sku | `{{$itemSKU}}`|
| product_links| link_type | `{{type}}`|
| product_links| linked_product_sku| `{{sku}}` |

**4. Process Flow: Inventory Update**

|Complex Object/Collection|Attribute|Mapping|  
|-----------------|-------|-----------------------------------------------------|
|stockItem| itemId| `{{dis:U_WebID}}`|
|stockItem| productId| `{{dis:U_WebID}}`|
|stockItem| qty| `{{dis:OnHand}}`|
|stockItem| isinStock| `true`|
|stockItem| isQtyDecimal| `true`|
|stockItem| useConfigMinQty| `true`|
|stockItem| minQty| `0`|
|stockItem| useConfigMinSaleQty| `0`|
|stockItem| minSaleQty| `0`|
|stockItem| useConfigMaxSaleQty| `true`|
|stockItem| maxSaleQty| `0`|
|stockItem| useConfigBackorders| `true`|
|stockItem| backorders| `0`|
|stockItem| backorders| `0`|
|stockItem| useConfigNotifyStockQty| `true`|
|stockItem| notifyStockQty| `0`|
|stockItem| qtyIncrements| `0`|
|stockItem| useConfigEnableQtyInc| `true`|
|stockItem| enableQtyIncrements| `true`|
|stockItem| useConfigNotifyStockQty| `true`|
|stockItem| manageStock| `true`|
|stockItem| IsDecimalDivided| `true`|
|stockItem| stockStatusChangedAuto| `true`|
|stockItem| UploadURL| `{{concat('products/',dis:ItemCode,'/stockItems','/',dis:U_WebID)}}`|
    
**5. Process Flow: Order Add**

|Complex Object/Collection|Attribute|Mapping|  
|-----------------|-------|-----------------------------------------------------|
| DocumentsAdditionalExpenses| - | `{{$magentoShippingDetails//item[value1!='']}}`|
| DocumentsAdditionalExpenses| LineTotal | `{{value2}}`|
| DocumentsAdditionalExpenses| ExpenseCode| `{{value1}}`|
| DocumentsAdditionalExpenses| TaxCode| `[choose] [when] (value3 != '' and $shippingTaxAmount !='0') {{value3}} [endwhen] [otherwise] exempt [endotherwise] [endchoose]`|
| DocumentsAdditionalExpenses| VatGroup| `[choose] [when] (value3 != '' and $shippingTaxAmount !='0') {{value3}} [endwhen] [otherwise] exempt [endotherwise] [endchoose]`|
| Documents| PayToCode| `[if] ($varBillToCode!='') {{$varBillToCode}} [endif]`|
| Documents| ShipToCode| `[if] ($varShipToCode!='') {{$varShipToCode}} [endif]`|
| Documents| U_SYNCFLAG| `T`|
| Documents| U_Coupon| `{{coupon_code}}`|
| Documents| CardCode| `[choose] [when] ({{$guestId}} = '1') [destinationlib:GetFieldValue('select DfltCard from OACP','DfltCard')] [endwhen] [when] ({{$CustomerEmailQuery}} = '') [destinationlib:GetFieldValueByCondition('CardCode','OCPR','E_MailL',customer_email,'','')] [endwhen] [otherwise] {{$CustomerEmailQuery}} [endotherwise] [endchoose]`|
| Documents| DocObjectCode| `17`|
| Documents| DocDate| `[destinationlib:getDateFormat({{created-at}})]`|
| Documents| DocDueDate| `[destinationlib:getDateFormat({{created-at}})]`|
| Documents| DocDueDate| `[destinationlib:getDateFormat({{created-at}})]`|
| Documents| NumAtCard| `{{increment_id}}`|
| Documents| U_NumAtCard| `{{increment_id}}`|
| Documents| U_PAYMETH| `{{payment/method}}`|
| Document_Lines| - | `{{$SalesOrderItems/item}}`|
| Document_Lines| U_WebOrderItemId|`{{item_id}}`|
| Document_Lines| ItemCode| `{{$ProductSKU}}`|
| Document_Lines| UnitPrice| `[choose] [when] ({{$BundlePriceType}}= 'Fixed') {{price}} [endwhen] [otherwise] 0 [endotherwise] [endchoose]`|
| Document_Lines| Quantity| `{{qty_ordered}}`|
| Document_Lines| TaxCode| `[choose] [when] ({{$orderTax}}= '') exempt [endwhen] [otherwise] {{$orderTax}} [endotherwise] [endchoose]`|
| Document_Lines| VatGroup| `[choose] [when] ({{$orderTax}}= '') exempt [endwhen] [otherwise] {{$orderTax}} [endotherwise] [endchoose]`|
| Document_Lines| DiscountPercent| `[choose] [when] ({{discount_amount}}= '0') 0 [endwhen] [otherwise] {{(discount_amount*100)div(price)div(qty_ordered)}} [endotherwise] [endchoose]`|
| AddressExtension| ShipToState| `{{destinationlib:GetUniqueId('Code','OCST','Country',extension_attributes//shipping/address/country_id,'Name',extension_attributes//shipping/address/region,'','')}}`|
| AddressExtension| BillToState| `{{destinationlib:GetUniqueId('Code','OCST','Country',billing_address/country_id,'Name',billing_address/region,'','')}}`|
| AddressExtension| ShipToStreet| `{{extension_attributes//shipping/address/street/item[1]}}`|
| AddressExtension| ShipToBlock| `{{extension_attributes//shipping/address/street/item[2]}}`|
| AddressExtension| ShipToCity| `{{extension_attributes//shipping/address/city}}`|
| AddressExtension| ShipToZipCode| `{{extension_attributes//shipping/address/postcode}}`|
| AddressExtension| ShipToCountry| `{{extension_attributes//shipping/address/country_id}}`|
| AddressExtension| BillToStreet| `{{billing_address/street/item[1]}}`|
| AddressExtension| BillToBlock| `{{billing_address/street/item[2]}}`|
| AddressExtension| BillToCity| `{{billing_address/city}}`|
| AddressExtension| BillToZipCode| `{{billing_address/postcode}}`|
| AddressExtension| BillToCountry| `{{billing_address/country_id}}`|

**6. Process Flow: Invoice Add**

|Complex Object/Collection|Attribute|Mapping|  
|-----------------|-------|-----------------------------------------------------|
|Documents|DocTotal|`{{base_grand_total}}`|
|Documents|CardCode|`{{$orderdetails//dis:Document/dis:CardCode}}`|
|Documents|DocObjectCode|`13`|
|Documents|DocDate|`[destinationlib:getDateFormat({{created_at}})]`|
|Documents|DocDueDate|`[destinationlib:getDateFormat({{created_at}})]`|
|Documents|ReserveInvoice|`[choose] [when] ({{$deliveryDocentry}}='0') tYES [endwhen] [otherwise] tNO [endotherwise] [endchoose]`|
|Documents|U_InvoiceId| `{{increment_id}}`|
|Document_Lines|-| `{{items/item[price!='0']}}`|
|Document_Lines|ItemCode| `{{sku}}`|
|Document_Lines|UnitPrice| `{{price}}`|
|Document_Lines|Quantity| `{{qty}}`|
|Document_Lines|TaxCode| `{{$orderdetails//dis:Document//dis:DocumentLines/dis:DocumentLine[dis:U_WebOrderItemId=$curItmId]//dis:TaxCode}}`|
|Document_Lines|VatGroup| `{{$orderdetails//dis:Document//dis:DocumentLines/dis:DocumentLine[dis:U_WebOrderItemId=$curItmId]//dis:TaxCode}}`|
|Document_Lines|BaseLine| `{{$orderdetails//dis:Document//dis:DocumentLines/dis:DocumentLine[dis:U_WebOrderItemId=$curItmId]//dis:LineNum}}`|
|Document_Lines|BaseType| `[choose] [when] ({{$deliveryDocentry}}='0') 17 [endwhen] [otherwise] 15 [endotherwise] [endchoose]`|
|Document_Lines|BaseEntry| `[choose] [when] ({{$deliveryDocentry}}='0') {{$ordrdocentry}} [endwhen] [otherwise] {{$deliveryDocentry}} [endotherwise] [endchoose]`|
|DocumentsAdditionalExpenses|-| `{{$shipmentCollections/Item}}`|
|DocumentsAdditionalExpenses|ExpenseCode| `{{$orderdetails//dis:DocumentAdditionalExpenses//dis:DocumentAdditionalExpense[dis:LineNum=0]//dis:ExpenseCode}}`|
|DocumentsAdditionalExpenses|LineTotal| `{{$orderdetails//dis:DocumentAdditionalExpenses//dis:DocumentAdditionalExpense[dis:LineNum=0]//dis:LineTotal}}`|
|DocumentsAdditionalExpenses|TaxCode| `{{$orderdetails//dis:DocumentAdditionalExpenses//dis:DocumentAdditionalExpense[dis:LineNum=0]//dis:LineTotal}}`|
|DocumentsAdditionalExpenses|VatGroup| `{{$orderdetails//dis:DocumentAdditionalExpenses//dis:DocumentAdditionalExpense[dis:LineNum=0]//dis:LineTotal}}`|
|DocumentsAdditionalExpenses|BaseDocEntry| `[choose] [when] ({{$deliveryDocentry}}='0') {{$ordrdocentry}} [endwhen] [otherwise] {{$deliveryDocentry}} [endotherwise] [endchoose]`|
|DocumentsAdditionalExpenses|BaseDocType| `[choose] [when] ({{$deliveryDocentry}}='0') 17 [endwhen] [otherwise] 15 [endotherwise] [endchoose]`|
|DocumentsAdditionalExpenses|BaseDocLine| `0`|

**7. Process Flow: Delivery/Shipment Add**

|Complex Object/Collection|Attribute|Mapping|  
|-----------------|-------|-----------------------------------------------------|
|Documents|CardCode|`{{$orderDetails//dis:Document/dis:CardCode}}`|
|Documents|DocDate|`[destinationlib:getDateFormat(created_at)]`|
|Documents|DocDueDate|`[destinationlib:getDateFormat(created_at)]`|
|Documents|CardName|`{{$orderDetails//dis:Document/dis:CardName}}`|
|Documents|TrackingNumber|`{{tracks/item[order_id=$orderId]/track_number}}`|
|Documents|U_DeliveryId|`{{increment_id}}`|
|Document_Lines|-|`{{items/item}}`|
|Document_Lines|ItemCode|`{{sku}}`|
|Document_Lines|UnitPrice|`{{price}}`|
|Document_Lines|Quantity|`{{price}}`|
|Document_Lines|TaxCode|`{{$orderDocumentData//dis:DocumentLines/dis:DocumentLine[dis:U_WebOrderItemId=$curItmId]/dis:TaxCode}}`|
|Document_Lines|VatGroup|`{{$orderDocumentData//dis:DocumentLines/dis:DocumentLine[dis:U_WebOrderItemId=$curItmId]/dis:VatGroup}}`|
|Document_Lines|BaseLine|`{{$orderDocumentData//dis:DocumentLines/dis:DocumentLine[dis:U_WebOrderItemId=$curItmId]/dis:LineNum}}`|
|Document_Lines|BaseType|`[choose] [when] ({{$orderDetails//dis:Document/dis:DocumentStatus}}='bost_Open') 17 [endwhen] [otherwise] 13 [endotherwise] [endchoose]`|
|Document_Lines|BaseEntry|`[choose] [when] ({{$orderDetails//dis:Document/dis:DocumentStatus}}='bost_Open') {{$orderDocentry}} [endwhen] [otherwise] {{$invoiceDocentry}} [endotherwise] [endchoose]`|
|DocumentAdditionalExpenses|-|`{{$shipmentCollections/Item}}`|
|DocumentAdditionalExpenses|ExpenseCode|`{{$orderDocumentData//dis:DocumentAdditionalExpenses//dis:DocumentAdditionalExpense[dis:LineNum=0]//dis:ExpenseCode}}`|
|DocumentAdditionalExpenses|LineTotal|`{{$orderDocumentData//dis:DocumentAdditionalExpenses//dis:DocumentAdditionalExpense[dis:LineNum=0]//dis:ExpenseCode}}`|
|DocumentAdditionalExpenses|TaxCode|`{{$orderDocumentData//dis:DocumentAdditionalExpenses//dis:DocumentAdditionalExpense[dis:LineNum=0]//dis:ExpenseCode}}`|
|DocumentAdditionalExpenses|VatGroup|`{{$orderDocumentData//dis:DocumentAdditionalExpenses//dis:DocumentAdditionalExpense[dis:LineNum=0]//dis:ExpenseCode}}`|
|DocumentAdditionalExpenses|BaseDocEntry|`[choose] [when] ({{$orderDetails//dis:Document/dis:DocumentStatus}}='bost_Open') {{$orderDocentry}} [endwhen] [otherwise] {{$invoiceDocentry}} [endotherwise] [endchoose]`|
|DocumentAdditionalExpenses|BaseDocType|`[choose] [when] ({{$orderDetails//dis:Document/dis:DocumentStatus}}='bost_Open') 17 [endwhen] [otherwise] 13 [endotherwise] [endchoose]`|
|DocumentAdditionalExpenses|BaseDocLine|`0`|


**8. Process Flow: Bundle Product Add**

**9. Process Flow: Configurable Product Add**

**10. Process Flow: Grouped Product Add**

## Extension Configuration Information:

If your package comprises of prepackaged applications namely SAP, SAP ByDesign, Dynamics GP, Dynamics NAV Extension & WooCommerce, you need to configure the required extension & Add Ons. 

Given below is the checklist of Extension & Add On�s required for these applications.

**WooCommerce Application**

�	Version: WooCommerce 2.6 V & Above

�	Extension: insync-wp-rest-filter-1.0.3

�	Description: This is used For API Filtration with respect to Date & Time

**SAP ByDesign Application**

�	Version: SAP ByDesign 19.1.0

�	Extension: `YJT3WBG5Y__V7(INS_AEC_STOCK)`

�	Description: This extension is used for Stock Updating

**SAP B1 Application**

�	Version: Supported SAP B1 Version are:

    - SAP B1 9.1

    - SAP B1 9.2

    - SAP B1 9.3V & Above

�	Add On: 

    - APPSeCONNECT_2.4.3.0_32 (For 32 Bit supported SAP Application)

    - APPSeCONNECT_2.4.10.0_64 (For 64 Bit supported SAP Application)

�	Description: This Add On is used for Web Item Master Data Configuration (created under Inventory Module) for adding web product details required for integration.

**Dynamics GP Application**

�	Version: Supported Dynamics GP Version are:	
	
    - Dynamics GP 2010
    - Dynamics GP 2010 R2
    - Dynamics GP 2013
    - Dynamics GP 2015
    - Dynamics GP 2018
    - Dynamics GP 2016

�	Extension: Compatible eConnect extension is provided with Dynamics GP Version.
�	Description: This extension is used for retrieval of data from GP and push Data to GP.

**Dynamics NAV Application**
�	Version: Supported NAV Versions are:
    - NAV 2009R2
    - NAV 2013 Generic
    - NAV 2013 R2
    - NAV 2015
    - NAV 2016
    - NAV 2017
    - NAV 2017 Multiconnection
    - NAV BC 

�	Extension: NAV Extension comprises of a package containing .fob files & XML files.

**You need to import below listed .fob files**

�	table

�	page

�	code unit

�	xmlport

**You need to import below listed XML Files**

�	Application Id

�	Webservices

**Description: This extension details are enlisted below:**

�	Table: This fob file enables to add additional fields in the NAV Tables, which is required for integration.

�	Page: This fob file enables UI Representation of the Tables in NAV Application

�	Code Unit: This C/AL Code enables to hold backend code of extension modules.

�	XML Port: This enables to import external data source in NAV

�	Application Id: This is a data file, which holds the application Id & application name required for NAV Integration

�	Webservices: This is an XML doc which hold information of webservices for base and extension pages.

## Adapter Compatibility Check:
ProcessFlows in this package have no direct dependencies with Adapter Compatibility. Anytime on deploying your ProcessFlow, the latest adapter set in APPSeCONNECT Portal will be downloaded against the applications selected.

## Environment Selection
This package is pre-implemented with all the configurations and mappings. To deploy the ProcessFlows you are required to select the environment in which your business flow will be deployed. Your Environments are needed to be setup before the deploying process. 
Checkout the details below to setup, your choice of environment.

**On-Premise Setup:**
To download your On-Premise Agent, navigate to the Deploy > Environments > On Premise > Click on the Download Hyperlink. To know more about the installation process, [Click Here](https://docs.appseconnect.com/deployment/Deployment-Configuration/#on-premise-agent-configuration) 
Once the installation process completes, you can view your [OP details Page](https://docs.appseconnect.com/deployment/Environment-Management/). 

**Hosted Setup:**
To add your hosted agent on your organisation, follow the process provided in the [link](https://docs.appseconnect.com/deployment/Deployment-Configuration/#cloud-agent-configuration)
To know more about Hosted Environment, [Click Here](https://docs.appseconnect.com/deployment/Environment-Management/)

## Deployment
Deploying is an essential step for integrating your business flow. Environment needs to have the configuration deployed which drives the integration process. Check the [Deployment Documents](https://docs.appseconnect.com/deployment/overview/) to know about the steps to deploy your flow on your selected environment.
Once deployed, you need to click on the RUN button in the designer page to [execute your flow](https://docs.appseconnect.com/processflow/deploying-and-executing-processfloww/#executing-deployed-processflow). All its execution generates [SNAPSHOTS](https://docs.appseconnect.com/processflow/snapshot-processflow/) that will allow you to monitor the data synced with the execution attempt.









