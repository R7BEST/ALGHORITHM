function setup() {
  createCanvas(800,400);
  

  movRect=createSprite(200,200,100,50);
  movRect.shapeColor="yellow";

  
  fixRect=createSprite(100,200,50,100);
  fixRect.shapeColor="blue";




}

function draw() {
  background(0,255,0);  

  movRect.y=World.mouseY;
  movRect.x=World.mouseX;
  

  if(movRect.x-fixRect.x<movRect.width/2+fixRect.width/2
    &&fixRect.x-movRect.x<movRect.width/2+fixRect.width/2
    &&movRect.y-fixRect.y<movRect.height/2+fixRect.height/2
   &&fixRect.y-movRect.y<movRect.height/2+fixRect.height/2 ){
     movRect.shapeColor="red";

  }
  else{
    movRect.shapeColor="yellow";

  }

  drawSprites();
}