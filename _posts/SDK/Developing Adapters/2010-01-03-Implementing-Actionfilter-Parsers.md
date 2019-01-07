---
title: "Implementing Action filter Parser"
toc: true
tag: developers,reseller
category: "SDK"
menus:
    overviewsdkadapter: 
        icon: fa fa-gg
        weight: 5
        title: "Action-filter Parser"
        identifier: actionfilterparser    
---
Action filters are special hierarchical key-value data store for each integration points which provides functionality to have 
hierarchy and can invoke AppResource methods. An Action filter is an open ended data store which lets the developer
specify a storage to generate Request and Response data structure. 

Generally for SOAP and REST action filter parsers are provided directly for the request parser. Let us now look into an
implementation of ActionFilter parser. 

```csharp
 /// <summary>
    /// Action filter processor for REST
    /// </summary>
    public class GenericRESTFilterCommandProcessor : IFilterCommandProcessor
    {
        private Dictionary<string, object> resources;
        private int count = 0;
        private string url = string.Empty;
        private ReflectionHelper _reflectionHelper;
        private HttpData helperData;
        private bool addResponseMapDataToHeaders;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="httpData"></param>
        public GenericRESTFilterCommandProcessor(ActionFilter filter, HttpData httpData, bool addResponseMapDataToHeaders = false)
        {
            this.CurrentFilter = filter;
            this.resources = new Dictionary<string, object>();
            this.helperData = httpData;
            this.addResponseMapDataToHeaders = addResponseMapDataToHeaders;
        }

        /// <summary>
        /// Gets the <see cref="System.Object"/> with the specified key.
        /// </summary>
        /// <value>
        /// The <see cref="System.Object"/>.
        /// </value>
        /// <param name="key">The key.</param>
        /// <returns>object</returns>
        public object this[string key]
        {
            get
            {
                return this.resources[key];
            }
        }

        /// <summary>
        /// Action filter to be processed
        /// </summary>
        public ActionFilter CurrentFilter { set; get; }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public string PrepareCommand()
        {
            var ParamList = this.CurrentFilter.ActionParameters.Where(e => e.Key.Contains("Resource~")).ToList();
            StringBuilder StrParameters = new StringBuilder();
            StrParameters.Append(this.CurrentFilter.ActionName);
            if (ParamList.Any())
            {
                StrParameters.Append("?");
            }

            ParamList.ForEach(c =>
            {
                GetChild(c, StrParameters);
            });

            if (addResponseMapDataToHeaders)
            {
                this.AssignToHeaderCollection(this.CurrentFilter.ActionParameters);
            }

            string sbs = StrParameters.ToString();
            return sbs;
        }

        private void AssignToHeaderCollection(List<ActionParameter> actionParameters)
        {
            var ParamList = this.CurrentFilter.ActionParameters.Where(e => e.Key.Contains("RMAP~")).ToList();

            foreach (var param in ParamList)
            {
                var actualKey = param.Key.Substring(param.Key.IndexOf('~') + 1);
                var functionName = actualKey.Substring(actualKey.IndexOf('~') + 1, (actualKey.IndexOf('(') - (actualKey.IndexOf('~') + 1)));
                var parameters = this.ReplaceParameterCharaters(actualKey.Substring(actualKey.IndexOf('(') + 1)).Split(',');
                if (functionName == "GetHeaderValue")
                {
                    var specificHeaders = this.helperData.SetSpecificHeaderValue(parameters);
                    foreach (var header in specificHeaders)
                    {
                        if (!this.helperData.HeaderCollection.ContainsKey(header.Key))
                            this.helperData.HeaderCollection.Add(header.Key, header.Value);
                    }
                }
            }
        }

        private string ReplaceParameterCharaters(string v)
        {
            Regex t = new Regex("['\")]");
            return t.Replace(v, "");
        }

        /// <summary>
        /// Gets the http request-response helper object
        /// </summary>
        /// <returns></returns>
        public HttpHelper GetHttpHelper()
        {
            //Code for header value fetch from function
            return new HttpHelper(this.helperData);
        }

        private ReflectionHelper ReflectionHelper
        {
            get
            {
                this._reflectionHelper = this._reflectionHelper ?? new ReflectionHelper();
                return this._reflectionHelper;
            }
        }

        private void GetChild(ActionParameter param, StringBuilder parameters)
        {
            if (string.IsNullOrEmpty(param.Key))
                return;

            #region Changes
            var keyString = param.Key.Substring(param.Key.IndexOf('~') + 1);

            if (count == 0)
                parameters.Append(keyString);
            else
                parameters.Append("&" + keyString);

            string _consuction = "";

            switch (param.Conjunction)
            {
                case "equal":
                    _consuction = "=";
                    break;

                case "not_equal":
                    _consuction = "!=";
                    break;

                case "in":
                    _consuction = "=";
                    break;

                case "not_in":
                    _consuction = "!=";
                    break;

                case "less":
                    _consuction = "<";
                    break;

                case "less_or_equal":
                    _consuction = "<=";
                    break;

                case "greater":
                    _consuction = ">";
                    break;

                case "greater_or_equal":
                    _consuction = "=>";
                    break;

                default:
                    _consuction = "=";
                    break;
            }

            if (param.Values != null)
            {
                List<ActionParameterValue> actionparametervalues = param.Values;
                foreach (ActionParameterValue actionparametervalue in actionparametervalues)
                {
                    if (!actionparametervalue.IsMethod)
                        parameters.Append(_consuction + actionparametervalue.Value);
                    else
                    {
                        parameters.Append(_consuction + this.ReflectionHelper.InvokeMethod(actionparametervalue.AssemblyName, actionparametervalue.Value, actionparametervalue.Parameters));
                    }
                }
            }

            #endregion Changes

            count++;
            if (param.Children != null)
                foreach (ActionParameter child in param.Children)
                    GetChild(child, parameters);
        }
    }
```

The above code will allow to generate the request URL for a REST based endpoint, by invoking the AppResource methods 
directly during parsing. Every action filter processor needs to be implemented from [`IFilterCommandProcessor`](http://isdn.appseconnect.com/html/3DC976C.htm)
which has a [`PrepareCommand`](http://isdn.appseconnect.com/html/2CC1AD31.htm) method which will be called to get an output. For the above code, the output is generated as
URL querystring, but for other custom parsers, you are free to generate a request structure for your application.

You can see, the [`PrepareCommand`](http://isdn.appseconnect.com/html/2CC1AD31.htm) method which lets the adapter developer to generate the 
structure which lets adapter to execute a REST method. 

In case of Action Filters, the platform automatically detects the methods that needs to be executed. So if you see the ActionParameterValue objects,
it automatically detects whether the filter criteria requires a method execution, and if so, you can create the 
parameter by executing the method. 

### Hooking a Custom Processor

By default, [as identified in the adapters](/sdk/Basic-Implementation), we call the [settings.GetCommandProcessor()](http://isdn.appseconnect.com/html/787CAB4C.htm) to get the processor specific to the request. For custom made action filter parsers, you can call 
[`BuildRequest`](http://isdn.appseconnect.com/html/57E775B7.htm) to get an instance of the command processor on your code. 

```csharp

var commandProcessor = this._context.BuildRequest<GenericRESTFilterCommandProcessor>(settings.CurrentActionFilter);
var request = commandProcessor.PrepareCommand();
``` 

The two lines above will let you create an Filter Processor inside your adapter code. 