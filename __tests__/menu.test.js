/**
 * @jest-environment jsdom
 */

const { fireEvent, getByText } = require('@testing-library/dom');

describe('漢堡選單連結測試', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav class="gMenu">
        <ul class="menu">
          <li><a href="index.html">首頁</a></li>
          <li><a href="introduce.html">毛寶貝個資</a></li>
          <li><a href="info.html">聯絡資訊</a></li>
        </ul>
      </nav>
    `;
  });

  test('首頁連結 href 應該是 index.html', () => {
    const link = getByText(document.body, '首頁');
    expect(link.getAttribute('href')).toBe('index.html');
  });

  test('毛寶貝個資連結 href 應該是 introduce.html', () => {
    const link = getByText(document.body, '毛寶貝個資');
    expect(link.getAttribute('href')).toBe('introduce.html');
  });

  test('聯絡資訊連結 href 應該是 info.html', () => {
    const link = getByText(document.body, '聯絡資訊');
    expect(link.getAttribute('href')).toBe('info.html');
  });
});
