---
title: "Prerequisite"
toc: true
tag: developers
category: "SDK"
menus: 
    sdk:
        title: "Prerequisite"
        weight: 7
        icon: fa fa-file-word-o
        identifier: sdkprerequisite
---
Adapter represents an interface between an APP and APPSeCONNECT. An adapter is the most important component which connects your app with APPSeCONNECT. There are few responsibilities of an adapter which are defined as under: 

1. Create a credentials view which allows connecting to the respective APP where you want to connect.
2. Create Push and Pull method inside the adapter which can send and receive data to and from the application.
3. Add additional business behavior with respect to the corresponding app.

The Adapter is loaded dynamically by the Agent and calls some specific methods using a fixed contract defined as an interface. 

## System Requirement of Adapter Development

Adapter development mainly requires Visual Studio to be installed on your system. So as per adapter development is concerned, we require the minimum system and hardware requirements needed to install Visual Studio 2017.

#### Supported Operating Systems

* Windows 10 version 1507 or higher: Home, Professional, Education, and Enterprise (LTSC and S are not supported)
* Windows Server 2016: Standard and Datacenter
* Windows 8.1 (with Update 2919355): Core, Professional, and Enterprise
* Windows Server 2012 R2 (with Update 2919355): Essentials, Standard, Datacenter
* Windows 7 SP1 (with latest Windows Updates): Home Premium, Professional, Enterprise, Ultimate

#### Hardware

* 1.8 GHz or faster processor. Dual-core or better recommended
* 2 GB of RAM; 4 GB of RAM recommended (2.5 GB minimum if running on a virtual machine)
* Hard disk space: up to 130 GB of available space, depending on features installed; typical installations require 20-50 GB of free space.
* Hard disk speed: to improve performance, install Windows and Visual Studio on a solid state drive (SSD).
* Video card that supports a minimum display resolution of 720p (1280 by 720); Visual Studio will work best at a resolution of WXGA (1366 by 768) or higher.

#### Additional Requirements

* Administrator rights are required to install Visual Studio and execute APPSeCONNECT.
* .NET Framework 4.5 is required to install Visual Studio. Visual Studio requires .NET Framework 4.6.1, which will be installed during setup.
* Windows 10 Enterprise LTSC edition and Windows 10 S are not supported for development. You may use Visual Studio 2017 to build apps that run on Windows 10 LTSC and Windows 10 S.
* Internet Explorer 11 or Edge is required for internet-related scenarios. Some features might not work unless these, or a later version, are installed.


## Start developing adapter in easy steps

APPSeCONNECT needs adapter to connect to a specific Application and Get and Push data to and from the application. It is very easy to create an adapter after the pre-requisites software are installed properly. As a requirement to develop an adapter, the developer needs to know : 

1. C# or VB.NET language.
2. XAML or WPF (Basic)
3. Knows XML to represent Data.
4. APPSeCONNECT Architecture

If you know all these you can follow the steps to create an Adapter : 

* Open Visual Studio and Create new Class Library using your preferred language. 
Lets name it as Insync.eConnect.FavApp (In your case, you can replace FavApp with your Application name) for our sample project.Click OK to create the project.  
![Choose Project](/staticfiles/sdk-references/media/choose-project.png)
* After the application is created, delete **"Class1.cs"** that is automatically selected. Just from the solution explorer, right click on the Class1.cs file and select "Remove".
Right click on "References" and select **"Manage Nuget Packages"**.  
![Managenuget](/staticfiles/sdk-references/media/managenuget.png)
* The Nuget Package manager will load, you can now type **"APPSeCONNECT API"** on the Search Online box on top and filter to our Adapter API.  
* ![Appseconnect A P I](/staticfiles/sdk-references/media/appseconnectAPI.png)
* Select **"Install"**. The Installer will create all the necessary files that are needed to create APPSeCONNECT Adapter.

Now after you have the code ready, Go to View -> Task List from Menu and select Comments on the Box. It will show all the ToDo items you need to do to develop an adapter.  Follow the steps to remove the ToDo items with code such to work.  
![Todos Adapter](/staticfiles/sdk-references/media/todos-adapter.png)  
Follow the instructions in ToDo and create the adapter. Let us know at support@appseconnect.com if you face any difficulties in developing or understanding a point. 

