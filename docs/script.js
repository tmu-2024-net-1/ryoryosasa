const chars = '　～一二三七万川牛王木竹示目耳虍羊花音鳥馬籠魚織魚器図漢鬱藝'.split('');
const container = document.querySelector('#container');

function createRows() {
  container.innerHTML = ''; // 既存の内容をクリア

  const charWidth = 16; // 各文字の幅を設定 (ピクセル)
  const containerWidth = container.clientWidth;
  const charsPerRow = Math.floor(containerWidth / charWidth); // 1行に表示する文字数

  chars.forEach(char => {
    for (let j = 0; j < 10; j++) { // 10行分表示
      const row = document.createElement('div');
      row.classList.add('row');
      container.appendChild(row);

      for (let i = 0; i < charsPerRow; i++) {
        const childDiv = document.createElement('div');
        childDiv.classList.add('char', 'transition-all', 'cursor-pointer', 'select-none', 'text-sm', 'font-bold');
        childDiv.textContent = char;
        row.appendChild(childDiv);
      }
    }
  });

  // 文字エレメントにホバーイベントを追加
  const charElems = document.querySelectorAll('.char');
  charElems.forEach((elem) => {
    elem.addEventListener('mouseenter', () => {
      elem.classList.add('bg-black');
      elem.classList.add('text-white');
      setTimeout(() => {
        elem.classList.remove('bg-black');
        elem.classList.remove('text-white');
      }, 1000);
    });
  });
}

createRows(); // 初期表示
window.addEventListener('resize', createRows); // ウィンドウサイズ変更時に再生成
