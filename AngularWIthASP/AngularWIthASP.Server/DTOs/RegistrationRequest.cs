namespace AngularWIthASP.Server.DTOs;

public record LoginRequest(string Name, string Surname, string Email, string Username, string Password);