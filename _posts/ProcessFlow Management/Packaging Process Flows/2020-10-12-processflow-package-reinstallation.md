---
title: "Reinstalling Packages"
toc: true
tag: developers
category: "Processflow"
menus: 
   packagesoverview:
        title: "Reinstalling Shared Packages"
        weight: 2
        icon: fa fa-file-word-o
        identifier: packagereinstallation
---
Compressed files are needed to be unzipped before working on them. In similar process, Process Flow Packages are needed to be installed that are available on your organisation or shared to you. 
However, in Process Flow Package will also let you reinstall your installed package multiple times. This document will let you install an installed package multiple times within your organisation.

## Prerequisites

The Prerequisites for Re-installing a package is same as that of installing packages for the first time. [Click Here](/processflow/processflow-package-installation/#prerequisites) to know more about the prerequisites.

## Reinstalling Packages

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
By default, you will be provided with the "Package Name (n)" where **n** stands for sequence number of the installation of the package is reinstalled. However you can anytime [rename](/processflow/processflow-package-reinstallation/#renaming-the-installed-packages) the `Third Level Sub-Folders` inside **Installed Process Flows** as per your choice.

![reinstall2](\staticfiles\processflow\media\reinstall2.PNG)

## Viewing Installed Packages from Installed Process Flow Folder

1) Navigate to Designer > Process Flow > [Package Library](/processflow/processflow-packaging-overview/) to view the details of the packages available on your organisation.

2) On installing, you will be created with a **Sub Folder with the same name as that of the package** inside **[Installed Process Flows](/processflow/processflow-listing-page/#installed-process-flows-folder)** folder. 
Clicking on the Sub folder will provide you with the details of the number of Process Flows available on that sub-folder.

![reinstall1](\staticfiles\processflow\media\reinstall1.PNG)

3) Expanding the created Sub folder, you can view multiple **sub-folders on a level below**. This folder will contain the Process Flows that were packaged within.

![reinstall5](\staticfiles\processflow\media\reinstall5.PNG)

4) The multiple sub folders are the reinstalled packages that are available on that level of the tree. 

## Renaming the Installed Packages:

You will be able to rename you installed packages any time. This section will enable you to Rename the installed packages.

1) All the Installed packages are listed within the Default Folder [Installed Process Flows](/processflow/processflow-listing-page/#installed-process-flows-folder). Only Sub-folders in the third level `(Installed Process Flows > Package Name (Parent Folder) > Package Name (Subfolders having the package Process Flows))` will be allowed to RENAME.

2) Clicking on the Ellipses of the third level subfolders, you will be available with RENAME option. The Rename box appears.

![Reinstall6](\staticfiles\processflow\media\reinstall6.png)

3) Provide the name and click on the SAVE button.

![reinstall7](\staticfiles\processflow\media\reinstall7.png)

4) On saving, you can view the changes inside the [Installed Process Flows](/processflow/processflow-listing-page/#installed-process-flows-folder) tree.

![reinstall8](\staticfiles\processflow\media\reinstall8.png)

**Note:** 
- You cannot rename with a same name in the same tree level.
- You cannot delete any installed package folders.
