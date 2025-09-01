export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    //getter do volume
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data);
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}
