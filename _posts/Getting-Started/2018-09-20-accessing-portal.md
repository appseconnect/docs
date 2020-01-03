---
title: "Accessing Portal"
toc: true
tag: developers
category: "Accessing Portal"
menus: 
    gettingstarted:
        title: "Accessing APPSeCONNECT Portal"
        weight: 5
        icon: fa fa-wpexplorer
        identifier: accessingportal
---

The APPSeCONNECT portal is the web-based interface where you can access APPSeCONNECT applications for integration, with the set of Functional menus. The [APPSeCONNECT portal page](https://portal.appseconnect.com/Account/Login?ReturnUrl=%2f#!) is easily accessible.
Once you have logged in, some elements of the APPSeCONNECT portal are common to all apps, accessible via the left side panel of the page. Of note, these also includes accessing your account, where you can update your information as well as changing your password.

The set of functional menus are easy to navigate and ease the method of integration via our Portal.
The view of functional menu(s) is given below:

![FunctionalMenus](/staticfiles/root/media/FunctionalMenus.png)

Let us walkthrough the Functional Menu for understanding the usage and need of each menu. 

|Modules|Details|
|---|---|
|Dashboard|This page will show the details of the organisation, user logged in into. Project Basic Information, Configuration Completion Details etc|
|App|This section allows the user to choose or create apps that are required for the organisation|
|Connections|Users of APPSeCONNECT will be able to configure and create connection depending upon the apps chosen|
|APIs|This section talks about the API Management with APPSeCONNECT|
|Workflows|User will be able to design and execute workflows as per the business process and requirement|
|Manage|This section provides a simplified view of the modules that required to manage the integration process|

## A. Accessing Organization Dashboard 
Dashboard is the default page which you can view after logging in to the APPSeCONNECT portal. 
The dashboard can be seen automatically when a Project has been chosen. 
In this page you can see the snapshot of the project at a glance with respect to the activities of the user. 
![Dashboard](/staticfiles/root/media/Dashboard.png)

The dashboard view captures the following information- 
1.	Project Basic Information
2.	Configuration Completion Details
3.	Subscription Details
4.	Execution Status
5.	Execution Counts 
6.	Sync Errors
7.	Execution Logs

Choose any of the dashboard panel and it will redirect you to the related functionality of the menu in details.

*1. Project Basic Information: This widget displays the basic information of the organisation.*  
The details displayed in the widget are:
a.	Project Name: Shows the organisation name.
b.	Main Contact Person: Displays the contact detail (Email Id only) of the project holder.
c.	Implementation contact: Displays the email id of the implementation team of the project.
d.	Sales Contact: Shows the Email details of InSync Sales Team.
e.	Support Contact: Displays the Email Id of the InSync Support Team.

*2. Configuration Completion Details: This widget displays the configuration informations related to the organisation project. 
This widget also has a progress bar that displays the progress status for the organisation.* 

*3.Subscription Details: This widget will inform the user about the categories of applications subscribed for the organisation.* 

 These are the following information that will be displayed in the widget.
a.	Subscription Plan
b.	Remaining Days
c.	Subscription Expiry date
d.	Application Categories Subscribed.

The widget has the `View More` button, which redirects the user to the subscription page of the organisation.
**Note: The above three widgets initiate in minimized form by default. Users need to expand the widgets to view the widget details.**
 
 ![Subscription_Dashboard](/staticfiles/root/media/Subscription_Dashboard.png)

*4.Execution Status: This widget displays the percentage of data synced and is categorised based on the status: Success, Skipped & Failure.*
The percentage is displayed on a pie chart  irrespective of connections. Hovering over the section on the pie chart will display the exact 
number of data based on the statuses. Users can minimize, maximize the widget by click on the respective button available on the top right 
corner of the widget. 

**Note: The close button remains in disabled state.** 

 ![ExecutionStatus_Dashboard](/staticfiles/root/media/ExecutionStatus_Dashboard.png)

*5. Execution Counts: This widget displays the data counters with respect to each connection in form of a Bar chart.*
This widget displays the status of each connection based on:  Success, Skipped, Unprocessed & Failure.
Users can minimize, maximize the widget by click on the respective button available on the top right corner of the widget.  
Note: The close button remains in disabled state.
![ExecutionCount_Dashboard.png](/staticfiles/root/media/ExecutionCount_Dashboard.png)

*6.Sync Errors: This widget will display all the errors occurred, irrespective of the connections for the organisation.*
For each error, the following details would be displayed.
a.	The time of the error faced. 
b.	Error Faced
c.	The source id of the item.

 ![Syncerror_Dashboard.png](/staticfiles/root/media/Syncerror_Dashboard.png)

*Note: Only the latest 100 errors would display in the widget.* 

Users can search the error based on the source id and the error name by click on the search icon available on the top right corner of the widget.
Users can minimize, maximize the widget by click on the respective button available on the top right corner of the widget. 
Note: The close button remains in disabled state.

![Syncerror2_Dashboard.png](/staticfiles/root/media/Syncerror_Dashboard.png)

*7. Execution Logs: This widget will display the execution logs of all the workflows & Realtime Time touchpoints executed through autosync.*
Every log would display these following details:

a.	Connection Name
b.	Touchpoint/Workflow name
c.	Start time of the Execution
d.	Finishing Time
e.	Time taken to execute

![ExecutionLog_Dashboard.png](/staticfiles/root/media/ExecutionLog_Dashboard.png)

Users can minimize, maximize the widget by click on the respective button available on the top right corner of the widget. 
Note: 
* The close button remains in disabled state.
* Logs would be displayed only for autosync execution processes.  

![ExecutionLog2_Dashboard.png](/staticfiles/root/media/ExecutionLog2_Dashboard.png)

## B. Choosing App

APPSeCONNECT support large number of apps and you can find and choose the app from the prebuilt list. If you cannot find your App on the list, you might want to try out our App creation page to add a new App to our database. 
Any App once added is assigned to a particular category. 

The organization-specific app screen page displays all the apps that are present in a specific organization. 

Some of the predefined categories are : 
1. ERP - SAP Business One, Microsoft Dynamics NAV, Priority etc
2. ECommerce - Magento, Shopify, WooCommerce etc.
3. CRM - Zoho CRM, Dynamics 365 CRM, Sugar CRM etc.
4. Accounting - HubSpot, Salesforce Marketing Cloud etc.

Also, APPSeCONNECT supports both the Cloud and On Premise Based Application. Some of the examples are:

1.	Cloud Based Applications - Shopify, WooCommerce, Zoho CRM, Magento
2.	On Premise Application - MS Dynamics NAV, SAP Business One, Uniconta 
3.	Both Cloud & On-Premise - SAP Business One

One has to search for the organization in the search box and the organization will open up. Go to the App menu. Here you will get two option - Choose App & Add New App

You can do [App Selection](/configuring%20appseconnect/configurations/#process-of-choosing-app) & [touchpoint execution](/getting%20started/configurations-for-integration/#creating-connection--executing-the-touchpoint) from here.

## C. Connections

The Connection Page of the Portal enables creating the connection between two different Applications.  You can also view the existing connection for a particular organization on this page.

You need to [Create Connection](/getting%20started/configurations-for-integration/#configuring-connector-while-creating-connection) & [Execute Touchpoint](/getting%20started/configurations-for-integration/#creating-connection--executing-the-touchpoint).

## D. API's

`API Management` of APPSeCONNECT helps an organization to create, maintain and publish APIs for their various data sources such that the data can be easily accessed and maintained quickly without needing a separate development team. The API management platform provides an interface which any developer can access to create or configure services.

To know more about API Management, [Click here](/api-management/overview/).

## E. Workflows

`Workflow management` is group of instructions to the integration service in APPSeCONNECT.
APPSeCONNECT workflow application can be considered as a strong feature that uses the software to either partially or entirely automate a complex business process. Workflow is a concept that describes how process in business divides work activities into distinct roles, task, procedures and rules.

To know more about Workflow Management, [Click here](/workflow/overview/).

## F. Manage

This section provides a simplified view of the modules that required to manage the integration process. These are the modules that are available under the Manage section. 
* Feeds 
* Rules 
* Environments
* Tickets 
* Users (to do)

## Feeds

You can see and track all the activities in form of recent feeds directly through the APPSeCONNECT portal after logging into your account. Traces of past activities of the user can be been viewed in the feed section.

1. Choose & Click on a Project.
2. Click on **Feeds** menu.
3. Here you can only see your activities in your logged in profile.
4. Feeds Page has search criteria, so that you can filter the feed using topic keyword filters like "touchpoint", "masterdata" etc.
4. This is view only menu.

**ProTip:** If you are a superadmin, any change(s) in the organization(s) done by you will be reflected in your feed section and the similar change will also get reflected in the specific organization feed section. 
{: .notice--info}

## Rules


APPSeCONNECT Rule listing enables you to perform ACTIONS like (raising a support ticket or sending an email) based on the type of events encountered during agent execution such as - `Execution Failure, Execution Start, Execution End`, via Rule Engine. 

During Agent execution, if some events are encountered such as *Application Crash*, automatically the Rule which you have defined on Application Crash will be triggered and it will perform the associated Action with that Rule.
You can also define additional criteria for triggering the Rule and performing the actions. 

In that case whenever the event will occur it will also check if the additional criteria are matched or not. If the additional criteria are matched then only the Rule will be triggered.

## Environment

This page lists the devices that have access to the project that the customer is working on. For environment details, [Click here](/getting-started/)


## Tickets

APPSeCONNECT support tickets are meant of clients who can place a ticket and set priority level while facing any problem while working on APPSeCONNECT.and you need to resolve it as early as possible. 

The implementers and the partners would be able to see the tickets and resolve them.

## Users

 Users is one of the main feature of APPSeCONNECT portal as this control over the access that a user has. Depending on the role of the user, the menu panel of the portal is customized such that the user can use the functionalities depending on the role allotted to him.

 * We can add multiple users to a particular project on the cloud portal by clicking on 'Users'. 
 * Each user will have different levels to the portal depending on the role allotted to them. 
 * Depending on the role, different users have different levels of permission to access the various features.
 * These roles are Organisation Admin, Implementer, Partner etc.

**Protip** According to the present scope of understanding, there you will encounter 2 main roles as given below: 
{:.notice--info} 

(a) **External Implementer:** In APPSeCONNECT, an external implementer is a user who sets up the integration solution, depending on the customer's requirement. An implementer can modify a project once it has 
    been created by the Admin. He or she can edit the project and its status. An external implementer has access to specific projects.

(b) **Organisation Admin:** The access level of the customer is called the 'Organisation Admin'. He or she can add/ choose apps. Create connections and setup workflows but he or she cannot setup roles, regulate the control of users, or bring about any configurational changes.


## Managing Customer Profile 


This section enables you to quickly access your profile after [logging](https://portal.appseconnect.com/Account/Login?ReturnUrl=%2f) into the application. This is where you will get the overview of your organization including assigned companies under you, your organization details and feeds

This section also enables you to change details like your *personal information, changing avatar, changing password, privacy setting and security setting*.

Let us dive in details about every section of customer profile information.

![customer-profile](/staticfiles/root/media/customer-profile.png)

### (a) My Profile

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


### (b) My Subscription

Users of APPSeCONNECT can manage their subscription addons from this section. Navigating to this panel, user can perform these 
following actions: 

1. User can view the organisation subscription plan and its expiry date.
![subscription1](/staticfiles/root/media/subscription1.png)

2. Select necessary addons and can update subscription.
![subscription2](/staticfiles/root/media/subscription2.png)
3. Can view history of selected addons for the organisation. 
![subscription3](/staticfiles/root/media/subscription3.png)
4. Can apply for support packages based on the number of hours as per requirement
![subscription4](/staticfiles/root/media/subscription4.png)

### (c) Lock Screen

Clicking on the lock screen will log off the user from the portal.


### (d)Log out

Click on the logout button will logout the user from the portal.

### Bookmark Panel section

![bookmark1](/staticfiles/root/media/bookmark1.png)

In the bookmark panel, user can also view the following buttons:    
a. Bookmarks: For adding portal specific bookmarks      
b. Notifications: For viewing portal specific notification.      
c. Downloads: For downloading APPSeCONNECT tools like Agent, Plugins, Addons etc.      
d. Full Screen: Users can also view the portal in full screen mode by clicking on the full screen button.     
 
*Steps to create portal specific Bookmark*
1. Clicking on the bookmarks link, user gets the option to Create Bookmark.   
![bookmark2](/staticfiles/root/media/bookmark2.png)   
2. User needs to name the bookmark which is to be created.  
![bookmark3](/staticfiles/root/media/bookmark3.png)   
3. Users can view the saved bookmarks by clicking on the bookmarks drop-down.   
![bookmark4](/staticfiles/root/media/bookmark4.png)   


**Note: Application specific Add-ons would be available as per the application chosen in the apps section of the organisation.**

### Organization Specific Notification for Users in AEC Portal 

An User/Implementer can now view the notifications in the APPSeCONNECT Portal. 
Here you will get the knowhow of APPSeCONNECT Notification and its functionality.

1. Login with the valid AEC portal Credentials.

2. Click on the bell icon in the cloud portal.

3. The Notification Bar opens on clicking the bell icon.

4. You can view the full description by clicking on that notification. 

![notification](/staticfiles/root/media/notification.png)

**Functional Aspects of Notification**

1. The notification will display all the organization specific notices and important updates.
2. The notification detail window will display the notification Description, Priority Level, Severity Level and the Notification expiry date.
3. The notification expiry date might vary from notification to notification.

### Downloads Section

User would be able to download APPSeCONNECT specific tools from this section. Clicking on the Downloads tab, 
user would be able to view the tools that are available for the organisation. The tools that would be available are:

* APPSeCONNECT On-Premise Agent
* APPSeCONNECT Plugins
* APPSeCONNECT Debugger
* Application specific Add-Ons

![download](/staticfiles/root/media/download.png)  
## Steps to update an existing user

1. [Login](https://portal.appseconnect.com/Account/Login#!) to APPSeCONNECT
2. Now Search/find the appropriate organization you want to change details for. 
3. Click on Users menu.
4. Click on Edit link for an existing user.

![Usernode](/staticfiles/root/media/Usernode.png)

In the edit user screen, you can change the username, email address, password etc for that particular user.

![InviteUser](/staticfiles/root/media/InviteUser.png)

After completion, click save to save data. Now use the email id and password to login to cloud or agent.

# Adding a Project in Recent Project Tab from Search Box

1. You have logged in successfully as a user. Now  you will be able to search all projects from the search box and from there you will be able to add projects to your recent organization tab list. 
2. Now the login page will be redirected to a homepage as shown below                                       
![Dashboardview1](/staticfiles/root/media/Dashboardview1.png)
3. If you are an existing user, you can search for projects using the search box.
4. Enter keyword in the search field.                          
![Search-Project](/staticfiles/root/media/Search-Project.png)
5. Now click on Add button and Search field will come up.                      
![Add-SearchProjects](/staticfiles/root/media/Add-SearchProjects.png)
6.  There is a `cross` and `pin` button. 
7. If you click on the cross button then already tagged project will be untagged from project tab.
8. The pin will toggle on or off, where On means the project will not be removed automatically.                                     
![Pinbar](/staticfiles/root/media/Pinbar.png)
9. After the pin is in on state that project will go to the first option.
10. If you minimize the browser size then all project will show the bread button.                         
![Projects-View](/staticfiles/root/media/Projects-View.png)                                      
![Pinned-Projects](/staticfiles/root/media/Pinned-Projects.png)                                             
11. Now `Add New` project, will be added to the left side of last accessed unpinned project like this.                       
![NewProject-Added](/staticfiles/root/media/NewProject-Added.png)            

**Protip** 
- For a new user, Account menu will only be available. For an end user, Administration menu will not be available 
- When one project is added beyond the 5 projects, the last accessed project will be automatically removed.When already few project are added as pinned then after adding new project the new project will add to the left side of last unpinned added to project.
{: .notice--info}  

* If all 5 projects are pinned in the tab, thereafter if a new project is added it will be added but will not be visible in the tab.
* Project can be deleted from recent accessed tab by implementer/dev/ISV partner/Implementation partner  [except new end customer/ user].
* Only projects where the user has access can be added.

For example: Let say you have logged in the portal with a user who doesn't have permission more than two projects (e.g-solera) now if you would search with any keyword related "solera"  it would not come in the search list like
