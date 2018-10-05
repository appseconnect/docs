﻿---
title: "Sequencer Node"
toc: true
tag: 
        - developers
        - nodes
category: "Workflow"
menus: 
    nodeandlinks:
        icon: fa fa-link
        title: "Working with Sequencer" 
        identifier: nodesequencer
---


### What is Sequencer Node?

This node is used to order elements by a certain attribute. This node can be applied to any collection of elements. For example, user have data of a collection of orders and I want to process the oldest orders first. User can add a `SEQUENCER` node to sort the order based on their creation date.After the data passed through the `SEQUENCER` node it will be arranged based on the `SEQUENCER` node logic.
Sequence node have three components

Element Path : Specify the element based on which data will be squenced.

Collection Element Path : XPATH of the parent element under which the sequencer element present.

Sort Order : Ascending or Descending order.

For example if have a data chunk which contains multiple data in below XML format 
``` XML
<orders>
<order>
  <id type="integer">574534287440</id>
  <email>chup@yopmail.com</email>
  <closed-at type="dateTime" nil="true"/>
  <created-at type="dateTime">2018-09-27T18:47:21+05:30</created-at>
  <updated-at type="dateTime">2018-09-28T15:40:09+05:30</updated-at>
  <number type="integer">884</number>
  <note></note>
  <token>ca61ad1d7e3aa31e1c52cf17db70716b</token>
  <gateway nil="true"/>
  <test type="boolean">false</test>
  <total-price type="decimal">0.00</total-price>
  <subtotal-price type="decimal">0.00</subtotal-price>
  <total-weight type="integer">0</total-weight>
  <total-tax type="decimal">0.00</total-tax>
  <taxes-included type="boolean">false</taxes-included>
  <currency>USD</currency>
  <financial-status>paid</financial-status>
  <confirmed type="boolean">true</confirmed>
  <total-discounts type="decimal">0.00</total-discounts>
  <total-line-items-price type="decimal">0.00</total-line-items-price>
  <cart-token nil="true"/>
  <buyer-accepts-marketing type="boolean">false</buyer-accepts-marketing>
  <name>#1884</name>
  <referring-site nil="true"/>
  <landing-site nil="true"/>
  <cancelled-at type="dateTime" nil="true"/>
  <cancel-reason nil="true"/>
  <line-items type="array">
    <line-item>
      <id type="integer">1419142168656</id>
      <variant-id type="integer">12814680621136</variant-id>
      <title>Samsung Galaxy S6</title>
      <quantity type="integer">1</quantity>
      <price type="decimal">0.00</price>
      <sku>P-181</sku>
      <variant-title nil="true"/>
      <vendor>Demo-store</vendor>
      <fulfillment-service>manual</fulfillment-service>
      <product-id type="integer">1520606937168</product-id>
      <requires-shipping type="boolean">true</requires-shipping>
      <taxable type="boolean">true</taxable>
      <gift-card type="boolean">false</gift-card>
      <name>Samsung Galaxy S6</name>
      <variant-inventory-management>shopify</variant-inventory-management>
      <properties type="array">
      </properties>
      <product-exists type="boolean">true</product-exists>
      <fulfillable-quantity type="integer">0</fulfillable-quantity>
      <grams type="integer">0</grams>
      <total-discount>0.00</total-discount>
      <fulfillment-status>fulfilled</fulfillment-status>
      <discount-allocations type="array"/>
      <tax-lines type="array">
        <tax-line>
          <title>CGST</title>
          <price type="decimal">0.00</price>
          <rate type="float">0.2</rate>
        </tax-line>
      </tax-lines>
    </line-item>
  </line-items>
  <shipping-lines type="array"/>
  <billing-address type="Address">
    <first-name>DD</first-name>
    <address1>Kolkata</address1>
    <phone>09000000000</phone>
    <city>Kolkata</city>
    <zip>700000</zip>
    <province>West Bengal</province>
    <country>India</country>
    <last-name>chup</last-name>
    <address2 nil="true"/>
    <company>Honda F1</company>
    <latitude type="float" nil="true"/>
    <longitude type="float" nil="true"/>
    <name>DD chup</name>
    <country-code>IN</country-code>
    <province-code>WB</province-code>
  </billing-address>
  <shipping-address type="Address">
    <first-name>DD</first-name>
    <address1>Kolkata</address1>
    <phone>09000000000</phone>
    <city>Kolkata</city>
    <zip>700000</zip>
    <province>West Bengal</province>
    <country>India</country>
    <last-name>chup</last-name>
    <address2 nil="true"/>
    <company>Honda F1</company>
    <latitude type="float" nil="true"/>
    <longitude type="float" nil="true"/>
    <name>DD chup</name>
    <country-code>IN</country-code>
    <province-code>WB</province-code>
  </shipping-address>
  <customer>
    <id type="integer">692949483600</id>
    <email>chup@yopmail.com</email>
    <accepts-marketing type="boolean">false</accepts-marketing>
    <created-at type="dateTime">2018-09-26T15:56:09+05:30</created-at>
    <updated-at type="dateTime">2018-09-27T18:47:22+05:30</updated-at>
    <first-name>DD</first-name>
    <last-name>chup</last-name>
    <orders-count type="integer">3</orders-count>
    <state>disabled</state>
    <total-spent type="decimal">0.00</total-spent>
    <last-order-id type="integer">574534287440</last-order-id>
    <note></note>
  </customer>
</order>
<order>
  <id type="integer">573948395600</id>
  <email>chup@yopmail.com</email>
  <closed-at type="dateTime" nil="true"/>
  <created-at type="dateTime">2018-09-26T17:29:58+05:30</created-at>
  <updated-at type="dateTime">2018-09-26T17:29:58+05:30</updated-at>
  <test type="boolean">false</test>
  <total-price type="decimal">0.00</total-price>
  <subtotal-price type="decimal">0.00</subtotal-price>
  <total-weight type="integer">0</total-weight>
  <total-tax type="decimal">0.00</total-tax>
  <taxes-included type="boolean">false</taxes-included>
  <currency>USD</currency>
  <financial-status>paid</financial-status>
  <confirmed type="boolean">true</confirmed>
  <total-discounts type="decimal">0.00</total-discounts>
  <total-line-items-price type="decimal">0.00</total-line-items-price>
  <cart-token nil="true"/>
  <buyer-accepts-marketing type="boolean">false</buyer-accepts-marketing>
  <name>#1883</name>
  <line-items type="array">
    <line-item>
      <id type="integer">1418137927760</id>
      <variant-id type="integer">12814680621136</variant-id>
      <title>Samsung Galaxy S6</title>
      <quantity type="integer">1</quantity>
      <price type="decimal">0.00</price>
      <sku>P-181</sku>
      <variant-title nil="true"/>
      <vendor>Demo-store</vendor>
      <fulfillment-service>manual</fulfillment-service>
      <product-id type="integer">1520606937168</product-id>
      <requires-shipping type="boolean">true</requires-shipping>
      <taxable type="boolean">true</taxable>
      <gift-card type="boolean">false</gift-card>
      <name>Samsung Galaxy S6</name>
      <variant-inventory-management>shopify</variant-inventory-management>
      <properties type="array">
      </properties>
      <product-exists type="boolean">true</product-exists>
      <fulfillable-quantity type="integer">1</fulfillable-quantity>
      <grams type="integer">0</grams>
      <total-discount>0.00</total-discount>
      <fulfillment-status nil="true"/>
      <discount-allocations type="array"/>
      <tax-lines type="array">
        <tax-line>
          <title>CGST</title>
          <price type="decimal">0.00</price>
          <rate type="float">0.2</rate>
        </tax-line>
      </tax-lines>
    </line-item>
  </line-items>
  <billing-address type="Address">
    <first-name>DD</first-name>
    <address1>Kolkata</address1>
    <phone>09000000000</phone>
    <city>Kolkata</city>
    <zip>700000</zip>
    <province>West Bengal</province>
    <country>India</country>
    <last-name>chup</last-name>
    <address2 nil="true"/>
    <company>Honda F1</company>
    <latitude type="float" nil="true"/>
    <longitude type="float" nil="true"/>
    <name>DD chup</name>
    <country-code>IN</country-code>
    <province-code>WB</province-code>
  </billing-address>
  <shipping-address type="Address">
    <first-name>DD</first-name>
    <address1>Kolkata</address1>
    <phone>09000000000</phone>
    <city>Kolkata</city>
    <zip>700000</zip>
    <province>West Bengal</province>
    <country>India</country>
    <last-name>chup</last-name>
    <address2 nil="true"/>
    <company>Honda F1</company>
    <latitude type="float" nil="true"/>
    <longitude type="float" nil="true"/>
    <name>DD chup</name>
    <country-code>IN</country-code>
    <province-code>WB</province-code>
  </shipping-address>
  <fulfillments type="array"/>
  <refunds type="array"/>
  <customer>
    <id type="integer">692949483600</id>
    <email>chup@yopmail.com</email>
    <accepts-marketing type="boolean">false</accepts-marketing>
    <created-at type="dateTime">2018-09-26T15:56:09+05:30</created-at>
    <updated-at type="dateTime">2018-09-27T18:47:22+05:30</updated-at>
    <first-name>DD</first-name>
    <last-name>chup</last-name>
    <orders-count type="integer">3</orders-count>
    <state>disabled</state>
    <total-spent type="decimal">0.00</total-spent>
    <last-order-id type="integer">574534287440</last-order-id>
    <note></note>
    <verified-email type="boolean">true</verified-email>
    <multipass-identifier nil="true"/>
    <tax-exempt type="boolean">false</tax-exempt>
    <phone>+918798545220</phone>
    <tags></tags>
    <last-order-name>#1884</last-order-name> 
  </customer>
</order>
</orders>
```
To sort the order data based on the creation date we have defined the sequencer node in this way.

![Sequencer](/staticfiles/workflow-management/media/Sequencer/sequencer.PNG)