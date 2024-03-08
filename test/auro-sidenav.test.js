import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import '../src/auro-sidenav';

describe('auro-sidenav', () => {
  it('auro-sidenav is accessible by default', async () => {
    const el = await fixture(html`
      <auro-sidenav>
        <span slot="heading">Heading</span>
        <auro-sidenavitem class="linkOne" selected>Link 1</auro-sidenavitem>
        <auro-sidenavitem class="linkTwo">Link 2</auro-sidenavitem>
        <auro-sidenavitem class="linkThree">Link 3</auro-sidenavitem>
      </auro-sidenav>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-sidenav is accessible with static attr', async () => {
    const el = await fixture(html`
      <auro-sidenav>
        <span slot="heading">Heading</span>
        <auro-sidenavitem class="linkOne" selected>Link 1</auro-sidenavitem>
        <auro-sidenavitem class="linkTwo">Link 2</auro-sidenavitem>
        <auro-sidenavitem class="linkThree">Link 3</auro-sidenavitem>
      </auro-sidenav>
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

  it('renders collapsible sidebar when static property is undefined', async () => {
    const el = await fixture(html`
      <auro-sidenav></auro-sidenav>
    `);

    expect(el.shadowRoot.querySelector('auro-accordion')).to.not.be.null;
  });

  it('renders non-static sidebar when static property is truthy', async () => {
    const el = await fixture(html`
      <auro-sidenav static></auro-sidenav>
    `);

    expect(el.shadowRoot.querySelector('auro-accordion')).to.be.null;
  });
});
