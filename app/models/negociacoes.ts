import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
    negociacao.data.setDate(12)
  }

  lista(): Array<Negociacao> {
    return [...this.negociacoes];
  }
}
