---
title: "Storing Transactional Data"
toc: true
tag: developers
category: "SDK"
menus:
    overviewsdkadapter: 
        icon: fa fa-gg
        weight: 7
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

The first thing to look at is the name of the Table. You can see we have tried to create a table named SyncInfo. The [TableAttribute](http://isdn.appseconnect.com/html/D1DCF68E.htm) is used to annotate a model class with table attributes. 
You can specify [Name](http://isdn.appseconnect.com/html/5F039121.htm) and [DataLimit](http://isdn.appseconnect.com/html/53EDA623.htm) for a table. The DataLimit property will ensure that any rows greater than predefined value will automatically delete the rows which are oldest. 

The Properties on the other hand are annotated using [`ColumnAttribute`](http://isdn.appseconnect.com/html/72A02280.htm). The Name of the Column needs to be unique for each table and there must be its data type defined. 
You can also specify the [DefaultValue](http://isdn.appseconnect.com/html/824D69BC.htm) for each column, such that if no data is passed in, the property will get a Default value. You can also specify various attributes to the property.
Here are some of the important properties of ColumnAttribute. 

- [CanAutoIncrement](http://isdn.appseconnect.com/html/BDF860A8.htm) : Allows the property to auto-increment.
- [DefaultValue](http://isdn.appseconnect.com/html/824D69BC.htm) : Specifies the default value of the column when null is passed to it. 
- [IsNullAllowed](http://isdn.appseconnect.com/html/43FDF167.htm) : Checks whether the field allows null. 
- [IsPrimaryKey](http://isdn.appseconnect.com/html/A95EDEAF.htm) : Unique identifier of a particular record. 
- [IsUnique](http://isdn.appseconnect.com/html/9F9E51AB.htm) : Unique value
- [Length](http://isdn.appseconnect.com/html/D88BF61A.htm) : Restricts the number of characters allowed.
- [Type](http://isdn.appseconnect.com/html/D77F5206.htm) : DataType of the field specified as [DbType](https://docs.microsoft.com/en-us/dotnet/api/system.data.dbtype)
- [FractionLength](http://isdn.appseconnect.com/html/D4EAFC00.htm) : Precision for a particular fractional data. 



### Maintaining data for the objects

To create or update or even delete the data, you can use the existing APIs on SDK. Let us look at the code below : 

```csharp
var utils = this._context.ApplicationUtility;
var storagePlugin = utils.TransactionalDataStore.ConnectionManager;
//To create a table
var inputParamAecSyncData = new DatabaseInputParameter<SyncInfoDataTable>(DatabaseOperation.CREATETABLE)
{
  Object = new SyncInfoDataTable()
};
var creationResult = storagePlugin.Execute<DatabaseInputParameter<SyncInfoDataTable>, SyncInfoDataTable>(inputParamAecSyncData);
if(creationResult.Status)
{
    //Successfully created table.
}
```

In the above code, we have executed the transaction to create a table based on a model. We need to ensure that the table is created only once, so it is recommended to CreateTable inside Credential object storage event or
inside `Initialize` block of Adapter. 

Similar to this, you can use any operation based on the object model. For instance, if you require to store a data, you can use the following code : 

```csharp
 var data_syncData = new DatabaseInputParameter<SyncInfoDataTable>(DatabaseOperation.INSERT);
 var syncInfo = new SyncInfoDataTable()
 {
   ValueProperty = "DefaultText"
 };
 var insertResult = this._context.ApplicationUtility.TransactionalDataStore.ConnectionManager.Execute<DatabaseInputParameter<SyncInfoDataTable>, SyncInfoDataTable>(syncInfo);
 if(insertResult.Status)
 {
    // Successfully inserted data
 }
```
Similarly, you can use various operations like Update, Delete, Select, Truncate etc.

To select a data from a particular table, you can specify various filters. Let us look into how to do that. 

```csharp

var data_prodData = new DatabaseInputParameter<AECPRODUCTDATA>(DatabaseOperation.SELECT);
data_prodData.AddFilters(new DatabaseFilter[]
    {
        new DatabaseFilter(System.Data.DbType.String)
        {
            FieldName = fieldName,
            Operator = OperatorType.EQUALS,
            Value = fieldValue
        },
        new DatabaseFilter(System.Data.DbType.String)
        {
            Logical = LogicalOperatorType.AND,
            FieldName = "ConnectionId",
            Operator = OperatorType.EQUALS,
            Value = connectionId,
            GroupStart = true
        },
        new DatabaseFilter(System.Data.DbType.String)
        {
            Logical = LogicalOperatorType.AND,
            FieldName = "ConnectionId",
            Operator = OperatorType.EQUALS,
            Value = reverseConnectionId,
            GroupEnd = true
        },
        new DatabaseFilter(System.Data.DbType.String)
        {
            FieldName = "ObjectType",
            Operator = OperatorType.EQUALS,
            Value = objectName
        }
    });
var productDataSelectionResult = this._context.ApplicationUtility.TransactionalDataStore.ConnectionManager.Execute<DatabaseInputParameter<AECPRODUCTDATA>, AECPRODUCTDATA>(data_prodData);
if (productDataSelectionResult.Status)
{
    var aecSyncDataObject = productDataResult.Value;
     
}
``` 
In the above code, you can see the AECPRODUCTDATA table records are being fetched using multiple filter conditions.
The filter conditions are specified for each columns using object of [`DatabaseFilter`](http://isdn.appseconnect.com/html/32CC8FA8.htm) type and when the Transaction is executed through the Execute method, 
the data is retrieved from the database. 



## File Storage

Even though it is discouraged, but you can still use file system to store isolated storage of files from your adapter. The adapter file system is exposed to an
separate secure location, sandboxed from the external world. The files created in the adapter will be separately located on 
APPSeCONNECT secure location and you can use various functionalities while accessing the files. 

```csharp
this._context.ApplicationUtility.FileStore.WriteString("a.txt", "data");
var strFile = this._context.ApplicationUtility.FileStore.GetFileString("a.txt");
```

The first line of the API will create a file in the file system inside APPSeCONNECT and name it as a.txt, which can 
be retrieved back using GetFileString and the fileName specified at a later stage. In addition to these, the FileStorage utility 
provides various functionalities which will help in accessing file / folder system on local drive as Isolated storage. 
