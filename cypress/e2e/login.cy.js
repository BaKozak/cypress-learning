const login = 'git.hubber@interia.pl'
const pass = 'LivechatTesting!'

describe('LOGIN', () => {
  it('passes', () => {
    cy.visit("https://accounts.livechat.com/?client_id=49aba739e5310548611ec9a209f7ac03&redirect_uri=https%3A%2F%2Fdevelopers.livechat.com%2Fconsole%2F&response_type=token")
    cy.get('#email').type(login)
    cy.get('#password').type(pass)
    cy.get('[class="button red"]').contains('Sign in').click().wait(2000)
  })


  it('We support Ukraine - check text and forwarding to new URL', () => {
    cy.get('.css-11iqqdu').then( ukraine => {
      cy.wrap(ukraine).should('be.visible')
      cy.wrap(ukraine).should('include.text', 'We support Ukraine. We’ll be happy to join forces with you.').and('contain.text', 'Volunteer your tech skills.')
      cy.wrap(ukraine).find('a').click()
    })
    cy.url().should('include', 'updates/support-ukraine')
  })
<<<<<<< Updated upstream


  // it('We support Ukraine - check', () => {
  //   cy.get('.css-11iqqdu').should('be.visible')
  //   .and( 'include.text', 'We support Ukraine. We’ll be happy to join forces with you.')
  //   .and('contain.text', 'Volunteer your tech skills.')
  // })

})
=======
})

it('entering My Profile Developer',)
>>>>>>> Stashed changes
