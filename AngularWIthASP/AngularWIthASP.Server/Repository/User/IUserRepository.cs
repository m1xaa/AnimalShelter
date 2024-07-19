using MiNET.Utils;

namespace AngularWIthASP.Server.Repository.User;

public interface IUserRepository
{
    Task<IEnumerable<Models.User>> GetAll();
    Task<Models.User> GetById(Guid id);
    Task<Models.User> Create(Models.User user);
    Task<Models.User> Update(Models.User user);
    Task Delete(Guid id);

    Task<Models.User> Login(string username, string password);
}