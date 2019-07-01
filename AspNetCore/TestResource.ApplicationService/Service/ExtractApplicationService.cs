using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TestResource.Domain.IApplicationService;
using TestResource.Domain.IRepository;
using TestResource.Domain.Mapper;
using TestResource.Domain.Model;
using TestResource.Domain.ViewModel;

namespace TestResource.ApplicationService.Service
{
    public class ExtractApplicationService : IExtractApplicationService
    {
        private readonly IExtractRepository _repository;
        private readonly ExtractMapper _mapper;

        public ExtractApplicationService(IExtractRepository repository, ExtractMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<BaseReturn<List<ExtractViewModel>>> List()
        {
            var response = new BaseReturn<List<ExtractViewModel>>();

            try
            {
                var model = await _repository.List();

                var viewModels = _mapper.ExtractViewModels(model);

                response.Data = viewModels;
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Description = ex.Message;
            }

            return response;
        }
    }
}
