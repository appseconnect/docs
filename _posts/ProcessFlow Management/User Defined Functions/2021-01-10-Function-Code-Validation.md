---
title: "Function Code Validation"
toc: true
tag: developers
category: "Processflow"
menus: 
    processuserdefinedfunctions:
        icon: fa fa-link
        weight: 7
        title: "Code Validation" 
        identifier: processflowuserdefinedfunctionscodevalidate

---

This section of the document will allow you to know the code editor and the validation process of your function.

## Code Editor:

This is the space that will allow you to write the function code as per your need. Following the steps you can work with the function Code Editor successfully.

1) You can navigate to the Code Editor as per following mentioned User Journeys:
 - [Creating Function for the First Time](/processflow/Create-User-Defined-Functions/#creating-user-defined-functions)
 - [Editing Function](/processflow/Listing-Editing-user-defined-functions/#functions---edit)
 - [Modify Code](/processflow/Listing-Editing-user-defined-functions/#function---modify-code)

2) Either way you will get the **Code Editor Screen** of your Function.

![codeeditor1]()

3) By default you will be provided with default code along with a String Parameter, everytime you create a new function. 

4) You can use multiple code fundamentals and snippets as per the need.

### Language Fundamentals

5) You can implement the following Code Fundamentals as listed below:
 - If statement
 - Else If
 - Switch
 - While
 - For
 - Foreach
 - Do while
 - Using
 - Try Catch
 - Try Finally

![codeeditor2]()

6) You need to implement these fundamentals by dragging it to the required location within your Code.

![codeeditor3]()

### Code Snippets

7) You can also implement multiple Code Snippets based on your requirement as listed below:

 - IterateNodes
 - GetRequest
 - PostRequest

8) You need to drag individual snippets to the required location within your code.

9) Once you have successfully implemented your Function Code, you can click on **VALIDATE and SAVE** button

## Validation Status

You can have two instances for the validation process: Success or Failed. The instances are provided below in detail.

### Status: Successful

a) If your function code validation is successful, you get its success message.

![codeeditor4]()

b) You can SAVE the function immediately after the successful validation.

![codeeditor5]()

### Status: Failed

a) If your function code validation has failed, you'll be notified with the errors and error position within the function code.

![codeeditor6]()

b) Clicking on the errors, will navigate you to individual error positions in the **Code Editor**.

![codeeditor7]()

c) Debug all the listed errors and click on the **DEBUG** button to validate again.

On successful validation, the function will be saved.

Following the above procedures, you can successfully implement the Code Fundamentals and Snippets within your Function Code Structure.