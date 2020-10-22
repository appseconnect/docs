---
title: "Lookup in Processflow Mapping"
toc: true
tag: developers
category: "Processflow"
menus: 
    processflow:
        title: "Lookup in Processflow Mapping"
        weight: 9
        icon: fa fa-file-word-o
        identifier: implementlookup
---

Once the Collection and the Reference tables are created, users can implement those lookups in the attribute mapping for the sync process. 

## Prerequisites for mapping Lookups
* You need to have valid credentials for login into the portal.
* You need to have the [Reference tables and Collection](/processflow/Lookup-repository-masterdata/) created.
* You need to have the processflow created along with the mapper node.

## Steps to implement lookup in attribute mapping
1.	Login to the portal and navigate to the processflow section. The processflow [listing page](/processflow/processflow-listing-page/) opens. 
![Lookup Mapping1](../../staticfiles/processflow/media/lookup-mapping1.png)   
2.	[Create a processflow](/processflow/creating-processflow/) or edit a created processflow in the processflow [Designer page](/processflow/designer-processflow/) opens.    
![Lookup Mapping2](../../staticfiles/processflow/media/lookup-mapping2.png)    
3.	Click on the Configuration node button of the mapper node.  
![Lookup Mapping3](../../staticfiles/processflow/media/lookup-mapping3.png)   
4.	You can view the mapper page after clicking on the mapper configuration button.    
![Lookup Mapping4](../../staticfiles/processflow/media/lookup-mapping4.png)   
5.	Expand the transformation nodes and click on the ellipses button (...) of the attribute where you want to implement the mapping. 
view here for [structure of mapping](/transformation/getting-started-with-mapping/#structure-of-mapping).   
![Lookup Mapping New](../../staticfiles/processflow/media/lookup-mapping-new.png)  
6.	Open the selected attribute and hardcode the syntax for mapping the lookup. You can map the 
lookup using two syntax formats. The syntax is given below for your reference.    
  
**Syntax 1:Using getMapping syntax** 

![Lookup Mapping New1](../../staticfiles/processflow/media/lookup-mapping-new1.png)        
Where ObjectType is the Reference Table Name & Value is the Source Attribute Name.        
For ex: if your reference table name is Country & attribute name country_id therefore the syntax will be.
![Lookup Mapping5](../../staticfiles/processflow/media/lookup-mapping5.png)   
    
**Note: You will get the function by expanding the function node available at the left-hand side 
of the mapping page. Expand Function > Generic Function & click over the getMapping function.** 

**Syntax 2: Using lookup syntax**   

![Lookup Mapping New2](../../staticfiles/processflow/media/lookup-mapping-new2.png)  

The above syntax is a hardcoded syntax. You can code the syntax as given above for implementing the mapping.
For Ex: if your reference table name is Country & attribute name country_id therefore the syntax will be.
 ![Lookup Mapping6](../../staticfiles/processflow/media/lookup-mapping6.png)    
**Note: You cannot select this function from the function nodes. Implementing this function needs to be done as hardcoded.**

On successfully implementing the mapping in the mapping space, you get a confirmation pop up for mapping the lookup. The screen is given below. Click on the Yes, do it button.
![Lookup Mapping7](../../staticfiles/processflow/media/lookup-mapping7.png)  
**Note: You would not get this confirmation message when the mapping implemented is not syntactically correct.**
 
After finishing the mapping click `Submit` button to save the mapping implemented.   
![Lookup Mapping8](../../staticfiles/processflow/media/lookup-mapping8.png)  
 
Following the above steps, you can successfully implement the mapping of the Lookups for  attributes. 



