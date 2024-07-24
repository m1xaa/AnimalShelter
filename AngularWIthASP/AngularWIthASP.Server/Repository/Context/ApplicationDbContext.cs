

namespace AngularWIthASP.server.Repository.Context;

using AngularWIthASP.Server.Models;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Animal> Animals { get; set; }
    public DbSet<Post> Posts { get; set; }

    public DbSet<Review> Reviews { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Post>()
            .HasOne(p => p.User)
            .WithMany()
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Post>()
            .HasOne(p => p.Animal)
            .WithOne()
            .HasForeignKey<Post>("AnimalId");

        modelBuilder.Entity<Review>()
            .HasOne(r => r.User)
            .WithMany()
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Review>()
            .HasOne(r => r.Post)
            .WithMany()
            .OnDelete(DeleteBehavior.Cascade);
    }
}

