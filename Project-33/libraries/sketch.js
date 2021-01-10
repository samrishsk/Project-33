const  Engine = Matter.Engine;
const  World = Matter.World;
const  Bodies = Matter.Bodies;
const  Events = Matter.Events;

var plinkos = [];
var divisions = [];

var engine,world;
var particles;
var turn = 1;
var c=0;
var gameState = "PLAY";

var divisionHeight=300;
var score =0;

function preload(){
  mousePressed();
  calculateScore();
}

function setup() {
  var canvas = createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
  
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  textSize(20)
  text("Score : "+score,20,30);
}
function mousePressed(){
  if(turn<=5)
  {
    turn++;
    particles=new Particle(mouseX,10,10);
  }
}

function calculateScore(){
    if(particles!==null)
    {
     particles.display();
     if(particles.body.position.y>760)
     {
       if(particles.body.position.x<300)
       {
         score=score+500;
         particles=null;
         if(count>=5)gameState="end";
       }
     }
   }
}