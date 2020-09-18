//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
  dog = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  Dog = createSprite(200,200,20,20);
  Dog.addImage(dog);
  Dog.scale=0.2;
  foodstock=database.ref('food');
  foodstock.on("value", readstock);

  
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    Dog.addImage(happyDog);
  }

  if(keyWentUp(UP_ARROW)){
    Dog.addImage(dog);
  }

  drawSprites();
  //add styles here
  fill("green");
  stroke(4);
  text("Note: Press UP_ARROW Key to feed Drago milk!",100,50);

  
}

function readstock(data){
  foodS=data.val();
}

function writeStock(x){
 if(x<=0){
   x=0;
 }else{
   x=x-1;
 }
   
  database.ref('/').update({
    food:x
  })
}


