using AngularWIthASP.Server.Models;

namespace AngularWIthASP.Server.DTOs;

public record RegistrationRequest(string Name, string Surname, string Email, string Username, string Password, List<Role> Roles);