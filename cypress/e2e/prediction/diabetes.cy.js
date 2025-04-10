
describe('Diabetes Prediction', () => {
  beforeEach(() => {
    // Login before each test
    cy.login();
  });
  
  it('should navigate to diabetes prediction and fill the form', () => {
    // Navigate to diabetes prediction
    cy.visit('/predict/diabetes');
    
    // Verify we're on the diabetes prediction page
    cy.contains('Diabetes Prediction').should('be.visible');
    
    // Fill out the form
    cy.get('button').contains('Fill Sample Data').click();
    
    // Submit the form
    cy.contains('button', 'Predict Now').click();
    
    // Verify prediction result appears
    cy.contains('Prediction Result').should('be.visible');
  });
  
  it('should validate inputs before submission', () => {
    cy.visit('/predict/diabetes');
    
    // Try to submit without filling the form
    cy.contains('button', 'Predict Now').click();
    
    // Form should prevent submission or show validation errors
    // This test might need adjustment based on your validation behavior
    cy.url().should('include', '/predict/diabetes');
  });
  
  it('should allow manual entry of values', () => {
    cy.visit('/predict/diabetes');
    
    // Fill the form manually using our custom command
    cy.fillDiabetesForm();
    
    // Submit the form
    cy.contains('button', 'Predict Now').click();
    
    // Verify prediction result appears
    cy.contains('Prediction Result').should('be.visible');
  });
});
