// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      // 格子を描く
      if(i%2==1 && j%2==1){
        noFill();
        rect(size*i,size*j,size,size);
      }
      else if(i%2==1 && j%2==0){
        fill(125);
        rect(size*i,size*j,size,size);
      }
      else if(i%2==0 && j%2==1){
        fill(125);
        rect(size*i,size*j,size,size);
      }

      // 円を描く。ゴリ押しで描画してしまった。もっとスマートなやり方があるはず

      if(i%2==1 && j%2==0 && j<3){
        fill(255,0,0);
        ellipse(size/2+size*i,size/2+size*j,size);
      }

      if(i%2==0 && j%2==1 && j<3){
        fill(255,0,0);
        ellipse(size/2+size*i,size/2+size*j,size);
      }

      if(i%2==1 && j%2==0 && j>4){
        fill(0);
        ellipse(size/2+size*i,size/2+size*j,size);
      }

      if(i%2==0 && j%2==1 && j>4){
        fill(0);
        ellipse(size/2+size*i,size/2+size*j,size);
       }

    }
  }

}
