describe('Creates a New Account', () => {
  it('Creates an account', () => {
    cy.visit('/')
    // Visit the sign up page
    cy.contains('Sign up').click()

    // Placeholder email address and password for demonstration. 
    // Use a new email each time this is run
    const email = 'tsqnu7+bef8yrjx208e8@sharklasers.com';
    const password = 'MyPassword12$';

    // Enter the email
    cy.get('#email').type(email)
    // Assert the email input value
    .should('have.value', email)

    // Enters the password
    cy.get('#password').type(password)
    // Assert the password input value (not recommended for security reasons)
    .should('have.value', password)

    // Registers the account
    cy.contains('Continue').click()
  })
})



describe('ArcheMedX Internship Technical Exercise', () => {

  // Use the same email as the one that was registered in the test above
  const username = 'tsqnu7+bef8yrjx208e8@sharklasers.com';
  const password = 'MyPassword12$';

  it('Logs In and Completes Activity', () => {
    cy.visit('/');

    // Log in
    cy.get('#username').clear().type(username).should('have.value', username);
    cy.get('#password').clear().type(password).should('have.value', password);
    cy.contains('Continue').click();

    // Perform actions on the ArcheMedX platform
    cy.origin('https://kyber.arche.services', () => {
      // Enter the first name
      cy.get('[for="given-name"]').next().type('testFirstName');

      // Enter the last name
      cy.get('[for="family-name"]').next().type('testLastName');

      // Select a role
      cy.get('[for="tag-group-2e1d9fe0-f5a0-4fe8-9af9-cf5a3d639d4a"]').next().click();
      cy.contains('Role A').click();

      // Submit the form
      cy.get('.reagent-form-submit-button-container').click();

      // Click on the pretest start button
      cy.get('[data-test="smart-card-cta"]').click();

      // // Clicks on the questionnaire button
      cy.get('[data-test="questionnaire-cta"]').click();

      // Select the option "A: 1931"
      cy.get('label[for="9c591eb0-f789-4cfa-9bc1-a3263f5ad5fa"]').click();

      // Click on "I'm Guessing" confidence buttons
      cy.get('[data-test="confidence-button"]').eq(0).click();

      // Select the option "C: Mary Shelley"
      cy.get('label[for="e91de88d-07f9-4c66-8275-da1262830b0a"]').click();

      // Click on "I think" confidence buttons
      cy.get('[data-test="confidence-button"]').eq(1).click();

      // Wait for checkboxes to be visible and clickable
      cy.get('[type="checkbox"]').check({ force: true });

      // Click on "I'm Sure" confidence buttons
      cy.get('[data-test="confidence-button"]').eq(2).click();

      // Submits Pretest
      cy.get('[data-test="questionnaire-submit-button"]').click();

      // Continues Activity
      cy.get('[data-test="continue-to-activity-button"]').click();

      // Click on Play button
      cy.get('.fa-4x').click();

      // Take and Start the Post-Test
      cy.get('button.c0023').contains('Take Post-Test').click();

      cy.get('button[data-test="questionnaire-cta"]').click(); 
      
      // Select the option "A: 1931"
      cy.get('label[for="9c591eb0-f789-4cfa-9bc1-a3263f5ad5fa"]').click();

      // Click on "I'm Guessing" confidence buttons
      cy.get('[data-test="confidence-button"]').eq(0).click();

      // Select the option "C: Mary Shelley"
      cy.get('label[for="e91de88d-07f9-4c66-8275-da1262830b0a"]').click();

      // Click on "I think" confidence buttons
      cy.get('[data-test="confidence-button"]').eq(1).click();

      // Wait for checkboxes to be visible and clickable
      cy.get('[type="checkbox"]').check({ force: true });

      // Click on "I'm Sure" confidence buttons
      cy.get('[data-test="confidence-button"]').eq(2).click();

      // Submits Post-Test
      cy.get('[data-test="questionnaire-submit-button"]').click();

      // Take Evaluation and return to the 'Curriculum Complete' Page
      cy.get('button.c0023').contains('Take Evaluation').click();
     });
      cy.get('button.c0023.c00512').click();
      cy.get('for="7e1bdc0b-22be-4184-a207-49f5430a5ad3"').click();
      cy.get('button.c0025.c00184').click();
      cy.get('[data-test="questionnaire-submit-button"]').click();
      cy.get('button.c0053.c00528').click();
  });
});

