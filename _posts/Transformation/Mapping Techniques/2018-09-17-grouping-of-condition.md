---
title: "Grouping of Conditions"
toc: true
tag: developers
category: "Transformation"
menus: 
    transformation:
        title: "Grouping of Conditions"
        weight: 5
        icon: fa fa-file-word-o
        identifier: transformationlogic
---

## What is Grouping of Conditions

Mapping can have multiple condition that are interlinked or grouped. 
Scenario might require more than one conditions for mapping an attribute. 
APPSeCONNECT Grouping of Conditions Technology gives the privilege to add multiple clauses or condition 
under one IF statement when mapping the attributes. 

In the IF-Else Mapping, the user/implementer has the privilege to add numerous Condition at one go. 
An IF statement can have numerous conditions, APPSeCONNECT IF-ELSE Mapping can add numerous clauses or conditions. 
Here the condition parameters can be grouped when required such that the proper grouping of the criteria could be maintained.

## Grouping of Conditions

Below are the screens of the scenarios that displays the grouping of the conditions of an object. 

**Scenario 1: Grouping of Conditions against the Country Code.**  

The User can add multiple condition under an IF node. Below is the Screen of the window with multiple conditions 
that is done for grouping the Country Codes.
![UIgrouping-countrycode](/staticfiles/transformation/media/UIgrouping-countrycode.png)

The condition is provided with 3 clauses whose values are provided with state codes FL (FLORIDA), NY (New York), 
CA (California).

**NOTE: Users can add multiple condition by clicking on the `ADD NEW CLAUSE` button. 
Click on the Save icon after providing each Conditions.**

Scenario Overview - If any order has the state code for FLORIDA or NEW YORK or California or any other State in US, 
the IF Condition will be fulfilled and the Hard-Coded mapping for the Country Code value will be executed (ShipToCode = US). 
The Below Screen shows the full grouped Conditions. 
![UIgrouping-countrycode-fullgrouping](/staticfiles/transformation/media/UIgrouping-countrycode-fullgrouping.png)  
Note:US = United States.

**Scenario 2: Grouping of Condition for Discount.**

The User can add multiple condition under an IF node. Below is the Screen of the window with multiple conditions 
that is done for grouping the discount parameters.
![UIgrouping-discount](/staticfiles/transformation/media/UIgrouping-discount.png)  
The condition is grouped with 2 clauses whose values are provided with greater_than 100 and less_than_equal 600 
for the Attribute DocTotal (Order Total).

Scenario Overview: Here the values for the given grouped conditions are the parameters for the discount that is to be 
provided against the Order Total. If the Order Total lies between the given condition the hard-coded mapping value 
DiscountPercent = 40 would be executed for the given parameter.
The below screen shows the provided condition.
![UIgrouping-discount-fullgrouping](/staticfiles/transformation/media/UIgrouping-discount-fullgrouping.png)

**Scenario 3: Grouping of Condition for Currencies in ComplexObjectCollection Level.**

The below Condition grouping is done in the ComplexObjectCollection Level. The screen shows condition grouping for 
the currencies.
![UIgrouping-complexobjectcollection](/staticfiles/transformation/media/UIgrouping-complexobjectcollection.png)
The condition is provided with multiple clauses whose values are provided with the State Codes.
NY- New York, FL-Florida,CA-California,AZ-Arizona, GA-Georgia.

Scenario Overview: Here if the state codes for the orders are within the conditions that are provided then the 
IF Node will be Executed whose hard-coded mapping is done against CURRENCY whose value is $
The below screen shows the grouped condition for the Currency attribute.
![UIgrouping-complexobjectcollection-fullgrouping](/staticfiles/transformation/media/UIgrouping-complexobjectcollection-fullgrouping.png)

**Note: Currency Code $ = US Dollars.**