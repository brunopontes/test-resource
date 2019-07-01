using Newtonsoft.Json;
using System;
using System.IO;
using System.Threading.Tasks;

namespace TestResource.Domain.Common
{
    public static class Utils
    {
        public static async Task<T> ReadFile<T>(string path, string name)
        {
            try
            {
                var completePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, path, name);

                using (var r = new StreamReader(completePath))
                {
                    var data = await r.ReadToEndAsync();
                    var jsonData = JsonConvert.DeserializeObject<T>(data);

                    return jsonData;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
