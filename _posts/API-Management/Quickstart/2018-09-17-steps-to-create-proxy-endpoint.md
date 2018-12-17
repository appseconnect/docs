---
title: " Creating proxy endpoint"
toc: true
tag: developers
category: "API-Management"
weight: 5
menus: 
    quickstartapi: 
        icon: fa fa-gg
        category: "Quickstart"
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

1. [Getting a new account for APPSeCONNECT]()
2. [Choosing and Configuring Backend APPs]()
3. [Connecting to your data sources]()
4. [Configuring Environments, installing / deploying Agent]()
5. [Feeding Credentials for applications and data sources]()
5. [Configuring / Importing Schemas and Actions]()

After all these steps are done, make sure the environment is kept running and credentials are propery updated. 

## Steps to create Proxy Api

To start creating a Proxy API, login to APPSeCONNECT and move to API Management section. You will see sections 
depicting Proxy, select the section to navigate to it.

1. Click on `Add New` button to create a new API.
2. Put basic information, such as `API name`, `Description`, `URL Suffix`, `HTTP method` etc. These 
details are important to create the face of the API. 
3. The Frontend of the API also requires you to mention Versioning of the API such that the initial version 
of the API can be considered. The API version is important as maintainance of API is a challenge, and if you do
not specify the version element in the API, you will face lot of challenges in future. 

![Api Frontend Configuration](/staticfiles/api-management/media/api-frontend-configuration.PNG)
**Note:** For simplicity, APPSeCONNECT Requires the API provider to specify a default version mandatorily. 

4. Once all the data is provided on the screen, move to the next screen. The next screen lets the user 
to specify policies which will be executed before the execution of Backend Action.

![Inbound Policy Example](/staticfiles/api-management/media/inbound-policy-example.PNG)
In the figure above, you can see, you can add more and more policies from the screen to be applied to an API. Each
of the policies applied here needs to be cofigured with specific data. Once all the policies are configured correctly,
you can continue the wizard. 
5. The next screen is where you specify the backend. This section is very important because this section
provides the actual data source for that particular API. 

![Api Backend Configuration](/staticfiles/api-management/media/api-backend-configuration.PNG)
6. The backend needs to be configured correctly by specifying the Application, Schema, and Action. In addition to that
you can also choose the credential here to connect to the particular data source. 
7.  The outboud policies are those which are applied after the backend is executed. Here also similar to the Inbound 
policies, you are allowed to choose as many policies from the list as you want and configure each of them to continue 
to the next screen.
8. The next screen specifies the Response setup of the API. Here you are allowed to specify what response code the API 
should return when there is a failure in execution or success in execution. You can also specify the response message 
if you are not happy with our defualt messaging. 
9. Each of the APIs crated will show the URL and Http Method which needs to be used to execute it from the listing screen.

### Steps to follow while editing your proxy endpoint

The Edit screen of proxy provides you a tree view which lets you edit individaul section of the API, adding new sections,
investigate policies or execute the documentation.

![Proxy Api Edit Screen](/staticfiles/api-management/media/proxy-api-edit-screen.PNG)

The above screen provides information of a particular API in individual nodes. You can add new methods to an API,
change versions, publish new version or add credential to the backend. 

