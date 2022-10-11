class Paddle {
  x: number;
  y: number;
  maxY: number;
  width: number;
  height: number;
  speed: number;
  constructor(
    x: number,
    y: number,
    maxY: number,
    width: number,
    height: number,
    speed: number
  ) {
    this.x = x;
    this.y = y;
    this.maxY = maxY;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }

  public move(direction: 1 | -1) {
    this.y += direction * this.speed;
    if (this.y < 0) this.y = 0;
    else if (this.y + this.height > this.maxY) this.y = this.maxY - this.height;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Paddle;
