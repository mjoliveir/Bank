export class View<T>{

  protected elemento: HTMLElement;
  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  template(model: T): string {
    throw Error('a classe filha deve implementar seu proprio template') 
  }
}
