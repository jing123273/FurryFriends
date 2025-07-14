/**
 * @jest-environment jsdom
 */
require('@testing-library/jest-dom');
const { fireEvent } = require('@testing-library/dom');

test('按下按鈕後，應該顯示訊息', () => {
  document.body.innerHTML = `
    <button id="myButton">Click me</button>
    <p id="output"></p>
  `;

  const button = document.getElementById('myButton');
  const output = document.getElementById('output');

  button.addEventListener('click', () => {
    output.textContent = 'Button was clicked!';
  });

  fireEvent.click(button);

  expect(output).toHaveTextContent('Button was clicked!');
});
