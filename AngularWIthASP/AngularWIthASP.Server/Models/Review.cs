namespace AngularWIthASP.Server.Models;

public class Review
{
    public Guid Id { get; set; }
    public string Content { get; set; }
    public User User { get; set; }
    public Post Post { get; set; }

    public Review() {}

    public Review(string content)
    {
        Content = content;
    }

    public Review(Guid id, string content, User user, Post post)
    {
        Id = id;
        Content = content;
        User = user;
        Post = post;
    }
}