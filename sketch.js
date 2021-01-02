var fixedRect, movingRect;
var rect1, rect2;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(600, 200, 100, 50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityX=(-5);

  fixedRect= createSprite(100, 200, 50, 100);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
fixedRect.velocityX=(5);


  rect1 = createSprite(200,100,50,100);
  rect1.shapeColor="green";
  rect1.debug=true;

}

function draw() {
  background(255,255,255);  
  // movingRect.x= mouseX;
  // movingRect.y = mouseY;

  console.log(movingRect.x-rect1.x);

  

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";

  }

  bounceOff(movingRect, fixedRect);

 


  drawSprites();
}
function isTouching(object1,object2){

  if(object1.x-object2.x < object1.width/2+object2.width/2 &&
    object2.x-object1.x < object1.width/2+object2.width/2 &&
    object1.y-object2.y < object1.height/2+object2.height/2 &&
    object2.y-object1.y < object1.height/2+object2.height/2){

      return true;
     
    }else{
      return false;
    }
}

function bounceOff(object1,object2){
  if(object1.x-object2.x < object1.width/2+object2.width/2 &&
    object2.x-object1.x < object1.width/2+object2.width/2)
{
  object1.velocityX=object1.velocityX*(-1);
  object2.velocityX=object2.velocityX*(-1);
}
else if(object1.y-object2.y < object1.height/2+object2.height/2 &&
  object2.y-object1.y < object1.height/2+object2.height/2){
    object1.velocityY=object1.velocityY*(-1);
    object2.velocityY=object2.velocityY*(-1);  
  }
}


