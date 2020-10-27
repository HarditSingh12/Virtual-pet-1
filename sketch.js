//Create variables here
var dogImage;
var dog;
var foodStock
var food = 20;
function preload()
{
  //load images here
 dogImage = loadImage("images/dogImg.png"); 
 dogImage1 = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,25,50);
  dog.addImage("mmm",dogImage);
  foodStock = database.ref("food");
  foodStock.on("value",readStock)
  
}


function draw() { 
  background("green"); 
 drawSprites();
  //add styles here

  if(keyDown(UP_ARROW)){
    dog.addImage(dogImage1);
    writeStock(food)
  }

  if(keyDown("r")){
    database.ref("/").update({
      food:20
    })
  }
text("food remaining:"+food,200,200)
}


function readStock(data){
food = data.val();
}

function writeStock(x){
  if(x <=0){
    x:0
  }

  else{
    x=x-1
  }
  database.ref("/").update({
    food:x
  })
}


