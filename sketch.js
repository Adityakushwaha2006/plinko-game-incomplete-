var b1,b2,b3,b4,b5,b6,b7,a1,a2,a3,a4,a5,a6,a7,c1,c2,c3,c4,c5,c6,c7,d1,d2,d3,d4,d5,d6,d7;

var z1,z2,z3,z4,z5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 700);


	engine = Engine.create();
	world = engine.world;


	//creating boulders for particles to stop on

//a unit
a1= new ball(50,100,12);
a2= new ball(100,100,12);
a3= new ball(150,100,12);
a4= new ball(200,100,12);
a5= new ball(250,100,12);
a6= new ball(300,100,12);
a7= new ball(350,100,12);

stroke (0,405,255);
strokeWeight(2)

//b unit
b1= new ball(25,200,12);
b2= new ball(75,200,12);
b3= new ball(125,200,12);
b4= new ball(175,200,12);
b5= new ball(225,200,12);
b6= new ball(275,200,12);
b7= new ball(325,200,12);

//c unit
c1= new ball(50,300,12);
c2= new ball(100,300,12);
c3= new ball(150,300,12);
c4= new ball(200,300,12);
c5= new ball(250,300,12);
c6= new ball(300,300,12);
c7= new ball(350,300,12);


//d unit
d1= new ball(25,400,12);
d2= new ball(75,400,12);
d3= new ball(125,400,12);
d4= new ball(175,400,12);
d5= new ball(225,400,12);
d6= new ball(275,400,12);
d7= new ball(325,400,12);

//creating partition lines for boxes
z1= createSprite(50,600,5,200)
z2= createSprite(125,600,5,200)
z3= createSprite(200,600,5,200)
z4= createSprite(275,600,5,200)
z5= createSprite(350,600,5,200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  
  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();
  a6.display();
  a7.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  c6.display();
  c7.display();

  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
 




  drawSprites();

 
}



