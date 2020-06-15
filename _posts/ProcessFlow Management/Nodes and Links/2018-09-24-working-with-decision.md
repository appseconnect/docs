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

APPSeCONNECT Process Flow is enabled with a decision node that will not execute the data that does not fulfills your decision criteria. The below image will help you design a process flow with the Decision Node.

![PFdecision1](\staticfiles\processflow\media\pfdecision1.PNG)

### Understanding conditions:

`For Ex:` A Decision condition is implemented where the operation evaluates and extracts the errored data and routes to a flow where the data are process for correction.

The set of data that fulfils this condition, are marked as passed and is posted to the respective application. These Routing conditions can be applied in other scenarios as well where the decision condition filters data related to other specific mapping scenarios or data with different response code from its source API. These condition checks can alter as per your business requirement.

The following are the fields that you will get on dragging the Decision Node in the Process Flow Designer Panel.

- **Node Description:** Here, you can provide a short description for the Decision Node.

- **Decision Name:** Here, you can provide a short name that will help identify the purpose of the Decision Node when working later.

- **Decision Key:** This is the actual field which decides the execution process of the decision node. Your `Decision Key` can be applied in these following areas:

    - Decision on **Attribute**: 
        
        Applying Decision on **attribute** allows the node to decide the condition over the value passed through the attribute. 
    
        As all data for an Entity (For Ex: Order, Business Partner etc ) are transfered through packets which are further made up of attributes, you can implement your business flow by applying condition on required attribute. If decision node meets up the condition expression provided, the data will be passed.

    - Decision on **Generic Function**: 
    
        APPSeCONNECT Generic Functions allows you to extract internal transactional values or modify the values based upon the functions that are used and requirements. 
        
        Applying Decision on Generic Appresource Function will execute the condition over the provided function and will allow the node based on the provided condition. [Click Here](/transformation/using-library-methods/) for more details on Appresource Functions.

        `For Ex: {gen:IsDate()}`

         _**Note: You need to provide the namespace prefix for generic function `gen:xyz()` when decision key evaluates a generic function.**_


    - Decision on **Cloud Appresource Function**:  
    
        Cloud Appresource are the functions that are defined in the Cloud portal itself for extracting specific values through function for the attribute mapped with the defined function.
        
        Applying Decision on Cloud Appresource function will allow the node to execute the condition on the provided Cloud Appresource Function and checks for the value recieved from the function and value provided in the Decision Node. On successful evaluation of the condition, data passed thorugh the condition moves to the next node. [Click Here](/processflow/cloud-appresource-functions/) to know more about Process Flow cloud appresource function.

        `For Ex: {cloud:timeinstance(string)}`

         _**Note: You need to provide the namespace prefix for generic function `cloud:xyz()` when decision key evaluates a generic function.**_

    - Decision on **Static Values:**

        Static Values are any random values that can be provided in the Decision key for allowing condition check in the Process Flow. Any value that is provided in Decision Key with or without conjunction can be a Static Value. Static Values can be provided to check and verify whether the node successfully execution the decision nodes. 

        In Business Perspective, any decision key if provided be it the generic function or Attibute value extraction though XPATH or a cloud appresource function provided in Decision Key will be considered as a static Value.


_**Note:** You can only provide those Appresource Functions (both Cloud & Generic) as Decision Key which are defined either in Process Flow Level or Organisation level or APPSeCONNECT level._

- **Operator:** You will be provided with a list of operators thats will enable the key to take the decision.

- **Value:** Here, you need to provide the value for the KEY provided.

- **Add Criteria:** You can also add multiple combined conditions & conjunctions using `AND` `OR`.   

- **Toggle button:** You will be able to activate multiple conditions by activating/deactivating the toggle button.

- **Preview URL:** You can view the complete expression that will be generated as per the condition the Preview URL box below. In-Case, the final expression in the URL preview is too long, you need to hover, to view the complete expression.


## Prerequisites:

- You need to have valid credentials of the portal.
- You need to [create a Process Flow](/processflow/creating-processflow/) or need to have an existing Process Flow developed.
- When working with Cloud Appresource function in Decision Node, you need to define the function before implementing the decision criteria. [Click Here](/processflow/cloud-appresource-functions/) to know more about Process Flow cloud appresource function.

## Working Principle:


1.  Drag the decision node in the designer panel from the Process Property menu. The Decision Node Configuration Window opens.

![PFdecision2](\staticfiles\processflow\media\pfdecision2.PNG)

2.  You can view the above mentioned fields. Enter the name & node description. 

3. Click on the **Add Criteria** button. You can view the fields for providing the condition.

![PFdecision3](\staticfiles\processflow\media\pfdecision3.PNG)

3. You need to provide the Decision KEY, for commanding the Decision Operation. Here you can view the decision key applied on the Decision Attribute.

    **Scenario:** Implementing Decision on Attribute.

    **Description:** In this case, the scenario is implemented with fact keeping in mind that only those customers shall be accepted to sync to destination application, who belongs to the Country either having the country code of `INDIA` or the country code of `United States`. The condition will be executed on the provided xpath and will accept only those data on the next node that matches the provided condition.

    - **Decision Key:** `{//addresses//item/country_id}`
    - **Operator:** `=`

    - **Value:** `IN`

    OR

    - **Decision Key:** `{//addresses//item/country_id}`
    - **Operator:** `=`
    - **Value:** `NY`

_**Note:**_ 
 - _**You need to click the button `Add Criteria` for providing multiple condition with conjunctions. Also, you need to enable the toggle button for activating the conditions.**_
 
 - _**Providing the Curly Brackets ({}) are mandatory when entering the decision key**_

 - _**If the Decision key is Generic Function you need tp provide the syntax with the Namespace Prefic for the function. If it is a Cloud appresource function, you need to provide the**_

![PFdecision4](\staticfiles\processflow\media\pfdecision4.PNG)

5. Enable the Toggle buttons for the criteria and click on the SAVE button.

6. Once all the configuration are made for the Process Flow. [Deploy and Execute](/processflow/deploying-and-executing-processfloww/) the Process Flow.

7. After completion of the execution, you successfully view the snapshot for the Decision Node. [Click Here](/processflow/snapshot-processflow/) to know more about Process Flow Snapshots. The **Activity Log** against the `Decision node` in snapshot will display you the status of the condition.

![PFdecision5](\staticfiles\processflow\media\pfdecision5.PNG)

**Note:** 

**- The tabs `Data log` for the Decision Node will display list the data that entered the Decision Node.
- The tab `Transaction File` will display you the INPUT file available in the GET node.**

Following the above process you can successfully implement Decision for a Process Flow.


## Business Specific Scenarios for Decision:

| Decision Applied On | Decision Criteria | Operator Used |Value| Decision Description |
|----|-------------|---------|---------|-------|
| Attribute | `{//items//item//state_code}` | `=` | `CAL` | Only those orders shall be accepted whose state provided in the address is `CAL` (CAlifornia) |  
| Conjunction of Generic Function & Attribute |`{getMapping('TAX',//items/items//` <br/> `extension_attributes/` <br/> `applied_taxes/item/code) ` AND `//items//item//` <br/> `shipping/country_id}`| `contains` & `=`|`SVAT` & `CA` | This decision states that only those orders shall be accepted whose Tax code contains SVAT & Country code is `CA` (CANADA) |
| Generic function |`{IsDate()}`| `=` | `2020-06-01`| This condition states that only those data shall qualify the decision whose date equals to the provided value|
|Cloud Appresource|`{cloud:timeinstance(string)}`| `<=`|`01062020`|Here, a cloud Appresource function is defined and is provided in decision key where the condition checks that only those data would be accepted whose data, returned, is less than the value provide|
|Conjunction of Cloud Appresource Function|`{cloud:timeinstance(string)}` AND `{cloud:timeinstance(string)}`| `>=` & `<=`|`02022020` & <br/> `04062020`|Here, a conjuction of a cloud appresource function is implemented to accept only those data whose value is greater than equal to `02022020` and less than equal to `04062020`|
| Generic Function | `{gen:FormatDate(`05-06-2020`,`dd-mm-yyyy`}`| `contains`| `{gen:FormatDate` <br/> `(`2020-06-05`,`yyyy-mm-dd`}`| Here, the generic function is implemented on both Decision Key & Value to compare and decide where the incoming date contains the provided format.|  
    



