---
title: "Basic Authentication "
toc: true
tag: developers
category: "Connectors"
weight: 6
menus: 
    resttechnology:
        icon: fa fa-gg
        category: "Basic Authentication"
        title: "Basic Authentication"
        identifier: basicauthentication
---
# Process to Configure Basic Authentication in Generic Rest Adapter
To configure the Basic Authentication Type for Generic Rest Adapter follow the steps given below:

1. Login to APPSeCONNECT Portal and choose the desired application (Rest Supported Application).

2. Create Connection between the application.

**Protip:** Here you will get a connection for Shopify (REST Supported Application) where you can view the validation
details as required.

**SHOPIFY is BASIC AUTH supported**, inputs these details.

* Base URL
* Username 
* Password

3. Login to the agent and Choose `Basic` Authentication Type.

![BasicAuthentation-Rest](/staticfiles/connectors/media/technology-connector/BasicAuthentation-Rest.png)

The generic rest api screen contains the following fields:

* URL - The URL of the server to connect to. This can be an http or https address but must be URL encoded.
* Authentication - Identifies the secure login type. 

  a) None — No login information in required.

  b) Basic — Basic uses base64 encoding. Because user passwords are not encrypted and the target server is not authenticated, Basic is not a secure authentication.
  Here you have to select the Authentication type as `Basic'.

  c) OAuth 2.0 - OAuth 2.0 is the industry-standard protocol for authorization. The OAuth 2.0 authorization framework enables a third-party
   application to obtain limited access to an HTTP service, either on behalf of a resource owner, or by allowing the third-party application to 
   obtain access on its own behalf.

Input the required details on the basic authentication screen of the REST ADAPTER.

![BasicAuthentation-Inputdetails](/staticfiles/connectors/media/technology-connector/BasicAuthentation-Inputdetails.png)

* Base URL - Input the Base URL of the Rest Supported APP
* User Name - The user name for authentication.
* Password -  The password for authentication.
* Content-Type - This is the content type section that includes the file format types like XML, JSON

**Protip** Here the username is the API KEY generated against your PRIVATE APP created on Shopify {: .notice--info} 

The pathway for generating new Private App in Shopify is:                                  
APP>Manage Apps>Create a New Private app 

4.  Now click on the Content-Type Tab and the following screen appears

![BasicAuthentation-ContentType](/staticfiles/connectors/media/technology-connector/BasicAuthentation-ContentType.png)

Presently the REST Adapter supports two set of content type conversion- XML and JSON

* Support for uploading sample XML documents to define schema for XML content during REST Adapter configuration.
* Support for uploading sample JSON documents to define schema during REST Adapter configuration.

**Protip**  XML documents passed to a REST endpoint that support the XML content type must comply with the
XML schema specified during trigger (inbound) REST configuration. When the REST invokes a target endpoint, 
the XML response must comply with the XML schema specified during invoke (outbound) 
REST response configuration.


5. Select the Content-Type from the drop down list. Click on **VALIDATE** and **SAVE** after providing the credentials. 

![BasicAuthentation-Validation](/staticfiles/connectors/media/technology-connector/BasicAuthentation-Validation.png)

6. Similarly go to App Configuration option and enter the server details for the application (here we have choosen
SAP B1 as another application) which is not based on REST API.

7. Click on Validate button for validating the URL.

8. Now Go to the sync panel to run the sync process

9.	After the validation, the touchpoints are published for integration between the REST application SHOPIFY and SAP B1.

10. The touchpoint is executed for the Sync Process by clicking on the START SYNC NOW button.










