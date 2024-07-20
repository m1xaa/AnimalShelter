
using AngularWIthASP.Server.Repository.User;

namespace AngularWIthASP.Server.Services.User;

public class UserService : IUserService
{

    private readonly IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    public Task<Models.User> Create(Models.User user)
    {
        return _userRepository.Create(user);
    }

    public Task<Models.User> Login(string username, string password)
    {
        return _userRepository.Login(username, password);
    }

    public Task<IEnumerable<Models.User>> GetAll()
    {
        return _userRepository.GetAll();
    }
}