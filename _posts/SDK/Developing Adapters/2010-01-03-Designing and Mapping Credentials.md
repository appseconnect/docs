---
title: "How to design an interface for Credentials"
toc: true
tag: developers
category: "SDK"
menus:
    overviewsdkadapter: 
        icon: fa fa-gg
        weight: 8
        title: "Designing Credential UI"
        identifier: designadapter    
---
APPSeCONNECT adapter development SDK allows one to implement and create user interface for credentials. In case of OnPremise 
agent, you need to implement the user interface using XAML syntax, while for Cloud interface, a dynamic designer is 
used to implement the credential UI. 

## Pre-requisite for Developing Credentials

Credentails are a set of data that needs to be retrieved from an application User using either an Agent interface
or from cloud interface. For an adapter developer, we highly encourage to create a Model which can hold these 
data together such that you can use these data to execute or authenticate requests made on the application end. 

For example, let us take an example of a Model. 

```csharp
public class CredentialModel
{
    //Todo : Add all your credentials which you want to input from the user for this application.

    public string UserName { get; set; }

    public string ApiPath { get; set; }

    public string ApiToken { get; set; }
}
```
Here in case of the above class, the Model is represented to hold the UserName, APIPath(or base URL), and APIToken. 
For your application, you can make use of any number of data that you might need to authenticate your application. 

Once you have built the model, you can either implement the interface for Cloud Agent or for Local Agent. 

## Implementing User interface for Local Agent

For local agent, you need extensive knowledge of WPF or XAML. You can go to the `ConnectionView.xaml` to implement 
the credential user interface. 

```xml
<Grid Height="328">
    <Grid.RowDefinitions>
        <RowDefinition Height="36*"/>
        <RowDefinition Height="50*"/>
        <RowDefinition Height="50*"/>
        <RowDefinition Height="50*"/>
        <RowDefinition Height="50*"/>
        <RowDefinition Height="50*"/>
        <RowDefinition Height="85*"/>
    </Grid.RowDefinitions>
    <Grid.ColumnDefinitions>
        <ColumnDefinition/>
        <ColumnDefinition />
    </Grid.ColumnDefinitions>

    <Grid.Resources>
        <Style TargetType="Button" x:Key="btnStyle">
            <Setter Property="HorizontalAlignment" Value="Left" />
            <Setter Property="VerticalAlignment" Value="Top" />
            <Setter Property="FontSize" Value="10.667" />
            <Setter Property="FontFamily" Value="Segoe UI Semibold" />
            <Setter Property="HorizontalAlignment" Value="Left" />
        </Style>
    </Grid.Resources>

    <StackPanel Orientation="Vertical"
                Grid.Row="2" Grid.Column="0" Grid.ColumnSpan="2">
        <Label  Content="Username(V2)/X-Auth-Client(V3)" />
        <TextBox Text="{Binding UserName,Mode=TwoWay}"
                ToolTip="Enter username to access Bigcommerce API"/>
    </StackPanel>
    <StackPanel Orientation="Vertical"
            Grid.Row="1" Grid.Column="0" Grid.ColumnSpan="2">
        <Label  Content="API Path" />
        <TextBox 
            Text="{Binding ApiPath,Mode=TwoWay}"  
            ToolTip="Generally this will be your administration site url"/>
    </StackPanel>
    <StackPanel Orientation="Vertical"
                Grid.Row="3" Grid.Column="0" Grid.ColumnSpan="2">
        <Label  Content="API Token(V2)/X-Auth-Token(V3)" />
        <PasswordBox  appseconnect:PasswordHelper.Attach="True" VerticalContentAlignment="Center" 
                    appseconnect:PasswordHelper.Password="{Binding ApiToken,Mode=TwoWay}" 
                    ToolTip="Enter your API password"/>
    </StackPanel>
    <TextBlock Grid.Row="4" Grid.Column="0" Grid.ColumnSpan="2" Text="{Binding ConnectionStatus,Mode=TwoWay}"
            HorizontalAlignment="Center"
            Foreground="{Binding ForeColor}"  />
    <ProgressBar IsIndeterminate="True" 
                        Width="180"
                        MinHeight="10"
                        Foreground="#FF0079C3"
                        VerticalAlignment="Center"
                        Visibility="{Binding ProgressBar}"
                        Grid.Row="5" Grid.ColumnSpan="2"/>

    <Button Grid.Row="6" 
            Grid.Column="0"  
            Content="Validate" 
            Command="{Binding ValidateCommand}" Width="100" Height="20" Margin="57,0,0,0" Style="{StaticResource WindowButtonStyle}"/>
    <Button Grid.Row="6" 
            Grid.Column="1"  
            Content="Save" 
            Command="{Binding SaveCommand}" Width="100" Height="20" Margin="57,0,0,0" Style="{StaticResource WindowButtonStyle}"/>
</Grid>

```

In the above user interface, we have created a TextBox to take `APIPath`, a `PasswordBox` to take `APIToken` (APIToken will be hidden to the user while it is being typed on screen) and a
`TextBox` to hold `UserName`. There are few other UI elements too viz, a ProgressBar and some buttons. These objects are bound using 
a ViewModel.  To implement the pluggability of the User Interface to APPSeCONNECT, go to the code-behind of the XAML file and 
open the `xaml.cs` file and implement the class from [`IPageView`](http://isdn.appseconnect.com/html/84796C33.htm).
The interface specifies one property [`PageTitle`](http://isdn.appseconnect.com/html/9FD97302.htm) and a method [`Initialize`](http://isdn.appseconnect.com/html/C8199D2.htm). The PageTitle method is used to specify a 
caption for the credential User interface, and the Initilize is called whenever the UI is loaded. 

```csharp
public partial class ConnectionView : System.Windows.Controls.UserControl, IPageView
{
    ConnectionViewModel viewModel = null;
    public ConnectionView()
    {
        InitializeComponent();
    }

    public string PageTitle
    {
        get 
        {
            return "My Sample Application"; 
        }
    }

    public void Initialize(ApplicationUtil applicationUtility)
    {
        viewModel = viewModel ?? new ConnectionViewModel();

        viewModel.Initialize(applicationUtility);

        //This will set the current page datacontext.
        this.DataContext = viewModel;
    }
}
```
In the above code, you can see the ConnectView is the class, inherited from UserControl for the User Interface. You need to also implement the class from IPageView 
from APPSeCONNECT SDK, such that you get the pluggability of the class to APPSeCONNECT agent. Each interface binds to a ViewModel. Here the ViewModel is created inside the Initialize method 
and the DataContext is set inside the method. The Initialize also receives an [`ApplicationUtil`](http://isdn.appseconnect.com/html/3B3DFBC7.htm) object which can be used to perform 
various utilities on the SDK. 

Now if we look at the ViewModel, It should inherit from [`ObservableObjectGeneric<className>`](http://isdn.appseconnect.com/html/73742F9.htm) such that the model
could be correctly hooked to the on-premise agent.

The implementation of properties inside the class would look like : 

```csharp
public string ApiPath
{
    get { return this._credentialInfo.ApiPath; }
    set
    {
        if (this._credentialInfo.ApiPath != value)
        {
            this._credentialInfo.ApiPath = value;
            OnPropertyChanged("ApiPath");
        }
    }
}

public string ApiToken
{
    get { return this._credentialInfo.ApiToken; }
    set
    {
        if (this._credentialInfo.ApiToken != value)
        {
            this._credentialInfo.ApiToken = value;
            OnPropertyChanged("ApiToken");
        }
    }
}

public string UserName
{
    get { return this._credentialInfo.UserName; }
    set
    {
        if(this._credentialInfo.UserName != value)
        {
            this._credentialInfo.UserName = value;
            OnPropertyChanged("UserName");
        }
    }
}
```

You can see these methods will hold the data from the model class. The _credentailInfo object represents the 
model class which could be retrieved from the method `Initialize` for this class. 

```csharp

internal void Initialize(ApplicationUtil applicationUtility)
{
    this._applicationUtils = applicationUtility;
    var returnDetails = applicationUtility.CredentialStore.GetConnectionDetails();
    _credentialInfo = ObjectUtils.JsonDeserialize<CredentialModel>(returnDetails.Value);
    if (_credentialInfo == null)
        this._credentialInfo = new CredentialModel();

}
```

As here in the above code, we have intentionally used `CredentialStore.GetConnectionDetails` and then Deserialized the 
object to get the model. You can also use the [`GetConnectionDetails<CredentailModel>`](http://isdn.appseconnect.com/html/DFE5F9E8.htm) to directly get the object. 

Once the object is retrieved, you can use [`SaveConnectionDetails`](http://isdn.appseconnect.com/html/45B7DA82.htm) method to save the model to the application store.

```csharp
 public ICommand SaveCommand
{
    get 
    { 
        this._saveCommand = _saveCommand ?? new RelayCommand(p => Save(), null, false);
        return this._saveCommand;
    }
}
private void Save()
{
    this._applicationUtils.CredentialStore.SaveConnectionDetails<CredentialModel>(this._credentialInfo);
}

```

The method [`this._applicationUtils.CredentialStore.SaveConnectionDetails`](http://isdn.appseconnect.com/html/45B7DA82.htm) is used to save the data to 
agent storage such that you can get the updated data while the integration points are being executed. 

**NOTE: The APPSeCONNECT SDK always store the information by serializing the object to json representation. So you should specify 
default constructor on the model class always and also if you see the default serialization is giving any issue, you can also store the credential by 
serializing yourself****


## Implementing User interface for Cloud Agent

Cloud gives you a dynamic smart form to implement the credentail user interface. The cloud interface is a drag and drop designer which you can 
directly go to the cloud portal to map the user interfaces correctly with that of the adapter code. To do this, you need to 

- Login to cloud portal
- Open the App section and open the particular Application you want to design.
- Open Credential button to open the dynamic UI popup.
- Drag and drop fields on the design pane. You need to mention the property name on the ID of the dynamic field.  
![Credential User Interface](/staticfiles/sdk-references/media/credential-user-interface.png)
- Once the credential design is created, you can save it for future use. 

When the application is added by the end user, the end user will be provided with a separate pane where he can provide
credentails such that it can connect to the application. 

## Implementing Cloud Credential functionalities

When you deal with cloud interface, you cannot call a native method directly. So as to hook the interfacing of cloud interface 
with the adapter, you need to a special interface `ICredential` which will allow to develop the interfacing of credentials from cloud interface. 

##### Important methods 

* `Validate(string configurationData)` : This method need to return success to indicate the configurationData is valid and can successfully connect to the destination application.
* `PartialValidate(IDictionary<string, string> resource)` : This method is used based on tokenized implementation of Partial data required by the credential screen.

Let us consider the code below : 
```csharp
public ReturnMessage<IDictionary<string, string>> PartialValidate(IDictionary<string, string> resource)
        {
            var result = new ReturnMessage<IDictionary<string, string>>();

            try
            {
                if (resource != null)
                {
                    var credentialInfo = resource["ConfigData"];
                    if (!string.IsNullOrWhiteSpace(credentialInfo))
                    {
                        this.credentialInfo = ObjectUtils.JsonDeserialize<CredentialModel>(credentialInfo);
                        var step = resource["Step"];
                        int stepValue = 0;
                        if (!string.IsNullOrWhiteSpace(step))
                            int.TryParse(step, out stepValue);
                        if (stepValue == 0)
                        {
                            string authorizationUrl = string.Concat(this.credentialInfo.BaseUrl.Trim(), "oauth/authorize.php?response_type=code&client_id=", this.credentialInfo.ClientID.Trim(), "&scope=employee:all");
                            resource["RequestUrl"] = authorizationUrl;
                            resource["OpenBrowser"] = "true";
                            resource["Step"] = (++stepValue).ToString();
                            resource["CallBack"] = this.credentialInfo.RedirectUrl;
                            resource["ConfigData"] = ObjectUtils.JsonSerializer<CredentialModel>(this.credentialInfo);
                            result.SetSuccess("Success", resource);
                        }
                        else if (stepValue == 1)
                        {
                            var responseUrl = resource["ResponseUrl"];
                            if (!string.IsNullOrWhiteSpace(responseUrl))
                            {
                                string[] urlParts = responseUrl.Split('/');

                                foreach (string urlsPart in urlParts)
                                {
                                    if (urlsPart.Contains("code"))
                                    {
                                        this.tempToken = urlsPart.Split('=')[1];
                                    }
                                }
                                var validateResult = this.ValidateToken();
                                resource["OpenBrowser"] = "false";
                                resource["ConfigData"] = ObjectUtils.JsonSerializer<CredentialModel>(this.credentialInfo);
                                if (validateResult.Status)
                                    result.SetSuccess(validateResult.Message, resource);
                                else
                                    result.SetError(validateResult.Message, resource);
                            }
                            else
                                result.SetError("Response url not received", resource);
                        }
                    }
                    else
                        result.SetError("Configuration not found", resource);
                }
                else
                {
                    result.SetError("Resource Dictionary is null");
                }
            }
            catch (Exception ex)
            {
                result.SetError(ex.ToString(), resource);
            }
            return result;
        }
		
```
The PartialValidate receives a Dictionary object, which is passed to create a contract between the cloud interface and the adapter.  When the object is passed with certain values, the cloud interface does certain task automatically. Let us look at some of the predefined properties. 

|PropertyName|Description|
|---|------|
|ConfigData|While doing conversation from cloud interface, this property provides the credentials that are provided to the user. You generally make use of this properties to do the rest of the calls.|
|OpenBrowser|This property allows the user to open a browser using an URL provided from the adapter|
|CallBack|Callback ensures the url which will close the browser. When the callback is received, it will be put in `ResponseUrl` property.|
|ResponseUrl|It is the url in the browser for which callback is received.|

Here in the method we have also used a `Step` property to store intermediate steps during this partial validation. You can use any dynamic property inside these calls on the context to send and receive intermediate values. 

The validate method on the other hand is a stateless method which receives the complete credential to check and validate whether the authentication is successful. We use a small API call to do the actual validation inside this method. For example, if you have a dummy API to return server time for an authenticatied user, you might want to call this API to see whether the call is successful or not. 

```csharp
public ReturnMessage<bool> Validate(string configurationData)
        {
            var result = new ReturnMessage<bool>();

            try
            {
                this._credentialInfo = ObjectUtils.JsonDeserialize<CredentialModel>(configurationData);
                if (this._credentialInfo != null)
                {
                    //ToDo: Call an API to see if _credentialInfo is valid.  
                    result.SetSuccess("Validation successful");
                }
                else
                {
                    result.SetError("Credential is not valid.");
                }
            }
            catch (Exception e)
            {
                result.SetError(e.ToString());
            }

            return result;
        }
```
Here you should check the validity of the credential and return success or failure respectively. 
