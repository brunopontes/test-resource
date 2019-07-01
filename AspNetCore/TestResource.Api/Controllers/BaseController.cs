using Microsoft.AspNetCore.Mvc;
using System;
using TestResource.Domain.Model;

namespace TestResource.Api.Controllers
{
    [Produces("application/json")]
    public class BaseController : ControllerBase
    {
        public IActionResult HandleResponse(BaseReturn<object> result)
        {
            try
            {
                return Ok(new
                {
                    success = result.Success,
                    data = result.Data,
                    description = result.Description
                });
            }
            catch (Exception)
            {
                return BadRequest(new
                {
                    success = false,
                    data = result,
                    description = "Ocorreu uma falha interna no servidor."
                });
            }
        }
    }
}