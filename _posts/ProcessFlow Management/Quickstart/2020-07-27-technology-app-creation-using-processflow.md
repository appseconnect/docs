---
title: "Technology App creation Within processflow"
toc: true
tag: developers
category: "Processflow"
menus: 
   quickstartprocessflow:
        title: "Technology App creation"
        weight: 6
        icon: fa fa-file-word-o
        identifier: deployprocessflow
---

Processflow is the advanced sync flow feature that will enable you sync node specific data from an application to multiple other applications or a single application. processflow is a Robust feature of APPSeCONNECT, where you can implement your business processes by customizing the nodes as per your requirement.
With processflow, you can now create your customized technology application supporting the below mentioned protocols from your [Designer Page of processflow](/processflow/designer-processflow/).

1) File     
2) REST    
3) SOAP    
4) OLEDB    
5) FTP    

The steps to create a **Technology Application** is provided below.

## Prerequisites for Technology App creation:

 - You need to have valid credentials of the portal.
 - You need to create the app in the [designer page](/processflow/designer-processflow/) , before creating the processflow.

## Steps to create Technology based Application:

1) Navigate to the [processflow designer page](/processflow/designer-processflow/) and expand the **Flow Connect** menu, in the [Left panel](/processflow/designer-processflow/#process-flow-left-panel) of the designer page.

![techapp1](\staticfiles\processflow\media\techapp1.png)


2) Drag any desired technology protocols to the designer panel for creating the application. The technology should be selected based on the protocol, your application supports. For REST based, you need to drag the REST config template, for SOAP based you need to select SOAP config template.

3) On dragging the technology specific template, the technology configuration window opens. You will be able to view the following fields.

- Name: Enter the name of the application 
- Enter Description: You can provide a small description for the application.
- App Version (Mandatory Field): You need to provide the version of the application used.
- Version Definition (Mandatory Field): You need to provide a short definition for the application version.
- Choose Picture: You can upload the app specific logo for identifying your application by clicking on the **Choose Picture** button. This logo will be viewed where the application is in use.
- Category: You can select the type of application based upon the categories such as Marketing, Huma Resource, Ecommerce, ERP, Accounting etc.
- Status: This defines the status of the application, by default, it will be selected as Released. 

![techapp2](../../staticfiles/processflow/media/techapp2.PNG)


4) Enter the details for the above mentioned fields and click on the **Save & Continue** button.

![techapp3](\staticfiles\processflow\media\techapp3.PNG)  

5) The Node Configuration Window opens automatically for the created technology application.

![techapp4](\staticfiles\processflow\media\techapp4.PNG)    

6) Enter the details of the Node Configuration Window for the created application, for specifying the node configuration. Click on the SAVE button.

![techapp5](\staticfiles\processflow\media\techapp5.PNG)  

**Note:**
    - You cannot edit the created app from the processflow section. However you can anytime edit your application by navigating to APPS > Search your App. Click on the View button for editing your created app.
    - You cannot create applications with the same name in your organisation.
    - You cannot provide special characters in the **App Name** field.

Following the above process, you can successfully create a technology application.


### Reuse of the created Technology App:

You may require to reuse the same created techology app in the same processflow or in a different processflow. Follow the below steps to add the same technology app created previously.

1) Open the processflow where you are required to reuse the app. You need to [create a new processflow](/processflow/creating-processflow/#steps-to-create-a-process-flows), incase, you need to reuse the app in a new processflow. 

2) Expand the APPS menu in the [left panel of the designer page](/processflow/designer-processflow/#process-flow-left-panel). You can view two tabs upon its expansion: `Pre-Packaged App` & `My APPS`.

![techapp6](\staticfiles\processflow\media\techapp6.png)

3) Click on the **My Apps** tab. You can view all the custom and the technology apps, you have created for your organisation.

![techapp7](\staticfiles\processflow\media\techapp7.PNG)

4) Select the app from the **My Apps** list and drag it on the [designer panel](/processflow/designer-processflow/#process-flow-designer-view). The node configuration window opens for the dragged app.

5) Enter the details in the Node configuration window and click on the save button.

**Note:**
- [Click here](/processflow/adding-schema-actions/) to know more about the process to create Schemas and Actions for the created technology app.

- The [process to deploy and execute the processflows](/processflow/deploying-and-executing-processfloww/) remains the same for Technology applications

- You can also view the [processflow snapshots](/processflow/snapshot-processflow/), similar to as that of the prepackaged apps.
    
**Protip:** For more details related to the technology app, [click here](/connectors/Overview-of-technology-connectors/).
 {: .notice--info}