---
title: "Package Sharing"
toc: true
tag: developers
category: "Processflow"
menus: 
   packagesoverview:
        title: "Package Sharing"
        weight: 3
        icon: fa fa-file-word-o
        identifier: packagesharing
---

Packaging of processflows have enabled the users to zip multiple processflows. The main goal to create packages was to share with other organisations. As we encourage the concept of Citizen Integrators, so package sharing is an idea concept of sharing process with one organisation to another.
Sharing packages will not only save time, but will also reduce the efforts of creating, designing and mapping processflows that is already created in some other organisation.
This document will enable you to initate sharing packages from one organisation to another.

## Prerequisites

- You need to have valid credential to the portal.
- You need to have the processflows created. Steps to create new processflow is given [here](/processflow/creating-processflow/)
- You should have the packages created on your organisation. Steps to create new packages is given [here](/processflow/processflow-packaging/#creating-packages).
- The packages created will be listed on the [package listing](/processflow/processflow-packaging/#listing-packages) page.
- You cannot reshare a shared package to an another organisation.
- You can share your created packages to multiple organisations at one go.
- Both the users of the source organisation and recipient organisation, will recieve the emails on its successful sharing.

## Share Packages to Organisations

1) Navigate to the processflow module, to view the [processflow listing](/processflow/processflow-listing-page/) page. 

2) Expand the **Package Library** node and click on **My Packages**. The [package listing](/processflow/processflow-packaging/#listing-packages) page opens.

![packageshare1](\staticfiles\processflow\media\packageshare1.PNG)  

3) Click on the **Package** drop-down on the package listing page. You will be able to view two options: **SHARE** and **NEW**. Click on the Share button.

![packageshare2](\staticfiles\processflow\media\packageshare2.PNG)  

4) The Package Sharing windows opens. The package sharing window consists of the two sections: **Choose Package** and **Select Organisation**.

![packageshare3](\staticfiles\processflow\media\packageshare3.PNG)  

### Choose Package

This section will enable you to choose the packages that needs to be shared to an other organisation.

1) The Choose package window is divided mainly into two parts: Left Pane and Right Pane. The `Left Pane` will list all the folders under **Package Library**.
The `Right Pane` will have two sections:
- **Folder Path** - You will be provided with the Package Library node. On expanding, you can view the My Packages folder from which you can select the required packages.
- **Package List** - You will listed with all the packages available on your organisation. At a time, you will be able to view 3 packages. However, can navigate to the other pages by using the pagination below.
- **Selected packages** - This will list all the packages, selected for sharing.

2) On the "Choose Package" step, you will be listed with all the packages that are created on your organisation, under the **Package List** section. The following details will be present in the package list section.

- **Package Name** : The package name will be displayed.
- **Package Description** : The package description will be displayed.
- **Apps** : The apps used in the processflows inside the packages will be listed in a corousel form. You can slide the corousel to view all the application used.
- **Filter Icon** : This will enable you to search packages based on the name as a keyword.

Beside the package name, you will have checkboxes that will allow you to select the packages for sharing.

3) Enabling the checkboxes, the packages selected will be displayed in the **Selected Packages** section on your right side. You can also remove the packages from Selected Packages, if you have chosen mistakenly, by unchecking the checkbox in the list of packages section.
Once the packages are selected, click on the **Continue** button. 
![packageshare5](\staticfiles\processflow\media\packageshare5.PNG)

### Select Organisations

This section of the window will allow you to select the organisation to which your package will be shared. You can view the section, once you are done with the selection of the packages.

1) You will now be navigated to the **Select Organisation** step, where you will be able to search and select the individual organisation with whom you want to share the package.

![packageshare6](\staticfiles\processflow\media\packageshare6.PNG)

2) The search box in the **Select Organisation from list** will enable you to look for the required organisation. You can type the name of the organisation or the associated Email Address. Based on the input the suggestion will be provided in the list.

![packageshare7](\staticfiles\processflow\media\packageshare7.PNG)

3) You need to click on the organisation name to select. On its selection, you will be able to view the selected organisation in the **Selected Organisation to share** section.
You can remove the selected organisation, by clicking on the **CLOSE** `X` button beside the organisation in the  **Selected Organisation to share** section. Once the organisation is selected, click on the share button. You will be getting a confirmation message and confirmation mail regarding the successful sharing.
![packageshare9](\staticfiles\processflow\media\packageshare9.PNG)

4) You can confirm the sharing by navigating to **My Packages** listing page under PACKAGE LIBRARY node. You will be able to view the **Shared icon** beside the packages you have shared.

![packageshare11](\staticfiles\processflow\media\packageshare11.PNG)

Following the above process, you can successfully share packages from your organisation to multiple other organisation.

**Note:**
- You can select multiple organisation for sharing.
- You can share your created packages on your organisation for creating a COPY of the processflows for future use.
- As multiple organisation may have same name, therefore, you can provide multiple criteria's in the search box separated by providing **SPACE** between the two criteria. 
- Each search criteria will be taken as individual TAGS, and can be removed by the user if needed.

