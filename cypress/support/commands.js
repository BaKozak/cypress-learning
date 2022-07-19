const login = 'git.hubber@interia.eu'
const pass = 'LivechatTesting!'

Cypress.Commands.add('loginToApp', () => {
    cy.get('#email').type(login)
    cy.get('#password').type(pass)
    cy.get('[class="button red"]').contains('Sign in').click().wait(2000)
})

    Cypress.Commands.add(
      'verificateColorRed', (
        message,
        inputField,
        messageCss = 'rgb(255, 76, 77)',
        inputCss = '0.987554px solid rgb(255, 76, 77)'
      ) => {
        cy.contains(message)
          .scrollIntoView()
          .should('be.visible')
          .and('have.css', 'color', messageCss)
        cy.get(inputField).scrollIntoView().should('have.css', 'border', inputCss)
      }
    )



