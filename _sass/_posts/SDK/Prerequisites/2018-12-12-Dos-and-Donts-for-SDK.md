---
title: "Best practices"
toc: true
tag: developers
category: "SDK"
menus: 
    sdkprerequisite:
        title: "Best-practices"
        weight: 8
        icon: fa fa-file-word-o
        identifier: sdkprerequisitebestpractices
---

Let us discuss some of the Do's and Don'ts that one need to maintain while developing an Adapter in APPSeCONNECT platform.

### Avoid hard-coding on API URLs

It is highly recommended to avoid any hard-coding of an API URL. As adapter goes through various business integration processes, 
keeping an hard - coded API base URL will lead to problems for future implementations. 

### Do not use System APIs inside Adapter code

As Adapter is developed using .NET Framework, you might want to invoke certain Environmental APIs directly inside your code. As 
the adapter may run on various types of environment and there is no such functionality to ensure that environments 
will be always equivalent for an adpater execution, dependency on environment, such as file system, local timestamp, 
registry etc is highly discouraged. 

### Do not use depricated APIs

As APPSeCONNECT APIs are evolving day by day, we obsolete some of the existing APIs. Even for backward compatibility we generally
still allow execution of those backdated APIs, but if you see a warning while compiling the adapter code in Visual Studio, it is highly 
recommeded to change the code to avoid using the depricated APIs. 

### Design the UI as to improve user experience

User experience is Key for Adapter users. So if you are building an adapter, it is highly encouraged
to use best UX patterns while developing the UI.  