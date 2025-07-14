/**
 * @jest-environment jsdom
 */
const { fireEvent, getByText, getByRole } = require('@testing-library/dom');

describe('表單送出按鈕測試', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="adoptForm" action="https://formsubmit.co/meg.yyy.ooo@gmail.com" method="POST">
        <input type="submit" value="Send">
      </form>
    `;

    // 監聽表單 submit 事件，方便測試是否有送出
    document.getElementById('adoptForm').addEventListener('submit', (e) => {
      e.preventDefault(); // 防止真的送出跳頁
      e.target.dataset.submitted = 'true'; // 標記已送出
    });
  });

  test('送出按鈕存在', () => {
    const submitButton = getByRole(document.body, 'button', { name: /send/i });
    expect(submitButton).toBeTruthy();
  });

  test('按下送出按鈕會觸發表單提交', () => {
    const form = document.getElementById('adoptForm');
    const submitButton = getByRole(document.body, 'button', { name: /send/i });
    fireEvent.click(submitButton);
    expect(form.dataset.submitted).toBe('true');
  });
});
