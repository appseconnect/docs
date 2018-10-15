---
title: "Splitter Node"
toc: true
tag: 
        - developers
        - nodes
category: "Workflow"
menus: 
    nodeandlinks:
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

For example I have a customer data which contains multiple customer data.I have defined a batch size of 1 in the splitter node, `XPATH` as `//Customer` and Entity name as `Envelops`. So after data passed through the Splitter node 20 individual data files will be created where each file contains a single customer data. The Splitter node defination will be like the below image 

![Splitter](/staticfiles/workflow-management/media/Splitter/Splitter.PNG)

Source XML which contains multiple customer data will be below 

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
  <customer>
    <id type="integer">693970632784</id>
    <email>rose.w@yopmail.com</email>
    <accepts-marketing type="boolean">false</accepts-marketing>
    <created-at type="dateTime">2018-09-28T12:15:50+05:30</created-at>
    <updated-at type="dateTime">2018-09-28T12:15:50+05:30</updated-at>
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
        <id type="integer">738646392912</id>
        <customer-id type="integer">693970632784</customer-id>
        <first-name>Rose</first-name>
        <last-name>Wilson</last-name>
        <company nil="true"/>
        <address1>dsfda</address1>
        <address2>sgfdsg</address2>
        <city>Michi City</city>
        <province nil="true"/>
        <country nil="true"/>
        <zip>1124578</zip>
        <phone>4454784512</phone>
        <name>Rose Wilson</name>
        <province-code nil="true"/>
        <country-code nil="true"/>
        <country-name nil="true"/>
        <default type="boolean">true</default>
      </address>
    </addresses>
  </customer>
  <customer>
    <id type="integer">693970600016</id>
    <email>ron@yopmail.com</email>
    <accepts-marketing type="boolean">false</accepts-marketing>
    <created-at type="dateTime">2018-09-28T12:15:48+05:30</created-at>
    <updated-at type="dateTime">2018-09-28T12:15:48+05:30</updated-at>
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
        <id type="integer">738646360144</id>
        <customer-id type="integer">693970600016</customer-id>
        <first-name>Ronald</first-name>
        <last-name>Johnson</last-name>
        <company nil="true"/>
        <address1>fdfd</address1>
        <address2>wqdw</address2>
        <city>arkan City</city>
        <province nil="true"/>
        <country nil="true"/>
        <zip>112112112</zip>
        <phone>114114</phone>
        <name>Ronald Johnson</name>
        <province-code nil="true"/>
        <country-code nil="true"/>
        <country-name nil="true"/>
        <default type="boolean">true</default>
      </address>
    </addresses>
  </customer>
  <customer>
    <id type="integer">693970567248</id>
    <email>johny.w@yopmail.com</email>
    <accepts-marketing type="boolean">false</accepts-marketing>
    <created-at type="dateTime">2018-09-28T12:15:46+05:30</created-at>
    <updated-at type="dateTime">2018-09-28T12:15:46+05:30</updated-at>
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
        <id type="integer">738646327376</id>
        <customer-id type="integer">693970567248</customer-id>
        <first-name>Johny</first-name>
        <last-name>Walker</last-name>
        <company nil="true"/>
        <address1>safsda</address1>
        <address2>edgtesgte</address2>
        <city>Baltimore</city>
        <province nil="true"/>
        <country nil="true"/>
        <zip>er56gh</zip>
        <phone>112112112</phone>
        <name>Johny Walker</name>
        <province-code nil="true"/>
        <country-code nil="true"/>
        <country-name nil="true"/>
        <default type="boolean">true</default>
      </address>
    </addresses>
  </customer>
</customers>
```

After splitting each data files will contains data in the below format 

``` XML
<Envelops>
  <customer>
    <id type="integer">693970567248</id>
    <email>johny.w@yopmail.com</email>
    <accepts-marketing type="boolean">false</accepts-marketing>
    <created-at type="dateTime">2018-09-28T12:15:46+05:30</created-at>
    <updated-at type="dateTime">2018-09-28T12:15:46+05:30</updated-at>
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
        <id type="integer">738646327376</id>
        <customer-id type="integer">693970567248</customer-id>
        <first-name>Johny</first-name>
        <last-name>Walker</last-name>
        <company nil="true"/>
        <address1>safsda</address1>
        <address2>edgtesgte</address2>
        <city>Baltimore</city>
        <province nil="true"/>
        <country nil="true"/>
        <zip>er56gh</zip>
        <phone>112112112</phone>
        <name>Johny Walker</name>
        <province-code nil="true"/>
        <country-code nil="true"/>
        <country-name nil="true"/>
        <default type="boolean">true</default>
      </address>
    </addresses>
  </customer>
</Envelops>

 ```