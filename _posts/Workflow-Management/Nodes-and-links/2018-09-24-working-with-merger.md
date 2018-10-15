---
title: "Merge Node"
toc: true
tag: 
tag: 
        - developers
        - nodes
category: "Workflow"
menus: 
    nodeandlinks:
        icon: fa fa-link
        title: "Working with Merger" 
        identifier: nodemerger
---

### What is Merge Node?

This node is used to merge smaller data chunks into a single data packet. Like a `SPLITTER` node, it also has three components XPath, Entity Name and Batch size. For example, you have specified a batch size of 10 in a `MERGER` node then it will take 10 data packets where each packet contains a chunk of data and merge them into a single data packet.

**Entityname** : Here specify the name which will act as a root element under which data will be merged.

**XPath** : Here user need to specify a XPath based on which data will be fetched from each data file for merging.

### Working Principle

`MERGER` node in APPSeCONNECT workflow used to take smaller data packets and merge them into single data packet.

For example I have 20 files or data chunks each of which contains a customer data with the below XML format . I want the address from each customer files and merge them into single file.So in the XPATH section I have provided 
following `XPATH` `//addresses` ,I have provided Batchsize as 2 abd Entity name I have provides `Envelops`.

Filter node defination  will be like this

![Merger](/staticfiles/workflow-management/media/Merger/Merger.PNG)

Single data file contains below XML data

``` XML
<customers type="array">
  <customer>
    <id type="integer">693970665552</id>
    <email>tanya2@yopmail.com</email>
    <accepts-marketing type="boolean">false</accepts-marketing>
    <created-at type="dateTime">2018-09-28T12:15:51+05:30</created-at>
    <updated-at type="dateTime">2018-09-28T12:15:51+05:30</updated-at>
    <first-name nil="true"/>
    <last-name nil="true"/>
    <orders-count type="integer">0</orders-count>
    <state>invited</state>
    <total-spent type="decimal">0.00</total-spent>
    <last-order-id type="integer" nil="true"/>
    <note nil="true"/>
    <verified-email type="boolean">true</verified-email>
    <multipass-identifier nil="true"/>
    <tax-exempt type="boolean">false</tax-exempt>
    <phone nil="true"/>
    <tags></tags>
    <last-order-name nil="true"/>
    <addresses type="array">
      <address>
        <id type="integer">738646425680</id>
        <customer-id type="integer">693970665552</customer-id>
        <first-name>Tanya</first-name>
        <last-name>Raheja</last-name>
        <company nil="true"/>
        <address1 nil="true"/>
        <address2 nil="true"/>
        <city nil="true"/>
        <province nil="true"/>
        <country nil="true"/>
        <zip nil="true"/>
        <phone nil="true"/>
        <name>Tanya Raheja</name>
        <province-code nil="true"/>
        <country-code nil="true"/>
        <country-name nil="true"/>
        <default type="boolean">true</default>
      </address>
    </addresses>
  </customer>
</customers>
```

So after executing the Merger node 2 files will be generated with merged data and each file contains data in the below format.

``` XML
<Envelops>
    <addresses type="array">
      <address>
        <id type="integer">738646425680</id>
        <customer-id type="integer">693970665552</customer-id>
        <first-name>Tanya</first-name>
        <last-name>Raheja</last-name>
        <company nil="true"/>
        <address1 nil="true"/>
        <address2 nil="true"/>
        <city nil="true"/>
        <province nil="true"/>
        <country nil="true"/>
        <zip nil="true"/>
        <phone nil="true"/>
        <name>Tanya Raheja</name>
        <province-code nil="true"/>
        <country-code nil="true"/>
        <country-name nil="true"/>
        <default type="boolean">true</default>
      </address>
    </addresses>
  <addresses type="array">
    <address>
      <id type="integer">738646294608</id>
      <customer-id type="integer">693970534480</customer-id>
      <first-name>Utpal</first-name>
      <last-name>Maity</last-name>
      <company nil="true"/>
      <address1>sadsaf</address1>
      <address2>sfdsgf</address2>
      <city>Kansas City</city>
      <province nil="true"/>
      <country nil="true"/>
      <zip>112451</zip>
      <phone>114156124223</phone>
      <name>Utpal Actor</name>
      <province-code nil="true"/>
      <country-code nil="true"/>
      <country-name nil="true"/>
      <default type="boolean">true</default>
    </address>
  </addresses>
  <addresses type="array">
    <address>
      <id type="integer">737588379728</id>
      <customer-id type="integer">692949483600</customer-id>
      <first-name>Hiba</first-name>
      <last-name>Ali</last-name>
      <company>Honda F1</company>
      <address1>Kolkata</address1>
      <address2></address2>
      <city>Kolkata</city>
      <province>West Bengal</province>
      <country>India</country>
      <zip>700000</zip>
      <phone>09000000000</phone>
      <name>DD chup</name>
      <province-code>WB</province-code>
      <country-code>IN</country-code>
      <country-name>India</country-name>
      <default type="boolean">true</default>
    </address>
  </addresses>
</Envelops>

```