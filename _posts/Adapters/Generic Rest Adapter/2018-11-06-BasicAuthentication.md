---
title: "Basic Authentication "
toc: true
tag: developers
category: "Adapters"
menus: 
    header:
        title: "Adapters"
        icon: fa fa-file-word-o  
        weight: 3
              identifier: adapters
---
# Process to Configure Basic Authentication in Generic Rest Adapter
To configure the Basic Authentication Type for Generic Rest Adapter follow the steps given below:

1. Login to APPSeCONNECT Portal and choose the desired application. Follow APP Selection process.

2. Create Connection between the application  as shown below. 

![Connectioncreation-restadapter](/staticfiles/root/media/Connectioncreation-restadapter.PNG)

3. Login to the agent and the following screen will appear. 

![RestApi_authentication](/staticfiles/root/media/RestApi_authentication.PNG)

The generic rest api screen contains the following fields:

* URL - The URL of the server to connect to. This can be an http or https address but must be URL encoded.
* Authentication - Identifies the secure login type. 

  a) None — No login information in required.

  b) Basic — Basic uses base64 encoding. Because user passwords are not encrypted and the target server is not authenticated, Basic is not a secure authentication.
  Here you have to select the Authentication type as `Basic'.

* User Name - The user name for authentication.
* Password -  The password for authentication.
* Content-Type - This is the content type section that includes the file format types like XML, JSON

4. Now click on the Content-Type Tab and the following screen appears

![RestApi_ContentType](/staticfiles/root/media/RestApi_ContentType.PNG)


Presently the REST Adapter supports two set of content type conversion- XML and JSON

* Support for uploading sample XML documents to define schema for XML content during REST Adapter configuration.
* Support for uploading sample JSON documents to define schema during REST Adapter configuration.


5. Select the Content-Type from the drop down list and Click on Validate button for validating the URL.

![RestApi_ContentType1](/staticfiles/root/media/RestApi_ContentType1.PNG)

6. Now go to App Configuration option and enter the server details for the application (here we have choosen
SAP B1 as another application) which is not based on REST Api.

![SAPDI-ServerDetails](/staticfiles/root/media/SAPDI-ServerDetails.PNG)
 
Click on Validate button for validating the URL.

7. Now Go to the sync panel to run the sync process

![SyncPanel](/staticfiles/root/media/SyncPanel.PNG)

8. Click on connections tab to view the connection between two applications. 

![ConnectionPage1](/staticfiles/root/media/ConnectionPage1.PNG)





