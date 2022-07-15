//  DO POPRAWY


describe('Red colors of input fields and notifications', () => {

    before('', () => {
        cy.visit("https://developers.livechat.com/console/profile")
        cy.loginToApp()
    })

    it('Typing fields - color verification', () => {

          cy.get('#name').clear()
          cy.contains('Profile details').parent().find('button').click()
          cy.verificateColorRed('Please enter a valid Full Name. Full Name cannot be empty.','[data-cy="field-input-name"]')
          cy.get('#name').clear().type('JimothyHalpertPamBeeslyDwightSchruteAndrewBernardStanleyHudsonRyanHowardPhyllisVanceAngelaMartinOscarMartinezKellyKapoorTobyFlendersonMeredithPalmerCreeBratton')
          cy.contains('Profile details').parent().find('button').click()
          cy.verificateColorRed('Please enter a valid Full Name. Full Name cannot contain more than 64 characters.', '[data-cy="field-input-name"]')
          cy.get('#jobTitle').type('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890ABC')
          cy.contains('Profile details').parent().find('button').click()
          cy.verificateColorRed('Please enter a valid Job Title. Job Title cannot contain more than 128 characters.', '[data-cy="field-input-job-title"]')
          cy.get('#company').type(`Out of paper, out of stock, there's friendly faces around the block, break loose from the chains that are causing your pain.`)
          cy.contains('Profile details').parent().find('button').click()
          cy.verificateColorRed(`Please enter a valid Company Name. Company Name cannot contain more than 64 characters.`, '[data-cy="field-input-company"]')
          cy.get('#bio').type(`David here it is. My, philosophy is, basically this. And this is something that I live by. And I always have. And I always will. Don't, ever, for any reason, do anything, to anyone, for any reason, ever, no matter what, no matter where, or who or who you are with, or or where you are going, or, or where you've been. Ever. For any reason. Never ever. Whatsoever.
          Sometimes I'll start a sentence, and I don't even know where it's going. I just hope I find it along the way. Like an improv conversation. An improversation.`)
          cy.contains('Profile details').parent().find('button').click()
          cy.verificateColorRed('Please enter a valid Short bio. Short bio cannot contain more than 512 characters.', '[name="bio"]') 
          cy.get('#contactEmail').type(`no-monkey`)
          cy.contains('Profile details').parent().find('button').click()
          cy.verificateColorRed('Please enter a valid Preferred Contact Email.', '[data-cy="field-input-contact-email"]')
          cy.get('#discordUserName').type('a').wait(2000)
          cy.verificateColorRed(`Please enter a valid discord username. Discord username must contain at least 3 characters.`, '[data-cy="field-input-discord-user-name"]')
          cy.get('#website').type('a')
          cy.contains('Profile details').parent().find('button').click()
          cy.verificateColorRed(`Please enter a valid URL. URL must contain 'https://'.`, '[data-cy="field-input-website"]')
          cy.get('#github').type('a')
          cy.contains('Profile details').parent().find('button').click()
          cy.verificateColorRed(`Please enter a valid URL. URL must contain 'https://'.`, '[data-cy="field-input-github"]')
          cy.get('#twitter').type('a')
          cy.contains('Profile details').parent().find('button').click()
          cy.verificateColorRed(`Please enter a valid URL. URL must contain 'https://'.`, '[data-cy="field-input-twitter"]')
      })
    
    
    it('Skills test - color verification', () => {
        cy.intercept('GET', '**/v2/me', {fixture: 'mockingOnlySkills.json'} ).as('SkillMock')  //uncomment only if done separately from other tests - change 'it' to 'it.only'
        cy.get('#skills').parent().contains('JavaScript').type('{selectall}{backspace}')
        cy.contains('Profile details').parent().find('button').click()
        cy.get(`.lc-multiselect-head`).scrollIntoView().and('have.css', 'border-color', 'rgb(255, 76, 77)')
        cy.contains('Please enter a valid skills. Skills cannot be empty.').scrollIntoView().should('have.css', 'color', 'rgb(255, 76, 77)')
    })
})