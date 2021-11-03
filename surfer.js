class Surfer {
  //properties
  constructor() {
    this.surferImage = new Image();
    this.surferImage.src = "./images/surfer5.png";
    this.width = 50;
    this.height = 80;
    this.x = canvas.width / 2;
    this.y = canvas.height / 6;
  }

  //methods
  drawSurfer = () => {
    ctx.drawImage(this.surferImage, this.x, this.y, this.width, this.height);
  };

  surferGravity = () => {
    if (this.y + this.height < canvas.height) {
      this.y = this.y + 0.3;
    }
    this.y += 0;
  };
  surferTurnRight = () => {
    if (this.x < canvas.width - 60) {
      this.x = this.x + 30;
    }
  };
  surferTurnLeft = () => {
    if (this.x > 10) {
      this.x = this.x - 30;
    }
  };
  surferTurnBack = () => {
    if (this.y > 60) {
      this.y = this.y - 60;
    }
  };
  surferMoveFront = () => {
    if (this.y + this.height < canvas.height) {
      this.y = this.y + 10;
    }
  };
  surferCollision = (singleShark) => {
    //check if surfer collides shark
    if (
      this.x < singleShark.x + singleShark.width &&
      this.x + this.width > singleShark.x &&
      this.y < singleShark.y + singleShark.height &&
      this.y + this.height > singleShark.y
    ) {
      //console.log("colision happening");
      return true;
      //cause game to end
      //create boolean for the game to end (requestAnimationFrame)
    } else {
      return false;
    }
  };
}
