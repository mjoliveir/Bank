export class Negociacao {
  constructor(
    private readonly _data: Date,
    private readonly quantidade: number,
    private readonly valor: number
  ) {}
   
  //getter do volume

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data)
    return data
  }
}
