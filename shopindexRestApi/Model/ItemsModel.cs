using System;
using Model;

namespace Model
{
    public class ItemsModel
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string? Brand { get; set; }
        public  string? Title { get; set; }
        public string? Price { get; set; }
        public string? DiscountPrice { get; set; }
        public string? PhotoUrl { get; set; }
        public Guid? UserId { get; set; }
        public SignUpUser? SignUpUser { get; set; }
    }
}








// using Model;


// public class ItemsModel
// {
//     public int Id { get; set; }
//     public required string Category { get; set; }
//     public required string Name { get; set; }
//     public required int Price { get; set; }
//     public required int DiscountPrice { get; set; }
//     public required string About { get; set; }
//     public required string PhotoUrl { get; set; }
//     public Guid UserId { get; set; }
//     public SignUpUser? signUpUser{ get; set; }
// }

// // id :
// // 	Catagory :
// // 	Name :
// // 	Price :
// // 	DiscountPrice :
// // 	About :
// // 	PhotoUrl