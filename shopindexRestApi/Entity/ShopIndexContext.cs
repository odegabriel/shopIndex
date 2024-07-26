using Microsoft.EntityFrameworkCore;
using Model;

namespace Entity.Context
{
    public class ShopIndexContext : DbContext
    {
        public ShopIndexContext(DbContextOptions<ShopIndexContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SignUpUser>().HasKey(x => x.Id);
            modelBuilder.Entity<ItemsModel>().HasKey(x => x.Id);

            modelBuilder.Entity<SignUpUser>()
                .HasMany(u => u.Items)
                .WithOne(i => i.SignUpUser)
                .HasForeignKey(i => i.UserId);
        }

        public DbSet<SignUpUser> SignUpUsers { get; set; }
        public DbSet<ItemsModel> Items { get; set; }
    }
}
















// using Microsoft.EntityFrameworkCore;
// using Model;
// namespace Entity.Context;

// public class ShopIndexContext(DbContextOptions<ShopIndexContext> options) : DbContext(options)
// {
  

//   public  void OnModelCreation (ModelBuilder modelBuilder)
//     {
//         modelBuilder.Entity<SignUpUser>()
//                                         .HasMany(a => a.Items)
//                                         .WithOne(a => a.signUpUser)
//                                         .HasForeignKey(a => a.UserId);
                                        
//     }

//         public  void OnModelCreation (ModelBuilder modelBuilder)
//     {
//         modelBuilder.Entity<SignUpUser>().HasKey( x => x.Id );
//     }
    
//     public DbSet<SignUpUser> signUpUsers {get; set;} 
//     public DbSet<ItemsModel> items {get; set;}
    
// }

