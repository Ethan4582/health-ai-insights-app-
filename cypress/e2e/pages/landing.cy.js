
describe('Landing Page', () => {
  it('should display the landing page correctly', () => {
    cy.visit('/');
    
    // Check for key elements
    cy.contains('Early Detection Saves Lives with AI').should('be.visible');
    cy.contains('Get Started').should('be.visible');
    cy.contains('Create Account').should('be.visible');
    
    // Test navigation to login
    cy.contains('Get Started').click();
    cy.url().should('include', '/login');
    
    // Go back to landing page
    cy.visit('/');
    
    // Test navigation to register
    cy.contains('Create Account').click();
    cy.url().should('include', '/register');
  });

  it('should have the diseases section', () => {
    cy.visit('/');
    
    cy.contains('Diseases We Can Predict').should('be.visible');
    cy.contains('Breast Cancer').should('be.visible');
    cy.contains('Diabetes').should('be.visible');
    cy.contains('Parkinson\'s Disease').should('be.visible');
  });
});
