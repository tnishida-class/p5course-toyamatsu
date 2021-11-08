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

// https://kiwasalog.com/caprice/js-draw-graph.html
  let startAngle = 0;
  noFill();
  fill(230);
  stroke(0);
  strokeWeight(1);
  for(let i = 0; i < scores.length; i++){
    let endAngle = scores[i]/total+startAngle;
    arc(200, 200, 300, 300, startAngle*Math.PI*2, endAngle*Math.PI*2, PIE);
    startAngle = endAngle;
  }


  // BLANK[1]
}
