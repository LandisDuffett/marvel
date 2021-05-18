// @ts-ignore
import store from "../store.js";
import _store from "../store.js";
import Hero from "../Models/Hero.js"

// @ts-ignore
const _wildHeroes = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public/characters?apikey=2148bbf76c5acd7c1b486d33517c8d71&limit=100",
  timeout: 3000
})

// @ts-ignore
const _myHeroes = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/LandisDuffett/heroes',
  timeout: 15000
})
class HeroesService {
  constructor() {
    this.getWildHeroes()
    // this.getMyHeroes()
  }

  releaseHero(heroId) {
    _myHeroes.delete(heroId).then((res) => this.getMyHeroes());
  }
  // {
  // res => this.getMyHeroes
  // store.commit("myHeroes", store.State.myHeroes.filter(h => h.id != heroId))
  // }).catch(err => console.error(err))
  // }

  catchHero() {
    _myHeroes.post("", _store.State.activeHeroes).then(res => {
      console.log(res.data);
      this.getMyHeroes()
    }).catch(err => console.error(err))
  }
  getWildHeroes(name) {
    // @ts-ignore
    _wildHeroes.get().then(res => {
      _store.commit("wildHeroes", res.data.data.results.map(rawHeroesData => new Hero(rawHeroesData)))
      console.log(_store.State)
    }).catch(err => console.error(err))
  }

  getHeroesInfo(name) {
    // @ts-ignore

    let heroInfo = _store.State.wildHeroes.find(h => h.name == name)
    _store.commit("activeHeroes", heroInfo)

  }

  getMyHeroes() {
    // @ts-ignore
    _myHeroes.get("").then(res => {
      store.commit("myHeroes", res.data.data.map(rawHeroesData => new Hero(rawHeroesData)))
      console.log(store.State)
    }).catch(err => console.error(err))
  }
}

const service = new HeroesService();
export default service;
