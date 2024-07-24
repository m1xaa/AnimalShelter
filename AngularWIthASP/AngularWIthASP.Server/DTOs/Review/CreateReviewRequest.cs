namespace AngularWIthASP.Server.DTOs;

public record CreateReviewRequest(string Content, Guid PostId, Guid UserId);