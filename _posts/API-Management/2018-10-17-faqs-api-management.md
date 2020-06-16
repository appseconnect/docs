---
title: "Frequently asked questions"
toc: true
tag: developers
category: "API-Management"
menus: 
    api:
        weight: 2
        icon: fa fa-gg
        title: "FAQs" 
        identifier: apifaqs 
---
`FAQ` is the best way to address frequently asked questions about your business. This section contains list of questions and answers pertaining to a particular subject especially one giving basic information for users of a website. 

`API Management` FAQ will help you to get instant solution to basic problems you may face as a first time user or as an user.

## What is Registration key
 
To create and avail API server through appseconnect first step is to register a URL. Register URL is a combination of registration key and appseconnectapi.com. A registration key.Registration key is the unique identification of an organization. For example micky.appeconnectapi.com, here micky sub-domain is  the registration key. 

## What is Policy

Policy(s) are the technique to filter API consumer before/or after accessing the actual required data. There are many policy that an API management organization can apply in appseconnect. `Throttling` is one of the example of policy which restricts API consumer and limits the data server hits.  

## Define Authentication in API
 
Authentication is the way to authenticate API consumer before accessing the actual required data. There are many Authentication mechanism are there. Appseconnect API currently only use basic authentication. 

## How to test the configured API

After creating an API easily it can be tested. As APPSeCONNECT API management swagger is implemented through swagger it can be tested. There are so many popular http client available in the market. Like postman can be used for testing any API that created in APPSeCONNECT. 

## Who can be the users of the API/who will be benefitted from API module

API management tool is within a microservices architecture. It present an API to a user or client device and then invoke APIs to microservices, harmonizing API and microservices management. 
An API gateway presents a single API to a device to mask a complex series of microservices access processes
API Management (APIM) helps organizations publish APIs to external, partner, and internal developers to unlock the potential of their data and services.

## Why do I need to setup Policy in API 

Adding up the Policies in the API ensures more security, restricting unknown sources from accessing it. We support many policies that can be applied in APPSeCONNECT. CORS Policy is one such policy which restricts unauthorized access from unknown domains.

## How scalable is APPSeCONNECT API Management

APPSeCONNECT cloud-based API management platform provides the leverage to create, edit and configure APIs for any 3rd party applications enforcing security policy for an API consumption like the IP limits, usage limits and data access limits.


## What are the Policies that APPSeCONNECT supports in its API Management

AEC API comes with a set of defined policies that we use in our APPSeCONNECT API MANAGEMENT. The details about each these policies are given in the link below.

[Policy Overview](/api-management/policies/)

## What are Inbound Policy in APPSeCONNECT API MANAGEMENT

In the API Gateway Pipeline, Policies are executed step wise. Policies that are declared before the backend Actions are known as the Inbound Policies. Some of the Inbound policies are : `IP Restrict Policy, Validate HTTP Header, Quota Per Key Policy, CORS Policy`


## What are Outbound Policy in APPSeCONNECT API MANAGEMENT

In the API Gateway Pipeline, Policies are executed step-wise. Policies that are declared after the backend Actions are known as the Inbound Policies. Some of the Outbound policies are : `Compression Policy & Response Content Format`.

## How many Policy can I provide in a single API

You can add Multiple Policies in a single API.

## How many Domains can you add while configuring against CORS Policy

You can add multiple domains in CORS Policy for a single API.

## Can I ADD policy after creating API

Yes you can add policy even after creating an API. You can click on the Edit button beside the API and can select the policy by clicking on the Policy node.

## What is API Proxy

API Proxy acts as a bridge or a medium which provides access to secured resources with minimum amount of information. 


## How to build an API

For Details [Click here](/api-management/quickstart-guides-to-api-management/)

## What are Webhooks in API

To know about webhooks, [Click here](/api-management/steps-to-create-webhook-endpoint/)



