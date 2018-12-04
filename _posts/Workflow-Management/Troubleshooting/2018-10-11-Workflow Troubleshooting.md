---
title: "Troubleshooting for Integration"
toc: true
tag: developers
category: "Workflow"
menus: 
    workflow:
        title: "Troubleshooting" 
        icon: fa fa-file-word-o cholo
        identifier: workflowtroubleshoot
---

What you will find in this document?

It is observed, that, clients do face some simple errors after integration in the transaction logs. Here, in this document you will find about these kinds of errors and its probable causes.

Troubleshooting for  Error 1 :- Nothing to Post to the SAP(Destination Application).
1.	Before R&D of any errors, the very first thing is to look out for the Packets first. How? 
2.	In the transaction logs, double click on the error you received. You’ll see a window, opening.

IMAGE

3.	In the Technical info, Select and Copy the 1st set of the code, and search for it in the APPSeCONNECT system folder, on the directory where your system folder is installed.

IMAGE

4.	If you find the input and the output packet, irrespective of this error code in your AEC system folder, open each of the folders and look for the XML Code errors in it.
 
5.	In case, if you don’t get any input or output packets, its probable reason is, your source and destination application are not validated properly, or any of the applications 
prerequisite hasn’t properly made.

Troubleshooting for Error 2: - Transformation Failed and skipped further synchronization

1.	As now you already know about how to check the packets. Similarly, as of the previous one, select and copy the error code and check for the packets (input, Transform, output) in the AEC system folder.

2.	If you, do not get any packets, you know it’s probable reason. But here, as the error says about transformation, you probably might not get the Transform Packet and the Output packet.

IMAGE

3.	This error is probably due to the mapping of data files. Check for the Mapping in the Transform section of the touchpoint (you’ll find it in the menu bar below the touchpoint) you are synchronizing.

4.	One’s the mapping is properly done, you are ready to sync the data’s again.
