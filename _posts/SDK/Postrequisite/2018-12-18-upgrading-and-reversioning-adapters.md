---
title: "Upgrading and Re-versioning"
toc: true
tag: developers
category: "SDK"
menus: 
    sdkpostrequisite:
        title: "Upgrading"
        weight: 8
        icon: fa fa-file-word-o
        identifier: sdkpostrequisiteupgrading
---

APPSeCONNECT Component Version Pattern contains four numbers, which convey the following information:
Pattern-

>**(1st-Number).(2nd-Number).(3rd-Number).(4th-Number)**



From left to right the numbers represent the followings -

>_(Major Release/Major Version)_._(Minor Release/Minor Version)_._(Patch/Hotfix/HotRelease Version)_._(QA or Internal Build [>0]/Public[0] Version)_



In general – 

* A MAJOR version is very rare, it would only be considered if the source was effectively re-written or a clean break was desired for other reasons. This increment would likely break most of the components of modules.
* A MINOR Version changes in every release (quarterly). It gets reset (starts from 0) only when the MAJOR version gets changed. Except for this part of the version, other parts of the version are as per requirement (technical / function/target) from time to time basis. On this version change, new components or features are added (such as a new Adapter, a new Integration, a new Agent feature, etc).
* A PATCH version changes when a Fix or a Hot-Release is added.  This version is reserved not only for the bug fixes but also for the optimizations, security patches or for adding any immediate enhancements to the Product. It should be considered safe to update a patch as and when required without waiting for any specific time or Product-release. Any Hot-Release should be compatible with all the other Hot-Releases under the current minor or major version.
* A QA version increases when a build (of any component under development) is given to the QA by the programmer. It starts from 1 and incremented by 1 every time a new build is issued to the QA of the concerned component or module. Once QA passes the build it gets reset to 0 for a public release of the same.


Minor Releases of APPSeCONNECT for the current year, till date are as follows -

- 4 -> 2017 Q1 (the Year 2017's Quarter 1 Release) 
- 5 -> 2017 Q2 (the Year 2017's Quarter 2 Release) 
- 6 -> 2017 Q3 (the Year 2017's Quarter 3 Release) 

Upcoming
- 7 -> 2017 Q4 (the Year 2017's Quarter 4 Release)


**Examples**

- 3.0.x.x is considered to be the first major version release of any component. Here, the minor version is set as '0' as it is the major release. Generally, major version is incremented when there is a significant jump in functionality that may cause incompatibility issues with interfacing systems. Minor version gets incremented on every release. 3.0 was first major version release in the first quarter of 2016.
- 3.1.0.2 is the first minor release of any component ((Minor Release / Version = 1)) after the major version release for QA (as the fourth number is more than 0) and with no Patch / Hot-fix version/Hot-Release version (Third number - 0) for Public. Means this is the first minor release of the major version 3, currently in QA with the second build (as the fourth number is 2).
- 3.1.1.0 is a version of the above component after release for the public (as the fourth number is 0) with one Hot-fix/Hot-Release (as the third number is 1) after Public release.
- 3.3.2.1 is a component version when it's in QA for its second Public Hotfix / Patch/Hot-Release with the first build (as the fourth number 1).

**Compatibility**

The major version number (1st-Number) of any component also stands for compatibility. Means, the components with same major version will support each other, but the components with different major version may not be compatible with each other.

**Examples**

- SAP B1 Adapter v3.1.1.0 should be compatible with Agent v3.x.x.x, or vice versa.
- SAP B1 Adapter v2.3.0.1 may not be compatible with Agent v3.x.x.x, or vice versa.