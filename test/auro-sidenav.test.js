import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-sidenav';

describe('auro-sidenav', () => {
  it('auro-sidenav is accessible', async () => {
    const el = await fixture(html`
      <auro-sidenav></auro-sidenav>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-sidenav custom element is defined', async () => {
    const el = await !!customElements.get("auro-sidenav");

    await expect(el).to.be.true;
  });

  it('auro-sidenav applies proper attributes to slotted children', async () => {

    const el = await fixture(html`
      <auro-sidenav>
      <span slot="heading">Heading</span>
      <auro-sidenavitem class="levelOneLink">Level 1</auro-sidenavitem>
      <auro-sidenavsection>
        <span slot="trigger">Section</span>
        <auro-sidenavitem class="levelTwoLink">Level 2</auro-sidenavitem>
      </auro-sidenavsection>
    </auro-sidenav>
    `);

    const levelOneLink = el.querySelector(".levelOneLink");
    const levelTwoLink = el.querySelector(".levelTwoLink");
    const section = el.querySelector("auro-sidenavsection");

    console.log(levelOneLink)

    await expect(levelOneLink).to.have.attr('tier', '0');
    await expect(levelTwoLink).to.have.attr('tier', '1');
    await expect(section).to.have.attr('chevron', 'true');
    await expect(section).to.have.attr('fluid', 'true');
  });
});
