

using Dto;

public interface IsignUp
{
    Task <object> SignUp (UserDetailDto  data);
    Task <object> AddToCart (Guid userId, Guid item);
    string DeleteFromCart (Guid cartId);
    object GetUserItem (Guid id);
    public object GetItemDetails (Guid id);
    public object GetUserInfo (Guid id);
    public object UpdateUserProfile( Guid id, UserUpdateDto userDetails );
    object GetAllItems ();
}