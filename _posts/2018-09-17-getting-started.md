---
title: "Getting Started to APPSeCONNECT"
toc: true
tag: developers
menus: 
    header:
        title: "Getting Started"
        icon: fa fa-play
        weight: 2
       
---

## CUSTOMER PROFILE INFORMATION
This section enables you to quickly access your profile after [logging](https://portal.appseconnect.com/Account/Login?ReturnUrl=%2f) into the application. This is where you will get the overview of your organization including assigned companies under you, your organization details and [feeds](/appseconnect/home/).

This section also enables you to change details like your *personal information, changing avatar, changing password, privacy setting and security setting*.

Let us dive in details about every section of customer profile information.

## My Profile

1. Log in to the [APPSeCONNECT portal](https://portal.appseconnect.com/Account/Login?ReturnUrl=%2f) with valid credentials.
2. Click on your name, and you can view `My Profile` tab. 
3. This section enables you to edit your profile details. Here You will see two tabs - *Overview & Change Details page*.
4. Here you can view your brief detail like your  name, your registered e-mail, your role, phone number and IP address.
5. In the `Summary section`, the count of projects you handle/under organization is shown. You can also see your expired project counts and trials according to your Role and access level, you can see the companies.
6. `Assigned Companies` will be shown on User Role basis. In **My Company section**, only your company details will be there.
![AssignedCompanies](/staticfiles/root/media/AssignedCompanies.PNG)
7. `My Feeds` section is for seeing your recent activities.
By Clicking Projects, [Workflows](/workflow/overview/), you will be redirected to that particular pages respectively.

**ProTip:** If you click on Change Details tab, you can edit all details 
{: .notice--info}


![ChangeDetails](/staticfiles/root/media/ChangeDetails.PNG)


In the Personal Info tab, you can edit your name, mobile number.

* Click  **Change Avatar** to change your Profile picture.
* Click **Change Password** to change the password and set your new password.
* The **Privacy Setting section** allows you to agree/disagree with the privacy policy. Basic privacy policy includes - Subscribing to Email Notifications & Acceptance of Terms & Condition.
* The **Security Setting** enables you to handle all the security related settings like password expiry time set, account decativation and updating encryption policy. 

![SecuritySettings](/staticfiles/root/media/SecuritySettings.PNG)


# CONFIGURING APPSeCONNECT 
This section gives the overall idea about chhosing application, configuring connection, ennviornment setup and execution of the sync process. Step by Step direction is given below:
Login to APPSeCONNECT - View [Home Page](/appseconnect/home/) to get the details.

## Choosing Application
##  Process of Choosing App 
1. Choose App option enables you to choose app from the list of prebuilt apps on the portal.
2. A dialog box appears where you will choose the application and version number from the drop down list. Click **SAVE** to save the app.
![ChooseApp_Dialogbox1](/staticfiles/root/media/ChooseApp_Dialogbox1.png)
3. The list of app you choose gets added and listed in the app section of the orgnaization as shown below:
![AppView](/staticfiles/root/media/AppView.png)
4. Each app has four different component attached to it - **Schema, Adapater, Extension, Functions & Delete**.
![AppComponents](/staticfiles/root/media/AppComponents.png)


### APPSeCONNECT Schema/Entity
 
 An entity is defined as an object that has a real-world existence. An entity can be a single thing, person, place, or object. For an e-commerce website, Customer, Order, Invoice etc are entities.

* Data can be stored about such entities.
* Each schema has its own characteristics or attributes. For example, `customer id`, `address`, `phone number` are attributes to the `customer` entity. 
* Each customer record in the database serves as an entity item.
* The definition of an entity is called its schema. In other words, the structure of an entity is called its schema.
* If a customer is an entity, then the complete set of the various fields associated with it is called its schema.

Schema Image is given below:

![Schema](/staticfiles/root/media/Schema.png)

### Importing Schemas and Actions of an Application
The user can view the schemas and the action present or can also add schema and add action for each application. 
This section enables the user to view and add the Schema and its Actions.

**Prerequisites:**
1. The User needs to have a valid AEC account.
2. An application is needed to be select for defining the Schemas and its Actions.

**Procedure:**
1. Login to the APPSeCONNECT Portal with valid credentials.
2. Move into the APPS Page and Choose (link for choosing application) any application. 
3. Click on the + sign after adding the application and click on Schema.(In this case, MS Dynamics NAV has been taken for the instance).
![Select-Schema](/staticfiles/root/media/Select-Schema.PNG)
4. On the Schema Window, the user can view the schemas present or can also add schemas present for the ADD Schema Option.
![Add-Schema](/staticfiles/root/media/Add-Schema.PNG)
5. The Actions inside a schema can be viewed by clicking on the + sign. The ADD ACTION option is provided for Adding Actions inside a Schema.
![Add-Action](/staticfiles/root/media/Add-Action.PNG)

**Protip:** Default Schemas would only be present for the BASE APPS.
{: .notice--info}

### Adapter
Adapters helps in integration with other applications easy. Adapter represents an interface between an APP and APPSeCONNECT. An adapter is a component which connects your app with APPSeCONNECT. 
There are few responsibilities of an adapter which are defined as under: 

* Create a credentials view which allows connecting to the respective APP where you want to connect.
* Create Push and Pull method inside the adapter which can send and receive data to and from the application.
* Add additional business behavior with respect to the corresponding app.

The Adapter is loaded dynamically by the **Agent** (create link) and calls some specific methods using a fixed contract defined as an interface. 

### Extension
Extensions, on the other hand, are the applications which add an extra feature into the E-commerce/ERP platforms making them capable to work with the APPSeCONNECT agent. When an app supports extension, it enables customization.

### Functions
The APPSeCONNECT expression methods are special transformation block used during `mapping`. The platform provides a bunch of helper functionalities which can be used during mapping/action filters/rules etc. These functions can either be provided through the platform, or you can write one as an independent Software Vendor. The three different types are as follows:
* Generic
* Native
* Cloud App Resource

### Delete
This button enables to delete selected app from the list.

**ProTip:** Please choose the category correctly because depending on your choice, you might be allowed to add Connectors. This portal do not support connectors between Apps in the same group (As that won't process any business requirement). For instance, migration jobs from SAP B1 to SAP ECC will not be supported at this time. 
{: .notice--info}

The process of Adding New App is present in the subsequent section of the module.

## Creating Connection & Executing the touchpoint

The Connection Page of the Cloud Portal is needed for creating connection between two different Applications. 

For Example, if you want to create a connection between SAP B1 to Magento 2, you have to come to this page & create the connection. You will also see the existing connection for a particular organization on this page.

1. Login to portal with the valid details of a user.
2. Navigate to the following path: Choose a Project -> Connection 
![ConnectionDetails](/staticfiles/root/media/ConnectionDetails.png) 
3. To find existing Connection, Click Search button. An existing connection opens up
4. A typical connection has the following buttons attached to it.
5. All the existing connection of the project will be displayed here. One can activate or deactivate connection by the toggle button. 
![Search-Connection](/staticfiles/root/media/Search-Connection.png) 
6. You  can create a new connection by clicking `Create Connection` button.
7. The following page opens up where you have to input the new connection details.
![Create-NewConnection](/staticfiles/root/media/Create-NewConnection.png) 
8. If the template is not created for the connection. You can create the connector by clicking on the Configure Connector button.
![CreateConnection1](/staticfiles/root/media/CreateConnection1.png)
9. Activate default touchpoint button will be checked by default.
Select the connection, provide the connection name and select the protocol. Click on Save to save the connection details.
![Select-Connection](/staticfiles/root/media/Select-Connection.png)
10. On selecting the connectors, the protocol will be displayed for it. One can select multiple protocols for a connection.
![Connection-Protocol](/staticfiles/root/media/Connection-Protocol.png)
11. On selecting View connection, all the touchpoints of the connection will be displayed.
![Touchpoint-List](/staticfiles/root/media/Touchpoint-List.png)
12. Once you Publish the touch-point it will be shown in the AEC Agent. From the second time onwards you will have Republish option.

**Protip** 
On the Touchpoints page, there will be a Reverse button (only if applicable, for e.g here NAV to Magento connection is also available). The connection will be reversed.
On clicking the Publish button, all the Touchpoints will be published under the connection. Once a connection has been published, only the Republish button will appear instead of Publish button
{: .notice--warning}

`Value Mapping` is an important function under touchpoint selection. 
Value mapping is a concept which allows the implementer to configure value mapping specific to the application environment such that when the source value is processed, it will be transferred to the destination value automatically. The Value-Mapping is a way to map the special values which needed to be converted by the applications during [transformation](/transformation/overview/).
Details of Value Mapping will come in subsequent section of the document.


## Configuring Environment - Agent download / Cloud agent configuration

APPSeCONNECT On-Premise Agent is a hybrid tool that sits on your own server and is configured on cloud and does the actual data synchronization with the help of other concerned adapters while the Cloud agent is a similar tool that performs the same function as the on-premise agent but is present on cloud itself. No server is required to configure or sync using the cloud agent.
To know more about Configuring Environment, [Click here](/deployment/Deployment-Configuration/) 

### Environment setup of the on-premise agent:

 1. Login to the portal and from the Dashboard section download the Agent from the Downloads section as shown below.
 ![DashboardScreen](/staticfiles/root/media/DashboardScreen.PNG)
 2. Run the setup folder to install the Agent in the system.
 3. Open the installed Agent on your machine.
 4. Login to the agent with your portal credentials.
   ![Login1](/staticfiles/root/media/Login1.PNG)
 5. There are four icons as shown below:
* The home icon shows the connections in the project.
* The apps configuration icon (next to the home icon) shows the applications used for the connections which need to be configured for successful sync.
* The sync panel displays the connections deployed successfully for sync. It is visible after you have checked the Show in sync panel checkbox in the Connections page.
* The last one is the Workflow option that displays the configured workflows in the project.
  ![Connections](/staticfiles/root/media/Connections.PNG)

### Environment setup of the Cloud agent

**Pre-requisites:**
* The project should be cloud supported.
* The two apps between which data has to be synced should be cloud supported. 
* The connection between the two applications should be cloud supported.

1. Login to the portal and under the apps section provide the respective app credential data (similar to the configuration of the app in the on-premise Agent).
![App](/staticfiles/root/media/App.PNG)
2. Go to the Connections page and assign the app's credential to the connection by choosing the configuration setup option as shown below.
![Connection_New](/staticfiles/root/media/Connection_New.PNG)
3. Click on the View the Connection icon and navigate to the touchpoints page.
4. Click on the play button to run the sync process.
![Connection_Touchpoint](/staticfiles/root/media/Connection_Touchpoint.PNG)
