before('', () => {
    cy.visit("https://developers.livechat.com/console/profile")
    cy.loginToApp()
  })

  it('Discord form', () => {
    cy.contains(`You can now join our developer community. We are waiting for you!`).parent().find('button').then( DevCom => {
      cy.wrap(DevCom).parent().invoke('prop', 'href').should('include', 'https://discord.gg')
    })
  })
