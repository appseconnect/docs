---
title: "Understanding XML and Xpath"
toc: true
tag: developers
category: "Transformation"
menus: 
    mappinggettingstarted:        
        title: "Understanding XML and Xpath"
        icon: fa fa-wpexplorer
        identifier: understandingxmlxpath
---

## Understanding XML

XML stands for `eXtensible Markup Language`. XML was designed to store and transport data.

It is a textual data format with strong support via Unicode for different human languages. The design of XML focuses on documents, the language is widely used for the representation of arbitrary data structures such as those used in web services.
Several schema systems exist to aid in the definition of XML-based languages, while programmers have developed many application programming interfaces (APIs) to aid the processing of XML data.

1. There are different types of nodes in XML. For Further details, Refer the following [link](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/xml/dom_nodetype.asp.html)

2. XML document must conform to a specific set of syntactical rules. For Further details, Refer the following [link](https://www.xmlfiles.com/xml/xml-syntax/)

3. XML document should be well-defined and valid. For Further details, Refer the following [link](https://www.xmlfiles.com/xml/xml-dtd/)

## Understanding XPATH

XPath stands for `XML Path Language` which is a query language for selecting nodes from an XML document. 
In addition, XPath may be used to compute values (e.g., strings, numbers, or Boolean values) from the content of an XML document. 
XPath was defined by the World Wide Web Consortium (W3C).

* The XPath language is build on a tree representation of the XML document, and provides the ability to navigate around the tree,
selecting nodes by a variety of criteria.

* XPath has been adopted by a `number of XML processing libraries and tools`, many of which also offer CSS Selectors, another W3C standard, as a simpler alternative to XPath.

* PATH expression result in object which can be of following types:

  1. Node-Set(Collection of nodes)
  2. String
  3. Boolean
  4. Number(Double in .NET)

* Evaluation of an XPATH expression is done on the basis of the context of the 
  expression. An expression consist of -

  1. a node (called context node)
  2. Variable binding
  3. Two variables (one context position and another context size)
  4. Function binding
  5. Collection of namespaces for the context

* Now XPATH expressions or location paths are of two types:

  1. Relative path
  2. Absolute path

*  Location Steps are the ones that make up an XPATH Expression. It consists of

   1. Axis
   2. Node name (context node name)
   3. Predicate (optional)

To put it simply relative path consists of location step separated by "/", while absolute path begins with "/" (referred as root node) followed by optional location steps.

For example : /child::catalog/child::book[1]/child::author is absolute path and child::book[1]/child::author is relative path.

child:: is axis
[1] is predicate
child::book[1] is a location step.
catalog, book and author are node.


* Let's start with Axes

1. child axis contains the children of context node. For example : /child::catalog/child::book
2. descendant axis contains the decendants or grandchildren of context node. For example : /child::catalog/descendant::author
3. parent axis contains the parent of the context node, if there is one, For example : /child::catalog/child::book[1]/child::author/parent::*
4. Ancestor axis contains the ancestors of the context node; the ancestors of the context node consist of the parent of context node and the parent's 
   parent and so on; thus, the ancestor axis will always include the root node, unless the context node is the root node. 
   For example : /child::catalog/child::book[1]/child::author/ancestor::*
5. following-sibling axis contains all the following siblings of the context node only if the context node is not an 
   attribute node or namespace node. For example :  /child::catalog/child::book[1]/child::author/following-sibling::*
6. preceding-sibling axis contains all the preceding siblings of the context node only if the context node 
   is not an attribute node or namespace node. For example : /child::catalog/child::book[1]/child::description/preceding-sibling::*
7. attribute axis contains the attributes of the context node; the axis will be empty unless the context node is an element. 
   For example : /child::catalog/child::book[2]/attribute::*
8. namespace axis contains the namespace nodes of the context node; the axis will be empty unless the 
   context node is an element. For example : /child::catalog/child::book[2]/namespace::*
9. self axis contains just the context node itself
10. descendant-or-self axis contains the context node and the descendants
11. ancestor-or-self axis contains the context node and the ancestors of the context node; thus, the ancestor axis will always include the root node

* Some of the most popular abbreviations used in XPATH are :

 1. /catalog/book[1]/author/following-sibling::* instead of /child::catalog/child::book[1]/child::author/following-sibling::* 
 2. * instead of node(). 
 3. /catalog/book[2]/@id instead of /catalog/book[2]/attribute::id
 4. //author instead of /descendant-or-self::node()/child::author

