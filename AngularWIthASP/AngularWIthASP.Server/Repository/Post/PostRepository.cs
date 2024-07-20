using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AngularWIthASP.server.Repository.Context;
using AngularWIthASP.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularWIthASP.Server.Repositories
{
    public class PostRepository : IPostRepository
    {
        private readonly ApplicationDbContext _context;

        public PostRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Post>> GetAll()
        {
            return await _context.Posts
                .Include(p => p.Animal)
                .Include(p => p.User)
                .ToListAsync();
        }

        public async Task<Post> GetById(Guid id)
        {
            return await _context.Posts
                .Include(p => p.Animal)
                .Include(p => p.User)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<Post> Create(Post post)
        {
            _context.Posts.Add(post);
            await _context.SaveChangesAsync();
            return post;
        }

        public async Task<Post> Update(Post post)
        {
            _context.Posts.Update(post);
            await _context.SaveChangesAsync();
            return post;
        }

        public async Task Delete(Guid id)
        {
            var post = await _context.Posts.FindAsync(id);
            if (post != null)
            {
                _context.Posts.Remove(post);
                await _context.SaveChangesAsync();
            }
        }
    }
}
