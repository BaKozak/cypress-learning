describe('My Profile Developer - Profile Details - validation of Fields', () => {

    before('', () => {
        cy.visit("https://developers.livechat.com/console/profile")
        cy.loginToApp()
    })
    
    it('Mocking', () => {
        cy.intercept('GET', '**/v2/me', {fixture: 'mockingDevPro.json'} ).as('mocker')
        cy.get('#name').should('have.value', 'Creed Bratton')
        cy.get('#company').should('have.value', 'Paper Company')
        cy.get('#skills').children().first().invoke('prop', 'textContent').should('contain', 'JavaScript')
        cy.get('#bio').should('have.value', 'All I do is so I can go scuba.')
        cy.get('#discordUserName').should('have.value', 'WilliamCharlesSchneider#0111')
        cy.get('#website').should('have.value', 'www.creedthought.gov.www/creedthoughts')
        cy.get('#twitter').should('have.value', 'dont use it')
        cy.get('#contactEmail').should('have.value', "ilikecircuses@dundermifflin.com")
    })
})

