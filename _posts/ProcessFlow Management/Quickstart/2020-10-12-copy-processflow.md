---
title: "Copy Processflow"
toc: true
tag: developers
category: "Processflow"
menus: 
    quickstartprocessflow:
        title: "Copy Processflow"
        weight: 8
        icon: fa fa-file-word-o
        identifier: copyprocessflow
---

Processflows in APPSeCONNECT is a very robust feature that helps you integrate your applications with ease. It always beneficial to have COPY of an essential work such that it can be used later on.
The entire technology world now relies on having a COPY or a Backup of your essential items. 

Processflows, processes your entire flow and its as essential as your business. Now with ProcessFlows you can anytime create a Copy of your designed process such that any efforts provided in designing a processflow, is not wasted.
This document will let you help in creating a copy of your designed Processflows.

## Prerequisites

- You need to have the ProcessFlows created. Steps are create ProcessFlow are [Given Here](/processflow/creating-processflow/)
- You will be provided with **rename** option before copying to the destination folder in case a processflow with same name is available already.
- All the mappings and configurations made in the original processflow, will be copied while copying the processflow.
- All the copied versions will be treated as a New Designed processflow, hence the user needs to [freshly deploy](/processflow/deploying-and-executing-processfloww/) the copied processflow, when required.
- Processflows that are copied from the **[ProcessFlow Folder](/processflow/processflow-listing-page/#process-flow-folder) and its subfolders** can be copied only within the same area, that is: **ProcessFlow Folder and its Sub-Folder**.
- Processflows that are copied from the **[Installed ProcessFlow Folder](/processflow/processflow-listing-page/#installed-process-flows-folder) and its subfolders** can be copied only within the same area, that is: **Installed ProcessFlow Folder and its Sub-Folder**.
- In-case of same name, you will have the option to rename your copied processflow before copying starts. If not renamed, your copied processflow will be named as `processflow name (n)`. Where `n` stands for the sequence of the same name. **For Ex: Business Partner Add (1)**.

## Copying Processflows

This section of the document will help you to copy and store a backup of your designed processflows. The steps for the same are provided below:

1) Navigate to **DESIGNER > ProcessFlows** in the Portal.

![copypf1](\staticfiles\processflow\media\copypf1.PNG)

2) In the listing page that appears, navigate to the folder (either ProcessFlow Folder or Installed ProcessFlow Folder) where your designed flow is available.

3) Copying a ProcessFlow is divided into types based on the Folder Level, as given flow.

- ProcessFlows that copied from [ProcessFlow folder or its sub folder](/processflow/processflow-listing-page/#process-flow-folder) will be copied only within that same area: **processflow Folder and its Sub-Folder**.
- ProcessFlows that copied from [Installed ProcessFlow folder or its sub folders](/processflow/processflow-listing-page/#installed-process-flows-folder) will be copied only within that same area: **Installed processflow Folder and its Sub-Folders**.

4) On the listing page of your chosen folder, click on the `Context Menu` on the **ACTIONS tab** of your ProcessFlow. Select the **COPY** option.

![copypf2](\staticfiles\processflow\media\copypf2.PNG)

5) The Folder Path window opens upon clicking the COPY button. The window alters as per the Folder.

### COPY from ProcessFlow Folder:

5.1) You will be getting the following Folder Path window, if you are copying your processflow from the [PROCESSFLOW FOLDER](/processflow/processflow-listing-page/#process-flow-folder). You can expand the subfolders to view its Child Folders (all under ProcessFlow folder) if any. To know more about the sub and its child folders, [Click Here](/processflow/processflow-listing-page/#steps-to-create-child-folders-in-the-listing-page).

![copypf3](\staticfiles\processflow\media\copypf3.png)

5.2) The Folder path for this case will display only the **Sub folders** available under the **ProcessFlow Folder**. Select the subfolder, where you want your processflow to be copied. Click on the DONE button after the selection is over.


### COPY from Installed ProcessFlow Folder:

5.3) You will be getting the following Folder Path window, if you are copying your processflow from the [Installed ProcessFlow FOLDER](/processflow/processflow-listing-page/#process-flow-folder). You can expand the Package folders to view its Child Folders (all under Installed ProcessFlow folder) if any.

5.4) The Folder path for this case will display only the **Sub folders** available under the **Installed ProcessFlow Folder**. Select the subfolder, where you want your processflow to be copied. Once you have selected your desired folder, Click on the Done button.

![copypf8](\staticfiles\processflow\media\copypf8.png)

6) If in-case your chosen folder has a processflow with same name, you will get an option to **rename** the processflow that is to be copied. On renaming, the copying process starts automatically.
If not renamed, your copied ProcessFlow will be named as `processflow name (n)`. Where `n` stands for the sequence of the same name. **For Ex: Business Partner Add (1)**.

![copypf7](\staticfiles\processflow\media\copypf7.PNG)

7) A toaster message will confirm the start of the copying process. You will be displayed with a loader that would give you a view of the copying process.

![copypf6](\staticfiles\processflow\media\copypf6.PNG)

8) Once the process of copying is over, you may navigate to the folder to view your copied processflow. All the mappings and along with the configurations will be copied during this process.

Following the above process, you can successfully copy your processflows from one folder to another.

**Note:**

- **You cannot copy processflows from the ProcessFlow folder to Installed ProcessFlow Folder or vice versa.**
- **In-case of same name, you will have the option to rename your copied processflow before copying starts. If not renamed, your copied ProcessFlow will be named as `ProcessFlow name (n)`. Where `n` stands for the sequence of the same name. `For Ex: Business Partner Add (1)`**.
- Once copied, any changes made to the original processflow, the updates will not reflect in its copied version.


