---
title: "Create Swagger Documentation"
toc: true
tag: developers
category: "API-Management"
menus: 
    quickstartapi:
        icon: fa fa-gg
        weight: 6
        category: "Quickstart"
        title: "Create Swagger Documentation"
        identifier: quickstartswagger
---

**Swagger** is an Open Source Framework for the documentation of API. Swagger is a tools which enables you to generate, visualize and 
maintain your API docs, so that your documentation stays up-to-date as your API evolves. APPSeCONNECT Swagger documentation in portal is an apt platform 
which helps in easy maintainance of API throughout the evolution of the API Process.

Follow these steps to create a Swagger Documentation of API with **APPSeCONNECT**

## Prerequisites

As per requirement before you start creating a new swagger documentation for an API you need to make sure you meet all the 
prerequisites which is given in  [Create a Proxy API](/api-management/steps-to-create-proxy-endpoint/)

The Proxy API section will guide the user to create a new API, Provide Basic Information of API, Versioning of API, Apply Policy, Specify the 
backend services (The backend needs to be configured correctly by specifying the Application, Schema, and Action), The outboud policies,
and Response setup of the API.  

## Steps to Create Swagger Documentation

1. Navigate to **Manage > API**.
![api-swagger](/staticfiles/api-management/media/api-swagger.png)
2. Inside **API ManagementSection** you can see `Webhooks` and `Proxy`.By default, Webhook section will be
  shown and you can see all your connections listed here. Click on **Proxy**. Here you can view the list of Proxy API created or you if you are a 
  first time user, you can create a New Proxy API. `Add New` button enables to create a new Proxy API. Refer [Create a Proxy API](/api-management/steps-to-create-proxy-endpoint/)
3. Select the Proxy API for which you want to create swagger documentation. 
4. Now click **Here is your swagger endpoint** to open the swagger portal. The Swagger window appears as shown below.  
![swagger-screen](/staticfiles/api-management/media/swagger-screen.png)

Here you will view the `Organization Information, Base URL, Proxy API URL, Schema selection option, and the Proxy API Created`.

5. Select the Schema as HTTP from the drop down list and now you have to activate the `Authorize` button. 
 for Authorizing the SWAGGER which asks for a Username and Password.
6. Go to **APPSeCONNECT Portal> Manage > API> Proxy> Click on the `AUTHENTICATION` button**(Top Right Corner) on the APPSeCONNECT Cloud Portal.
![authentication-proxy](/staticfiles/api-management/media/authentication-proxy.png)
7. The following screen appears. Select your User Organisation from the drop-down menu and it will automatically generate the 
 Username and Password. Click on the Re-generate button to regenerate the authentication details as and when required.
![authentication-re-generation](/staticfiles/api-management/media/authentication-re-generation.png)
8. Click `Authorize` button in the swagger screen. Enter the basic authorization details and click on authorize.	
You will get a confirmation message `AUTHENTICATED` in the same window as shown below.
![swagger-authorization](/staticfiles/api-management/media/swagger-authorization.png)
9. Now the authorization is complete, Click on GET for expanding the Parameters section. 
Once the Parameter Section gets expanded,  Click **TRY IT OUT** to execute the parameters.
![swagger-parameter-execution](/staticfiles/api-management/media/swagger-parameter-execution.png)
10.  After clicking on `TRY IT OUT` you will find an EXECUTE button below. Click on it
![execute-button-swagger](/staticfiles/api-management/media/execute-button-swagger.png)  
11.  Now you can see the result given below, along with the HTTP Response code for success (200).
![swagger-response](/staticfiles/api-management/media/swagger-response.png)

**Note: 1) Every-time, you open the SWAGGER window, you need to re-generate the username and password.    
        2) Every-time, you execute the Proxy API in Swagger endpoint you can view both success and failure messages.   
           e.g: The HTTP Response code for success/failure will come like 200 OK, 202 Accepted, 
           302 Moved Temporarily, 204 No Content, 206 Partial Content etc.**  
