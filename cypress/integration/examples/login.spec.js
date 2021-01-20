describe('Login tests', () => {

  it('Should render Okta sign in widget when a user clicks login', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.anchor:visible').eq(1).contains('Login').click();
    cy.get('#sign-in-widget');
  });

  it('Should not display checkbox as checked when first rendered', () => {
    cy.get('.checked').should('not.exist');
  });

  it('Should allow user to check "remember me" checkbox', () => {
    cy.get('.custom-checkbox').click();
    // checked class only appears after we have checked the box
    cy.get('.checked');
  });

  it('Should only display forgot password and help links if need help' +
    ' signing in is clicked', () => {
    cy.get('.js-forgot-password').should('not.be.visible');
    cy.get('#help-links-container > :nth-child(2)').should('not.be.visible');
    cy.get('.help').click();
    cy.get('.js-forgot-password').should('be.visible');
    cy.get('#help-links-container > :nth-child(2)').should('be.visible');
  });

  it('Should hide need help and forgot password links if need help signing' +
    ' in is clicked while they are visible', () => {
    cy.get('.help').click();
    cy.get('.js-forgot-password').should('not.be.visible');
    cy.get('#help-links-container > :nth-child(2)').should('not.be.visible');
  });

  it('Should display reset password widget if forgot password is clicked', () => {
    cy.get('.help').click();
    cy.get('.js-forgot-password').click();
    cy.get('.okta-form-title').contains('Reset Password');
  });

  it('Should allow user to click back to sign in button to get back to' +
    ' sign in from reset password', () => {
    cy.get('.link').click();
    cy.wait(1000);
    cy.get('.custom-checkbox');
  });

  it('Should display error if reset password button clicked without text' +
    ' entered in the input', () => {
    cy.get('.help').click();
    cy.wait(1000);
    cy.get('.js-forgot-password').click();
    cy.wait(1000);
    cy.get('.button').click();
    cy.get('.okta-form-infobox-error').should('be.visible');
  });

  it('Should allow user to type into email or username input', () => {
    cy.get('#account-recovery-username').type('llama007@maildrop.cc');
    cy.get('#account-recovery-username').should('have.value', 'llama007@maildrop.cc');
  });

  // ! Okta being weird and throwing errors here
  // it('Should allow user to submit email for password reset and display' +
  //   ' success message', () => {
  //   cy.wait(2000);
  //   cy.get('.button').click();
  //   cy.get('.okta-form-subtitle').should('be.visible');
  // });
  // ! Okta being weird and throwing errors here
  // it('Should display back to sign in button which brings a user back to' +
  //   ' sign in after resetting email successfully', () => {
  //   cy.get('.button').contains('Back to Sign In').click();
  //   cy.get('.help').should('be.visible');
  // });

  it('Should go back to sign in widget if back to sign in link is clicked', () => {
    cy.get('.link').click();
    cy.get('#okta-signin-submit').should('be.visible');
  });

  it('Should display error if sign in button clicked with missing' +
    ' username', () => {
    cy.get('#okta-signin-submit').click();
    cy.get('.okta-form-infobox-error').should('be.visible');
  });
  // ! can not check for individual input errors because okta id's keep changin
  it('Should display error if sign in button clicked with missing' +
    ' password', () => {
    cy.get('#okta-signin-submit').click();
    cy.get('.okta-form-infobox-error').should('be.visible');
  });

  // ! can not check for individual input errors because okta id's keep changin
  it('Should allow user to type into username input', () => {
    cy.get('#okta-signin-username').type('llama003@maildrop.cc');
    cy.get('#okta-signin-username').should('have.value', 'llama003@maildrop.cc');

  });

  it('Should allow user to type into password input', () => {
    cy.get('#okta-signin-password').type('Test003Test');
    cy.get('#okta-signin-password').should('have.value', 'Test003Test');
  });

  it('Should log a user in if form was filled correctly after sign in button' +
    ' is clicked', () => {
    cy.get('#okta-signin-submit').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000);
    cy.get('.anchor').should('have.length', 4);
  });

});
