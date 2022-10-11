const CANVAS = {
  WIDTH: 800,
  HEIGHT: 600,
  FPS: 60,
  TPS: 60,
  DOCUMENT: <HTMLCanvasElement>document.getElementById("pongCanvas"),
  CONTEXT: <CanvasRenderingContext2D>(
    (<HTMLCanvasElement>document.getElementById("pongCanvas")).getContext("2d")
  ),
};

const PADDLE = {
  WIDTH: 15,
  HEIGHT: 100,
  SPEED: 10,
};

const BALL = {
  RADIUS: 10,
  SPEED: 5,
};

export { CANVAS, PADDLE, BALL };
