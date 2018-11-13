---
title: "Overview of Generic Rest Adapters"
toc: true
tag: developers
category: "Adapters"
menus: 
    header:
        title: "Adapters"
        weight: 1
        icon: fa fa-file-word-o 
        identifier: adapters
---
# Overview of Generic Rest Adapters

 Generic Adapters are the adapters that follow the same REST/SOAP protocol for different applications. 
 You can use these kinds of generic adapters for all kinds of applications that follow same Protocol.  

Generic Rest Adapters of APPSeCONNECT can expose integration as REST APIs by configuring a REST Adapter connection as a trigger. 
The REST Adapter can also use any external REST API by configuring a REST Adapter connection as an invoke. 

The REST Adapter provides the following capabilities when exposing an integration as a REST API by configuring the connection as a trigger:

* Support for uploading sample JSON documents in APPSeCONNECT to define schema during REST Adapter configuration.

* REST APIs implement the HTTPS protocol, thereby enforcing all incoming requests to have transport level security.

* REST APIs exposed using the REST Adapter are protected using Basic Authentication and OAuth token-based authentication.

* Supports configuration of the following:

 a) Relative resource URI.

 b) Support for HTTP methods GET, PUT, POST, DELETE

 c) Template and query parameters.

 d) Support for a request/response payload.

 e) Support for JSON, XML.

f) Support for homogenous and multidimensional JSON arrays including top-level arrays.


The REST Adapter provides the following capabilities when consuming external REST APIs by configuring the connection as an invoke:

1. Support for uploading sample XML documents to define schema for XML content during REST Adapter configuration. The following XML documents are supported for schema generation:

    * XML with no namespace

    * XML with a homogenous namespace

2. Support for uploading sample JSON documents to define schema during REST Adapter configuration.
3. Support for accessing and setting standard and custom HTTP headers exposed by external REST APIs 
4. Support for consuming external REST APIs that are protected using transport level security.
5. Support for dynamically changing the (invoke) outbound endpoint configuration
