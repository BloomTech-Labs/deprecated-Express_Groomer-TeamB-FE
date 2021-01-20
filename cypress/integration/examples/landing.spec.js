describe('Landing page tests', () => {

  it('Should render landing page components', () => {
    // TODO change url to /info once PRs are merged
    cy.visit('http://localhost:3000/');
    cy.get('.container').should('have.length', 3);
    cy.get('footer').should('be.visible');
  });
});
