namespace ReturnDto;


public class ItemRDto
{
    public Guid userId { get; set; }
    public Guid Id { get; set; }
    public string? brand { get; set; }
    public string? title { get; set; }
    public string? Price { get; set; }
    public string? DiscountPrice { get; set; }
    public string? PhotoUrl { get; set; }
}
