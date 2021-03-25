---
title: "User Defined Dynamic Filter"
toc: true
tag: developers
category: "Processflow"
menus: 
    quickstartprocessflow:
        title: "User Defined Dynamic Filter"
        weight: 8
        icon: fa fa-file-word-o
        identifier: customfilterprocessflow
---

As ActionFilters are the commands for the applications to perform specific integration operations. Using ProcessFlows, you can now implement custom filters on processflows that will allow you to fetch and post data to and fro applications
that are required only for specific scenarios. With this feature, you can not only implement the generic filter but also a custom filter. 

On execution, you get the option to execute either with the generic filter or with the custom filter depending on your choice. Below are the process that would help you implement Dynamic Custom Action Filtern on your organisation.

## Prerequisites

- You should have a valid APPSeCONNECT Account.
- You should have a processflow designed with proper configurations on the [APP Nodes](/processflow/processflow-app/).
- Your designed processflow should be deployed successfully.

## Implementing Dynamic Custom Filter

1) Navigate to the [Designer](/processflow/designer-processflow/) of ProcessFlow.

2) Once you have [designed your Processflow](/processflow/creating-processflow/), deploy the processflow. You'll get the Deployment steps on the Tracker Window.

3) Clicking on the Play button, you get the following two options in the drop-down.

- Execute - This option allows you to execute with the filter (generic filter) provided in the App Node.
- Execute with Custom Action filter - This option will allow you to perform execution with a custom filter apart from the generic filter.

Select the option **Execute with Custom Action Filter**.

![customfilter2](\staticfiles\processflow\media\customfilter2.PNG)

4) The Custom Action filter Window opens that will allow you to provide the filter as per your need.

![customfilter3](\staticfiles\processflow\media\customfilter3.PNG)


## Creating Dynamic Custom Filter

This part of the document will allow you to create Custom Filter on GET node for specific scenario execution. You can create these filters from TWO different areas.

- Create from **Execute with Custom Action filter**
- Create from **Node Configuration - Configure Filter**

### Create From : Execute with Custom Action Filter

1) Landing on the **Custom Action filter Window**, you will be listed with all the GET nodes of that ProcessFlow.

![customfilter4](\staticfiles\processflow\media\customfilter4.PNG)

2) To ADD the filter click on the Ellipses -> Context Menu -> Create. The screen for creating custom action filter will be displayed.

![customfilter6](\staticfiles\processflow\media\customfilter6.PNG)

3) You can also add Conditions and Conjuctions over the filters by clicking on the Ellipses over the HEADER and the BODY section.

![customfilter7](\staticfiles\processflow\media\customfilter7.PNG)

4) You can either click on the **Execute** button or **SAVE and Execute** button. You can track the Execution details on the Tracker Window.

5) You will be generated with [Snapshots](/processflow/snapshot-processflow/) for every execution with the Custom Filter.


**Note:**

- You will not get the option of `Execute with Custom Filter`, if your processflow is not deployed.
- Clicking on the Execute button in Custom Filter window, will not SAVE the filter.

### Create From : Node Configuration - Configure Filter

1) Click on the Node Configuration button for the GET Node. You get the Node Configuration window. Click on the **Configure Filter** button to get the Action Filter window.

![customfilter10](\staticfiles\processflow\media\customfilter10.PNG)

2) Expand the nodes to view the **Custom Filter** option. Click on the Ellipses to view the **CREATE** option.

![customfilter11](\staticfiles\processflow\media\customfilter11.PNG)

3) Clicking on the CREATE button, you get the window for providing the filter. Input the filter as required and click on the SAVE button.

4) The SAVED filters will also be available in the **Execute with Custom Action filter**. The process to add and create the filter is save as that performed in [**Execute with Custom Action filter**](/processflow/manage-actions-actionfilters-errorfilters/#working-with-custom-filter).

For more details on this section, [ClicK Here](/processflow/manage-actions-actionfilters-errorfilters/)


## Deleting Dynamic Action Filter.

1) To Delete a Custom Action Filter, Navigate to the **Custom Action filter Window** by clicking on the **Execute with Custom Action filter**. The window opens.

2) Click on the ellipses of the GET node, whose filter you would like to delete.

![customfilter8](\staticfiles\processflow\media\customfilter8.PNG)

3) You will get a confirmation message for proceeding with the delete process. Click on the YES button to proceed with the deletion process.

![customfilter9](\staticfiles\processflow\media\customfilter9.PNG)

4) You can also delete the filter from the normal action filter UI. [Click Here](/processflow/manage-actions-actionfilters-errorfilters/#working-with-custom-filter) for more details.
