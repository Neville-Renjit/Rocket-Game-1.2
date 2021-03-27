function Asteroid(){
    if(frameCount%200 === 0){
        asteroid = createSprite(displayWidth/2,0);
        asteroid.x = Math.round(random(100,displayWidth - 100))
        asteroid.velocityY = 5;
        asteroid.scale = 0.3;

        asteroid.setCollider("circle", 0, 0,);
        asteroid.debug = true;
        var randomnumber = Math.round(random(1,5));
        switch(randomnumber){
            case 1: asteroid.addImage("asteroid",asteroid1Img);
                    break;
            case 2: asteroid.addImage("asteroid",asteroid2Img);
                    break;
            case 3: asteroid.addImage("asteroid",asteroid3Img);
                    break;
            case 4: asteroid.addImage("asteroid",asteroid4Img);
                    break;
            case 5: asteroid.addImage("asteroid",asteroid5Img);
                    break;
        }


        asteroidGroup.add(asteroid);
        asteroidGroup.setLifetimeEach(displayHeight/10);
    }
}