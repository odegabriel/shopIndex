using System;
using System.Collections.Generic;

namespace Model
{
    public class SignUpUser
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public required string UserName { get; set; } 
        public required string Email { get; set; } 
        public required string Password { get; set; }
        public  string? FirstName {get; set;} 
        public string? LastName {get; set;} 
        public string? PhoneNumber {get; set;}  
        public ICollection<ItemsModel>? Items { get; set; } = new List<ItemsModel>();
    }
}




// namespace Model;
// public class SignUpUser 
// {
//     public Guid Id { get; set; }
//     public  string? UserName { get; set;}
//     public  string? Email { get; set;}
//     public string? Password {get; set;} 
//     public ICollection<ItemsModel> Items{ get; set; } = new List<ItemsModel>();
  
// }

