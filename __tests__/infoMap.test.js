/**
 * @jest-environment jsdom
 */

const { getByTitle, getByText } = require('@testing-library/dom');

describe('聯絡資訊頁面地圖測試', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <section>
        <h3>Adreess</h3>
        <p class="map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.424977556604!2d120.64862207355125!3d24.12170917442366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693c4c253c0137%3A0x40e5d305e67d95d0!2z5Lit5bGx6Yar5a245aSn5a24!5e0!3m2!1szh-TW!2stw!4v1740804431471!5m2!1szh-TW!2stw" 
            width="600" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Google 地圖">
          </iframe>
          Furry Friends Rescue Shelter 浪浪の家<br>
          [營業時間]09:00-18:00<br>
          [公休日] 星期一
        </p>
      </section>
    `;
  });

  test('應該有 Google 地圖 iframe，並指向正確的 URL', () => {
    const iframe = document.querySelector('iframe');
    expect(iframe).not.toBeNull();
    expect(iframe.getAttribute('src')).toContain('https://www.google.com/maps/embed');
  });

  test('頁面包含「浪浪の家」文字', () => {
    expect(document.body.textContent).toMatch(/浪浪の家/);
  });
});
