---
title: "Viewing and Installing Shared Packages"
toc: true
tag: developers
category: "Processflow"
menus: 
   packagesoverview:
        title: "Shared Package Installation"
        weight: 2
        icon: fa fa-file-word-o
        identifier: viewingpackageinstallation
---

Once you are shared with packages from other organisation, you need to install the packages before working with the process flows inside it.
This document will enable you to view and install incoming packages from other organisation and execute the process flow inside it.

## Prerequisites

- You need to have valid credential to the portal.
- You need to have packages shared with you from other organisation. For more details on how to share packages, [click here](/processflow/processflow-packaging/).

## Viewing Shared Packages

1) Navigate to the Process Flow module, to view the [process flow listing](/processflow/processflow-listing-page/) page. 

2) Expand the package library node to view the folder **Shared with me**. You will able to view the list of of all the packages shared with your organisation.

![Viewsharedpack1](\staticfiles\processflow\media\viewsharedpack1.PNG)

3)The following details will be availble in its listing page:
- **Name** - The package name will be displayed.
- **Package Description** - The package description will be displayed.
- **Apps** - The apps used in the process flows inside the packages will be listed in a corousel form. You can slide the corousel to view all the application used.
- **Actions** - You can choose and perform the following functions when clicked on the ellipses. The following options will be available in its contextual menu: **View** , **Install** and **Delete**

![viewsharedpack2](\staticfiles\processflow\media\viewsharedpack2.PNG)

4) Click on the Ellipses (three Horizontal dots) beside the package you need to view and click on the **VIEW** option in the contextual menu.

5) The VIEW window will capture the following details of the incoming package.
- **Package Name:** The Package name will be displayed
- **Version:** The versioning of the package provided while creating the package will be displayed.
- **Created By:** The organisation name where the process flow is created will be displayed
- **Description:** By default, the description tab will be selected, and its related details will be displayed.
- **Documentation:** Clicking on the `documentation` tab, you will be able to view the related documentation provided while creating the package.
- **Process Flows:** Clickin on the Process Flow tab, you will be listed with all the process flow bundled with the package.
- **Install** You will be having an INSTALL button in the top-right corner of the window for installing the package.

![viewsharedpack4](\staticfiles\processflow\media\viewsharedpack4.PNG)

6) Clicking on the **DESCRIPTION** tab, you can view the following details:
- The brief description provided while the creating the package will be displayed in the description box
- **Last Modified** - You will be able to view the last modified date and time, worked on the remote organisation.
- **Apps Used** - Applications used inside the process flows in the package, will be listed. **(Image needs to change)**

![viewsharedpack5](\staticfiles\processflow\media\viewsharedpack4.PNG)

7) Clicking on the Documentation tab, you can view the documentation. The box will display the required documentation that was provide while creating the package.

![viewsharedpack6](\staticfiles\processflow\media\viewsharedpack6.PNG)

8) Clicking on the Process Flow tab, you will be able to view the following details of the Process Flows bundled with the package.
- **Name** - You can view the names of the process flow bundled within the package.
- **Description** - The description of the Process Flows.
- **Created On** - The creation date of the Process flows will be listed beside the process flow description.

![viewsharedpack7](\staticfiles\processflow\media\viewsharedpack7.PNG)

## Installing Packages

1) Navigate to the Process Flow module, to view the [process flow listing](/processflow/processflow-listing-page/) page. 

2) Expand the **Package Library** node to view the folder **Shared With Me**. The listing page of the `Shared with me` folder will be displayed along with the list of the packages that are shared with you from an another organisation.

3) There are TWO ways to install the packages. 

- **Install from Actions column:** 
You can install the packages directly by clicking on the install button available in the contextual menu of actions column. You can view a **loader** that will denote you with the installation progress.

![packageinstall2](\staticfiles\processflow\media\packageinstall2.PNG)

- **Install from View Packages:**
On clicking the `VIEW` button in the contextual menu of the actions column, it will navigate you to the `VIEW` window.
Click on the **Install** button to install the package shared with you.

![packageinstall3](\staticfiles\processflow\media\packageinstall3.PNG)

4) The installation loader begins on clicking the Install Button. 

![packageinstall4](\staticfiles\processflow\media\packageinstall4.PNG)

5) The installed packages will be placed as a Sub-Folder, within the default folder named **Installed Process Flow** under the Process Flow node in the [Process Flow Listing page](/processflow/processflow-listing-page/).

6) By default the sub folder will named as per the package name. By clicking on the sub folder, you view the list of all the process flows that was bundled with the package.

![packageinstall5](\staticfiles\processflow\media\packageinstall5.PNG)

7) Once installed, you can successfully [deploy and execute](/processflow/deploying-and-executing-processfloww/) the shared process flows on your organisation. 

Following the above process, you can successfully install the shared packages and execute the shared process flows within those packages.

**Note:**
- Installation is mandatory to use packaged Process Flows.
- You cannot rename an installed folder after the installing the package. You will only get the `rename` option if the package that is being installed is having the `same name` under the folder `Installed Process Flows`.
- All the node configurations and mapping done in process flow will be shared when sharing the package to other organisation. 
- Modifications made in the process flows in source organisation _after the sharing_ , the changes will not reflect once the package is shared to an another organisation.
- As Process flow doesn't stores any credentials, you will not have to worry about credentials vulnerability.
- Process Flows that are shared, if deleted from the folder **Installed Process Flow**, will move to the TRASH folder. However, you can anytime restore those process flows from TRASH. The process flows will be restored in the **Process Flow** folder.
- You cannot delete the Installed folders