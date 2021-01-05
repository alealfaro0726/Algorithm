var a,b;
function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  a.shapeColor = "green";
  a.debug = true;
  b=createSprite(200,100,80,80);
  b.shapeColor = "green";
  b.debug = true;
}

function draw() {
  background(255,255,255); 
a.x = World.mouseX;
a.y = World.mouseY; 

console.log(a.x-b.x);

if(a.x - b.x < a.width/2 + b.width/2
  && b.x - a.x < a.width/2 +b.width/2
 && a.y - b.y < a.height/2 + b.height/2
 && b.y - a.y < a.height/2 + b.height/2)
 {
  a.shapeColor = "blue";
  b.shapeColor = "blue";
}
else{
  a.shapeColor = "green";
 b.shapeColor = "green";
}



  drawSprites();
}