---
title: "Attribute Mapping of workflow"
toc: true
tag: developers
category: "Workflow"
menus: 
    quickstartworkflow:
        icon: fa fa-link
        weight: 7
        title: "Attribute Mapping of workflow" 
        identifier: quickstartfirstworkflow
---

An implementer will be able to have a source to destination mapping, such that complex data transformation could be performed over data after reading this document.

Please follow the steps written below:

1. Log in with valid credentials in the Cloud portal.
2. Choose any project and navigate to Connections -> Choose a connection -> View The Connection.

![Attribute-Mapping1](/staticfiles/workflow-management/media/Attribute-Mapping1.png)  
You can search for a connection from the Search section. Hover the mouse on the connection, click on View the Connection.
3. A new page will open where you can edit the touch points.  
![Attribute-Mapping2](/staticfiles/workflow-management/media/Attribute-Mapping2.png)  
**Protip**Edit mapping will only be applicable for your custom touchpoint i.e. if you add any new touchpoint. Edit link will not be visible for Base touchpoints that get auto-created at the time of connection creation.
{: .notice--info}
4. You will see a page like this. Refer to this document.  
![Attribute-Mapping3](/staticfiles/workflow-management/media/Attribute-Mapping3.png)  
5. Choose Open Mapping, A pop-up will open.  
![Attribute-Mapping4](/staticfiles/workflow-management/media/Attribute-Mapping4.png)  
6. In the white box section, you have to write the fields for mapping. You can also click on the entities/attributes to get it on the box.If value mapping is required, check the box below and add some tips.
Choose the value mapping type. Leaving a comment is optional.  
7. You can now enable or disable attribute mapping. `Disable Mapping feature` is not available for the primary key.
You can now Delete Custom attribute along with its mapping.  
8. `The custom attribute' is the attribute which is defined in project level. You can use the custom attributes only for a particular touchpoint.
9. You can sort the order of attributes and variables in the mapping page by dragging and dropping the same under its parent only if the mapping for the attribute has been provided.
10. In case of the complex object or complex object collection type of attributes, a blank mapping is required for its sorting.
11. Attributes and variables with no mapping will neither be allowed to sort in the mapping tree nor will it be displayed in the XSLT preview.  
12. You can create variable and condition by a pop-up in the attribute mapping section.
* Source entity and destination entity can be mapped using drag and drop feature. 
* Destination entity will have drop down containing entity name and app resource and function. 
* New variables can be added to the (+) icon in the mapping section. 
* New conditions can be added to the (+) icon in the mapping section.