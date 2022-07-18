const idAnwsers = [
    {
        validationName: 'Full Name',
        Locator: '#name',
        Anwser: 'Creed Bratton'
    },
    {
        validationName: `Company Name`,
        Locator: '#company',
        Anwser: 'Paper Company'
    },
    {
        validationName: `Biography`,
        Locator: '#bio',
        Anwser: 'All I do is so I can go scuba.'
    },
    {
        validationName: `Discord`,
        Locator: '#discordUserName',
        Anwser: 'WilliamCharlesSchneider#0111'
    },
    {
        validationName: `Website`,
        Locator: '#website',
        Anwser: 'www.creedthought.gov.www/creedthoughts'
    },
    {
        validationName: `Twitter`,
        Locator: '#twitter',
        Anwser: 'dont use it'
    },
    {
        validationName: `Contact Email`,
        Locator: '#contactEmail',
        Anwser: "ilikecircuses@dundermifflin.com"
    }
    
]

describe('My Profile Developer - Profile Details - validation of Fields', () => {

    before('', () => {
        cy.visit("https://developers.livechat.com/console/profile")
        cy.intercept('GET', '**/v2/me', {fixture: 'mockingDevPro.json'} ).as('developerProfileMock')
        cy.loginToApp()
    })
    

        idAnwsers.forEach(state => {
            it(`Mocking check - ${state.validationName} `, () => {
                cy.get(state.Locator).scrollIntoView().should('have.value', state.Anwser)
            })
        })

})