---
title: "Product Add"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    sapwoocommerceintegration:
        title: "Product Add"
        icon: fa fa-wpexplorer
        identifier: sapwoocommercepadd
---

Executing the Process is a vital part when integrating any applications. This section of the document 
will let the users understand how the integration process can be executed through workflow for adding 
`Product Add` from `SAP Business One to WooCommerce`.

## Brief Description 

Image

Here, the Touchpoint Product Add is used for syncing Products from [SAP Business One]() to [WooCommerce](). 
A workflow is designed and executed with the Product Add touchpoint where Products are being added 
to WooCommerce from SAP Business One.

The Products are created in SAP environment using [web item master data](). For the demonstration process, 
the item 635021 is created for it to be synced to WooCommerce.  
Image

## LookUp Mapping

For Product sync from SAP Business One to WooCommerce, lookup mapping is required for Pricelists. The 
lookup Mapping for the PriceLists is needed to be done.

Image

Users need to enable the Lookup checkbox for the enabling the lookup mapping for the attribute regular_price. 
Image

However, every Business Processes are unique and may require Mapping of the [Lookups](). 

**Note: After the mapping changes, `Reset Generate` and `Reset Publish` the Touchpoint. 
Also click on the `Update Lookup tables` and `Update Configuration` in the Agent.

## Attribute Mapping/Transformation

The mapping provided below will enable the user to sync the business partners 
from WooCommerce to SAP Business One. To know more, see [Mapping & Transformation]() Techniques.

1.	Mapping for the ComplexObjectCollection Products.  
Image

a)	name: Here, the name is being mapped with the ItemName attribute.
b)	sku: Here, the product SKU is being mapped with the ItemCode attribute.
c)	title: Syncs the user Item Name of the product as Title to WooCommerce.
d)	content: Syncs the user specified text of the product to WooCommerce.
e)	excerpt: Syncs the user specified text of the product to WooCommerce.
f)	Type: Here, the product type is mapped.
g)	weight: Syncs the weight of the item to WooCommerce.
h)	regular_price: Syncs the price of the item to WooCommerce.

2. Mapping for the ComplexObjectCollection dimensions.
Image

a.	length: Syncs the length of the product item
b.	width: Syncs the width of the item to WooCommerce
c.	height: Sync the hieght of the item to WooCommerce


**Note: After the mapping changes, `Reset Generate` and `Reset Publish` the Touchpoint. Also click `Update Configuration` in the Agent for updating the changes in the On-Premise Agent.
These are the default mappings that needs to sync a business partner from WooCommerce to SAP Business One. 
User can also map different fields as per the user requirement.**




