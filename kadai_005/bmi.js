// 体重 (kg) を変数に代入
let weight = 68; // 68kg

// 身長 (m) を変数に代入
let height = 1.7; // 1.7m

// BMI を計算する
let bmi = weight / (height * height);

// BMI を結果として表示
console.log("体重: " + weight + "kg");
console.log("身長: " + height + "m");
console.log("BMIの値: " + bmi.toFixed(2)); // 小数点2桁に丸める