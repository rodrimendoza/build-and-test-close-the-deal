describe('Modal Interaction Test', () => {
  before(() => {
    cy.visit(`http://127.0.0.1:${Cypress.env('WEB_APP_PORT') || 8080}`); // Replace with the actual path to your index.html file
  });

  it('should open modal and check it shows "hello"', () => {
    // Click the button to open the modal
    cy.get('button[data-target="#myModal"]').click();

    // Wait for the modal to become visible and check its text content
    cy.get('#myModal')
      .should('be.visible')
      .within(() => {
        cy.get('.modal-body').should('contain.text', 'Hello');
      });
  });
});
