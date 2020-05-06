---
title: "Mapping from Schema 1 to Schema 2"
toc: true
tag: developers
category: "Transformation"
menus: 
    overviewusecase:
        title: "Mapping from Schema 1 to Schema 2"
        weight: 3
        icon: fa fa-file-word-o
        identifier: tramsformationschema
---

## Use-Case Name

Attribute Mapping with Schema 1 (OLEDB Technology APP) and Schema 2 (REST Application - Magento 2)

## Brief Description

Two different Application has been created one being an `OLEDB Technology app` and the other one is the` REST based 
application` MAGENTO 2. Here `Schema 1` is created for the OLEDB app and its attributes created are mapped with 
the attributes of the `Schema 2` (Magento 2).

## ACTORS

Implementers, Developers, Partners

## Preconditions

Organisation Creation & Connection Creation.

## Basic Flow

1.	Login to the APPSeCONNECT Portal and create a connection with the application for which the mapping is to be done.
2.	[Create an OLEDB Technology App](/configuring%20appseconnect/configurations/#b-technology-app-creation) 
3.	Create the schema and its [action for the OLEDB App](/connectors/OLEDB-using-filters/)
4.	Create the connection between the two apps.
5.	OLEDB is a technology application so [Touchpoint is required to be created](/getting%20started/configurations-for-integration/#creating-organisation-touchpoint-workflow).
6.	Now the touchpoint is created. Navigate to the Transformation section for implementing the [attribute Mapping](/transformation/steps-to-cutomize-prebuilt-mapping/).
![schema1-schema2mapping](/staticfiles/Transformation/media/schema1-schema2mapping.png)
7.	The above scenario defines, that the attribute **default_billing** of Magento 2 is here mapped with the source attribute **BPAddresses** of the app OLEDB for the easy transformation
    of the Schema that contains the address of the Business Partner.

## Post-Conditions
The user can view the successful sync of the touchpoint Customer Add for the connection OLEDB Technology App and Magento 2.

## Exception Courses
The user can view the error logs in the RESYNC Bucket of the agent (Cloud and OP), if the touchpoint fails to sync for any cases.

## Frequency of Use
The user can sync the touchpoint whenever required.

## Assumptions
Not Applicable


