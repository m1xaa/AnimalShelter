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
    public class ReviewController : ControllerBase
    {

        private readonly IReviewService _reviewService;

        public ReviewController(IReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        [HttpGet()]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _reviewService.GetAll());
        }

        [HttpPost()]
        public async Task<IActionResult> Create([FromBody] DTOs.CreateReviewRequest request)
        {
            var review = new Review(request.Content);
            return Ok(await _reviewService.Create(review, request.PostId, request.UserId));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            await _reviewService.Delete(id);
            return NoContent();
        }
    }
}