---
title: "FILTER Node"
toc: true
tag: 
        - developers
        - nodes
category: "Workflow"
menus: 
    nodeandlinks:
        icon: fa fa-link
        title: "Working with Filter" 
        identifier: nodefilter
---

### What is filter node?

This node is used to fetch a subset of data from an original data packet based on the criteria specified in the `FILTER` node. A user can specify multiple criteria in the `Filter` node and data will be filter based on the specified criteria. Criteria expressions are specified using XPath.For example, a user is fetching data packet with a certain number of a customer from which he only wants to process verified customers only. A user can implement a `FILTER` node by specifying a XPath and from that data packet, only those data will flow to the next node which will match the filter condition.

### Working Principle

`FILTER` node in APPSeCONNECT workflow used for bulk data filteration.

### Tip

Use valid `XPATH` for filter condition in filter node.

Based on the above example my XML data for the customers is like this 

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
    <verified-email type="boolean">false</verified-email>
    <multipass-identifier nil="true"/>
    <tax-exempt type="boolean">false</tax-exempt>
    <phone nil="true"/>
    <tags></tags>
    <last-order-name nil="true"/>
  </customer>
</customers>
```

Filter node implementation will be like this. Based on the requirement we can have multiple filter condition using the add option.

![Filter Node](/staticfiles/workflow-management/media/FilterNode/FilterNode.png)