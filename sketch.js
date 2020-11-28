const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine,world;
var box1;
var sling;
var mConstraint;


function preload(){
 // sling = loadIamge("polygon.png");

}

function setup(){
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground (400,750,800,30);
  platfrom1 = new Ground (300,650,100,10);


}

function draw(){
  background(0);
  Engine.update(engine);

  ground.display();
  platfrom1.display();
}
 /*
var a;
var circles=[];

function preload(){

}

function setup() {
  createCanvas(800,800);
  stroke(255)
  
 // engine = Engine.create();
  //world = engine.world;

  
 
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
 
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}



function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
*/