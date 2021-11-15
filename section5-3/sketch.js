// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(700, 700);
  calendar(1900, 11);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です。1年間は" + daysInYear(i) + "日でした。");
    }
    else{
      console.log(i + "年はうるう年ではありません。1年間は" + daysInYear(i) + "日でした。");
    }
  }
}

function calendar(y, m){
  fill(0);
  noStroke();
  textSize(32);
  text(y + "年" + m + "月", 250, 32);
  fill(255, 0, 0);text("日", 34,70);fill(0);text("月", 134,70);text("火", 234,70);text("水", 334,70);text("木", 434,70);text("金", 534,70);fill(0,0,255);text("土", 634,70);
    for(i=0; i<7; i++){
      noFill();
      stroke(2)
      rect(i*100, 90, 100, 80);rect(i*100, 170, 100, 80);rect(i*100, 250, 100, 80);rect(i*100, 330, 100, 80);rect(i*100, 410, 100, 80);
    }

  let dow = dayOfWeek(y, m, 1);
  let x1 = 34 + 100*(dow-1);
  let y1 = 140;

  for(let d = 1; d <= daysInMonth(y, m); d++){
    x1 = x1 + 100;
    if(x1 > 700){
      x1 = x1 - 700;
      y1 = y1 + 80;
    }
    if(dayOfWeek(y, m, d) == 0){
      fill(255,0,0);
    }else if(dayOfWeek(y, m, d) == 6){
      fill(0,0,255);
    }else{
      fill(0);
    }
    text(d, x1, y1);
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  if(isLeapYear(y)){
    return 366;
  }else{
    return 365;
  }
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  let count = 0;
  for(i = 1945; i < y; i++){
    count += daysInYear(i);
  }
  return (count+dayOfYear(y, m, d))%7;
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
