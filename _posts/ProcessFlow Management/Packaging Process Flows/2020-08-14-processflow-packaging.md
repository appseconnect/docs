---
title: "Process Flow Packaging"
toc: true
tag: developers
category: "Processflow"
menus: 
   quickstartprocessflow:
        title: "Process Flow Packaging"
        weight: 6
        icon: fa fa-file-word-o
        identifier: packageprocessflow
---

Process Flow Packaging is a concept of zipping multiple process flows or process Flow folders from one organisation to another. 
Process Flow being the advanced version of workflows, now enables you to select process flows and develop a package out of it, which can be shared and have the option to install
in a different organisation. This document will help you to create a new package.

## Prerequisites

- You need to have valid credential to the portal.
- You need to have the Process Flow created. Steps to create new process flow is given [here](/processflow/creating-processflow/)

## Creating Process flow Packages:

1) Navigate to the Process Flow module. The [Process Flow listing](/processflow/processflow-listing-page/) page appears.

![package1](\staticfiles\processflow\media\package1.PNG)

2) Expand the Package Library node to view **My Packages**. Clicking on My Packages, you will be able to view the following screen. 

![package2](\staticfiles\processflow\media\package2.PNG)

3) Click on the **Click Here** button to create a new package. The package creation window appears. The package creation window comprises of three sections.

- **Choose Process Flows** - Here, you will be asked to select the process flow from the list below. The selected process flow will be displayed in the upper table as you select.
- **Configuration** - This page will let to provide details to the package like **Package Name**, **Package Description**, **Version**, **Package Documentation**.
- **preview** - This will preview you all the details you have provided in the earlier steps.

![package3](\staticfiles\processflow\media\package3.PNG)

4) In the Choose Process Flows section, you will be able to view the folder path, that will enable you to select process flow from your process flow folders.
By default, the [Home Folder](/processflow/processflow-listing-page/#usability-for-the-home-folder) will be selected in the **Folder Path** and all the process flow under **HOME** folder will be listed in the below table for the selection process.

5) The **Process Flow** table below, will enable you to select the process flows for packaging. The following details will be displayed in the table.

- **Name** - Name of the Process Flows
- **Description** - Will display you the process flow description.
- **Version** - Will display the process flow version.
- **Image** -  This will let you view all the logos of the application implemented inside the process flow. Process Flow Exceeding 4 Applications inside will have a carousel slider in the image column to let you view all the applications in use.

Select the process flows by enabling the checkboxes beside the process flow names. You will be able to view the **Selected Process Flows** table above, along with the same details. 

![package4](\staticfiles\processflow\media\package4.PNG)

6) Click on the **Continue** button. You can now view the **Configuration** section. You need to provide the following details. The following details will be available in this section.

- **Package Name** - You need to enter the name of the package. The name should be less than 100 characters.
- **Package Description** - You will be provided with a platform to enter a description to the package. There is no limitation to the description based on the number of characters.
- **Version** - You can provide a version to the package. The version should be greater than or equal to 3 decimal places. You will be provided with an example, beneath the field.
- **Package Documentation** - This is a markdown editor and you need to add the related documentation or links for reference. You can also preview the provided document or link by clicking on the preview button. You need to use `Markdown Syntaxes` for documenting.

![package5](\staticfiles\processflow\media\package5.PNG)

7) Click on the Continue button. You will be navigated to the **Preview** section. You will be able to view all the related details you provided in the previous steps.

![package6](\staticfiles\processflow\media\package6.PNG)

8) Click on the **Create** button to the create the package.

Following the above process, you can successfully create a process flow package.

## Listing Packages:

Once you have created your process flow Package, you can successfully view the package lists in the process flow listing page of your organisation. As a prerequisite, you need to have your packages created on your organisation.

1) Navigate to the Process Flow module. The [Process Flow listing](/processflow/processflow-listing-page/) page appears.

2) Expand the package library node. You will be able to view the folder **My Packages**. 

3) Click on the My packages folder. You will be able to view the "My Packages" listing page. The following information will be displayed in the listing page.

- **Package Name** - You will be able to view the names of the packages listed in the "Package Name" column.
- **Package Description** - You will be able to view the package description provided while creating the package.
- **Apps** - You can view all the applications used in the process flows containing in the package in a corousel slider.
- **Actions** - Clicking on the Ellipses (Three horizontal dots) on the action column, you can view the following two options: **Edit** & **View**.

![package7](\staticfiles\processflow\media\package7.PNG)

Following the above process you can successfully view the list of the packages.

## Viewing Packages:

## Editing Packages: