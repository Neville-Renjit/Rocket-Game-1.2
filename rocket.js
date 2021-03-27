 function Rocket() {
    rocket.x = World.mouseX;

   if(keyWentDown("space") ) {
      lazer = createSprite(200,200);
      lazer.addImage("laser",lazerImg);
      lazer.x = rocket.x;
      lazer.y = rocket.y - 180;
      lazer.velocityY = -8;
      lazer.scale = 0.4;
      lazer.setCollider("rectangle",0,0);
      lazer.debug = true;
      lazer.lifetime = displayHeight/10;
      if(asteroidGroup.isTouching(lazer)) {
         asteroidGroup.destroyEach();
       }
   }
   
 }