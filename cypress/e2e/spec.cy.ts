describe('Home page', async () => {
  it('Create news', () => {
    cy.visit('/');
    cy.get('.el-input__wrapper').type('Hello, World');

    cy.get('.el-button').click();
    cy.get('#1 ').should('have.text', 'Hello, World');
    cy.get('.el-input__wrapper').clear();
  });
});
