export default class Hero {
    constructor(data) {
        this.id = data._id || data.id
        this.name = data.name
        this.img = data.img || data.thumbnail.path + "." + data.thumbnail.extension
        this.description = data.description || "no description available"
        this.user = data.user
    }

    get Template() {
        let template = /*html*/ `
        <div class="border border-dark rounded shadow text-center mt-3">
            <h3 class="text-capitalize">${this.name}</h3>
            <img class="img-fluid" src="${this.img}" alt="">
            <h3>Description: ${this.description}</h3>
            <div ${this.user ? '' : 'hidden'}>
            <h5 >User: ${this.user}</h5>
            <button class="btn btn-primary rounded shadow" onclick="app.heroesController.releaseHero('${this.id}')">release</button>
            </div>
            <button ${!this.user ? '' : 'hidden'} class="btn btn-primary rounded shadow" onclick="app.heroesController.catchHero()">catch</button></div>
            `
        return template
    }

    get buttonTemplate() {
        return `<button class="btn btn-info btn-block btn-lg" onclick="app.heroesController.getHeroesInfo('${this.name}')">${this.name}</button>`
    }
}
