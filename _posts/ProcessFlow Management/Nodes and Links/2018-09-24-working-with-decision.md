---
title: "Decision Node"
toc: true
tag: developers
category: "Processflow"
menus:
    processnodeandlinks:
        icon: fa fa-gg
        weight: 6
        title: "Working with Decision" 
        identifier: decisionprocesflow
---
## What is Decision Node?

In Business, you may not have time for redundant data or data which is of no use to the business. Your Business can be Country specific or certain sets of customer specific and therefore you may not require data which are not oriented to you business. Therefore, in such case you may need to deal with data that are redundant. 

APPSeCONNECT Process Flow is enabled with a decision node that will not execute the data that does not fulfills your criteria. 

For Eg: A decision key is applied on a single chunk of data based on the decision criteria defined in the decision node configuration window that only those orders will be synced whose Shipping Address is of `US` (You may only have the option to ship data in `US`). 

In such cases, only those data would be passed through the Decision node, which satisfies the condition, which makes it easy you to extract redundant orders.

The following are the fields that you will get on dragging the Decision Node in the Process Flow Designer Panel.

- **Node Description:** Here, you can provide a short description for the Decision Node.

- **Decision Name:** Here, you can provide a short name that will help identify the purpose of the Decision Node when working later.

- **Decision Key:** This is the actual field which decides the execution process of the decision node. Your `Decision Key` can be applied in these following areas:

    - Decision on **Attribute**: Applying Decision on **attribute** allows the node to decide the condition over the value passed through the attribute. 

    - Decision on **Generic Function**: Generic Functions of APPSeCONNECT allows you to extract transaction values. Applying Decision on Generic Appresource Function will execute the condition over the provided function and will allow the node based on the provided condition. [Click Here](/transformation/using-library-methods/) for more details on Appresource Functions.

    - Decision on **Cloud Appresource Function**:  Cloud Appresource are the functions that are defined in the Cloud portal itself. Applying Decision on Cloud Appresource function will allow the node to execute the condition on the provided Cloud Appresource Function. [Click Here](/processflow/cloud-appresource-functions/) to know more about Process Flow cloud appresource function.

_**Note:** You can only provide those Appresource Functions (both Cloud & Generic) as Decision Key which are defined either in Process Flow Level or Organisation level or APPSeCONNECT level._

- **Operator:** You will be provided with a list of operators thats will enable the key to take the decision.

- **Value:** Here, you need to provide the value for the KEY provided.

- **Add Criteria:** You can also add multiple combined conditions & conjunctions using `AND` `OR`.   

- **Toggle button:** You will be able to activate multiple conditions by activating/deactivating the toggle button.

- **Preview URL:** You can view the complete expression that will be generated as per the condition the Preview URL box below. In-Case, the final expression in the URL preview is too long, you need to hover, to view the complete expression.

![PFdecision1]()

## Prerequisites:

- You need to have valid credentials of the portal.
- You need to [create a Process Flow](/processflow/creating-processflow/) or need to have an existing Process Flow developed.

## Working Principle:


1.  Drag the decision node in the designer panel from the Process Property menu. The Decision Node Configuration Window opens.

![PFdecision2]()

2.  You can view the above mentioned fields. Enter the name & node description. 

3. You need to provide the Decision KEY, for commanding the Decision Operation. Here you can view the decision key applied on the Decision Attribute.

    **Scenario:** Implementing Decision on Attribute.

    **Description:** You may have your Business Model stating, only those orders  shall be shipped whose Country is **`US` (United States)** & Region Code is **`NY` (New York)** & the Email Id of the customer shall contain `gmail.com`. Therefore, you may not require to sync orders that has the shipping address of states other than `NY` or of some other email domain. Therefore, implementing such decision, your decision KEY should be provided with XPATH that searches for the COUNTRY & State & customer_email in the Input Packet. In this Scenario, the configuration should be.

    - **Decision Key:** `//items//item//shipping/country_id`
    - **Operator:** `Equals to`

    - **Value:** `US`

    & 

    - **Decision Key:** `//items/item//shipping/region_code`
    - **Operator:** `Equals to`
    - **Value:** `NY`

    & 

    - **Decision Key:** `//items/items/customer_email`
    - **Operator:** `Contains`
    - **Value:** `gmail.com`

_**Note: You need to click the button `Add Criteria` for providing multiple condition with conjunctions. Also, you need to enable the toggle button for activating the conditions.**_

 ![PFdecision3]()

4. Once the decision criteria is provided, you can view the final expression in the Preview URL.

![PFdecision4]()

5. Enable the Toggle buttons for the criteria and click on the SAVE button.

6. Once all the configuration are made for the Process Flow. [Deploy and Execute](/processflow/deploying-and-executing-processfloww/) the Process Flow.

![PFdecision5]()

7. After completion of the execution, you successfully view the snapshot for the Decision Node. [Click Here](/processflow/snapshot-processflow/) to know more about Process Flow Snapshots.

![PFdecision6]()

Following the above process you can successfully implement Decision for a Process Flow.


## Business Specific Scenarios for Decision:

| Decision Criteria | Operator Used |Value| Decision Description | Decision Applied On |
|----|-------------|---------|---------|-------|
| `//items//item//state_code` | `=` | `CAL` (California) | Only those orders shall be accepted whose state provided in the address is `CAL` | Attribute |  
|`getMapping('TAX',//items/items//extension_attributes/applied_taxes/item/code)` AND `//items//item//shipping/country_id`| `contains` & `=`|`SVAT` & `CA` | this decision states that only those orders shall be accepted whose Tax code contains SVAT & Country code is `CA` (CANADA) | Generic Function & Attribute |
|`IsDate()`| `=` | `2020-06-01`| This condition states that only those data shall qualify the decision whose date equals to the provided value| Generic function |
|`cloudResourcelib:timeinstance(string)`| `<=`|`01062020`|Here, a cloud Appresource function is defined and is provided in decision key where the condition checks that only those data would be accepted whose data, returned, is less than the value provide|Cloud Appresource|
|`cloudResourcelib:timeinstance(string)` AND `cloudResourcelib:timeinstance(string)`| `>=` & `<=`|`02022020` & `04062020`|Here, a conjuction of a cloud appresource function is implemented to accept only those data whose value is greater than equal to `02022020` and less than equal to `04062020`|Conjunction of Cloud Appresource Function|