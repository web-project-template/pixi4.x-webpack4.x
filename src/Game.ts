export default class Game extends PIXI.Application {

  public static NAME = "game"

  public static NUM = 0

  constructor(config) {
    super(config)
    Game.NAME = "game" + Game.NUM++
  }

  public start2() {
    document.getElementById("pixi_player").appendChild(this.view);
  }
}