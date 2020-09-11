const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10,ground11,ground12;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    wball = loadImage("sprites/ball.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,40);
    ground3 = new Ground(350,330,10,660);
   
    ground4 = new Ground(850,330,10,660);
    
   
    if(frameCount%60===0){
        particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }


   

    //log6 = new Log(230,180,80, PI/2);
   
}

var plinkos = [];
var particles=[];
var divisions=[];

var divisionHeight=300;



function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);

    imageMode(CENTER);
    image(wball,300,300,20,20);
   
    ground.display();
  
    ground3.display();
    ground4.display();

    //log6.display();
    for (var j = 0; j < particles.length; j++) {

        particles[j].display();

    }
    for (var k = 0; k < divisions.length ; k++){

        divisions[k].display();

    }

}

