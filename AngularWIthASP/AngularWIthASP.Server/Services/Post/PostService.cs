using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AngularWIthASP.Server.Models;
using AngularWIthASP.Server.Repositories;
using AngularWIthASP.Server.Repository.User;

namespace AngularWIthASP.Server.Services
{
    public class PostService : IPostService
    {
        private readonly IPostRepository _postRepository;
        private readonly IAnimalRepository _animalRepository;
        private readonly IUserRepository _userRepository;

        public PostService(IPostRepository postRepository, IAnimalRepository animalRepository, IUserRepository userRepository)
        {
            _postRepository = postRepository;
            _animalRepository = animalRepository;
            _userRepository = userRepository;
        }

        public async Task<IEnumerable<Post>> GetAll()
        {
            return await _postRepository.GetAll();
        }

        public async Task<Post> GetById(Guid id)
        {
            return await _postRepository.GetById(id);
        }

        public async Task<Post> Create(Animal animal, Post post, Guid userId)
        {
            var createdAnimal = await _animalRepository.Create(animal);
            post.Animal = createdAnimal;
            post.User = _userRepository.GetById(userId).Result;
            var createdPost = await _postRepository.Create(post);
            return createdPost;
        }

        public async Task<Post> Update(Post post)
        {
            return await _postRepository.Update(post);
        }

        public async Task Delete(Guid id)
        {
            await _postRepository.Delete(id);
        }
    }
}