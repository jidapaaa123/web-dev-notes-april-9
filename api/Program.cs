var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(); // CORS error dealing part 1/2
var app = builder.Build();
app.UseCors( // CORS error dealing part 2/2
    options =>
      options
        .AllowAnyHeader()
        .AllowAnyOrigin()
        .AllowAnyMethod()
);  

var users = new List<User>()
{
    new User("Test User 1", Guid.NewGuid()),
    new User("Other User", Guid.NewGuid()),
};

app.MapGet("/userAccounts", () => users); // this ist the /url used in client for fetch()
app.MapPost("/userAccount", (UserCreationRequest userRequest) => { // ASSUMES the JS file is POSTing properly; C# auto-deserializes JSON body into C# obj
    var newUser = new User(userRequest.UserName, Guid.NewGuid());
    users.Add(newUser);
}); // for POST requests

app.Run();

record User(string UserName, Guid Id);
record UserCreationRequest(string UserName);