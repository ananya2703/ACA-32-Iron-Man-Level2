
var ironMan, ironMan_collide;
var bg, bgImage;
var stonesGroup, stoneImage;

function preload() {
  bgImage = loadImage("images/bg.jpg");
  ironManImage = loadImage("images/iron.png");
  stoneImage = loadImage("images/stone.png")
}

function setup() {
  createCanvas(1200, 630);
  
  bg = createSprite(580,300,2200,500);
  bg.addImage(bgImage);
  bg.scale = 1.8;
  bg.velocityY=3;

  ironMan = createSprite(100,500,20,50);
  ironMan.addImage(ironManImage);
  ironMan.scale = 0.3;

  
  ground = createSprite(130,825,1999,100);
  ground.visible = false;

  stonesGroup = new Group;
}

function draw() {

  background("black");

  if (bg.y > 600){
    bg.y=bg.width/4;
  }
  if(ironMan.x<50){
    ironMan.x=50;
  }
  if(ironMan.x<-50){
    ironMan.x=-50;
  }
  if(ironMan.y<50) {
    ironMan.y=40;
  }
  if(keyDown("up")) {
    ironMan.velocityY = -10;
  }
  if(keyDown("left")) {
    ironMan.x = ironMan.x - 5;
  }
  if(keyDown("right")) {
    ironMan.x = ironMan.x + 5;
  }
  
  
  ironMan.velocityY = ironMan.velocityY + 0.5;
  ironMan.collide(ground);
   
  generateStones();
  for (var i = 0; i <(stonesGroup).lenght; i++) {
    var temp = (stonesGroup).get(i);

    if (temp.isTouching(ironMan)) {
      ironMan.collide(temp);
    }
  }
  drawSprites();
   
}

function generateStones() {
  if (frameCount % 70===0) {
    var stone = createSprite(1200,120,40,10);
    stone.y = random(50,450);
    stone.addImage(stoneImage);
    stone.scale = 0.5;
    stone.velocityX = -5;

    stone.lifetime = 250;
    stonesGroup.add(stone);
  }
}