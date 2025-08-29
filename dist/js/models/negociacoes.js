export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
        negociacao.data.setDate(12);
    }
    lista() {
        return [...this.negociacoes];
    }
}
