using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AngularWIthASP.Server.Models;

namespace AngularWIthASP.Server.Services
{
    public interface IReviewService
    {
        Task<IEnumerable<Review>> GetAll();
        Task<Review> GetById(Guid id);
        Task<Review> Create(Review review, Guid postId, Guid userId);
        Task<Review> Update(Review review);
        Task Delete(Guid id);
    }
}