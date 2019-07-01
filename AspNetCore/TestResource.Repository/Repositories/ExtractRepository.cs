using System;
using System.Threading.Tasks;
using TestResource.Domain.Common;
using TestResource.Domain.IRepository;
using TestResource.Domain.Model;

namespace TestResource.Repository.Repositories
{
    public class ExtractRepository : IExtractRepository
    {
        private readonly string _path;
        private readonly string _name;

        public ExtractRepository(string path, string name)
        {
            _path = path;
            _name = name;
        }

        public async Task<Extract> List()
        {
            try
            {
                var model = await Utils.ReadFile<Extract>(_path, _name);

                return model;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }
    }
}
