using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/products")]
public class ProductController:ControllerBase
{
    [HttpGet]
    public ActionResult<Product> GetExProduct()
    {
        Product p = new Product();
        p.ProductName = "Example Product";
        return Ok(p);
    }

}