---
title: "OLEDB Adapters OnPremise"
toc: true
tag: developers
category: "Database"
weight: 7
menus: 
    technologyconnector:
        title: "OLEDB Adapters OnPremise"
        category: "Database"
        icon: fa fa-wpexplorer
        identifier: oledbtechnology
---

Generic OLEDB Adapter is a software which provides OLEDB applications a leverage to communicate and adapt with the AEC Portal. This section provides you the detailed process of validating a OLEDB database application in the APPSeCONNECT OP Agent.

1. In the app config panel, configure the OLEDB App Confifuration Process.

![OledbAdapter-OP](/staticfiles/connectors/media/technology-connector/OledbAdapter-OP.png)

2. The OLEDB configuration window, consists of click to Configure and connection String.

3. Select click to configure. Select your OLE Database provider.

![OledbAdapter-OP-DataLink](/staticfiles/connectors/media/technology-connector/OledbAdapter-OP-DataLink.png)
4. The Data link Property Window appears. 

![OledbAdapter-OP-DataLink2](/staticfiles/connectors/media/technology-connector/OledbAdapter-OP-DataLink2.png)
5. Select or enter the Server Name from the dropdown option. 

Provide the Username and Password of the database server. Apply the Allow saving password checkbox. 
Select the database, from the dropdown option, present on that Server.

![OledbAdapter-OP-DataLink3](/staticfiles/connectors/media/technology-connector/OledbAdapter-OP-DataLink3.png)

**Protip:** It is mandatory to apply the allow saving password checkbox, else it will not allow login to the database which will cause failure while 
Testing the Connection and Validation 
{: .notice--info}

6. Click on Test Connection. A success message pops up on successful connection. 

![OledbAdapter-OP-TestConnectionSuccess](/staticfiles/connectors/media/technology-connector/OledbAdapter-OP-TestConnectionSuccess.png)

7. On successful connection, the connection string field on the App Configuration Window gets auto-generated.
The Connection string comprises of the following elements.

* Provider - This is your database server provider.
* Password - The password is of the database server
* Persists Security Info - This is the authentication info displayed on enabling the password for saving.
* UserID - The Username or the UserID for the database server.
* Initial Catalog - It is the database name on the selected server.	
* DataSource - This is the name of the Database Server.

![OledbAdapter-OP-ConnectionString](/staticfiles/connectors/media/technology-connector/OledbAdapter-OP-ConnectionString.png)

8. Click on Validate and Save.

![OledbAdapter-OP-ConnectionString2](/staticfiles/connectors/media/technology-connector/OledbAdapter-OP-ConnectionString2.png)

**Protip:** Removing or erasing the generated connection string enables the click to configure button 
{: .notice--info}

