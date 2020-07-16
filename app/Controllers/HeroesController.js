import _heroesService from "../Services/HeroesService.js";
import Hero from "../Models/Hero.js";
import _store from "../store.js";


//Private
function _drawWild() {
  let template = ""
  _store.State.wildHeroes.forEach(hero => template += hero.buttonTemplate)
  document.getElementById("wild-heroes").innerHTML = template
}

function _drawMyHero() {
  let template = ""
  _store.State.myHeroes.forEach(hero => template += hero.Template)
  document.getElementById("my-heroes").innerHTML = template
}

function _drawActiveHero() {
  document.getElementById("active-heroes").innerHTML = _store.State.activeHeroes.Template
}

//Public
export default class HeroesController {
  constructor() {
    _store.subscribe("wildHeroes", _drawWild);
    _store.subscribe("activeHeroes", _drawActiveHero);
    _store.subscribe("myHeroes", _drawMyHero);
  }
  getHeroesInfo(name) {
    _heroesService.getHeroesInfo(name)
  }

  catchHero() {
    _heroesService.catchHero()
  }

  releaseHero(heroId) {
    _heroesService.releaseHero(heroId)
  }
}
