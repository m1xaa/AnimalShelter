using AngularWIthASP.Server.Models;
using AngularWIthASP.Server.Services.User;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using AngularWIthASP.Server.DTOs;
using AngularWIthASP.Server.Services;
using Microsoft.AspNetCore.Cors;

namespace AngularWIthASP.Server.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class PostController : ControllerBase
    {

        private readonly IPostService _postService;

        public PostController(IPostService postService)
        {
            _postService = postService;
        }

        [HttpGet()]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _postService.GetAll());
        }

        [HttpPost()]
        public async Task<IActionResult> Create([FromBody] DTOs.CreatePostRequest request)
        {
            var animal = new Animal(request.Specie, request.Age, request.Condition);
            var post = new Post();
            return Ok(await _postService.Create(animal, post, request.UserId));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            await _postService.Delete(id);
            return NoContent(); 
        }
    }
}