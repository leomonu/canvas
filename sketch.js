
var r = 0;
var g = 50;
var b=255;
var ellipse;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(300,400);

  ellipse = createSprite(600,200,10,10)
  
}


function draw(){
  background(255);
ellipse.x = World.mouseX;

if(ellipse.x>0  &&  ellipse.x<100){
  background("red");
}
if(ellipse.x>100  &&  ellipse.x<200){
  background("green");
}
if(ellipse.x>200  &&  ellipse.x<300){
  background("blue");
}
  

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  drawSprites();
}