
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
        cy.intercept('GET', '**/v2/me', {fixture: 'mockingDevPro.json'} ).as('mocker')
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
      it('Purpose', () => {

        cy.intercept('GET', '**/v2/me', {fixture: 'mockingDevPro.json'} ).as('mocker')
        cy.wait('@mocker')
        cy.intercept('POST', '**/v2/survey', {status: 200}).as('newMocker')
        cy.wait(3000)
        cy.get('#radio-earn').scrollIntoView().check({force: true})
        cy.contains('Save changes').scrollIntoView().click()
        cy.wait('@newMocker')
        cy.contains('What brings you to LiveChat Developer Program?').parent().parent().find('button').should('be.disabled')
      })
    })
  })


  describe('Developer profile - Unacceptabled values and checking color of --- komunikatów odrzucenia', () => {

    context('Minimal and Maximal length of typing fields - color veryfication', () => {
    
      it('', () => {
        cy.get('#name').clear()
        cy.contains('Profile details').parent().find('button').click()
        cy.verificateColorRed('Please enter a valid Full Name. Full Name cannot be empty.','[data-cy="field-input-name"]')
        cy.get('#name').type('JimothyHalpertPamBeeslyDwightSchruteAndrewBernardStanleyHudsonRyanHowardPhyllisVanceAngelaMartinOscarMartinezKellyKapoorTobyFlendersonMeredithPalmerCreeBratton')
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
        cy.get('#contactEmail').type(`a`)
        cy.contains('Profile details').parent().find('button').click()
        cy.get('#discordUserName').type('ab')
        cy.verificateColorRed('Please enter a valid discord username. Discord username must contain at least 3 characters.', '[data-cy="field-input-discord-user-name"]')
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


      it('Skills test - color veryfication', () => {
        cy.intercept('GET', '**/v2/me', {fixture: 'mockingOnlySkills.json'} ).as('SkillMock')
        cy.get('#skills').parent().contains('JavaScript').type('{selectall}{backspace}')
        cy.contains('Profile details').parent().find('button').click()
        cy.get(`.lc-multiselect-head`).scrollIntoView().and('have.css', 'border-color', 'rgb(255, 76, 77)')
        cy.contains('Please enter a valid skills. Skills cannot be empty.').scrollIntoView().should('have.css', 'color', 'rgb(255, 76, 77)')
      })
    })
  })
})