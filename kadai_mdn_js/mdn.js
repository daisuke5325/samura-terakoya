// 現在の日付を取得
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear(); // 年
const month = today.getMonth() + 1; // 月（+1を忘れずに）
const date = today.getDate(); // 日

// 日付を「2024年10月12日」の形式で出力
console.log(`${year}年${month}月${date}日`);