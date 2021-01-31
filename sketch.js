const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand1, stand2;
var t1,t2,t3,t4,t5,t6,t7;
var p1,p2,p3,p4,p5;
var b1,b2,b3;
var bl1;

var p6, p7, p8, p9, p10;
var b4, b5, b6;
var bl2;

var poly;

var slingshot;

function preload(){

}

function setup() {

  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world

   //creating ground
   ground = new Ground(0,580,1000,50);

   stand1 = new Ground(200,350,250,20);
   stand2 = new Ground(600,450,170,10);

// first teir
   t1 = new BoxTeal(220,320,30,30);
   t2 = new BoxTeal(250,320,30,30);
   t3 = new BoxTeal(280,320,30,30);
   t4 = new BoxTeal(310,320,30,30);
   t5 = new BoxTeal(340,320,30,30);
   t6 = new BoxTeal(370,320,30,30);
   t7 = new BoxTeal(400,320,30,30);

   p1 = new BoxPink(250,290,30,30);
   p2 = new BoxPink(280,290,30,30);
   p3 = new BoxPink(310,290,30,30);
   p4 = new BoxPink(340,290,30,30);
   p5 = new BoxPink(370,290,30,30);

   b1 = new BoxBlack(280,260,30,30);
   b2 = new BoxBlack(310,260,30,30);
   b3 = new BoxBlack(340,260,30,30);

   bl1 = new BoxBlue(310,230,30,30);

   //tier 2
   p6 = new BoxPink(610,420,30,30);
   p7 = new BoxPink(640,420,30,30);
   p8 = new BoxPink(670,420,30,30);
   p9 = new BoxPink(700,420,30,30);
   p10 = new BoxPink(730, 420,30,30);

   b4 = new BoxBlack(640,390,30,30);
   b5 = new BoxBlack(670,390,30,30);
   b6 = new BoxBlack(700,390,30,30);

   bl2 = new BoxBlue(670,360,30,30);

   poly = new Poly(100,290,10,10);
  

  slingshot = new Slingshot(poly.body,{x:50, y:190});

  Engine.run(engine);

}

function draw() {
  background("black");
  Engine.update(engine);

  stand1.display();
  stand2.display();
  ground.display();
  
  t1.display();
  t2.display();
  t3.display();
  t4.display();
  t5.display();
  t6.display();
  t7.display();

  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();

  b1.display();
  b2.display();
  b3.display();

  bl1.display();

  p6.display();
  p7.display();
  p8.display();
  p9.display();
  p10.display();

  b4.display();
  b5.display();
  b6.display();

  bl2.display();

  poly.display();

  slingshot.display();

  
}

function mouseDragged() {
  Matter.Body.setPosition(poly.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
 slingshot.fly();
}
