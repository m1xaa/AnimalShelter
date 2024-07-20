using System.ComponentModel.DataAnnotations;

namespace AngularWIthASP.Server.Models;
public class Animal
{
    [Key]
    public Guid Id { get; set; }
    public string Specie { get; set; }
    public int Age { get; set; }
    public string Condition { get; set; }
    
    public Animal() {}

    public Animal(string specie, int age, string condition)
    {
        Specie = specie;
        Age = age;
        Condition = condition;
    }

    public Animal(Guid id, string specie, int age, string condition)
    {
        Id = id;
        Specie = specie;
        Age = age;
        Condition = condition;
    }
}