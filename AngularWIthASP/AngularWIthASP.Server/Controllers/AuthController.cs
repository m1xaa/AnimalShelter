using AngularWIthASP.Server.Models;
using AngularWIthASP.Server.Services.User;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using AngularWIthASP.Server.DTOs;
using Microsoft.AspNetCore.Cors;

namespace AngularWIthASP.Server.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class AuthController : ControllerBase
    {

        private readonly IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("register")]
        public async Task<User> Register([FromBody] DTOs.RegistrationRequest request)
        {
            return await _userService.Create(new User(request.Name, request.Surname, request.Email, request.Username,
                request.Password, request.Roles));
        }

        [HttpPost("login")]
        public async Task<User> Login([FromBody] DTOs.LoginRequest request)
        {
            return await _userService.Login(request.Username, request.Password);
        }
    }
}