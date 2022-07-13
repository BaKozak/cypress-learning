const formsContents = [
  'Account ID',
  'Organization ID',
  'Full Name',
  'Job Title',
  'Company Name',
  'Skills',
  'Short Bio',
  'Preferred Contact Email',
  'Discord Username',
  'My Website URL',
  'GitHub URL',
  'Twitter URL',
  'Join Discord!',
  'What brings you to LiveChat Developer Program?'
]       //learn how to make list of variable(??)

describe('Login and positive tests on My Profile Developer', () => {

    beforeEach('', () => {
      cy.intercept('GET', '**/v2/me', {fixture: 'mockingDevPro.json'} ).as('mocker')        // have to get more info about how interpecting works
      cy.loginToApp()
    })

    context('Developer profile - functionalities', () => {

      beforeEach('', () => {          //how beforeEach works inside context or its
        cy.visit('https://developers.livechat.com/console/profile')       
        cy.intercept('https://dev-platform.livechatinc.com/v2/me'
        ).as('profileInfo')
        //cy.wait('@profileInfo')
      })

      it('functionalities - accessing My Developer Profile', () => {
        // make it shorter/better
        cy.contains('Account ID').should('be.visible')
        cy.contains('Organization ID').should('be.visible')
        cy.contains('Full Name').scrollIntoView().should('be.visible')
        cy.contains('Job Title').should('be.visible')
        cy.contains('Company Name').should('be.visible')
        cy.contains('Skills').should('be.visible')
        cy.contains('Short Bio').should('be.visible')
        cy.contains('Preferred Contact Email').scrollIntoView().should('be.visible')
        cy.contains('Discord Username').should('be.visible')
        cy.contains('My Website URL').should('be.visible')
        cy.contains('GitHub URL').should('be.visible')
        cy.contains('Twitter URL').should('be.visible')
        cy.contains('Join Discord!').scrollIntoView().should('be.visible')
        cy.contains('What brings you to LiveChat Developer Program?').should('be.visible')
      })

      it('Functionalities - copy account ID ', () => {

        // cy.get('#accountID').within(() => {
        //   cy.contains('Copy').click().should('have.text', 'Copied!')
        // })     //ANALYZE

        cy.get('#accountID').siblings().contains('Copy').click().wait(50).should('have.text', "Copy manually")  //check if is working
        // write code to check if the account ID has decidaded number of characters - selectionStart: 36
      })

      it('Functionalities - copy and validation organization ID ', () => {

        cy.get('#organizationID').siblings().contains('Copy').click().wait(50).should('have.text', "Copy manually")  //check if is working
        // write code to check if the organization ID has decidaded number of characters - selectionStart: 36
      })
    })

    context('Developer profile - mocking ', () => {
      
      it.only('Mocking', () => {

        cy.visit('https://developers.livechat.com/console/profile')

        cy.get('#name').should('have.text', 'BartoszMOCK') //can't find the text that was generated through mocking
        cy.contains('#jobTitle').should('have.text', 'TesterMOCK')
        cy.contains('#company').should('have.text', 'Best')
        cy.contains('.lc-multiselect-head__items').should('have.text', 'JavaScript')
        cy.contains('#bio').should('have.text', 'Sprawdzam Mocking')
        cy.contains('#website').should('have.text', 'I have none')
        cy.contains('#twitter').should('have.text', 'dont use it')
        cy.contains('#contactEmail').should('have.text', 'private')
      })
    })

    context('Developer profile - discord transfer - validation', () => {

      it('Discord form', () => {
        // add check if redirecting to new adress is the correct one
        cy.visit('https://developers.livechat.com/console/profile')
        cy.contains(`You can now join our developer community. We are waiting for you!`).parent().find('button')//.click()   --// to work uncomment ".click()"

      })
    })

    context('Developer profile - purpose change - validation', () => {
      //incomplete
      it('Purpose', () => {
        cy.contains('What brings you to LiveChat Developer Program?').parent()
        cy.get('[for="radio-earn"]') 
      })
    })
  })