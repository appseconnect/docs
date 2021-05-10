---
title: "FILTER Node"
toc: true
tag: 
        - developers
        - nodes
category: "Workflow"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    nodesprocess:
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

**Applications Used for the scenario is: Magento2- SAP Business One**

Scenario: 

The Filter Property is executed where the property is used after the PROCESS Node. Each data fetched is Splited into 
single packet and is filtered according to the provided condition.

If the condition of the Filter Property is fulfilled and the data is accepted, if not the data fails. 

**Filter Property Window**

![FilterProperty-Window](/staticfiles/workflow-management/media/FilterNode/FilterProperty-Window.png)

The Field in the property window is the XPath that needs to be provided for fulfilling the condition. The XPath is needed 
to determine viewing the Input or the Transform Packets. If the Filter is used before the Process Node INPUT Packet 
is needed to be viewed for the XPATH and if it is used after the process node the XPATH used will be according 
to the Transform Packet.

**Note: Multiple Filter Conditions can also be provided by clicking on the ADD Button.**

**Execution Screen for the Filter Node:**

![Filter-Workflow](/staticfiles/workflow-management/media/FilterNode/Filter-Workflow.png)

### Troubleshooting 

The XPath provided is case sensitive any small changes in the alphabets or of any cases
 that doesnot match in the XSLT will result in error.


