---
title: "Advance Mapping through Custom Renderer"
toc: true
tag: developers
category: "Processflow"
menus: 
    mapperprocessflow:
        title: "Advance Mapping through Custom Renderer"
        weight: 7
        icon: fa fa-file-word-o
        identifier: rendererprocessflow
---

Renderer enables the user to alter the default XML structure which and when required
through rendering. In case of Complex Attribute Mapping, Rendering makes the 
procedure easy and adaptable to the environment.

## Prerequisites for adding Render Process Flow Mapper Node

* You need to have valid credentials of the portal.
* You need to navigate to the [Process Flow listing page](/processflow/processflow-listing-page/) for creating or editing a Process Flow
* You need [create a Process Flow](/processflow/creating-processflow/) or Edit an existing process flow for implementing rendered in mapping.
* You need to know about the packet structure of the destination application.

## Steps to implement Renderer in Process Flow Mapper Node

1.	Navigate to the Process Flow designer page and click on the Node configuration button of Mapper Node.
![Processflow Renderer1](../../staticfiles/processflow/media/mapper/processflow_renderer1.png)  
2.	The Mapper Window opens. Expand the Transformation window, click on the Ellipses (...) beside the button Renderer to view the option Add Renderers in the context menu.
![Processflow Renderer2](../../staticfiles/processflow/media/mapper/processflow_renderer2.png)  
3.	You can view the Renderer window. Default Rendering is the structure that shows that if there is no rendering, the Default Rendering Structure provided, would be implemented.
![Processflow Renderer3](../../staticfiles/processflow/media/mapper/processflow_renderer3.png)  
4.	Provide the Renderer Name. The user can click on the button TargetExpressions ([property]) and SourceExpressions ([value]) to get the syntax for mapping. Input the expression as how the rendering needs to be done and Click on the SAVE button.
![Processflow Renderer4](../../staticfiles/processflow/media/mapper/processflow_renderer4.png)  
**Rendering will only be implemented, if the provided expression is supporting the XML standard. 
Structure that does not represents XML structure will display error while saving.**
5.	Navigate to the Schema whose [attribute](/processflow/customising-attribute-mapping/) you need to map. 
6.	Open the Attribute to view the mapping window where you need to implement the Renderer. Enable the Checkbox for Choose Renderer & Select the created Renderer from the drop-down. 
![Processflow Renderer5](../../staticfiles/processflow/media/mapper/processflow_renderer5.png)  
7.	Once the renderer is enabled and selected, click on the SAVE button.

Following the process, you can successfully implement Renderer to a mapper node.





 
