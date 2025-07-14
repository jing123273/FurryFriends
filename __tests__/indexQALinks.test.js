/**
 * @jest-environment jsdom
 */

const { getByText } = require('@testing-library/dom');

describe('常見問題連結測試', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <section id="quistion">
        <div class="qa">
          <h3>常見問題</h3>
          <ul>
            <li><a href="QA/qa.html#q1">Q1：我要符合哪些條件才能領養寵物？</a></li>
            <li><a href="QA/qa.html#q2">Q2：我要如何申請領養？</a></li>
            <li><a href="QA/qa.html#q3">Q3：可以試養嗎？</a></li>
            <li><a href="QA/qa.html#q4">Q4:領養要付錢嗎?</a></li>
            <li><a href="QA/qa.html#q5">Q5：家裡有其他寵物，可以再領養嗎？</a></li>
            <li><a href="QA/qa.html#q6">Q6：領養後如果無法繼續飼養怎麼辦？</a></li>
            <li><a href="QA/qa.html#q7">Q7：領養的動物有健康保證嗎？</a></li>
            <li><a href="QA/qa.html#q8">Q8：動物已經結紮了嗎？</a></li>
            <li><a href="QA/qa.html#q9">Q9：我不能領養，但可以怎麼幫助這些動物？</a></li>
          </ul>
        </div>
      </section>
    `;
  });

  test('Q1 連結 href 應指向 QA/qa.html#q1', () => {
    const link = getByText(document.body, 'Q1：我要符合哪些條件才能領養寵物？');
    expect(link.getAttribute('href')).toBe('QA/qa.html#q1');
  });

  test('Q5 連結 href 應指向 QA/qa.html#q5', () => {
    const link = getByText(document.body, 'Q5：家裡有其他寵物，可以再領養嗎？');
    expect(link.getAttribute('href')).toBe('QA/qa.html#q5');
  });

  test('Q9 連結 href 應指向 QA/qa.html#q9', () => {
    const link = getByText(document.body, 'Q9：我不能領養，但可以怎麼幫助這些動物？');
    expect(link.getAttribute('href')).toBe('QA/qa.html#q9');
  });
});
