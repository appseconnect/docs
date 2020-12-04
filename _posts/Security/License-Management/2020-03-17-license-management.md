---
title: "License Management"
toc: true
tag: developers
category: "License Management"
menus: 
   security:
        title: "License Management"
        icon: fa fa-wpexplorer
        weight: 2  
        identifier: LicenseManagement    
---

License key-based authentication approach is security enhancement for your on-premise and cloud integrations. 
This mechanism authenticates users who tries to login to the integration client of APPSeCONNECT agent using 
a revocable, secure and unique license or a security token that is provided by the server.

### Working Principle for License Management

* When registered users logs in for the first time, the server verifies the authentication, and generates a licence key based on machine credentials. 
* APPSeCONNECT tags each local system with the licence key such that the same licence key cannot be used from different system. 
* License key will be revocable and traceable, i.e. it can be removed or revoked when the subscription gets expired and renewed further. 
* Each License key is generated considering the Organization ID and MacID which enhances the security of your application preventing unauthorized access.
* License Key is not dependable on Username and Password as the Auto-Sync services will remain active even if the password is changed. The License key once assigned, cannot be resigned again by changing the Username/Password.
* The feature Rolling Window will provide Partners and Developers an access to client agent environment. Read to know more about [Rolling Window](/license%20management/license-generation/).
* Multiple OP Agent instances can be set as primary after license key implementation. 
* License Key once generated will stay valid till the time user subscription is valid. 
* Multiple users of the organisation will now be able to login to same as well as different agent environments.
* A user of an organization will not be able to login to the same environment, if that user is already been linked with any other organization. 
* Every agent associated with an organisation, will have separate license key for each agent instances in each environment.
* While updating to Agent Version 4.9.0 & Above, Ensure to run the migration tool for Agent Upgradation.


**Note: (a) Agent needs to be dissociated first from the portal, before reassigning the same license key.    
        (b) APPSeCONNECT License Management is compatible even with older versions of the agent**

### Usability Aspect of License Management

* If the user who had access to the license key, leaves the organization. 
  Each connected organisation will have a separate key and it is simpler to track unauthorized connections. 

* License key implementation feature prohibits access to different organization from same environment 
  and this restriction is presently available from Agent 4.4 onwards.

**Scenario: If user 1 from organization 1 have already logged in to an Agent environment, user 2 of organization 2 will not be able to 
log in to the same Agent environment.** 

* Whenever a different organization user tries to login to same machine, they will get the following message:

![user-licensekey-failure](/staticfiles/root/media/user-licensekey-failure.png) 

* On-behalf login for client by the superuser will be stopped in OP Agent.
 
**NOTE: No implementer/partner/developer will be able to login separately for an organization which was available 
  for all earlier Agent versions of 4.3 and lower.However, the above Implementer/Developers can login using 
  [Temporary license](/license%20management/license-generation/) key to access other organisation environments.**



