//import faker from 'faker'
import { faker } from '@faker-js/faker';

const key = [
    {
        testCase: 'Developer name - > 64',
        locator: '#name',
        content: faker.random.alphaNumeric(65),
        validatorMessage: 'Please enter a valid Full Name. Full Name cannot contain more than 64 characters.',
    },
    {
        testCase: 'Developer job title - > 128',
        locator: '#jobTitle',
        content: faker.random.alphaNumeric(129),
        validatorMessage: 'Please enter a valid Job Title. Job Title cannot contain more than 128 characters.',
    },
    {
        testCase: 'Developer company - > 64',
        locator: '#company',
        content: faker.random.alphaNumeric(65),
        validatorMessage: `Please enter a valid Company Name. Company Name cannot contain more than 64 characters.`,
    },
    {
        testCase: 'Developer biography - > 513',
        locator: '#bio',
        content: faker.random.alphaNumeric(513),
        validatorMessage: 'Please enter a valid Short bio. Short bio cannot contain more than 512 characters.',
    },
    {
        testCase: 'Developer Contact Email - missing "@" ',
        locator: '#contactEmail',
        content: faker.random.alphaNumeric(10),
        validatorMessage: `Please enter a valid Preferred Contact Email`,
    },
    {
        testCase: 'Developer Discord User Name - < 3',
        locator: '#discordUserName',
        content: faker.random.alphaNumeric(1),
        validatorMessage: `Please enter a valid discord username. Discord username must contain at least 3 characters.`,
    },
    {
        testCase: 'Developer website URL - no "https://" >',
        locator: '#website',
        content: faker.random.alphaNumeric(5),
        validatorMessage: `Please enter a valid URL. URL must contain 'https://'.`,
    },
    {
        testCase: 'Developer github URL - no "https://" >',
        locator: '#github',
        content: faker.random.alphaNumeric(5),
        validatorMessage: `Please enter a valid URL. URL must contain 'https://'.`,
    },
    {
        testCase: 'Developer twitter URL - no "https://" >',
        locator: '#twitter',
        content: faker.random.alphaNumeric(5),
        validatorMessage: `Please enter a valid URL. URL must contain 'https://'.`,
    }
]

describe('Red colors of input fields and notifications', () => {

    before('', () => {
        cy.visit("https://developers.livechat.com/console/profile")
        cy.loginToApp()
    })

    it('Typing fields - Developer  no Full Name - color verification', () => {
        cy.get('#name').clear()
        cy.contains('Profile details').parent().find('button').click()
        cy.verificateColorRed(`Please enter a valid Full Name. Full Name cannot be empty.`, '#name')
    })

        key.forEach(state => {
            it(`Typing fields - ${state.testCase} - color verification `, () => {
                cy.get(state.locator).clear().type(state.content)
                cy.contains('Profile details').parent().find('button').click()
                cy.verificateColorRed(state.validatorMessage, state.locator)
            })
        })

    
    it('Skills test - color verification', () => {
        cy.intercept('GET', '**/v2/me', {fixture: 'mockingOnlySkills.json'} ).as('SkillMock')  //uncomment only if done separately from other tests - change 'it' to 'it.only'
        cy.get('#skills').parent().contains('JavaScript').type('{selectall}{backspace}')
        cy.contains('Profile details').parent().find('button').click()
        cy.get(`.lc-multiselect-head`).scrollIntoView().and('have.css', 'border-color', 'rgb(255, 76, 77)')
        cy.contains('Please enter a valid skills. Skills cannot be empty.').scrollIntoView().should('have.css', 'color', 'rgb(255, 76, 77)')
    })
})