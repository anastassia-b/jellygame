const Blob = require("./blob");
const Util = require("./util");

class Game {
  constructor() {
    this.blobs = [];

    this.addBlobs();
  }

  add(object) {
    if (object instanceof Blob) {
      this.blobs.push(object);
    } else {
      throw "unknown type of object";
    }
  }

  addBlobs() {
    for (let i = 0; i < Game.NUM_BLOBS; i++) {
      this.add(new Blob({game: this}));
    }
    console.log(this.blobs);
  }

  allObjects() {
    return [].concat(this.blobs);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.Dim_X, Game.DIM_Y);

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  }

  moveObjects(delta) {
    this.allObjects().forEach((object) => {
      object.move(delta);
    });
  }

  randomPosition() {
    return [
      Game.DIM_X * Math.random(),
      Game.DIM_Y * Math.random()
    ];
  }

  remove(object) {
    if (object instanceof Blob) {
      this.blobs.splice(this.blobs.indexOf(object), 1);
    } else {
      throw "unknown type of object";
    }
  }

  step(delta) {
    this.moveObjects(delta);
  }

  wrap(pos) {
    return [
      Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)
    ];
  }

  checkCollisions() {

  }
}

Game.BG_COLOR = "#000000";
Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.FPS = 32;
Game.NUM_BLOBS = 10;

module.exports = Game;
