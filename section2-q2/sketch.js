// チェッカー
function setup() {
  createCanvas(2000, 2000);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      // 格子を描く
      if(i%2==1 && j%2==1){
        noFill();
        rect(20*i,20*j,20,20);
      }
      else if(i%2==1 && j%2==0){
        fill(125);
        rect(20*i,20*j,20,20);
      }
      else if(i%2==0 && j%2==1){
        fill(125);
        rect(20*i,20*j,20,20);
      }

      // 円を描く。ゴリ押しで描画してしまった。もっとスマートなやり方があるはず
      if(i%2==1 && j%2==0 && j<3){
        fill(255,0,0);
        ellipse(10+20*i,10+20*j,18);
      }

      if(i%2==0 && j%2==1 && j<3){
        fill(255,0,0);
        ellipse(10+20*i,10+20*j,18);
      }

      if(i%2==1 && j%2==0 && j>4){
        fill(0);
        ellipse(10+20*i,10+20*j,18);
      }

      if(i%2==0 && j%2==1 && j>4){
        fill(0);
        ellipse(10+20*i,10+20*j,18);
      }

    }
  }

}
