// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
    if(i > 5){
      noFill();
      stroke(255,0,0);
      ellipse(50,50,10*i);
    }
    else{
      noFill();
      stroke(0,0,255);
      ellipse(50,50,10*i);
    }

  }
}
