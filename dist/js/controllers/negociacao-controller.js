import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { diasDaSemana } from "../enums/diasDaSemana.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes); // renderiza e atualiza o estado do DOM
    }
    diaUtil(data) {
        if (data.getDay() > diasDaSemana.DOMINGO && data.getDay() < diasDaSemana.SABADO) {
            console.log('o dia é útil');
            return true;
        }
        else {
            console.log('fim de semana');
            return false;
        }
    }
    criaNegociacao() {
        const exp = /-/g; // A string passada pelo construtor deve ter o ano, mês e dia separados por vírgula.
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        console.log("O formulário foi limpo");
        this.inputData.value = "";
        this.inputValor.value = "";
        this.inputQuantidade.value = "";
        this.inputData.focus(); // esse comando volta o foco para o primeiro campo de formulário
    }
    adiciona() {
        const negociacao = this.criaNegociacao(); //chama a função criaNegociacao()
        if (!this.diaUtil(negociacao.data)) {
            this.mensagemView.update("Somente negociações em dias úteis são aceitas.");
        }
        else {
            this.negociacoes.adiciona(negociacao);
            console.log(this.negociacoes.lista()); // mostra a lista na tela
            this.limparFormulario();
            this.atualizaView();
        }
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Sua negociação foi cadastrada com sucesso!!");
    }
}
