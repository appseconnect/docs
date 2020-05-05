---
title: "Types of Variable"
toc: true
tag: developers
category: "Transformation"
menus: 
    mappinggettingstarted:        
        title: "Types of Variable"
        weight: 2
        icon: fa fa-wpexplorer
        identifier: typesofmapping
---


## Working with Variables in APPSeCONNECT

To facilitate touchpoint mapping, variables stores the data that can be used later in the transformation process. 
In AEC, variables are of 3 types - `Root Variables, Root Entity Variables, Variables`

**1.	Root Variables**
* Stores values returned from complex Xpath expression which can be used later in the mapping. 
* Root Variables can be used under any entity within the touchpoint.

**2.	Variables**
* Also called local variables, which can be applied to a specific Complex Object or Complex Object Collection under 
which this variable is defined.

**3.	Root Entity Variables**
 * A root entity variable is a variable that is value specific to every iteration.
 * Usually used for duplicate checks.
 * Root Entity Variables can be used under any entity within the touchpoint.

## Scenario explanation of each types of variables as per the connection `SAP Business One and Magento2`

### Scenario explanation for Root Variable:

While integrating two applications for adding `Business Partners` from `Magento 2 to SAP Business One`, the mapping for the variable is done to hold the addresses of 
each business partners for every iteration.  Here the Root Variable is mapped in the ComplexObject `BPAddresses` in the form of an XPATH, which when called, 
implements the other attributes of that complex object based on the address of the business partner, stored in the variable.

`Variable name used:$CustomerAddresses`   
Variable Mapping defined: [sourcelib:SetCustomerAddressItems({{addresses}})]     
Variable Description: This a Root variable which holds the addresses of the customers that are fetched using the Source function SetCustomerAddressItems().  

`Variable used in: BPAdresseses(Complex Object)`  
Xpath syntax provided for BPAdresses  
![image_rootvariable](/staticfiles/Transformation/media/image_rootvariable.png)     
    
Mapping Description: The Root variable is declared and defined with a source function to store the address. The variable is 
called in the complexobject mapping in the form of xpath, to access all the nodes and attributes of that complex object.

### Scenario Explanation for Variable:
For every iteration of an entity (complex object or a complex object collection), the variable stores complex data for that entity.
Assuming, the iteration position value is being hold in a variable. The variable is then called in an attribute, which is present under the same entity as that of the variable. 
The mapping is done for the attribute along with the variable for implementing the mapping.

`Variable initialized in the ComplexObject: BPAddresses > row`  
`Variable name used: $addressposition `    
Variable Mapping defined   
![image_variable](/staticfiles/Transformation/media/image_variable.png)       
Variable Description: This variable, holds the position of the execution order.    
`Variable used in: Attribute name (AddressName)`     
Xpath provided for the attribute   
![image_variable2](/staticfiles/Transformation/media/image_variable2.png)      
Mapping Description: The variable AddressNames is called which directly accesses the names under the node Items, 
which is executed according to the position value present in the variable $Addresposition.

### Scenario Explanation for Root Entity Variable: (Duplicate Data Check using Timestamp)
To avoid duplicate details for an item that has already been synced, Root Entity Variables is defined for restricting the duplicate details as well as to hold the new details of the product that is yet to be synced. 

`Variable name used: $MaxDate`  
Variable Mapping defined   
![image_rootentity_variable](/staticfiles/Transformation/media/image_rootentity_variable.png)      
Variable Description: Using this function, the current date and time in the format yyyy-MM-dd H:mm:ss is triggered. 
Here, Xpath is used where the complete packet is fetched based on the packet xpath provided, for that time and date and position.  


### Scenario Explanation for Root Entity Variable: (Custom Conflict Bucket)
For an application, Schemas can be common for two different touchpoint. As a single schema, can only have a single primary key, 
therefore while integrating two different touchpoints for a same schema, no messages will be generated in the resync bucket. 

Therefore, for creating a custom conflict bucket, Root Entity Variable is deployed.
For Ex: For Customer and Products touchpoint in Dynamics GP, the schema for both the touchpoints are 
common (Schema Name - RQeConnectOutType) due to which no sync results are shown in the resync bucket. 
For Resolving this issue, Root Entity Variables are used.





