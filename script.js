var canvas= document.getElementByld("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx =2;
var dy= -2;
var paddleHeight= 10;
var paddleWidth= 75;
var paddleX= (canvas.width-paddleWidth)/2;
var rightpaddled= false;
var leftpaddle= false;
var brickRowCount =5;
var brickColumnCount=3;
var brickWidth=75;
var brickHeight=20;
var brickpaddling=10;
var brickOffsetTop=30;
var brickOffsetLeft=30;
var score=0;
var lives= 3;
var bricks= [];
for (var r=0; r <brickColumnCount; c++) {
    bricks [c]=[];
for(var r=0; r<brickRowCount;r++) {
    bricks[c][r] = {x:0, y:0,status:1};
}
}

document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("Keyup",keyUpHandler,false);
document.addEventListener("mousemove",mouseMoveHandler,false);


function keyDownHandler(e){
if(e.code=="ArrowRight"){
    rightPressed=true;
}
else if(e.code=='ArrowLeft'){
  leftPressed=true;
}
}
function keyUpHandler(e){
if(e.code=='ArrowRight'){
    rightPressed=false
}
else if(e.code=='ArrowRight'){
}
}
function mouseMoveHandler(e){
var relativeX= e.clientX-canvas.brickOffsetLeft;
if(relativeX> 0&& relativeX<canvas.width) {
    paddleX=relativeX- paddleWidth/2;
}
}
function collisionDetection(){
    for