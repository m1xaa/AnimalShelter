using AngularWIthASP.server.Repository.Context;
using Microsoft.EntityFrameworkCore;
using MiNET.Utils;

namespace AngularWIthASP.Server.Repository.User;

public class UserRepository : IUserRepository
{
    private readonly ApplicationDbContext _context;

    public UserRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Models.User>> GetAll()
    {
        return await _context.Users.ToListAsync();
    }

    public async Task<Models.User> GetById(Guid id)
    {
        return await _context.Users.FindAsync(id);
    }

    public async Task<Models.User> Create(Models.User user)
    {
        var savedUser = _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return await GetById(user.Id);
    }

    public async Task<Models.User> Update(Models.User user)
    {
        _context.Entry(user).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return await GetById(user.Id);
    }

    public async Task Delete(Guid id)
    {
        var user = await _context.Users.FindAsync(id);
        if (user != null)
        {
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
        }
    }

    public async Task<Models.User> Login(string username, string password)
    {
        return await _context.Users
            .Where(u => u.Username == username && u.Password == password) 
            .FirstOrDefaultAsync();
    }
}
