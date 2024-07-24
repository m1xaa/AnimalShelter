using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AngularWIthASP.Server.Models;

namespace AngularWIthASP.Server.Repositories
{
    public interface IReviewRepository
    {
        Task<IEnumerable<Review>> GetAll();
        Task<Review> GetById(Guid id);
        Task<Review> Create(Review review);
        Task<Review> Update(Review review);
        Task Delete(Guid id);
    }
}