var enemy1_img, enemy2_img; 
var background_img;
//enemy3_img, 

var bg;
//var bullet, bullet_img;
var bomb, bombimg;

var player, player_img;
var bulletsGroup, enemyGroup;

var score = 0;
var explosion, explosion1, enemy;



function preload() {
enemy1_img = loadImage("spaceship1_edited.png");
enemy2_img = loadImage("spaceship_edited.png");
//enemy3_img = loadImage("enemy3.png");
background_img = loadImage("universe.jpeg");
player_img = loadImage("player.png");
//bullet_img = loadImage("star_edited.png");
bombimg = loadImage("bomb.png");



}

function setup() {
  createCanvas(windowWidth-10, windowHeight-20);
  
 // bg = createSprite(windowWidth-10, windowHeight-20);
  //bg.addImage("bg", background_img);
  //bg.scale = 10;

  explosion = loadSound("explosion_player.mp3");
  explosion1 = loadSound("explosion_enemy.mp3");



  player = createSprite(600, 550);
  player.addImage("p1", player_img);
  player.scale = 0.4;

  bulletsGroup = new Group();
  enemyGroup = new Group();
  //bomb = createSprite(300, 300);
  //bomb.addImage("bomb", bombimg);
  //bomb.scale = 0.15;
  

 


 

}

function draw(){


  background("black"); 
  
player.x = mouseX;
 player.y = 600;

 //bomb.x = player.x;
 //bomb.y = 540;

 
 
 
 //bomb.visible = false;
 //bullet.visibble = true;

  //bg.velocityY = 7;

  //if(bg.y>800) {
    //bg.y = bg.height/2;
 // }

  player.depth = player.depth+2;
   //enemy1.depth = enemy1.depth+2;
//enemy2.depth = enemy2.depth+2;
//enemy3.depth = enemy3.depth+2;
  //bg.depth = bg.depth-1;

//bullet.depth = player.depth+1;
//player.depth = player.depth;
  
 

  
spawnEnemies();
spawnBullets(); 



drawSprites();

}


function spawnEnemies(){
  
  if(World.frameCount%60===0) {
      var rand = Math.round(random(1,3));
      var randX = Math.round(random(50, 1100));
      var randY = Math.round(random(0, 10));
       enemy = createSprite(randX, randY);
      enemy.scale = 0.2;
      enemy.velocityY = 3;
    
      switch(rand) {
        case 1: enemy.addImage("e1", enemy1_img);
        break;
        case 2: enemy.addImage("e2", enemy2_img);
        break; 
       // case 3: enemy.addImage("e3", enemy3_img);
        //break;
        default: break;
      }
      enemyGroup.add(enemy);

      if(enemy.collide(player)) {
        enemy.destroy();
        player.destroy();
        explosion.play();
      }
      
      }
      
  }
   



function spawnBullets() {
 
  
  if(keyCode===32) {
   var bullet = createSprite(mouseX,600, 5, 25);
  //bullet.addImage("bullet", bullet_img);
  bullet.velocityY = -50;
  //bullet.scale = 0.3;

if(bullet.collide(enemyGroup)) {
  enemy.destroy();
  bullet.destroy();
  
}
background("black");  

bulletsGroup.add(bullet);
    }
   
}

 


 


