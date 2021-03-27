var rocket, rocketImg;
var asteroid,asteroid1Img,asteroid2Img,asteroid3Img,asteroid4Img,asteroid5Img,asteroidGroup;
var Background, BackgroundImg;
var lazer,lazerImg,lazerGroup;

function preload() {
  BackgroundImg = loadImage("images/star background 4.jpg");
  rocketImg = loadImage("images/Rocket.png");
  lazerImg = loadImage("images/LAZER.png");
  asteroid1Img = loadImage("images/Asteroid.png");
  asteroid2Img = loadImage("images/asteroid2.png");
  asteroid3Img = loadImage("images/asteroid3.png");
  asteroid4Img = loadImage("images/asteroid4.png");
  asteroid5Img = loadImage("images/asteroid5.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  Background = createSprite(displayWidth/2,displayHeight/2);
  Background.addImage("Scene", BackgroundImg);
  Background.scale = 4.6;
  Background.y = Background.height/2;

  //create rocket

  rocket = createSprite(displayWidth/2,displayHeight - 150);
  rocket.addImage("player", rocketImg);
  rocket.scale = 0.4;


  lazerGroup = new Group();
  asteroidGroup = new Group();


}

function draw() {
  background("Blue"); 
  
  //moving background

  Background.velocityY = 3;

 if (Background.y > (displayHeight - 300)) {
    Background.y = Background.height/2;
 }
  Rocket();
  Asteroid();

  



  drawSprites();

  
}