using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
namespace ReturnDto;
using Entity.Context;
using Dto;
using Model;
using Microsoft.AspNetCore.Mvc;


[ApiController]
[Route("[controller]")]
public class LoginAndJwtActivities : Controller
{
    public ShopIndexContext _context;
    public IConfiguration _config;
    public  LoginAndJwtActivities (ShopIndexContext context, IConfiguration config)
    {
        _config = config;
        _context = context;
    }

    [HttpPost("/login")]
    public object LogIn (SignInDto users)
    {
        
        try
        {
            
        // UserRDto result = new (); 
      
        var user = _context.SignUpUsers.FirstOrDefault(u => u.Password == users.password && u.Email == users.email);
  
        if (user == null)
        {
            return Unauthorized();
        }
         var token = GenerateJwtToken(user);

        return Ok(new 
        { 
            token,
            user
        });
        }
        catch (Exception  )
        {
            return "erre";       
        }
        
    }


 public string GenerateJwtToken(SignUpUser user)
    {
        try
        {
            var jwtKey = _config["Jwt:Key"];

            if (string.IsNullOrEmpty(jwtKey))
            {
                throw new InvalidOperationException("jwtKey is not configured.");
            }

        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, user.Email),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };

        var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            audience: _config["Jwt:Audience"],
            claims: claims,
            expires: DateTime.Now.AddHours(1),
            signingCredentials: credentials);

        return new JwtSecurityTokenHandler().WriteToken(token);    
        }
        catch (Exception e)
        {
            return e.Message;
            
        }
        
    }

}


    // private string GenerateJwtToken()
    // {
    //     var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
    //     var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

    //     var token = new JwtSecurityToken(
    //         issuer: _config["Jwt:Issuer"],
    //         audience: _config["Jwt:Audience"],
    //         claims: new[]
    //         {
    //             new Claim(ClaimTypes.Name, "testuser")
    //         },
    //         expires: DateTime.Now.AddHours(1),
    //         signingCredentials: credentials);

    //     return new JwtSecurityTokenHandler().WriteToken(token);
    // }
