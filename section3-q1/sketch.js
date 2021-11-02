// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let x,y,vx,vy;
let ballSize;
const g = 1; // 重力加速度
const vyMax = 5000;



function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  ballSize = 200;

  vx = 5;
  vy = 5;
}

function draw(){
  background(160, 192, 255);
  fill(250)
  if(ballSize < 300){
    ellipse(x, y, ballSize);
    ballSize += 7;
  }else{
    ballSize = 50;
  }
  if(keyIsDown(UP_ARROW)){
    ballSize += 16;
  }
}

function mouseClicked(){
  x = mouseX;
  y = mouseY;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
