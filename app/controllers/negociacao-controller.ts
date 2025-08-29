import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes;

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao); 
    console.log(this.negociacoes.lista());
    this.limparFormulario();
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
    this.inputData.focus();
  }
}
