using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AngularWIthASP.server.Repository.Context;
using AngularWIthASP.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularWIthASP.Server.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly ApplicationDbContext _context;

        public ReviewRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Review>> GetAll()
        {
            return await _context.Reviews
                .Include(r => r.Post)
                .Include(r => r.User)
                .ToListAsync();
        }

        public async Task<Review> GetById(Guid id)
        {
            return await _context.Reviews
                .Include(r => r.Post)
                .Include(r => r.User)
                .FirstOrDefaultAsync(r => r.Id == id);
        }

        public async Task<Review> Create(Review review)
        {
            _context.Reviews.Add(review);
            await _context.SaveChangesAsync();
            return review;
        }

        public async Task<Review> Update(Review review)
        {
            _context.Reviews.Update(review);
            await _context.SaveChangesAsync();
            return review;
        }

        public async Task Delete(Guid id)
        {
            var review = await _context.Reviews.FindAsync(id);
            if (review != null)
            {
                _context.Reviews.Remove(review);
                await _context.SaveChangesAsync();
            }
        }
    }
}