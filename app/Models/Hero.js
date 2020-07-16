export default class Hero {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.img = data.img
        this.description = data.description
        this.user = data.user
    }

    get Template() {
        let template = /*html*/ `
        <div class="border border-dark rounded shadow text-center mt-3">
            <h3 class="text-capitalize">${this.name}</h3>
            <img src="${this.img}" alt="">
            <h3>Description: ${this.description}</h3>
            <h5>User: ${this.user}</h5>
            `
        return template
    }

    static generateWildHeroTemplate(name) {
        return `<button class="btn btn-info btn-block btn-lg" onclick="app.heroesController.getHeroesInfo('${name}')">${name}</button>`
    }
}
