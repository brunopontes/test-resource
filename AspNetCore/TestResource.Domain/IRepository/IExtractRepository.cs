using System.Threading.Tasks;
using TestResource.Domain.Model;

namespace TestResource.Domain.IRepository
{
    public interface IExtractRepository
    {
        Task<Extract> List();
    }
}
