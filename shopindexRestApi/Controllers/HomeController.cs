
using Dto;
using Entity.Context;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;


[ApiController]
[Route("[controller]")]
public class HomeController : Controller
{
    public IsignUp _isignUp;

    public IConfiguration _config;
    
        public HomeController(  IsignUp signUp, IConfiguration config )  
    {
        _isignUp = signUp;
        _config = config;
    } 

    // creating new user
    [HttpPost( "/signup" )]
    public IActionResult SIgnUp([FromBody] UserDetailDto userData)
    { 
        return Ok(_isignUp.SignUp(userData));
    } 

   
    [HttpPost("/{id}/{itemsId}")]
    public IActionResult AddToCart( [FromRoute] Guid userId, [FromRoute] Guid itemId)
    {
        return Ok(_isignUp.AddToCart(userId, itemId));
    }

    //delete users item
    [HttpDelete("user/delete/{itemId}")]
    public IActionResult DeletItem ( [FromRoute] Guid itemId)
    {
        
        return Ok(_isignUp.DeleteFromCart(itemId));
    }

    [HttpGet("/{id}/item")]
    public IActionResult GetUsersItem([FromRoute] Guid id)
    {
        return Ok(_isignUp.GetUserItem(id));
    }

    [HttpGet("/")]
    public IActionResult GetAllItems ()
    {
        // var user = User.Claims.FirstOrDefault(e => e.Type == "instruction") ?.Value;
        // if (user == null)
        // {
        //     return BadRequest ("instruction not found");
        // }
        return Ok(_isignUp.GetAllItems());
    }

    //get singls item details
    [HttpGet("/user/{id}")]
    public IActionResult GetItemDetails ( [FromRoute]Guid id)
    {
        return Ok(_isignUp.GetItemDetails(id));
    }

    //update registered user details
    [HttpPost("/profile/{id}")]
    public IActionResult UpdateUserDetails ( [FromRoute] Guid id, [FromBody] UserUpdateDto userUpdate)
    {
        return Ok(_isignUp.UpdateUserProfile(id,userUpdate));
        
    }

    // get user current information 
    [HttpGet("/getUserInfo/{id}")]
    public IActionResult GetUserInfo ([FromRoute] Guid id)
    {
        return Ok(_isignUp.GetUserInfo(id));
    } 
}