---
title: "Storing Transactional Data"
toc: true
tag: developers,reseller
category: "SDK"
menus:
    sdk: 
        icon: fa fa-gg
        title: "Using Storage"
        identifier: transactionsdk   
---
Adapter supports a number of storages which you can make use of to perform various tasks. For an adapter developer,
it is sometimes becoming important to store mapping or related data inside the application so as to ensure the future 
data transfer executes smoothly. Some store transactional mapping data which is used to validate duplicate data, while 
some store operational data which are required very often to execute individual integration points. Some data are required 
for each transactional validation while some are used to gain performance. In this article we will 
understand how once can make use of APPSeCONNECT transactional store to store/retrieve data.

## Integration Storage

Integration storages are sandboxed storage points which are normally key-value collections which are loaded 
for an integration point only. Hence integration storage data are separate for each executions. 

These storages are very fast, in-memory and also sandboxed to a particular integration point. 

```csharp
 // To Store a data
 this._context.SetData("StorageKey", value);
 // To retrieve the same data
 var data = this._context.GetData("StorageKey");
``` 
In the above code, you are storing a string value for a particular key namely `StorageKey`, the data of which can 
be retrieved using `GetData` method again. The `_context`  represents an instance of `ApplicationContext` which one
can get from `Initialize` method of `IAdapter` or `IAppResource` implementation.


The integration storage are best to store incremental or transaction related data that is atomic to a particular 
transaction only and you are sure those data is not needed from any other integration point. 


## Credential storage

A special storage location is exposed to the adapter developer which lets the developer store sensitive information
from adapter. The storage is once per application, so you need to be super careful on storing any value. Ideally, the 
credential storage is mapped to an individual authentication credential data, and you should never use this data 
for transactional storage purposes. 

```csharp
// To Store a data
this._context.ApplicationUtility.CredentialStore.SaveConnectionDetails<Model>(data);
// To retrieve the same data
this._context.ApplicationUtility.CredentialStore.GetConnectionDetails<Object>();
```

## Database Storage

Sometimes you want to share the information between integration points and the data stored through adapter 
you want them as reference data for future transactions. In such cases, Transactional storage comes very handy. 

To deal with Transactional store, you first need to consider two things: 

* Creating the Data objects
* Maintaining data for the objects

### Creating the Data objects

The adapter API requires a model to create an object on transactional storage. Let us take an example on how you can create a data model. 

```csharp
/// <summary>
/// Generate table based on rows defined here
/// </summary>
[Table(Name = "SyncInfo")] // represents Table name
public class SyncInfoDataTable : ObjectBase
{
    [Column(Name = "Id", IsPrimaryKey = true, Type = DbType.String, Length = 100)] //represents columns
    public string Id { get; set; }
    [Column(CanAutoIncrement =true, DefaultValue ="<-Null->",IsNullAllowed =true, Name ="Value", Type = DbType.String)]
    public string ValueProperty{ get; set; }
}
```

The model class represents one single row of a Table. First of all, to define a model, you must Inherit it from `ObjectBase`.

The first thing to look at is the name of the Table. You can see we have tried to create a table named SyncInfo. The TableAttribute is used to annotate a model class with table attributes. 
You can specify TableName and DataLimit for a table. The DataLimit property will ensure that any rows greater than predefined value will automatically delete the rows which are oldest. 

The Properties on the other hand are annotated using `ColumnAttribute`. The Name of the Column needs to be unique for each table and there must be its data type defined. 
You can also specify the DefaultValue for each column, such that if no data is passed in, the property will get a Default value. You can also specify various attributes to the property.

### Maintaining data for the objects

To create or update or even delete the data, you can use the existing APIs.

## File Storage