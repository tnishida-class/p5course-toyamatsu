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
  ballSize = 50;

  vx = 5;
  vy = 5;
}

function draw(){
  background(160, 192, 255);
  fill(250)
  if(ballSize < 600){
    ellipse(x, y, ballSize);
    ballSize += 2;
  }else{
    ballSize = 50;
  }
  if(keyIsDown(UP_ARROW)){
    ballSize += 6
  }
  // let z = random(0,255);
  // textSize(50);
  // fill(x,50,50);
  // text("WINDOWS",x,y);
  // x += vx
  // y += vy
  //
  // if(x-10 < 0 || x+250 > width){ vx = -1 * vx; }
  // if(y > height || y-25 < 0){ vy = -1 * vy; }
  // x = constrain(x, 0, width);
  // y = constrain(y, 0, height);
}

function mouseClicked(){
  x = mouseX;
  y = mouseY;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
