import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import '../src/auro-sidenav';

describe('auro-sidenav', () => {
  beforeEach(() => {
    window.innerWidth = 800
  })


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

    await expect(levelOneLink).to.have.attr('tier', '0');
    await expect(levelTwoLink).to.have.attr('tier', '1');
    await expect(section).to.have.attr('chevron', 'true');
    await expect(section).to.have.attr('fluid', 'true');
  });

  it('auro-sidenav updates sidenavitem with selected attribute', async () => {

    const el = await fixture(html`
      <auro-sidenav>
      <span slot="heading">Heading</span>
      <auro-sidenavitem class="linkOne" selected>Link 1</auro-sidenavitem>
      <auro-sidenavitem class="linkTwo">Link 2</auro-sidenavitem>
      <auro-sidenavitem class="linkThree">Link 3</auro-sidenavitem>
    </auro-sidenav>
    `);

    const linkOne = el.querySelector(".linkOne");
    const linkTwo = el.querySelector(".linkTwo");
    const linkThree = el.querySelector(".linkThree");

    expect(linkOne).to.have.attr('selected');
    expect(linkTwo).not.to.have.attr('selected');
    expect(linkThree).not.to.have.attr('selected');

    linkTwo.dispatchEvent(new Event('mousedown', {
      bubbles: true,
      composed: true,
    }));
    await elementUpdated(el);

    expect(linkOne).not.to.have.attr('selected');
    expect(linkTwo).to.have.attr('selected');
    expect(linkThree).not.to.have.attr('selected');

    linkThree.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      key: 'Enter'
    }));
    await elementUpdated(el);

    expect(linkOne).not.to.have.attr('selected');
    expect(linkTwo).not.to.have.attr('selected');
    expect(linkThree).to.have.attr('selected');
  });

  it('verify that attributes are passed down to auro-accordion ', async () => {
    window.innerWidth = 500
    const el = await fixture(html`
        <auro-sidenav
          alignRight="true"
          emphasis="true"
          expanded="true"
          grouped="true"
          chevron="right"
          variant="lg"
        >
            <span slot="heading">Heading</span>
            <auro-sidenavitem class="linkOne" selected>Link 1</auro-sidenavitem>
            <auro-sidenavitem class="linkTwo">Link 2</auro-sidenavitem>
            <auro-sidenavitem class="linkThree">Link 3</auro-sidenavitem>
        </auro-sidenav>
    `);

    await elementUpdated(el);

    const accordion = el.shadowRoot.querySelector(`auro-accordion`)

    expect(accordion).to.have.attribute('alignright');
    expect(accordion).to.have.attribute('emphasis');
    expect(accordion).to.have.attribute('expanded');
    expect(accordion).to.have.attribute('grouped');
    expect(accordion).to.have.attribute('chevron', 'right');
    expect(accordion).to.have.attribute('variant', 'lg');
  });

  it('CTA is rendered when `navigationLink` attribute is NOT present', async () => {
    const el = await fixWebComponent( undefined)
    const link = el.shadowRoot.querySelector(`auro-accordion`);

    await expect(link).not.to.be.null;
  });
});
