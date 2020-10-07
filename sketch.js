var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ball = new paper(95,450,15)
	ground = new Ground(400,650,800,10)
	bottom = new DustBin(675,590,50,50)
	side1 = new Side(620,680,10,100)
	side2 = new Side(725,680,10,100)
	                                                            

}


function draw() {
  rectMode(CENTER);
  background("grey");
  ball.display();
  ground.display();
  bottom.display();
  side1.display();
  side2.display();
  drawSprites();
}


function keyPressed() {
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.Body,ball.Body.position,{x:34.5,y:-34.5});
	}
}



