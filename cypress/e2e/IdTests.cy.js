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

context('ID Fields - validation', () => {
  before('', () => {
    cy.visit("https://developers.livechat.com/console/profile")
    cy.loginToApp()
  })

  it(`functionalities - validation of ID's visibility`, () => {
    formsContents.forEach(element => cy.contains(element).scrollIntoView().should('be.visible'));
  })

  it(`functionalities - validation of showing info of copying text from ID's `, () => {
    id.forEach(state =>{
      it(`Functionalities - copy ${state.testCase}`, () => {
        cy.get(state.idType).siblings().contains('Copy').click().wait(50).should('have.text', "Copy manually")  //ANALIZA
      })
    })
  })
})