---
title: "Version & Library Function Update"
toc: true
tag: developers
category: "Connectors"
menus: 
    Connectors:
        icon: fa fa-wpexplorer
        weight: 7
        title: "Version & Library Function Update"
        identifier: Connectorsversion
---

This section of the document provides you the full details of using Assembly Version Extraction 
and the process of uploading the Native Resources by uploading adapters.

The native resource functions of the applications are needed to be uploaded in the cloud for the 
mapping process. Earlier you had to do it manually by writing down all the native functions in 
the cloud which displayed errors while sync. 

Now we simply need to upload a zip folder which will contain the .dll and the .pdb file along 
with any other dependency file of the particular application you are working on.


1. Add the APP on the Cloud Portal, click on the **+ button** beside the Application name which you have created.
2. Click on the Adapter button  from the menulist. The ADAPTER window appears, Click on `ADD ADAPTER`.  
![AddAdapter](/staticfiles/connectors/media/technology-connector/AddAdapter.png)
3. The following window opens. You can upload the ZIP FOLDER from `CHOOSE FILE` option.  
![ChooseFiles_AddAdapter](/staticfiles/connectors/media/technology-connector/ChooseFiles_AddAdapter.png)
4. All the field details would be automatically filled up after the ZIP folder is chosen.  
![ChooseFiles_AddAdapter1](/staticfiles/connectors/media/technology-connector/ChooseFiles_AddAdapter1.png)
5. Upload the ZIP Folder. Then the APPRESOURCES window opens where you can select the appresources.  
![AppResources_AddAdapter](/staticfiles/connectors/media/technology-connector/AppResources_AddAdapter.png)
6. You have the options for selecting all the appresources (by selecting the Check-Box beside the Title "Function Name") 
   and also you have the option to go for the one you require.  
![Save_AppResources](/staticfiles/connectors/media/technology-connector/Save_AppResources.png)
7.  Now the selection of APPRESOURCE is complete, Click on SAVE.
8.  Click `Update Adapters` for updating the Adapter in the Agent.

**Protip:** For every new version of Adapters and updates in the Native resources functions, the above procedure is needed to be followed.
The .dll, .pdb and other Dependant files needs to be uploaded only in a ZIP FOLDER. Also make sure that all the dependant files are added up in the folder.
{: .notice--info}

