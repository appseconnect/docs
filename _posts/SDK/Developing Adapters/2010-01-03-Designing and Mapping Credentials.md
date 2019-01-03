---
title: "How to design an interface for Credentials"
toc: true
tag: developers,reseller
category: "SDK"
menus:
    overviewsdkadapter: 
        icon: fa fa-gg
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
a ViewModel. 

Now if we look at the ViewModel, It should inherit from `ObservableObjectGeneric<className>` such that the model
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
object to get the model. You can also use the `GetConnectionDetails<CredentailModel>` to directly get the object. 

Once the object is retrieved, you can use Save method to save the model to the application store.

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

The method `this._applicationUtils.CredentialStore.SaveConnectionDetails` is used to save the data to 
agent storage such that you can get the updated data while the integration points are being executed. 

## Implementing User interface for Cloud Agent

Cloud gives you a dynamic smart form to implement the credentail user interface. The cloud interface is a drag and drop designer which you can 
directly go to the cloud portal to map the user interfaces correctly with that of the adapter code. To do this, you need to 

- Login to cloud portal
- Open the App section and open the particular Application you want to design.
- Open Credential button to open the dynamic UI popup.
- Drag and drop fields on the design pane. You need to mention the property name on the ID of the dynamic field.
![Credential User Interface](/staticfiles/sdk-references/media/credential-user-interface.PNG)
- Once the credential design is created, you can save it for future use. 

When the application is added by the end user, the end user will be provided with a separate pane where he can provide
credentails such that it can connect to the application. 


