var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance=0;
var database;

var form, player, game;

var bk1;
var bc1;
var car1,car2,car3,car4;
var cars;
var track,car1_img ,car2_img ,car3_img ,car4_img ,ground ;

function preload(){
  bk1 = loadImage("images/bk.jpg");
  
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/ap1.png");
  car2_img = loadImage("images/ap2.png");
  car3_img = loadImage("images/ap3.png");
  car4_img = loadImage("images/ap4.png");
  ground = loadImage("images/bg1.jpg");

}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
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
