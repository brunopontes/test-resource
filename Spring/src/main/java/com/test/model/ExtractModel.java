package com.test.model;

import java.util.List;

import com.google.gson.annotations.SerializedName;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ExtractModel {

    @Builder
    public class Extract {

        @SerializedName("totalControleLancamento")
        public TotalControleLancamento TotalControleLancamento;
        @SerializedName("listaControleLancamento")
        public List<ListaControleLancamento> ListaControleLancamento;
        @SerializedName("indice")
        public int Indice;
        @SerializedName("tamanhoPagina")
        public int TamanhoPagina;
        @SerializedName("totalElements")
        public int TotalElements;
    }

    @Builder
    public class TotalControleLancamento {
        @SerializedName("quantidadeLancamentos")
        public int QuantidadeLancamentos;
        @SerializedName("quantidadeRemessas")
        public int QuantidadeRemessas;
        @SerializedName("valorLancamentos")
        public double ValorLancamentos;
    }

    @Builder
    public class DadosDomicilioBancario {
        @SerializedName("codigoBanco")
        public int CodigoBanco;
        @SerializedName("numeroAgencia")
        public int NumeroAgencia;
        @SerializedName("numeroContaCorrente")
        public String NumeroContaCorrente;
    }

    @Builder
    public class LancamentoContaCorrenteCliente {
        @SerializedName("numeroRemessaBanco")
        public Object NumeroRemessaBanco;
        @SerializedName("nomeSituacaoRemessa")
        public String NomeSituacaoRemessa;
        @SerializedName("dadosDomicilioBancario")
        public DadosDomicilioBancario DadosDomicilioBancario;
        @SerializedName("nomeTipoOperacao")
        public String NomeTipoOperacao;
        @SerializedName("dadosAnaliticoLancamentoFinanceiroCliente")
        public List<Object> DadosAnaliticoLancamentoFinanceiroCliente;
    }

    @Builder
    @ToString
    public class ListaControleLancamento {
        @SerializedName("lancamentoContaCorrenteCliente")
        public LancamentoContaCorrenteCliente LancamentoContaCorrenteCliente;
        @SerializedName("dataEfetivaLancamento")
        public String DataEfetivaLancamento;
        @SerializedName("dataLancamentoContaCorrenteCliente")
        public String DataLancamentoContaCorrenteCliente;
        @SerializedName("numeroEvento")
        public int NumeroEvento;
        @SerializedName("descricaoGrupoPagamento")
        public String DescricaoGrupoPagamento;
        @SerializedName("codigoIdentificadorUnico")
        public String CodigoIdentificadorUnico;
        @SerializedName("nomeBanco")
        public String NomeBanco;
        @SerializedName("quantidadeLancamentoRemessa")
        public int QuantidadeLancamentoRemessa;
        @SerializedName("numeroRaizCnpj")
        public String NumeroRaizCnpj;
        @SerializedName("numeroSufixoCnpj")
        public String NumeroSufixoCnpj;
        @SerializedName("valorLancamentoRemessa")
        public double ValorLancamentoRemessa;
        @SerializedName("dateLancamentoContaCorrenteCliente")
        public Object DateLancamentoContaCorrenteCliente;
        @SerializedName("dateEfetivaLancamento")
        public Object DateEfetivaLancamento;
    }
}