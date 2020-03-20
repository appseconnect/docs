---
title: "Generating Temporary License for Organization"
toc: true
tag: developers
category: "License Management"
menus: 
   security:
        weight: 12
        title: "Generating Temporary License for Organization"
        icon: fa fa-gg
        identifier: templicense      
---

Partners & Developers or any other user (except the client) can now, no longer be able to login into the client environment, 
due to APPSeCONNECT License Management. 

As each OP Agent, for each organisation in APPSeCONNECT, are now registered using a License key which is generated 
using the `Organisation ID` & the `MAC ID` of the system thereby preventing other systems & users from logging in.

Partners/Developers requires to login to the client OP Agent for the purpose of implementing or debugging 
client issues and features. Therefore, APPSeCONNECT provides the temporary license key generation feature for the Partners
and the Developers, such that they can login in the client environment for work purpose.

### Working principle for Generating Temporary License

Super Admins of APPSeCONNECT will be able to generate a temporary License key from the portal, for any organisation, 
which is needed to be accessed. The key will be valid for a limited time as selected from the portal. Using the generated key, 
partners/developers can log in to client environment using their (partners/developers) own agent credentials.

**Note: Only an APPSeCONNECT user with Super-Admin access, will be able to generate the temporary License Key for 
Organizations.**

### Steps to Generate Temporary License

1.	Login to APPSeCONNECT Portal with SuperAdmin credentials. Click Home Button.
![rolling-window1](/staticfiles/licensekey/rolling-window1.png)   
2.  Navigate to Projects > Manage Projects. The manage projects window appears.
![rolling-window2](/staticfiles/licensekey/rolling-window2.png) 
3.  Search project, for which temporary license key generation needs to be implemented and Click License tab.
![rolling-window3](/staticfiles/licensekey/rolling-window3.png) 
4.  Select the TTL value from the drop-down option.
![rolling-window4](/staticfiles/licensekey/rolling-window4.png)        
**Note: TTL is the Time-to-Live value, which the defines the amount of time, the generated key remains active.**
5.	Click on the generate key button. The temporary license key will be generated successfully, then Copy the generated key.
![rolling-window5](/staticfiles/licensekey/rolling-window5.png)   
**Note: The Active key would be displayed on top followed by the latest expired key. As multiple license key would be generated 
for an organisation, therefore multiple active keys would be displayed in the dropdown.**        
6.  Navigate to APPSeCONNECT OP Agent and paste the key in the Registration Key field, which can be viewed by 
    pressing the CTRL+F10 button.      
![rolling-window6](/staticfiles/licensekey/rolling-window6.png) 
7.	Click on the login button after pasting the generated license key.    
![rolling-window7](/staticfiles/licensekey/rolling-window7.png) 

**Note: (a)This feature of Generating Temporary License is solely for the Partners and the Developers.       
        (b) On expiration of the license key, the environment will no longer be accessible to the concerned Partner/Developer and would be auto-logged out from the agent.      
        (c) Feed will not generate any login details of the user with respect to generating temporary license key for an organization.
        (d) While logging in using temporary license in the OP Agent, the checkbox for Saving Data Configuration remains disabled**




