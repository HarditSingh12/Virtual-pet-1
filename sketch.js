//Create variables here
var dogImage;
var dog;
var foodStock
var food = 20;
var feed;
var addFood;
var bottleImage;
function preload()
{
  //load images here
 dogImage = loadImage("images/dogImg.png"); 
 dogImage1 = loadImage("images/dogImg1.png");
 bottleImage = loadImage("images/Milk (1).png");

}

function setup() {
        database = firebase.database();
        createCanvas(500, 500);
        dog = createSprite(350,250,25,50);
        dog.addImage("mmm",dogImage);
        foodStock = database.ref("food");
        foodStock.on("value",readStock)

        
}


function draw() { 
  background("green"); 
 drawSprites();
  //add styles here
 
 
  feed = createButton("feed the dog");
  feed.position(450,100);
  feed.mousePressed(feedFood)
    
  addFood = createButton("add food");
  addFood.position(550,100);
  addFood.mousePressed(AddFood)
  

  fill("black")
text("food remaining:"+food,300,150)

for(var i =30;i<270;i=i+25){
  var bottle = createSprite(i,250,20,25);
  bottle.addImage(bottleImage);
 
}

for(var x = 30;x<270;x=x+25){
  var bottle2 = createSprite(x,280,20,25);
  bottle2.addImage(bottleImage);
}
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

function feedFood(){
  dog.addImage("mm",dogImage1);
  if(food<=0){
    food=0;
  }
  else{
  food--;
  }
  database.ref("/").update({
food:food
  })
  
}

function AddFood(){
  database.ref("/").update({
    food:20
})
}