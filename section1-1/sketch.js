function setup() {
  createCanvas(128,128);
}

function draw() {
  background(100);
  strokeWeight(4);
  fill(178, 10, 162);
  triangle(12,60,116,120,116,10);
  fill(94, 185, 84);
  triangle(0,50,106,50,106,0);
  fill(255);
  textSize(32);
  textFont("serif");
  text("6", 68, 100);
}
