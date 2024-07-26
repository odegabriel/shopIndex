
using Dto;
using Entity.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;
using ReturnDto;

public class UserActivities : IsignUp
{
    public ShopIndexContext _context;
    public UserActivities (ShopIndexContext context)
    {
        _context = context;
    }


    //post request SignIn users
    public async Task <object> SignUp (UserDetailDto data)
    {
                try
        {
            SignUpUser signIn = new()
            {
                UserName = data.userName,
                Email = data.Email,
                Password = data.password,
            }; 
            
           await _context.SignUpUsers.AddAsync(signIn);
           await _context.SaveChangesAsync();
            // return "account created";
            // return _context.SignUpUsers.ToList();
            return "user created";
        }
        
        catch (Exception e)
        {
            
            return $"{e.InnerException}";
            
        }

    }

    //post requsuest add Item
   public async Task <object> AddToCart (Guid userId, Guid itemId)
    {

        try
        {
            ItemsModel itemData = new();
            var item = _context.Items.FirstOrDefault(x => x.Id.Equals(itemId));
            // var users = _context.SignUpUsers.ToList();
            if (item != null)
            {
                itemData = new ItemsModel 
            {
                Id = Guid.NewGuid(),
                UserId = userId,
                Brand = item.Brand,
                Title = item.Title,
                Price = item.Price,
                DiscountPrice = item.DiscountPrice,
                PhotoUrl = item.PhotoUrl,
            };
            } 

                await _context.Items.AddAsync(itemData);
                await _context.SaveChangesAsync();
        
        return "item added";
         

        }
        catch (Exception e)
        {
            return e.Message;
            
        }
        
    }

    //delete request remove item
    public string DeleteFromCart (Guid itemId)
    {

        try
         {
                string result = "";
                var item = _context.Items.Find(itemId);
 
        
                if (item == null)
                {
                    result = "";
                }
                else {
                        _context.Items.Remove(item);
                         _context.SaveChanges();
                        result = "deleted" ;
                }
        
         return result;

         }
         catch (Exception e)
         {
            
            return $"{e.Message}";
         }
    }


    public object GetUserItem (Guid id)
    {

        try
        {
      
            var userItems = _context.Items.Where(x => x.UserId == id).ToList();

            return userItems;
        
        }
        catch (Exception e)
        {
            
            return e.Message;
        }
        
        
    }   


    public object GetAllItems ()
    {
        try
        {
            var AllItems = _context.Items.ToList();
            return AllItems;
        }
        catch (Exception e)
        {
            
        return e;
        }
    }

    public object GetItemDetails (Guid id)
    {
        var result = new ItemRDto();
        IEnumerable<ItemsModel> getItems = _context.Items.ToList();
        foreach (var item in getItems)
        {
            if (item.Id.Equals(id))
            {
                result = new()
                        {
                            brand = item.Brand,
                            title = item.Title,
                            Price = item.Price,
                            DiscountPrice = item.DiscountPrice,
                            PhotoUrl = item.PhotoUrl
                            
                        };
            }
        } 
        return result;
    }

    public object UpdateUserProfile( Guid id, UserUpdateDto userDetails )
    {

        try
        {
            var result = "";
            var user = _context.SignUpUsers.FirstOrDefault(x => x.Id == id);
        if (user != null)
        {
             
                user.FirstName = userDetails.firstName;
                user.LastName = userDetails.lastName;
                user.Email = userDetails.email;
                user.PhoneNumber = userDetails.phoneNumber;
                
                _context.SaveChanges();
                result = "user info updated";

        }
        else 
                {
                                result = "user not found";
                }             
                return result;
    
        }
        catch (Exception e)
        {
            
            return e.Message;
        }
        
        // IEnumerable<SignUpUser> User = _context.SignUpUsers.ToList();

        // foreach (var user in User)
        // {
        //     if (user.Id.Equals(id))
        //     {
        //         user.FirstName = userDetails.firtName;
        //         user.LastName = userDetails.lastName;
        //         user.Email = userDetails.email;
        //         user.PhoneNumber = userDetails.phoneNumber;

        //         _context.SaveChanges();
        //     }
        //     result = new(){
        //         Email = user.Email,
        //         FirstName = user.FirstName,
        //         LastName = user.LastName,
        //         PhoneNumber = user.PhoneNumber,
        //     };
        // }

        // return result;

        
    }

    public object GetUserInfo (Guid id)
    {

        var result = new UserUpdateRDto();
        var user = _context.SignUpUsers.FirstOrDefault(e => e.Id == id);
        if (user != null)
        {
            result = new()
                {
                    Email = user.Email,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    PhoneNumber = user.PhoneNumber
                };
        }else {

            result = new UserUpdateRDto();
        }

                

        // IEnumerable<SignUpUser> users = _context.SignUpUsers.ToList();

        // foreach (var user in users)
        // {
        //     if (user.Id.Equals(id))
        //     {
        //         result = new()
        //         {
        //             Email = user.Email,
        //             FirstName = user.FirstName,
        //             LastName = user.LastName,
        //             PhoneNumber = user.PhoneNumber
        //         };
        //     }
        // }

        return result;        
    }




}