using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using TestResource.Domain.Model;
using TestResource.Domain.ViewModel;

namespace TestResource.Domain.Mapper
{
    public class ExtractMapper
    {
        public List<ExtractViewModel> ExtractViewModels(Extract models)
        {
            return models?.ListaControleLancamento?.Select(model => new ExtractViewModel
            {
                DateLaunch = model.DataLancamentoContaCorrenteCliente,
                Description = model.LancamentoContaCorrenteCliente.NomeTipoOperacao,
                Number = model.NumeroEvento,
                Location = model.LancamentoContaCorrenteCliente.NomeSituacaoRemessa,
                DateConfirmation = model.DataEfetivaLancamento,
                BankName = model.NomeBanco.Trim(),
                BankAgency = model.LancamentoContaCorrenteCliente.DadosDomicilioBancario.NumeroAgencia,
                BankAccount = model.LancamentoContaCorrenteCliente.DadosDomicilioBancario.NumeroContaCorrente,
                BankDetailsComplete = $"{model.NomeBanco.Trim()} Ag {model.LancamentoContaCorrenteCliente.DadosDomicilioBancario.NumeroAgencia} CC {model.LancamentoContaCorrenteCliente.DadosDomicilioBancario.NumeroContaCorrente}",
                FinalValue = model.ValorLancamentoRemessa,
                FinalValueLocal = model.ValorLancamentoRemessa.ToString("C", CultureInfo.CreateSpecificCulture("pt-BR"))
            })
            .ToList();
        }
    }
}
