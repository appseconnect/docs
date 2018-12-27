---
title: "Development Guidelines"
toc: true
tag: developers
category: "SDK"
menus: 
    sdkprerequisite:
        title: "Guidelines"
        weight: 7
        icon: fa fa-file-word-o
        identifier: sdkprerequisiteguidelines
---

**Pascal Case and CamelCase**

Pascal Casing - First character of all words are Upper Case and other characters are lower case.
Example: BackColor
Camel Casing - First character of all words, except the first word, are Upper Case and other characters are lower case.
Example: backColor

**Classes**

- Class Names should follow the Pascal Casing 
- Class Names should be meaningful and complete. Abbreviations should be avoided 
    - Good: Licensing, TallyDataImport 
    - Bad: Lic, tlydtimport, tallydataimport 
- Classes should be grouped and created in folders according to function 
- Classes should only expose methods and members which are required to be accessed from outside the class.

**Methods**
- Method Names should follow Pascal Casing 
- Method Name should be meaningful and complete. Abbreviations should be avoided 
    - Good: GetLicense, ReturnDataTable 
    - Bad: getlic, retdt 
- Method name should denote what it does, e.g. GetClientLicenseKey, ExecuteDeleteQuery 
- Methods should be explained with comments wherever possible 
- Methods should not generally have more than 25 lines of code. If longer, consider breaking it into smaller methods 
- A method should do only one job. Multiple jobs should be broken into multiple methods. 
- The event handler should not contain the code to perform the required action. Rather call another method from the event handler 
- Do not use try-catch blocks for control flow. Instead use if else with return.

**Variables**
- Variable Names should follow Camel Casing 
- Variable Names should be meaningful and complete. Abbreviations should be avoided 
    - Good: licenseKey, currentDate 
    - Bad: lickey, curdt 
- Do not use underscores (_) for local variable names.  
- All member variables must be prefixed with underscore (_) so that they can be identified from other local variables

**Spacing and Indentation**
- Use TAB for indentation. Do not use SPACES. Define the Tab size as 4 
- Comments should be at the same level as the code (use the same level of indentation) 
- Curly braces ( {} ) should be at the same level as the code outside the braces 
- Use one blank line to separate logical groups of code 
- There should be one and only one single blank line between each method inside the class 
- The curly braces should be on a separate line and not in the same line as if, for etc. UI Elements 
- No UI element should have the default name, e.g. textBox1, panel1, etc. Give each UI element a meaningful name, e.g. txtDistributorName, pnlDatabaseSettings, etc. 
- Elements in a form should be left aligned with equal spacing. As far as possible, maintain right alignment as well. Top, bottom, right and left margins should be generally uniform. 


**Programming Practices**

- Do not hardcode numbers. Use constants instead. Declare constant at the top of the file and use it in your code or use the constants in the config file or database so that you can change it later. Declare them as constants only if you are sure this value will never need to be changed. 
- Never access the database from the UI pages. Always have a data layer class which performs all the database related tasks. This will help you support or migrate to another database backend easily. 
- Convert strings to the lowercase or upper case before comparing. This will ensure the string will match even if the string being compared has a different case. This may not be followed for strings such as passwords, license keys, etc. 
- Avoid using member variables. Declare local variables wherever necessary and pass it to other methods instead of sharing a member variable between methods. If you share a member variable between methods, it will be difficult to track which method changed the value and when. 
- If the required configuration file is not found, the application should be able to create one with default values. 
- If a wrong value found in the configuration file, the application should throw an error or give a message and also should tell the user what are the correct values. 
- Error messages should help the user to solve the problem. Never give error messages like "Error in Application", "There is an error" etc. Instead, give specific messages like "Failed to update the database. Please make sure the login id and password are correct." 
- When displaying error messages, in addition to telling what is wrong, the message should also tell what should the user do to solve the problem. Instead of message like "Failed to update database.", suggest what should the user do: "Failed to update the database. Please make sure the login id and password are correct." 


**Exception Handling**

- Use try-catch in your data layer to catch all database exceptions. This exception handler should record all exceptions from the database. The details recorded should include the name of the command being executed, stored proc name, parameters, connection string used etc. After recording the exception, it could be rethrown so that another layer in the application can catch it and take appropriate action. 
- Do not write very large try-catch blocks. If required, write separate try-catch for each task you perform and enclose only the specific piece of code inside the try-catch. This will help you find which piece of code generated the exception and you can give the specific error message to the user. 
- Never do a 'catch exception and do nothing'. If you hide an exception, you will never know if the exception happened or not. A lot of developers uses this handy method to ignore non-significant errors. You should always try to avoid exceptions by checking all the error conditions programmatically. In any case, catching an exception and doing nothing is not allowed. In the worst case, you should log the exception and proceed. 
- In case of exceptions, give a friendly message to the user, but log the actual error with all possible details about the error, including the time it occurred, method and class name etc. 
- Do not write try-catch in all your methods. Use it only if there is a possibility that a specific exception may occur and it cannot be prevented by any other means. For example, if you want to insert a record if it does not already exist in the database, you should try to select the record using the key. Some developers try to insert a record without checking if it already exists. If an exception occurs, they will assume that the record already exists. This is strictly not allowed. You should always explicitly check for errors rather than waiting for exceptions to occur. On the other hand, you should always use exception handlers while you communicate with external systems like network, hardware devices etc. Such systems are subject to failure anytime and error checking is not usually reliable. In those cases, you should use exception handlers and try to recover from an error. 


**Database**

- All database connections in code should be handled through the DB class. The DB class should have generic methods for connection, disconnection, execution of insert, update, delete queries, returning DataTables, returning DataSets, etc. 
- SQL queries should be defined in a separate class per functional module. The methods in the class should have parameters which are required for the creation of the query. The UI classes should not contain any SQL Query constructs. This would help in managing changes in case of database migration and database structure changes. 
- No queries should have "Select *". Instead, use the column names. If required, use the Query Designer in SQL Server Management Studio to generate query statements. 
- Do not access DataTables using the column indexes. The indexes might change if a new field is inserted. Access columns by the fieldname, e.g. dataTable1.Fields("DistributorID") instead of dataTable1.Fields(0) 
- While modifying or deleting a record check for the constraints before execution of the update of delete statement. This may be done at the database level through triggers and the appropriate exception being caught in the code. 
- Define meaningful table and column names. Do not use short forms. Use the Pascal Casing 
- Define meaningful Stored Procedure, Function, Trigger, Index, etc. names. Do not use short forms. Use the Pascal Casing 
- Define Foreign Key relationships while creating the database structure. It will help in ensuring that invalid data does not get into the database. Use triggers and constraints where foreign key constraints are not possible 
- Use functions in SQL Server instead of using complex queries in code. This will improve performance and also help in making changes. Writing queries also become easier.

