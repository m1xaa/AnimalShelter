using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AngularWIthASP.Server.Models;
using AngularWIthASP.Server.Repositories;
using AngularWIthASP.Server.Repository.User;

namespace AngularWIthASP.Server.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IReviewRepository _reviewRepository;
        private readonly IPostRepository _postRepository;
        private readonly IUserRepository _userRepository;

        public ReviewService(IReviewRepository reviewRepository, IPostRepository postRepository, IUserRepository userRepository)
        {
            _reviewRepository = reviewRepository;
            _postRepository = postRepository;
            _userRepository = userRepository;
        }

        public async Task<IEnumerable<Review>> GetAll()
        {
            return await _reviewRepository.GetAll();
        }

        public async Task<Review> GetById(Guid id)
        {
            return await _reviewRepository.GetById(id);
        }

        public async Task<Review> Create(Review review, Guid postId, Guid userId)
        {
            var user = _userRepository.GetById(userId).Result;
            var post = _postRepository.GetById(postId).Result;
            review.User = user;
            review.Post = post;
            var createdReview = _reviewRepository.Create(review);
            return await createdReview;
        }

        public async Task<Review> Update(Review review)
        {
            return await _reviewRepository.Update(review);
        }

        public async Task Delete(Guid id)
        {
            await _reviewRepository.Delete(id);
        }
    }
}