
describe('Login and positive tests on My Profile Developer', () => {

    beforeEach('logging in', () => {
      cy.loginToApp()
    })

    it('accessing My Developer Profile', () => {
      cy.get('.css-1v1v4wl').find('.avatar').click()
      cy.get('.css-18i1gyy').first().click()
      cy.get('.css-96qgqv').eq(1).then( acDet  => {
        cy.wrap(acDet).find('#name').clear().type('Creed Bratton')
        cy.wrap(acDet).find('#jobTitle').clear().type('Quabity Ashuance')
        cy.wrap(acDet).find('#company').clear().type('Paper Company')
        cy.wrap(acDet).find('#skills').click()
        cy.wrap(acDet).find('#JavaScript').click()
        cy.wrap(acDet).find('#Management').click()
        // cy.wrap(acDet).find(`#C++`).click() //cos nie znajduje id
        // cy.wrap(acDet).find('#Research skills').click() // ta sam sytuacja co pozywej tylko podejrzewam ze to wina spacji?
        // cy.wrap(acDet).find('#Strategic thinking').click() // ta sama sytuacja ze spacja jest
        cy.wrap(acDet).find('.lc-multiselect-head').type('{selectall}{backspace}')  //tylko usuwa jedno
      })
    })
  })
  