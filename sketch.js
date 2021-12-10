const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var brick, ground, crazyBall, basketBall;

function setup(){
    createCanvas(600,600);
   // ma = createSprite(200,200,50,100);

    

    

}

function draw(){
    background("black");
   Engine.update(engine);

    

//drawSprites();
}
