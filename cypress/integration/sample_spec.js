describe('Team To-Do Page', function() {
  it('Visits the Team To-Do page', function() {
    cy.visit('http://localhost:3000');
  });

  it('contains a user name', function() {
    cy.contains('Jordan Pillai');
  });

  it('contains a page title', function() {
    cy.contains('Team To-Do List');
  });

  it('can add a todo', function() {
    cy.contains('Add a Todo').click();
    cy.get('input').type('Hello, World');
    cy.contains('Submit').click();
  });

  it('can complete a todo', function() {
    cy.get('[type="checkbox"]').check();
  });

  it('can delete a todo', function() {
    cy.get('[aria-label="Delete"]').click();
  });
});
