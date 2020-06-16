var bullet, bullet2, bullet3, bullet4, wall, wall2, wall3, wall4;

var speed, weight, speed2, weight2, speed3, weight3, speed4, weight4;

var table, table2, table3, table4, table5, table6, table7; 

var thickness;

function setup() {
  createCanvas(3000,1400);
  thickness = random(50, 83);

  speed = random(100,200);
  weight = random(30, 40);

  speed2 = random(100,200);
  weight2 = random(30, 40);
  
  speed3 = random(100,200);
  weight3 = random(30, 40);
  
  speed4 = random(100,200);
  weight4 = random(30, 40);

  wall = createSprite(2700, 100, thickness, 150);
 wall.shapeColor = 80,80,80;

 bullet = createSprite(50, 100, 50, 25);
 bullet.shapeColor = "white";

 //

 wall2 = createSprite(2700, 300, thickness, 150);
 wall2.shapeColor = 80,80,80;

 bullet2 = createSprite(50, 300, 50, 25);
 bullet2.shapeColor = "white";

 table = createSprite(1500, 800, 2980, 10);
 table2 = createSprite(1500, 920, 2980, 10);
 table3 = createSprite(1500, 1040, 2980, 10);
 table4 = createSprite(1500, 1160, 2980, 10);
 table5 = createSprite(1500, 1280, 2980, 10);
 table6 = createSprite(10, 1100, 10, 600);
 table7 = createSprite(2985, 1100, 10, 600);
 //

 wall3 = createSprite(2700, 500, thickness, 150);
 wall3.shapeColor = 80,80,80;

 bullet3 = createSprite(50, 500, 50, 25);
 bullet3.shapeColor = "white";
 
 //

 wall4 = createSprite(2700, 700, thickness, 150);
 wall4.shapeColor = 80,80,80;

 bullet4 = createSprite(50, 700, 50, 25);
 bullet4.shapeColor = "white";

}

function draw() {
  background(0);  
  
 if(keyDown("enter"))
 {
   bullet.velocityX = speed;
   bullet2.velocityX = speed2;
   bullet3.velocityX = speed3;
   bullet4.velocityX = speed4;

  }

 if(bullet.x === 2000) 
{
 
 bullet.velocityX=0;

}
  if(bullet.x - wall.x <= wall.width/2 + bullet.width/2
    &&
    wall.x - bullet.x <= wall.width/2 + bullet.width/2
    &&
    bullet.y - wall.y <= wall.height/2 + bullet.height/2
    &&
    wall.y - bullet.y <= wall.height/2 + bullet.height/2)
    {

     bullet.velocityX = 0;
     wall.velocityX = 0;

     
    }

    /////////////////////////////////////////////////////////////////////////////////////////////

    if(bullet.x - wall.x <= wall.width/2 + bullet.width/2
      &&
      wall.x - bullet.x <= wall.width/2 + bullet.width/2
      &&
      bullet.y - wall.y <= wall.height/2 + bullet.height/2
      &&
      wall.y - bullet.y <= wall.height/2 + bullet.height/2)
 {
   textSize(50)
   text("113", 1500, 100)
   text("113", 2350, 1000)

   bullet.shapeColor = "yellow";
  
 }

  if(bullet2.x - wall2.x <= wall2.width/2 + bullet2.width/2
    &&
    wall2.x - bullet2.x <= wall2.width/2 + bullet2.width/2
    &&
    bullet2.y - wall2.y <= wall2.height/2 + bullet2.height/2
    &&
    wall2.y - bullet2.y <= wall2.height/2 + bullet2.height/2)
    {

     bullet2.velocityX = 0;
     wall2.velocityX = 0;

     
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////

    if(bullet2.x - wall2.x <= wall2.width/2 + bullet2.width/2
      &&
      wall2.x - bullet2.x <= wall2.width/2 + bullet2.width/2
      &&
      bullet2.y - wall2.y <= wall2.height/2 + bullet2.height/2
      &&
      wall2.y - bullet2.y <= wall2.height/2 + bullet2.height/2)
 {
  textSize(50)
  text("69", 1500, 300)
  text("69", 2350, 1120)

  bullet2.shapeColor = "green";

 }

  if(bullet3.x - wall3.x <= wall3.width/2 + bullet3.width/2
    &&
    wall3.x - bullet3.x <= wall3.width/2 + bullet3.width/2
    &&
    bullet3.y - wall3.y <= wall3.height/2 + bullet3.height/2
    &&
    wall3.y - bullet3.y <= wall3.height/2 + bullet3.height/2)
    {

     bullet3.velocityX = 0;
     wall3.velocityX = 0;

     
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////

    if(bullet3.x - wall3.x <= wall3.width/2 + bullet3.width/2
      &&
      wall3.x - bullet3.x <= wall3.width/2 + bullet3.width/2
      &&
      bullet3.y - wall3.y <= wall3.height/2 + bullet3.height/2
      &&
      wall3.y - bullet3.y <= wall3.height/2 + bullet3.height/2)
 {
  textSize(50)
  text("162", 1500, 500)
  text("162", 2350, 1240)

  bullet3.shapeColor = "yellow";
  
 }

  if(bullet4.x - wall4.x <= wall4.width/2 + bullet4.width/2
    &&
    wall4.x - bullet4.x <= wall4.width/2 + bullet4.width/2
    &&
    bullet4.y - wall4.y <= wall4.height/2 + bullet4.height/2
    &&
    wall4.y - bullet4.y <= wall4.height/2 + bullet4.height/2)
    {

     bullet4.velocityX = 0;
     wall4.velocityX = 0;

     if(bullet4.x - wall4.x <= wall4.width/2 + bullet4.width/2
      &&
      wall4.x - bullet4.x <= wall4.width/2 + bullet4.width/2
      &&
      bullet4.y - wall4.y <= wall4.height/2 + bullet4.height/2
      &&
      wall4.y - bullet4.y <= wall4.height/2 + bullet4.height/2)

      {
        text("120", 1500, 700)
        text("120", 2350, 1360)
        
        bullet4.shapeColor = "yellow";
      }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
  
  textSize(650)
  text("|" , 800, 1275 );
  text("|" , 1400, 1275 );
  text("|" , 2000, 1275 );

  textSize(50)
  
  //D = 113
  text("0.99 mm", 250, 50);
  //d= 69
  text("12 Gauge", 250, 250);
  //D=162
  text("5.56 mm", 250, 450);
  //d =120
  text("7.62 mm", 250, 650);

  text(Math.round(weight), 250, 1000);
  text(Math.round(weight2), 250, 1120);
  text(Math.round(weight3), 250, 1240);
  text(Math.round(weight4), 250, 1360);

  text(Math.round(thickness), 1700, 1000);
  text(Math.round(thickness), 1700, 1120);
  text(Math.round(thickness), 1700, 1240);
  text(Math.round(thickness), 1700, 1360);

  if (bullet.x >= 1500)
{
  text(Math.round(speed), 1050, 1000)
}

if (bullet2.x >= 1500)
{
  text(Math.round(speed2), 1050, 1120)
}

if (bullet3.x >= 1500)
{
  text(Math.round(speed3), 1050, 1240)
}

if (bullet4.x >= 1500)
{
  text(Math.round(speed4), 1050, 1360)
}

textStyle(BOLD)
  text("Bullet Weight", 250, 880);
  text("Bullet Speed", 1050, 880);
  text("Wall Thickness", 1650, 880);
  text("Damage", 2350, 880);


  drawSprites();
}