---
title: " Creating proxy endpoint"
toc: true
tag: developers
category: "API-Management"
menus: 
    quickstartapi: 
        icon: fa fa-gg
        category: "Quickstart"
        weight: 4
        title: "Create Proxy endpoint" 
        identifier: quickstartproxy
---
Proxies are the full REST (Representational State Transfer) services which allows to create proxy
over a set of existing data source. As applications in real world are diverse in nature, it is the 
ask of every consumers to have a uniform API layer in place which will allow the external consumers 
to have same kind of API system in place in spite of having varied range of Application APIs. As the name
proxy suggests, it is just a wrapper over an existing data source or APIs, thereby providing time
tested layers to handle `Authentication`, `Policies` and also `Documentation`. In this article
we will see how can we develop a proxy API over a set of existing service and execute the same through
APPSeCONNECT Portal. 

## Prerequisites

As per requirement, before you start creating a new API Proxy, you need to make sure you meet all the 
prerequisites. Here are some of them : 

1. [Getting a new account for APPSeCONNECT](/getting%20started/user-registration-license/)
2. [Choosing and Configuring Backend APPs](/configuring%20appseconnect/configurations/#process-of-choosing-app)
3. [Connecting to your data sources](/getting%20started/configurations-for-integration/#creating-connection--executing-the-touchpoint)
4. [Configuring Environments, installing / deploying Agent](/deployment/Environment-Management/)
5. [Feeding Credentials for applications and data sources](/connectors/OLEDB-Credentials/)
5. [Configuring/Importing Schemas and Actions](/configuring%20appseconnect/configurations/#adding-schemas-and-actions-of-an-application)

After all these steps are done, make sure the environment is kept running and credentials are properly updated. 

## Steps to create Proxy Api

To start creating a Proxy API, login to APPSeCONNECT and move to API Management section. You will see sections 
depicting Proxy, select the section to navigate to it.

1. Click on `Add New` button to create a new API.
2. Put basic information, such as `API name`, `Description`, `URL Suffix`, `HTTP method` etc. These 
details are important to create the face of the API. 

   * API Name - Enter the API Name
   * Suffix - This signify the actual API Endpoint that needs to be specified. E.g: Filter, Delete, Fetch.
   * Method - This signify the API Operations like GET, PUT, POST, DELETE.
   * State - This signify the API state weather it is released, obsolete or in WIP. By default, Released is set in state, you can choose per business
          requirement.
   * Version - This signify the API Version Number
   * Version Append Type - This is set as 'Path'

3. The Frontend of the API also requires you to mention Versioning of the API such that the initial version 
of the API can be considered. The API version is important as maintainance of API is a challenge, and if you do
not specify the version element in the API, you will face lot of challenges in future. 
![Api Frontend Configuration](/staticfiles/api-management/media/api-frontend-configuration.png)  
4. Once all the data is provided on the screen, move to the next screen. The next screen lets the user 
to specify policies which will be executed before the execution of Backend Action.
![Inbound Policy Example](/staticfiles/api-management/media/inbound-policy-example.png)  

**Protip** In the figure above, you can see, you can add more and more policies from the screen to be applied to an API. Each of the [policies](/api-management/policies/) applied here needs to be cofigured with specific data. Once all the policies are configured correctly,
you can continue the wizard. For Policy Configuration, Click [here](/api-management/policies/).
{: .notice--info}

5. The next screen is where you specify the backend. This section is very important because this section
provides the actual data source for that particular API.   
![Api Backend Configuration](/staticfiles/api-management/media/api-backend-configuration.png)    
6. The backend needs to be configured correctly by specifying the Application, Schema, and Action. Select `Schema Action`
from the drop down list. [Click here](/configuring%20appseconnect/configurations/#adding-schemas-and-actions-of-an-application) to know more    
7. The outbound policies are those which are applied after the backend is executed. Here also similar to the Inbound 
policies, you are allowed to choose as many policies from the list as you want and configure each of them to continue 
to the next screen.    
8. The next screen specifies the **Response setup** of the API. Here you are allowed to specify what response code the API 
should return when there is a failure in execution or success in execution. You can also specify the response message   
if you are not happy with our default messaging. 

* HTTP Status Codes are the standard response codes that are provided by the internet server when a website or an API is called. 
  These Codes helps in identifying the reason for the failure when called.

**HTTP Response Codes present in AEC are:  
200 - OK     
201- Created    
302- Moved Temporarily   
207- Multi Status     
301- Moved Temporarily     
203- Non-Authoritative Information.     
300- Multiple Choices   
204- No-Content    
206- Partial Content     
102- Processing    
205- Reset Content     
202- Accepted**


* By Default the user has 1 options each for Success and Failure status and can select the response codes 
from the drop-down option depending upon the Response.
![response-setup-Proxy1](/staticfiles/api-management/media/response-setup-Proxy1.png)
* The user can also add Custom Responses from the `ADD RESPONSE RULE` option.
![response-setup-Proxy2](/staticfiles/api-management/media/response-setup-Proxy2.png)
* The Response statuses can also be changed or edited by clicking on the Configure options. The Configure window is displayed below.
![response-setup-Proxy3](/staticfiles/api-management/media/response-setup-Proxy3.png)  

9. Each of the APIs created will show the URL and Http Method which needs to be used to execute it from the listing screen.

**Note: For simplicity, APPSeCONNECT Requires the API provider to specify a default version mandatorily**

**Note:  For a Particular Proxy endpoint, users can have a multiple ACTIONS like `GET, PUT, POST, DELETE**

![MultipleActions_OneProxy](/staticfiles/api-management/media/MultipleActions_OneProxy.png)  

### Steps to edit your proxy endpoint

The Edit screen of proxy provides you a tree view which lets you edit individual section of the API, adding new sections,
investigate policies or execute the documentation.

![Proxy Api Edit Screen](/staticfiles/api-management/media/proxy-api-edit-screen.png)

The above screen provides information of a particular API in individual nodes. You can add new methods to an API,
change versions, publish new version or add credential to the backend. 

### Editing Action filter in API

Schema Actions can now be created and edited in the API Level by editing the API Proxy. 
This feature can be accessed in the Backend Node in the API Proxy. 

**Steps to do the same**

1.	In the API Proxy, click on the edit option for any proxy created.
2.	Expand the nodes until Backend Services.
3.  Click on the **edit symbol** for editing the Schema Action.
![SchemaAction-Edit](/staticfiles/api-management/media/SchemaAction-Edit.png)
4.  Mention the Action Name, Description and the Query and click on SAVE.
![ActionFilter-Edit](/staticfiles/api-management/media/ActionFilter-Edit.png)

       