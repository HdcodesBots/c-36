/*var sball;
var database;
var position; 

function setup(){
    createCanvas(500,500);

    database = firebase.database();

    sball = createSprite(250,250,10,10);
    sball.shapeColor = "red";

    var sballPosition = database.ref('ball/position');
    sballPosition.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
       writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
  
    database.ref('ball/position').set({
        x : position.x+x ,
        y : position.y+y
        
    })

}

function readPosition(data){

position = data.val();
sball.x = position.x;
sball.y = position.y;


}*/

var database ; 
var form , player , game ;
var playerCount  = 0;
var gameState = 0 ;
var bg ; 

function setup()
{
  // canvas
   createCanvas (400,400);

database = firebase.database();


game = new Game ();
game.getState();
game.start();







}

function draw ()
{










}