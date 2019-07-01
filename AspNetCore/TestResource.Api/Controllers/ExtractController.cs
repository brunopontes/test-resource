using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using TestResource.Domain.IApplicationService;
using TestResource.Domain.Model;
using TestResource.Domain.ViewModel;

namespace TestResource.Api.Controllers
{
    [Route("Extract")]
    public class ExtractController : BaseController
    {
        private readonly IExtractApplicationService _application;

        public ExtractController(IExtractApplicationService application)
        {
            _application = application;
        }

        [HttpGet]
        [ProducesResponseType(typeof(BaseReturn<List<ExtractViewModel>>), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(BaseReturn<object>), (int)HttpStatusCode.InternalServerError)]
        public async Task<IActionResult> List()
        {
            var response = new BaseReturn<object>();

            try
            {
                var service = await _application.List();

                response.Data = service.Data;
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Description = ex.Message;
            }

            return HandleResponse(response);
        }
    }
}