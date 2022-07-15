
context('Developer profile - purpose change - validation', () => {

    before('', () => {
        cy.visit("https://developers.livechat.com/console/profile")
        cy.intercept('GET', '**/v2/me', {fixture: 'mockingDevPro.json'} ).as('mocker')
        cy.loginToApp()
    })

    it('Purpose', () => {

        cy.intercept('POST', '**/v2/survey', {status: 200}).as('newMocker')
        cy.get('#radio-integrate').check({force: true})
        cy.contains('Save changes').scrollIntoView().click()
        cy.wait('@newMocker')
        cy.contains('What brings you to LiveChat Developer Program?').parent().parent().find('button').should('be.disabled')
    })
  })