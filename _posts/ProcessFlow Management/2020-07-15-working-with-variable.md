---
title: "Working with Capture Variables"
toc: true
tag: developers
category: "Processflow"
menus: 
    processflow:
        title: "Working with Capture Variables"
        weight: 7
        icon: fa fa-file-word-o
        identifier: variablesprocessflow
---
APPSeCONNECT Process Flow allows you to create variables that captures certain values that can be reused in any part of the Process Flow or in any other Process Flows designed within your organisation
Variables are used to store data so that it can be used within a Node or the Process Flow. With Capture Variables you will not have to provide expressions and generic function multiple times, 
instead you can define a capture variable with the required expression and deploy it anywhere within the Process Flow or any other Process Flow.

For Eg: You have a create a variable having the name `XYZ` with data type `String` and have associated an XPATH expression `//items/item/customer_id`. 
Once defined, upon calling the variable, it will execute the expression associated with the variable.

### Prerequisites

- You need to have valid credentials to your organisation.
- You need to design a new Process Flow or you need to have an existing Process Flow created.
- The variable name should be unique irrespective of the scope used.
- You need to provide the values for the mandatory fields in the GENERAL Tab of the Node Configuration Window before creating a Variable.

## Creating & Saving Variable

Creating Variables in Processflow is easier and can be done directly by dragging the app node
in the [designer section](/processflow/designer-processflow/).

1. Select an application node and drag the node to the designer panel where you want to define the Capture Variable.

2. The node configuration window appears. You can view two tabs in the node configuration window.
* General  
* Properties  

3. Enter the required details in the General Section (link will be given) of the node configuration window.

4. Now Click on Properties Section and the screen for variable list appears. Click on the `CREATE` button.

![var1](\staticfiles\processflow\media\var1.png)

5. You need to provide the following details in the **Properties Tab**:

- **Variable Name (Mandatory Field):** This is field where you need to provide the name of the variable.
- **Data Type (Mandatory Field):** Here, you need to select the type of variable that you require. You can select the data type from the drop down. You will be getting the following options in the drop down: `String`,`Bool`,`DateTime`,`Number`,`ComplexObject`,`ComplexObject`,`Double`.
- **Expression (Non-Mandatory Field):** You can provide a either an Xpath or a function expression for it to store against the variable.
- **Default Value (Non-Mandatory Field):** You can also store a default value against the variable such that if expression provided results invalid, the default value can be initiated during the execution process of the variable.
- **Scope (Need to be sure):** The variable can be executed depending upon the scope defined. The Scope of the variable can be defined within the following type.
    - **Process Flow:** This is the Global variable that can be used in the Process Flows under any nodes.
    - **Node:** This is the Local Variable and can be used only in the node where it is defined within that Process Flow.

![var2](\staticfiles\processflow\media\var2.png)

6. You will also be able to view the following toggle button in the `Create Variable` page.
- **Is Persistant:** On Enabling this toggle button, the value after the execution will be remembered across subsequent executions.
- **Is Encrypted:** Enabling this toggle will encrypt the output of variable in the database.

7. Once all the necessary details are provided. Click on the **SAVE** or **SAVE & CLOSE** button. 

**Note: The field for Default Value remains disabled if the datatype is selected as  `ComplexObject` or `ComplexObjectCollection`.**

![var3](\staticfiles\processflow\media\var3.png)

8. On clicking the `View List` button, you can view all the created variable for the node in a list view.

Following the above process you can successfully Define & Save a Capture Variable.

## Listing of Variables 

Once you have defined and saved the Variable, you will be able to view the list of the variables created. Follow the steps to view the list of variables.

A. Click on the `VIEW LIST` button in the **Create Variable** window after defining and saving the variable.

![var4](\staticfiles\processflow\media\var4.png)

B. You will be able to view the list of variables in Properties Tab. You can view all the variables that has been created on that node.

C. You will be able to view these following details in the Variable List.

- **Variable Name** - You can view the name provided while defining the variable.

- **Data Type** - The datatype used while defining will be displayed

- **Default Value / Expressions** - need clarity

D. On hovering over the name, you can view the scope of the variables defined.

Following the above process you can successfully view the Variable list.

## Editing Variable

Editing Variable is equally easy as creating and saving a variable. The process to edit a variable is given below:

A. Open the Application Node Configuration Window where you have defined the variable.

B. Click on the properties Tab. You can view the Variable listing page.

![var5](\staticfiles\processflow\media\var5.png)

C. Click on the Ellipses icon (Three horizontal Dots) on the actions column beside the variable. You'll get two options from the drop down.
- Edit: Enables you Edit the variable.
- Delete: Delete the created Variable.

D. Click on the EDIT button. You can view the `Create Variable` page. Modify the changes that you are required to and click on the SAVE button.

**Note:** You can modify any properties associated with the variable.

## Deleting Variable

A. Click on the Ellipses button beside the Variable, in the variable listing page.

B. Click on the Delete button available on the drop down window. 

![var6](\staticfiles\processflow\media\var6.png)

C. You'll be getting a confirmation message for the deletion process

![var7](\staticfiles\processflow\media\var7.png)

C. Your variable gets deleted from the list.

_**Note:** You cannot delete a Variable that is currently in use for execution and will be provided with an error while doing so._

## Execution Flow using Capture Variable

1) [Design the Process Flow](/processflow/creating-processflow/) and Open the **Node Configuration Window** for the application implementing [GET operation](/processflow/working-with-GET/). The node configuration window opens.

2) Enter the required fields in the **General Tab** of the Node Configuration Window of the application implementing GET operation. Click on the **Properties** Tab.

![var8](\staticfiles\processflow\media\var8.png)

3) Click on the **Create** Button in the Properties Window.

4) The Variable creation page opens. Enter the required details and click on the save button.

5) Navigate to the General tab and click on the **Configure Action Filter** button. Expand the Action filer node and click on the `created_at`. 

6) Enter the Variable name in the `Value` field and click on the save button.

![var11](\staticfiles\processflow\media\var11.png)

7) You can now successfully [deploy and execute](/processflow/deploying-and-executing-processfloww/) the Process Flow.

8) You can view the snapshot of the process flow.

![var12]()

9) Click on the `File Tab` of GET node to view all the files after the last of date.

![var13]()

**Note:**

- Generic Function for `Lastof` has been used for fetching the all data after the LastOf value provided. After an instance the of execution, the generic function will store the `created_date` value of the last data such that on the next execution, all the data after the `LastOf date` will be fetched.
- You need to provide `~ (tilt icon)` when providing Generic function in the `Expression` field.
- Using of the `$` symbol to for denoting the variable usage is mandatory.
- Variables with datatype `ComplexObect` & `ComplexObjectCollection` cannot be implemented on Action Filter.

## Capture Variables Utility:

This part of the document will list few scenarios that will help you understand Capture Variables:

| Variable Name | Datatype | Expression | Default Value |Scope| Utility|
|--------|-------------|-------------|---------|-------|-----|
| custxp | string | `{//items//item/` <br/> `cust_id}` | - |  ProcessFlow or Node | Here, the variable is created with the name `$custxp` and is provided with an xpath expression. When ever the variable is called within the scope, the expression provided in the variable will be executed. |
| countryval | string | `{//items//item/` <br/> `country_id}` | ProcessFlow or Node |`"NY"` | Here, a variable is created `$countryval` that stores a static value of sting type. On the applying the variable on Action Filter of GET node, the variable will execute the expression provided and fetch only those data, that matched the value provided in the variable.|
| Email | Bool | `{//items//item/ ` <br/> `email_id}` | True |ProcessFlow or Node|Here, the variable is created of the data type Boolean and is provided with both Expression and a default Value. On implementing the Variable on Action Filter for GET operation will fetch only those data that contains the email.|
| IsGuest | Bool | `{//items//item/ ` <br/> `country_id}`| True| ProcessFlow or Node|Here, the variable is created of the data type Boolean and is provided with both Expression and a default Value. On implementing the Variable on Action Filter for GET operation will fetch only those data that contains the value TRUE against the attribute country id.|
|TotalSpent| Double | `{//customers/customer` <br/> `/total-spent}`  | 55.55 | ProcessFlow or Node | Here, the variable is of the datatype `Double` is provided with default value. On implementing the variable in the action filter of Shopify operating GET, all the data whose `total-spent` value equals the variable default value will be fetched.|
|Frieght| Double | `{//items//item` <br/> `//addresses/frieght}` | 6.25 |Process flow or Node| Here, the variable frieght is declared with an expression and a default Value. On implementing the Action filter Operating GET for Magento2, all the data with friegh value 6.25 will be fetched.|
|LastData| DateTime | `~{gen:LastOf(//items` <br/> `/item/created_at)}~`|2020-07-08 06:31:35|Process flow or Node | Here, generic function is used as an expression and default value is provided as a Date Time  value which signifies that, the last record fetched will be upto the provided DateTime.|
|FirstData| DateTime | `{//items/item/` <br/> `created_at}`|2020-07-06 04:45:35 |Process flow or Node|Here, the expression and value used will fetch a specific data that matches the given value, when the variable is used in the action filter.|
|ZipCode|Number|`~{gen:FirstOf(` <br/> `//customers/` <br/> `/customer//` <br/> `addresses/zip)}~`|10001|Process flow or Node|Here, the variable is created with a generic function is provided  as an expression. The variable is implemented on the action filter of Shopify GET node that will fetch all the customers who zip code contains 10001.|
|GrpCode|Number|`~{gen:FirstOf(` <br/> `//items//item/` <br> `group_code)}~`| 1 |Process flow or Node| Here, the variable is created with a generic function as an expression. The variable is implemented on the action filter of Magento2 GET node that well fetch all the data whose Group Code matches the value provided in the variable.|