namespace TestResource.Domain.Common
{
    public static class Mask
    {
        public static string MaskRunTime(int runtime)
        {
            var ret = runtime == 0
                ? "0,0"
                : runtime.ToString().Length > 3
                ? runtime.ToString("#,###")
                : $"0,{runtime:#,###}";

            return ret;
        }

        public static string MaskPhone(string phone)
        {
            if (phone == null)
            {
                return @"Error";
            }

            switch (phone.Length)
            {
                case 10:
                    return phone.Insert(0, "(").Insert(3, ") ").Insert(9, "-");
                case 11:
                    return phone.Insert(0, "(").Insert(3, ") ").Insert(10, "-");
                default:
                    return phone;
            }
        }

        public static string MaskPostalCode(string postalCode)
        {
            if (postalCode == null)
            {
                return @"Error";
            }

            switch (postalCode.Length)
            {
                case 8:
                    return postalCode.Insert(5, "-");
                default:
                    return postalCode;
            }
        }

        public static string MaskTaxId(string cnpjCpf)
        {
            if (cnpjCpf == null)
            {
                return @"Error";
            }

            switch (cnpjCpf.Length)
            {
                case 11:
                    return cnpjCpf.Insert(3, ".").Insert(7, ".").Insert(11, "-");
                case 14:
                    return cnpjCpf.Insert(2, ".").Insert(6, ".").Insert(10, "/").Insert(15, "-");
                default:
                    return cnpjCpf;
            }
        }
    }
}
