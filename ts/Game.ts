import { CANVAS, PADDLE, BALL } from "./constants.js";
import Paddle from "./Paddle.js";
import Ball from "./Ball.js";
import AIClass from "./AI.js";

class Game {
  private userPaddle: Paddle;
  private aiPaddle: Paddle;
  private ball: Ball;

  constructor() {
    this.userPaddle = new Paddle(
      PADDLE.WIDTH,
      CANVAS.HEIGHT / 2 - PADDLE.HEIGHT / 2,
      CANVAS.HEIGHT,
      PADDLE.WIDTH,
      PADDLE.HEIGHT,
      PADDLE.SPEED
    );

    this.aiPaddle = new Paddle(
      CANVAS.WIDTH - PADDLE.WIDTH * 2,
      CANVAS.HEIGHT / 2 - PADDLE.HEIGHT / 2,
      CANVAS.HEIGHT,
      PADDLE.WIDTH,
      PADDLE.HEIGHT,
      PADDLE.SPEED
    );

    this.ball = new Ball(
      BALL.RADIUS,
      CANVAS.WIDTH / 2,
      CANVAS.HEIGHT / 2,
      CANVAS.WIDTH,
      CANVAS.HEIGHT,
      BALL.SPEED
    );
  }

  public draw(): void {
    CANVAS.CONTEXT.clearRect(0, 0, CANVAS.WIDTH, CANVAS.HEIGHT);
    this.userPaddle.draw(CANVAS.CONTEXT);
    this.aiPaddle.draw(CANVAS.CONTEXT);
    this.ball.draw(CANVAS.CONTEXT);
  }

  public update(AI: AIClass): boolean {
    const gameOver = this.ball.move(this.userPaddle, this.aiPaddle, AI);
    return gameOver;
  }

  public moveUserPaddle(direction: -1 | 1): void {
    this.userPaddle.move(direction);
  }

  public moveAiPaddle(direction: -1 | 0 | 1): void {
    if (direction === 0) return;
    this.aiPaddle.move(direction);
  }

  public getBall(): Ball {
    return this.ball;
  }

  public getAiPaddle(): Paddle {
    return this.aiPaddle;
  }

  public getUserPaddle(): Paddle {
    return this.userPaddle;
  }

  public reset(): void {
    this.userPaddle = new Paddle(
      PADDLE.WIDTH,
      CANVAS.HEIGHT / 2 - PADDLE.HEIGHT / 2,
      CANVAS.HEIGHT,
      PADDLE.WIDTH,
      PADDLE.HEIGHT,
      PADDLE.SPEED
    );

    this.aiPaddle = new Paddle(
      CANVAS.WIDTH - PADDLE.WIDTH * 2,
      CANVAS.HEIGHT / 2 - PADDLE.HEIGHT / 2,
      CANVAS.HEIGHT,
      PADDLE.WIDTH,
      PADDLE.HEIGHT,
      PADDLE.SPEED
    );

    this.ball = new Ball(
      BALL.RADIUS,
      CANVAS.WIDTH / 2,
      CANVAS.HEIGHT / 2,
      CANVAS.WIDTH,
      CANVAS.HEIGHT,
      BALL.SPEED
    );
  }
}

export default Game;
