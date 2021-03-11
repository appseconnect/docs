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

3) You'll get the following message on the Tracker Window, once the deployment steps are completed.

`To execute the Processflow, please click the dropdown of execute play button and Choose your desired Execution option.`

![customfilter1]()

4) Clicking on the Play button, you get the following two options in the drop-down.

- Execute - This option allows you to execute with the filter (generic filter) provided in the App Node.
- Execute with Custom Action filter - This option will allow you to perform execution with a custom filter apart from the generic filter.

Select the option **Execute with Custom Action Filter**.

![customfilter2]()

5) The Custom Action filter opens that will allow you to provide the filter as per your need.

![customfilter3]()
