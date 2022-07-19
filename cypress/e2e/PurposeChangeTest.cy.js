
context('Developer profile - purpose change - validation', () => {

    before('', () => {
        cy.visit("https://developers.livechat.com/console/profile")
        cy.intercept('GET', '**/v2/me', {fixture: 'mockingDevPro.json'} ).as('developerProfileMock')
        cy.loginToApp()
    })

    it('Purpose', () => {
        cy.intercept('POST', '**/v2/survey', {status: 200}).as('saveSurvey')
        cy.get('#radio-integrate').check({force: true})
        cy.contains('Save changes').scrollIntoView().click()
        cy.wait('@saveSurvey') 
        cy.contains('What brings you to LiveChat Developer Program?').parent().parent().find('button').should('be.disabled')
    })
  })