
describe('App Navigation', () => {
  beforeEach(() => {
    cy.login();
  });
  
  it('should navigate between different sections', () => {
    // Start at dashboard
    cy.visit('/dashboard');
    
    // Check disease selector
    cy.contains('Select a disease to predict').should('be.visible');
    
    // Navigate to breast cancer prediction via UI
    cy.contains('Breast Cancer').click();
    cy.url().should('include', '/predict/breast-cancer');
    
    // Navigate back to dashboard
    cy.contains('Back to Dashboard').click();
    cy.url().should('include', '/dashboard');
    
    // Navigate to diabetes prediction via UI
    cy.contains('Diabetes').click();
    cy.url().should('include', '/predict/diabetes');
    
    // Navigate back to dashboard
    cy.contains('Back to Dashboard').click();
    cy.url().should('include', '/dashboard');
    
    // Navigate to parkinsons prediction via UI
    cy.contains('Parkinson').click();
    cy.url().should('include', '/predict/parkinsons');
  });
});
