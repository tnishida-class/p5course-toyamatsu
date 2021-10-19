// チェッカー
function setup() {
  createCanvas(2000, 2000);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
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
    }
  }
}
