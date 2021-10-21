// テキスト「キーボード操作に反応する」
let x, y;
let sizex, sizey;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  sizex = 50;
  sizey = 50;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, sizex, sizey);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(UP_ARROW)){ y -= 5; }
  if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
  if(keyIsDown(" ".charCodeAt(0))){ x-= 10; }
  if(keyIsDown("E".charCodeAt(0))){ sizex+= 10; sizey+=10; }
  if(keyIsDown("W".charCodeAt(0))){ sizex+= 10; sizey-=10; }
  if(keyIsDown("Q".charCodeAt(0))){ sizex-= 10; sizey+=10; }

  if(sizex > windowWidth || sizey > windowHeight){ sizey = 50; sizex = 50; }
  if(mouseIsPressed){fill(255,0,0); }
    else{fill(255); }
}

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
