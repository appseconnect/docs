---
title: "Viewing, Installing & Re-Installing processflow Packages"
toc: true
tag: developers
category: "Processflow"
menus: 
   packagesoverview:
        title: "Package Installation & Reinstallation"
        weight: 2
        icon: fa fa-file-word-o
        identifier: viewingpackageinstallation
---

Once you are shared with packages from other organisation, you need to install the packages before working with the Processflows inside it.
This document will enable you to view and install incoming packages from other organisation and execute the processflow inside it.

## Prerequisites

- You need to have valid credential to the portal.
- You need to have packages shared with you from other organisation. For more details on how to share packages, [click here](/processflow/processflow-packaging/).
- Installation is mandatory to use packaged Processflows.
- You will have TWO ways to install/Reinstall your packages - **[Install from Actions column](/processflow/processflow-package-installation/#install-from-actions-column)** & **[Install from View Packages](/processflow/processflow-package-installation/#install-from-view-packages)**. For more details, [Click Here](/processflow/processflow-package-installation/#installing-packages)
- All the installed/reinstalled packages, its related Processflows will be available in the [Install processflow](/processflow/processflow-listing-page/#installed-process-flows-folder) folder. A sub folder will be created same as that of the Package Name.

## Viewing Shared Packages

1) Navigate to the processflow module, to view the [processflow listing](/processflow/processflow-listing-page/) page. 

2) Expand the package library node to view the folder **Shared with me**. You will able to view the list of of all the packages shared with your organisation.

![Viewsharedpack1](\staticfiles\processflow\media\viewsharedpack1.PNG)

3)The following details will be availble in its listing page:
- **Name** - The package name will be displayed.
- **Package Description** - The package description will be displayed.
- **Apps** - The apps used in the Processflows inside the packages will be listed in a corousel form. You can slide the corousel to view all the application used.
- **Actions** - You can choose and perform the following functions when clicked on the ellipses. The following options will be available in its contextual menu: **View** , **Install** and **Delete**

![viewsharedpack2](\staticfiles\processflow\media\viewsharedpack2.PNG)

4) Click on the Ellipses (three Horizontal dots) beside the package you need to view and click on the **VIEW** option in the contextual menu.

5) The VIEW window will capture the following details of the incoming package.
- **Package Name:** The Package name will be displayed
- **Version:** The versioning of the package provided while creating the package will be displayed.
- **Created By:** The organisation name where the processflow is created will be displayed
- **Description:** By default, the description tab will be selected, and its related details will be displayed.
- **Documentation:** Clicking on the `documentation` tab, you will be able to view the related documentation provided while creating the package.
- **Processflows:** Clickin on the processflow tab, you will be listed with all the processflow bundled with the package.
- **Install** You will be having an INSTALL button in the top-right corner of the window for installing the package.

![viewsharedpack4](\staticfiles\processflow\media\viewsharedpack4.PNG)

6) Clicking on the **DESCRIPTION** tab, you can view the following details:
- The brief description provided while the creating the package will be displayed in the description box
- **Last Modified** - You will be able to view the last modified date and time, worked on the remote organisation.
- **Apps Used** - Applications used inside the Processflows in the package, will be listed.

![viewsharedpack5](\staticfiles\processflow\media\viewsharedpack4.PNG)

7) Clicking on the Documentation tab, you can view the documentation. The box will display the required documentation that was provide while creating the package.

![viewsharedpack6](\staticfiles\processflow\media\viewsharedpack6.PNG)

8) Clicking on the processflow tab, you will be able to view the following details of the Processflows bundled with the package.
- **Name** - You can view the names of the processflow bundled within the package.
- **Description** - The description of the Processflows.
- **Created On** - The creation date of the Processflows will be listed beside the processflow description.

![viewsharedpack7](\staticfiles\processflow\media\viewsharedpack7.PNG)

## Installing Packages

1) Navigate to the processflow module, to view the [processflow listing](/processflow/processflow-listing-page/) page. 

2) Expand the **Package Library** node to view the folder **Shared With Me**. The listing page of the `Shared with me` folder will be displayed along with the list of the packages that are shared with you from an another organisation.

3) There are TWO ways to install the packages. 

### Install from Actions column:
You can install the packages directly by clicking on the install button available in the contextual menu of actions column. You can view a **loader** that will denote you with the installation progress.

![packageinstall2](\staticfiles\processflow\media\packageinstall2.PNG)

### Install from View Packages:
On clicking the `VIEW` button in the contextual menu of the actions column, it will navigate you to the `VIEW` window.
Click on the **Install** button to install the package shared with you.

![packageinstall3](\staticfiles\processflow\media\packageinstall3.PNG)

4) The installation loader begins on clicking the Install Button. 

![packageinstall4](\staticfiles\processflow\media\packageinstall4.PNG)

5) The installed packages will be placed as a Sub-Folder, within the default folder named **Installed processflow** under the processflow node in the [processflow Listing page](/processflow/processflow-listing-page/).

6) By default the sub folder will named as per the package name. By clicking on the sub folder, you view the list of all the Processflows that was bundled with the package.

![packageinstall5](\staticfiles\processflow\media\packageinstall5.PNG)

7) Once installed, you can successfully [deploy and execute](/processflow/deploying-and-executing-processfloww/) the shared Processflows on your organisation. 

Following the above process, you can successfully install the shared packages and execute the shared Processflows within those packages.

**Note:**
- While installing the package for the first time, if a **different package with same name already exists**, you will get to rename the package before the first installation.

## Reinstalling Packages

This section will guide you with the reinstallation of the packages on your organisation. The [Prerequisites](/processflow/processflow-package-installation/#prerequisites) for the reinstallation process, is same as that of installing a package for the first time.

1) To reinstall the package, navigate to My Packages and choose the folder for which the package needs to be reinstalled.
- Packages created on your organisation will be available on **My Packages** folder.
- Packages that are shared with you will be available on **Shared With Me** folder.

2) The process to reinstall Packages remains same as that of installing packages. You can reinstall your Packages in two ways as mentioned while [installing Packages](/processflow/processflow-package-installation/#installing-packages) for the first time.

- [Install from Actions Column](/processflow/processflow-package-installation/#install-from-actions-column)
- [Install from View Packages](/processflow/processflow-package-installation/#install-from-view-packages)
	
3) Click on the install button against the package that you need to reinstall.

![reinstall3](\staticfiles\processflow\media\reinstall3.PNG)

4) You will be getting a confirmation message informing **Seems like you have already installed "Your Package Name". Are you sure you want to reinstall "Your Package Name".**
- Yes: Your package will be reinstalled
- No: The reinstallation process will be declined.

![reinstall4](\staticfiles\processflow\media\reinstall4.PNG)

5) On accepting the confirmation option, your package will be reinstalled. You can view the loaded screen of the installation process. 
As reinstalling will create the sub-folder having the same name as that of the package, which is already available in prior.
By default, you will be provided with the "Package Name (n)" where **n** stands for sequence number of the installation of the package is reinstalled. However you can anytime [rename](/processflow/processflow-package-reinstallation/#renaming-the-installed-packages) the `Third Level Sub-Folders` inside **Installed Processflows** as per your choice.

![reinstall2](\staticfiles\processflow\media\reinstall2.PNG)

Following the above process you can successfully Reinstall your packages.

## Viewing Installed Packages from Installed processflow Folder

1) Navigate to Designer > processflow > [Package Library](/processflow/processflow-packaging-overview/) to view the details of the packages available on your organisation.

2) On installing, you will be created with a **Sub Folder with the same name as that of the package** inside **[Installed Processflows](/processflow/processflow-listing-page/#installed-process-flows-folder)** folder. 
Clicking on the Sub folder will provide you with the details of the number of Processflows available on that sub-folder.

![reinstall1](\staticfiles\processflow\media\reinstall1.PNG)

3) Expanding the created Sub folder, you can view multiple **sub-folders on a level below**. This folder will contain the Processflows that were packaged within.

![reinstall5](\staticfiles\processflow\media\reinstall5.PNG)

4) The multiple sub folders are the reinstalled packages that are available on that level of the tree. 

Following the above steps you can successfully view Installed Packages from the Installed processflow folder.

## Renaming the Installed Package Folders:

You will be able to rename you installed packages any time. This section will enable you to Rename the installed packages.

1) All the Installed packages are listed within the Default Folder [Installed Processflows](/processflow/processflow-listing-page/#installed-process-flows-folder). Only Sub-folders in the third level `(Installed Processflows > Package Name (Parent Folder) > Package Name (Subfolders having the package Processflows))` will be allowed to RENAME.

2) Clicking on the Ellipses of the third level subfolders, you will be available with RENAME option. The Rename box appears.

![Reinstall6](\staticfiles\processflow\media\reinstall6.png)

3) Provide the name and click on the SAVE button.

![reinstall7](\staticfiles\processflow\media\reinstall7.png)

4) On saving, you can view the changes inside the [Installed Processflows](/processflow/processflow-listing-page/#installed-process-flows-folder) tree.

![reinstall8](\staticfiles\processflow\media\reinstall8.png)

Following the above process you can successfully RENAME the installed package folders

**Note:**
- Installation is mandatory to use packaged Processflows.
- All the node configurations and mapping done in processflow will be shared when sharing the package to other organisation. 
- Modifications made in the Processflows in source organisation _after the sharing_ , the changes will not reflect once the package is shared to an another organisation.
- As processflow doesn't stores any credentials, you will not have to worry about credentials vulnerability.
- Processflows that are shared, if deleted from the folder **Installed processflow**, will move to the TRASH folder. However, you can anytime restore those Processflows from TRASH. The Processflows will be restored in the **processflow** folder.
- You cannot rename with a same name in the same tree level.
- You cannot delete any installed package folders.
