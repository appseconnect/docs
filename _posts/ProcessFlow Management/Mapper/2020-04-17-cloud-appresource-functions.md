---
title: "Cloud Appresource Functions"
toc: true
tag: developers
category: "Processflow"
menus: 
    mapperprocessflow:
        title: "Cloud Appresource Functions"
        weight: 8
        icon: fa fa-file-word-o
        identifier: cloudappresource
---

Appresource Functions are the functions in APPSeCONNECT that are written in the adapter which is used for the data transformation from the source Application to the Destination Application. Appresources are library functions added to the DLL files. This Appresource functions are coded to perform a definite task. This document will help you to implement Cloud Appresource Function in Process Flow.

## Prerequisites to Implement Cloud Appresource:

1.	You need to have valid credentials to the Portal.
2.	You need to have a defined Process Flow or you need to create a new Process Flow. (Link to Process Flow Creation Document)
3.	You need to have the mapper node attached and saved with both Source and Destination App.

## Steps to Implement Cloud Appresource Functions for Process Flow:

1.	Create a new Process flow or open an existing Process Flow for which you need to implement Cloud Appresource. 
![cloud1](\staticfiles\processflow\media\mapper\cloudappresource-1.png)    
2. Click on the Node Configuration Icon for the Mapper Node. The Mapper/Transformation window for that Process flow opens. Expand the [transformation node](/transformation/getting-started-with-mapping/#structure-of-mapping).  
![cloud2](\staticfiles\processflow\media\mapper\cloudappresource-2.png)  
3. **Open** the attribute for which you need to implement and map the Cloud Appresource. Expand the Functions node to view the **Cloud Appresource Sub-Node**.
![cloud3](\staticfiles\processflow\media\mapper\cloudappresource-3.png)  
4. For creating a new Cloud Appresource function, you need click the **Blue coloured ADD (Plus Symbol) icon**. The Cloud Appresource Interface opens.
![cloud4](\staticfiles\processflow\media\mapper\cloudappresource-4.png)  
5. Provide the **Description** and **Example** to the cloud resource mapping for easy  user reference as why and how the cloud appresource is needed to be implemented.
![cloud5](\staticfiles\processflow\media\mapper\cloudappresource-5.png)  
6. The user can choose from the **Code snippet template** and **language fundamentals templates** also. The templates can be added in the code panel by drag and drop. 
![cloud6](\staticfiles\processflow\media\mapper\cloudappresource-6.png)  
7.	Code the Appresource and click on **Validate**. In case of error, validator will provide the area of the cause in the error message as shown below. 
![cloud7](\staticfiles\processflow\media\mapper\cloudappresource-7.png)  
8. Once validated successfully, Close the Code validator screen & click on the **SAVE** button.
9.	Expand the Cloud appresource Node for viewing the created function. Clicking on any of the function, will make it appear in the mapping Panel. You can also click on the **edit button** available beside the function name in the tree node, for making changes in the created Appresource function.
![cloud8](\staticfiles\processflow\media\mapper\cloudappresource-8.png)  
10. Once the mapping is done, click on the **Save button** to save the mapping.
Following the process, you can successfully create & define a Process Flow.  

**_Note:_**

- Cloud Appresource functions can be created from Process Flow Mapper Node level & from [App level](/accessing%20portal/accessing-portal/#b-choosing-app).

- You need to define Cloud Appresource every-time while working with Mapper node for a new Process Flow 

- Also, you need to define the Cloud Appresource every-time while working with Multiple Mapper nodes.

- Cloud Appresource created & defined in App level of your organisation will be available when the app is used in the Process Flow, you need not have to create & define a new function.

