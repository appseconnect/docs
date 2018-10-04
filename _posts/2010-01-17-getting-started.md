---
title: "Getting started to APPSeCONNECT"
toc: true
tag: developers
category: "home"
menus: 
    header:
        title: Getting Started
        icon: fa fa-play
        weight: 1
---

# CUSTOMER PROFILE INFORMATION

This section enables you to quickly access your profile after [logging](https://portal.appseconnect.com/Account/Login?ReturnUrl=%2f) into the application. This is where you will get the overview of your organization including assigned companies under you, your organization details and [feeds](/home/home/).

This section also enables you to change details like your personal information, changing avatar, changing password, privacy setting and security setting.

Let us dive in details about every section of customer profile information.

## My Profile

1. Log in to the [APPSeCONNECT portal](https://portal.appseconnect.com/Account/Login?ReturnUrl=%2f) with valid credentials.

2. Click on your name, and you can view `My Profile` tab. 

![MyProfile](/staticfiles/root/media/MyProfile.PNG)

3. This section enables you to edit your profile details. Here You will see two tabs - *Overview & Change Details page*.

4. Here you can view your brief detail like your  name, your registered e-mail, your role, phone number and IP address.


5. In the `Summary section`, the count of projects you handle/under organization is shown. You can also see your expired project counts and trials according to your Role and access level, you can see the companies.

6. `Assigned Companies` will be shown on User Role basis. In **My Company section**, only your company details will be there.

![AssignedCompanies](/staticfiles/root/media/AssignedCompanies.PNG)

7. `My Feeds` section is for seeing your recent activities.

By clicking Projects, [Workflows](/workflow/overview/), you will be redirected to that particular pages respectively.

**ProTip:** If you click on Change Details tab, you can edit all details 
{: .notice--info}


![ChangeDetails](/staticfiles/root/media/ChangeDetails.PNG)

In the Personal Info tab, you can edit your name, mobile number.

Click  **Change Avatar** to change your Profile picture.


Click **Change Password** to change the password and set your new password.


The **Privacy Setting section** allows you to agree/disagree with the privacy policy. Basic privacy policy includes - Subscribing to Email Notifications & Acceptance of Terms & Condition.

The **Security Setting** enables you to handle all the security related settings like password expiry time set, account decativation and updating encryption policy. 

![SecuritySettings](/staticfiles/root/media/SecuritySettings.PNG)

# CONFIGURING APPSeCONNECT 

This section gives the overall idea about chhosing application, configuring connection, ennviornment setup and execution of the sync process. Step by Step direction is given below:

1. Login to APPSeCONNECT - View [Home Page](/home/home/) to get the details.

## Choosing Application
1. Go to the APP section of APPSeCONNECT and You can view that organization-specific app screen page displays all the apps that are present in a specific organization.

2. Now Search for the organization in the search box and the organization will appear.  You can view all the apps which are present under the organization.

3. `Choose App` option enables you to choose and add apps available under the subscription plan of the organization.

4. Choose Desired Application from the drop-down and select the appropriate version. After choosing both app and version, click on *Save* button.

5. The app will be added. The Search Text box helps you to quickly search the desired app.

6. Click on the Delete option beside the app, to delete any app you dont require.

You can Expand the section by clicking on  the "Plus" button beside the app name. Now you can view the versions of the app and the `Schema`,`Adapter` and the `Function` option are available.

The process of Adding New App is present in the subsequent section of the module.


## Creating Connection & Executing the touchpoint

The Connection Page of the Cloud Portal is needed for creating connection between two different Applications. 

For Example, if you want to create a connection between SAP B1 to Magento 2, you have to come to this page & create the connection. You will also see the existing connection for a particular organization on this page.

1. Login to portal with the valid details of a user.

2. Navigate to the following path: Choose a Project -> Connection 

![ConnectionDetails](/staticfiles/root/media/ConnectionDetails.png) 

3. To find existing Connection, Click Search button. An existing connection opens up

4. A typical connection has the following buttons attached to it.

**Protip** On clicking the Publish button, all the Touchpoints will be published under the connection. Once a connection has been published, only the Republish button will appear instead of Publish button {: .notice--info}

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

**Protip** On the Touchpoints page, there will be a Reverse button (only if applicable, for e.g here NAV to Magento connection is also available). The connection will be reversed.
Related document {: .notice--info}

**Value Mapping** is an important function under touchpoint selection. 

Value mapping is a concept which allows the implementer to configure value mapping specific to the application environment such that when the source value is processed, it will be transferred to the destination value automatically. The Value-Mapping is a way to map the special values which needed to be converted by the applications during transformation.

Details of Value Mapping will come in subsequent section of the document.


## Configuring Environment - Agent download / Cloud agent configuration

APPSeCONNECT On-Premise Agent is a hybrid tool that sits on your own server and is configured on cloud and does the actual data synchronization with the help of other concerned adapters while the Cloud agent is a similar tool that performs the same function as the on-premise agent but is present on cloud itself. No server is required to configure or sync using the cloud agent.

### Environment setup of the on-premise agent:

 1. Login to the portal and from the Dashboard section download the Agent from the Downloads section as shown below.

   ![DashboardScreen](/staticfiles/root/media/DashboardScreen.PNG)

 2. Run the setup folder to install the Agent in the system.
 3. Open the installed Agent on your machine.

4. Login to the agent with your portal credentials.

   ![Login1](/staticfiles/root/media/Login1.PNG)

5.   There are four icons as shown below:
The home icon shows the connections in the project.
The apps configuration icon (next to the home icon) shows the applications used for the connections which need to be configured for successful sync.

The sync panel displays the connections deployed successfully for sync. It is visible after you have checked the Show in sync panel checkbox in the Connections page.

The last one is the Workflow option that displays the configured workflows in the project.

  ![Connections](/staticfiles/root/media/Connections.PNG)

### Environment setup of the Cloud agent

**Pre-requisites:**
* The project should be cloud supported.

* The two apps between which data has to be synced should be cloud supported. 

* The connection between the two applications should be cloud supported.


1. Login to the portal and under the apps section provide the respective app credential data (similar to the configuration of the app in the on-premise Agent).

![App](/staticfiles/root/media/App.PNG)

2.  Go to the Connections page and assign the app's credential to the connection by choosing the configuration setup option as shown below.

![Connection_New](/staticfiles/root/media/Connection_New.PNG)

3. Click on the View the Connection icon and navigate to the touchpoints page.

4. Click on the play button to run the sync process.

![Connection_Touchpoint](/staticfiles/root/media/Connection_Touchpoints.PNG)


