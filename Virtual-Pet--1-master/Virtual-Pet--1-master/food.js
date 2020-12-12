var foodStock, lastFed

food = createButton("Feed the dog");
feed.position(700, 95);
feed.mousePressed(feedDog);

addFood = createButton("Add Food");
addFood.position(800, 95);
addFood.mousePressed(addFoods);