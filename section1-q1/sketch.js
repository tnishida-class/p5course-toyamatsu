// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 400);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  stroke(41,135,42);
  // QUARTER_PIは半円（PI）を4等分したもの、つまり円を8等分したもの
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  // BLANK[1]
  arc(75, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5+PI);

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);

  noStroke();
  // 青い円
  fill(blue);
  circle(300,100,120);
  fill(255);
  circle(295,95,110);

  // 緑の円
  fill(green);
  circle(290,95,105);
  fill(255);
  circle(287,100,95);


  // テキスト
  fill(gray);
  textSize(25);
  textFont("serif");
  text("KOBE", 250, 90);
  textSize(10);
  text("UNIVERSITY",270,105);



}
