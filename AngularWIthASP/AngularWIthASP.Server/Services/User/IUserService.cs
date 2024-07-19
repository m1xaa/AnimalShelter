namespace AngularWIthASP.Server.Services.User;

public interface IUserService
{
    public Task<Models.User> Login(String  username, String password);

    public Task<Models.User> Create(Models.User user);
}