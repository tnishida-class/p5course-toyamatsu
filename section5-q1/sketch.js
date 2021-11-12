// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(1000, 1000);
  background(255);
  balloon("It is sunny today.");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  // let p = 2;
  fill(0);
  ellipse(w, 2*h, 2*w, 4*h);
  // rect(0, 0, w + p * 2, h + p * 2);
  triangle(5/10*w, 2*h, 7/10*w, 6*h, w, 2*h);
  fill(255);
  text(t, w/2, 2*h);
}
