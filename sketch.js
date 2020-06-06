var movingRect
var fixedRect
var movingRect1
var fixedRect1
var movingRect2
var fixedRect2
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "red";
  movingRect.velocityX = -5;

  fixedRect = createSprite(200,200,50,50);
  fixedRect.shapeColor = "red";
  fixedRect.velocityX = 5;

  movingRect1 = createSprite(400, 100, 50, 50);
  movingRect1.shapeColor = "blue";
  movingRect1.velocityY = 5;

  fixedRect1 = createSprite(400,300,50,50);
  fixedRect1.shapeColor = "blue";
  fixedRect1.velocityY = -5;

  movingRect2 = createSprite(50,50,50,50);
  movingRect2.shapeColor = "maroon";
  movingRect2.velocityX = 5;
  movingRect2.velocityY = 5;

  fixedRect2 = createSprite(750,50,50,50);
  fixedRect2.shapeColor = "maroon";
  fixedRect2.velocityX = -5;
  fixedRect2.velocityY = 5;
}

function draw() {
  background(255,255,255);  
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }
  else{
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  }

  if(isTouching(movingRect2,fixedRect2)){
    movingRect2.shapeColor = "teal";
    fixedRect2.shapeColor = "teal";
    bounceOff(movingRect2,fixedRect2)
  }
  
  drawSprites();
}

