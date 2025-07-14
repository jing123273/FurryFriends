/**
 * @jest-environment jsdom
 */

const { getByAltText } = require('@testing-library/dom');

describe('分頁按鈕連結測試', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="page-img">       
        <a href="introduce.html"><img src="image\\上一頁.png" alt="上一頁" class="arrow"></a>  
        <a href="introduce2.html"><img src="image\\下一頁.png" alt="下一頁" class="arrow"></a>
      </div>
    `;
  });

  test('上一頁按鈕連結應為 introduce.html', () => {
    const prevButton = getByAltText(document.body, '上一頁');
    expect(prevButton.closest('a').getAttribute('href')).toBe('introduce.html');
  });

  test('下一頁按鈕連結應為 introduce2.html', () => {
    const nextButton = getByAltText(document.body, '下一頁');
    expect(nextButton.closest('a').getAttribute('href')).toBe('introduce2.html');
  });
});
