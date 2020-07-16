import HeroesController from "./Controllers/HeroesController.js";

class App {
  heroesController = new HeroesController();
}

window["app"] = new App();
