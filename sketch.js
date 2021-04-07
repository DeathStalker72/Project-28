
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var tree, stone, ground, launcher;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy,rope;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1200,130,30);
	mango3=new Mango(980,65,30);
	mango4=new Mango(1040,150,30);
	mango5=new Mango(1200,250,30);
	mango6=new Mango(1120,260,30);
	mango7=new Mango(960,250,30);
	mango8=new Mango(940,150,30);
	mango9=new Mango(860,235,30);
	mango10=new Mango(1110,30,30);
	mango11=new Mango(1250,200,30);
	mango12=new Mango(1160,180,30);

	tree=new Tree(1050,580);
	ground=new Ground(width/2,600,width,20);
	stone=new Stone(500,500,50,50);
	rope=new Line(stone.bodyA,{x:200, y:500});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  ground.display();
  stone.display();
  rope.display();
}
