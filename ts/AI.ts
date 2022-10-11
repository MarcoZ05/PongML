import Ball from "./Ball.js";
import Paddle from "./Paddle.js";
import TPSData from "./TPSData.js";
import DataSet from "./DataSet.js";

// data to train the AI
const trainData: DataSet[] = [];

let tpsData: TPSData[] = [];
let totalDirection = 5;

class AI {
  public getDirection(
    ball: Ball,
    aiPaddle: Paddle,
    userPaddle: Paddle
  ): -1 | 0 | 1 {
    const direction = totalDirection === 0 ? 0 : totalDirection > 0 ? 1 : -1;

    const data = new TPSData(ball, aiPaddle, userPaddle, direction);
    tpsData.push(data);

    totalDirection -= direction;
    return direction;
  }

  public bad(ball: Ball, aiPaddle: Paddle, userPaddle: Paddle): void {
    tpsData = [];
  }

  public good(ball: Ball, aiPaddle: Paddle, userPaddle: Paddle): void {
    trainData.push(new DataSet(tpsData));
    tpsData = [];

    console.log("trainData", trainData);

    const net = new brain.NeuralNetwork();

    const testData = new DataSet([new TPSData(ball, aiPaddle, userPaddle, 0)]);
    console.log("testData", testData);

    net.train(trainData);
    console.log(brain.likely(testData.input, net));
  }
}

export default AI;
