// 最終課題を制作しよう
// 遊び方
// 任意の矢印ボタンを押すと色と形がランダムの三角形が登場
// マウスを動かすと図形も動く
// Zを押すと左矢印を押して出現した最後の三角形を削除
// Sを押すと上矢印を押して出現した最後の三角形を削除
// Cを押すと右矢印を押して出現した最後の三角形を削除
// Xを押すと下矢印を押して出現した最後の三角形を削除
// 三角形が重なると色が変化する


let leftPrisms = [];
let rightPrisms = [];
let topPrisms = [];
let bottomPrisms = [];


function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 25);
}

function draw(){
  push();
  background(0);
  blendMode(SCREEN);
  noStroke();
  fill(30);
  textSize(2*windowHeight/3);
  textAlign(CENTER, CENTER);
  // text('IT', windowWidth/2, windowHeight/2);


  for(let i = 0; i < leftPrisms.length; i++){
    let l = leftPrisms[i];
    leftPrism(l.x1, l.x2, l.y1, l.y2, l.y3, l.r, l.g, l.b);
  }

  for(let i = 0; i < rightPrisms.length; i++){
    let r = rightPrisms[i];
    rightPrism(r.x1, r.x2, r.y1, r.y2, r.y3, r.r, r.g, r.b);
  }

  for(let i = 0; i < topPrisms.length; i++){
    let t = topPrisms[i];
    topPrism(t.x1, t.x2, t.x3, t.y1, t.y2, t.r, t.g, t.b);
  }

  for(let i = 0; i < bottomPrisms.length; i++){
    let b = bottomPrisms[i];
    bottomPrism(b.x1, b.x2, b.x3, b.y1, b.y2, b.r, b.g, b.b);
  }



  pop();
  if(keyIsDown(LEFT_ARROW)){
    const l = {x1: random(0, windowWidth), x2: random(windowWidth/15, windowHeight/15), y1: random(0, windowHeight), y2: random(windowWidth/15, windowHeight/15), y3: random(0, windowHeight), r: random(0, 255), g: random(0, 255), b:random(0, 255)};
    leftPrisms.push(l);
  }
  if(keyIsDown("Z".charCodeAt(0))){
    leftPrisms.pop();
  }

  if(keyIsDown(RIGHT_ARROW)){
    const r = {x1: random(0, windowWidth), x2: random(windowWidth/15, windowHeight/15), y1: random(0, windowHeight), y2: random(windowWidth/15, windowHeight/15), y3: random(0, windowHeight), r: random(0, 255), g: random(0, 255), b:random(0, 255)};
    rightPrisms.push(r);
  }
  if(keyIsDown("C".charCodeAt(0))){
    rightPrisms.pop();
  }

  if(keyIsDown(UP_ARROW)){
    const t = {x1: random(0, windowWidth), x2: random(0, windowWidth), x3: random(windowWidth/15, windowHeight/15), y1: random(windowWidth/15, windowHeight/15), y2: random(0, windowHeight), r: random(0, 255), g: random(0, 255), b:random(0, 255)};
    topPrisms.push(t);
  }
  if(keyIsDown("S".charCodeAt(0))){
    topPrisms.pop();
  }
  if(keyIsDown(DOWN_ARROW)){
    const b = {x1: random(0, windowWidth), x2: random(0, windowWidth), x3: random(windowWidth/15, windowHeight/15), y1: random(windowWidth/15, windowHeight/15), y2: random(0, windowHeight), r: random(0, 255), g: random(0, 255), b:random(0, 255)};
    bottomPrisms.push(b);
  }
  if(keyIsDown("X".charCodeAt(0))){
    bottomPrisms.pop();
  }

}

function leftPrism(x1, x2, y1, y2, y3, r, g, b){
  fill(r, g, b);
  beginShape();
  vertex(0, y1);
  vertex(x1, mouseY - y2);
  vertex(mouseX - x2, y3);
  vertex(0,y1);
  endShape();
}

function rightPrism(x1, x2, y1, y2, y3, r, g, b){
  fill(r, g, b);
  beginShape();
  vertex(windowWidth, y1);
  vertex(mouseX - x2, y3);
  vertex(x1, mouseY - y2);
  vertex(windowWidth,y1);
  endShape();
}

function topPrism(x1, x2, x3, y1, y2, r, g, b){
  fill(r, g, b);
  beginShape();
  vertex(x1, 0);
  vertex(x2, mouseY - y1);
  vertex(mouseX - x3, y2);
  vertex(x1, 0);
  endShape();
}

function bottomPrism(x1, x2, x3, y1, y2, r, g, b){
  fill(r, g, b);
  beginShape();
  vertex(x1, windowHeight);
  vertex(x2, mouseY - y1);
  vertex(mouseX - x3, y2);
  vertex(x1, windowHeight);
  endShape();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
