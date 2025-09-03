export abstract class View<T>{ //a classe abstrata imposibilita o usuário de criar instancias dessa classe

  protected elemento: HTMLElement; //protected protege a classe como private mas permite que as filhas acessem seus metodos
  constructor(seletor: string) { 
    this.elemento = document.querySelector(seletor);
  }

    update(model: T) : void{
        const template = this.template(model)
        console.log(template)
        this.elemento.innerHTML = this.template(model)
    }

   abstract template(model: T): string //abstract function, isso obriga a classe que herda essa classe a implementar esse metodo template

}
