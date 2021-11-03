class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/seaW-bg.jpeg";
    this.surfer = new Surfer();
    this.sharkArr = [new Obstacle("./images/shark3-bg.png")];
    this.shark2Arr = [new Obstacle("./images/shark2.png")];
    this.pirateArr = [new Obstacle("./images/pirate-ship1.png")];
    this.pirateArr2 = [new Obstacle("./images/pirate-ship5.png")];
    this.isGameOver = false;
    this.score = 0;
  }

  // methods

  increaseSpeed = () => {
    if (this.score / 4 >= 100) {
      this.sharkArr.forEach((shark) => {
        shark.speed = 2;
      });
      this.shark2Arr.forEach((shark) => {
        shark.speed = 2;
      });
    }
  };

  gameover = () => {
    //stop the game
    this.isGameOver = true;
    //hide canvas
    canvas.style.display = "none";
    //show restart state
    gameoverScreen.style.display = "flex";
    const music = new Audio("./Music/loose.wav");
    music.play();
    music.loop = false;
  };
  spawnObstacles = () => {
    //console.log("adding a shark");
    //when do we add a new shark
    let lastIndex = this.sharkArr.length - 1;
    let lastShark = this.sharkArr[lastIndex];

    let randomPosX = Math.random() * 900;
    //need to add new(different shark)
    if (lastShark.y === 302 || lastShark.y === 305 || lastShark.y === 306) {
      this.sharkArr.push(new Obstacle("./images/shark3-bg.png", randomPosX));
    }

    let shark2 = this.shark2Arr[this.shark2Arr.length - 1];
    if (shark2.y === 204 || shark2.y === 205 || shark2.y === 206) {
      this.shark2Arr.push(new Obstacle("./images/shark2.png", randomPosX));
    }
    let pirate = this.pirateArr[this.pirateArr.length - 1];
    if (pirate.y === 250 || pirate.y === 251 || pirate.y === 252) {
      this.pirateArr.push(
        new Obstacle("./images/pirate-ship1.png", randomPosX)
      );
    }
    let pirate2 = this.pirateArr2[this.pirateArr2.length - 1];
    if (pirate2.y === 150 || pirate2.y === 151 || pirate2.y === 152) {
      this.pirateArr2.push(
        new Obstacle("./images/pirate-ship5.png", randomPosX)
      );
    }
  };

  gameLoop = () => {
    //console.log("YAY game running!!");

    // * CREATE THE CANVAS
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // * MOVEMENT AND CHANGES ON ELEMENTS
    this.surfer.surferGravity();
    //this.sharkArr.sharkMove();
    this.sharkArr.forEach((eachShark) => {
      eachShark.obstacleMove();
    });

    this.shark2Arr.forEach((eachPirate) => {
      eachPirate.obstacleMove();
    });
    this.pirateArr.forEach((eachPirate) => {
      eachPirate.obstacleMove();
    });
    this.pirateArr2.forEach((eachPirate) => {
      eachPirate.obstacleMove();
    });

    this.spawnObstacles();
    this.sharkArr.forEach((eachShark) => {
      //function returns true or false
      if (this.surfer.surferCollision(eachShark)) {
        this.gameover();
      }
    });

    this.shark2Arr.forEach((eachShark) => {
      //function returns true or false
      if (this.surfer.surferCollision(eachShark)) {
        this.gameover();
      }
    });
    this.pirateArr.forEach((eachShark) => {
      //function returns true or false
      if (this.surfer.surferCollision(eachShark)) {
        this.gameover();
      }
    });
    this.pirateArr2.forEach((eachShark) => {
      //function returns true or false
      if (this.surfer.surferCollision(eachShark)) {
        this.gameover();
      }
    });

    // * DRAWING THE ELEMENTS
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    this.surfer.drawSurfer();
    //this.sharkArr.drawShark();
    this.sharkArr.forEach((eachShark) => {
      eachShark.drawObstacles();
    });

    this.shark2Arr.forEach((eachPirate) => {
      eachPirate.drawObstacles();
    });
    this.pirateArr.forEach((eachPirate) => {
      eachPirate.drawObstacles();
    });
    this.pirateArr2.forEach((eachPirate) => {
      eachPirate.drawObstacles();
    });

    this.increaseSpeed();
    // * ANIMATION FRAME AND LOGIC CHANGES
    if (!this.isGameOver) {
      requestAnimationFrame(this.gameLoop);
      this.score++;
      score.innerText = Math.floor(this.score / 5);
    }
  };
}
