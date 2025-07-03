// モック計算ロジック（後で AI API に置き換える想定）
function calcMatchRate(formData) {
  // ごく簡単なダミー計算：年齢と働き方で加点
  let score = 50;
  if (Number(formData.age) <= 30) score += 15;
  if (formData.workStyle === 'フルリモート') score += 10;
  // 0〜100に丸める
  return Math.min(100, Math.max(0, score));
}

function dummyCompanyOverview(companyName) {
  return `${companyName} は、○○業界で急成長中の企業です。（ここに実際は AI が返すテキストが入る想定）`;
}

// DOM 操作
document.getElementById('questionForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());

  // マッチ度を計算（モック）
  const rate = calcMatchRate(data);
  const overview = dummyCompanyOverview(data.company);

  // 画面に表示
  document.getElementById('matchRate').textContent = `${rate}%`;
  document.getElementById('companyOverview').textContent = overview;

  // フォームを隠し、レポートを表示
  e.target.classList.add('d-none');
  document.getElementById('reportArea').classList.remove('d-none');
}); 
