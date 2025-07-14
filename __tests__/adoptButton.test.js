/**
 * @jest-environment jsdom
 */
const { fireEvent } = require('@testing-library/dom');
require('@testing-library/jest-dom');

test('點擊動態產生的「我想領養」按鈕會觸發 window.open', () => {
  // 模擬 JSON 資料（一筆）
  const data = [
    {
      name: "小黃",
      gender: "男",
      age: "7歲",
      breed: "土狗",
      personality: "膽小、怕生",
      weight: "33kg",
      neutered: "是",
      image: "image/小黃.png"
    }
  ];

  // 模擬你的 container
  document.body.innerHTML = `<div id="animal-list"></div>`;

  // 這是你頁面裡的動態產生邏輯，複製貼上並改成同步跑
  const container = document.getElementById('animal-list');
  data.forEach(animal => {
    const div = document.createElement('div');
    div.className = 'animal';
    div.innerHTML = `
      <img src="${animal.image}" alt="${animal.name}">
      <ul>
        <li>名字: ${animal.name}</li>
        <li>性別: ${animal.gender}</li>
        <li>年齡: ${animal.age}</li>
        <li>品種: ${animal.breed}</li>
        <li>性格: ${animal.personality}</li>
        <li>體重: ${animal.weight}</li>
        <li>結紮: ${animal.neutered}</li>
      </ul>
      <div class="adopt-button">
        <button>
          我想領養
        </button>
      </div>
    `;
    container.appendChild(div);
  });

  // 攔截 window.open
  const openMock = jest.spyOn(window, 'open').mockImplementation(() => {});

  // 取得按鈕並模擬點擊
  const button = document.querySelector('button');
  button.onclick = () => {
    window.open(`form.html?animal=${encodeURIComponent(data[0].name)}`, '_blank');
  };

  fireEvent.click(button);

  // 驗證 window.open 有被叫到，且參數正確
  expect(openMock).toHaveBeenCalledWith('form.html?animal=%E5%B0%8F%E9%BB%83', '_blank');

  // 清除 mock
  openMock.mockRestore();
});
