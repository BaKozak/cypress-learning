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

const login = 'git.hubber@interia.pl'
const pass = 'LivechatTesting!'

Cypress.Commands.add('loginToApp', () => {
    cy.visit("https://accounts.livechat.com/?client_id=49aba739e5310548611ec9a209f7ac03&redirect_uri=https%3A%2F%2Fdevelopers.livechat.com%2Fconsole%2F&response_type=token")
    cy.get('#email').type(login)
    cy.get('#password').type(pass)
    cy.get('[class="button red"]').contains('Sign in').click()
})

Cypress.Commands.add('login', (email, password) => {
    Cypress.log({
      name: 'login',
    })
  
    cy.request({
      url: 'https://accounts.labs.livechat.com',
      method: 'POST',
      form: true,
      qs: {
        client_id: Cypress.env('REACT_APP_ACCOUNTS_CLIENTID'),
        redirect_uri: 'http://localhost:3006/',
        response_type: 'token',
      },
      body: {
        email: email,
        password: password,
      },
      followRedirect: false,
      headers: {
        Referer: `https://accounts.labs.livechat.com/?client_id=${Cypress.env(
          'REACT_APP_ACCOUNTS_CLIENTID'
        )}&redirect_uri=http%3A%2F%2Flocalhost%3A3006%2F&response_type=token`,
      },
    })
    })