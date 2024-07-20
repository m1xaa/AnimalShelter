namespace AngularWIthASP.Server.DTOs;

public record CreatePostRequest(string Specie, int Age, string Condition, Guid UserId);