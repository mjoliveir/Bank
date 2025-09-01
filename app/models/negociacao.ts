export class Negociacao {
  constructor(
    private readonly _data: Date,
    private readonly _quantidade: number,
    private readonly _valor: number
  ) {}
   
  //getter do volume

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data)
    return data
  }  
  
  get quantidade(): number {
    return this._quantidade
  }  
  
  get valor(): number {
    return this._valor
  }
}
