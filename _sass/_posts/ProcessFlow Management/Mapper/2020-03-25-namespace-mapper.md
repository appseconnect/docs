---
title: "Defining & Implementing Namespace"
toc: true
tag: developers
category: "Processflow"
menus: 
    mapperprocessflow:
        title: "Defining & Implementing Namespace"
        weight: 6
        icon: fa fa-file-word-o
        identifier: namespaceprocessflow
---

[Namespace](https://www.w3schools.com/xml/xml_namespaces.asp) is a technique that defines a set of unique names within an XML file, consisting of several XML elements such that if two entity has the same name, declaring Namespace will provide a unique identification to the element where the namespace is declared.
Declaring a namespace requires to provide a Prefix and an URI (U]niform Resource Identifiers) for identifying the work of the element declared. All the descendants with the element would be identified with the prefix provided. 


## Prerequisites for adding Namespace in Portal

* You need to have valid credentials of the portal.
* You need to navigate to the [Process Flow listing page](/processflow/processflow-listing-page/) for creating or editing a Process Flow
* You need to [create a Process Flow](/processflow/creating-processflow/) or Edit an existing process flow for implementing Namespace in Mapper node. 
## Steps to define Namespace in Mapper Node of Process Flow

1.	Create a New Process Flow or Edit an existing Process Flow for implementing Namespaces. 
You can view the Process Flow Designer Page. Click on the Node Configuration button for the Mapper node after link the application nodes for viewing the mapper window.
 ![Namespace1](../../staticfiles/processflow/media/mapper/namespace1.png)  
2.	Expand the Transformation node to view the Namespace Button.
 ![Namespace2](../../staticfiles/processflow/media/mapper/namespace2.png)  
3.	Click on the Ellipses(...) beside the Namespace button. You will be able to view the button Explore Namespaces.
 ![Namespace3](../../staticfiles/processflow/media/mapper/namespace3.png)  
4.	You can view the Namespace window after clicking on the Explore Namespace button. Click on the New button. You can view the fields for entering Prefix & URL appears.
 ![Namespace4](../../staticfiles/processflow/media/mapper/namespace4.png)  
5.	Enter the Prefix & the URL from providing a reference to namespace. On the Actions column you will be able to view button for SAVE and Delete. Click on the SAVE button.
* Prefix: a name to the Namespace.
* URL: A reference that provides a unique identity to the namespace.
![Namespace5](../../staticfiles/processflow/media/mapper/namespace5.png)  
6.	Click on the Preview Button to view the XSLT file. You can view the namespace in the header region of the XSLT.
![Namespace6](../../staticfiles/processflow/media/mapper/namespace6.png)   
Note: The Preview button would be available as per your Organisation Role.
7.	You can map attributes with namespace by providing the given syntax in the image below. Click here to know more about the mapping attributes. Click on the SAVE button after implementing the mapping.
![Namespace7](../../staticfiles/processflow/media/mapper/namespace7.png)  

Following the above the process, you can successfully create and define a namespace as per your requirement.






 
