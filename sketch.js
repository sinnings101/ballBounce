const World = Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Bodies;

var ground
var world
var engine
var ball
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
  var groundOptions = {
    isStatic: true
  }
  ground = Body.rectangle(400,380,800,20,groundOptions);
  World.add(world, ground);

  var ballOptions = {
    restitution: 0.9
  }

  ball = Body.circle(400,100,20,ballOptions);
  World.add(world, ball);

  console.log(ball);
}

function draw() {
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}