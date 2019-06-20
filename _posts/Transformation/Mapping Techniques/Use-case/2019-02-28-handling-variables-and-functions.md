---
title: "Handling Variables and Functions"
toc: true
tag: developers
category: "Transformation"
menus: 
    overviewusecase:
        title: "Handling Variables and Functions"
        weight: 3
        icon: fa fa-file-word-o
        identifier: transformationhandling
---

## Use Case Name

Handling Variables and Functions

## Brief Description 
Root Variables are the variables that stores the data that can be used in the later within 
the process of transformation. This Use-Case demonstrates the use of the Root Variable for a Touchpoint.

## ACTORS
Implementers, Developers, Partners.

## Preconditions

Organisation Creation, Connection Creation & Touchpoint Creation

## Basic Flow

1.	Login to the APPSeCONNECT Portal and Navigate to the Touchpoint area for the connection you have created.
2.	Select the touchpoint for which the Root Variable is to be created. And click on the Transform Button.
3.	Click on the Option `ADD VARIABLE` present on the Transform Window.
![addvariable1](/staticfiles/Transformation/media/addvariable1.png)
4.  Input the details Variable Name, Data Type and the Reference Entity.               
![addvariable2](/staticfiles/Transformation/media/addvariable2.png)        
**Note: In this case Variable Name `ShipmentCode` is used whose Data Type is provided `String`. 
Also for the `Data Type, Complex Object and Complex Object Collection` providing the XPATH is mandatory**
5.	Once the details are filled, click on Save and Close. 
6.	For Mapping the variable, click on the Open button, which is visible beside the variable name, when hovered over.
7.	Select the function from the `Functions List`  and click on the function as required (Taken [genericlib:getMapping(ObjectType,Value)] as an example)    
**Note: The mapping can be executed with the functions as well as, with the source attributes. Implementing mapping only with the functions is not mandatory.**
![addvariable_new](/staticfiles/Transformation/media/addvariable_new.png)   
8. Now for implementing the mapping, input the required ObjectType and Value in the Function syntax. Click on the Submit Button, on completion of mapping.
![addvariable_new2](/staticfiles/Transformation/media/addvariable_new2.png)   


## Post-Conditions
The user can view the successful sync of the touchpoint for which the Root Variable was created

## Exception Courses
The user can view the error logs in the RESYNC Bucket of the agent (Cloud and OP), if the touchpoint fails to sync for any cases.

## Frequency of Use
The user can use the Root Variable whenever required, also the variable can be deleted any-time after its creation.

## Assumptions
Not Applicable






