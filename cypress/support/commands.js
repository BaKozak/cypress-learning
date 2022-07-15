// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const login = 'git.hubber@interia.eu'
const pass = 'LivechatTesting!'

Cypress.Commands.add('loginToApp', () => {
    cy.get('#email').type(login)
    cy.get('#password').type(pass)
    cy.get('[class="button red"]').contains('Sign in').click().wait(1500)
})




    Cypress.Commands.add(
      'validateField',
      (
        validatorMessage,
        inputField,
        messageCssValue = 'rgb(255, 76, 77)',
        inputCssValue = '0.987554px solid rgb(255, 76, 77)'
      ) => {
        cy.contains(validatorMessage)
          .scrollIntoView()
          .should('be.visible')
          .and('have.css', 'color', messageCssValue)
        cy.get(inputField).should('have.css', 'border', inputCssValue)
      }
    )


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


