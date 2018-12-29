---
title: "OLEDB Adapters Cloud"
toc: true
tag: developers
category: "Connectors"
weight: 7
menus: 
    oledbtechnology:
        title: "Cloud"
        category: "Database"
        icon: fa fa-wpexplorer
        identifier: oledbtechnologycloud
---
Generic OLEDB Adapter is a software which provides OLEDB applications a leverage to communicate 
and adapt with the AEC Portal. This Document provides you the detailed process of validating a 
OLEDB database application in the APPSeCONNECT Cloud Portal.

1. Go to the APP module of the AEC Portal. Click on the button beside the OLEDB Application name
 which you have created.


![Oledb-Cloud](/staticfiles/connectors/media/technology-connector/Oledb-Cloud.png)

2. Click on the credential Button.

3. The Credential Page opens up. Click on the button to expand the node and then Click `ADD NEW CREDENTIAL`.

![Oledb-Cloud-Credential](/staticfiles/connectors/media/technology-connector/Oledb-Cloud-Credential.png)

4.	Enter the Credential Name, Data Provider and the Connection String. 

![Oledb-Cloud-Credential-Input](/staticfiles/connectors/media/technology-connector/Oledb-Cloud-Credential-Input.png)

**Note:** Data Provider is the Database Service Provider.

5. Credential string is needed to be provided in this format always. 
For instance: Provider=SQL****;Password=abcd****;Persist Security Info=True;User ID=salogin;Initial Catalog=jim;Data Source=SQL-SRV1*****

![Oledb-Cloud-Credential-Input2](/staticfiles/connectors/media/technology-connector/Oledb-Cloud-Credential-Input2.png)

Detailed description of the credential string is given below:

-	Provider - This is your database server provider.
-	Password - The password is of the database server
-	Persists Security Info - This is the authentication info displayed on enabling the password for saving.
-	UserID - The Username or the UserID for the database server.
-	Initial Catalog - It is the database name on the selected server.	
-	DataSource - This is the name of the Database Server.


6. Input all the details & Click SAVE.