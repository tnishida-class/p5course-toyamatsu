// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(250);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){
     total += scores[i];
    }


    for(let i = 1; i < scores.length; i++){
    noFill();
    stroke(0);
    strokeWeight(1);
    // if(i = 0){
      arc(200, 200, 300, 300, scores[i-1]/total, scores[i]/total, PIE);
    // }
    // else{
    //   arc(200, 200, 300, 300, scores[i-1]/total, scores[i]/total, PIE);
    // }
  }


  // BLANK[1]
}
