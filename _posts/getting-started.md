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
## CUSTOMER PROFILE INFORMATIONS
This section enables you to quickly access your profile after [logging](https://portal.appseconnect.com/Account/Login?ReturnUrl=%2f) into the application. This is where you will get the overview of your organization including assigned companies under you, your organization details and [feeds](/getting-started/#my-profile).

This section also enables you to change details like your *personal information, changing avatar, changing password, privacy setting and security setting*.

Let us dive in details about every section of customer profile information.

## My Profile

1. Log in to the [APPSeCONNECT portal](https://portal.appseconnect.com/Account/Login?ReturnUrl=%2f) with valid credentials.
2. Click on your name, and you can view `My Profile` tab. 
3. This section enables you to edit your profile details. Here You will see two tabs - `Overview & Change Details page`.
4. Here you can view your brief detail like your  name, your registered e-mail, your role, phone number and IP address.
5. In the `Summary section` the count of projects you handle/under organization is shown. You can also see your expired project counts and trials according to your Role and access level, you can see the companies.
6. `Assigned Companies` will be shown on User Role basis. In **My Company section**, only your company details will be there.
![AssignedCompanies](/staticfiles/root/media/AssignedCompanies.png)
7. `My Feeds` section is for seeing your recent activities.
By Clicking Projects, [Workflows](/workflow/overview/), you will be redirected to that particular pages respectively.

**ProTip:** If you click on Change Details tab, you can edit all details 
{: .notice--info}

![ChangeDetails](/staticfiles/root/media/ChangeDetails.png)

In the Personal Info tab, you can edit your name, mobile number.

* Click  **Change Avatar** to change your Profile picture.
* Click **Change Password** to change the password and set your new password.
* The **Privacy Setting section** allows you to agree/disagree with the privacy policy. Basic privacy policy includes - Subscribing to Email Notifications & Acceptance of Terms & Condition.
* The **Security Setting** enables you to handle all the security related settings like password expiry time set, account deactivation and updating encryption policy. 
![SecuritySettings](/staticfiles/root/media/SecuritySettings.png)


# CONFIGURING APPSeCONNECT 
This section gives the overall idea about chhosing application, configuring connection, environment setup and execution of the sync process. Step by Step direction is given below:
Login to APPSeCONNECT - View [Home Page](/appseconnect/home/) to get the details.


##  Process of Choosing App 
1. Choose App option enables you to choose app from the list of prepackaged apps on the portal.
2. A dialog box appears where you will choose the application and version number from the drop down list. Click **SAVE** to save the app.
![ChooseApp_Dialogbox1](/staticfiles/root/media/ChooseApp_Dialogbox1.png)
3. The list of app you choose gets added and listed in the app section of the organization as shown below:
![AppView](/staticfiles/root/media/AppView.png)
4. Each `OP supported app` has four different functionality attached to it - **Schema, Adapters, Functions & Delete**.
![AppComponents](/staticfiles/root/media/AppComponents.png)
5. For `Cloud Supported Applications` the `Credential button` appears along with the other functionality that are attached.
![Cloud-AppComponents](/staticfiles/root/media/Cloud-AppComponents.png)

[Click](/connectors/Overview-of-Connectors/)to view the configuration details of the Connectors.

## Create Application

APPSeCONNECT provides an option to Create `Custom application` and `Technology application` (as per requirements) for the users.
Any App once added is assigned to a particular category. 

Both the process of application creation is given below.

### (a) Create Custom App

The feature of custom app creation enables you to create a custom app with all the required credentials.
The steps are shown below:

1. Go to My Apps section> Choose App> Create Custom App. The following screen appears  
![CustomAPP-Creation1](/staticfiles/root/media/CustomAPP-Creation1.png)
2. In the Custom App Creation Screen the section are divided into - **App Details, Version Details, Protocol Setup & Adapter**
![CustomAPP-Creation2](/staticfiles/root/media/CustomAPP-Creation2.png)  
3. Enter details like- App Name, Description, Category, Stage, Status, Is Cloud Supported, Choose Picture.
* Stage indicates, in what state the App is, for example, it might be in development stage or design stage.
* Some of the predefined categories are : ERP, ECommerce, CRM, Accounting, etc.
* Stage indicates, in what state the App is, for example, it might be in development stage or design stage.
* The Is Cloud Supported checkbox is to check if the version of the App is cloud supported.
4. Click Continue button, it will direct to the Version detail page. Enter the details of the version of the App. 
   The version screen will allow specifying the version number,version description, version definition, supported version, Adapter template.  
![CustomAPP-Creation3](/staticfiles/root/media/CustomAPP-Creation3.png)
5. Click Continue button, it will direct to the Protocol Setup Page. Enter the mandatory field like Protocol Name, Protocol Method.  
![CustomAPP-Creation4](/staticfiles/root/media/CustomAPP-Creation4.png)

Protocol setup will have two sections: 
 1. Either create new protocol on fly which will require them to create protocol file 
 2. OR Select from the generic protocol. The generic protocol will generally have adapter assigned to it, 
    if not the adapter needed to be uploaded to next screen.

You can upload/create a Template File. (If you upload a file then it has to be in XSLT format else an error message will be shown).  
![CustomApp-AddNamespace](/staticfiles/root/media/CustomApp-AddNamespace.png)  
In the Add Namespace portion, you can add new namespace by filling Prefix and URL field.
The namespaces added to the template file will be applied to root node only during XSLT generation.  
6. Click Continue button, it will direct to the Adapter page.Here you can `Upload Adapter or Select Adapter`.  
![CustomApp-UploadAdapter](/staticfiles/root/media/CustomApp-UploadAdapter.png)
7. Click Continue button, it will redirect you to the Credential section. After execution of all the steps mentioned above you have created a custom App successfully.
The newly created app, can be viewed in the app listing section. 
* You can also check the Checkbox in case it is a 3rd party adapter.
* If you try to upload Extension, follow the steps in Adapter.  
![CustomApp-Extension](/staticfiles/root/media/CustomApp-Extension.png)  
8. The Upload adapter will allow either selecting generic adapter or upload adapter file specifically.

**ProTip:** 1. If the generic protocol is selected which already have an adapter specified, this section will show that adapter is already selected and only allow extension upload. 
            2. If the generic protocol does not have adapter uploaded, the upload adapter option will be enabled.
{: .notice--info}

  * Select Adapter provides you the option to select Adapter from the list
  ![CustomApp-SelectAdapter](/staticfiles/root/media/CustomApp-SelectAdapter.png)
  * In case of  Upload Adapter, you must give File Name, File Title, Assembly Version and upload Adapter.
  
**Protip**  App Name will take up to 30 characters and will not allow special character except underscore(_)and dot(.)  
The Adapter needs to be in Zip Format else will show an Error message. Selection of the adapter is restricted to only one  The user can edit & delete the custom app & technology app  
{: .notice--info}

### (b) Technology App Creation
The feature of technology app creation in APPSeCONNECT is to ease the process of adding Specific App as per your business requirement.
Technology App Creation wizard provides a single screen where input details like Application Name, 
Description and the Adapter Technology for adding Specific App (a business requirement) can be provided in one go.

The steps are given below:
1. Go to My Apps section> Choose App> Create Technology App. Click on the drop-down icon and select Create Technology APP.  
![TechnologyApp-Creation](/staticfiles/root/media/TechnologyApp-Creation.png)
2. In the screen, Provide the **APP NAME and DESCRIPTION**, Choose the **Adapter Technology** and click SAVE.  
![TechnologyApp-Creation-Screen2](/staticfiles/root/media/TechnologyApp-Creation-Screen2.png)
3. Now you can view the technology application name, successfully added to your List of APPLICATIONS with a default Image. 
![TechnologyApp-Creation-Screen3](/staticfiles/root/media/TechnologyApp-Creation-Screen3.png)
4. You can edit and add image to your app anytime, by clicking on the VIEW button beside the application name.
5. The Connection can be done with both technology applications or one prepackaged and one technology application as shown below.
 ![TechnologyApp-Creation-Screen4](/staticfiles/root/media/TechnologyApp-Creation-Screen4.png)

**Protip** Currently we are using only these Technology Adapter - FILE, REST, OLEDB & FTP. 
{: .notice--info}

### APPSeCONNECT Schema/Entity
 
 An entity is defined as an object that has a real-world existence. An entity can be a single thing, person, place, or object. For an e-commerce website, Customer, Order, Invoice etc are entities.

* Data can be stored about such entities.
* Each entity has its own characteristics or attributes. For example, `customer id`, `address`, `phone number` are attributes to the `customer` entity. 
* Each customer record in the database serves as an entity item.
* The definition of an entity is called its schema. In other words, the structure of an entity is called its schema.
* If a customer is an entity then the complete set of the various fields associated with it is called its schema.

Schema Image is given below:

![Schema](/staticfiles/root/media/Schema.png)

### APPSeCONNECT Attributes

In APPSeCONNECT, an attribute is a property or characteristic of a schema. If `customer` is a schema, 
then `customer name, email, address` etc. are defined as attributes.  Before defining a schema you need to have a 
proper understanding of the various data fetched via API so that you can define schema properly and provide the 
required attributes.

![attribute](/staticfiles/root/media/attribute.png)

The attributes can be of various types.

* String -  This type of variable is used when you want to store a string value.
* Bool - This type of variable is used when you want to store a boolean value like true or false.
* Date Time - This type of variable is used when you want to store a date time value.
* Number - This type of variable is used when you want to store a numeric value.
* Double - This type of variable is used when you want to store a floating point or double value.
* ComplexObject - When you store an attribute as a collection of several child attributes it is a ComplexObject. For example, if `address` is an attribute,
  then `Street line 1, Street line 2, City, Pin` would exist as child attributes thus making `address` a complex object.
* ComplexObjectCollections - A ComplexObjectCollection may be defined as a collection of complex objects.

Assume that a customer has two shipping addresses. The first address is based in Delaware and 
the other in California. Each address contains the Street Name, Building name, PIN code etc. 
Thus each address would be stored as a complex object attribute. Let the addresses be stored as 
`address1` and `address2`. Now these addresses would be stored as child attributes to the 
parent attribute `address`. Thus `address becomes a ComplexObjectCollection`.

![complexobject-collection-attribute](/staticfiles/root/media/complexobject-collection-attribute.png)

### Custom Attributes

There might be business requirements to create Custom Fields during the creation of 
mapping where the base mapping does not provide an attribute that you are looking for. 
APPSeCONNECT allows you with a feature where you can add your own 
custom attribute and map that with the data coming from the attribute at the other end.

### Actions

Actions are nothing but defining certain tasks like getting data from an application or sending data to an application based on certain conditions and these conditions are defined through an action filter. 

For example, suppose you want to fetch customer(s) data from an eCommerce site and in APPSeCONNECT you define a Customer entity for that.
Now for getting data we can define an action name called `GET`. When you define an action for an entity you need to provide certain information

* Action Name: Name of the action. In some predefined application many adapter logics are written based on this data.
* Action Description: This is the Description of the action. At the time of touchpoint creation actions are selected based on this description.
* Action Filter & Resync Filter Details

### Importing Schemas and Actions of an Application
The user can view the schemas and the action present or can also add schema and add action for each application. 
This section enables the user to view and add the Schema and its Actions.

**Prerequisites:**
1. The User needs to have a valid AEC account.
2. An application is needed to be select for defining the Schemas and its Actions.

**Process:**
1. Login to the APPSeCONNECT Portal with valid credentials.
2. Move into the APPS Page and [Choose any application](/getting-started/). 
3. Click on the + sign after adding the application and click on Schema.(In this case, MS Dynamics NAV has been taken for the instance).
![Select-Schema](/staticfiles/root/media/Select-Schema.png)
4. On the Schema Window, the user can view the schemas present or can also add schemas present for the ADD Schema Option.  
![Add-Schema](/staticfiles/root/media/Add-Schema.png)
5. The Actions inside a schema can be viewed by clicking on the + sign. The ADD ACTION option is provided for Adding Actions inside a Schema.
![Add-Action](/staticfiles/root/media/Add-Action.png)

**Protip:** Default Schemas would only be present for the Pre-packaged APPS.
{: .notice--info}

### Adapter
Adapters helps in integration with other applications easy. Adapter represents an interface between an APP and APPSeCONNECT. An adapter is a component which connects your app with APPSeCONNECT. 
There are few responsibilities of an adapter which are defined as under: 

* Create a credentials view which allows connecting to the respective APP where you want to connect.
* Create Push and Pull method inside the adapter which can send and receive data to and from the application.
* Add additional business behavior with respect to the corresponding app.

The Adapter is loaded dynamically by the [Agent](/deployment/overview/) and calls some specific methods using a fixed contract defined as an interface. 

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

**Note: For Applications having multiple versions, the user can hover the cursor on the application image to identify the required version of the app.**

![Select-Connection](/staticfiles/root/media/Select-Connection.png)
On selecting the connectors, the protocol will be displayed for it. One can select multiple protocols for a connection.  
![Connection-Protocol](/staticfiles/root/media/Connection-Protocol.png)

**Protip**
Users need to enable the cloud support checkbox for enabling the cloud supported connection. 
The checkbox for enabling cloud support will appear only when the chosen applications are cloud supported as shown below.
{: .notice--warning}

![cloudsupported-connection](/staticfiles/root/media/cloudsupported-connection.png)

On selecting View connection, all the touchpoints of the connection will be displayed.  
![Touchpoint-List](/staticfiles/root/media/Touchpoint-List.png)
12. Once you Publish the touch-point it will be shown in the AEC Agent. From the second time onwards you will have Republish option.

**Protip** 
On the Touchpoints page, there will be a Reverse button (only if applicable, for e.g here NAV to Magento connection is also available). The connection will be reversed.
On clicking the Publish button, all the Touchpoints will be published under the connection. Once a connection has been published, the Republish button will appear instead of Publish button
{: .notice--warning}

`Lookup Mapping` is an important function under touchpoint selection. 
Value mapping is a concept which allows the implementer to configure value mapping specific to the application environment such that when the source value is processed, it will be transferred to the destination value automatically. The Value-Mapping is a way to map the special values which needed to be converted by the applications during [transformation](/transformation/overview/).
Details of Value Mapping will come in subsequent section of the document.

## Copy Connection

This Feature enables the user to copy the connections that was previously created. This not only copies the connection but also 
the Attribute Mapping and the Lookup Mapping. 

This document helps the users to understand and implement the `Copy Connection` Feature.

### Prerequisites for Copy Connection
1.	Need to have a valid APPSeCONNECT Account.
2.	A connection should be ready for it to be copied.

### Steps to Implement Copy Connection 

1.	Login to the APPSeCONNECT Portal and Navigate to the Connection Page.
2.	[Create a connection](), if no connection is created. 
3.	On the portal, click on the Drop-Down Button present on the Right Hand, Top-Side Corner of the screen, and select the 
    `Copy Connection` option.
 ![copy-connection1](/staticfiles/root/media/copy-connection1.png)
4.	The Copy Connection window opens. Select the connection from the Drop-Down, which needs to be copied.
 ![copy-connection2](/staticfiles/root/media/copy-connection2.png)    
 ![copy-connection3](/staticfiles/root/media/copy-connection3.png)    
5.	After selecting the connection, enter the connection name. There are two checkboxes here  
a.	Copy Reverse Connection - Enabling this, it copies the both sided connections.    
b.	Copy Lookup Database - This enables to copy the [Lookup Mappings](/transformation/using-lookups-for-value-exchange/).  
6.	Click on the SAVE Button after the details are incorporated.  

**Note: The Copy Connection feature copies the [Attribute Mapping](/transformation/understanding-attribute-mapping/) too.** 


## Creating Organisational Touchpoint

For mapping the source Entity with the destination entity, for a particular action (like Customer Add, Invoice Add, Sales Order add), 
touchpoints are executed which pulls and pushes the data from source to destination or vice-versa. With APPSeCONNECT, one can define or 
create these touchpoints.

This document will help the readers to implement the steps to create organisation touchpoints in portal. 

## Configuring Connector while Creating Connection

When working with organisational Applications (Custom Applications & Technology Applications), Connectors 
are not pre-packaged. Hence, the users need to configure the connector first before creating the connection.

### Steps to configure the connector for Organisational Applications

1. Click create connection button. The screen for creating connection appears.
2. Now Click `configure connector` button in the given screen.
3. The screen for configuring the connector opens. 
4. Enter the Application Name (Source and Destination) and their versions in the screen and 
   Click `Add template` button.
5. On adding the template, the connector will be visible in the connector page. Both side of the connector (A to B, B to A) will deployed on adding the template.
6. Remove the word `Only` from the Protip before Copy Connection.
7. Default Notifications for Transactions > Link can be added for morning report present in the Rule Section.


### Prerequisites for Creating Touchpoint

1.	Need to have valid Credentials for logging into the portal.
2.	Select the apps and create the connection for which the touchpoint is to be created.
3.	Identify the template where the touchpoint needs to be created (For Example: Shopify > Priority or Priority > Shopify).

**Note:** APPSeCONNECT follows certain naming conventions, while a touchpoint is created and that is:

{EntityName}: {Action Name} [Special Option/Protocol]

Where:
Entity Name = Destination (or Target) Applications Entity.

Action Name can be:

**Add: Adding a new item in the Target Application.

Update: Update existing item in the Target Application.

Sync: Add new or Update existing item as per the Item(s) existence in the target application.

Delete: Delete / Remove an existing item from the target application.**

[Special Option/Protocol] can be:
1.	Guest Customer
2.	Di API
3.	Special Price.

**For Example: Business Partner Add (Guest Customer), Master Data Add [Di API], Item Master Data Add [Simple Product]**

### Steps to create an Organisational Touchpoint

1.	Login to the APPSeCONNECT Portal and navigate to the Connections Page.
2.	Select the Template where you want to create the touchpoint. Make sure the template is selected according to the transformation flow.
3.	The Connection Page opens. Click on the `Add New Button` for creating the touchpoint.
![create-touchpoint1](/staticfiles/root/media/create-touchpoint1.png) 
4.  The Touchpoint Information Page opens. Fill-up the fields marked with a mandatory symbol (a red coloured asterix) and click on the Continue Button.
* Name: The name should be the touchpoint name. Ensure that the APPSeCONNECT naming Convention is used for the touchpoint.
* Group: Select the group type, whether it is `Transactional Touchpoint or Configurational`.       
**Note: Enable the checkbox for Show in Agent or else, the touchpoint will not be appearing in the Agent even if the touchpoint is ready.**
![create-touchpoint2](/staticfiles/root/media/create-touchpoint2.png)  

The field description is given below:
* Tag - This field is for providing unique tags to the touchpoints.
* Help Document -  Users can add URL related to the document for this touchpoint
* Status - Status remains as Released by default.
* Sequence - This is to add dependency sequence to the touchpoint.
* Description - This field is for adding descriptions to the touchpoint for briefing the behaviour of the touchpoint. (For Ex: Adding Bundle Product for Shopify to Priority.)
 

5.	The Source Setup Page opens. Select the mandatory fields - Schema, Action, Protocol and the Method. You can also [Add New Schema](/getting-started/#importing-schemas-and-actions-of-an-application) & [New Action](/getting-started/#importing-schemas-and-actions-of-an-application), by clicking on the respective buttons. Click on the Continue button.               
**Note: The Schema and the Action should be selected according to the nature of the touchpoint. Suppose, the touchpoint is of Product Add, the Schema and the Action should be selected for the Product only.***
![create-touchpoint3](/staticfiles/root/media/create-touchpoint3.png) 
6.	The Target Setup page opens. Fill the mandatory fields - Schema, Action, Protocol, and Method. Similar, to the Source Setup here too `New Schema/New Action` can be added by clicking on the respective buttons. Click Continue Button.
![create-touchpoint4](/staticfiles/root/media/create-touchpoint4.png) 
7.  The Transformation/Mapping Page opens. [Click Here](/transformation/overview/) to know more about the Transformation Concept. Click Continue button.
![create-touchpoint5](/staticfiles/root/media/create-touchpoint5.png) 
8.  The summary page opens. This page displays the complete details provided for creating the touchpoint. Click  FINISH Button.
![create-touchpoint6](/staticfiles/root/media/create-touchpoint6.png) 
**Note: Only the Transformation module of the Touchpoint can be edited anytime. Users cannot change or modify Touchpoint Information, Source Setup and the Target Setup of the touchpoint.**

This completes the process of creating an organisational touchpoint. Navigate to the Touchpoint page. Click on the Choose Touchpoint option 
and click the SELECT Button beside the created Touchpoint. The Touchpoint will be visible in the Touchpoints Page.
![create-touchpoint7](/staticfiles/root/media/create-touchpoint7.png) 

**Protip**  Once an organization specific touchpoint is created, it will appear on all the similar type connections 
(in this case, it is created from Shopify to Priority, then this touchpoint will appear for any number of connections for the selected apps) 
for that organization in the inactive state. Once the connection is activated, it will appear in the Agent. The organization specific 
touchpoint is once created can only be used inside an organization.
{: .notice--warning}

## Choosing Touchpoint
APPSeCONNECT is one such product which always tries keep its process simpler. Features are developed keeping 
the usability in mind. `Choosing Touchpoint` feature enables the user to select touchpoint from a drop-down list. 

### Prerequisites for Choosing Touchpoint

1.	Need to have a valid APPSeCONNECT Account.
2.	Choose the Application from the APPS Section.
3.	Create a connection for the chosen application.

### Steps to implement Choosing Touchpoint 

1.	Login to the AEC Portal with valid credentials and Navigate to the connections page for creating a connection.
2.	On creating the connection, enable the check box for activating the default touchpoints.         
**Note: Default Touchpoints are the touchpoints that are available by default, as per the user requirement.**                                  
On Enabling, all the default touchpoints will be activated for that connection.          
3.	Click on View the Connection button to navigate to the touchpoint page.
4.	On opening the touchpoint page, all the default touchpoints for that connection, are displayed in the page. 
    Also, if any touchpoints are required apart from the default touchpoints, the user can select those from the Choose 
    Touchpoint option.
![choose-touchpoint1](/staticfiles/root/media/choose-touchpoint1.png) 
5.	On clicking the Choose Touchpoint option, list of touchpoints drops down which has the option SELECT.
![choose-touchpoint2](/staticfiles/root/media/choose-touchpoint2.png) 
6.  The user can also search the touchpoints present in the list from the Find Touchpoints option. Click on the SELECT Button to activate the same. 
    Here, the Product: Add touchpoint is Selected.              
![choose-touchpoint3](/staticfiles/root/media/choose-touchpoint3.png)  
                          
![choose-touchpoint4](/staticfiles/root/media/choose-touchpoint4.png)                                    
The above steps complete the process of Choosing Touchpoint.



## Configuring Environment - Agent download / Cloud agent configuration

APPSeCONNECT On-Premise Agent is a hybrid tool that sits on your own server and is configured on cloud and does the actual data synchronization with the help of other concerned adapters while the Cloud agent is a similar tool that performs the same function as the on-premise agent but is present on cloud itself. No server is required to configure or sync using the cloud agent.
To know more about Configuring Environment, [Click here](/deployment/Deployment-Configuration/) 

### Environment setup of the on-premise agent:

 1. Login to the portal and from the Dashboard section download the Agent from the Downloads section as shown below.  
 ![DashboardScreen](/staticfiles/root/media/DashboardScreen.png)
 2. Run the setup folder to install the Agent in the system.
 3. Open the installed Agent on your machine.
 4. Login to the agent with your portal credentials.    
   ![Login1](/staticfiles/root/media/Login1.png)
 5. There are four icons as shown below:
* The home icon shows the connections in the project.
* The apps configuration icon (next to the home icon) shows the applications used for the connections which need to be configured for successful sync.
* The sync panel displays the connections deployed successfully for sync. It is visible after you have checked the Show in sync panel checkbox in the Connections page.
* The last one is the Workflow option that displays the configured workflows in the project.  
  ![Connections](/staticfiles/root/media/Connections.png)

### Environment setup of the Cloud agent

**Pre-requisites:**
* The project should be [cloud supported](/deployment/Deployment-Configuration/#configuration-process-for-cloud). 
* The two apps between which data has to be synced should be cloud supported. 
* The connection between the two applications should be [cloud supported](/getting-started/#creating-connection--executing-the-touchpoint).

1. Login to the portal and under the apps section provide the respective app credential data (similar to the configuration of the app in the on-premise Agent).  
![App](/staticfiles/root/media/App.png)
2. After providing the credentials to the applications, navigate to the Connections page and click on the configuration assignment button setup option as shown below.  
![Connection_New](/staticfiles/root/media/Connection_New.png)
3. Enable the assigned credential to the connection by choosing the configuration 
![Connection_New2](/staticfiles/root/media/Connection_New2.png)
4.Enable the toggle button on the connector.
![Connection_New3](/staticfiles/root/media/Connection_New3.png)
5. Click on the View the Connection icon and navigate to the touchpoints page.
6. Click on the play button to run the sync process.  
![Connection_Touchpoint](/staticfiles/root/media/Connection_Touchpoint.png)  

## Default Notification for Transactions

As we go on improving and deploying the integration, a number of failures you might encounter. Some are based on
incorrect logic which misses a particular data structure that needs improvement on the connector, or else some 
related to application specific implementation issues. With APPSeCONNECT, we provide daily transaction reports 
emailed to you by default, once you setup the connector and execute it on your profile. Even though you can 
setup this section to send you multiple emails per day according to the schedule defined by you, you will get daily
notification on the amount of transactions being performed through APPSeCONNECT. 

**Setting up email notification**
- If you have installed on - premise agent, open the agent console and select Settings panel to open settings section of agent.  
![SettingPanel](/staticfiles/deployment/media/Setting/SettingPanel.png)
- In the settings panel, you can open Scheduler for Email Notification. You would see the Email notification is by default checked and schedule for mail once at 12 AM is automatically setup.   
- Click on the schedule section and add as many schedule you want.   
![email-schedule](/staticfiles/deployment/media/Setting/email-schedule.png)  
- Once setup, you can re-run the autosync to reset the settings. 

**Note:** The [morning report](/rule/default-rule-for-morning-report/) is dependent on Auto - Sync service and hence to receive reports, you must keep auto-sync service active. 

**ProTip:** The report can be generated manually using the `Send Email Report Now` button and each request will reset the data to a particular time so that the report is consistent without duplicate entry.
{: .notice--info}