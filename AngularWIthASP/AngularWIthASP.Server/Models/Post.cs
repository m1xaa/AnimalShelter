using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices.JavaScript;

namespace AngularWIthASP.Server.Models;
public class Post
{
    [Key]
    public Guid Id { get; set; }
    public Animal Animal { get; set; }
    public User User { get; set; }
    public DateOnly Created { get; set; }

    public Post()
    {
        Created = DateOnly.FromDateTime(DateTime.Now);
    }

    public Post(Animal animal, User user, DateOnly created)
    {
        Animal = animal;
        User = user;
        Created = created;
    }

    public Post(Guid id, Animal animal, User user, DateOnly created)
    {
        Id = id;
        Animal = animal;
        User = user;
        Created = created;
    }
}