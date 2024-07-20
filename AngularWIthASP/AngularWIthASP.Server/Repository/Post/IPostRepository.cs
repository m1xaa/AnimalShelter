using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AngularWIthASP.Server.Models;

namespace AngularWIthASP.Server.Repositories
{
    public interface IPostRepository
    {
        Task<IEnumerable<Post>> GetAll();
        Task<Post> GetById(Guid id);
        Task<Post> Create(Post post);
        Task<Post> Update(Post post);
        Task Delete(Guid id);
    }
}