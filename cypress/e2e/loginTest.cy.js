
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
]

const id = [
  { testCase: 'account id',
    idType: '#accountID'},
  { testCase: 'organization id',
    idType: '#organizationID'}
]

describe('Login and positive tests on My Profile Developer', () => {

    before('', () => {
      cy.intercept('GET', '**/v2/me', {fixture: 'mockingDevPro.json'} ).as('mocker')
      cy.visit("https://developers.livechat.com/console/profile")
      cy.loginToApp()
    })

    context('Developer profile - functionalities', () => {

      it('functionalities - accessing My Developer Profile', () => {
        formsContents.forEach(element => cy.contains(element).scrollIntoView().should('be.visible'));
      })

      id.forEach(state =>{
        it(`Functionalities - copy ${state.testCase}`, () => {
          cy.get(state.idType).siblings().contains('Copy').click().wait(50).should('have.text', "Copy manually")  //check if is working
       })        
      })

    context('Developer profile - mocking ', () => {
      
      it('Mocking', () => {

        cy.get('#name').should('have.value', 'Creed Bratton')
        cy.get('#company').should('have.value', 'Paper Company')
        cy.get('#skills').children().first().invoke('prop', 'textContent').should('contain', 'JavaScript') //need to analyze
        cy.get('#bio').should('have.value', 'All I do is so I can go scuba.')
        cy.get('#website').should('have.value', 'www.creedthought.gov.www/creedthoughts')
        cy.get('#twitter').should('have.value', 'dont use it')
        cy.get('#contactEmail').should('have.value', "ilikecircuses@dundermifflin.com")
      })
    })

    context('Developer profile - discord transfer - validation', () => {

      it('Discord form', () => {
        // CODE FINISHED //MOVE TO BE LAST TEST
        cy.contains(`You can now join our developer community. We are waiting for you!`).parent().find('button').then( DevCom => {
          cy.wrap(DevCom).parent().invoke('prop', 'href').should('include', 'https://discord.gg')
        })
      })
    })

    context('Developer profile - purpose change - validation', () => {
      //incomplete
      //1. Dodac dane wejsciowe w postaci mocka na /surveys
      //2. Zaznaczyc inny field
      //3. Zdefiniuj nowego mocka na wysylanei danych do surveys
      //5. Kliknij zapisz
      //6. sprawdz rezultat
      it.only('Purpose', () => {
        cy.contains('What brings you to LiveChat Developer Program?').parent().parent().then( purpose => {
          cy.wrap(purpose).find('#radio-earn').check({force: true})
          cy.wrap(purpose).contains('Save changes').click()
          cy.wrap(purpose).find('#radio-other').check({force: true})
        })
      })
    })
  })
})