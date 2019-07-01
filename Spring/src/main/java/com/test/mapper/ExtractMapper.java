package com.test.mapper;

import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import com.test.model.ExtractModel.Extract;
import com.test.model.ExtractModel.ListaControleLancamento;
import com.test.viewModel.ExtractViewModel;

import org.springframework.stereotype.Service;

@Service
public class ExtractMapper {

    public List<ExtractViewModel> ExtractViewModels(Extract models) {
        List<ExtractViewModel> views = new ArrayList<ExtractViewModel>();

        for (ListaControleLancamento model : models.ListaControleLancamento) {
            ExtractViewModel view = new ExtractViewModel();

            view.DateLaunch = model.DataLancamentoContaCorrenteCliente;
            view.Description = model.LancamentoContaCorrenteCliente.NomeTipoOperacao;
            view.Number = model.NumeroEvento;
            view.Location = model.LancamentoContaCorrenteCliente.NomeSituacaoRemessa;
            view.DateConfirmation = model.DataEfetivaLancamento;
            view.BankName = model.NomeBanco.trim();
            view.BankAgency = model.LancamentoContaCorrenteCliente.DadosDomicilioBancario.NumeroAgencia;
            view.BankAccount = model.LancamentoContaCorrenteCliente.DadosDomicilioBancario.NumeroContaCorrente;
            view.FinalValue = model.ValorLancamentoRemessa;
            view.FinalValueLocal = NumberFormat.getCurrencyInstance(new Locale("pt", "BR"))
                    .format(model.ValorLancamentoRemessa);
            view.BankDetailsComplete = model.NomeBanco.trim() + "Ag "
                    + model.LancamentoContaCorrenteCliente.DadosDomicilioBancario.NumeroAgencia + "CC "
                    + model.LancamentoContaCorrenteCliente.DadosDomicilioBancario.NumeroContaCorrente;

            views.add(view);
        }

        return views;
    }
}