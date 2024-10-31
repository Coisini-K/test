// https://on.cypress.io/api
describe('My First Test 1', () => {
  it('visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', '计数');
  });
});
