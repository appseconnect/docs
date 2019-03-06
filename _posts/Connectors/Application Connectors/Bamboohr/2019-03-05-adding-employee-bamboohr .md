---
title: "Adding Employee in BambooHR"
toc: true
tag: developers
category: "Connectors"
menus: 
    bamboohrconnector :
        title: "Adding Employee in BambooHR"
        weight: 13
        icon: fa fa-file-word-o
        identifier: bamboohrconnectoremployee
---

## Prerequisites

Need to have a valid account in BambooHR


## Steps to add a new employee in BambooHR

Login to the BambooHR portal & Click on the Employee tab in menu bar.The Home Page of the BambooHR is given below. 
    
![employeeadd-bamboohr1](/staticfiles/connectors/media/application-connector/employeeadd-bamboohr1.png)


The Employee window opens up. Click on the button `Add Employee`. 

![employeeadd-bamboohr2](/staticfiles/connectors/media/application-connector/employeeadd-bamboohr2.png)


The employee form opens. Provide the data into the fields for registering an employee in the portal.

![employeeadd-bamboohr3](/staticfiles/connectors/media/application-connector/employeeadd-bamboohr3.png)

The fields details are given below:

a.	Personal -contains the employee id, name, date of birth, gender etc.

b.	Address- contains the address field of the employee

c.	Compensation - contains the payment details of the employee

d.	Contact - is for providing the contact details.

e.	Job - for providing the hiring date.

f.	Employment Status - for providing the status of the employment. If Intern or Full time, Part-time etc.

g.	Job Information - Contains the Job Title, Reports To, Department division and location.

Fill up the required field and Click SAVE button

![employeeadd-bamboohr4](/staticfiles/connectors/media/application-connector/employeeadd-bamboohr4.png)

The above steps complete the process of adding new employee to the bamboo HR.

## API Documentation of BambooHR -  GET an employee

|HTTP Method|Path|Parameters|Response Format|Compatibility Note|Failure Responses|Success Response|Sample URL|
|---|---|---|---|------|------|------|------|
|GET|/api/gateway.php/company/v1/employees/number?fields=fieldList|The fieldList is a comma separated list of values taken from the official list of field names. number is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any)|The response for this resource is available in XML or JSON format. XML is the default. To request JSON data set the HTTP header "Accept" to "application/json"|For backwards compatibility reasons the state field has an inconsistent behaviour for just this API call. It will not return the full name of a state. Rather it returns the two character US state abbreviation |403 - if the API user does not have permission to see the requested employee. 404 - if the employee does not exist |200 - The response content will be an XML document with the requested information. Any fields that the API user does not have permission to see will be empty in the response|[Sample URL](https://api.bamboohr.com/api/gateway.php/testcorp/v1/employees/123?fields=firstName,lastName)|



