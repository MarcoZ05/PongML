import { CANVAS } from "./constants.js";
import Game from "./Game.js";
import KeyHandler from "./KeyHandler.js";
import AIClass from "./AI.js";

// set canvas width and height
CANVAS.DOCUMENT.width = CANVAS.WIDTH;
CANVAS.DOCUMENT.height = CANVAS.HEIGHT;

// initialize game
const game = new Game();

// initialize AI
const AI = new AIClass();

// add event listeners
const keyHandler = new KeyHandler();

// fps rendering loop
const renderLoop = () => {
  game.draw();
  setTimeout(() => {
    requestAnimationFrame(renderLoop);
  }, 1000 / CANVAS.FPS);
};

// tps update loop
const updateLoop = () => {
  // game over check
  if (game.update(AI)) {
    if (game.getBall().x < 0)
      AI.good(game.getBall(), game.getAiPaddle(), game.getUserPaddle());
    game.reset();
  }

  // user paddle movement
  if (keyHandler.isKeyDown("w")) game.moveUserPaddle(-1);
  if (keyHandler.isKeyDown("s")) game.moveUserPaddle(1);
  if (keyHandler.isKeyDown("escape")) game.reset();

  // ai paddle movement
  const aiDirection = AI.getDirection(
    game.getBall(),
    game.getAiPaddle(),
    game.getUserPaddle()
  );
  game.moveAiPaddle(aiDirection);

  setTimeout(() => {
    requestAnimationFrame(updateLoop);
  }, 1000 / CANVAS.TPS);
};

// start game
renderLoop();
updateLoop();
