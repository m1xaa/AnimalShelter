using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AngularWIthASP.Server.Models;

namespace AngularWIthASP.Server.Services
{
    public interface IPostService
    {
        Task<IEnumerable<Post>> GetAll();
        Task<Post> GetById(Guid id);
        Task<Post> Create(Animal animal, Post post);
        Task<Post> Update(Post post);
        Task Delete(Guid id);
    }
}
