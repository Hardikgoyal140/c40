var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../C40-teacher-reference/images/track.jpg");
  car1_img = loadImage("../C40-teacher-reference/images/car1.png");
  car2_img = loadImage("../C40-teacher-reference/images/car2.png");
  car3_img = loadImage("../C40-teacher-reference/images/car3.png");
  car4_img = loadImage("../C40-teacher-reference/images/car4.png");
  ground = loadImage("../C40-teacher-reference/images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
