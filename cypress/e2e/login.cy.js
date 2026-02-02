describe('Login', () => {
  it('Login com dados validos deve permtir entrada no sistema', () => {
    // Arrange
    cy.visit('/')
    cy.get('#signin').click()

    // Act
    cy.get('#username').click()
    cy.get('[id^="react-select"][id*="option"]')
      .contains('demouser').click()

    cy.get('#password').click()
    cy.get('[id^="react-select"][id*="option"]')
      .contains('testingisfun99').click()

    cy.get('#login-btn').click()

    //Assert
    cy.contains('span','Logout').should('be.visible')
  })

  
})  
