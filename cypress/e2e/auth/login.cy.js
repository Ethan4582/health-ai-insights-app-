
describe('Login Flow', () => {
  it('should allow a user to login', () => {
    cy.visit('/login');
    
    // Check for login form elements
    cy.contains('h1', 'Login to your account').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    
    // Enter credentials
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password');
    
    // Submit form
    cy.get('button[type="submit"]').click();
    
    // Verify successful login
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome').should('be.visible');
  });
});
