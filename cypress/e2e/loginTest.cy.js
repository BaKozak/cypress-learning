
describe('Login and positive tests on My Profile Developer', () => {


    before('', () => {
      cy.loginToApp()
    })

    context('Developer profile - functionalities', () => {

      beforeEach('', () => {
        cy.visit('https://developers.livechat.com/console/profile')

        cy.intercept('https://dev-platform.livechatinc.com/v2/me'
        ).as('profileInfo')
        //cy.wait('@profileInfo')
      })

      it('functionalities - accessing My Developer Profile', () => {


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

      it.only('Functionalities - copy account ID ', () => {

        // cy.get('#accountID').within(() => {
        //   cy.contains('Copy').click().should('have.text', 'Copied!')
        // })

        cy.get('#accountID').siblings().contains('Copy').click().wait(50).should('have.text', "Copy manually")
      })

      it.only('Functionalities - copy organization ID ', () => {

        cy.get('#organizationID').siblings().contains('Copy').click().wait(50).should('have.text', "Copy manually")
      })
    })

    context('Developer profile - validatiors', () => {
    })
  })

