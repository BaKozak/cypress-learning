const login = 'git.hubber@interia.eu'
const pass = 'LivechatTesting!'


describe('empty spec', () => {
  it('passes', () => {
    cy.visit("https://accounts.livechat.com/?client_id=49aba739e5310548611ec9a209f7ac03&redirect_uri=https%3A%2F%2Fdevelopers.livechat.com%2Fconsole%2F&response_type=token")
    cy.get('#email').type(login)
    cy.get('#password').type(pass)
    cy.get('[class="button red"]').contains('Sign in').click()
  })
})