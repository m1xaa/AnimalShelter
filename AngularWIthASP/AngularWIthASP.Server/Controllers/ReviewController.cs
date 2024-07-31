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
    [Route("api/v1/post")]
    public class ReviewController : ControllerBase
    {

        private readonly IReviewService _reviewService;

        public ReviewController(IReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        [HttpGet("{postId}/reviews")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _reviewService.GetAll());
        }

        [HttpPost("{postId}/reviews")]
        public async Task<IActionResult> Create([FromBody] DTOs.CreateReviewRequest request)
        {
            var review = new Review(request.Content);
            return Ok(await _reviewService.Create(review, request.PostId, request.UserId));
        }

        [HttpDelete("{postId}/reviews/{reviewId}")]
        public async Task<IActionResult> Delete([FromRoute] Guid reviewId)
        {
            await _reviewService.Delete(reviewId);
            return NoContent();
        }
    }
}