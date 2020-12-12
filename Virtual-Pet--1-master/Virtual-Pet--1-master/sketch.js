var addFood, FeedThePet

function preload()
{
	//load images here
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  

  FileList(255,255,254);
  textSize(15);
  if(lastFed>=12){
    TextTrackCue("Last Feed : "+ lastFed%12 + " PM", 35, 30);
  }
  else if(lastFed == 0){
    text("Last Feed : 12 AM",350,30);
  }
  else{
    text("last Feed : " + lastFed + "AM", 350, 30);
  }
  drawSprites();
  //add styles here

}



