
describe('Parkinsons Disease Prediction', () => {
  beforeEach(() => {
    // Login before each test
    cy.login();
  });
  
  it('should navigate to parkinsons prediction page', () => {
    // Navigate to parkinsons prediction
    cy.visit('/predict/parkinsons');
    
    // Verify we're on the parkinsons prediction page
    cy.contains('Parkinson\'s Disease Prediction').should('be.visible');
    
    // Check for form elements
    cy.get('form').should('be.visible');
    cy.contains('button', 'Fill Sample Data').should('be.visible');
    cy.contains('button', 'Predict Now').should('be.visible');
  });
  
  it('should fill the form with sample data and submit', () => {
    cy.visit('/predict/parkinsons');
    
    // Fill out the form with sample data
    cy.get('button').contains('Fill Sample Data').click();
    
    // Submit the form
    cy.contains('button', 'Predict Now').click();
    
    // Verify prediction result appears
    cy.contains('Prediction Result').should('be.visible');
  });
});
