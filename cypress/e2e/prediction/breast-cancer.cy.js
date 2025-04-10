
describe('Breast Cancer Prediction', () => {
  beforeEach(() => {
    // Login before each test
    cy.login();
  });
  
  it('should navigate to breast cancer prediction page', () => {
    // Navigate to breast cancer prediction
    cy.visit('/predict/breast-cancer');
    
    // Verify we're on the breast cancer prediction page
    cy.contains('Breast Cancer Prediction').should('be.visible');
    
    // Check for form elements
    cy.get('form').should('be.visible');
    cy.contains('button', 'Fill Sample Data').should('be.visible');
    cy.contains('button', 'Predict Now').should('be.visible');
  });
  
  it('should fill the form with sample data and submit', () => {
    cy.visit('/predict/breast-cancer');
    
    // Fill out the form with sample data
    cy.get('button').contains('Fill Sample Data').click();
    
    // Submit the form
    cy.contains('button', 'Predict Now').click();
    
    // Verify prediction result appears
    cy.contains('Prediction Result').should('be.visible');
  });
});
