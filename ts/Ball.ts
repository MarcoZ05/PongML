import Paddle from "./Paddle";
import AIClass from "./AI";

class Ball {
  radius: number;
  x: number;
  y: number;
  deltaX: number;
  deltaY: number;
  maxX: number;
  maxY: number;
  speed: number;
  constructor(
    radius: number,
    x: number,
    y: number,
    maxX: number,
    maxY: number,
    speed: number
  ) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.deltaX = 1;
    this.deltaY = 0;
    this.maxX = maxX;
    this.maxY = maxY;
    this.speed = speed;
  }

  public move(userPaddle: Paddle, aiPaddle: Paddle, AI: AIClass): boolean {
    for (let i = 0; i < this.speed; i++) {
      if (this.borderCollision()) this.deltaY *= -1;
      if (this.outOfBounds()) return true;
      this.paddleCollision(userPaddle, aiPaddle, AI);

      this.x += this.deltaX;
      this.y += this.deltaY;
    }

    return false;
  }

  private paddleCollision(userPaddle: Paddle, aiPaddle: Paddle, AI: AIClass) {
    for (let paddle of [userPaddle, aiPaddle]) {
      if (
        this.x + this.radius >= paddle.x &&
        this.x - this.radius <= paddle.x + paddle.width &&
        this.y + this.radius >= paddle.y &&
        this.y - this.radius <= paddle.y + paddle.height
      ) {
        // the farther the ball is from the center of the paddle, the higher the deltaY and lower the deltaX
        this.deltaX = -this.deltaX;
        this.deltaY = (this.y - (paddle.y + paddle.height / 2)) / 50;
        if (paddle === aiPaddle) AI.good(this, aiPaddle, userPaddle);
      }
    }
  }

  private outOfBounds(): boolean {
    return this.x + this.radius < 0 || this.x - this.radius > this.maxX;
  }

  private borderCollision() {
    return this.y + this.radius >= this.maxY || this.y - this.radius <= 0;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
