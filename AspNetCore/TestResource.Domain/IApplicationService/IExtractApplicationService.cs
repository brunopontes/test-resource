using System.Collections.Generic;
using System.Threading.Tasks;
using TestResource.Domain.Model;
using TestResource.Domain.ViewModel;

namespace TestResource.Domain.IApplicationService
{
    public interface IExtractApplicationService
    {
        Task<BaseReturn<List<ExtractViewModel>>> List();
    }
}
