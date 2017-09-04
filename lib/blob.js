const Util = require("./util");
const MovingObject = require("./moving_object");

const DEFAULTS = {
  COLOR: "#C70039",
  RADIUS: 25,
  SPEED: 4
};

class Blob extends MovingObject {
  constructor(options = {}) {
    options.color = DEFAULTS.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.radius = DEFAULTS.RADIUS;
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
    super(options);
  }

  collideWith(otherObject) {
    return true;
  }
}

module.exports = Blob;
