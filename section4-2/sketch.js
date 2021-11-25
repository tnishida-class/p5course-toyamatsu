//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;
let count = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  count++;
  background(160, 192, 255);

  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }

  let ballX = windowWidth/2;
  let ballY = windowHeight/2;
  let speedX = random(-5, 5);
  let speedY = random(-5, 5);

  if(count % 30 == 0){
    const b = { x: ballX, y: ballY, size: 30, vx: speedX, vy: speedY };
    balls.push(b);
  }

}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  let ballSize = random(5,70);
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: ballSize, vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
