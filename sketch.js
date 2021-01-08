var tom , tomImage1,tomImage2,tomImage3;
var jerry,jerryImage1,jerryImage2,jerryImage3;
var bg;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tomImage1 = loadAnimation("images/tomOne.png");
    tomImage2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImage3 = loadAnimation("images/tomFour.png");
    jerryImage1 = loadAnimation("images/jerryOne.png");
    jerryImage2 = loadAnimation("images/jerryTwo.png");
    jerryImage3 = loadAnimation("images/jerryFour.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("sleeping",tomImage1);
    tom.scale = 0.2;
    jerry = createSprite(200,600);
    jerry.addAnimation("standing",jerryImage1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if (tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("last",tomImage3);
        tom.x = 300;
        tom.scale  =0.2;
        tom.changeAnimation("last");
        jerry.addAnimation("jerrylast",jerryImage3);
        jerry.scale = 0.15;
        jerry.changeAnimation("jerrylast");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("running",tomImage2);
      tom.changeAnimation("running");
      jerry.addAnimation("teasing",jerryImage2);
      jerry.frameDelay = 25;
      jerry.changeAnimation("teasing");
  }


}
