// 最終課題を制作しよう
let prisms = [];
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
  text('IT', windowWidth/2, windowHeight/2);


  for(let i = 0; i < prisms.length; i++){
    let p = prisms[i];
    prism(p.x1, p.x2, p.x3, p.y1, p.y2, p.y3, p.r, p.g, p.b);
  }

  pop();
  if(keyIsDown(ENTER)){
    const p = {x1: random(0, windowWidth), x2: random(-250, 250), x3: random(-250, 250), y1: random(0, windowHeight), y2: random(-250, 250), y3: random(-250, 250), r: random(0, 255), g: random(0, 255), b:random(0, 255)};
    prisms.push(p);
  }
  if(keyIsDown(BACKSPACE)){
    prisms.pop();
  }


}

function prism(x1, x2, x3, y1, y2, y3, r, g, b){
  fill(r, g, b);
  beginShape();
  vertex(x1, y1);
  vertex(x2, mouseY - y2);
  vertex(mouseX - x3, y1 + y3);
  vertex(x1,y1);
  endShape();
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
