using System.Collections.Generic;

namespace TestResource.Domain.Model
{
    public class Extract
    {
        public TotalControleLancamento TotalControleLancamento { get; set; }
        public List<ListaControleLancamento> ListaControleLancamento { get; set; }
        public int Indice { get; set; }
        public int TamanhoPagina { get; set; }
        public int TotalElements { get; set; }
    }

    public class TotalControleLancamento
    {
        public int QuantidadeLancamentos { get; set; }
        public int QuantidadeRemessas { get; set; }
        public double ValorLancamentos { get; set; }
    }

    public class DadosDomicilioBancario
    {
        public int CodigoBanco { get; set; }
        public int NumeroAgencia { get; set; }
        public string NumeroContaCorrente { get; set; }
    }

    public class LancamentoContaCorrenteCliente
    {
        public object NumeroRemessaBanco { get; set; }
        public string NomeSituacaoRemessa { get; set; }
        public DadosDomicilioBancario DadosDomicilioBancario { get; set; }
        public string NomeTipoOperacao { get; set; }
        public List<object> DadosAnaliticoLancamentoFinanceiroCliente { get; set; }
    }

    public class ListaControleLancamento
    {
        public LancamentoContaCorrenteCliente LancamentoContaCorrenteCliente { get; set; }
        public string DataEfetivaLancamento { get; set; }
        public string DataLancamentoContaCorrenteCliente { get; set; }
        public int NumeroEvento { get; set; }
        public string DescricaoGrupoPagamento { get; set; }
        public string CodigoIdentificadorUnico { get; set; }
        public string NomeBanco { get; set; }
        public int QuantidadeLancamentoRemessa { get; set; }
        public string NumeroRaizCnpj { get; set; }
        public string NumeroSufixoCnpj { get; set; }
        public double ValorLancamentoRemessa { get; set; }
        public object DateLancamentoContaCorrenteCliente { get; set; }
        public object DateEfetivaLancamento { get; set; }
    }
}