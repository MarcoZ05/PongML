import TPSData from "./TPSData";

class DataSet {
  public input;
  public output;
  constructor(tpsData: TPSData[]) {
    this.input = {
      ballX: tpsData[0].ballX,
      ballY: tpsData[0].ballY,
      ballDeltaX: tpsData[0].ballDX,
      ballDeltaY: tpsData[0].ballDY,
      ballSpeed: tpsData[0].ballSpeed,
      ballRadius: tpsData[0].ballRadius,
      ballMaxX: tpsData[0].ballMaxX,
      ballMaxY: tpsData[0].ballMaxY,
      aiPaddleY: tpsData[0].aiPaddleY,
      userPaddleY: tpsData[0].userPaddleY,
    };
    this.output = tpsData.reduce((total, data) => total + data.direction, 0);
  }
}

export default DataSet;
