class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.player = this.game.addPlayer();
  }

  bindKeyHandlers() {
    const player = this.player;

    Object.keys(GameView.MOVES).forEach((k) => {
      let move = GameView.MOVES[k];
      key(k, () => { player.power(move); });
    });

  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }
}

GameView.MOVES = {
  "w": [ 0, -1],
  "a": [-1,  0],
  "s": [ 0,  1],
  "d": [ 1,  0],
  "up": [ 0, -1],
  "left": [-1,  0],
  "down": [ 0,  1],
  "right": [ 1,  0]
};

module.exports = GameView;
