
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, rect1, rect2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper();

	ground = new Ground();

	rect1 = new Dustbin(480, 600, 50, 150);

	rect2 = new Dustbin(770, 600, 50, 150);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper.display();
 
  ground.display();

  rect1.display();

  rect2.display();
}
function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body, paper.body.position,{x:40,y:-40});

}

}


