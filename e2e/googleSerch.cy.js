
describe('google search cat',()=> {
  it('wikipedia gatos', () => {
    cy.visit('https://www.google.com.uy/');
    cy.xpath('//input[contains(@class,"gLFyf")]').type('Cat Wiki{enter}');
    cy.xpath(
      '//h3/ancestor::a[contains(@href,"https://en.wikipedia.org/wiki/Cat")]'
    ).click();
  });
  // last try
})