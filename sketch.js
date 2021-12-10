const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var brick, ground, crazyBall, basketBall;

function setup(){
    createCanvas(600,600);
   // ma = createSprite(200,200,50,100);

    engine = Engine.create();
    world = engine.world;

    ball = Bodies.circle(100,100,30);
    //console.log(ball);
    Composite.add(world,ball);

    var brick_options={     //properties for brick
        restitution: 1
         }
    var ground_options={    //properties for ground
        isStatic: true
    }
    
    var bb_options={        //properties for basketball
        restitution: 0.5
    }
    var cb_options={        //properrties for crazy ball
        restitution:1.4
    }
  
    brick = Bodies.rectangle(300,300,120,60,brick_options);
   ground = Bodies.rectangle(300,590,600,20, ground_options);

    basketBall = Bodies.circle(150, 100, 30, bb_options);
    crazyBall = Bodies.circle(380, 100, 15, cb_options);
    Composite.add(world, [ brick,ground,basketBall,crazyBall]);

}

function draw(){
    background("black");
   Engine.update(engine);

    rectMode(CENTER);
    fill("brown");

    rect(brick.position.x, brick.position.y, 120, 60);
    fill("green");
    rect(ground.position.x, ground.position.y, 600, 20);
  
    ellipseMode(RADIUS);
    fill("pink");
    ellipse(basketBall.position.x, basketBall.position.y, 30);
    fill("blue");
    ellipse(crazyBall.position.x, crazyBall.position.y, 15);

//drawSprites();
}