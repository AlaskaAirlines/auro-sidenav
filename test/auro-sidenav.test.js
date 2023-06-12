import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-sidenav';

describe('auro-sidenav', () => {
  it('sets the CSS class on auro-sidenav > div element', async () => {
    const el = await fixture(html`
      <auro-sidenav cssclass="testClass"></auro-sidenav>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-sidenav is accessible', async () => {
    const el = await fixture(html`
      <auro-sidenav cssclass="testClass"></auro-sidenav>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-sidenav custom element is defined', async () => {
    const el = await !!customElements.get("auro-sidenav");

    await expect(el).to.be.true;
  });
});
