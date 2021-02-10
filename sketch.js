const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var ground;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 1000);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200, 500, 100);
	World.add(world, bob1);

	bob2 = new Bob(300, 500, 100);
	World.add(world, bob2);

	bob3 = new Bob(400, 500, 100);
	World.add(world, bob3);

	bob4 = new Bob(500, 500, 100);
	World.add(world, bob4);

	bob5 = new Bob(600, 500, 100);
	World.add(world, bob5);

	ground = new Ground(400, 200, 600, 40);
	World.add(world, ground);

	rope1 = new Rope(bob1.body, ground.body, -100 * 2, 0);
	World.add(world, rope1);

	rope2 = new Rope(bob2.body, ground.body, -50 * 2, 0);
	World.add(world, rope2);

	rope3 = new Rope(bob3.body, ground.body, 0 * 2, 0);
	World.add(world, rope3);

	rope4 = new Rope(bob4.body, ground.body, 50 * 2, 0);
	World.add(world, rope4);

	rope5 = new Rope(bob5.body, ground.body, 100 * 2, 0);
	World.add(world, rope5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  ground.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {

	if(keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x:800, y:-800});
	}

}

