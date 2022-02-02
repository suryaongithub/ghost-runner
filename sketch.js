var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup , invisibleBlock;
var gameState = "play";

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);

  climbersGroup = new Group ();
  doorsGroup = new Group ();
  invisibleBlockGroup = new Group ();
  

  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300,300);
  ghost.addImage(ghostImg);
  ghost.scale=0.3;

  


  

  
}

function draw() {
  background(200);

  if (gamestate  = "play")
  {
    ghost.velocityY += 1 ;

    if(keyDown("space"))
    {
      ghost.velocityY = -10;
    }

    if (keyDown("LEFT_ARROW"))
    {
      ghost.x -= 4;
    }

    if (keyDown("RIGHT_ARROW"))
    {
      ghost.x += 4;
    }
     spawnBalcony();

     ghost.collide(climbersGroup);

     if(ghost.isTouching(invisibleBlockGroup) )
     {
       gameState = "end";
     }

     if (ghost.y>600||ghost.y<0) 
     {
       gameState = "end"
     }
;

  }
  
  if (gameState === "end")
  {
    textSize (25);
    text("game over" , 250,300);
    climbersGroup.destoryEach();
    invisibleBlockGroup.destoryEach();
    ghost.destroy();
    doorsGroup.destroy();
    tower.destroy

  }

  if(tower.y > 400){
      tower.y = 300
    }

    drawSprites();
}

function spawnBalcony()
{
  if(frameCount % 100 == 0)
  {
    door = createSprite (Math.round(random(100,550)),-75);
    door.addImage(doorImg);
    door.velocityY = 5;
    doorsGroup.add(door);
    ghost.depth += 100;
  
    climber = createSprite (door.x,-25);
    climber.addImage (climberImg);
    climber.velocityY = 5;
    climbersGroup.add(climber);

    invisibleBlock = createSprite (climber.x,climber.y+10,50,25);
    invisibleBlock.velocityY = 5;
    invisibleBlock.visible= !false;
    invisibleBlockGroup.add(invisibleBlock);
    
  }
}