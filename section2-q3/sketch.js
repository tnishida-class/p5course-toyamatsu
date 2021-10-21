// ダーツ

function setup() {
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  createCanvas(400, 400);
  background(255);
  stroke(255);
  strokeWeight(2.5);

// 黒の大円
fill(black);
circle(200,200,400);

// 赤と緑の縁
fill(green);
circle(200,200,320);

for(let i=0; i<20;i++){
  if(i%2==0){
    fill(red);
    arc(200,200,320,320,0.314*i,0.314*(i+1),PIE);
  }
}

// 黒とクリームの連続したパイ
fill(black);
circle(200,200,300);

for(let i=0; i<20;i++){
  if(i%2==1){
    fill(cream);
    arc(200,200,300,300,0.314*i,0.314*(i+1),PIE);
  }
}

// 上で作った物の小さい版を作る
fill(green);
circle(200,200,200);

for(let i=0; i<20;i++){
  if(i%2==0){
    fill(red);
    arc(200,200,200,200,0.314*i,0.314*(i+1),PIE);
  }
}

fill(black);
circle(200,200,180);

for(let i=0; i<20;i++){
  if(i%2==1){
    fill(cream);
    arc(200,200,180,180,0.314*i,0.314*(i+1),PIE);
  }
}

// 中心にある緑の円と赤の縁
fill(green);
circle(200,200,50);
fill(red);
circle(200,200,25);



}
