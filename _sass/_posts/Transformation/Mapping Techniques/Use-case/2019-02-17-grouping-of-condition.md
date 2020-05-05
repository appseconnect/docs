---
title: "Grouping of Conditions"
toc: true
tag: developers
category: "Transformation"
menus: 
    overviewusecase:
        title: "Grouping of Conditions"
        weight: 3
        icon: fa fa-file-word-o
        identifier: transformationgrouping
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

**Scenario 1: Grouping of Conditions against the Country ID's.**  
The User can add multiple condition under an IF node. 
Below is the Screen of the window with multiple conditions that is done for grouping the Country Ids.  
![Scenario1-GroupingCondition](/staticfiles/Transformation/media/Scenario1-GroupingCondition.png)

The condition is provided with 3 clauses whose values are provided with the grand_total (The Order Total) and 
Country Id's 'US' (United States) and 'CAN' (Canada).

**Note: Users can add multiple condition by clicking on the `ADD NEW CLAUSE` button and also can add Grouped Clauses by click on the + button. 
Click on the Save icon after providing each Conditions**

Scenario Briefing - Suppose the user has a well settled business in North American Region but is able to deliver goods 
or products only to some countries. Therefore, in such case the user can provide the conditional mapping as 
`Only those orders will be accepted or confirmed whose Grand total or the Order Total is greater than 0 and 
country codes provided are within their delivery range`. And if not `the orders will be synced 
but will be kept on hold in the ERP for Reviewing`

The below screen shows the full grouped Conditions:  
![Scenario1-GroupingCondition2](/staticfiles/Transformation/media/Scenario1-GroupingCondition2.png)

**Note:The Value `N` in the Otherwise (else) describes that the order needs to be kept on hold for Review.**

**Scenario 2: Grouping of Condition for Discount Percentage**

The User can add multiple condition under an IF node. Below is the Screen of the window with multiple 
conditions that is done for grouping the discount parameters.  
![Scenario2-GroupingCondition](/staticfiles/Transformation/media/Scenario2-GroupingCondition.png)  

![Scenario2-GroupingCondition2](/staticfiles/Transformation/media/Scenario2-GroupingCondition2.png)

Scenario Briefing: Here the scenario is for applying discount percentage to specific group of orders where a 
nested grouping of the If-Else Conditional Mapping is implemented at the attribute level. 

The condition in this scenario would be like:

** If the Grand total or the Order total is less than 100 the default Mapping would be carried out.
** Else if the Order Total is greater than equal to 100 and less than equal to 600 than the provided discount percent would be executed. 
** Otherwise, if the Order Total lies above 600 input the discount as required that needs to be executed.

**Note:./ As prefix for grand total is added for searching the attribute in the immediate Parent Node**

The below screen that shows the provided condition.  

![Scenario2-GroupingCondition3](/staticfiles/Transformation/media/Scenario2-GroupingCondition3.png)