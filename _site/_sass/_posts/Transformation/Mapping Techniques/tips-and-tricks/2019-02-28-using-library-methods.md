---
title: "Using library methods/AppResource Function"
toc: true
tag: developers
category: "Transformation"
menus: 
    transformtipsandtricks:
        title: "Using library methods/AppResource Function"
        weight: 3
        icon: fa fa-file-word-o
        identifier: transformusinglibrary
---
Appresource Functions are the functions in APPSeCONNECT that are written in the adapter (APPSeCONNECT supports calling external 
functions written in C# inside the adapter) which is used for the data transformation from the source Application to the Destination 
Application. `AppResources are library functions added to DLL`. This Appresource functions are coded to perform a definite task. 

In APPSeCONNECT there are total 5 Appresource Functions:

1.	**Native AppResources:** - These Appresource are written with the adapter itself. When the Adapter is uploaded in the cloud, 
    these appresource function are uploaded with the adapter itself.  
2.	**Sourcelib AppResources** - The appresource functions of the source application is the Sourcelib appresources. 
    These functions are referred by *sourcelib.**
3.	**Destinationlib Appresources** – The appresource function of the destination application is the Destination Appresources. 
    These functions are referred by *destinationlib.**
4.	**Generic AppResources:** - The generic appresources are the functions that have general defined task which are provided 
    by APPSeCONNECT itself. These functions are referred by *genericlib.**
5.	**Cloud Appresources:** The Cloud Appresources are the functions that are used when creating a touchpoint for a technology or custom app. 
    These functions are written with the cloud portal itself. The function of the cloud appresources are referred by *cloudResourcelib.**

## Prerequisites for working with AppResources

[Click](/transformation/basic-of-source-destination-mapping/#pre-requisites-for-source-and-destination-mapping) for knowing the common prerequisites.

Need to upload the adapter for accessing the appresources.[Click ](/connectors/Version-Extraction-For-Adapter-Upload/) to know more.

Note: For an Application, The Library Function can also be viewed in the APPS Sections. 
Navigate to APPS > Expand the Application Node > Functions. 
All the Library Function for that Application can be viewed.


## Implementing the AppResources in Mapping

1.	Login to the APPSeCONNECT Portal and Navigate to the Touchpoint area for the connection which is required for the 
    Transformation Process.  
**Note:  Here the connection used is Magento2 – SAP Business One.**  
2.	Click **transform button** in the touchpoint for which the transformation is to be done. 
    [Click](/transformation/steps-to-cutomize-prebuilt-mapping/) to know more about the Mapping attribute mapping.  
**Note: Here the Touchpoint used is Delivery Update Response.**  
3.	In the Mapping window of the attribute, expand the node Functions to view all the categories of the Appresources 
    [Generic, Source, Destination and the Cloud].  
![app_resourcemapping1](/staticfiles/Transformation/media/app_resourcemapping1.png)  
4.	On Expanding the Generic Function Node, all the Generic Appresources can be viewed. Clicking on any of the function will be 
    appear in the Mapping Panel.     
![app_resourcemapping2](/staticfiles/Transformation/media/app_resourcemapping2.png)  
	 
5.	On Expanding the *Source Function Node (Native Function)* all the Native Appresources for the source function is viewed. 
    Clicking on any of the function, will make it appear in the mapping Panel.    
![app_resourcemapping3](/staticfiles/Transformation/media/app_resourcemapping3.png)	      
6.	On Expanding the *Destination Function Node (Native Function)* all the Native Appresources for the 
    destination function is viewed. Clicking on any of the function, will make it appear in the mapping Panel.  
![app_resourcemapping4](/staticfiles/Transformation/media/app_resourcemapping4.png)	
7. For Working with cloud appresource, the + (in Bold) button is needed to be clicked for creating the Cloud Resource.  
   The Cloud Appresource window opens.  
![app_resourcemapping5](/staticfiles/Transformation/media/app_resourcemapping5.png)	
8.	The user can choose from the Code snippet template and language fundamentals templates also. The templates can be 
    added in the code panel by drag and drop.   
![app_resourcemapping6](/staticfiles/Transformation/media/app_resourcemapping6.png)	
9.	The templates can be added in the code panel by Drag and Drop. 
10.	Code the Appresource and click on Validate and SAVE. Now expand the Cloud resource Node for viewing the created function. 
    Click any of the function, will make it appear in the mapping Panel.  
![app_resourcemapping7](/staticfiles/Transformation/media/app_resourcemapping7.png)	
11.	Once the mapping is done, click on the *Submit button* to save the mapping.

## AppResource Function Name

APPSeCONNECT provides the flexibility to the users for customizing the pre-packaged touchpoints as per the business needs 
or requirements by following APPSeCONNECT's own syntax functions.

|Application Name |Application Version |FunctionId|Function Name|Description|Example|
|---|---|---|---|------|----|
|Salesforce|25|2207|GetContactPersons (AccountId)|Get contact persons associated with an account id from Salesforce|NULL|
|Salesforce|25|2208|GetAccountAdderesses(AccountId)|Get billTo and ShipTo addresses associated with an account id from Salesforce|NULL|
|Microsoft Dynamics NAV|≥ 2009R2 Generic|2214|GetStringValueFromCollection (pageService, collectionrootname, field1, value1, field2, value2, readfieldname, separatorbetweenstring, xnamespace)|Using this function we can get string values with separator|from collection of fields|GetStringValueFromCollection ('/Page/CommentList', 'CommentList','Table_Name','Item', 'No', $itemNo,'Comment','new line','urn:microsoft-dynamics-schemas/page/commentlist')|
|Microsoft Dynamics NAV|≥ 2009R2 Generic|2215|SetProductAndAdditionalAttribute (elementCollection, rootElement, uniqueChild, readoptionidfieldname, splitchar, stringkeys, stringvalues, nameSpace)|Using this function, we can set a collection of Product Attribute and Additional attribute|SetProductAndAdditionalAttribute ($allAttribute, 'Web_ProductAttribute_Page','AttributeName','AttributeOptionId','~',concat ('msrp','~','meta_title'), concat('1','~','magentometa title'),'urn:microsoft-dynamics-schemas/page/itemcard')|
|Microsoft Dynamics NAV|≥ 2009R2 Generic|2216|GetNavValue (pageService, field1, value1, field2, value2, field3, value3, returnField)|Using this function we can get a field value of a Page|GetNavValue('/Page/webapplicationcustomerdata','ApplicationId','1','CustomerNo',$customerNo,'','','WebCustomerId')|
|SAP B1|≥ 8.8|2228|UpdateUserTableQurey(string tablename, string setfieldname, string setfieldvalue, string condfieldname, string condfieldvalue, string condfieldname2, string condfieldvalue2)|You can Update SAP B1 User Table Function|UpdateUserTableQurey('AECTRANDATA', 'U_SyncFlag' ,'Y', 'U_KeyValue', 'Item001', 'U_ObjectCode', '4')|
|SAP B1|≥ 8.8|2229|SetCustomerAddressItems(XPathNavigator addressitem, string cardCode)|This function will return unique Address collection from Magento addresses and SAP B1 Addresses|SetCustomerAddressItems (MagentoAddressItems, SAPB1CardCode)|
|Shopify|1.0.0.0|2230|CheckShipment (stringorderid, stringisShippingExist)|This function is used for checking if an invoice/delivery is created for the order during partial invoice download|CheckShipment('10000001', 1)|
|Shopify|1.0.0.0|2231|GetShippingTotal (decimaltotalPrice, decimaltotalTax, decimalitemsWithoutTax, stringshippingTotal)|This funtion is used for calculating total shipping price of an order|GetShippingTotal(totalPrice, totalTax, itemsWithoutTax, shippingTotal)|
|SAP B1|SAP B1 S/L 9.0|2245|getData (stringserviceName, stringactionParam, stringmethodName, boolvalue)|This function is used for getting data from SAP based on the action parameters passes|getData (serviceName, actionParam, methodName, value)|
|SAP B1|SAP B1 S/L 9.0|2246|getData (stringserviceName, stringactionParam, stringmethodName)|This function is used to get data from SAP B1 based on the 
action parameter passed|getData (serviceName, actionParam, methodName)|
|SAP B1|SAP B1 S/L 9.0|2253|ImageToString (stringimgpath)|Converts Image information at the path specified to base64 string|ImageToString (imgpath)|