const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var birdie;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,390);
    box2 = new Box(1000,390);
    box3 = new Box(800,300);
    box4 = new Box(1000,300);
    box5 = new Box(900,200);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(900,390);
    pig2 = new Pig(900,390);
    log1 = new Log(835,225,110,PI/4);
    log2 = new Log(975,175,110,PI/-4);
    log3 = new Log(900,335,250,PI/2);
    log4 = new Log(900,225,250,PI/2);
    birdie = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    birdie.display();
}