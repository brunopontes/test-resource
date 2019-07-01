namespace TestResource.Domain.Model
{
    public class BaseReturn<T>
    {
        public BaseReturn()
        {
            Success = true;
            Description = null;
            Data = default(T);
        }

        public bool Success { get; set; }

        public string Description { get; set; }

        public T Data { get; set; }
    }
}
