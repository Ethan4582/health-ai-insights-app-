
describe('Diabetes Prediction', () => {
  beforeEach(() => {
    // Login before each test
    cy.login();
  });
  
  it('should navigate to diabetes prediction and fill the form', () => {
    // Navigate to diabetes prediction
    cy.visit('/dashboard');
    cy.contains('Diabetes').click();
    
    // Verify we're on the diabetes prediction page
    cy.contains('Diabetes Prediction').should('be.visible');
    
    // Fill out the form
    cy.get('button').contains('Fill Sample Data').click();
    
    // Submit the form
    cy.contains('button', 'Predict Now').click();
    
    // Verify prediction result appears
    cy.contains('Prediction Result').should('be.visible');
  });
});
