// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(250);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(10, 100); // 60以上100未満のランダムな数を代入
    let y = round(scores[i]);
    textSize(10);
    text(y,10,i*30+10);
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){
     total += scores[i];
    }

  let x = 0;
  let y = 0;

  for(let i = 0; i < scores.length; i++){
      x += scores[i];
      y += scores[i-1];
      fill(250,250,200);
      stroke(0);
      strokeWeight(1);
      arc(200, 200, 300, 300, y/total * 3.14 * 2, x/total * 3.14 * 2, PIE);
  }


  // BLANK[1]
}
