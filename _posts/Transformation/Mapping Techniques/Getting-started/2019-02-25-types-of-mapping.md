---
title: "Types of Mapping"
toc: true
tag: developers
category: "Transformation"
menus: 
    mappinggettingstarted:        
        title: "Types of Mapping"
        weight: 1
        icon: fa fa-wpexplorer
        identifier: typesofmapping
---
APPSeCONNECT Mapping Types are given below:

**1. Hard Coded Mapping** -  Hardcoded mapping is implemented when it is required that a field of the destination schema bears a 
    constant value such that the value of the field does not change with every transformation carried out.

AN EXAMPLE: If a customer wants every business partner, added from the source to the destination application to come with a flag of constant value, 
then he can deploy hard-coded mapping.


**2. Field to Field Mapping**- is required when your business demand mapping a field of the destination schema to directly fetch 
   its value from the source schema.

AN EXAMPLE: If you want the `Customer` schema of SAP B1 to fetch the value of the field `Country` directly from the country field of the source schema, 
you can map the `country` field of both the schemas.   
![field-field-mapping](/staticfiles/Transformation/media/field-field-mapping.png)       
For this example, let us say, you wish to map the destination field `email` with the source field `email` of the schema `customer`. 
These fields exist as nodes in the corresponding XML document. Then you can directly map the fields together, by providing the name 
of the source field in the destination field. However if you wish to map the field `PIN` of the destination field, you cannot access the node directly. 
The node `PIN` exists as a child node of the parent node `shipping` and `billing` which in turn are child nodes to the node 
`address`. 

1) To access the node `PIN`, we provide the entire up to the node so that it can be accessed.
2) To access the node `PIN` of the node `billing`, we provide the following XPATH: address/billing/PIN

* Direct field mapping 
* Field mapping via XPATH

**3. Choose-when Mapping -** Analogous to `if-then-else` statement, it is deployed when you want the value of a field 
of the destination schema to be conditionally dependent on the value of the corresponding field of the source schema. 
In other words, the value of the destination field would depend on the source field, such that for every different value
 of the source field, there is a corresponding value for the destination field.

Take the analogy of the `if-then-else` statement to understand this.
Say, you want to set up the value of a variable `x` such that it depends on another variable `y`. If the value of `y` is 1, `x` will be 2, if `y` is 3,
`x` will be `100` and so on.

Similarly, consider the `customer entity` and you are transferring data from the source application to the destination application. 
Suppose, you want the value of the `country` field from the source schema to be mapped with the same field of the destination schema. 
However, you want to setup such that, if the country is `USA` in the source, in the destination it is 1. 
But if it is `India`, at the destination it will be `2`. In such a case, we deploy `choose-when` mapping.

The generalised structure of the `choose-when` condition is:


[choose]

[when] ({{variable-name}} = = (condition))

17

[endwhen]

[otherwise]

13

[endotherwise]

[endchoose]

**4. Function Mapping** - 

Prerequisite: Knowledge about [AppResource functions](/transformation/using-library-methods/).

* AppResource functions can be deployed for facilitating the required data transformation between the source and destination application.
* To use AppResource functions you only require to know the fields/variable you desire to map along with the name of the function.
* To understand the utility of these functions let us look at the example below.
Suppose when developing a particular touchpoint, you come to learn that, destination application accepts date time in a different from 
what is sent by the source application. Let the accepted date time format be like "yyyy/MM/dd HH:mm:ss" and received format be like "dd-MM-yyyy". To get around this dilemma, we use AppResource functions.

Refer this [link](https://www.youtube.com/watch?v=mwcLjXwu6fQ&t=0s&index=5&list=PLSZUUcH5fP9_msXnLwdGp0Mb4Bu0i0g-y) to know in details about functional mapping. 

**5. Query Mapping** - As the name suggests, Direct Query mapping is actually running a query in the source schema so as to store the resultant data from the query in the destination field.
For example, when we run a SQL query we provide the name of the field whose result we require,the name of the table from where the data is to be fetched and the parameters, on the basis of which the results would be filtered.

Structure of an SQL query is: select `name` from `student` where `rollno` = 1.
`Name` is the output field, `student` is the schema and `rollno` is the parameter whose value we are checking to filter the data.
We use a similar format when we wish to fetch data from the source or destination schema in APPSeCONNECT. 
We provide the name of the desired field, the schema and the parameters in the query.

The native AppResource function that we use for this purpose is 'sourcelib' or 'destinationlib' depending on from where we wish to receive the data.
`Structure of a query in mapping is`
destinationlib:GetUniqueId(",",",") where we provide the required field the schema and the parameters in order.

**6. Variable Mapping** - Click [Variable Mapping](/transformation/defining-variables-and-functions/) to know in details.

**7. LookUp Mapping** - Click [Lookups Mapping](/transformation/using-lookups-for-value-exchange/) to know in details


