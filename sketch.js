const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;

//main player variables
var main_player;
var main_player_img;

//background variables
var background_img;

function preload(){
  main_player_img = loadImage("main_player.png");
  background_img = loadImage("background.png");
}

function setup(){
  createCanvas(700,800);
  engine = Engine.create();
  world = engine.world;

  main_player = Bodies.rectangle(250, 550, 30, 30);
  World.add(world, main_player);

  engine = Engine.create();
  world = engine.world;
  
}


function draw(){
  background(51);
  image(background_img, 0, 0, width, height)

  Engine.update(engine);
  
}
