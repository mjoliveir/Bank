export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        throw Error('a classe filha deve implementar seu proprio template');
    }
}
