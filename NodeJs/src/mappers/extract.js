module.exports = (app) => {
  const View = app.models.view.extract;

  class ExtractMapper {
    static async modelToViewModel(model) {
      try {
        if (!model) return null;

        const view = Object.assign({}, View);

        view.DateLaunch = model.dataLancamentoContaCorrenteCliente;
        view.Description = model.lancamentoContaCorrenteCliente.nomeTipoOperacao;
        view.Number = model.numeroEvento;
        view.Location = model.lancamentoContaCorrenteCliente.nomeSituacaoRemessa;
        view.DateConfirmation = model.dataEfetivaLancamento;
        view.BankName = model.nomeBanco.trim();
        view.BankAgency = model.lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroAgencia;
        view.BankAccount = model.lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroContaCorrente;
        view.BankDetailsComplete = `${model.nomeBanco.trim()} Ag ${model.lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroAgencia} CC ${model.lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroContaCorrente}`;
        view.FinalValue = model.valorLancamentoRemessa;
        view.FinalValueLocal = model.valorLancamentoRemessa.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

        return view;
      } catch (error) {
        throw new Error(`ExtractMapper - ModelToViewModel : ${error}`);
      }
    }

    static async modelsToViewsModel(models) {
      try {
        if (!models) return null;

        const views = [];

        models.listaControleLancamento.forEach(async (model) => {
          const view = await this.modelToViewModel(model);

          views.push(view);
        });

        return views;
      } catch (error) {
        throw new Error(`ExtractMapper - ModelsToViewsModel : ${error}`);
      }
    }
  }

  return ExtractMapper;
};
