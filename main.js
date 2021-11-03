// * GLOBAL VARIABLES

// CANVAS SETUP
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

//DOM ELEMENTS
let startBtn = document.querySelector(".btn"); //restartButton after
let restartBtn = document.querySelector(".btn2");
//missing game intro screen ana gameover screen
let introScreen = document.querySelector(".game-intro");
let gameoverScreen = document.querySelector(".game-over");
let score = document.querySelector(".score-time");
let scoreNum = document.querySelector("#score");
let time = document.querySelector(".time");

//* FUNCTIONS

//*ADD EVENT LISTENERS

startBtn.addEventListener("click", () => {
  //hide start screen and score
  introScreen.style.display = "none";
  score.style.display = "flex";
  //show canvas screen
  canvas.style.display = "flex";
  const music = new Audio("./Music/sea.wav");
  music.play();
  music.loop = true;
  //start the game
  game = new Game();
  game.gameLoop();
});

restartBtn.addEventListener("click", () => {
  gameoverScreen.style.display = "none";
  canvas.style.display = "flex";
  game = new Game();
  game.gameLoop();
});

window.addEventListener("keydown", (event) => {
  //here i wanna make the surfer turn left and right!
  //console.log("Clicking things");
  //----//
  const music = new Audio("./Music/bong_001.ogg");
  music.play();
  music.loop = false;

  if (event.code === "ArrowRight") {
    game.surfer.surferTurnRight();
  } else if (event.code === "ArrowLeft") {
    game.surfer.surferTurnLeft();
  } else if (event.code === "ArrowUp") {
    game.surfer.surferTurnBack();
  } else if (event.code === "ArrowDown") {
    game.surfer.surferMoveFront();
  }
});

//  sharks overlap
