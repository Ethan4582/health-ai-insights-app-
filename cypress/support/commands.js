
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command for login
Cypress.Commands.add('login', (email = 'user@example.com', password = 'password') => {
  cy.visit('/login');
  cy.get('input[id="email"]').should('be.visible').type(email);       // updated selector
  cy.get('input[id="password"]').should('be.visible').type(password); // updated if needed
  cy.get('button[type="submit"]').click();
  
  // Verify we're on the dashboard
  cy.url().should('include', '/dashboard');
});

// Custom command to check accessibility
Cypress.Commands.add('checkA11y', () => {
  cy.log('Checking accessibility...');
  // This is a placeholder for actual accessibility testing
  // You can integrate tools like cypress-axe here
});

// Custom command to fill diabetes form with default data
Cypress.Commands.add('fillDiabetesForm', () => {
  cy.get('input[name="pregnancies"]').type('3');
  cy.get('input[name="glucose"]').type('120');
  cy.get('input[name="bloodPressure"]').type('70');
  cy.get('input[name="skinThickness"]').type('20');
  cy.get('input[name="insulin"]').type('80');
  cy.get('input[name="bmi"]').type('25.6');
  cy.get('input[name="diabetesPedigreeFunction"]').type('0.587');
  cy.get('input[name="age"]').type('50');
});
