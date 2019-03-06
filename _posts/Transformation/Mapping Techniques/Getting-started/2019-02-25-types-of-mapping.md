---
title: "Types of Mapping"
toc: true
tag: developers
category: "Transformation"
menus: 
    mappinggettingstarted:        
        title: "Types of Mapping"
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

For this example, let us say, you wish to map the destination field `email` with the source field `email` of the schema `customer`. 
These fields exist as nodes in the corresponding XML document. Then you can directly map the fields together, by providing the name 
of the source field in the destination field.

However if you wish to map the field `PIN` of the destination field, you cannot access the node directly. 
The node `PIN` exists as a child node of the parent node `shipping` and `billing` which in turn are child nodes to the node 
`address`. 


1) To access the node `PIN`, we provide the entire up to the node so that it can be accessed.

2) To access the node `PIN` of the node `billing`, we provide the following XPATH: address/billing/PIN

* Direct field mapping field
* Field mapping via XPATH

3. Choose-when Mapping

4. Function Mapping

5. Query Mapping 

6. Variable Mapping (Understanding Variables)

7. Lookups Mapping


