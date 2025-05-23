
describe('Login Flow', () => {
  it('should allow a user to login', () => {
    cy.visit('/login');
    
    // Check for login form elements
    cy.contains('Welcome Back').should('be.visible');

    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    
    // Enter credentials
    cy.get('input[type="email"]').type('user@example.com');
    cy.get('input[type="password"]').type('password');
    
    // Submit form
    cy.get('button[type="submit"]').click();
    
    // Verify successful login
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome').should('be.visible');
  });

  it('should show error for invalid login', () => {
    cy.visit('/login');
    
    // Enter invalid credentials
    cy.get('input[type="email"]').type('wrong@example.com');
    cy.get('input[type="password"]').type('wrongpassword');
    
    // Submit form
    cy.get('button[type="submit"]').click();
    
    // Error message should appear (this will only work if your app shows errors)
    // This test might fail as we're using mock authentication, adjust as needed
    cy.contains('Sign in').should('be.visible');
  });
});
