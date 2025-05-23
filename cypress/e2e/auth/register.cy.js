
describe('Registration Flow', () => {
  it('should allow a user to register', () => {
    cy.visit('/register');
    
    // Check for registration form elements
    cy.contains('Create Account').should('be.visible');

    cy.get('input[id="name"]').should('be.visible');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[id="password"]').should('be.visible');
    cy.get('input[id="confirmPassword"]').should('be.visible');
    
    // Enter user details
    cy.get('input[id="name"]').type('Test User');
    cy.get('input[type="email"]').type('newuser@example.com');
    cy.get('input[id="password"]').type('password123');
    cy.get('input[id="confirmPassword"]').type('password123');
    
    // Submit form
    cy.get('button[type="submit"]').click();
    
    // Verify successful registration (should redirect to dashboard)
    cy.url().should('include', '/dashboard');
  });

  it('should validate password matching', () => {
    cy.visit('/register');
    
    // Enter user details with mismatched passwords
    cy.get('input[id="name"]').type('Test User');
    cy.get('input[type="email"]').type('newuser@example.com');
    cy.get('input[id="password"]').type('password123');
    cy.get('input[id="confirmPassword"]').type('differentpassword');
    
    // Submit form
    cy.get('button[type="submit"]').click();
    
    // Should stay on registration page due to validation error
    cy.url().should('include', '/register');
  });
});
