//Create variables here
var dogImage;
var dog;
var foodStock;
function preload()
{
  //load images here
 dogImage = loadImage("images/dogImg.png"); 
 dogImage1 = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  var dog = createSprite(250,250,25,50);
  dog.addImage("mmm",dogImage);
  foodStock = database.ref("food");
  foodStock.on("value",readStock)
  
}


function draw() {  
 drawSprites();
  //add styles here

  if(keyDown(UP_ARROW)){
    dog.addImage("mmmmm",dogImage1);
    writeStock(food)
  }

}

function ChangePosition(xpos,ypos){
  database.ref("")
  x:Position.x+xpos;
  y:Position.y+ypos;
}

function readStock(data){
food = data.val();
}
function writeStock(x){
  database.ref("/").update({
    food:x
  })
}


