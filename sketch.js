const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgimg;

function preload(){
  bgimg = loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

ground= new Ground(415,405,400,30);

  box1=new Box(405, 200, 50, 50);

  box2=new Box(350, 253, 50, 50);
  box3=new Box(405, 253, 50, 50);
  box4=new Box(460, 253, 50, 50);

  box5=new Box(300, 306, 50, 50);
  box6=new Box(355, 306, 50, 50);
  box7=new Box(410, 306, 50, 50);
  box8=new Box(465, 306, 50, 50);
  box9=new Box(520, 306, 50, 50);

  box10=new Box(250, 359, 50, 50);
  box11=new Box(305, 359, 50, 50);
  box12=new Box(360, 359, 50, 50);
  box13=new Box(415, 359, 50, 50);
  box14=new Box(470, 359, 50, 50);
  box15=new Box(525, 359, 50, 50);
  box16=new Box(580, 359, 50, 50);

ground2=new Ground(900,225,300,30);

  box17=new Box(900, 100, 40, 40);

  box18=new Box(855, 143, 40, 40);
  box19=new Box(900, 143, 40, 40);
  box20=new Box(945, 143, 40, 40);

  box21=new Box(810, 186, 40, 40);
  box22=new Box(855, 186, 40, 40);
  box23=new Box(900, 186, 40, 40);
  box24=new Box(945, 186, 40, 40);
  box25=new Box(990, 186, 40, 40);

  
  bird = new Bird(90,280);

  slingshot = new SlingShot(bird.body,{x:90, y:280});
}

function draw() {
  background(bgimg);  
  Engine.update(engine);
ground.display();
  box1.display();

  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

ground2.display();

  box17.display();

  box18.display();
  box19.display();
  box20.display();

  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  bird.display();

  slingshot.display();  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
    slingshot.attach(bird.body);
    }
}