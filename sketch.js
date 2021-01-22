var fixedRect, movingRect;
var aeroplane , airport;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(900, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  aeroplane = createSprite(500,200,20,20)
  aeroplane.velocityX=5;
  airport = createSprite(900,200,50,50)

}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  movingRect.velocityX=5;
if(isTouching(aeroplane,airport)){
textSize(25)
text ("planelanded",600,400);
aeroplane.velocityX=0;
aeroplane.shapeColor="white"

}


bounceoff(movingRect,fixedRect);
  drawSprites();
}