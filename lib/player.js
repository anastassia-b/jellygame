const MovingObject = require("./moving_object");
const Util = require("./util");

function randomColor() {
  const hexDigits = "0123456789ABCDEF";

  let color = "#";
  for (let i = 0; i < 6; i ++) {
    color += hexDigits[Math.floor((Math.random() * 16))];
  }

  return color;
}

class Player extends MovingObject {
  constructor(options) {
    options.radius = Player.RADIUS;
    options.vel = options.vel || [0, 0];
    options.color = options.color || randomColor();
    super(options);
  }

  relocate() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  }
}

Player.RADIUS = 15;
module.exports = Player;
