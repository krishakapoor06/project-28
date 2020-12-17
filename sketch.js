const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImg, treeImg

function preload()
{
  boyImg= loadImage("images/boy.png");
  treeImg = loadImage("images/tree.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20);	
 mangoObject1 = new Mango (900,350)
 mangoObject2 = new Mango (850,325)
 mangoObject3 = new Mango (1000,295)
 mangoObject4 = new Mango (1050,255)
 mangoObject5 = new Mango (890,205)
 //tree= new Tree (450,300,100,20)
 stone = new Stone (600,100)
	
 Engine.run(engine);
  
 sling = new Sling(stone.body,{x:90, y:510});

}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  imageMode(CENTER)
 image( boyImg,150,600,200,400);
 image( treeImg,950,415,400,600);
  
  mangoObject1.display();
  mangoObject2.display();
  mangoObject3.display();
  mangoObject4.display();
  mangoObject5.display();
  ground.display();
  //tree.display();
  stone.display();
 sling.display();
 
 
 // drawSprites();
 detectCollision(stone,mangoObject1); 
 detectCollision(stone,mangoObject2); 
 detectCollision(stone,mangoObject3); 
 detectCollision(stone,mangoObject4); 
 detectCollision(stone,mangoObject5); 

}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function detectCollision(lstone,lmango) {
  mongoBodyPosition = lmango.body.position
 stoneBodyPosition = lstone.body.position
console.log("inside detectCollision function")
 var distance = dist (stoneBodyPosition.x,stoneBodyPosition.y,mongoBodyPosition.x,mongoBodyPosition.y)
 if(distance<= lmango.radius+lstone.radius) {
   Matter.Body.setStatic(lmango.body, false)
   
 }
}

function keyPressed() {
  if(keyCode===32) {
    Matter.Body.setPosition(stone.body, {x:90, y:510})
    sling.attach(stone.body)
  }
}







