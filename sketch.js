const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var sling,polygon;
var platform1,platform;
var mConstraint;


function preload(){
 // sling = loadIamge("polygon.png");

}

function setup(){
  var canvas = createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground (400,550,800,30);
  //polygon = new SlingShot(200,200,20,20);
  platfrom1 = new Ground (400,450,300,10);
  platfrom2 = new Ground (600,280,200,10);

  box1 = new Box(310,430,30,40);
  //this.box1.fill("red");
  box2 = new Box(345,430,30,40);
  box3 = new Box(380,430,30,40);
  box4 = new Box(415,430,30,40);
  box5 = new Box (450,430,30,40);
  box6  = new Box(485,430,30,40);
  box7 = new Box(520,430,30,40);
  box8 = new Box(345,390,30,40);
   box9 = new Box(380,390,30,40);
   box10 = new Box(415,390,30,40);
   box11 = new Box(450,390,30,40);
   box12 = new Box(485,390,30,40);
   box13 = new Box(380,350,30,40);
   box14 = new Box(415,350,30,40);
   box15 = new Box(450,350,30,40);
   box16 = new Box(415,310,30,40);
  /// box17 = new Box(440,350,30,40);
   //box18 = new Box(480,350,30,40);
  /// box19 = new Box(360,310,30,40);
   ////box20 = new Box(400,310,30,40);
  // /box21 = new Box(430,310,30,40);
   //box22 = new Box(460,310,30,40);
   //box23 = new Box(380,270,30,40);
  // /box24 = new Box(400,270,30,40);
  // box25 = new Box(450,270,30,40);



}

function draw(){
  background(255);
  Engine.update(engine);

  ground.display();
  platfrom1.display();
  platfrom2.display();
 // polygon.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
 box9.display();
  
  box10.display();
  box11.display();
 box12.display();
 box13.display();
  box14.display();
  box15.display();
  box16.display();
 /// box17.display();
 /// box18.display();
 // box19.display();
 /// box20.display();
 /// box21.display();
 /// box22.display();
  ///box23.display();
 // //box24.display();
 // /box25.display();


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