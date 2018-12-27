---
title: "Steps to define Static and dynamic criterias for an API"
toc: true
tag: developers
category: "API-Management"
weight: 6
menus: 
    quickstartapi:
        icon: fa fa-gg
        category: "Quickstart"
        title: "AssignParameters to Action Filter API"
        identifier: assignparameter-actionfilter
---

This Document provides the details and the functionality aspect of the API components to define static and dynamic criterias for an API 
along with the brief demonstration about it. Here you will find the overview and steps needed to carry out this API component.


**Understanding Action Filters**

An action filter is an attribute that you can apply to a controller action -- or an entire controller -- 
which changes the way in which the action is executed. 

* AEC API includes filters to add logic before or after action method executes. 
* Filters can be used to provide cross-cutting features such as logging, 
  performance measurement,exception handling, authentication and authorization.

* An action filter is an attribute which can be applied most to either an individual controller
  action or an entire controller.


**Enabling Query Options based on OData**

Web API supports the following OData query options:

|Option|Description|
|---|---|
|$select|Selects which properties to include in the response.|
|$filter|Filters the results based on a Boolean condition.|
|$skip|Skips the first n results.|
|$top|Returns only the first n the results.|
|$orderby|Sorts the results|

**Example of Queries**

