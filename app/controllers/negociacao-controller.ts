import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes;
  private negociacoesView = new NegociacoesView('#negociacoesView')
  private mensagemView = new MensagemView('#mensagemView')

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacoesView.update(this.negociacoes) // renderiza e atualiza o estado do DOM
  }

  criaNegociacao(): Negociacao {
    const exp = /-/g; // A string passada pelo construtor deve ter o ano, mês e dia separados por vírgula.
    const date = new Date(this.inputData.value.replace(exp, ","));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }

    limparFormulario(): void {
    console.log("O formulário foi limpo");
    this.inputData.value = "";
    this.inputValor.value = "";
    this.inputQuantidade.value = "";
    this.inputData.focus(); // esse comando volta o foco para o primeiro campo de formulário
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao(); //chama a função criaNegociacao()
    this.negociacoes.adiciona(negociacao); 
    console.log(this.negociacoes.lista()); // mostra a lista na tela
    this.limparFormulario();
    this.negociacoesView.update(this.negociacoes)
    this.mensagemView.update('Sua negociação foi cadastrada com sucesso!!')
  }




}
