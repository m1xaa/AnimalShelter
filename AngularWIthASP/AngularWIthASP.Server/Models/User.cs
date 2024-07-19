
using System.Runtime.InteropServices.ComTypes;
using MiNET.Utils;

namespace AngularWIthASP.Server.Models;
public class User
{
    public UUID Id { get; set; }
    public string Name { get; set; }
    public string Surname { get; set; }
    public string Email { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
    public List<Role> Roles { get; set; }

    User()
    {
        Roles = new List<Role>();
    }

    User(string name, string surname, string email, string username, string password, List<Role> roles)
    {
        Name = name;
        Surname = surname;
        Email = email;
        Username = username;
        Password = password;
        Roles = roles;
    }

    User(UUID id, string name, string surname, string email, string username, string password, List<Role> roles)
    {
        Id = id;
        Name = name;
        Surname = surname;
        Email = email;
        Username = username;
        Password = password;
        Roles = roles;
    }
}
