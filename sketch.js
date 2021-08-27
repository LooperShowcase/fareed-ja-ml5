let player;
let playerImg;
let obsImg;
let obstacles = [];
let obs2;
let bg;
let wordClassifier;
let score = 0;

function preload() {
  playerImg = loadImage("player2.gif");
  obsImg = loadImage("obs.png");
  obs2Img = loadImage("The Rock.png");
  bg = loadImage("Background.jpg");
  let options = { probabilityThreshold: 0.85 };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}
function setup() {
  createCanvas(1000, 600);
  player = new Player();
  wordClassifier.classify(heardWord);
}

function heardWord(error, results) {
  if (results[0].label === "up") {
    player.jump();
  }
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  background(bg);

  if (random(1) < 0.0075) {
    obstacles.push(new Obstacle());
  }

  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs)) {
      console.log("GAME OVER");
      textSize(100);
      text("GAME OVER", width / 2 - 300, height / 2 + 20);
      fill(0, 102, 153);
      noLoop();
    } else {
      score++;
      fill(0);
      textSize(50);
      text(score, 100, 100);
    }
  }

  player.show();
  player.move();
}
