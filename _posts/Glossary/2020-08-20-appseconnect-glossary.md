---
title: "APPSeCONNECT Glossary"
toc: true
tag: developers
category: "Glossary"
menus: 
   Glossary:
        title: "APPSeCONNECT Glossary"
        weight: 2
        icon: fa fa-file-word-o
        identifier: aecglossary
---
### APPSeCONNECT
APPSeCONNECT is an Integration Platform through which one can connect Enterprise Business Applications, like Back Office ERP systems (SAP Business One, SAP ERP, MS Dynamics NAV, etc.) with front-end eCommerce websites, CRM, and Marketplace stores.


### API

(Application Programming Interface)
Code piece that enables different services and business apps to communicate and share information with each other. It serves as a messenger that takes request from you and tells and external application what you want to do and then returns the response back to you. Generally, there are some tools such as protocols, set of subroutines and functions that facilitate this kind of communication.




### APPs
APPS are the Business Applications which help to automate your operations. For us, it means ERP, eCommerce, CRM, and Marketplace.



### Agent
Agent is an application to execute and control the sync process. Agent is installed in client's server and it performs two major roles: firstly, it is responsible for executing the instructions given in APPSeCONNECT cloud application and reporting the executed JOBs, and secondly, it transfers the data from one APP to another with the help of its Adapters.

For more information on Agent, [Click Here](/deployment/overview/).



### Attributes
Expertise of any entity or ingredients which make an entity is known as Attributes. Example - if Name is an entity, then First Name, Middle Name, Last name, and Title are its attributes; a Product (entity) can have attributes like Product ID, Description, Price, Color, Size, etc.



### APPSeCONNECT Adapter 

Software Component that connects Business Application with Agent. For details [Click Here](/sdk/overview-adapters/).



### Components

Reusable program blocks or components that are integrated with other blocks to form APPSeCONNECT. AEC Component include: Agent, Adapters [as per selected APPs], Extensions, Web Interface. All these components communicate with each other for needed services, viz. control integration between APPs.

APPSeCONNECT mostly uses the default APIs available with eCommerce, CRM, Marketplace and ERP systems. Apart from that, APPSeCONNECT has a small software named Agent which is installed within the ERP server. In most cases, Agent is used to configuring and controlling the Integration.



### Action Filter

An APPSeCONNECT Action Filter is a conditional filter which returns results based on set filtration criteria. Refer to this [link](/transformation/working-with-schemas-action-filter/) for further information.



### Add-On

Plug-Ins used to extend the functionality of  ERP Applications so that they can be integrated with any other eCommerce/Marketplace/ CRMs with enhancements.



### AppResource

(Application Resource)

Data transformation or any kind of auxiliary activities which cannot be programmable using XSLT can be done using this helper class or function. Refer for [more](/transformation/using-library-methods/).



### Bug

Any deviation in APPSeCONNECT from the announced feature can be treated as a bug.



### Cloud Solution

An application that uses resource provided by Cloud or hosted on Cloud.  The aim of using cloud-based solution is to reduce cost and help the user to concentrate on other things without focusing on IT impediments viz. software licensing cost, infrastructure requirements, the third party taking care of resources. 

For APPSeCONNECT, only the configuration and field mapping part of the Integration happens in the Cloud.



### CRM

(Customer Relationship Management)

Application that records and manages all the interaction aspects that a company had with its customers, viz. service relate sales quotations, contacts, sales leads and more. Used for managing both B2C and B2B relationships. 

APPSeCONNECT provides integration of CRM applications viz. Salesforce, Zoho, SugarCRM with ERP. 



### Connection

Connection in APPSeCONNECT defines the integration between APPs. The user can opt for one or more connection based on their subscription package. A connection has the list of touchpoints or the integration points which defines the data flow between the entities.



### Component Chart

A document used for maintenance of AEC Component versions and their segregation with the Released component versions. This helps in keeping track of Component compatibility, component owner and proper versioning structure of working component.



### ConfigurationData

Cloud Information regarding the connection configuration, touchpoints and attributes mappings. All this data gets downloaded to Agent which is installed in ERP server to perform the data between the clients Web Server and ERP Server.



### Content

Located in the hidden folder of Server Root directory where the Agent is Installed. Contains all the xslt's downloaded from Cloud application for executing the touch-point synchronization



### Context Help

Online help provided for the specific context or state in which you are working or documentation for the particular feature that you are in the process of using. For example, if you are synchronizing new customers from Magento to SAP B1, then the context help will redirect you to the document where you will get the guide on synchronization of new customers between the said APPs.



### Closed Source Solution

ERPs (like SAP Business One, MS Dynamics NAV, etc.) are closed source solutions. APIs available within these ERPs can be accessed through technologies like SDK, but these are not Open Source or available to the public for any sort of modifications/personalizations.




### DIAPI (Data Interface API)

Application directly makes reference to the functionalities and sends data according to API provided by SAP. Since no standard is maintained on input or output data, it is more specific and generates specific output as per the call. Here, SAPBobsCOM.dll used to refer the exposed business objects. For further details, [Click here](http://www.appseconnect.com/third-party-systems-integration-with-sap-business-one/).



### DI-Server (Data Interface Server)

It is Component Object Model (COM) Service that gets auto-installed into the server with SAP B1 installation. It enables multiple client applications to view and manipulate the company database using SOAP messages. SOAP-based solutions are developed to read, write and update and remove data objects on the database level without handling the database objects manually. Follow this [link](http://www.appseconnect.com/third-party-systems-integration-with-sap-business-one/) for further information.



### Dashboard

Main Page in APPSeCONNECT Web App where the user gets a summarized view of all the in-process activities or get an at-a-glance update on the current status of the Applications that are currently in use, connections that are active, agents where the sync process is going on, trouble ticket status etc. Serve as a real-time report that gets auto-updated on every change. From Dashboard itself, the user can be directed to the Connection listing or Tickets page. [Click here](/accessing%20portal/accessing-portal/#a-accessing-organization-dashboard) to get detailed information on Dashboard features.



### Default Touch-point

Touchpoints that gets auto-published by default after connection creation. 



### Deactivate Plan

Pricing Plan Deactivation process is done to deactivate the users current subscribed plan. Once deactivated, the user will not be authorized to log in to the APPSeCONNECT account until he/she sends the request for further subscription/activation.



### Dependency

This is the section in Cloud Admin, where the user can define the dependency between touchpoints based on triggering of an Event. For example, if you want to do "Account Add" from SAP B1 To Salesforce, then as a dependent touch-point "Account Response Add" will auto-run with the triggering of Post-Acknowledgement-Task event. This event will get fired whenever the parent touch-point or Account-Add gets executed.



### Destination Methods (Cloud Admin) 

Methods that are used during touch-point mapping between two different applications to call or fetch or retrieve the records as per the specified method. 

Format: destinationlib:method(parameter). 

destinationlib - Specifies that library is the destination.

method - Method called to retrieve the record.

parameter - Based on which the resultant record will show.




### Entities

Entities are the physical interaction points in any APP like Business Partner, Customer,  Invoice, Order, Product and alike.



### Extensions of APPSeCONNECT

Files required to extend the functionality of eCommerce applications so that they can be integrated with ERP Applications with enhancements. For example, for integration of Magento B2B with SAP B1 application, the extension for Magento B2B is required so that all the extended B2B features along with core can work well when integrated with SAP B1 application.



### Error Filters of APPSeCONNECT

These filters are defined to handle unhandled exceptions, filters the data during pull operation of Source Adapter. Refer to this [link](/transformation/working-with-schemas-action-filter/#actions) for further information.



### Enterprise Pricing Plan

This pricing plan is designed to connect mostly Enterprise applications viz. SAP ECC, MS Dynamics AX etc with any eCommerce application viz. Magento CE, EE, Shopify, BigCommerce etc or CRM applications such as Salesforce, Sugar CRM, Zoho etc.



### Edit Touchpoint

This Web App features all the ows the user to enable/disable touchpoints of their own choice for selected connection.



### Error Log (Agent)

The section in Agent which displays the errors with respect to each touchpoint sync failures. In this log the window, the user can view the time stamp, error message and severity of errors. The user can assign the type of log they want to view in Agent, whether Error only or Error And Info or Error, Info and Status.



### Event Add-On of APPSeCONNECT

Plug-Ins required recording the events triggered/or actions performed at ERP Application's end. This recorded information/or data is then used/fetched by AEC Agent during execution of Touchpoint integration.



### Field Mapping 

Field Mapping depicts association of fields between source and destination data sources. Field Mapping aids in determining that the data from which source field are getting synced to which destination field between two different applications.



### Forums (APPSeCONNECT Forums)

Online discussion forum the s where the user can post any topic of their choice about APPSeCONNECT. Here the viewers also get an idea on important announcements related to APPSeCONNECT. Users can post the problems in detail they facing while using APPSeCONNECT. Follow this [link](https://community.appseconnect.com/) to be a member of APPSeCONNECT.



### Full-blown Trial (or Paid Trial) - Trial Licensing Options

This is the Paid Trial Licensing option provided to APPSeCONNECT users as per the chosen pricing plan. For complete details, please follow the [link](https://www.appseconnect.com/).



### Free Trial (or POC Trial)

Its a 30-days free trial also "Proof-of-Concept" trial where Default eCommerce/CRM installation and Default ERP Applications are connected. To get a complete picture on the trial details, [Click here](https://www.appseconnect.com/).


### Growth Plan

Pricing plan to connect mid-sized ERPs (viz SAP B1, Dynamics NAV etc) with eCommerce solutions like Magento Community edition for SME's or Enterprise edition for large-scale businesses. With the s plan, the user can also integrate other eCommerce solutions such as Prestashop or Zencart with respective ERP's. Apart from that, this plan facilitates the integration of CRM's viz, Salesforce, Sugar with ERP. 

This plan will give users an option to use any of the supported ERP and eCommerce solutions/CRM with only one connection. If the user wishes to integrate any additions eCommerce platform/or CRM from the same account later, then they have to purchase extensions and add-ons in order to add the Applications to your account.

For more details on Growth Plan, please go to this [link](http://www.appseconnect.com/pricing/).


### Help 

Online help documentation provided to explain the features of APPSeCONNECT Web Application and helps users on its usage.



### Hybrid Solution

APPSeCONNECT is a [Hybrid Solution](http://www.appseconnect.com/appseconnect-a-hybrid-integration/), composition of cloud and on-premise integration solutions. Application Configuration is done in the Cloud, while the Agent software installed on ERP server (i.e. On-Premise), performs the data sync directly between the Client's Web Server and ERP Server. Agent's configuration can be updated on the Cloud platform. No Customer's transaction data gets stored in Cloud, which ensures data security.                                                                                                                                                                            Back To Top



### Inviting User

APPSeCONNECT Web APP feature, that allows creations of more than one registrations depending on the organization size. User's subscription which is on organization-basis and this feature allows multiple users to access APPSeCONNECT Cloud portal as per their authorization level and without spending any further expense. [Click Here](/accessing%20portal/accessing-portal/#users) to get further information.



### Inter-process Communication

APPSeCONNECT feature that allows communication between services without restarting any of the services, For e.g. there are times when APPSeCONNECT Agent needs to send some information to APPSeCONNECT Service, with inter-process communication feature, it can be easily done without the need to restart them.



### Integration of APPs

APPSeCONNECT allows smooth communication between 2 independent components i.e. the data from one application could be channelized/synced to other without interruption.




### Marketplace Integration 

Integration of Marketplace application viz. eBay, Amazon with client's ERP application. With APPSeCONNECT, one can automate the bidirectional sync of their business data viz. Order, Payments, Customer, Product etc details of the Marketplace and ERP application.



### Mapping

It's an association of elements between two different data sources. Primarily used for data transformation to moderate the relationship between a data source and the destination in which the data is being used.
It can be between:
- Two different APPS
- Entities in two different APPS
- Attributes specific mapping between APP Entities.



### New Connection

Connection specifies the integration between the 2 applications. APPSeCONNECT users can create the single new connection per subscription. For multiple connections, the user has to update their pricing subscription.


### On-Premise 

Prior APPSeCONNECT came into the picture, the integration solution was provided on client's base, the application was installed and all the configurations and settings were done on ERP server. Also the touchpoint specific files were installed locally. The drawback of this solution was that if any disruption or application crash happens when the user has to manually re-install everything along with all the files. 

To avoid this problem, APPSeCONNECT offers a hybrid solution where Agent needs to be installed, but all the other information (configuration, credentials, value mapping, touchpoints) can be fetched from the cloud, which remains un-impacted during this situations.



### Open Source Solution

Open Source Solutions are those where source code is available to the public for modifications. APPSeCONNECT is not an open source solution on itself but it allows integration of open source eCommerce solutions viz. Magento CE with closed source ERP solutions such as SAP B1. Being an Integration Platform, when we configure a connection between an eCommerce and an ERP, APPSeCONNECT uses default APIs of both the platforms. If the eCommerce is an Open Source Solution, then its APIs are also Open Source. 



### Organization

The entity that basically describes the Company Account to which the primary registered users belongs. Users belonging to the Company account/or organization have the privilege to access the organization, create/view connections, select and publish touch-points and all the other features of Web Application. This account is required to use the Web Application.



### Organization specific Touchpoints

Touchpoints specific for particular Company Accounts/or Organizations which allow the synchronization of data between the chosen APPs. Different Organizations have a distinct set of connections and touchpoints. For eg. Company A has a connection to SAP B1 and Magento App, whereas Company B have the connection for SAP B1 and Zoho CRM. For both, the organization, set of touchpoints differs as per their chosen apps.                                                                                                                                                                               Back To Top


### Profile

Profile in Web Application defines the Registered Users account Information including their personal details viz. Name, Email, Telephone etc which users can modify except the registered email. Other than personal details, the user can also update the passwords and invite users to access their Organization. Please follow the [link](/accessing%20portal/accessing-portal/#managing-customer-profile), for further details.



### Publish

This operation is done on the connections or Touch-points so that configuration data related to connections gets available in the cloud, and Agent which is installed On-Premise fetches this information and users can perform the integration between the entities. During Publish, every configuration that user made in APPSeCONNECT Cloud is compiled to a file stored in a server and is accessible from Agent. The agent becomes fully operational once the connections are published along with its touch-points.



### Protocol

This is the messaging standards defined for communication between APPS. For creating any APPSeCONNECT Connection, the user has to select the default protocol for establishing the connection. For eg. for creating the connection between Magento and SAP B1, the user has to choose the default protocol for SAP B1 as either DIAPI or DIS or FTP. Again for Magento, the chosen default protocol will be SOAP.



### Pricing Plans

This is APPSeCONNECT Integration Plans and the offered pricing against each plan. For further details, [Click here](http://www.appseconnect.com/pricing/).



### Pricing Snapshot

Billing summary showing the overall Yearly price APPSeCONNECT user has to pay by distinctly calculating the sum of add-on price plus the support pack pricing. Using the snapshot, the user gets the clear picture on each of the chosen components and also the overall amount.


### Re-Publish

Republishing a touchpoint or connection is done to reflect the configuration change that has been done in the cloud. It is a Repeat Publish, i.e. the connection which has been already published are getting republished to reflect the changes which have not been implemented during the first Publish. 

Generally, User has to republish the connection/or specific touchpoints once they found that the Configuration change for the specific touchpoint which they have requested has been resolved so that changes could get visible in the Agent.



### Role Management 

This admin feature is given to the users having Super Administrative privilege to restrict unwanted usage of every feature by APPSeCONNECT users. For eg., Super Admin can define a Role called "Connection Manager" and assign users to the corresponding role. Then, all these users have the access to create and view connections only, all the other features will remain hidden from them.



### Registration 

The act of registering/enrolling personal information along with organizational data(viz. Company Name) in Web Application to create a Company Account in order to access Web Application features of APPSeCONNECT. 



### Subscription

Pricing Strategy adopted to pay for the APPSeCONNECT Pricing plans. Subscription-based pricing plans required to be renewed every year. To know more, follow this [link](/accessing%20portal/accessing-portal/#b-my-subscription).



### Sync Panel (Agent)

This is the area in Agent which shows the configured connections and the touchpoints for those connections. From here, the user can achieve touchpoint wise synchronizations for their connections. To make connections visible to the sync panel, the user has to first enter the authentication details for the APPs in Credential area and select the option to "Show in Sync Panel". Until and unless this option is explicitly selected, the connections will not become visible in Sync Panel. For more details on the usage of Sync Panel, [click here](/deployment/Deployment-Configuration/#configuration-process-for-op).



### Settings (Agent)

This is the section in Agent where the user can maintain the settings as per their own choice, viz. they can set Auto Sync Interval time, Viewing of Log details (errors only, error and info, All). Here the user can configure the mail where they want to send the notifications regarding synchronization on daily basis.



### Support Ticket

Request made by the user for resolution of any change requests regarding touchpoint mapping or for updating pricing subscription.  Ticket status remains in Open State till gets resolved. APPSeCONNECT users can view the status of their support tickets anytime from their Web APP Dashboard. Follow the link to know more about the Dashboard Features.



### Support Package

Support offered to customers after the purchase of APPSeCONNECT. It is offered at One Time Pricing and is payable annually and is applicable after one year from the date of purchase.

The user will get to know and apply for more Support Pack through the Pricing Plan page of APPSeCONNECT Web App. Here, they will get to know about the support time availed and the remaining support time. They can also opt for new support pack from this section to extend their support hours.  

### Template

This is the section which shows the Destination and Source APPs along with their versions between whom the Integration is required.

From Cloud Admin, users with super admin privilege can create the new template where they can add/edit destination and source apps and also their versioning.



### Touchpoint

APPSeCONNECT TouchPoints refers to Integration Points between two independent APPs. For eg, "Stock Update" touchpoint for SAP B1 and Magento App Integration, refers to Real-time stock updated from SAP B1 to maintain exact inventory level in the Magento web store. Other than the stock update, the touchpoint can be for Customer sync, Sales Order sync etc.


### Touchpoints (Default)

This is those touchpoints which get auto-published as soon as the user configures or creates a new connection. Though the user can control the auto-publish by selecting/deselecting 'Default touchpoint activation' option at the time of Connection Creation.


### Task Scheduler

This is an Agent feature to auto-schedule the touchpoint synchronization tasks. This feature allows the user to set the number of times they want to schedule a task to executes, its start time, recurrence etc. By default, the schedule is set to 5 minutes interval.


### UI (APPSeCONNECT Portal)

User Interface in the cloud for APPSeCONNECT Web Application. From here, a user can perform their online APPSeCONNECT registration, configure their connection and do publish the touchpoints.



### UDF (User Defined Fields)

Custom fields created either with the installation APPSeCONNECT Add-on in ERP application, viz. SAP B1 or manually created for specific touchpoint integrations.



### Update Configuration (Agent)

Agent feature which allows the user to update the application (or agent) whenever any configuration change is made in the cloud (viz. touchpoint re-publish). The user has to manually run this process as Agent will not automatically download the configuration changes once it already has it at the time of first time Agent login.



### Update Adapters (Agent)

This Agent feature allows users to update the Adapters with the current version if they are using an older version adapters.



### Update Value Mappings (Agent)

This Agent feature allows users to update the Agent application with the Value Mapping changes made in the cloud. 



### Update Subscription

This feature is provided in the Pricing plan section of APPSeCONNECT Web Application which allows the user to send the request for updating/upgrading their subscription plan. For eg., if the user wants to extend their support pack or want additional addon, then after selecting their preference they can opt for Update Subscription.


### Lookup Mapping

Mapping of Attribute values between application to achieve successful integration. For eg. for Order synchronization process from Shopify to SAP B1, value mapping for freight is required. To define this, the user has to specify the Value Map type, Source value (i.e. code of Shopify Shipping method) and the Destination value (i.e. code of SAP B1 freight) in APPSeCONNECT Cloud. Want to know more, [Click here](/transformation/using-lookups-for-value-exchange/).



### Version of APPs

Refers to the available version of integrating APPs. While choosing  APPs in APPSeCONNECT Web App, the user can select their preferable version. For eg. Prestashop App is currently provided with version 1.6 and 1.5.4. Once APP version is chosen and connection created, the user will not be able to modify the version. As long as the connection is not created, the user can change the APP version.


### Zoho CRM Integration

APPSeCONNECT provides integration privilege between Zoho CRM with client's ERP Application. Currently, users of this APP can opt for either Beginners Plan and Enterprise pricing plan to avail this integration. For more details, visit our [pricing page](http://www.appseconnect.com/pricing/).



### What components are generally available with APPSeCONNECT?
APPSeCONNECT mostly uses the default APIs available with eCommerce, CRM, Marketplace and ERP systems. Apart from that, APPSeCONNECT has a small software named Agent which is installed within the ERP server. In most cases, Agent is used to configuring and controlling the Integration.


### Is APPSeCONNECT an On-Premise Solution or a Cloud Solution?
APPSeCONNECT is a [Hybrid Solution](http://appseconnect.com/appseconnect-a-hybrid-integration/) that takes advantage of both the solutions. The configuration and field mapping part of the Integration happens in the Cloud, while the Agent software which is installed in the ERP server performs the data sync directly between the clients Web Server and ERP Server. The Agents configuration can be updated on the Cloud Platform. Thus, APPSeCONNECT does not store the Customers Transactional Data in the cloud and in this way, APPSeCONNECT ensures data security.

### Is APPSeCONNECT an Open Source Solution?
No, APPSeCONNECT is not an Open Source solution. Being an Integration Platform, when we configure a connection between an eCommerce and an ERP, APPSeCONNECT uses default APIs of both the platforms. If the eCommerce is an Open Source Solution, then its APIs are also Open Source. However, ERPs (like SAP Business One, MS Dynamics NAV, etc.) are closed source solutions. APIs available within these ERPs can be accessed through technologies like SDK, but these are not Open Source.

### Which ERP, eCommerce and Marketplace Platforms can be connected through APPSeCONNECT?
Currently APPSeCONNECT has Integration APPS for SAP Business One, MS Dynamics NAV, SAP ECC/All In One in the ERP side; Magento (Community and Enterprise), Zen Cart, Prestashop, Shopify, Big Commerce in the eCommerce side; eBay and Amazon in the Marketplace side; Sugar CRM and Salesforce in the CRM side. This means APPSeCONNECT can connect any of these eCommerce or Marketplace Platforms with any of the above mentioned ERP platforms.

We are also investing our effort in continuous research and development and soon have plans to launch WooCommerce App and Open Cart App in the eCommerce segment. This falls on our short-term roadmap. 

### How the Plan helps the consumers?
The plan helps you to keep track of the services you are consuming and helps APPSeCONNECT to provide you those particular services more efficiently.
