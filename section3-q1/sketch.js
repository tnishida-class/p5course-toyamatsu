// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let x,y,vx,vy;
const g = 1; // 重力加速度
const vyMax = 5000;



function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 5;
  vy = 5;

}

function draw(){
  background(160, 192, 255);
  textSize(50);
  fill(0);
  text("WINDOWS",x,y);
  x += vx
  y += vy


  if(x-10 < 0 || x+250 > width){ vx = -1 * vx; }
  if(y > height || y-10 < 0){ vy = -1 * vy; }
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);





}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
