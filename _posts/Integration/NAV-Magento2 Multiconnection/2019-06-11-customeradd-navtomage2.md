---
title: "Customer Add NAV-Magento2 Multiconnection"
toc: true
tag: developers
category: "Integration"
deprecated: 
    url: "/processflow/overview-of-processflow"
    title: "Overview of ProcessFlow"
menus: 
    navmagentointegration:
        title: "Customer Add NAV-Magento2 Multiconnection"
        icon: fa fa-wpexplorer
        identifier: custaddnavtomage2multi
---

Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how the integration process can be executed through workflow for adding Customers
from Ms Dynamics NAV to Magento2 (Multi-store).

## Brief Description

![wrkflw_custadd_navtomage2-multi](/staticfiles/integration/media/wrkflw_custadd_navtomage2-multi.png)  

In this integration scenario, multiple connections have been made for transformation of Adding Customers from  Ms Dynamics NAV to Magento2 (along with multiple Magento websites from a single Magento admin). 
* Login to the MS Dynamics NAV client.
* Navigate to the Customers page and click on the NEW button to create a new customer. The customer cart page opens.
* Enter the general details of the customer in the customer card page.

![custadd_navtomage2_image1](/staticfiles/integration/media/custadd_navtomage2_image1.png)  

**Note: The fields Address, Email and Ph no are the mandatory fields**

* Enter all the details in AEC Customer page.

![custadd_navtomage2_image2](/staticfiles/integration/media/custadd_navtomage2_image2.png)  

 * Once the details are incorporated, click on the OK button.

## LookUp Mapping

N/A

## Attribute Mapping/Transformation

The pre-packaged mappings will successfully sync data to Magento2 from MS Dynamics NAV. 

Given below is the attribute mapping for executing the touchpoint `Customer upload syncback` touchpoint.

![mapping-navmage2multi-customeradd](/staticfiles/integration/media/mapping-navmage2multi-customeradd.png)

![mapping-navmage2multi-customeradd2](/staticfiles/integration/media/mapping-navmage2multi-customeradd2.png)

You need to provide mapping details to complex object collection - `ShipToAddressLines` and attribute `Code`. Also the 
mapping details to the `root variables` need to be provided as shown in the above image.

However for more informations 
related to mapping, see Mapping & [Transformation Techniques](/transformation/steps-to-cutomize-prebuilt-mapping/)

## Action Filter

Add a node to the given pre-packaged order of the Action filter with two sub-nodes `Field` and `Criteria`.
View the image below to define the Action Filters.

![custadd_navtomage2_image3](/staticfiles/integration/media/custadd_navtomage2_image3.png)  

![custadd_navtomage2_image4](/staticfiles/integration/media/custadd_navtomage2_image4.png)  

## Executing the Workflow Integration

**Note: Before integrating with Magento2 and MS Dynamics NAV make sure all the Master Data Touchpoints are synced**

1.	Once the workflow is designed, Update the Configuration in agent for deploying the workflow in the agent.
2.	Navigate to the Workflow Panel in the agent and click on the Start Sync Button for executing the Process.
3.	Once the Execution is finished click Resync Button in the agent.
4.	The Resync Panel show the Success Result in the agent.

![custadd_navtomage2_image5](/staticfiles/integration/media/custadd_navtomage2_image5.png)

## Integration Data Survey

The user can survey the data by viewing the [Processed Snapshot](/workflow/list-of-snapshot/)from the node level of the workflow.
This Snapshot View displays the successful execution of the workflow.

![custadd_navtomage2_image6](/staticfiles/integration/media/custadd_navtomage2_image6.png) 

## Post Condition

* The user can view the customer (C00640 as 5738) synced in Magento2.

![custadd_navtomage2_image7](/staticfiles/integration/media/custadd_navtomage2_image7.png)  

* The sync flag update & WebId from magento is returned in syncback. The user can also go to NAV and check if the WebCustomerid has returned and the WebSyncFlag has been set to 'T' (True) from 'F' (False).

![custadd_navtomage2_image8](/staticfiles/integration/media/custadd_navtomage2_image8.png)  

**Note : A customer created in nav is unique for each connection that cannot be sync the same customer to multiple magneto urls.**

## Frequency of use

The user can execute the Integration through workflow as and when required.

## Troubleshooting

N/A
