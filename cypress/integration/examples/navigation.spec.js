/// <reference types="cypress" />

describe('Navigation tests', () => {

  it('Renders navigation and all its elements on initial page load', () => {
    cy.visit('http://localhost:3000/');
    // get the nav container
    cy.get('.App-Nav');
    // get info link
    cy.get('[href="/"]');
    // get login link
    cy.get('[href="/login"]');
    // get the logo
    cy.get('.express-logo');
    // get logo content
    cy.get('.groomer-one');
    cy.get('.groomer-two');
  });

  it('Should only display two nav links on initial page load (no logged in user)', () => {
    // get nav links
    cy.get('.anchor:visible').should('have.length', 2);
    //  alternative method with parent child chaining
    cy.get('.nav-bar').find('.anchor').should('have.length', 2);
  });

  it('Should display Okta sign in widget after clicking login button', () => {
    // get login link
    cy.get('[href="/login"]');
    //  alternative method with eq
    //  (zero based index, finds that item in array of elements)
    cy.get('.anchor:visible').eq(1).contains('Login').click();
    cy.get('#sign-in-widget');
  });

  it('Should display four nav links on page after a groomer logs in', () => {
    cy.get('.anchor:visible').eq(1).contains('Login').click();
    cy.get('#okta-signin-username').type('llama003@maildrop.cc');
    cy.get('#okta-signin-password').type('Test003Test');
    cy.get('#okta-signin-submit').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000);
    cy.get('.anchor').should('have.length', 4);
  });

  it('Should display two nav links after groomer clicks logout', () => {
    cy.get('.anchor:visible').eq(3).contains('Logout').click();
    cy.get('.anchor').should('have.length', 2);
  });

  it('Should display four nav links on page after a customer logs in', () => {
    cy.get('.anchor:visible').eq(1).contains('Login').click();
    cy.get('#okta-signin-username').type('llama007@maildrop.cc');
    cy.get('#okta-signin-password').type('Test007Test');
    cy.get('#okta-signin-submit').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000);
    cy.get('.anchor').should('have.length', 4);
  });

  it('Should display two nav links after customer clicks logout', () => {
    cy.get('.anchor:visible').eq(3).contains('Logout').click();
    cy.get('.anchor').should('have.length', 2);
  });
//  TODO add tests to check for routing to info page after PR containing the
//   nav changes has been merged
});
