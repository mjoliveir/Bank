export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //getter do volume
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data);
        return data;
    }
}
