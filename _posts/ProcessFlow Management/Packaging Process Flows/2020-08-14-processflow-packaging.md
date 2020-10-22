---
title: "Processflow Packaging"
toc: true
tag: developers
category: "Processflow"
menus: 
   packagesoverview:
        title: "Processflow Packaging"
        weight: 1
        icon: fa fa-file-word-o
        identifier: packageprocessflow
---

Processflow Packaging is a concept of zipping multiple ProcessFlows or Processflow folders from one organisation to another. 
Processflow being the advanced version of workflows, now enables you to select ProcessFlows and develop a package out of it, which can be shared and have the option to install
in a different organisation. This document will help you to create a new package.

## Prerequisites

- You need to have valid credential to the portal.
- You need to have the Processflow created. Steps to create new Processflow is given [here](/processflow/creating-processflow/)
- You cannot create package out of a [Shared package](/processflow/processflow-package-sharing/), for the ProcessFlows that are [installed](/processflow/processflow-package-installation/) on your organisation.
- You can select your ProcessFlows only from the [Processflow folder](/processflow/processflow-listing-page/#process-flow-folder) and its sub-folder.
- You can add as many ProcessFlows for creating a package. There is no specified limit when adding ProcessFlows, while creating package.

## Creating Packages

1) Expand the Package Library node to view **My Packages**. Clicking on My Packages, you will be able to view the following screen. Click on the **Click Here** button to create a new package. 

![package2](\staticfiles\processflow\media\package2.PNG)

2) If you already have packages created, you can create new packages by clicking on the **CREATE** button as shown below. You can also view the [**SHARE**](/processflow/processflow-package-sharing/) button beside `CREATE` that will enable you to share the your created packages.
The filter button, will allow you to search and filter your existing packages based on the input provided in search box.

![package](\staticfiles\processflow\media\package.PNG)

3) The package creation window appears. The package creation window comprises of three sections.

- **Choose ProcessFlows** - Here, you are required to select the ProcessFlows from the list below. The selected Processflow will be displayed in the upper table as you select.
- **Configuration** - This page will let to provide details to the package like **Package Name**, **Package Description**, **Version**, **Package Documentation**.
- **Preview** - This will preview you all the details you have provided in the earlier steps.

![package3](\staticfiles\processflow\media\package3.PNG)

### Choose ProcessFlows 

This section will allow you to choose the ProcessFlows from the [Processflow folder](/processflow/processflow-listing-page/#process-flow-folder) or from its sub-folder.

1) In the Choose ProcessFlows section, you will be able to view the folder path, that will enable you to select Processflow from your Processflow folders.
By default, the [Home Folder](/processflow/processflow-listing-page/#usability-for-the-home-folder) will be selected in the **Folder Path** and all the Processflow under **HOME** folder will be listed in the below table for the selection process.

2) The **Processflow** table below, will enable you to select the ProcessFlows for packaging. The following details will be displayed in the table.

- **Name** - Name of the ProcessFlows
- **Description** - Will display you the Processflow description.
- **Version** - Will display the Processflow version.
- **Image** -  This will let you view all the logos of the application implemented inside the Processflow. Processflow Exceeding 4 Applications inside will have a carousel slider in the image column to let you view all the applications in use.

Select the ProcessFlows by enabling the checkboxes beside the Processflow names. You will be able to view the **Selected ProcessFlows** table above, along with the same details. 

![package4](\staticfiles\processflow\media\package4.PNG)

3) Click on the **Continue** button. The **Configure** section appears on the package creation window.

### Configurations

This section will allow you to configure the details of the packages required.

1) You can now view the **Configuration** section. You need to provide the following details. The following details will be available in this section.

![package5](\staticfiles\processflow\media\package5.PNG)

- **Package Name** - You need to enter the name of the package. The name should be less than 100 characters.
- **Package Description** - You will be provided with a platform to enter a description to the package. There is no limitation to the description based on the number of characters.
- **Version** - You can provide a version to the package. The version should be greater than or equal to 3 decimal places. You will be provided with an example, beneath the field.
- **Package Documentation** - This is a markdown editor and you need to add the related documentation or links for reference. You can also preview the provided document or link by clicking on its **preview** button. You need to use `Markdown Syntaxes` for documenting.

![packagedocpreview](\staticfiles\processflow\media\packagedocpreview.PNG)

2) Click on the Continue button after providing all the manadatory details of the package 

### Preview
This section will display all the configuration provided in the earlier steps as a final preview.

1) You will be navigated to the **Preview** section. You will be able to view all the related details you provided in the previous steps.

![package6](\staticfiles\processflow\media\package6.PNG)

2) Click on the **Create** button to the create the package.

Following the above process, you can successfully create a Processflow package.

**Note: Any changes made to the original Processflow, the modifications will not reflect in the packaged versions. You need to create a new package for packaging the modified ProcessFlows.**

## Listing Packages

Once you have created your Processflow Package, you can successfully view the package lists in the Processflow listing page of your organisation. As a prerequisite, you need to have your packages created on your organisation.

1) Navigate to the Processflow module. The [Processflow listing](/processflow/processflow-listing-page/) page appears.

2) Expand the package library node. You will be able to view the folder **My Packages**. 

3) Click on the My packages folder. You will be able to view the "My Packages" listing page. The following information will be displayed in the listing page.

- **Package Name** - You will be able to view the names of the packages listed in the "Package Name" column.
- **Package Description** - You will be able to view the package description provided while creating the package.
- **Apps** - You can view all the applications used in the ProcessFlows containing in the package in a corousel slider.
- **Actions** - Clicking on the Ellipses (Three horizontal dots) on the action column, you can view the following two options: **Edit** & **View**.

![package7](\staticfiles\processflow\media\package7.PNG)

Following the above process you can successfully view the list of the packages.

## Viewing Packages
Now you have done creating your packages, and you can view the packages listed under `My Packages` Section.

To View a specific Package,  click View option available on the Contextual menu of the Package.
![package-edit-view](\staticfiles\processflow\media\package-edit-view.png)

The following pop up appears where you can view the package details along with 
three specific tabs namely - Description, Documentation, Processflow.
![packageview_package_final](\staticfiles\processflow\media\packageview_package_final.png)

The `View Package` window offers you with the following package information  

**Package Name** - Package name information was provided during Package creation.     
**Version** -  Version information was provided during Package creation.    
**Created by** - This indicates the Organization name of the user who created the Package.     
**Install** - This button enables to install the package. You can install the package from `My Package -> View Package-> Install` option & Also 
from `Shared with Me -> Package-> Install` section. [View here](/processflow/processflow-package-installation/) 
for installation details  

The tab details are mentioned below:    
**Description Tab** - This section provides you the package description along with the view of application
used in the packages. Here you can also view the last modified package date and time.       
**Documentation Tab**- This section provides you the documentation of the ProcessFlows.        
**Processflow Tab**- This section enlist the list of Processflow included in the package.      

In the Processflow Tab  `Search` option is provided where you can search the required 
processflows by providing the processflow names.  

## Editing Packages

This section enbles you to edit package information as per your business requirement which you have 
created. You can edit any Package available in Package Library section.

1. For editing packages go to ProcessFlow Menu -> Package Library section-> My Packages.
2. Now to edit a  Package, click Edit option of the Contextual menu of that Package.
![package-edit-view](\staticfiles\processflow\media\package-edit-view.png)    
3. This will open the `Edit Package` window.  
![package-edit](\staticfiles\processflow\media\package-edit.png)    
4. In the `Edit Package Details` window, here you will be able to edit the following fields:
(a) Package Name - Here you can edit the package name
(b) Package Description - Here you can edit the Package Description
(c) Package Documentation - Here you can edit the package documentation and all the associated functionality
   of the documentation.

After doing the changes, the User will be able to save the changes by clicking on the Save button.
If the user clicks on the Cancel button, the changes will not be saved.  

**Note: (a) You will be able to view the Package Documentation within the Editor, during Edit mode.  
(b) Preview option is available in the editor to view the changes.  
(c) In Edit mode, you will not be able to view or edit the Processflow(s) present in a Package**  





