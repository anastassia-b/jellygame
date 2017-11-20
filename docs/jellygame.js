const Game = require("./game");
const GameView = require("./gameview");

import _ from 'lodash';

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  new GameView(game, ctx).start();
});

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Jelly', 'game'], ' ');
  return element;
}

// document.body.appendChild(component());
