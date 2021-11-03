class Obstacle {
  //properties
  constructor(srcImage, x) {
    this.image = new Image();
    this.image.src = srcImage;
    this.width = 50;
    this.height = 50;
    this.x = x;
    this.y = canvas.height;
    this.speed = 0;
  }

  //methods
  drawObstacles = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };
  obstacleMove = () => {
    this.y -= 4 + this.speed;
  };
}
