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
5.	Fill the required details & click Save and Close. Now for Mapping the root variable with destination field, follow the [steps of Attribute Mapping](/transformation/steps-to-cutomize-prebuilt-mapping/)
6.	Select the variable for the `Mapping Variables` list and click on Submit.
![addvariable3](/staticfiles/Transformation/media/addvariable3.png)
7.	Now for implementing the Source Mapping of the created Root Variable, Click on the Open button in the Root Variable section.
![addvariable4](/staticfiles/Transformation/media/addvariable4.png)
8.	In the mapping window, expand the `Source Schema` to view the list of all the attributes present. 
9.  Click the required attribute for which the variable is to be mapped. Once the mapping is done click on SUBMIT.
![addvariable5](/staticfiles/Transformation/media/addvariable5.png)


## Post-Conditions
The user can view the successful sync of the touchpoint for which the Root Variable was created

## Exception Courses
The user can view the error logs in the RESYNC Bucket of the agent (Cloud and OP), if the touchpoint fails to sync for any cases.

## Frequency of Use
The user can use the Root Variable whenever required, also the variable can be deleted any-time after its creation.

## Assumptions
Not Applicable






