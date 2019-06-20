---
title: "Troubleshooting"
toc: true
tag: developers
category: "Transformation"
menus: 
    transformation:        
        title: "Troubleshooting"
        weight: 17
        icon: fa fa-wpexplorer
        identifier: transformtroubleshooting
---


## Prerequisites for Intergration Scenarios

1.	View the Generated Packet to know where the error occurred (GET or PROCESS or POST).
2.	View the Mapping for the touchpoint and the attribute.

## Scenario 1

Error Occurred: Code undefined [OCRD.CardCode] 
Touchpoint Used: Business Partner Add   
![troubleshooting-scenario1a](/staticfiles/Transformation/media/troubleshooting-scenario1a.png)

### Troubleshooting Process for Scenario 1
1.	The Transform packet generated is needed to be checked for this touchpoint. The User can view the Transform packet 
    for the above touchpoint and data below.   
![troubleshooting-scenario1b](/staticfiles/Transformation/media/troubleshooting-scenario1b.png)
2.	The transform packet displays that the CardCode is not generated. For this issue the Mapping for the attribute CardCode is needed to be verified for the touchpoint Business Partner.  
![troubleshooting-scenario1c](/staticfiles/Transformation/media/troubleshooting-scenario1c.png)
3.  On viewing the mapping was found to have an error where the provided syntax was not completely closed which resulted in occurring the error. 
4.	Once the mapping is done, click on the Submit Button. 
5.  Reset Cache and Republish the touchpoint and Update Configuration on the Agent. Enable the 
    checkbox in the agent and click on the Resync Button.  
![troubleshooting-scenario1d](/staticfiles/Transformation/media/troubleshooting-scenario1d.png)

## Scenario 2

Error Occurred: Property `U_WBCUSTID of BusinessPartner` is invalid.
Touchpoints Used: Business Partner Add.    
![troubleshooting-scenario2a](/staticfiles/Transformation/media/troubleshooting-scenario2a.png)
### Troubleshooting Process for Scenario 2

1.	On reviewing the packets generated its viewed that the output packet generated displays the error.    
![troubleshooting-scenario2b](/staticfiles/Transformation/media/troubleshooting-scenario2b.png)  
2.  As the output packet displays the error, the UDF Field is to be verified whether the UDF is created for the Attribute U_WBCUSTID.   
![troubleshooting-scenario2c](/staticfiles/Transformation/media/troubleshooting-scenario2c.png)    
3.  On checking the UDF for the attribute is absent and is needed to be created.
4.	Once the UDF is created, Restart the DI SERVER and Resync the failed data in the Resync Bucket.   
![troubleshooting-scenario2d](/staticfiles/Transformation/media/troubleshooting-scenario2d.png)
5.  Similarly in this way, UDF's to be created for other attributes or for any other touchpoint as required.

**Note: While creating the UDF the title for the UDF should be of the same format (spelling and Letter Case) as that of the attribute title.
For creating the UDF the field is to be created in the Business Partner Category**

## Scenario 3

Error Occurred: Specify valid tax code
Touchpoint Used: ORDER Add (Magento 2 - SAP Business One)

![troubleshooting-scenario3a](/staticfiles/Transformation/media/troubleshooting-scenario3a.png)

### Troubleshooting Process for Scenario 3

1.	On reviewing the packets generated, it is viewed that the output packet generated, displays the error.  
![troubleshooting-scenario3b](/staticfiles/Transformation/media/troubleshooting-scenario3b.png)
2.  As the error shows the tax code, the mapping for the attribute TaxCode under the schema, Document_Lines is reviewed.
3.  The Lookup mapping for the connection is needed to be checked, if the attribute mapping is found to be OK.  
![troubleshooting-scenario3c](/staticfiles/Transformation/media/troubleshooting-scenario3c.png)
4.  The above screen displays that the tax rate for the Source Value is inaccurate as the Tax Rate for Magento2 is 8.25.
5.  Once the mapping is edited, the value is saved. Reset Cache and Reset Publish the ORDER Touchpoint and Republish the Connection.
6.  Update Lookup Tables and Update Configuration in the agent. Click on the the checkbox to enable the resync in the Resync Bucket
![troubleshooting-scenario3d](/staticfiles/Transformation/media/troubleshooting-scenario3d.png)

## Scenario 4

Error: XSLT Validation error in Portal.  
![troubleshooting-scenario4a](/staticfiles/Transformation/media/troubleshooting-scenario4a.png)

### Troubleshooting Process for Scenario 4

1.	On Validating the XSLT in the portal, the error location is displayed below along with the error cause.
2.	The attribute for the error is identified in the mapping section.  
![troubleshooting-scenario4b](/staticfiles/Transformation/media/troubleshooting-scenario4b.png)
3.  Being a compile time error, the [choose] provided in the mapping is not syntactically correct, resulting in the compilation error.
4.	On correction the XSLT is validated again with the provided mapping.  
![troubleshooting-scenario4c](/staticfiles/Transformation/media/troubleshooting-scenario4c.png)
5.  On validating the XSLT is successfully validated.  
![troubleshooting-scenario4d](/staticfiles/Transformation/media/troubleshooting-scenario4d.png)