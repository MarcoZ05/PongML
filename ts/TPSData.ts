import Ball from "./Ball";
import Paddle from "./Paddle";

class TPSData {
  public ballX: number;
  public ballY: number;
  public ballDX: number;
  public ballDY: number;
  public ballMaxX: number;
  public ballMaxY: number;
  public ballSpeed: number;
  public ballRadius: number;

  public aiPaddleY: number;
  public aiPaddleMaxY: number;
  public aiPaddleWidth: number;
  public aiPaddleHeight: number;
  public aiPaddleSpeed: number;

  public userPaddleY: number;
  public userPaddleMaxY: number;
  public userPaddleWidth: number;
  public userPaddleHeight: number;
  public userPaddleSpeed: number;

  public direction: -1 | 0 | 1;

  constructor(
    ball: Ball,
    aiPaddle: Paddle,
    userPaddle: Paddle,
    direction: -1 | 0 | 1
  ) {
    this.ballX = ball.x;
    this.ballY = ball.y;
    this.ballDX = ball.deltaX;
    this.ballDY = ball.deltaY;
    this.ballMaxX = ball.maxX;
    this.ballMaxY = ball.maxY;
    this.ballSpeed = ball.speed;
    this.ballRadius = ball.radius;

    this.aiPaddleY = aiPaddle.y;
    this.aiPaddleMaxY = aiPaddle.maxY;
    this.aiPaddleWidth = aiPaddle.width;
    this.aiPaddleHeight = aiPaddle.height;
    this.aiPaddleSpeed = aiPaddle.speed;

    this.userPaddleY = userPaddle.y;
    this.userPaddleMaxY = userPaddle.maxY;
    this.userPaddleWidth = userPaddle.width;
    this.userPaddleHeight = userPaddle.height;
    this.userPaddleSpeed = userPaddle.speed;

    this.direction = direction;
  }
}

export default TPSData;
